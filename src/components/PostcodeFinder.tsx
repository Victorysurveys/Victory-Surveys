import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, ChevronDown } from "lucide-react";

interface Address {
  line1: string;
  line2: string;
  city: string;
  county: string;
  postcode: string;
}

interface PostcodeFinderProps {
  id: string;
  label: string;
  required?: boolean;
  value: Address;
  onChange: (address: Address) => void;
  labelClassName?: string;
  inputClassName?: string;
}

interface PostcodeResult {
  postcode: string;
  city: string;
  county: string;
  district: string;
  ward: string;
}

const PostcodeFinder = ({
  id,
  label,
  required,
  value,
  onChange,
  labelClassName = "",
  inputClassName = "",
}: PostcodeFinderProps) => {
  const [searchPostcode, setSearchPostcode] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [showManual, setShowManual] = useState(false);
  const [postcodeResult, setPostcodeResult] = useState<PostcodeResult | null>(null);
  const [showHousePrompt, setShowHousePrompt] = useState(false);
  const [houseInput, setHouseInput] = useState("");
  const [addressConfirmed, setAddressConfirmed] = useState(false);

  const handleSearch = async () => {
    if (!searchPostcode.trim()) return;
    setIsSearching(true);
    setNotFound(false);
    setShowHousePrompt(false);
    setAddressConfirmed(false);
    setPostcodeResult(null);

    try {
      const res = await fetch(
        `https://api.postcodes.io/postcodes/${encodeURIComponent(searchPostcode.trim())}`
      );
      const data = await res.json();

      if (data.status === 200 && data.result) {
        const r = data.result;
        const result: PostcodeResult = {
          postcode: r.postcode,
          city: r.admin_ward || r.parish || "",
          county: r.admin_county || r.admin_district || "",
          district: r.admin_district || "",
          ward: r.admin_ward || "",
        };
        setPostcodeResult(result);
        setShowHousePrompt(true);
      } else {
        setNotFound(true);
        setShowManual(true);
      }
    } catch {
      setNotFound(true);
      setShowManual(true);
    } finally {
      setIsSearching(false);
    }
  };

  const handleConfirmAddress = () => {
    if (!postcodeResult || !houseInput.trim()) return;
    onChange({
      line1: houseInput.trim(),
      line2: "",
      city: postcodeResult.city,
      county: postcodeResult.county,
      postcode: postcodeResult.postcode,
    });
    setAddressConfirmed(true);
    setShowHousePrompt(false);
    setShowManual(true);
  };

  const handleFieldChange = (field: keyof Address, val: string) => {
    onChange({ ...value, [field]: val });
  };

  const handleReset = () => {
    setSearchPostcode("");
    setPostcodeResult(null);
    setShowHousePrompt(false);
    setAddressConfirmed(false);
    setHouseInput("");
    setShowManual(false);
    setNotFound(false);
    onChange({ line1: "", line2: "", city: "", county: "", postcode: "" });
  };

  return (
    <div className="space-y-3">
      <Label htmlFor={`${id}-search`} className={labelClassName}>
        {label} {required && "*"}
      </Label>
      <div className="flex gap-2">
        <Input
          id={`${id}-search`}
          value={searchPostcode}
          onChange={(e) => setSearchPostcode(e.target.value)}
          placeholder="Enter postcode to find address"
          className={inputClassName}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
        />
        <Button
          type="button"
          variant="secondary"
          onClick={handleSearch}
          disabled={isSearching}
          className="shrink-0 gap-1"
        >
          <Search className="w-4 h-4" />
          {isSearching ? "Searching..." : "Find"}
        </Button>
      </div>

      {/* Postcode found — ask for house name/number */}
      {showHousePrompt && postcodeResult && (
        <div className="space-y-3 bg-muted/30 border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">
            Postcode found: <span className="font-semibold text-foreground">{postcodeResult.postcode}</span>
            {" — "}{postcodeResult.ward}, {postcodeResult.county}
          </p>
          <div>
            <Label htmlFor={`${id}-house`} className={labelClassName}>
              Enter your house name or number *
            </Label>
            <div className="flex gap-2 mt-1">
              <Input
                id={`${id}-house`}
                value={houseInput}
                onChange={(e) => setHouseInput(e.target.value)}
                placeholder="e.g. 42 or Rose Cottage"
                className={inputClassName}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleConfirmAddress();
                  }
                }}
              />
              <Button
                type="button"
                variant="default"
                onClick={handleConfirmAddress}
                disabled={!houseInput.trim()}
                className="shrink-0 gap-1"
              >
                <ChevronDown className="w-4 h-4" />
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}

      {notFound && (
        <p className="text-sm text-destructive">
          Postcode not found. Please enter your address manually below.
        </p>
      )}

      {!showManual && !showHousePrompt && (
        <button
          type="button"
          onClick={() => setShowManual(true)}
          className="text-sm text-primary underline hover:text-primary/80"
        >
          Enter address manually
        </button>
      )}

      {/* Confirmed address or manual entry fields */}
      {showManual && (
        <div className="space-y-3 pt-1">
          {addressConfirmed && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-primary font-medium">✓ Address selected</p>
              <button
                type="button"
                onClick={handleReset}
                className="text-sm text-muted-foreground underline hover:text-foreground"
              >
                Change address
              </button>
            </div>
          )}
          <div>
            <Label htmlFor={`${id}-line1`} className={labelClassName}>
              Address line 1 {required && "*"}
            </Label>
            <Input
              id={`${id}-line1`}
              required={required}
              value={value.line1}
              onChange={(e) => handleFieldChange("line1", e.target.value)}
              placeholder="House number and street"
              className={`mt-1 ${inputClassName}`}
            />
          </div>
          <div>
            <Label htmlFor={`${id}-line2`} className={labelClassName}>
              Address line 2
            </Label>
            <Input
              id={`${id}-line2`}
              value={value.line2}
              onChange={(e) => handleFieldChange("line2", e.target.value)}
              placeholder="Flat, apartment, etc. (optional)"
              className={`mt-1 ${inputClassName}`}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <div>
              <Label htmlFor={`${id}-city`} className={labelClassName}>
                Town / City {required && "*"}
              </Label>
              <Input
                id={`${id}-city`}
                required={required}
                value={value.city}
                onChange={(e) => handleFieldChange("city", e.target.value)}
                placeholder="Town or city"
                className={`mt-1 ${inputClassName}`}
              />
            </div>
            <div>
              <Label htmlFor={`${id}-county`} className={labelClassName}>
                County
              </Label>
              <Input
                id={`${id}-county`}
                value={value.county}
                onChange={(e) => handleFieldChange("county", e.target.value)}
                placeholder="County"
                className={`mt-1 ${inputClassName}`}
              />
            </div>
            <div>
              <Label htmlFor={`${id}-postcode`} className={labelClassName}>
                Postcode {required && "*"}
              </Label>
              <Input
                id={`${id}-postcode`}
                required={required}
                value={value.postcode}
                onChange={(e) => handleFieldChange("postcode", e.target.value)}
                placeholder="SW1A 1AA"
                className={`mt-1 ${inputClassName}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostcodeFinder;

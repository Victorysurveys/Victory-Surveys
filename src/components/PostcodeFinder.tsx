import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

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
  const [addressFound, setAddressFound] = useState(false);

  const handleSearch = async () => {
    if (!searchPostcode.trim()) return;
    setIsSearching(true);
    setNotFound(false);
    setAddressFound(false);

    try {
      // Step 1: Look up postcode to get coordinates + area info
      const postcodeRes = await fetch(
        `https://api.postcodes.io/postcodes/${encodeURIComponent(searchPostcode.trim())}`
      );
      const postcodeData = await postcodeRes.json();

      if (postcodeData.status !== 200 || !postcodeData.result) {
        setNotFound(true);
        setShowManual(true);
        return;
      }

      const r = postcodeData.result;
      const lat = r.latitude;
      const lon = r.longitude;
      const town = r.admin_ward || r.parish || "";
      const county = r.admin_county || r.admin_district || "";
      const postcode = r.postcode;

      // Step 2: Reverse geocode coordinates to get street name
      let road = "";
      try {
        const nominatimRes = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1&zoom=17`,
          { headers: { "User-Agent": "VictorySurveying/1.0" } }
        );
        const nominatimData = await nominatimRes.json();
        road = nominatimData?.address?.road || "";
      } catch {
        // Road lookup failed — not critical, continue without it
      }

      onChange({
        line1: road,
        line2: "",
        city: town,
        county: county,
        postcode: postcode,
      });
      setAddressFound(true);
      setShowManual(true);
    } catch {
      setNotFound(true);
      setShowManual(true);
    } finally {
      setIsSearching(false);
    }
  };

  const handleFieldChange = (field: keyof Address, val: string) => {
    onChange({ ...value, [field]: val });
  };

  const handleReset = () => {
    setSearchPostcode("");
    setAddressFound(false);
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

      {notFound && (
        <p className="text-sm text-destructive">
          Postcode not found. Please enter your address manually below.
        </p>
      )}

      {!showManual && !addressFound && (
        <button
          type="button"
          onClick={() => setShowManual(true)}
          className="text-sm text-primary underline hover:text-primary/80"
        >
          Enter address manually
        </button>
      )}

      {showManual && (
        <div className="space-y-3 pt-1">
          {addressFound && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-primary font-medium">
                ✓ Address found — add your house name/number below
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="text-sm text-muted-foreground underline hover:text-foreground"
              >
                Change
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

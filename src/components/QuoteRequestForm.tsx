import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import PostcodeFinder from "@/components/PostcodeFinder";

const surveyTypes = [
  "Home Buyer / Condition Survey",
  "Single Defect Report / Item",
  "Consultancy Services",
  "Not sure — please advise",
];

interface AgentBranch {
  name: string;
  phone: string;
  email: string;
}

const localAgentBranches: AgentBranch[] = [
  { name: "Abbotts — Great Yarmouth", phone: "01493 331333", email: "greatyarmouth@abbotts.co.uk" },
  { name: "Abbotts — Norwich", phone: "01603 629292", email: "norwich@abbotts.co.uk" },
  { name: "Abbotts — Lowestoft", phone: "01502 531222", email: "lowestoft@abbotts.co.uk" },
  { name: "Allen & Harris — Norwich", phone: "01603 760532", email: "norwich@allenandharris.co.uk" },
  { name: "Arnolds Keys — Norwich", phone: "01603 620551", email: "norwich@arnoldskeys.com" },
  { name: "Arnolds Keys — North Walsham", phone: "01692 402357", email: "northwalsham@arnoldskeys.com" },
  { name: "Bycroft — Great Yarmouth", phone: "01493 844484", email: "info@bycroftestateagents.co.uk" },
  { name: "Bycroft — Caister-on-Sea", phone: "01493 844484", email: "info@bycroftestateagents.co.uk" },
  { name: "Bycroft — Gorleston", phone: "01493 844484", email: "info@bycroftestateagents.co.uk" },
  { name: "Durrants — Beccles", phone: "01502 712122", email: "beccles@durrants.com" },
  { name: "Durrants — Bungay", phone: "01502 712122", email: "beccles@durrants.com" },
  { name: "Durrants — Acle", phone: "01502 712122", email: "info@durrants.com" },
  { name: "Ewemove — Great Yarmouth", phone: "01493 300014", email: "greatyarmouth@ewemove.com" },
  { name: "Ewemove — Norwich", phone: "01603 306014", email: "norwich@ewemove.com" },
  { name: "Fine & Country — Norwich", phone: "01603 221888", email: "norwich@fineandcountry.com" },
  { name: "Fox & Sons — Lowestoft", phone: "01502 573947", email: "lowestoft@foxandsons.co.uk" },
  { name: "Howards — Great Yarmouth", phone: "01493 665005", email: "greatyarmouth@howards.co.uk" },
  { name: "Howards — Gorleston", phone: "01493 665005", email: "gorleston@howards.co.uk" },
  { name: "Howards — Caister-on-Sea", phone: "01493 665005", email: "contactus@howards.co.uk" },
  { name: "Lacy Scott & Knight — Beccles", phone: "01502 712122", email: "beccles@lsk.co.uk" },
  { name: "Minors & Brady — Great Yarmouth", phone: "01493 603783", email: "info@minorsandbrady.co.uk" },
  { name: "Minors & Brady — Norwich", phone: "01603 783088", email: "info@minorsandbrady.co.uk" },
  { name: "Minors & Brady — Gorleston", phone: "01493 603783", email: "info@minorsandbrady.co.uk" },
  { name: "Purplebricks — Norfolk", phone: "0800 810 8008", email: "hello@purplebricks.com" },
  { name: "Purplebricks — Suffolk", phone: "0800 810 8008", email: "hello@purplebricks.com" },
  { name: "Rialto — Great Yarmouth", phone: "01493 330299", email: "info@rialtoproperty.co.uk" },
  { name: "Savills — Norwich", phone: "01603 229229", email: "norwich@savills.com" },
  { name: "Sowerbys — Norwich", phone: "01603 761441", email: "norwich@sowerbys.com" },
  { name: "Sowerbys — North Norfolk", phone: "01328 730340", email: "burnhammarket@sowerbys.com" },
  { name: "Stobart & Hurrell — Acle", phone: "01493 751007", email: "info@stobarthurrell.co.uk" },
  { name: "Strutt & Parker — Norwich", phone: "01603 617431", email: "norwich@struttandparker.com" },
  { name: "William H Brown — Great Yarmouth", phone: "01493 331044", email: "greatyarmouth@williamhbrown.co.uk" },
  { name: "William H Brown — Norwich", phone: "01603 950084", email: "norwich@williamhbrown.co.uk" },
  { name: "William H Brown — Lowestoft", phone: "01502 564822", email: "lowestoft@williamhbrown.co.uk" },
  { name: "William H Brown — Gorleston", phone: "01493 331044", email: "gorleston@williamhbrown.co.uk" },
];

const propertyTypes = [
  "Detached house",
  "Semi-detached house",
  "Terraced house",
  "Bungalow",
  "Flat / Apartment",
  "Cottage",
  "New build",
  "Listed building",
  "Other",
];

const emptyAddress = { line1: "", line2: "", city: "", county: "", postcode: "" };

const QuoteRequestForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showManualAgent, setShowManualAgent] = useState(false);
  const [formData, setFormData] = useState({
    surveyType: "Not sure — please advise",
    fullName: "",
    email: "",
    phone: "",
    yourAddress: { ...emptyAddress },
    propertyAddress: { ...emptyAddress },
    propertyType: "",
    propertyPrice: "",
    numberOfBedrooms: "",
    agentName: "",
    agentPhone: "",
    agentEmail: "",
    vendorName: "",
    additionalInfo: "",
  });


  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Quote request sent!",
        description: "We'll be in touch within 24 hours with your personalised quote.",
      });
      setFormData({
        surveyType: "Not sure — please advise",
        fullName: "",
        email: "",
        phone: "",
        yourAddress: { ...emptyAddress },
        propertyAddress: { ...emptyAddress },
        propertyType: "",
        propertyPrice: "",
        numberOfBedrooms: "",
        agentName: "",
        agentPhone: "",
        agentEmail: "",
        vendorName: "",
        additionalInfo: "",
      });
      setShowManualAgent(false);
    }, 1000);
  };

  const labelClass = "text-brand-dark-text";
  const inputClass = "bg-background text-foreground";

  return (
    <section id="quote-request" className="py-16 md:py-20 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark-text text-center">
          Request a Quote
        </h2>
        <p className="mt-2 text-center text-brand-dark-text-muted mb-10">
          Fill in the details below and we'll get back to you with a personalised quote.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Survey Type */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-brand-dark-text border-b border-brand-dark-text-muted/30 pb-2">
              Type of Survey
            </h3>
            <div>
              <Label htmlFor="surveyType" className={labelClass}>Survey type interested in *</Label>
              <Select
                value={formData.surveyType}
                onValueChange={(val) => handleChange("surveyType", val)}
                required
              >
                <SelectTrigger aria-label="Survey type" className={`mt-1 ${inputClass}`}>
                  <SelectValue placeholder="Select a survey type" />
                </SelectTrigger>
                <SelectContent>
                  {surveyTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Your Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-dark-text border-b border-brand-dark-text-muted/30 pb-2">
              Your Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName" className={labelClass}>Full name *</Label>
                <Input
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="John Smith"
                  className={`mt-1 ${inputClass}`}
                />
              </div>
              <div>
                <Label htmlFor="email" className={labelClass}>Email address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="john@example.com"
                  className={`mt-1 ${inputClass}`}
                />
              </div>
              <div>
                <Label htmlFor="phone" className={labelClass}>Phone number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="07xxx xxxxxx"
                  className={`mt-1 ${inputClass}`}
                />
              </div>
            </div>
            <PostcodeFinder
              id="yourAddress"
              label="Your address"
              required
              value={formData.yourAddress}
              onChange={(addr) => setFormData((prev) => ({ ...prev, yourAddress: addr }))}
              labelClassName={labelClass}
              inputClassName={inputClass}
            />
          </div>

          {/* Property Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-dark-text border-b border-brand-dark-text-muted/30 pb-2">
              Property Details
            </h3>
            <PostcodeFinder
              id="propertyAddress"
              label="Property address"
              required
              value={formData.propertyAddress}
              onChange={(addr) => setFormData((prev) => ({ ...prev, propertyAddress: addr }))}
              labelClassName={labelClass}
              inputClassName={inputClass}
            />
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="propertyType" className={labelClass}>Property type</Label>
                <Select
                  value={formData.propertyType}
                  onValueChange={(val) => handleChange("propertyType", val)}
                >
                  <SelectTrigger aria-label="Property type" className={`mt-1 ${inputClass}`}>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="propertyPrice" className={labelClass}>Property price (if known)</Label>
                <Select
                  value={formData.propertyPrice}
                  onValueChange={(val) => handleChange("propertyPrice", val)}
                >
                  <SelectTrigger aria-label="Property price range" className={`mt-1 ${inputClass}`}>
                    <SelectValue placeholder="Select price range" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "Under £100,000",
                      "£100,000 – £150,000",
                      "£150,000 – £200,000",
                      "£200,000 – £250,000",
                      "£250,000 – £300,000",
                      "£300,000 – £400,000",
                      "£400,000 – £500,000",
                      "£500,000 – £750,000",
                      "£750,000 – £1,000,000",
                      "£1,000,000+",
                      "Not sure",
                    ].map((range) => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="numberOfBedrooms" className={labelClass}>Number of bedrooms</Label>
                <Select
                  value={formData.numberOfBedrooms}
                  onValueChange={(val) => handleChange("numberOfBedrooms", val)}
                >
                  <SelectTrigger aria-label="Number of bedrooms" className={`mt-1 ${inputClass}`}>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {["1", "2", "3", "4", "5", "6+"].map((n) => (
                      <SelectItem key={n} value={n}>{n}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Agent / Vendor Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-dark-text border-b border-brand-dark-text-muted/30 pb-2">
              Agent / Vendor Details (if known)
            </h3>

            {!showManualAgent ? (
              <div className="space-y-3">
                <div>
                  <Label htmlFor="agentBranch" className={labelClass}>Estate agent branch</Label>
                  <Select
                    value={formData.agentName}
                    onValueChange={(val) => {
                      const branch = localAgentBranches.find((b) => b.name === val);
                      if (branch) {
                        setFormData((prev) => ({
                          ...prev,
                          agentName: branch.name,
                          agentPhone: branch.phone,
                          agentEmail: branch.email,
                        }));
                      }
                    }}
                  >
                    <SelectTrigger aria-label="Estate agent branch" className={`mt-1 ${inputClass}`}>
                      <SelectValue placeholder="Select local branch" />
                    </SelectTrigger>
                    <SelectContent>
                      {localAgentBranches.map((branch) => (
                        <SelectItem key={branch.name} value={branch.name}>{branch.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <button
                  type="button"
                  onClick={() => setShowManualAgent(true)}
                  className="text-sm text-brand-dark-text underline hover:text-brand-dark-text/80"
                >
                  Enter details manually
                </button>

                {formData.agentName && (
                  <div className="grid md:grid-cols-2 gap-4 bg-muted/10 border border-border/30 rounded-lg p-4">
                    <div>
                      <Label htmlFor="agentPhone" className={labelClass}>Agent phone</Label>
                      <Input
                        id="agentPhone"
                        value={formData.agentPhone}
                        onChange={(e) => handleChange("agentPhone", e.target.value)}
                        placeholder="Phone number"
                        className={`mt-1 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <Label htmlFor="agentEmail" className={labelClass}>Agent email</Label>
                      <Input
                        id="agentEmail"
                        value={formData.agentEmail}
                        onChange={(e) => handleChange("agentEmail", e.target.value)}
                        placeholder="Email address"
                        className={`mt-1 ${inputClass}`}
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setShowManualAgent(false)}
                  className="text-sm text-brand-dark-text underline hover:text-brand-dark-text/80"
                >
                  ← Select from local branches
                </button>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="agentNameManual" className={labelClass}>Estate agent name</Label>
                    <Input
                      id="agentNameManual"
                      value={formData.agentName}
                      onChange={(e) => handleChange("agentName", e.target.value)}
                      placeholder="Agent name / branch"
                      className={`mt-1 ${inputClass}`}
                    />
                  </div>
                  <div>
                    <Label htmlFor="agentPhoneManual" className={labelClass}>Agent phone</Label>
                    <Input
                      id="agentPhoneManual"
                      value={formData.agentPhone}
                      onChange={(e) => handleChange("agentPhone", e.target.value)}
                      placeholder="Phone number"
                      className={`mt-1 ${inputClass}`}
                    />
                  </div>
                  <div>
                    <Label htmlFor="agentEmailManual" className={labelClass}>Agent email</Label>
                    <Input
                      id="agentEmailManual"
                      value={formData.agentEmail}
                      onChange={(e) => handleChange("agentEmail", e.target.value)}
                      placeholder="Email address"
                      className={`mt-1 ${inputClass}`}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="vendorName" className={labelClass}>Vendor / seller name</Label>
                <div className="flex items-center gap-3 mt-1">
                  <Input
                    id="vendorName"
                    value={formData.vendorName}
                    onChange={(e) => handleChange("vendorName", e.target.value)}
                    placeholder="Vendor name"
                    className={inputClass}
                    disabled={formData.vendorName === "Unknown / unsure"}
                  />
                </div>
                <label className="flex items-center gap-2 mt-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.vendorName === "Unknown / unsure"}
                    onChange={(e) => handleChange("vendorName", e.target.checked ? "Unknown / unsure" : "")}
                    className="accent-primary w-4 h-4"
                  />
                  <span className="text-sm text-muted-foreground">Unknown / unsure</span>
                </label>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-brand-dark-text border-b border-brand-dark-text-muted/30 pb-2">
              Additional Information
            </h3>
            <div>
              <Label htmlFor="additionalInfo" className={labelClass}>Anything else we should know?</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleChange("additionalInfo", e.target.value)}
                placeholder="Any specific concerns, access arrangements, etc."
                className={`mt-1 ${inputClass}`}
                rows={3}
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full gap-2 text-lg py-6 font-semibold"
          >
            {isSubmitting ? "Sending..." : "Submit Quote Request"}
            <Send className="w-5 h-5" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default QuoteRequestForm;

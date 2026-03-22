import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const surveyTypes = [
  "Home Buyer / Condition Survey",
  "Building Survey",
  "Buy To Let Survey",
  "New-build Snagging Inspection",
  "Property Consultancy",
  "Not sure — please advise",
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

const QuoteRequestForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    surveyType: "",
    fullName: "",
    email: "",
    phone: "",
    propertyAddress: "",
    propertyPostcode: "",
    propertyType: "",
    propertyPrice: "",
    numberOfBedrooms: "",
    agentName: "",
    agentContact: "",
    vendorName: "",
    additionalInfo: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Quote request sent!",
        description: "We'll be in touch within 24 hours with your personalised quote.",
      });
      setFormData({
        surveyType: "",
        fullName: "",
        email: "",
        phone: "",
        propertyAddress: "",
        propertyPostcode: "",
        propertyType: "",
        propertyPrice: "",
        numberOfBedrooms: "",
        agentName: "",
        agentContact: "",
        vendorName: "",
        additionalInfo: "",
      });
    }, 1000);
  };

  return (
    <section id="quote-request" className="py-16 md:py-20 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
          Request a Quote
        </h2>
        <p className="mt-2 text-center text-primary/60 mb-10">
          Fill in the details below and we'll get back to you with a personalised quote.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Survey Type */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-primary border-b border-primary/20 pb-2">
              Type of Survey
            </h3>
            <div>
              <Label htmlFor="surveyType" className="text-primary/80">Survey type interested in *</Label>
              <Select
                value={formData.surveyType}
                onValueChange={(val) => handleChange("surveyType", val)}
                required
              >
                <SelectTrigger className="mt-1 bg-background text-foreground">
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
            <h3 className="text-lg font-semibold text-primary border-b border-primary/20 pb-2">
              Your Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName" className="text-primary/80">Full name *</Label>
                <Input
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="John Smith"
                  className="mt-1 bg-background text-foreground"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-primary/80">Email address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="john@example.com"
                  className="mt-1 bg-background text-foreground"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-primary/80">Phone number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="07xxx xxxxxx"
                  className="mt-1 bg-background text-foreground"
                />
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary border-b border-primary/20 pb-2">
              Property Details
            </h3>
            <div>
              <Label htmlFor="propertyAddress" className="text-primary/80">Property address *</Label>
              <Textarea
                id="propertyAddress"
                required
                value={formData.propertyAddress}
                onChange={(e) => handleChange("propertyAddress", e.target.value)}
                placeholder="Full address of the property to be surveyed"
                className="mt-1 bg-background text-foreground"
                rows={2}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="propertyPostcode" className="text-primary/80">Postcode *</Label>
                <Input
                  id="propertyPostcode"
                  required
                  value={formData.propertyPostcode}
                  onChange={(e) => handleChange("propertyPostcode", e.target.value)}
                  placeholder="SW1A 1AA"
                  className="mt-1 bg-background text-foreground"
                />
              </div>
              <div>
                <Label htmlFor="propertyType" className="text-primary/80">Property type</Label>
                <Select
                  value={formData.propertyType}
                  onValueChange={(val) => handleChange("propertyType", val)}
                >
                  <SelectTrigger className="mt-1 bg-background text-foreground">
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
                <Label htmlFor="propertyPrice" className="text-primary/80">Property price (if known)</Label>
                <Input
                  id="propertyPrice"
                  value={formData.propertyPrice}
                  onChange={(e) => handleChange("propertyPrice", e.target.value)}
                  placeholder="£250,000"
                  className="mt-1 bg-background text-foreground"
                />
              </div>
              <div>
                <Label htmlFor="numberOfBedrooms" className="text-primary/80">Number of bedrooms</Label>
                <Select
                  value={formData.numberOfBedrooms}
                  onValueChange={(val) => handleChange("numberOfBedrooms", val)}
                >
                  <SelectTrigger className="mt-1 bg-background text-foreground">
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
            <h3 className="text-lg font-semibold text-primary border-b border-primary/20 pb-2">
              Agent / Vendor Details (if known)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="agentName" className="text-primary/80">Estate agent name</Label>
                <Input
                  id="agentName"
                  value={formData.agentName}
                  onChange={(e) => handleChange("agentName", e.target.value)}
                  placeholder="Agent name / branch"
                  className="mt-1 bg-background text-foreground"
                />
              </div>
              <div>
                <Label htmlFor="agentContact" className="text-primary/80">Agent phone / email</Label>
                <Input
                  id="agentContact"
                  value={formData.agentContact}
                  onChange={(e) => handleChange("agentContact", e.target.value)}
                  placeholder="Contact details"
                  className="mt-1 bg-background text-foreground"
                />
              </div>
              <div>
                <Label htmlFor="vendorName" className="text-primary/80">Vendor / seller name</Label>
                <Input
                  id="vendorName"
                  value={formData.vendorName}
                  onChange={(e) => handleChange("vendorName", e.target.value)}
                  placeholder="Vendor name"
                  className="mt-1 bg-background text-foreground"
                />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-primary border-b border-primary/20 pb-2">
              Additional Information
            </h3>
            <div>
              <Label htmlFor="additionalInfo" className="text-primary/80">Anything else we should know?</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleChange("additionalInfo", e.target.value)}
                placeholder="Any specific concerns, access arrangements, etc."
                className="mt-1 bg-background text-foreground"
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

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import PostcodeFinder from "@/components/PostcodeFinder";
import { supabase } from "@/integrations/supabase/client";

const surveyInterests = [
  "Home Buyer / Condition Survey",
  "Single Defect Report / Item",
  "Consultancy Services",
  "Not sure — please advise",
];

const emptyAddress = { line1: "", line2: "", city: "", county: "", postcode: "" };

const SurveyRecommender = () => {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    surveyType: "Not sure — please advise",
    propertyAddress: { ...emptyAddress },
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const addr = form.propertyAddress;
      const addrStr = [addr.line1, addr.line2, addr.city, addr.county, addr.postcode].filter(Boolean).join(", ");
      const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
        `Enquiry from ${form.name} — ${form.surveyType}`
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSurvey Interest: ${form.surveyType}\nProperty Address: ${addrStr}\n\nMessage:\n${form.message}`
      )}`;
      window.location.href = mailtoLink;
      toast.success("Opening your email client...");
      setOpen(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        surveyType: "Not sure — please advise",
        propertyAddress: { ...emptyAddress },
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
        >
          <MessageCircle className="w-5 h-5" />
          Not sure? Get in touch
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            Tell us about your property
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Fill in your details and we'll get back to you with the right advice.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          {/* Customer Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground border-b border-border pb-1">Your Details</h3>
            <div>
              <Label htmlFor="enquiry-name">Full name *</Label>
              <Input
                id="enquiry-name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Smith"
                className="mt-1"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="enquiry-email">Email *</Label>
                <Input
                  id="enquiry-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="enquiry-phone">Phone</Label>
                <Input
                  id="enquiry-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="07xxx xxxxxx"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Property Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground border-b border-border pb-1">Property Information</h3>
            <div>
              <Label htmlFor="enquiry-survey">What are you interested in?</Label>
              <Select
                value={form.surveyType}
                onValueChange={(val) => setForm({ ...form, surveyType: val })}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {surveyInterests.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <PostcodeFinder
              id="enquiryPropertyAddress"
              label="Property address"
              required={false}
              value={form.propertyAddress}
              onChange={(addr) => setForm((prev) => ({ ...prev, propertyAddress: addr }))}
            />
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="enquiry-message">Tell us more</Label>
            <Textarea
              id="enquiry-message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Any specific concerns, questions, or details about the property..."
              rows={3}
              className="mt-1"
            />
          </div>

          <Button type="submit" className="w-full gap-2" disabled={sending}>
            {sending ? "Sending..." : "Send Enquiry"}
            <Send className="w-4 h-4" />
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Your enquiry will be sent to Info@victorysurveys.co.uk
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SurveyRecommender;

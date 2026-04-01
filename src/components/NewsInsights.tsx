import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import greatYarmouthImg from "@/assets/great-yarmouth.webp";
import norwichImg from "@/assets/norwich.webp";
import suffolkImg from "@/assets/suffolk-coast.webp";

const PHONE_NUMBER = "tel:+4407874062271";

const areas = [
  {
    image: greatYarmouthImg,
    alt: "Great Yarmouth seafront and surrounding area",
    region: "Great Yarmouth & Surrounds",
    locations: ["Great Yarmouth", "Gorleston", "Caister-on-Sea"],
  },
  {
    image: norwichImg,
    alt: "Norwich city and Norfolk countryside",
    region: "Norwich & Norfolk",
    locations: ["Norwich", "North Norfolk", "Acle"],
  },
  {
    image: suffolkImg,
    alt: "Suffolk and Waveney coastline",
    region: "Suffolk & Waveney",
    locations: ["Lowestoft", "Beccles", "Bungay"],
  },
];

const NewsInsights = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const id = crypto.randomUUID();
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-enquiry",
          recipientEmail: "info@victorysurveys.co.uk",
          idempotencyKey: `coverage-${id}`,
          templateData: {
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.message,
            source: "Coverage area enquiry",
          },
        },
      });
      toast.success("Enquiry sent! We'll be in touch soon.");
      setShowEmailForm(false);
      setShowOptions(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="coverage" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Coverage</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
            Serving Norfolk & Suffolk
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Based in Great Yarmouth, we cover a wide area across East Anglia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.region}
              className="bg-card rounded-sm overflow-hidden border border-border shadow-sm flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={400}
                  height={192}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2 min-h-[3.5rem]">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  {area.region}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {area.locations.map((loc) => (
                    <li key={loc} className="text-sm text-muted-foreground">
                      {loc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 relative">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Not sure if we cover your area?</span>
            <Button
              variant="default"
              size="sm"
              onClick={() => setShowOptions(!showOptions)}
              className="gap-2"
            >
              Contact Us
            </Button>
          </div>

          {showOptions && (
            <div className="mt-3 flex gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <a href={PHONE_NUMBER}>
                <Button variant="outline" size="sm" className="gap-2">
                   Call Us
                </Button>
              </a>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => setShowEmailForm(true)}
              >
                <Mail className="w-4 h-4" />
                Email Us
              </Button>
            </div>
          )}
        </div>

        {/* Email Form Modal */}
        {showEmailForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-card rounded-xl shadow-2xl w-full max-w-md border border-border animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between p-5 border-b border-border">
                <h3 className="text-lg font-bold text-foreground">Get in Touch</h3>
                <button
                  onClick={() => setShowEmailForm(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleEmailSubmit} className="p-5 space-y-4">
                <div>
                  <Label htmlFor="contact-name" className="text-sm font-medium text-foreground">Name *</Label>
                  <Input
                    id="contact-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email" className="text-sm font-medium text-foreground">Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-phone" className="text-sm font-medium text-foreground">Phone</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="07xxx xxxxxx"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message" className="text-sm font-medium text-foreground">Message *</Label>
                  <Textarea
                    id="contact-message"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your enquiry, e.g. the area or property you need surveyed..."
                    rows={4}
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={sending}>
                  {sending ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsInsights;

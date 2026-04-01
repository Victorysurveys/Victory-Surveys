import { useState } from "react";
import { Phone, Mail, Globe, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const PHONE_NUMBER = "tel:+4407874062271";

const GetInTouch = () => {
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
          idempotencyKey: `contact-${id}`,
          templateData: {
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.message,
            source: "Get in Touch form",
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
    <section id="get-in-touch" className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Get in touch
        </h2>

        {/* Direct contact info */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href="tel:01493000000"
            className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="w-5 h-5" />
            01493 886199
          </a>
          <a
            href={PHONE_NUMBER}
            className="inline-flex items-center gap-3 text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5" />
            (+44) 07874 062271 — Jamie (Local Surveyor)
          </a>
          <a
            href="mailto:Info@victorysurveys.co.uk"
            className="inline-flex items-center gap-3 text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            Info@victorysurveys.co.uk
          </a>
          <a
            href="https://victorysurveys.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Globe className="w-5 h-5" />
            victorysurveys.co.uk
          </a>
        </div>

        {/* Contact Us button */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <Button
            size="lg"
            onClick={() => setShowOptions(!showOptions)}
            className="gap-2 text-lg px-8"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </Button>

          {showOptions && (
            <div className="flex gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
              <a href={PHONE_NUMBER}>
                <Button variant="outline" size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => setShowEmailForm(true)}
              >
                <Mail className="w-5 h-5" />
                Email Us
              </Button>
            </div>
          )}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          We will return calls outside of business hours as soon as possible.
        </p>
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
                <Label htmlFor="bottom-contact-name" className="text-sm font-medium text-foreground">Name *</Label>
                <Input
                  id="bottom-contact-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="bottom-contact-email" className="text-sm font-medium text-foreground">Email *</Label>
                <Input
                  id="bottom-contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="bottom-contact-phone" className="text-sm font-medium text-foreground">Phone</Label>
                <Input
                  id="bottom-contact-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="07xxx xxxxxx"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="bottom-contact-message" className="text-sm font-medium text-foreground">Message *</Label>
                <Textarea
                  id="bottom-contact-message"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your enquiry..."
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
    </section>
  );
};

export default GetInTouch;

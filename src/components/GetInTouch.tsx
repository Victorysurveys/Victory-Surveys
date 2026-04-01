import { useState } from "react";
import { Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const PHONE_NUMBER = "tel:+4407874062271";

const GetInTouch = () => {
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
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="get-in-touch" className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
          Get in touch
        </h2>

        {/* Direct contact info */}
        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <a
            href="tel:01493886199"
            className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="w-5 h-5" />
            01493 886199
          </a>
          <a
            href={PHONE_NUMBER}
            className="inline-flex items-center gap-3 text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
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

        {/* Inline Enquiry Form */}
        <form onSubmit={handleEmailSubmit} className="mt-10 space-y-4 max-w-md mx-auto">
          <h3 className="text-lg font-bold text-foreground text-center">Send us an enquiry</h3>
          <div>
            <Label htmlFor="touch-name" className="text-sm font-medium text-foreground">Name *</Label>
            <Input
              id="touch-name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="touch-email" className="text-sm font-medium text-foreground">Email *</Label>
            <Input
              id="touch-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="touch-phone" className="text-sm font-medium text-foreground">Phone</Label>
            <Input
              id="touch-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="07xxx xxxxxx"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="touch-message" className="text-sm font-medium text-foreground">Message *</Label>
            <Textarea
              id="touch-message"
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

        <p className="mt-6 text-sm text-muted-foreground text-center">
          We will return calls outside of business hours as soon as possible.
        </p>
      </div>
    </section>
  );
};

export default GetInTouch;

import { Phone, Mail, Globe } from "lucide-react";

const GetInTouch = () => {
  return (
    <section id="get-in-touch" className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Get in touch
        </h2>
        <p className="mt-4 text-muted-foreground">
          Please contact Victory Surveying at any time.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="tel:+4407874062271"
            className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (+44) 07874 062271
          </a>
          <a
            href="mailto:Info@victorysurveying.co.uk"
            className="inline-flex items-center gap-3 text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            Info@victorysurveying.co.uk
          </a>
          <a
            href="https://victorysurveying.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Globe className="w-5 h-5" />
            victorysurveying.co.uk
          </a>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          We will return calls outside of business hours as soon as possible.
        </p>
      </div>
    </section>
  );
};

export default GetInTouch;

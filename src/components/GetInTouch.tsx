import { Phone } from "lucide-react";

const GetInTouch = () => {
  return (
    <section id="get-in-touch" className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Get in touch
        </h2>
        <p className="mt-4 text-muted-foreground">
          Please contact our dedicated Survey Team at any time.
        </p>
        <a
          href="tel:03450301802"
          className="mt-6 inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          <Phone className="w-6 h-6" />
          0345 030 1802
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          We will return calls outside of business hours as soon as possible. Calls may be recorded and monitored.
        </p>
      </div>
    </section>
  );
};

export default GetInTouch;

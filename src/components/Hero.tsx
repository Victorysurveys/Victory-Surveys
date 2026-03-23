const heroImage = "/hero-surveying.webp";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden">
      <img
        src={heroImage}
        alt="Happy family in their home"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-hero-overlay/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="bg-brand-dark/90 rounded-sm p-8 md:p-10 max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark-text leading-tight">
            Victory Surveying
          </h1>
          <p className="mt-2 text-lg text-brand-dark-text-muted">
            Property advice so good it feels like a win
          </p>
          <p className="mt-3 text-xl font-semibold text-brand-dark-text">
            Surveys from £219*
          </p>
          <Button
            asChild
            className="mt-6 gap-2 font-semibold"
          >
            <a href="#quote-request">
              Request a quote <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

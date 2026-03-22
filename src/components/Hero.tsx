import heroImage from "@/assets/hero-surveying.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden">
      <img
        src={heroImage}
        alt="Happy family in their home"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="bg-primary/90 rounded-lg p-8 md:p-10 max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
            Surveying Services
          </h1>
          <p className="mt-3 text-lg font-semibold text-primary-foreground/90">
            Surveys from £399*
          </p>
          <Button
            asChild
            className="mt-6 bg-background text-primary hover:bg-background/90 font-semibold gap-2"
          >
            <a href="#get-in-touch">
              Get a quote <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

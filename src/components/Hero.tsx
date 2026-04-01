const heroImage = "/hero-surveying.webp";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroLogo from "@/assets/victory-logo-white.png";

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-start md:items-center justify-center gap-6">
        <img src={heroLogo} alt="Victory Surveys" className="w-full max-w-xs drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]" width={400} height={400} />
        <div className="flex flex-col gap-1 md:text-center">
          <p className="text-lg text-white drop-shadow-md">
            Property advice so good it feels like a win
          </p>
          <p className="text-xl font-semibold text-white drop-shadow-md">
            Surveys from £249*
          </p>
        </div>
        <Button
          asChild
          className="font-semibold"
        >
          <a href="#quote-request">
            Request a quote <ArrowRight className="w-4 h-4 md:hidden" />
          </a>
        </Button>
        <div className="flex flex-col sm:flex-row items-start md:items-center gap-3 text-sm text-white/80">
          <a href="tel:01493886199" className="hover:text-primary transition-colors">01493 886199</a>
          <a href="mailto:Info@victorysurveys.co.uk" className="hover:text-primary transition-colors">Info@victorysurveys.co.uk</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

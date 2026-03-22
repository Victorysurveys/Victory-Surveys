import ctaImage from "@/assets/cta-image.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden">
            <img
              src={ctaImage}
              alt="Friendly customer service"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              We're here for you
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Choosing a survey shouldn't be a daunting time for any buyer. Irrespective of which type of survey you decide to purchase, if issues are uncovered, you can obtain quotes for any necessary repairs before you purchase and even use this as a tool to negotiate the price you pay for the property.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              By deciding to carry out a survey, you'll be equipped with information that puts you in a stronger position to choose whether to proceed with the purchase or negotiate a better deal.
            </p>
            <Button asChild className="mt-8 gap-2">
              <a href="#quote-request">
                Request a quote <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhyNeedSurvey = () => {
  return (
    <section id="why-need-survey" className="py-16 md:py-20 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Why do you need a survey?
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          We understand that when you are buying a new home you want to make every penny count. It might be tempting to assume that a simple mortgage valuation will provide you with the reassurance you need regarding the condition of the property and future maintenance liabilities, but that's not what it is intended for and you could be faced with significant unplanned repair costs.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Buying a home can be one of the biggest financial commitments you are likely to make, so it is important to know as much as you can about the property you are thinking of purchasing.
        </p>
        <Button variant="outline" className="mt-8 gap-2 text-primary border-primary hover:bg-primary hover:text-primary-foreground">
          Find out more <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default WhyNeedSurvey;

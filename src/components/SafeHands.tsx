import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const points = [
  "The surveyor preparing your report will be locally based — giving you local knowledge and experience",
  "You'll be buying your property with the key facts you need to make an informed decision",
  "You're dealing with a qualified, RPSA-regulated surveying practice you can trust",
  "We specialise in residential property surveys and consultancy services",
];

const SafeHands = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          You're in safe hands
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Victory Surveying is regulated by the Residential Property Surveyors Association (RPSA) — the industry's leading body for independent residential surveyors. Choosing us means you can be confident that:
        </p>
        <ul className="mt-6 space-y-4">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="mt-8 gap-2 text-primary border-primary hover:bg-primary hover:text-primary-foreground">
          <a href="#quote-request">
            Get started <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default SafeHands;

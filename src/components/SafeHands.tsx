import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const points = [
  "The surveyor preparing your report will be locally based — giving you local knowledge and experience",
  "You'll be buying your property with the key facts you need to make an informed decision",
  "You're dealing with an experienced company backed by a trusted, established brand",
];

const SafeHands = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          You're in safe hands
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We're regulated by the Royal Institution of Chartered Surveyors (RICS). Choosing us means you can be confident that:
        </p>
        <ul className="mt-6 space-y-4">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="mt-8 gap-2 text-primary border-primary hover:bg-primary hover:text-primary-foreground">
          Find out more <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default SafeHands;

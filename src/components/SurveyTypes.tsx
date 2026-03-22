import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const surveys = [
  {
    title: "RICS Home Survey Level 2",
    description:
      "This survey provides a descriptive account of the property's condition with 'traffic light' ratings and highlights significant problems.",
  },
  {
    title: "Level 3 Home Survey",
    description:
      "The most in-depth and detailed building survey suitable for larger, older, run-down, unusual or altered properties.",
  },
];

const SurveyTypes = () => {
  return (
    <section id="choose-survey" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {surveys.map((survey) => (
            <div
              key={survey.title}
              className="bg-card rounded-lg p-8 border border-border shadow-sm"
            >
              <h3 className="text-xl font-bold text-foreground">{survey.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {survey.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="outline" className="gap-2 text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                  Find out more <ArrowRight className="w-4 h-4" />
                </Button>
                <Button className="gap-2">
                  Get a quote <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurveyTypes;

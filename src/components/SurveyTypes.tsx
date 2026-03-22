import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const surveys = [
  {
    title: "RPSA Home Survey Level 2",
    description:
      "A comprehensive survey providing a descriptive account of the property's condition with 'traffic light' ratings and highlights of significant problems. Ideal for conventional properties in reasonable condition.",
  },
  {
    title: "RPSA Home Survey Level 3",
    description:
      "The most in-depth and detailed building survey suitable for larger, older, run-down, unusual or altered properties. Provides a thorough analysis and detailed advice on repairs.",
  },
  {
    title: "Property Consultancy",
    description:
      "Bespoke property consultancy services tailored to your specific needs. Whether you need advice on property defects, development potential, or specialist guidance — we're here to help.",
  },
];

const SurveyTypes = () => {
  return (
    <section id="choose-survey" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {surveys.map((survey) => (
            <div
              key={survey.title}
              className="bg-card rounded-lg p-8 border border-border shadow-sm"
            >
              <h3 className="text-xl font-bold text-foreground">{survey.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
                {survey.description}
              </p>
              <div className="mt-6">
                <Button asChild className="gap-2">
                  <a href="#quote-request">
                    Get a quote <ArrowRight className="w-4 h-4" />
                  </a>
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

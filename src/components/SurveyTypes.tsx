import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const surveys = [
  {
    title: "Home Buyer / Condition Survey",
    slug: "/surveys/home-buyer-condition",
    description:
      "For traditional properties that are modern, of standard construction and not too big or complicated.",
  },
  {
    title: "Building Survey",
    slug: "/surveys/building",
    description:
      "Ideally suited to larger, more complex, older, extended or higher value homes.",
  },
  {
    title: "Buy To Let Survey",
    slug: "/surveys/buy-to-let",
    description:
      "The only survey of its type, designed for properties let to tenants. ONLY available from RPSA members.",
  },
  {
    title: "New-build Snagging Inspection",
    slug: "/surveys/new-build-snagging",
    description:
      "A must for any newly constructed home. Based on industry-compatible standards.",
  },
  {
    title: "Property Consultancy",
    slug: "/surveys/property-consultancy",
    description:
      "Bespoke consultancy services tailored to your specific property needs.",
  },
];

const SurveyTypes = () => {
  return (
    <section id="choose-survey" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          Our Survey Services
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Only RPSA Surveyors offer products based on a full and thorough inspection.{" "}
          <Link to="/surveys" className="text-primary hover:underline font-medium">
            View all surveys →
          </Link>
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {surveys.map((survey) => (
            <div
              key={survey.title}
              className="bg-card rounded-lg p-8 border border-border shadow-sm flex flex-col"
            >
              <h3 className="text-lg font-bold text-foreground">{survey.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm flex-1">
                {survey.description}
              </p>
              <div className="mt-6 flex gap-3">
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <Link to={survey.slug}>
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="sm" className="gap-2">
                  <a href="#quote-request">Get a quote</a>
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

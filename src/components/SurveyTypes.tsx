import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SurveyRecommender from "@/components/SurveyRecommender";
import conditionSurveyImg from "@/assets/condition-survey.jpeg";

const surveys = [
  {
    title: "Home Buyer / Condition Survey",
    slug: "/surveys/home-buyer-condition",
    description:
      "For traditional properties that are modern, of standard construction and not too big or complicated.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    popular: true,
  },
  {
    title: "Building Survey",
    slug: "/surveys/building",
    description:
      "Ideally suited to larger, more complex, older, extended or higher value homes.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    popular: false,
  },
  {
    title: "Buy To Let Survey",
    slug: "/surveys/buy-to-let",
    description:
      "The only survey of its type, designed for properties let to tenants. ONLY available from RPSA members.",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&h=400&fit=crop",
    popular: false,
  },
  {
    title: "New-build Snagging Inspection",
    slug: "/surveys/new-build-snagging",
    description:
      "A must for any newly constructed home. Based on industry-compatible standards.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    popular: false,
  },
  {
    title: "Property Consultancy",
    slug: "/surveys/property-consultancy",
    description:
      "Bespoke consultancy services tailored to your specific property needs.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    popular: false,
  },
];

interface SurveyTypesProps {
  onRecommend?: (surveyType: string) => void;
}

const SurveyTypes = ({ onRecommend }: SurveyTypesProps) => {
  return (
    <section id="choose-survey" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          Our Survey Services
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6">
          Only RPSA Surveyors offer products based on a full and thorough inspection.{" "}
          <Link to="/surveys" className="text-primary hover:underline font-medium">
            View all surveys →
          </Link>
        </p>
        <div className="flex justify-center mb-10">
          <SurveyRecommender onRecommend={onRecommend} />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {surveys.map((survey) => (
            <div
              key={survey.title}
              className="bg-card rounded-lg border border-border shadow-sm flex flex-col overflow-hidden relative"
            >
              {survey.popular && (
                <span className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </span>
              )}
              <img
                src={survey.image}
                alt={survey.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-1">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurveyTypes;

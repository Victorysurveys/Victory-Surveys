import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SurveyRecommender from "@/components/SurveyRecommender";
import bricksSurveyImg from "@/assets/bricks-survey.webp";
import buildingSurveyImg from "@/assets/building-survey.webp";
import btlSurveyImg from "@/assets/btl-survey.webp";

const surveys = [
  {
    title: "Home Buyer / Condition Survey",
    slug: "/surveys/home-buyer-condition",
    description:
      "For traditional properties that are modern, of standard construction and not too big or complicated.",
    image: bricksSurveyImg,
    popular: true,
    popularLabel: "Flagship Survey",
  },
  {
    title: "Single Defect Report / Item",
    slug: "/surveys/building",
    description:
      "A focused inspection on a specific defect or concern within a property.",
    image: buildingSurveyImg,
    popular: false,
  },
  {
    title: "Consultancy Services",
    slug: "/surveys/property-consultancy",
    description:
      "Bespoke property consultancy tailored to your specific needs — from defect advice to development potential.",
    image: btlSurveyImg,
    popular: false,
  },
];

const SurveyTypes = () => {
  return (
    <section id="choose-survey" className="py-16 bg-background">
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
          <SurveyRecommender />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {surveys.map((survey) => (
            <div
              key={survey.title}
              className="bg-card rounded-sm border border-border shadow-sm flex flex-col overflow-hidden relative"
            >
              {survey.popular && (
                <span className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
                  {(survey as any).popularLabel || "Flagship Survey"}
                </span>
              )}
              <img
                src={survey.image}
                alt={survey.title}
                className="w-full h-48 object-cover object-center"
                loading="lazy"
                width={400}
                height={192}
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground">{survey.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm flex-1">
                  {survey.description}
                </p>
                <div className="mt-6 flex gap-3">
                  <Button asChild variant="outline" size="sm" className="gap-2 rounded-sm">
                    <Link to={survey.slug}>
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="gap-2 rounded-sm">
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

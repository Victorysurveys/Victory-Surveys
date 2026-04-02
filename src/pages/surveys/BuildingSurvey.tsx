import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "All the benefits of the Home Buyer/Condition Survey",
  "More comprehensive descriptions of construction and defects",
  "Explanations of how to go about rectifying defects",
  "Consequences of not carrying out repairs",
  "Understanding potential defects that could be present",
];

/** WP port: page-building-survey.php */
const BuildingSurvey = () => {
  return (
    <PageLayout pageId="building-survey">
      <section className="vs-section vs-section--survey-detail py-16 md:py-20">
        <div className="vs-container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="vs-breadcrumb text-sm text-primary hover:underline mb-6 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Building Survey</h1>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            Ideally suited to larger, more complex, older, extended or higher value homes.
          </p>

          <ul className="vs-feature-list mt-6 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="vs-feature-list__item flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex gap-4">
            <Button asChild className="vs-btn vs-btn--primary gap-2 font-semibold">
              <Link to="/#quote-request">
                Request a quote <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BuildingSurvey;

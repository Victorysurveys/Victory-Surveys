import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Clear colour coded condition ratings for quick identification of the important issues",
  "Multiple photographs and diagrams, helping you understand your new home",
  "A jargon-free report that avoids many of the annoying caveats and exclusions often found in home buyer reports",
  "A full debrief from the surveyor who will answer any questions you may have",
];

/** WP port: page-home-buyer-condition.php */
const HomeBuyerCondition = () => {
  return (
    <PageLayout pageId="home-buyer-condition">
      <section className="vs-section vs-section--survey-detail py-16 md:py-20">
        <div className="vs-container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="vs-breadcrumb text-sm text-primary hover:underline mb-6 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Home Buyer / Condition Survey
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            A survey report format designed to reflect the condition of a traditional property that
            is more modern, of standard construction and not too big or complicated.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Includes many features not found in other, similarly priced surveys:
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

export default HomeBuyerCondition;

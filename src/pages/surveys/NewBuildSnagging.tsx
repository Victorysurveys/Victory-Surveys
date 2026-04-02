import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "The ONLY survey of its type based on industry-compatible standards",
  "Identifies \"snags\" in finishing quality",
  "Designed to help avoid buyer/developer conflict by impartially identifying incomplete or cosmetically unacceptable works",
  "Focus on the parts of the property you see, touch and use every day",
];

/** WP port: page-new-build-snagging.php */
const NewBuildSnagging = () => {
  return (
    <PageLayout pageId="new-build-snagging">
      <section className="vs-section vs-section--survey-detail py-16 md:py-20">
        <div className="vs-container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="vs-breadcrumb text-sm text-primary hover:underline mb-6 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            New-build Snagging Inspection
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            A must for any newly constructed home.
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

export default NewBuildSnagging;

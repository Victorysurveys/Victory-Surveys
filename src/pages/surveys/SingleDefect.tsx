import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Focused inspection on a specific defect or concern",
  "Clear, detailed reporting on the issue identified",
  "Guiding next steps for repairs",
  "Assessment of potential impact on the property",
];

/** WP port: page-single-defect.php */
const SingleDefect = () => {
  return (
    <PageLayout pageId="single-defect">
      <section className="vs-section vs-section--survey-detail py-16 md:py-20">
        <div className="vs-container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="vs-breadcrumb text-sm text-primary hover:underline mb-6 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Single Defect Report / Item</h1>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            A focused inspection on a specific defect or concern within a property, providing clear advice on the issue and recommended actions.
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
            <Button asChild className="vs-btn vs-btn--primary gap-2 font-semibold rounded-sm">
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

export default SingleDefect;

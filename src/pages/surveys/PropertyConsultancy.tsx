import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/** WP port: page-property-consultancy.php */
const PropertyConsultancy = () => {
  return (
    <PageLayout pageId="property-consultancy">
      <section className="vs-section vs-section--survey-detail py-16 md:py-20">
        <div className="vs-container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="vs-breadcrumb text-sm text-primary hover:underline mb-6 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Property Consultancy
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            Bespoke property consultancy services tailored to your specific needs. Whether you need
            advice on property defects, development potential, or specialist guidance — we're here
            to help.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our qualified surveyors provide expert advice across a wide range of
            property matters, drawing on extensive local knowledge and professional experience.
          </p>

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

export default PropertyConsultancy;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const surveys = [
  {
    title: "Home Buyer / Condition Survey",
    slug: "/surveys/home-buyer-condition",
    description:
      "A survey report format designed to reflect the condition of a traditional property that is more modern, of standard construction and not too big or complicated.",
  },
  {
    title: "Building Survey",
    slug: "/surveys/building",
    description:
      "Ideally suited to larger, more complex, older, extended or higher value homes. The most comprehensive survey available.",
  },
  {
    title: "Buy To Let Survey",
    slug: "/surveys/buy-to-let",
    description:
      "The only survey of its type, designed for a traditional property that is, or will be, let to tenants. ONLY available from RPSA members.",
  },
  {
    title: "New-build Snagging Inspection",
    slug: "/surveys/new-build-snagging",
    description:
      "A must for any newly constructed home. The ONLY survey of its type based on industry-compatible standards.",
  },
  {
    title: "Property Consultancy",
    slug: "/surveys/property-consultancy",
    description:
      "Bespoke property consultancy services tailored to your specific needs. Whether you need advice on property defects, development potential, or specialist guidance.",
  },
];

const SurveysOverview = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center">
            Our Survey Services
          </h1>
          <p className="mt-4 text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Members of the RPSA offer a range of surveys suitable for all types and sizes of home.
            Only RPSA Surveyors offer products which are all based on a full and thorough inspection.
          </p>
          <p className="mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
            Talk to your RPSA Surveyor to let them help you find the right survey product for you.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {surveys.map((survey) => (
              <div
                key={survey.title}
                className="bg-card rounded-lg p-8 border border-border shadow-sm flex flex-col"
              >
                <h2 className="text-xl font-bold text-foreground">{survey.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm flex-1">
                  {survey.description}
                </p>
                <div className="mt-6 flex gap-3">
                  <Button asChild variant="outline" className="gap-2">
                    <Link to={survey.slug}>
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild className="gap-2">
                    <Link to="/#quote-request">Get a quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SurveysOverview;

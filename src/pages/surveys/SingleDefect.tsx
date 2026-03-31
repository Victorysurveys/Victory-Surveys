import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Focused inspection on a specific defect or concern",
  "Clear, detailed reporting on the issue identified",
  "Guiding next steps for repairs",
  "Assessment of potential impact on the property",
];

const SingleDefect = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-sm text-primary hover:underline mb-6 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Single Defect Report / Item</h1>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            A focused inspection on a specific defect or concern within a property, providing clear advice on the issue and recommended actions.
          </p>

          <ul className="mt-6 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex gap-4">
            <Button asChild className="gap-2 font-semibold rounded-sm">
              <Link to="/#quote-request">
                Request a quote <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SingleDefect;

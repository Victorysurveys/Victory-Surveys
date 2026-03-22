import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "All the benefits of the Home Condition Survey",
  "Consideration of health and safety matters that are likely to have an impact on tenants — considers all 29 hazard profiles identified in the Housing Health & Safety Rating System (HHSRS)*",
  "Separate DASH — Decent & Safe Homes hazard review report",
  "Lets your tenants know you care",
];

const BuyToLet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/surveys" className="text-sm text-primary hover:underline mb-6 inline-block">
            ← Back to all surveys
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Buy To Let Survey</h1>
          <div className="mt-4 inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
            ONLY available from RPSA members
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            The only survey of its type, designed for a traditional property that is, or will be,
            let to tenants. A unique product that helps landlords protect their investment while
            safeguarding the safety of the home for tenants.
          </p>

          <ul className="mt-6 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-muted-foreground italic">
            *Does not include a full assessment of hazard scores as defined by HHSRS
          </p>

          <div className="mt-10 flex gap-4">
            <Button asChild className="gap-2 font-semibold">
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

export default BuyToLet;

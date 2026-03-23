import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const WhyNeedSurveyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Why do you need a survey?
          </h1>
          <p className="mt-4 text-white max-w-2xl mx-auto leading-relaxed text-lg">
            A property survey is one of the smartest investments you can make when buying a home. Here's why.
          </p>
        </div>
      </section>

      {/* Content with image */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1585128792020-803d29415281?w=600&h=400&fit=crop&fm=webp&q=75"
                  alt="Condensation on a window — a common sign of damp issues in properties"
                  className="w-full h-72 md:h-96 object-cover"
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                We understand that when you are buying a new home you want to make every penny count. It might be tempting to assume that a simple mortgage valuation will provide you with the reassurance you need regarding the condition of the property and future maintenance liabilities, but that's not what it is intended for and you could be faced with significant unplanned repair costs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Buying a home can be one of the biggest financial commitments you are likely to make, so it is important to know as much as you can about the property you are thinking of purchasing.
              </p>
            </div>
          </div>

          {/* Key reasons */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Uncover hidden defects",
                description: "A survey can reveal issues invisible to the untrained eye — from structural movement and damp to roof defects and timber decay.",
              },
              {
                title: "Negotiate a better price",
                description: "If problems are found, you can use the findings to negotiate the purchase price or ask the seller to carry out repairs before completion.",
              },
              {
                title: "Plan for future costs",
                description: "A survey gives you a clear picture of upcoming maintenance so you can budget properly and avoid nasty surprises down the line.",
              },
              {
                title: "Protect your investment",
                description: "Your home is likely your biggest purchase. A few hundred pounds spent on a survey could save you thousands in unforeseen repairs.",
              },
              {
                title: "Peace of mind",
                description: "Whether the survey comes back clean or highlights issues, you'll have the confidence of knowing exactly what you're buying.",
              },
              {
                title: "Independent, expert opinion",
                description: "Unlike a mortgage valuation (done for the lender), a survey is carried out entirely in your interest by a qualified, independent surveyor.",
              },
            ].map((reason) => (
              <div key={reason.title} className="bg-secondary rounded-xl p-6 border border-border">
                <h3 className="font-bold text-foreground text-lg">{reason.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Ready to protect your investment?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Get in touch for a no-obligation quote. We're happy to advise on the best survey for your needs.
          </p>
          <a
            href="/#quote-request"
            className="inline-flex items-center gap-2 mt-6 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Request a quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyNeedSurveyPage;

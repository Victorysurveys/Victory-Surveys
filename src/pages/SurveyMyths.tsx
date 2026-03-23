import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const myths = [
  {
    myth: "I already received a valuation, so don't need a survey!",
    fact: "A valuation will tell you the property's worth, but a survey can highlight issues with the property, along with a lot of other important information. A mortgage valuation is carried out for the lender's benefit — not yours. It won't tell you about damp, structural movement, roof defects, or any of the things that could end up costing you thousands.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&fm=webp&q=75",
    imageAlt: "Property valuation concept with house keys and documents",
  },
  {
    myth: "If issues are found, the sale will fall through",
    fact: "If issues are uncovered during the survey, you can get repair quotes and choose to make an informed decision or discuss the asking price. Most surveys do identify some issues — that's the whole point. Knowledge is power, and being aware of problems puts you in a stronger negotiating position rather than walking away.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    imageAlt: "Property negotiation and discussion",
  },
  {
    myth: "Surveys are too expensive and not worth the money",
    fact: "Think of a survey as an investment. A survey can give you peace of mind knowing that there are no nasty surprises waiting to be discovered at a later date that could cost you a fortune in repairs! The cost of a survey is typically a fraction of 1% of the property price — far less than even a minor repair bill.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    imageAlt: "Financial planning and investment concept",
  },
];

const SurveyMyths = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Survey Myths Busted
          </h1>
          <p className="mt-4 text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed text-lg">
            There are many myths and misconceptions surrounding property surveys. We bust the most common ones so you can make your decision based on facts, not fear.
          </p>
        </div>
      </section>

      {/* Myths */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {myths.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-64 md:h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <span className="inline-block bg-destructive/10 text-destructive text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Myth #{i + 1}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                  "{item.myth}"
                </h2>
                <div className="mt-4 border-l-4 border-primary pl-4">
                  <p className="text-sm font-semibold text-primary mb-1">The reality:</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.fact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Still have questions?
          </h2>
          <p className="mt-3 text-muted-foreground">
            We're always happy to chat through your options — no pressure, no obligation.
          </p>
          <a
            href="/#quote-request"
            className="inline-block mt-6 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Request a quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SurveyMyths;

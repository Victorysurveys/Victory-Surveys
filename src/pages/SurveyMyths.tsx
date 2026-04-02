import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import photoFinal from "@/assets/photo_final.jpg";

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
    image: photoFinal,
    imageAlt: "Property exterior showing brick building",
  },
  {
    myth: "Surveys are too expensive and not worth the money",
    fact: "Think of a survey as an investment. A survey can give you peace of mind knowing that there are no nasty surprises waiting to be discovered at a later date that could cost you a fortune in repairs! The cost of a survey is typically a fraction of 1% of the property price — far less than even a minor repair bill.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&fm=webp&q=75",
    imageAlt: "Financial planning and investment concept",
  },
];

/** WP port: page-survey-myths.php */
const SurveyMyths = () => {
  return (
    <PageLayout pageId="survey-myths">
      <PageHero
        title="Survey Myths Busted"
        description="There are many myths and misconceptions surrounding property surveys. We bust the most common ones so you can make your decision based on facts, not fear."
      />

      {/* Myths */}
      <section className="vs-section vs-section--myths py-16 md:py-20">
        <div className="vs-container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {myths.map((item, i) => (
            <article
              key={i}
              className={`vs-myth flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
            >
              {/* Image */}
              <div className="vs-myth__image w-full md:w-1/2">
                <div className="rounded-sm overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-64 md:h-80 object-cover"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="vs-myth__content w-full md:w-1/2">
                <span className="inline-block bg-destructive/10 text-destructive text-xs font-bold px-3 py-1 rounded-sm mb-4">
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
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="vs-section vs-section--cta bg-secondary py-12">
        <div className="vs-container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Still have questions?
          </h2>
          <p className="mt-3 text-muted-foreground">
            We're always happy to chat through your options — no pressure, no obligation.
          </p>
          <a
            href="/#quote-request"
            className="vs-btn vs-btn--primary inline-block mt-6 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-sm hover:bg-primary/90 transition-colors"
          >
            Request a quote
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default SurveyMyths;

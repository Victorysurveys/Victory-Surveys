import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

const reasons = [
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
];

/** WP port: page-why-need-survey.php */
const WhyNeedSurveyPage = () => {
  return (
    <PageLayout pageId="why-need-survey">
      <PageHero
        title="Why do you need a survey?"
        description="A property survey is one of the smartest investments you can make when buying a home. Here's why."
      />

      {/* Content with image */}
      <section className="vs-section vs-section--why-survey-content py-16 md:py-20">
        <div className="vs-container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-sm overflow-hidden shadow-lg">
                <img
                  src="/why-need-survey.jpg"
                  alt="Property survey - uncovering hidden defects"
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
            {reasons.map((reason) => (
              <div key={reason.title} className="vs-card bg-secondary rounded-sm p-6 border border-border">
                <h3 className="font-bold text-foreground text-lg">{reason.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="vs-section vs-section--cta bg-secondary py-12">
        <div className="vs-container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Ready to protect your investment?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Get in touch for a no-obligation quote. We're happy to advise on the best survey for your needs.
          </p>
          <a
            href="/#quote-request"
            className="vs-btn vs-btn--primary inline-flex items-center gap-2 mt-6 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-sm hover:bg-primary/90 transition-colors"
          >
            Request a quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default WhyNeedSurveyPage;

const myths = [
  {
    myth: "I already received a valuation, so don't need a survey!",
    fact: "A valuation will tell you the property's worth, but a survey can highlight issues with the property, along with a lot of other important information.",
  },
  {
    myth: "If issues are found, the sale will fall through",
    fact: "If issues are uncovered during the survey, you can get repair quotes and choose to make an informed decision or discuss the asking price.",
  },
  {
    myth: "Surveys are too expensive and not worth the money",
    fact: "Think of a survey as an investment. A survey can give you peace of mind knowing that there are no nasty surprises waiting to be discovered at a later date that could cost you a fortune in repairs!",
  },
];

const MythsBusted = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
          3 Survey Myths Busted
        </h2>
        <p className="mt-4 text-center text-secondary-foreground max-w-2xl mx-auto">
          There are many myths and misconceptions surrounding property surveys. We bust the most common ones so you can make your decision based on facts, not fear.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {myths.map((item, i) => (
            <div key={i} className="bg-card rounded-lg p-8 border border-border">
              <span className="inline-block bg-brand-dark text-primary text-xs font-bold px-3 py-1 rounded-full">
                Myth #{i + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{item.myth}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                <span className="font-semibold text-primary">Fact:</span> {item.fact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MythsBusted;

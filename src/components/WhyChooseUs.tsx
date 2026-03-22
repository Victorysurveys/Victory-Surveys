const stats = [
  { number: "RPSA", label: "Regulated by the Residential Property Surveyors Association — the industry's leading specialists." },
  { number: "10+", label: "Years of experience delivering high-quality residential property surveys across the UK." },
  { number: "100%", label: "Committed to helping you make informed property decisions with expert guidance." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
          Why choose Victory Surveying?
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="text-center bg-brand-dark rounded-lg p-8"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary">
                {stat.number}
              </p>
              <p className="mt-4 text-primary/70 leading-relaxed text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

const stats = [
  { number: "336,000", label: "Average number of home buyers we help each year with surveys and valuations." },
  { number: "25+", label: "The years we have been operating for, making us one of the most established surveying service providers in the UK." },
  { number: "390+", label: "Our network of local surveyors, allowing us to provide cover across the UK." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
          Why choose us?
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="text-center bg-primary rounded-lg p-8"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground">
                {stat.number}
              </p>
              <p className="mt-4 text-primary-foreground/85 leading-relaxed text-sm">
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

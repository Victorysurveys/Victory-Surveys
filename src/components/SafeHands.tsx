import { Shield, FileText, Phone, MapPin, GraduationCap, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully Independent",
    description:
      "Not tied to any mortgage lender, estate agent or developer. Our only obligation is to you and your best interests.",
  },
  {
    icon: FileText,
    title: "Clear, Readable Reports",
    description:
      "Plain English throughout — no jargon, no ambiguity. Supported by photographs and written to be understood by everyone.",
  },
  {
    icon: Phone,
    title: "Happy to Talk Through Findings",
    description:
      "We don't just send a report and disappear. We're always available to talk through what we found and answer your questions.",
  },
  {
    icon: MapPin,
    title: "Genuine Local Knowledge",
    description:
      "Based in Great Yarmouth with deep knowledge of East Anglian construction types and common local defects.",
  },
  {
    icon: GraduationCap,
    title: "Degree-Qualified Surveyors",
    description:
      "Our surveyors hold recognised surveying degrees and are committed to the highest professional standards in every inspection.",
  },
  {
    icon: Award,
    title: "Chartered Professionals",
    description:
      "Our team hold MCABE and MCIOB chartered memberships — nationally recognised marks of competence, integrity and professionalism.",
  },
];

const SafeHands = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">
            Why Victory Surveying
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Where it matters most
          </h2>
          <p className="mt-4 text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Victory Surveying is regulated by the RPSA — the industry's leading body for independent residential surveyors. Qualified, chartered, and committed to you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative bg-primary-foreground/5 backdrop-blur-sm border border-primary/10 rounded-xl p-6 transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-primary-foreground text-lg">
                  {feature.title}
                </h3>
              </div>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Credentials bar */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {[
            { label: "RPSA Regulated", highlight: true },
            { label: "MCABE Chartered", highlight: false },
            { label: "MCIOB Chartered", highlight: false },
            { label: "Degree Qualified", highlight: false },
            { label: "10+ Years Experience", highlight: false },
          ].map((badge) => (
            <div
              key={badge.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                badge.highlight
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary-foreground/10 text-primary-foreground/80 border border-primary/20"
              }`}
            >
              <Award className="w-4 h-4" />
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafeHands;

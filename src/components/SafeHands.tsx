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
    <section id="why-choose-us" className="vs-section vs-section--safe-hands py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Where it matters most
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-sm bg-primary/15 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafeHands;

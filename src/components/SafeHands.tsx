import { Shield, FileText, Phone, MapPin } from "lucide-react";

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
];

const SafeHands = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Where it matters most
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Victory Surveying is regulated by the RPSA — the industry's leading body for independent residential surveyors.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafeHands;

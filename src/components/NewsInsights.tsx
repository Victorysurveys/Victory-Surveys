import { MapPin, Phone } from "lucide-react";
import greatYarmouthImg from "@/assets/great-yarmouth.jpg";
import norwichImg from "@/assets/norwich.jpg";
import suffolkImg from "@/assets/suffolk-coast.jpg";

const areas = [
  {
    image: greatYarmouthImg,
    alt: "Great Yarmouth seafront and surrounding area",
    region: "Great Yarmouth & Surrounds",
    locations: ["Great Yarmouth", "Gorleston", "Caister-on-Sea"],
  },
  {
    image: norwichImg,
    alt: "Norwich city and Norfolk countryside",
    region: "Norwich & Norfolk",
    locations: ["Norwich", "North Norfolk", "Acle"],
  },
  {
    image: suffolkImg,
    alt: "Suffolk and Waveney coastline",
    region: "Suffolk & Waveney",
    locations: ["Lowestoft", "Beccles", "Bungay"],
  },
];

const NewsInsights = () => {
  return (
    <section id="coverage" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Coverage</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
            Serving Norfolk & Suffolk
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Based in Great Yarmouth, we cover a wide area across East Anglia. Not listed below? Call us — we are often able to accommodate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.region}
              className="bg-card rounded-lg overflow-hidden border border-border shadow-sm"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {area.region}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {area.locations.map((loc) => (
                    <li key={loc} className="text-sm text-muted-foreground">
                      {loc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="w-4 h-4 text-primary" />
          Not sure if we cover your area? Call us and we'll confirm straight away.
        </div>
      </div>
    </section>
  );
};

export default NewsInsights;

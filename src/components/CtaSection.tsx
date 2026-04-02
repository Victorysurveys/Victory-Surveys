import { useState, useEffect } from "react";
import surveyorPhoto from "@/assets/surveyor-photo.webp";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Loader2 } from "lucide-react";

const COVERED_AREAS = [
  "great yarmouth", "norwich", "lowestoft", "caister-on-sea", "gorleston",
  "beccles", "bungay", "acle", "norfolk", "suffolk", "north norfolk",
  "gorleston-on-sea", "caister", "hemsby", "winterton", "martham",
  "stalham", "wroxham", "hoveton", "aylsham", "cromer", "sheringham",
  "wells-next-the-sea", "fakenham", "dereham", "wymondham", "attleborough",
  "thetford", "diss", "harleston", "loddon", "poringland", "long stratton",
  "hethersett", "costessey", "taverham", "sprowston", "thorpe st andrew",
  "blofield", "brundall", "reedham", "belton", "fritton", "oulton broad",
  "carlton colville", "kessingland", "southwold", "halesworth", "saxmundham",
];

const CtaSection = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [postcode, setPostcode] = useState<string | null>(null);
  const [isCovered, setIsCovered] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const city = data.city || "";
        const region = data.region || "";
        const postal = data.postal || "";

        setLocation(city || region);
        setPostcode(postal);

        const searchStr = `${city} ${region}`.toLowerCase();
        const covered = COVERED_AREAS.some(
          (area) => searchStr.includes(area) || area.includes(city.toLowerCase())
        );
        setIsCovered(covered);
      } catch {
        setLocation(null);
        setIsCovered(null);
      } finally {
        setLoading(false);
      }
    };

    detectLocation();
  }, []);

  return (
    <section id="local-surveyor" className="vs-section vs-section--local-surveyor py-16 md:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Location bar */}
        <div className="mb-10 bg-primary/10 border border-primary/20 rounded-sm px-6 py-4 flex items-center justify-center gap-3 text-center">
          <MapPin className="w-5 h-5 text-primary shrink-0" />
          {loading ? (
            <span className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              Detecting your location…
            </span>
          ) : location ? (
            <span className="text-foreground font-medium">
              {isCovered ? (
                <>
                  Great news! We cover{" "}
                  <span className="text-primary font-bold">
                    {location}
                    {postcode ? ` (${postcode})` : ""}
                  </span>
                  {" "}— your local surveyor is ready to help.
                </>
              ) : (
                <>
                  You're browsing from{" "}
                  <span className="font-bold">
                    {location}
                    {postcode ? ` (${postcode})` : ""}
                  </span>
                  .{" "}
                  <a href="#get-in-touch" className="text-primary underline hover:text-primary/80">
                    Contact us
                  </a>{" "}
                  to check if we cover your area.
                </>
              )}
            </span>
          ) : (
            <span className="text-muted-foreground">
              Covering Norfolk & Suffolk —{" "}
              <a href="#get-in-touch" className="text-primary underline hover:text-primary/80">
                check if we cover your area
              </a>
            </span>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-sm overflow-hidden">
            <img
              src={surveyorPhoto}
              alt="Your local surveyor"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Your Local Surveyor — Jamie
            </h2>
            <p className="text-sm text-muted-foreground font-medium tracking-wide">
              MCABE, MCIOB, BSc(Hons) |{" "}
              <a href="tel:+4407874062271" className="text-primary hover:underline">
                (+44) 07874 062271
              </a>
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With 9 years in the industry — from building inspection and planning through to earning my surveying degree and professional certifications — everything I do is rooted in a genuine passion for property. I'm here to give you honest, independent advice with no jargon and no surprises — just straightforward, friendly service from someone who truly cares about getting it right for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

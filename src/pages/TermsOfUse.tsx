import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Terms of Use</h1>
          <p className="mt-4 text-brand-dark-text max-w-2xl mx-auto leading-relaxed text-lg">
            Please read these terms carefully before using our website and services.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral max-w-none">
          <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            These terms govern your use of the Victory Surveys website and the services we provide. By accessing our website, you agree to be bound by these terms.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Use of the website</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">You agree to use this website only for lawful purposes and in a way that does not:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Infringe the rights of any third party</li>
            <li>Restrict or inhibit anyone else's use of the website</li>
            <li>Breach any applicable laws or regulations</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Our services</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Victory Surveys provides property surveying services. All surveys are carried out by qualified and chartered surveyors. The information on this website is for general guidance only and does not constitute professional advice.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Quotes and pricing</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Quotes provided through this website are indicative and subject to confirmation. Final pricing may vary depending on the property and scope of the survey. All prices are subject to change without notice.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Intellectual property</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            All content on this website, including text, images, logos, and design, is the property of Victory Surveys and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use any content without our written permission.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. Limitation of liability</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            While we endeavour to ensure the information on this website is accurate, we make no warranties or representations regarding its completeness or accuracy. Victory Surveys shall not be liable for any loss or damage arising from the use of this website.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">7. External links</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our website may contain links to external websites. We are not responsible for the content or privacy practices of those sites.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">8. Changes to these terms</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We reserve the right to update these terms at any time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">9. Governing law</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">10. Contact</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you have any questions about these terms, please contact us at <a href="mailto:Info@victorysurveys.co.uk" className="text-primary hover:underline">Info@victorysurveys.co.uk</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfUse;

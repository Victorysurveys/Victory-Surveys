import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

/** WP port: page-privacy-policy.php */
const PrivacyPolicy = () => {
  return (
    <PageLayout pageId="privacy-policy">
      <PageHero
        title="Privacy Policy"
        description="Your privacy matters to us. This policy explains how we collect, use, and protect your personal information."
      />

      <section className="vs-section vs-section--legal-content py-16 md:py-20">
        <div className="vs-container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral max-w-none">
          <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Who we are</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Victory Surveys ("we", "our", "us") is a property surveying company. Our contact email is <a href="mailto:Info@victorysurveys.co.uk" className="text-primary hover:underline">Info@victorysurveys.co.uk</a>. Our telephone number is <a href="tel:01493886199" className="text-primary hover:underline">01493 886199</a>.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Information we collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">We may collect the following personal information:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Name, email address, phone number, and postal address</li>
            <li>Property details relevant to a survey enquiry</li>
            <li>Correspondence and communications with us</li>
            <li>Technical data such as IP address, browser type, and pages visited</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. How we use your information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">We use your personal data to:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Respond to your enquiries and provide quotes</li>
            <li>Deliver our surveying services</li>
            <li>Improve our website and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Legal basis for processing</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We process your data based on your consent, the performance of a contract, our legitimate business interests, or legal obligations.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Data sharing</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We do not sell your personal data. We may share information with trusted third parties who assist in operating our website or conducting our business, provided they agree to keep your information confidential.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. Data retention</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">7. Your rights</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Under data protection law, you have the right to:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">8. Security</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">9. Contact us</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you have any questions about this policy, please contact us at <a href="mailto:Info@victorysurveys.co.uk" className="text-primary hover:underline">Info@victorysurveys.co.uk</a>.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;

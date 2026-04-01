import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Cookie Policy</h1>
          <p className="mt-4 text-brand-dark-text max-w-2xl mx-auto leading-relaxed text-lg">
            This policy explains how we use cookies and similar technologies on our website.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral max-w-none">
          <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. What are cookies?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. How we use cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">We use cookies for the following purposes:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Essential cookies:</strong> Required for the website to function properly, such as maintaining your session</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website so we can improve it</li>
            <li><strong>Functional cookies:</strong> Remember your preferences and settings to enhance your experience</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Cookies we use</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-left border border-border">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-4 py-3 font-semibold text-foreground border-b border-border">Cookie</th>
                  <th className="px-4 py-3 font-semibold text-foreground border-b border-border">Purpose</th>
                  <th className="px-4 py-3 font-semibold text-foreground border-b border-border">Duration</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Session</td>
                  <td className="px-4 py-3">Essential — maintains website functionality</td>
                  <td className="px-4 py-3">Session</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Preferences</td>
                  <td className="px-4 py-3">Functional — remembers your settings</td>
                  <td className="px-4 py-3">1 year</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Analytics</td>
                  <td className="px-4 py-3">Analytics — tracks website usage patterns</td>
                  <td className="px-4 py-3">2 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Third-party cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Some cookies may be set by third-party services that appear on our pages. We do not control these cookies. Please refer to the respective third-party privacy policies for more information.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Managing cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of our website.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. Changes to this policy</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We may update this cookie policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">7. Contact</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you have any questions about our use of cookies, please contact us at <a href="mailto:Info@victorysurveys.co.uk" className="text-primary hover:underline">Info@victorysurveys.co.uk</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;

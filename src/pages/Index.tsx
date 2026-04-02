import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import SurveyTypes from "@/components/SurveyTypes";
import SafeHands from "@/components/SafeHands";

import NewsInsights from "@/components/NewsInsights";
import CtaSection from "@/components/CtaSection";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

/** WP port: index.php — homepage template */
const Index = () => {

  return (
    <div className="vs-page vs-page--home min-h-screen bg-background" data-page="home">
      <Navbar />
      <main className="vs-page__content">
        <Hero />
        <IntroSection />
        <SurveyTypes />
        <SafeHands />
        
        <NewsInsights />
        <CtaSection />
        <QuoteRequestForm />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

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

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <SurveyTypes onRecommend={handleSurveyRecommend} />
        <SafeHands />
        
        <NewsInsights />
        <CtaSection />
        <QuoteRequestForm preSelectedSurvey={preSelectedSurvey} />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

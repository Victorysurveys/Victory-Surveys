import { useState } from "react";
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
  const [preSelectedSurvey, setPreSelectedSurvey] = useState("");

  const handleSurveyRecommend = (surveyType: string) => {
    setPreSelectedSurvey(surveyType);
  };

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

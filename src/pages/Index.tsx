import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import SurveyTypes from "@/components/SurveyTypes";
import WhyChooseUs from "@/components/WhyChooseUs";
import MythsBusted from "@/components/MythsBusted";
import SafeHands from "@/components/SafeHands";
import WhyNeedSurvey from "@/components/WhyNeedSurvey";
import NewsInsights from "@/components/NewsInsights";
import CtaSection from "@/components/CtaSection";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <IntroSection />
      <SurveyTypes />
      <WhyChooseUs />
      <MythsBusted />
      <SafeHands />
      <WhyNeedSurvey />
      <NewsInsights />
      <CtaSection />
      <QuoteRequestForm />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Index;

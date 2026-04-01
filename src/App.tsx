import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import HomeBuyerCondition from "./pages/surveys/HomeBuyerCondition.tsx";
import BuildingSurvey from "./pages/surveys/BuildingSurvey.tsx";
import SingleDefect from "./pages/surveys/SingleDefect.tsx";
import BuyToLet from "./pages/surveys/BuyToLet.tsx";
import NewBuildSnagging from "./pages/surveys/NewBuildSnagging.tsx";
import PropertyConsultancy from "./pages/surveys/PropertyConsultancy.tsx";
import SurveyMyths from "./pages/SurveyMyths.tsx";
import WhyNeedSurveyPage from "./pages/WhyNeedSurvey.tsx";
import Unsubscribe from "./pages/Unsubscribe.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/surveys/home-buyer-condition" element={<HomeBuyerCondition />} />
          <Route path="/surveys/building" element={<BuildingSurvey />} />
          <Route path="/surveys/single-defect" element={<SingleDefect />} />
          <Route path="/surveys/buy-to-let" element={<BuyToLet />} />
          <Route path="/surveys/new-build-snagging" element={<NewBuildSnagging />} />
          <Route path="/surveys/property-consultancy" element={<PropertyConsultancy />} />
          <Route path="/survey-myths" element={<SurveyMyths />} />
          <Route path="/why-need-survey" element={<WhyNeedSurveyPage />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

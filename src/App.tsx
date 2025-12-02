import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { AuthProvider } from "./context/AuthContext";
import { Helmet } from "react-helmet-async";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import WebDevelopment from "./pages/WebDevelopment";
import LogoDesign from "./pages/LogoDesign";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import BrandDesignSection from "./pages/BrandDesign";
import AdvanceLeadGeneration from "./pages/AdvanceLeadGeneration";
import BlogSection from "./components/BlogSection";
import BlogDetails from "./pages/BlogDetails";
import WhyUs from "./pages/WhyUs";
import ScheduleAcall from "./pages/scheduleACall";
import ComparisonSection from "./components/comparisonSection";
import ComparisonDetails from "./components/comparisonDetails";
import Services from "./pages/Services";
import ServicesBookCall from "./pages/ServicesBookCall";
import TestimonialsSection from "./pages/TestimonialsSection";
import WallOfLove from "./pages/WallOfLove";

// Case Study
import CaseStudyHome from "./components/CaseStudyHome";
import CaseDetailshome from "./pages/CaseDetailshome";
import CaseStudy from "./components/CaseStudyList";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import { StarsIcon } from "lucide-react";
import StartOnEstimate from "./pages/StartOnEstimate";
import CareersPage from "./pages/CareersPage";
import HelpCenter from "./pages/HelpCenter";
import PricingSection from "./pages/PricingSection";
import HandOff from "./pages/HandOff";
import HandoffReviewsPage from "./pages/HandoffReviewsPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <AuthProvider>
      <Router>

        {/* 🌟 UPDATED GLOBAL SEO — ONLY ADS + LEADS + DIGITAL MARKETING */}
        <Helmet>
          <title>
            Best Lead Generation & Performance Marketing Agency | Meta Ads, Google Ads, LinkedIn Ads
          </title>

          <meta
            name="description"
            content="
              ROI-focused digital marketing agency offering Meta Ads, Google Ads, LinkedIn Ads, 
              Lead Generation, Performance Marketing & Email Marketing services.
            "
          />

          {/* 🔥 High-Intent SEO Keywords ONLY (Ads + Leads + Digital Marketing) */}
          <meta
            name="keywords"
            content="
              lead generation agency,
              performance marketing agency,
              meta ads expert,
              facebook ads agency,
              instagram ads agency,
              google ads specialist,
              google search ads,
              linkedin ads agency,
              b2b lead generation company,
              b2c lead generation services,
              paid ads management,
              PPC agency,
              email marketing services,
              digital marketing agency,
              result-driven marketing,
              ads agency for businesses,
              best lead generation services,
              high-quality leads,
              ROAS optimization,
              conversion tracking expert,
              growth marketing agency
            "
          />

          <meta name="author" content="Your Brand Name" />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Best Lead Generation & Performance Marketing Agency"
          />
          <meta
            property="og:description"
            content="
              Get high-quality leads and scale your business with Meta Ads, Google Ads, 
              LinkedIn Ads, Email Marketing & complete digital marketing services.
            "
          />
          <meta property="og:image" content="/og-image.png" />
          <meta property="og:url" content="https://yourwebsite.com" />
          <meta property="og:type" content="website" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Top Lead Generation & Ads Agency"
          />
          <meta
            name="twitter:description"
            content="Grow your business with Meta Ads, Google Ads, LinkedIn Ads & high-quality lead generation services."
          />
          <meta name="twitter:image" content="/og-image.png" />
        </Helmet>

        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/webdevelopment" element={<WebDevelopment />} />
              <Route path="/logodesign" element={<LogoDesign />} />
              <Route path="/performancemarketing" element={<PerformanceMarketing />} />
              <Route path="/branddesign" element={<BrandDesignSection />} />
              <Route path="/advanceLeadGeneration" element={<AdvanceLeadGeneration />} />
              <Route path="/case-study-home" element={<CaseStudyHome />} />
              <Route path="/case-details-home/:id" element={<CaseDetailshome />} />
              <Route path="/case-study-list" element={<CaseStudy />} />
              <Route path="/case-study/:id" element={<CaseStudyDetail />} />
              <Route path="/blog" element={<BlogSection />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/schedulecall" element={<ScheduleAcall />} />
              <Route path="/comparisonsection" element={<ComparisonSection />} />
              <Route path="/comparison/:id" element={<ComparisonDetails />} />
              <Route path="/services" element={<Services />} />
              <Route path="/servicesbookcall" element={<ServicesBookCall />} />
              <Route path="/testimonials" element={<TestimonialsSection />} />
              <Route path="/walloflove" element={<WallOfLove />} />
              <Route path="/startofestimate" element={<StartOnEstimate />} />
              <Route path="/careerspage" element={<CareersPage />} />
              <Route path="/HelpCenter" element={<HelpCenter />} />
              <Route path="/PricingSection" element={<PricingSection />} />
              <Route path="/Handoffreview" element={<HandoffReviewsPage />} />
              <Route path="/loginpage" element={<LoginPage />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

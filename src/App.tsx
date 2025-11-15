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

function App() {
  return (
    <AuthProvider>
      <Router>

        {/* 🌟 GLOBAL DEFAULT SEO + HIGH TRAFFIC KEYWORDS */}
        <Helmet>
          <title>Best Video Editing & Lead Generation Agency | Branding | Ads | Marketing</title>

          <meta
            name="description"
            content="Top video editing, lead generation, performance marketing, branding, and business growth services. Boost your revenue with high-converting ads & expert creative team."
          />

          {/* 🔥 All SEO Keywords */}
          <meta
            name="keywords"
            content="
              video editing services,
              professional video editing agency,
              corporate video editing,
              YouTube video editing company,
              Instagram reel editing service,
              creative video editing team,
              outsource video editing,
              lead generation services,
              qualified lead generation experts,
              best lead generation company,
              lead generation for businesses,
              ads expert agency,
              Facebook ads agency,
              Google ads expert India,
              performance marketing agency,
              top digital marketing company,
              web development company,
              branding and design,
              creative agency for startups,
              business growth marketing,
              ad management service,
              high converting video ads,
              affordable video editing service,
              business website with dashboard,
              CRM dashboard agency,
              case study marketing,
              blog marketing,
              creative brand building,
              how to grow business with ads,
              video editing for brands,
              video marketing experts,
              startup branding agency
            "
          />

          <meta name="author" content="Your Brand Name" />

          {/* Open Graph */}
          <meta property="og:title" content="Best Video Editing & Lead Generation Agency" />
          <meta
            property="og:description"
            content="Professional video editing, qualified lead generation, branding & marketing agency to grow your business faster."
          />
          <meta property="og:image" content="/og-image.png" />
          <meta property="og:url" content="https://yourwebsite.com" />
          <meta property="og:type" content="website" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Top Video Editing & Ads Agency" />
          <meta
            name="twitter:description"
            content="Grow faster with video editing + qualified lead generation + ads experts."
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

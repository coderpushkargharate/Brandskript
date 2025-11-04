import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Career from "./pages/Career";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { AuthProvider } from "./context/AuthContext";

// ✅ Corrected imports (removed space & capital consistency)
// import AdvanceLeadGeneration from "./pages/AdvanceLeadGeneration";
import WebDevelopment from "./pages/WebDevelopment";
import CaseStudy from "./pages/CaseStudy";
import LogoDesign from "./pages/LogoDesign";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import BrandDesignSection from "./pages/BrandDesign";
import AdvanceLeadGeneration from "./pages/AdvanceLeadGeneration ";
import BlogList from "./pages/BlogList";
import BlogDetails from "./pages/BlogDetails";
import CaseStudyList from "./components/CaseStudyList";
import CaseStudyDetail from "./components/CaseStudyDetail";
import BlogSection from "./components/BlogSection";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/career" element={<Career />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/advanceLeadGeneration"
                element={<AdvanceLeadGeneration />}
              />
              <Route path="/webdevelopment" element={<WebDevelopment />} />
              <Route path="/case-study" element={<CaseStudy />} />
              <Route
                path="/performancemarketing"
                element={<PerformanceMarketing />}
              />
              <Route path="/logodesign" element={<LogoDesign />} />
              <Route path="/branddesign" element={<BrandDesignSection />} />
              <Route path="/" element={<BlogList />} />
               <Route path="/blog" element={<BlogSection />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/case-study-list" element={<CaseStudyList />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail />} />
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

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Store from './pages/Store';
import Career from './pages/Career';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { AuthProvider } from './context/AuthContext';
import AdvanceLeadGeneration from './pages/AdvanceLeadGeneration ';
import WebDevelopment from './pages/WebDevelopment';
import CaseStudy from './pages/CaseStudy';
import LogoDesign from './pages/LogoDesign';
import PerformanceMarketing from './pages/PerformanceMarketing';
import BrandDesignSection from './pages/BrandDesign';
// import AdvanceLeadGeneration from "./pages/AdvanceLeadGeneration";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/advanceLeadGeneration" element={<AdvanceLeadGeneration />} />
             <Route path="/logodesign" element={<LogoDesign />} />
             <Route path="/webDevelopment" element={<WebDevelopment />} />
             <Route path="/case-study" element={<CaseStudy />} />
             <Route path="/performancemarketing" element={<PerformanceMarketing/>} />
            <Route path="/branddesign" element={<BrandDesignSection/>} />

          </Routes>
          <Footer />
          <Chatbot />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
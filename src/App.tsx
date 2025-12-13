import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Admin from "./pages/Admin";
import GetStarted from "./pages/GetStarted";
import CareersPage from "./pages/CareersPage";
import HelpCenter from "./pages/HelpCenter";
import PricingSection from "./pages/PricingSection";
import HandoffReviewsPage from "./pages/HandoffReviewsPage";
import LoginPage from "./pages/LoginPage";
import RemodelingPage from "./pages/RemodelingPage";
import HandymanPage from "./pages/HandymanPage";
import StartOnEstimate from "./pages/StartOnEstimate";
import FixAndFlipPage from "./pages/FixAndFlipPage";
import ConstructionCosts from "./pages/ConstructionCosts";
import EstimatingAIPage from "./pages/EstimatingAIPage";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/get-started" element={<GetStarted />} />

              {/* Additional Pages */}
              <Route path="/startofestimate" element={<StartOnEstimate />} />
              <Route path="/careerspage" element={<CareersPage />} />
              <Route path="/helpcenter" element={<HelpCenter />} />
              <Route path="/pricingsection" element={<PricingSection />} />
              <Route path="/handoffreview" element={<HandoffReviewsPage />} />
              <Route path="/loginpage" element={<LoginPage />} />
              <Route path="/remodelers" element={<RemodelingPage />} />
              <Route path="/handyman" element={<HandymanPage />} />
              <Route path="/fixandflip" element={<FixAndFlipPage />} />
              <Route path="/instant-ai-estimates" element={<EstimatingAIPage />} />
              <Route path="/construction-costs" element={<ConstructionCosts />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

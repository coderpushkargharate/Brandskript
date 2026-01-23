import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages from first app (e-commerce)
import ProductMain from "./pages/ProductMain";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";

// Pages from second app (website/content)
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Admin from "./pages/Admin";
import GetStarted from "./pages/GetStarted";
import CareersPage from "./pages/CareersPage";
import HelpCenter from "./pages/HelpCenter";
import PricingSection from "./pages/PricingSection";
import Testimonials from "./pages/Testimonials";
import LoginPage from "./pages/LoginPage";
import RemodelingPage from "./pages/RemodelingPage";
import SaaSBusiness from "./pages/SaaSBusiness";
import StartOnEstimate from "./pages/StartOnEstimate";
import ServiceBusinesses from "./pages/ServiceBusinesses";
import Healthcare from "./pages/Healthcare";
import RealEstate from "./pages/RealEstate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LeadGenCourse from "./pages/LeadGenCourse";
import Services from "./pages/Services";
import BookkeepingBusinessPage from "./pages/BookkeepingBusinessPage";
import AdSpendCalculator from "./pages/AdSpendCalculator";
import CaseStudies from "./pages/CaseStudyPage";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Specialities from "./pages/Specialities";
import LandingPage from "./components/LandingPage";

// Wrapper component to use useLocation inside Router
function AppContent() {
  const location = useLocation();

  // Cart state (from first app)
  const [cart, setCart] = useState([]);

  // Admin auth state
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken') || null);

  // Cart functions
  const addToCart = (product) => {
    const existingItem = cart.find(item => item._id === product._id);
    if (existingItem) {
      setCart(cart.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item._id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item._id === productId ? { ...item, quantity } : item
      ));
    }
  };

  const handleLogout = () => {
    setAdminToken(null);
    localStorage.removeItem('adminToken');
  };

  // Check if current route is LandingPage
  const isLandingPage = location.pathname === "/LandingPage";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Conditionally render Navbar */}
      {!isLandingPage && <Navbar cartCount={cart.length} adminToken={adminToken} />}

      <main className="flex-grow">
        <Routes>
          {/* Main website routes */}
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/service" element={<Services />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/careerspage" element={<CareersPage />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/pricingsection" element={<PricingSection />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/remodelers" element={<RemodelingPage />} />
          <Route path="/SaaSBusiness" element={<SaaSBusiness />} />
          <Route path="/ServiceBusinesses" element={<ServiceBusinesses />} />
          <Route path="/RealEstate" element={<RealEstate />} />
          <Route path="/Healthcare" element={<Healthcare />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/LeadGenCourse" element={<LeadGenCourse />} />
          <Route path="/BookKeeping" element={<BookkeepingBusinessPage />} />
          <Route path="/adspendcalculator" element={<AdSpendCalculator />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/LandingPage" element={<LandingPage />} />

          {/* Admin generic route */}
          <Route path="/admin" element={<Admin />} />

          {/* E-commerce specific routes */}
          <Route path="/products" element={<ProductMain />} />
          <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
          <Route path="/checkout" element={<CheckoutPage cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />

          {/* Admin auth & panel */}
          <Route
            path="/admin/login"
            element={<AdminLogin setAdminToken={setAdminToken} />}
          />
          <Route
            path="/adminPanel/dashboard"
            element={
              adminToken ? (
                <AdminPanel token={adminToken} onLogout={handleLogout} />
              ) : (
                <div className="flex items-center justify-center min-h-screen">
                  <p className="text-xl text-gray-600">Redirecting to login...</p>
                </div>
              )
            }
          />
        </Routes>
      </main>

      {/* Conditionally render Footer */}
      {!isLandingPage && <Footer />}
    </div>
  );
}

// Main App component
function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
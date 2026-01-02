import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

/* ---------- DATA ---------- */
const specialities = [
  { title: "Result-Oriented Ads", desc: "High ROI focused campaigns", link: "/result-oriented-ads" },
  { title: "ROI Tracking", desc: "Track ad performance accurately", link: "/roi-tracking" },
  { title: "UTM Tracking", desc: "Campaign attribution made easy", link: "/utm-tracking" },
  { title: "Pixel & GTM Setups", desc: "Advanced conversion tracking", link: "/pixel-gtm" },
  { title: "Unlimited Campaigns", desc: "Scale without limits", link: "/unlimited-campaigns" },
  { title: "Nurturing AI Agents", desc: "AI-based lead follow-up", link: "/ai-agents" },
  { title: "Automatic Reports", desc: "Weekly & monthly insights", link: "/automatic-reports" },
  { title: "Advance Targeting", desc: "Reach high-intent users", link: "/advanced-targeting" },
  { title: "Super Lead Qualification", desc: "Only quality leads delivered", link: "/lead-qualification" },
  { title: "Pre & Main Landing Page", desc: "Optimized for conversions", link: "/landing-pages" },
];

const whoWeServe = [
  { title: "SaaS Business", desc: "Scalable SaaS growth", link: "/handyman" },
  { title: "Service Businesses", desc: "More booked calls", link: "/fixandflip" },
  { title: "Real Estate", desc: "Buyer & seller leads", link: "/instant-ai-estimates" },
  { title: "Healthcare", desc: "Patient acquisition", link: "/construction-costs" },
];

const resources = [
  { title: "Blogs", desc: "Growth insights", link: "/blogs" },
  { title: "E-Books", desc: "Guides & playbooks", link: "/ebooks" },
  { title: "Ad Spend Calculator", desc: "Estimate ROI", link: "/ad-spend-calculator" },
  { title: "Lead Gen Course", desc: "Learn funnels", link: "/lead-gen-course" },
];

/* ---------- HEADER ---------- */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  /* CLOSE MOBILE MENU ON ROUTE CHANGE */
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  /* CLOSE MOBILE MENU ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header ref={headerRef} className="fixed top-3 left-0 w-full z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-28">
          <div className="rounded-[32px] shadow-lg px-6">
            <div className="flex items-center justify-between h-16">
              {/* LOGO */}
              <Link to="/" className="flex items-center">
                <img src="/ROI Edge Logos-01.png" alt="logo" className="w-24 sm:w-28 xl:w-32" />
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
                <Dropdown label="Who we serve" items={whoWeServe} />
                <Dropdown label="Specialities" items={specialities} cols="grid-cols-3" width="w-[900px]" />
                <Link to="/pricingsection">Case Studies</Link>
                <Link to="/handoffreview">Testimonials</Link>
                <Dropdown label="Resources" items={resources} />
                <Link to="/service">Services</Link>
                <Link to="/careerspage">We're Hiring</Link>
              </nav>

              {/* DESKTOP BUTTONS */}
              <div className="hidden lg:flex gap-3">
                <Link to="/Coffeebreak" className="px-5 py-1.5 border rounded-full">
                  Login
                </Link>
                <Link to="/get-started" className="bg-green-500 text-white px-6 py-2 rounded-full">
                  Start an estimate
                </Link>
              </div>

              {/* MOBILE TOGGLE */}
              <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>

            {/* MOBILE MENU */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 bg-white rounded-2xl p-4 shadow-xl space-y-4">
                <MobileDropdown title="Who we serve" items={whoWeServe} />
                <MobileDropdown title="Specialities" items={specialities} />
                <MobileDropdown title="Resources" items={resources} />

                <NavItem title="Case Studies" link="/pricingsection" />
                <NavItem title="Testimonials" link="/handoffreview" />
                <NavItem title="Services" link="/Coffeebreak" />
                <NavItem title="We're Hiring" link="/careerspage" />

                <div className="pt-4 border-t space-y-3">
                  <Link to="/loginpage" className="block text-center py-2 border rounded-full">
                    Login
                  </Link>
                  <Link to="/get-started" className="block text-center bg-green-500 text-white py-2 rounded-full">
                    Start an estimate
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* HEADER SPACER */}
      <div className="h-28" />
    </>
  );
};

/* ---------- COMPONENTS ---------- */

/* DESKTOP DROPDOWN WITH HOVER DELAY */
const Dropdown = ({ label, items, cols = "grid-cols-2", width = "w-[520px]" }) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 150); // <-- 150ms delay
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="flex items-center gap-1">{label} ▾</button>

      {open && (
        <div className={`absolute top-full mt-4 bg-white shadow-xl rounded-xl p-6 grid ${cols} gap-5 ${width}`}>
          {items.map((item) => (
            <Link key={item.title} to={item.link}>
              <p className="font-medium hover:text-green-600">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* NAV ITEM */
const NavItem = ({ title, link }) => (
  <Link to={link} className="block py-2 px-3 rounded-lg hover:bg-gray-100">
    {title}
  </Link>
);

/* MOBILE DROPDOWN */
const MobileDropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between px-4 py-3 font-medium"
      >
        {title}
        <span className={`${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="px-4 pb-3 space-y-3">
          {items.map((item) => (
            <Link key={item.title} to={item.link}>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;

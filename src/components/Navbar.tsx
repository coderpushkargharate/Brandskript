import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

/* ---------- DATA ---------- */
const specialities = [
  { title: "Result-Oriented Ads", desc: "High ROI focused campaigns", link: "/specialities" },
  { title: "ROI Tracking", desc: "Track ad performance accurately", link: "/specialities" },
  { title: "UTM Tracking", desc: "Campaign attribution made easy", link: "/specialities" },
  { title: "Pixel & GTM Setups", desc: "Advanced conversion tracking", link: "/specialities" },
  { title: "Unlimited Campaigns", desc: "Scale without limits", link: "/specialities" },
  { title: "Nurturing AI Agents", desc: "AI-based lead follow-up", link: "/specialities" },
  { title: "Automatic Reports", desc: "Weekly & monthly insights", link: "/specialities" },
  { title: "Advance Targeting", desc: "Reach high-intent users", link: "/specialities" },
  { title: "Super Lead Qualification", desc: "Only quality leads delivered", link: "/specialities" },
  { title: "Pre & Main Landing Page", desc: "Optimized for conversions", link: "/specialities" },
];

const whoWeServe = [
  { title: "SaaS Business", desc: "Scalable SaaS growth", link: "/SaaSBusiness" },
  { title: "Service Businesses", desc: "More booked calls", link: "/ServiceBusinesses" },
  { title: "Real Estate", desc: "Buyer & seller leads", link: "/RealEstate" },
  { title: "Healthcare", desc: "Patient acquisition", link: "/Healthcare" },
  { title: "BookKeeping", desc: "Patient acquisition", link: "/BookKeeping" },
];

const resources = [
  { title: "Blogs", desc: "Growth insights", link: "/blogs" },
  { title: "E-Books", desc: "Guides & playbooks", link: "/products" },
  { title: "Ad Spend Calculator", desc: "Estimate ROI", link: "/adspendcalculator" },
  { title: "Lead Gen Course", desc: "Learn funnels", link: "/LeadGenCourse" },
];

/* ---------- HEADER ---------- */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
        <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-28 ">
          <div className="rounded-[32px] shadow-lg px-6 bg-white">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center">
                <img
                  src="/ROI Edge Logos-01.png"
                  alt="logo"
                  className="w-24 sm:w-28 xl:w-32"
                />
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
                <Dropdown label="Who we serve" items={whoWeServe} />
                
                {/* ✅ SPECIALITIES: hover + click */}
                <Dropdown
                  label="Specialities"
                  link="/specialities"
                  items={specialities}
                  cols="grid-cols-3"
                  width="w-[900px]"
                />

                <Link to="/case-studies">Case Studies</Link>
                <Link to="/Testimonials">Testimonials</Link>
                <Dropdown label="Resources" items={resources} />
                <Link to="/service">Services</Link>
                {/* <Link to="/Coffeebreak">Lead Gen Course</Link> */}
              </nav>

              <div className="hidden lg:flex gap-3">
                <Link to="/loginpage" className="px-5 py-1.5 border rounded-full">
                  Login
                </Link>
                <Link to="/get-started" className="bg-green-500 text-white px-6 py-2 rounded-full">
                  Book An Appointment
                </Link>
              </div>

              <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>

            {/* MOBILE MENU */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 bg-white rounded-2xl p-4 shadow-xl space-y-4">
                <MobileDropdown title="Who we serve" items={whoWeServe} mainLink="/who-we-serve" />
                <MobileDropdown title="Specialities" items={specialities} mainLink="/specialities" />
                <MobileDropdown title="Resources" items={resources} mainLink="/resources" />

                <NavItem title="Case Studies" link="/pricingsection" />
                <NavItem title="Testimonials" link="/handoffreview" />
                <NavItem title="Services" link="/Coffeebreak" />
                <NavItem title="We're Hiring" link="/careerspage" />

                <div className="pt-4 border-t space-y-3">
                  <Link to="/loginpage" className="block text-center py-2 border rounded-full">
                    Login
                  </Link>
                  <Link to="/get-started" className="block text-center bg-green-500 text-white py-2 rounded-full">
                    Book An Appointment
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="h-28" />
    </>
  );
};

/* ---------- COMPONENTS ---------- */

/* DESKTOP DROPDOWN */
const Dropdown = ({ label, link, items, cols = "grid-cols-2", width = "w-[520px]" }) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {link ? (
        <Link to={link} className="flex items-center gap-1">
          {label} ▾
        </Link>
      ) : (
        <button className="flex items-center gap-1">
          {label} ▾
        </button>
      )}

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

const NavItem = ({ title, link }) => (
  <Link to={link} className="block py-2 px-3 rounded-lg hover:bg-gray-100">
    {title}
  </Link>
);

/* MOBILE DROPDOWN */
const MobileDropdown = ({ title, items, mainLink }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl">
      <div className="flex justify-between items-center px-4 py-3">
        <Link to={mainLink} className="font-medium">
          {title}
        </Link>
        <button onClick={() => setOpen(!open)}>
          <span className={`${open ? "rotate-180" : ""}`}>▾</span>
        </button>
      </div>

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

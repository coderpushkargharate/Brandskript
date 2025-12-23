import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const timerRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <>
      <header className="fixed top-3 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 bg-white border rounded-full">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/ROI Edge Logos-01.png"
                className="w-28"
                alt="logo"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-700">

              {/* Who we serve */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("serve")}
                onMouseLeave={handleMouseLeave}
              >
                <button>Who we serve ▾</button>
                {openDropdown === "serve" && (
                  <div className="absolute top-full mt-3 p-6 w-[600px] bg-white shadow-xl rounded-xl grid grid-cols-2 gap-6">
                    <DropdownLink title="SaaS Business" link="/saas-business" />
                    <DropdownLink title="Service Businesses" link="/service-businesses" />
                    <DropdownLink title="Real Estate" link="/real-estate" />
                    <DropdownLink title="Doctors / Healthcare" link="/healthcare" />
                  </div>
                )}
              </div>

              {/* Specialities */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("specialities")}
                onMouseLeave={handleMouseLeave}
              >
                <button>Specialities ▾</button>
                {openDropdown === "specialities" && (
                  <div className="absolute top-full mt-3 p-6 w-[900px] bg-white shadow-xl rounded-xl grid grid-cols-3 gap-5">
                    {specialities.map((item) => (
                      <DropdownLink
                        key={item.title}
                        title={item.title}
                        link={item.link}
                      />
                    ))}
                  </div>
                )}
              </div>

              <Link to="/case-studies">Case Studies</Link>
              <Link to="/testimonials">Testimonials</Link>

              {/* Resources */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <button>Resources ▾</button>
                {openDropdown === "resources" && (
                  <div className="absolute top-full mt-3 p-6 w-[500px] bg-white shadow-xl rounded-xl grid grid-cols-2 gap-6">
                    <DropdownLink title="Blogs" link="/blogs" />
                    <DropdownLink title="E-Books" link="/ebooks" />
                    <DropdownLink title="Ad Spend Calculator" link="/ad-spend-calculator" />
                    <DropdownLink title="Lead Gen Mastery Course" link="/lead-gen-course" />
                  </div>
                )}
              </div>

              <Link to="/help-center">Services</Link>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-4">
              <Link to="/loginpage" className="px-5 py-1.5 border rounded-full">
                Login
              </Link>
              <Link to="/get-started">
                <button className="bg-green-500 text-white px-6 py-2 rounded-full">
                  Start an estimate
                </button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">

              <MobileDropdown
                title="Who we serve"
                items={[
                  { title: "SaaS Business", link: "/saas-business" },
                  { title: "Service Businesses", link: "/service-businesses" },
                  { title: "Real Estate", link: "/real-estate" },
                  { title: "Doctors / Healthcare", link: "/healthcare" },
                ]}
              />

              <MobileDropdown title="Specialities" items={specialities} />

              <Link to="/case-studies" className="block">Case Studies</Link>
              <Link to="/testimonials" className="block">Testimonials</Link>

              <MobileDropdown
                title="Resources"
                items={[
                  { title: "Blogs", link: "/blogs" },
                  { title: "E-Books", link: "/ebooks" },
                  { title: "Ad Spend Calculator", link: "/ad-spend-calculator" },
                  { title: "Lead Gen Mastery Course", link: "/lead-gen-course" },
                ]}
              />

              <Link to="/help-center">Services</Link>
            </div>
          )}
        </div>
      </header>

      <div className="h-24"></div>
    </>
  );
};

/* ---------- DATA ---------- */

const specialities = [
  { title: "Result-Oriented Ads", link: "/result-oriented-ads" },
  { title: "ROI Tracking", link: "/roi-tracking" },
  { title: "UTM Tracking", link: "/utm-tracking" },
  { title: "Pixel & GTM Setups", link: "/pixel-gtm" },
  { title: "Unlimited Campaigns", link: "/unlimited-campaigns" },
  { title: "Nurturing AI Agents", link: "/ai-agents" },
  { title: "Automatic Reports", link: "/automatic-reports" },
  { title: "Advance Targeting", link: "/advanced-targeting" },
  { title: "Super Lead Qualification", link: "/lead-qualification" },
  { title: "Pre & Main Landing Page", link: "/landing-pages" },
];

/* ---------- COMPONENTS ---------- */

const DropdownLink = ({ title, link }) => (
  <Link
    to={link}
    className="block hover:text-green-600 font-medium"
  >
    {title}
  </Link>
);

const MobileDropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between">
        {title} ▾
      </button>
      {open && (
        <div className="ml-4 mt-2 space-y-2 text-sm">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="block hover:text-green-600"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;

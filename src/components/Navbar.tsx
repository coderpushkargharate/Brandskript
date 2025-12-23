import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
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

/* ---------- MAIN COMPONENT ---------- */

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const timerRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <header className="fixed top-3 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white border rounded-full px-5">
            <div className="flex items-center justify-between h-16">

              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img src="/ROI Edge Logos-01.png" alt="logo" className="w-28 xl:w-32" />
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden lg:flex items-center gap-6 text-[15px] xl:text-base font-medium text-gray-700 flex-nowrap whitespace-nowrap">

                {/* Who we serve */}
                <DropdownWrapper
                  label="Who we serve"
                  open={openDropdown === "serve"}
                  onEnter={() => handleMouseEnter("serve")}
                  onLeave={handleMouseLeave}
                  width="w-[520px]"
                >
                  <DropdownItem title="SaaS Business" desc="Scalable SaaS growth" link="/saas-business" />
                  <DropdownItem title="Service Businesses" desc="More booked calls" link="/service-businesses" />
                  <DropdownItem title="Real Estate" desc="Buyer & seller leads" link="/real-estate" />
                  <DropdownItem title="Healthcare" desc="Patient acquisition" link="/healthcare" />
                </DropdownWrapper>

                {/* Specialities */}
                <DropdownWrapper
                  label="Specialities"
                  open={openDropdown === "specialities"}
                  onEnter={() => handleMouseEnter("specialities")}
                  onLeave={handleMouseLeave}
                  width="w-[900px]"
                  cols="grid-cols-3"
                >
                  {specialities.map((item) => (
                    <DropdownItem key={item.title} {...item} />
                  ))}
                </DropdownWrapper>

                <Link to="/pricingsection" className="whitespace-nowrap">Case Studies</Link>
                <Link to="/handoffreview" className="whitespace-nowrap">Testimonials</Link>

                {/* Resources */}
                <DropdownWrapper
                  label="Resources"
                  open={openDropdown === "resources"}
                  onEnter={() => handleMouseEnter("resources")}
                  onLeave={handleMouseLeave}
                  width="w-[500px]"
                >
                  <DropdownItem title="Blogs" desc="Growth insights" link="/blogs" />
                  <DropdownItem title="E-Books" desc="Guides & playbooks" link="/ebooks" />
                  <DropdownItem title="Ad Spend Calculator" desc="Estimate ROI" link="/ad-spend-calculator" />
                  <DropdownItem title="Lead Gen Course" desc="Learn funnels" link="/lead-gen-course" />
                </DropdownWrapper>

                <Link to="/Coffeebreak" className="whitespace-nowrap">Services</Link>
                <Link to="/careerspage" className="whitespace-nowrap">We're Hiring</Link>
              </nav>

              {/* DESKTOP BUTTONS */}
              <div className="hidden lg:flex gap-3 whitespace-nowrap">
                <Link to="/loginpage" className="px-5 py-1.5 border rounded-full">
                  Login
                </Link>
                <Link to="/get-started">
                  <button className="bg-green-500 text-white px-6 py-2 rounded-full">
                    Start an estimate
                  </button>
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
                <MobileDropdown title="Who we serve" items={[
                  { title: "SaaS Business", desc: "Scalable SaaS growth", link: "/saas-business" },
                  { title: "Service Businesses", desc: "More booked calls", link: "/service-businesses" },
                  { title: "Real Estate", desc: "Buyer & seller leads", link: "/real-estate" },
                  { title: "Healthcare", desc: "Patient acquisition", link: "/healthcare" },
                ]} />

                <MobileDropdown title="Specialities" items={specialities} />

                <NavItem title="Case Studies" link="/pricingsection" />
                <NavItem title="Testimonials" link="/handoffreview" />
                <NavItem title="Services" link="/help-center" />

                <div className="pt-4 border-t space-y-3">
                  <Link to="/loginpage" className="block text-center py-2 border rounded-full">
                    Login
                  </Link>
                  <Link to="/get-started">
                    <button className="w-full bg-green-500 text-white py-2 rounded-full">
                      Start an estimate
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-24" />
    </>
  );
};

/* ---------- SUB COMPONENTS ---------- */

const DropdownWrapper = ({ label, open, onEnter, onLeave, width, cols = "grid-cols-2", children }) => (
  <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
    <button className="flex items-center gap-1 whitespace-nowrap">
      {label} <span>▾</span>
    </button>
    {open && (
      <div className={`absolute top-full mt-3 p-6 bg-white shadow-xl rounded-xl grid ${cols} gap-5 ${width}`}>
        {children}
      </div>
    )}
  </div>
);

const DropdownItem = ({ title, desc, link }) => (
  <Link to={link} className="block">
    <p className="font-medium text-gray-900 hover:text-green-600">{title}</p>
    <p className="text-sm text-gray-500">{desc}</p>
  </Link>
);

const NavItem = ({ title, link }) => (
  <Link to={link} className="block py-2 px-3 rounded-lg hover:bg-gray-100">
    {title}
  </Link>
);

const MobileDropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between px-4 py-3 font-medium">
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

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Desktop dropdown
  const [mobileDropdown, setMobileDropdown] = useState(null); // Mobile
  const timerRef = useRef(null);

  // ➤ Show dropdown immediately
  const handleMouseEnter = (menu) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenDropdown(menu);
  };

  // ➤ Hide dropdown after short delay (fixes disappearing issue)
  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 250);
  };

  return (
    <header className="fixed top-4 left-0 w-full z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048947.png"
              className="w-6 h-6"
              alt="logo"
            />
            <span className="font-bold text-green-600 text-xl">Handoff</span>
          </Link>

          {/* Desktop Navbar */}
          <nav className="hidden md:flex items-center space-x-8 text-md font-medium text-gray-700">

            {/* Who We Serve */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("serve")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 hover:text-black">
                Who we serve ▾
              </button>

              {openDropdown === "serve" && (
                <div className="absolute top-full left-0 mt-3 p-6 w-[650px] bg-white shadow-xl rounded-xl grid grid-cols-3 gap-6">

                  <div>
                    <h3 className="font-semibold text-lg">Remodelers</h3>
                    <p className="text-gray-500 text-sm">
                      Scale your remodeling business profitably.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">Handyman</h3>
                    <p className="text-gray-500 text-sm">
                      Become the best paid handyman in your area.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">Fix and Flip</h3>
                    <p className="text-gray-500 text-sm">
                      A shortcut to growing your real estate empire.
                    </p>
                  </div>

                </div>
              )}
            </div>

            {/* Features */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("features")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 hover:text-black">
                Features ▾
              </button>

              {openDropdown === "features" && (
                <div className="absolute top-full left-0 mt-3 p-6 w-[900px] bg-white shadow-xl rounded-xl grid grid-cols-3 gap-6">

                  <FeatureItem title="Instant AI Estimates" desc="Generate detailed estimates in seconds." />
                  <FeatureItem title="Invoicing" desc="Turn proposals into invoices and get paid quicker." />
                  <FeatureItem title="Project Management" desc="Manage estimates, tasks, invoices & files." />

                  <FeatureItem title="Client Management System" desc="Store all client info in one place." />
                  <FeatureItem title="Change Orders" desc="Create and manage scope changes easily." />
                  <FeatureItem title="AI Agent" desc="A personal AI assistant for your back-office." />

                  <FeatureItem title="Winning AI Proposals" desc="Create winning proposals in one click." />
                  <FeatureItem title="File Management" desc="Organize drawings, photos & files." />
                  <FeatureItem title="Homeowner Financing" desc="Offer financing to close more deals." />

                  <FeatureItem title="Creating Estimates from Files" desc="Upload drawings & get instant estimates." />
                  <FeatureItem title="AI Documents" desc="Upload files & get AI-generated documents." />
                  <FeatureItem title="AI Transcription" desc="AI transcribes walkthroughs & meetings." />
                </div>
              )}
            </div>

            <Link to="/PricingSection" className="hover:text-black">Pricing</Link>
            <Link to="/Handoffreview" className="hover:text-black">Reviews</Link>

            {/* Resources */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 hover:text-black">
                Resources ▾
              </button>

              {openDropdown === "resources" && (
                <div className="absolute top-full left-0 mt-3 p-6 w-[500px] bg-white shadow-xl rounded-xl grid grid-cols-2 gap-6">

                  <div>
                    <h3 className="font-semibold text-lg">Blog</h3>
                    <p className="text-gray-500 text-sm">Tips, trends & AI insights.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">Construction Costs</h3>
                    <p className="text-gray-500 text-sm">
                      Accurate up-to-date cost data.
                    </p>
                  </div>

                </div>
              )}
            </div>

            <Link to="/HelpCenter" className="hover:text-black">Help Center</Link>
            <Link to="/careerspage" className="hover:text-black">We're Hiring</Link>
          </nav>

          {/* Desktop Right Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/loginpage"
              className="px-5 py-1.5 border border-gray-300 font-bold rounded-full text-md hover:bg-gray-100"
            >
              Login
            </Link>

            <Link to="/startofestimate">
              <button className="bg-green-500 text-white font-bold px-6 py-2 rounded-full text-md hover:bg-green-600">
                Start an estimate
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-4 space-y-4 text-gray-700">

            {/* Serve Mobile */}
            <MobileDropdown
              title="Who we serve"
              open={mobileDropdown === "serve"}
              toggle={() =>
                setMobileDropdown(mobileDropdown === "serve" ? null : "serve")
              }
              items={[
                { title: "Remodelers", desc: "Scale your remodeling business." },
                { title: "Handyman", desc: "Become the best handyman." },
                { title: "Fix and Flip", desc: "Grow your real estate empire." },
              ]}
            />

            {/* Features Mobile */}
            <MobileDropdown
              title="Features"
              open={mobileDropdown === "features"}
              toggle={() =>
                setMobileDropdown(
                  mobileDropdown === "features" ? null : "features"
                )
              }
              items={[
                { title: "Instant AI Estimates" },
                { title: "Invoicing" },
                { title: "Project Management" },
                { title: "Client Management System" },
                { title: "Change Orders" },
                { title: "AI Agent" },
                { title: "Winning AI Proposals" },
                { title: "File Management" },
                { title: "Homeowner Financing" },
                { title: "Creating Estimates from Files" },
                { title: "AI Documents" },
                { title: "AI Transcription" },
              ]}
            />

            {/* Pricing */}
            <Link to="/PricingSection" className="block">Pricing</Link>
            <Link to="/Handoffreview" className="block">Reviews</Link>

            {/* Resources Mobile */}
            <MobileDropdown
              title="Resources"
              open={mobileDropdown === "resources"}
              toggle={() =>
                setMobileDropdown(
                  mobileDropdown === "resources" ? null : "resources"
                )
              }
              items={[
                { title: "Blog" },
                { title: "Construction Costs" },
              ]}
            />

            <Link to="/HelpCenter" className="block">Help Center</Link>
            <Link to="/careerspage" className="block">We're Hiring</Link>

            <Link
              to="/loginpage"
              className="px-5 py-2 border border-gray-300 rounded-full block text-center"
            >
              Login
            </Link>

            <Link to="/startofestimate">
              <button className="w-full bg-green-500 text-white py-2 rounded-full text-sm">
                Start an estimate
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

/* ---------------- REUSABLE COMPONENTS ---------------- */

const FeatureItem = ({ title, desc }) => (
  <div>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-gray-500 text-sm">{desc}</p>
  </div>
);

const MobileDropdown = ({ title, open, toggle, items }) => (
  <div>
    <button className="w-full flex justify-between" onClick={toggle}>
      {title} ▾
    </button>

    {open && (
      <div className="ml-4 mt-2 space-y-2 text-sm text-gray-600">
        {items.map((i, index) => (
          <div key={index}>
            <p className="font-medium">{i.title}</p>
            {i.desc && <p className="text-gray-500 text-xs">{i.desc}</p>}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Header;

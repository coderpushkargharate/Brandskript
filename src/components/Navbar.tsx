import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const timerRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 250);
  };

  return (
    <>
      {/* ----------- FIXED HEADER ------------- */}
      <header className="fixed top-3 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-white border rounded-full lg:px-8">
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

              {/* Who we serve */}
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
                    <DropdownLink
                      title="Remodelers"
                      desc="Scale your remodeling business profitably."
                      link="/remodelers"
                    />

                    <DropdownLink
                      title="Handyman"
                      desc="Become the best paid handyman in your area."
                      link="/handyman"
                    />

                    <DropdownLink
                      title="Fix and Flip"
                      desc="A shortcut to growing your real estate empire."
                      link="/fixandflip"
                    />
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
                    <DropdownLink title="Instant AI Estimates" desc="Generate detailed estimates." link="/instant-ai-estimates" />
                    <DropdownLink title="Invoicing" desc="Turn proposals into invoices." link="/invoicing" />
                    <DropdownLink title="Project Management" desc="Manage all projects." link="/project-management" />

                    <DropdownLink title="Client Management System" desc="Store all client info." link="/cms" />
                    <DropdownLink title="Change Orders" desc="Manage scope changes." link="/change-orders" />
                    <DropdownLink title="AI Agent" desc="Your personal AI assistant." link="/ai-agent" />

                    <DropdownLink title="Winning AI Proposals" desc="Create proposals fast." link="/ai-proposals" />
                    <DropdownLink title="File Management" desc="Organize files." link="/file-management" />
                    <DropdownLink title="Homeowner Financing" desc="Offer financing." link="/homeowner-financing" />

                    <DropdownLink title="Estimates from Files" desc="Upload drawings." link="/estimate-from-files" />
                    <DropdownLink title="AI Documents" desc="Generate AI docs." link="/ai-documents" />
                    <DropdownLink title="AI Transcription" desc="Auto transcription." link="/ai-transcription" />
                  </div>
                )}
              </div>

              {/* Normal Links */}
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
                    <DropdownLink title="Blogs" desc="Tips, trends & AI insights." link="/blogs" />

                    <DropdownLink
                      title="Construction Costs"
                      desc="Accurate up-to-date cost data."
                      link="/construction-costs"
                    />
                  </div>
                )}
              </div>

              <Link to="/HelpCenter" className="hover:text-black">Help Center</Link>
              <Link to="/careerspage" className="hover:text-black">We're Hiring</Link>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/loginpage"
                className="px-5 py-1.5 border border-gray-300 rounded-full text-md hover:bg-gray-100"
              >
                Login
              </Link>

              <Link to="/get-started">
                <button className="bg-green-500 text-white px-6 py-2 rounded-full text-md hover:bg-green-600">
                  Start an estimate
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
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

              {/* Mobile Dropdowns */}
              <MobileDropdown
                title="Who we serve"
                open={mobileDropdown === "serve"}
                toggle={() => setMobileDropdown(mobileDropdown === "serve" ? null : "serve")}
                items={[
                  { title: "Remodelers", link: "/remodelers" },
                  { title: "Handyman", link: "/handyman" },
                  { title: "Fix and Flip", link: "/fixandflip" },
                ]}
              />

              <MobileDropdown
                title="Features"
                open={mobileDropdown === "features"}
                toggle={() => setMobileDropdown(mobileDropdown === "features" ? null : "features")}
                items={[
                  { title: "Instant AI Estimates", link: "/instant-ai-estimates" },
                  { title: "Invoicing", link: "/invoicing" },
                  { title: "Project Management", link: "/project-management" },
                  { title: "Client Management System", link: "/cms" },
                  { title: "Change Orders", link: "/change-orders" },
                  { title: "AI Agent", link: "/ai-agent" },
                  { title: "Winning AI Proposals", link: "/ai-proposals" },
                  { title: "File Management", link: "/file-management" },
                  { title: "Homeowner Financing", link: "/homeowner-financing" },
                  { title: "Estimates From Files", link: "/estimate-from-files" },
                  { title: "AI Documents", link: "/ai-documents" },
                  { title: "AI Transcription", link: "/ai-transcription" },
                ]}
              />

              <Link to="/PricingSection" className="block">Pricing</Link>
              <Link to="/Handoffreview" className="block">Reviews</Link>

              <MobileDropdown
                title="Resources"
                open={mobileDropdown === "resources"}
                toggle={() => setMobileDropdown(mobileDropdown === "resources" ? null : "resources")}
                items={[
                  { title: "Blog", link: "/blog" },
                  { title: "Construction Costs", link: "/construction-costs" },
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

      {/* ----------- THIS GIVES SPACE BELOW HEADER ------------- */}
      <div className="h-24"></div>
    </>
  );
};

/* ------------------ REUSABLE COMPONENTS ------------------ */

const DropdownLink = ({ title, desc, link }) => (
  <Link to={link} className="block hover:text-green-600">
    <h3 className="font-semibold">{title}</h3>
    <p className="text-gray-500 text-sm">{desc}</p>
  </Link>
);

const MobileDropdown = ({ title, open, toggle, items }) => (
  <div>
    <button className="w-full flex justify-between" onClick={toggle}>
      {title} ▾
    </button>

    {open && (
      <div className="ml-4 mt-2 space-y-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <Link key={index} to={item.link} className="block hover:text-green-600">
            {item.title}
          </Link>
        ))}
      </div>
    )}
  </div>
);

export default Header;

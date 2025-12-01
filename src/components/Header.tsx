import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const dropdownStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100vw",
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    padding: "40px 48px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
    transition: "opacity 0.35s ease, transform 0.35s ease",
    transform: "translateY(15px)",
    opacity: 0,
    pointerEvents: "none",
  };

  const dropdownActiveStyle: React.CSSProperties = {
    ...dropdownStyle,
    opacity: 1,
    transform: "translateY(0px)",
    pointerEvents: "auto",
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">

            {/* WHO WE SERVE */}
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown("serve")}
              onMouseLeave={() => toggleDropdown("")}
              style={{ cursor: "pointer" }}
            >
              <button className="flex items-center gap-1 hover:text-black transition-all">
                Who we serve
                <span
                  style={{
                    display: "inline-block",
                    transition: "transform 0.3s",
                    transform: activeDropdown === "serve" ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▾
                </span>
              </button>

              <div style={activeDropdown === "serve" ? dropdownActiveStyle : dropdownStyle}>
                <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto">

                  {[
                    ["Remodelers", "/remodelers", "Scale your remodeling business profitably."],
                    ["Handyman", "/handyman", "Become the best paid handyman in your area."],
                    ["Fix and Flip", "/fix-and-flip", "Grow your real estate empire faster."],
                  ].map(([title, link, desc]) => (
                    <Link
                      to={link}
                      key={link}
                      style={{
                        padding: "12px",
                        borderRadius: "10px",
                        transition: "background 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "rgba(0,0,0,0.05)")
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* FEATURES */}
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown("features")}
              onMouseLeave={() => toggleDropdown("")}
              style={{ cursor: "pointer" }}
            >
              <button className="flex items-center gap-1 hover:text-black transition-all">
                Features
                <span
                  style={{
                    display: "inline-block",
                    transition: "transform 0.3s",
                    transform: activeDropdown === "features" ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▾
                </span>
              </button>

              <div style={activeDropdown === "features" ? dropdownActiveStyle : dropdownStyle}>
                <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto">

                  {[
                    ["Instant AI Estimates", "/ai-estimates"],
                    ["Invoicing", "/invoicing"],
                    ["Project Management", "/project-management"],
                    ["Client Management", "/client-management"],
                    ["Change Orders", "/change-orders"],
                    ["AI Agent", "/ai-agent"],
                  ].map(([title, link]) => (
                    <Link
                      to={link}
                      key={link}
                      style={{
                        padding: "12px",
                        borderRadius: "10px",
                        transition: "background 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "rgba(0,0,0,0.05)")
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <h3 className="font-bold text-gray-900">{title}</h3>
                      <p className="text-gray-600 text-sm mt-1">Explore details</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* RESOURCES */}
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown("resources")}
              onMouseLeave={() => toggleDropdown("")}
              style={{ cursor: "pointer" }}
            >
              <button className="flex items-center gap-1 hover:text-black transition-all">
                Resources
                <span
                  style={{
                    display: "inline-block",
                    transition: "transform 0.3s",
                    transform: activeDropdown === "resources" ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▾
                </span>
              </button>

              <div style={activeDropdown === "resources" ? dropdownActiveStyle : dropdownStyle}>
                <div className="grid grid-cols-2 gap-10 max-w-5xl mx-auto">

                  {[
                    ["Blog", "/blog"],
                    ["Construction Costs", "/construction-costs"],
                  ].map(([title, link]) => (
                    <Link
                      to={link}
                      key={link}
                      style={{
                        padding: "12px",
                        borderRadius: "10px",
                        transition: "background 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "rgba(0,0,0,0.05)")
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
                      <p className="text-gray-600 text-sm mt-1">Learn more</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/pricing" className="hover:text-black transition">Pricing</Link>
            <Link to="/reviews" className="hover:text-black transition">Reviews</Link>
            <Link to="/help" className="hover:text-black transition">Help Center</Link>
            <Link to="/career" className="hover:text-black transition">We're Hiring</Link>
          </nav>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="px-5 py-1.5 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition"
            >
              Login
            </Link>

            <Link to="/estimate">
              <button className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition">
                Start an estimate
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

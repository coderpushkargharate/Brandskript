import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Refs to detect clicks outside dropdowns
  const servicesRef = useRef(null);
  const resourcesRef = useRef(null);

  // ✅ Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target) &&
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <span className="font-extrabold text-black tracking-wide text-xl">
              Brandskript
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 bg-gray-100 px-6 py-2 rounded-full border border-gray-200 relative">
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => {
                  setIsServicesOpen((prev) => !prev);
                  setIsResourcesOpen(false);
                }}
                className="flex items-center text-gray-800 hover:text-blue-600 focus:outline-none"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute ms-5 left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 shadow-2xl rounded-xl p-6 w-[1100px] z-50 transition-all duration-300">
                  <div className="grid grid-cols-4 gap-8">
                    <div>
                      <img
                        src="/images/services.jpg"
                        alt="Services"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
                        Lead Gen &gt;
                      </h3>
                      <ul className="text-gray-600 space-y-1 mb-4">
                        <li>• Through Ads</li>
                        <li>
                          <p className="font-semibold text-gray-800">
                            • Through Email Marketing
                          </p>
                          <ul className="ml-6 text-gray-600 space-y-1 mt-1">
                            <li>- Data Scraping</li>
                            <li>- Data Outreaching</li>
                          </ul>
                        </li>
                        <li>• Through IVR / AI Agent</li>
                        <li>• Through Insta DMing</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
                        Ad Expertise &gt;
                      </h3>
                      <ul className="ml-4 list-disc text-gray-600 space-y-1">
                        <li>Meta Ads</li>
                        <li>Google Ads</li>
                        <li>LinkedIn Ads</li>
                        <li>TikTok Ads</li>
                        <li>Twitter Ads</li>
                      </ul>
                    </div>
                       <div>
                      <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
                        Other &gt;
                      </h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Branding</li>
                        <li>• Website Design</li>
                        <li>
                          <p className="font-semibold text-gray-800">
                            • Graphic Design
                          </p>
                          <ul className="ml-6 text-gray-600 space-y-1 mt-1">
                            <li>- Brochure</li>
                            <li>- Magazine</li>
                            <li>- Pamphlet</li>
                          </ul>
                        </li>
                        <li>• Packaging Design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => {
                  setIsResourcesOpen((prev) => !prev);
                  setIsServicesOpen(false);
                }}
                className="flex items-center text-gray-800 hover:text-blue-600 focus:outline-none"
              >
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isResourcesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 shadow-2xl rounded-xl p-4 w-[450px] z-50 transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="w-1/3">
                      <img
                        src="/images/resources.jpg"
                        alt="Resources"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                {/* Right List */}
                <div className="w-2/3 flex flex-col justify-center">
                  <ul className="text-gray-700 space-y-3 text-base">
                    <li>
                      <Link
                        to="/blog"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/testimonials"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/comparisons"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Comparisons
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/wall-of-love"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Wall of Love
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/free-ebooks"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Free E-Books
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Link
              to="/testimonials"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="/case-study-list"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Case Studies
            </Link>
            <Link
              to="/whyus"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Why Us?
            </Link>
          </nav>

          {/* Right Button */}
          <div className="hidden md:flex items-center">
            <Link to="/Scheduleacall">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Schedule A Call →
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <details>
                <summary className="cursor-pointer text-gray-700 font-semibold">
                  Services
                </summary>
                <div className="ml-4 mt-2 space-y-2 text-gray-600 text-sm">
                  <ul className="list-disc ml-4">
                    <li>Lead Gen</li>
                    <li>Other</li>
                    <li>Ad Expertise</li>
                  </ul>
                </div>
              </details>

              <details>
                <summary className="cursor-pointer text-gray-700 font-semibold">
                  Resources
                </summary>
                <div className="ml-4 mt-2 space-y-2 text-gray-600 text-sm">
                  <Link to="/blog" className="block hover:text-blue-600">
                    Blog
                  </Link>
                  <Link to="/testimonials" className="block hover:text-blue-600">
                    Testimonials
                  </Link>
                  <Link to="/comparisons" className="block hover:text-blue-600">
                    Comparisons
                  </Link>
                  <Link to="/wall-of-love" className="block hover:text-blue-600">
                    Wall of Love
                  </Link>
                  <Link to="/free-ebooks" className="block hover:text-blue-600">
                    Free E-Books
                  </Link>
                </div>
              </details>

              <Link to="/case-study-list" className="text-gray-700 hover:text-blue-600">
                Case Studies
              </Link>
              <Link to="/whyus" className="text-gray-700 hover:text-blue-600">
                Why Us?
              </Link>

              <Link to="/Scheduleacall">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Schedule A Call →
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

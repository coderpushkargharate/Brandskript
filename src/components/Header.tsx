import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu

  return (
    <header className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              // src="https://framerusercontent.com/images/U7g3LocgQq1Bb0Sv17Ra0LaPrs.png"
              alt="Logo"
              className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 object-contain"
            />
            <span className="font-extrabold text-black tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl">
              BrandName
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 bg-gray-100 px-6 py-2 rounded-full border border-gray-200 shadow-sm">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>

            {/* Services Dropdown (center aligned) */}
            <div className="relative group">
              <button className="text-gray-800 hover:text-blue-600 focus:outline-none">
                Services
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-white border border-gray-200 shadow-xl rounded-xl p-6 w-[700px] z-50">
                <div className="grid grid-cols-3 gap-6">
                  {/* Marketing */}
                  <div>
                    <h3 className="text-gray-500 uppercase text-sm font-semibold mb-2">
                      Marketing
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          to="/advanceLeadGeneration"
                          className="block text-gray-800 font-medium hover:text-blue-600"
                        >
                          Advance Lead Generation
                        </Link>
                        <p className="text-sm text-gray-500">
                          Through PPC Ads Only
                        </p>
                      </li>
                      <li>
                        <Link
                          to="/services/performance-marketing"
                          className="block text-gray-800 font-medium hover:text-blue-600"
                        >
                          Performance Marketing
                        </Link>
                        <p className="text-sm text-gray-500">
                          Social Media & High ROAS PPC Ads
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Development */}
                  <div>
                    <h3 className="text-gray-500 uppercase text-sm font-semibold mb-2">
                      Development
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          to="/webdevelopment"
                          className="block text-gray-800 font-medium hover:text-blue-600"
                        >
                          Web Development
                        </Link>
                        <p className="text-sm text-gray-500">
                          Static, E-Commerce, Dynamic, Shopify
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Design */}
                  <div>
                    <h3 className="text-gray-500 uppercase text-sm font-semibold mb-2">
                      Design
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          to="/logodesign"
                          className="block text-gray-800 font-medium hover:text-blue-600"
                        >
                          Logo Design
                        </Link>
                        <p className="text-sm text-gray-500">
                          Timeless Logo Design
                        </p>
                      </li>
                      <li>
                        <Link
                          to="/services/brand-design"
                          className="block text-gray-800 font-medium hover:text-blue-600"
                        >
                          Brand Design
                        </Link>
                        <p className="text-sm text-gray-500">
                          Impactful Brand Design
                        </p>
                      </li>
                      <li>
                        <span className="block text-gray-800 font-medium">
                          Creative Services
                        </span>
                        <p className="text-sm text-gray-500">
                          Magazine, Brochures, etc.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/case-study"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Case Study
            </Link>
            <Link
              to="/career"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Careers
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">
                About Us
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link
                to="/case-study"
                className="text-gray-700 hover:text-blue-600"
              >
                Case Study
              </Link>
              <Link to="/career" className="text-gray-700 hover:text-blue-600">
                Careers
              </Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors w-fit">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

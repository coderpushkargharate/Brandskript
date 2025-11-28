import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
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
            <button className="flex items-center gap-1 hover:text-black">
              Who we serve
              <span>▾</span>
            </button>

            <button className="flex items-center gap-1 hover:text-black">
              Features
              <span>▾</span>
            </button>

            <Link to="/pricing" className="hover:text-black">Pricing</Link>
            <Link to="/reviews" className="hover:text-black">Reviews</Link>

            <button className="flex items-center gap-1 hover:text-black">
              Resources
              <span>▾</span>
            </button>

            <Link to="/help" className="hover:text-black">Help Center</Link>
            <Link to="/career" className="hover:text-black">We're Hiring</Link>
          </nav>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="px-5 py-1.5 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100"
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
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <div className="flex flex-col space-y-4 text-gray-700 text-sm font-medium">

              <button className="text-left flex items-center justify-between">
                Who we serve ▾
              </button>

              <button className="text-left flex items-center justify-between">
                Features ▾
              </button>

              <Link to="/pricing" className="hover:text-black">Pricing</Link>
              <Link to="/reviews" className="hover:text-black">Reviews</Link>

              <button className="text-left flex items-center justify-between">
                Resources ▾
              </button>

              <Link to="/help" className="hover:text-black">Help Center</Link>
              <Link to="/career" className="hover:text-black">We're Hiring</Link>

              <Link
                to="/login"
                className="px-5 py-2 border border-gray-300 rounded-full text-center"
              >
                Login
              </Link>

              <Link to="/estimate">
                <button className="w-full bg-green-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                  Start an estimate
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

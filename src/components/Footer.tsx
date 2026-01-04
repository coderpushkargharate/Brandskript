// Footer.jsx
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F4F6F8] w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* 5 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/ROI Edge Logos-01.png"
                alt="Handoff Logo"
                className="w-24 sm:w-28 xl:w-32"
              />
            </Link>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Handoff provides a complete toolkit to grow your residential
              construction business with AI.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-[#0B0F29]">Useful Links</h3>
            <ul className="mt-4 space-y-3 text-gray-600 text-sm">
              <li><Link to="/" className="hover:text-black">Home</Link></li>
              <li><Link to="/pricing" className="hover:text-black">Pricing</Link></li>
              <li><Link to="/blogs" className="hover:text-black">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-black">Careers</Link></li>
              <li><Link to="/1build" className="hover:text-black">1build</Link></li>
              <li><Link to="/construction-costs" className="hover:text-black">Construction Costs</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-[#0B0F29]">Features</h3>
            <ul className="mt-4 space-y-3 text-gray-600 text-sm">
              <li><Link to="/ai-estimates" className="hover:text-black">Instant AI Estimates</Link></li>
              <li><Link to="/crm" className="hover:text-black">CRM</Link></li>
              <li><Link to="/ai-proposals" className="hover:text-black">Winning AI Proposals</Link></li>
              <li><Link to="/invoicing" className="hover:text-black">Invoicing</Link></li>
            </ul>
          </div>

          {/* Who We Serve */}
          <div>
            <h3 className="font-semibold text-[#0B0F29]">Who We Serve</h3>
            <ul className="mt-4 space-y-3 text-gray-600 text-sm">
              <li><Link to="/remodelers" className="hover:text-black">Remodelers</Link></li>
              <li><Link to="/handyman" className="hover:text-black">Handyman</Link></li>
              <li><Link to="/fix-and-flip" className="hover:text-black">Fix and Flip</Link></li>
            </ul>
          </div>

          {/* Blog Categories */}
          <div>
            <h3 className="font-semibold text-[#0B0F29]">Blog Categories</h3>
            <ul className="mt-4 space-y-3 text-gray-600 text-sm">
              <li><Link to="/case-studies" className="hover:text-black">Case Studies</Link></li>
              <li><Link to="/updates" className="hover:text-black">Updates</Link></li>
              <li><Link to="/resources" className="hover:text-black">Resources</Link></li>
              <li><Link to="/guides" className="hover:text-black">Guides</Link></li>
              <li><Link to="/admin" className="hover:text-black">Admin</Link></li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-12">
          <Link
            to="/roadmap"
            className="px-6 py-3 rounded-full border border-gray-300 bg-white text-sm font-medium hover:bg-gray-100"
          >
            Public Roadmap
          </Link>

          <Link
            to="/request-features"
            className="px-6 py-3 rounded-full border border-gray-300 bg-white text-sm font-medium hover:bg-gray-100"
          >
            Request Features
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-600">
          <p>Handoff © 2025. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6 mt-4 sm:mt-0">
            {/* Social Icons moved here → bottom right */}
            <div className="flex items-center gap-4">
              <Link to="/facebook"><FaFacebookF size={18} className="hover:text-black" /></Link>
              <Link to="/instagram"><FaInstagram size={18} className="hover:text-black" /></Link>
              <Link to="/youtube"><FaYoutube size={18} className="hover:text-black" /></Link>
              <Link to="/tiktok"><FaTiktok size={18} className="hover:text-black" /></Link>
              <Link to="/twitter"><FaXTwitter size={18} className="hover:text-black" /></Link>
              <Link to="/linkedin"><Linkedin size={18} className="hover:text-black" /></Link>
            </div>

            <div className="flex gap-6 border-l border-gray-300 pl-6">
              <Link to="/privacy-policy" className="hover:text-black">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="hover:text-black">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
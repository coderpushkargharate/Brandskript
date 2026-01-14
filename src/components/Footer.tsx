// Footer.jsx
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F7F9FB] w-full pt-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 pb-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="/ROI Edge Logos-01.png"
                alt="ROI Edge Logo"
                className="w-28"
              />
            </Link>

            <p className="text-gray-600 mt-5 text-sm leading-relaxed max-w-xs">
              ROI Edge helps service businesses generate qualified leads,
              book appointments, and scale revenue using performance-driven
              systems and automation.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold text-[#0B0F29] mb-5">
              Useful Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
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
            <h4 className="font-semibold text-[#0B0F29] mb-5">
              Features
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/ai-estimates" className="hover:text-black">Instant AI Estimates</Link></li>
              <li><Link to="/crm" className="hover:text-black">CRM</Link></li>
              <li><Link to="/ai-proposals" className="hover:text-black">Winning AI Proposals</Link></li>
              <li><Link to="/invoicing" className="hover:text-black">Invoicing</Link></li>
            </ul>
          </div>

          {/* Who We Serve */}
          <div>
            <h4 className="font-semibold text-[#0B0F29] mb-5">
              Who We Serve
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/remodelers" className="hover:text-black">Remodelers</Link></li>
              <li><Link to="/handyman" className="hover:text-black">Handyman</Link></li>
              <li><Link to="/fix-and-flip" className="hover:text-black">Fix and Flip</Link></li>
            </ul>
          </div>

          {/* Blog Categories */}
          <div>
            <h4 className="font-semibold text-[#0B0F29] mb-5">
              Blog Categories
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/case-studies" className="hover:text-black">Case Studies</Link></li>
              <li><Link to="/updates" className="hover:text-black">Updates</Link></li>
              <li><Link to="/resources" className="hover:text-black">Resources</Link></li>
              <li><Link to="/guides" className="hover:text-black">Guides</Link></li>
              <li><Link to="/admin" className="hover:text-black">Admin</Link></li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          {/* Left */}
          <p>
            © {new Date().getFullYear()} ROI Edge. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-6 mt-4 md:mt-0">

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link to="/facebook" className="hover:text-black">
                <FaFacebookF size={16} />
              </Link>
              <Link to="/instagram" className="hover:text-black">
                <FaInstagram size={16} />
              </Link>
              <Link to="/youtube" className="hover:text-black">
                <FaYoutube size={16} />
              </Link>
              <Link to="/tiktok" className="hover:text-black">
                <FaTiktok size={16} />
              </Link>
              <Link to="/twitter" className="hover:text-black">
                <FaXTwitter size={16} />
              </Link>
              <Link to="/linkedin" className="hover:text-black">
                <Linkedin size={16} />
              </Link>
            </div>

            {/* Legal */}
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

// Footer.jsx
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
            <a href="/" className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
                alt="Handoff Logo"
                className="w-8"
              />
              <h2 className="text-2xl font-bold text-[#0B0F29]">Handoff</h2>
            </a>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Handoff provides a complete toolkit to grow your residential
              construction business with AI.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-[#0B0F29]">Useful Links</h3>
            <ul className="mt-4 space-y-3 text-gray-600 text-sm">
              <li><a href="/" className="hover:text-black">Home</a></li>
              <li><a href="/pricing" className="hover:text-black">Pricing</a></li>
              <li><a href="/blog" className="hover:text-black">Blog</a></li>
              <li><a href="/careers" className="hover:text-black">Careers</a></li>
              <li><a href="/1build" className="hover:text-black">1build</a></li>
              <li><a href="/construction-costs" className="hover:text-black">Construction Costs</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-[#0B0F29]">Features</h3>
            <ul className="mt-4 space-y-3 text-gray-600 text-sm">
              <li><a href="/ai-estimates" className="hover:text-black">Instant AI Estimates</a></li>
              <li><a href="/crm" className="hover:text-black">CRM</a></li>
              <li><a href="/ai-proposals" className="hover:text-black">Winning AI Proposals</a></li>
              <li><a href="/invoicing" className="hover:text-black">Invoicing</a></li>
            </ul>
          </div>

          {/* Who We Serve */}
          <div>
            <h3 className="font-semibold text-[#0B0F29]">Who We Serve</h3>
            <ul className="mt-4 space-y-3 text-gray-600 text-sm">
              <li><a href="/remodelers" className="hover:text-black">Remodelers</a></li>
              <li><a href="/handyman" className="hover:text-black">Handyman</a></li>
              <li><a href="/fix-and-flip" className="hover:text-black">Fix and Flip</a></li>
            </ul>
          </div>

          {/* Blog Categories */}
          <div>
            <h3 className="font-semibold text-[#0B0F29]">Blog Categories</h3>
            <ul className="mt-4 space-y-3 text-gray-600 text-sm">
              <li><a href="/case-studies" className="hover:text-black">Case Studies</a></li>
              <li><a href="/updates" className="hover:text-black">Updates</a></li>
              <li><a href="/resources" className="hover:text-black">Resources</a></li>
              <li><a href="/guides" className="hover:text-black">Guides</a></li>
              <li><a href="/admin" className="hover:text-black">Admin</a></li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-12">
          <a
            href="/roadmap"
            className="px-6 py-3 rounded-full border border-gray-300 bg-white text-sm font-medium hover:bg-gray-100"
          >
            Public Roadmap
          </a>

          <a
            href="/request-features"
            className="px-6 py-3 rounded-full border border-gray-300 bg-white text-sm font-medium hover:bg-gray-100"
          >
            Request Features
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mt-10 text-gray-700">
          <a href="#"><FaFacebookF size={20} className="hover:text-black" /></a>
          <a href="#"><FaInstagram size={20} className="hover:text-black" /></a>
          <a href="#"><FaYoutube size={20} className="hover:text-black" /></a>
          <a href="#"><FaTiktok size={20} className="hover:text-black" /></a>
          <a href="#"><FaXTwitter size={20} className="hover:text-black" /></a>
          <a href="#"><Linkedin size={20} className="hover:text-black" /></a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-600">
          <p>Handoff, 2025 All rights reserved</p>

          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="/privacy-policy" className="hover:text-black">Privacy Policy</a>
            <a href="/terms-of-use" className="hover:text-black">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

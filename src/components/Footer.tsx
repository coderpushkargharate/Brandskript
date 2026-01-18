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

// ================= NAV LINKS (same as Header) =================
const whoWeServe = [
  { title: "SaaS Business", link: "/SaaSBusiness" },
  { title: "Service Businesses", link: "/ServiceBusinesses" },
  { title: "Real Estate", link: "/RealEstate" },
  { title: "Healthcare", link: "/Healthcare" },
  { title: "BookKeeping", link: "/BookKeeping" },
];

const specialities = [
  { title: "Result-Oriented Ads", link: "/specialities" },
  { title: "ROI Tracking", link: "/specialities" },
  { title: "UTM Tracking", link: "/specialities" },
  { title: "Pixel & GTM Setups", link: "/specialities" },
  { title: "Unlimited Campaigns", link: "/specialities" },
  { title: "Nurturing AI Agents", link: "/specialities" },
  { title: "Automatic Reports", link: "/specialities" },
  { title: "Advance Targeting", link: "/specialities" },
  { title: "Super Lead Qualification", link: "/specialities" },
  { title: "Pre & Main Landing Page", link: "/specialities" },
];

const resources = [
  { title: "Blogs", link: "/blogs" },
  { title: "E-Books", link: "/products" },
  { title: "Ad Spend Calculator", link: "/adspendcalculator" },
  { title: "Lead Gen Course", link: "/LeadGenCourse" },
];

const otherLinks = [
  { title: "Case Studies", link: "/case-studies" },
  { title: "Testimonials", link: "/Testimonials" },
  { title: "Services", link: "/service" },
  { title: "Login", link: "/loginpage" },
  { title: "Book An Appointment", link: "/get-started" },
];

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

          {/* Who We Serve */}
          <div>
            <h4 className="font-semibold text-[#0B0F29] mb-5">Who We Serve</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {whoWeServe.map((item) => (
                <li key={item.title}>
                  <Link to={item.link} className="hover:text-black">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h4 className="font-semibold text-[#0B0F29] mb-5">Specialities</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {specialities.map((item) => (
                <li key={item.title}>
                  <Link to={item.link} className="hover:text-black">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-[#0B0F29] mb-5">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {resources.map((item) => (
                <li key={item.title}>
                  <Link to={item.link} className="hover:text-black">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="font-semibold text-[#0B0F29] mb-5">Other Links</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {otherLinks.map((item) => (
                <li key={item.title}>
                  <Link to={item.link} className="hover:text-black">
                    {item.title}
                  </Link>
                </li>
              ))}
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
              <Link to="/facebook" className="hover:text-black"><FaFacebookF size={16} /></Link>
              <Link to="/instagram" className="hover:text-black"><FaInstagram size={16} /></Link>
              <Link to="/youtube" className="hover:text-black"><FaYoutube size={16} /></Link>
              <Link to="/tiktok" className="hover:text-black"><FaTiktok size={16} /></Link>
              <Link to="/twitter" className="hover:text-black"><FaXTwitter size={16} /></Link>
              <Link to="/linkedin" className="hover:text-black"><Linkedin size={16} /></Link>
            </div>

            {/* Legal */}
            <div className="flex gap-6 border-l border-gray-300 pl-6">
              <Link to="/privacy-policy" className="hover:text-black">Privacy Policy</Link>
              <Link to="/terms-of-use" className="hover:text-black">Terms of Use</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

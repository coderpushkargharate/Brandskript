// Footer.jsx
import { Linkedin, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F29] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Left Section - Brand & CTA */}
        <div>
          <h2 className="text-2xl font-bold">Brandskript</h2>
          <p className="mt-4 text-gray-300 text-sm">
            Book a Call For Free Consultation
          </p>
          <p className="mt-2 text-gray-400 text-sm">
            Experienced team delivering exceptional digital solutions tailored to your brand.
          </p>
          <button className="mt-5 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
            Contact Us →
          </button>
          
          {/* Social Icons */}
          <p className="mt-6 text-gray-400 text-sm">Our Social Handles</p>
          <div className="flex gap-3 mt-3">
            <a href="#" className="bg-[#11152E] p-3 rounded-lg hover:bg-blue-600 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-[#11152E] p-3 rounded-lg hover:bg-blue-600 transition">
              <FaXTwitter size={20} />
            </a>
            <a href="#" className="bg-[#11152E] p-3 rounded-lg hover:bg-blue-600 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Home Links */}
        <div>
          <h3 className="text-lg font-semibold">Home</h3>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Store</a></li>
            <li className="flex items-center gap-2">
              <a href="#" className="hover:text-white">Works</a>
              <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">New</span>
            </li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-lg font-semibold">Other</h3>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Process</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">FAQ's</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>Brandskript</p>
        <p>©2024, All Rights Reserved</p>
      </div>
    </footer>
  );
}

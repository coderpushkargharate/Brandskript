// ContactSection.jsx
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-white text-gray-900 py-20 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <button className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
          Contact Us
        </button>
        <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }} className="text-3xl md:text-4xl font-bold mb-2">
          Get in Touch With Us
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Reach out to us for inquiries, collaborations, or to discuss your
          project needs.
        </p>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto mb-12">
          <h3 className="text-xl font-semibold mb-2">Send Us a Message</h3>
          <p className="text-gray-500 mb-6">
            Contact us with questions, feedback, or collaboration via our form.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
            <Mail className="w-8 h-8 text-blue-600 mb-3" />
            <p className="font-medium">Email us here</p>
            <a
              href="mailto:connect@brandskript.com"
              className="text-blue-600 font-semibold mt-1 hover:underline"
            >
              connect@brandskript.com
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
            <MapPin className="w-8 h-8 text-blue-600 mb-3" />
            <p className="font-medium">Location</p>
            <a
              href="#"
              className="text-blue-600 font-semibold mt-1 hover:underline"
            >
              Get Directions
            </a>
          </div>

          {/* Call */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
            <Phone className="w-8 h-8 text-blue-600 mb-3" />
            <p className="font-medium">Or give us a call</p>
            <a
              href="#"
              className="text-blue-600 font-semibold mt-1 hover:underline"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

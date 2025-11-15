import React from 'react';
import { CheckCircle2 } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 flex justify-center items-center">
      <div className="relative max-w-4xl w-full bg-white shadow-lg rounded-2xl p-10 text-center border border-gray-200">
        
        {/* Light Theme Overlay Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 via-white to-blue-50 opacity-70 pointer-events-none"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }} className="text-3xl md:text-4xl font-bold text-gray-900">
            Want to discuss your project?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Let’s connect to discuss how we can turn your project or idea
            into reality with our result-oriented, customized solutions.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 font-medium shadow-sm">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              Customized Service
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 font-medium shadow-sm">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              Guaranteed Results
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 font-medium shadow-sm">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              On Time Delivery
            </span>
          </div>

          {/* Button */}
          <div className="mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
              Let’s Connect to Discuss
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
import React from "react";
import { Star } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 relative z-10 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center bg-blue-50 text-blue-700 font-medium px-5 py-2 rounded-full text-sm mb-6 shadow-sm">
          Grow Revenue <span className="ml-2 text-gray-500">→ with Ads Experts</span>
        </div>

        {/* Subtitle */}
        <p className="pb-5 text-base md:text-lg text-gray-600">
          We’re in the top 1% of agencies — focused on outcomes that matter to you.
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          10x Your Business Revenue
          <br />
          <span className="text-blue-600">
            with Qualified Lead Gen & <br className="hidden sm:block" /> Ad Experts
          </span>
        </h1>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="bg-blue-600 text-white px-8 sm:px-12 lg:px-16 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300">
            Book A FREE Strategy Call
          </button>
          <p className="mt-4 text-orange-600 font-medium text-base">
            Over 3k+ sales meetings booked!
          </p>
        </div>

        {/* Rating */}
        <div className="mt-10 flex justify-center items-center space-x-2">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-gray-700 text-base md:text-lg font-medium">
            4.8/5 From 602 Customers
          </p>
        </div>

        {/* Logo Row */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["Lumina", "Spectrum", "Echo", "Quantum", "Evolve", "Stellar"].map(
            (brand, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                {brand}
              </span>
            )
          )}
        </div>

        {/* Video Section */}
        <div className="mt-16">
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://framerusercontent.com/images/wK4E80TjbV0jJFGY1B4doVSx1U.png"
              alt="Video thumbnail"
              className="w-full h-auto object-cover"
            />

            {/* Play Button */}
            <a
              href="https://www.youtube.com/watch?v=Mlor_dBRrjE&t=6s"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition text-lg">
                ▶ Play Video
              </span>
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-gray-50 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-gray-900">Guaranteed Results</h3>
            <p className="mt-3 text-gray-600 text-base leading-relaxed">
              Tailored websites meticulously crafted to reflect your brand.
            </p>
          </div>
          <div className="p-8 bg-gray-50 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-gray-900">Up to 90% Automation</h3>
            <p className="mt-3 text-gray-600 text-base leading-relaxed">
              Optimized for lightning-fast speed to enhance user experience.
            </p>
          </div>
          <div className="p-8 bg-gray-50 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-gray-900">Replace with Systems</h3>
            <p className="mt-3 text-gray-600 text-base leading-relaxed">
              Designed to improve SEO and increase visibility effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-blue-50 via-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;

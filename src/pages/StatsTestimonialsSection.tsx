import React from "react";
import { Users, Briefcase, Clock, BarChart3 } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { number: "340+", label: "Happy Customers" },
    { number: "850+", label: "Projects Completed" },
    { number: "8+", label: "Years of Experience" },
    { number: "22+", label: "Team Members" },
  ];

  const brands = ["Spectrum", "Zenith", "Nexus", "Echo", "Quantum"];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Stats Grid */}
        <div className="grid grid-cols-2 gap-6 flex-1">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-white to-blue-50 border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition p-8 text-center"
            >
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-transparent opacity-60 rounded-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold text-gray-900">
                  {stat.number}
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Content */}
        <div className="flex-1 text-center lg:text-left max-w-md">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Results & Analytics
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Performance Insights and Analytics Overview
          </h2>

          <p className="mt-4 text-gray-600 text-base leading-relaxed">
            Trusted by leading brands to deliver measurable results through data-driven
            design, innovation, and strategy.
          </p>

          {/* Brand Logos */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition"
              >
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="font-medium text-sm">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

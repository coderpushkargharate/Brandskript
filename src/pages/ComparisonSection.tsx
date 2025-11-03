import React from "react";
import { Zap } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      left: "Experienced team delivering standard solutions.",
      right: "Highly skilled specialists delivering customized solutions.",
    },
    {
      left: "Offers standard, template-based designs.",
      right: "Offers innovative, bespoke ad creatives.",
    },
    {
      left: "Limited post-launch support and updates.",
      right: "Comprehensive post-launch support and updates.",
    },
    {
      left: "Basic performance with average results.",
      right: "Optimal performance with extraordinary results.",
    },
    {
      left: "Basic lead generation practices implemented.",
      right: "Advanced lead generation for better ROI marketing.",
    },
  ];

  return (
    <section className="relative bg-white text-gray-900 py-24 overflow-hidden">
      {/* Light Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,123,255,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
   

        {/* Comparison Section */}
        <div className="mt-">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Comparison
          </span>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Choosing Brandskript Over Others
          </h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
            See why Brandskript stands out with superior service, innovation,
            and client satisfaction benchmarks.
          </p>

          {/* Comparison Table */}
          <div className="mt-14 bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-3 py-5 px-8 bg-gray-50 text-gray-800 font-semibold border-b border-gray-200 text-base">
              <p className="text-center">Other Agencies</p>
              <p className="text-center text-blue-600">V/S</p>
              <p className="text-center">Brandskript</p>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-3 items-center px-8 py-5 border-b border-gray-200 last:border-none hover:bg-gray-50 transition-colors"
              >
                <p className="text-gray-600 text-left text-[15px]">
                  <span className="inline-block mr-2">•</span>
                  {row.left}
                </p>
                <div className="flex justify-center">
                  <Zap className="text-blue-500 w-5 h-5" />
                </div>
                <p className="text-gray-900 font-medium text-left text-[15px] flex items-center justify-end gap-2">
                  <Zap className="text-blue-500 w-4 h-4" />
                  {row.right}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

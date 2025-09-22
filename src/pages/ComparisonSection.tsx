import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="bg-gray-50 text-center py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Heading */}
        <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
          Industry Insights
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
          Qualified Leads Impacts Sales Growth
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Capture & convert more customers by upgrading your Lead generation methods 
          for high growth in revenue.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          Book A FREE Consultation Call
        </button>

        {/* Comparison Section */}
        <div className="mt-20">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Comparison
          </span>
          <h3 className="text-2xl font-bold text-gray-900">
            Choosing Brandskript Over Others
          </h3>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            See why Brandskript stands out with superior service, innovation, 
            and client satisfaction benchmarks.
          </p>

          {/* Table */}
          <div className="mt-10 bg-white border rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-100 py-4 px-6 font-semibold text-gray-800 text-left">
              <p>Other Agencies</p>
              <p className="text-center text-blue-600">V/S</p>
              <p className="text-right">Brandskript</p>
            </div>

            {/* Rows */}
            <div className="divide-y">
              {[
                {
                  left: "Experienced team delivering standard solutions.",
                  right: "⚡ Highly skilled specialists delivering customized solutions."
                },
                {
                  left: "Offers standard, template-based designs.",
                  right: "⚡ Offers innovative, bespoke website designs."
                },
                {
                  left: "Limited post-launch support and updates.",
                  right: "⚡ Comprehensive post-launch support and updates."
                },
                {
                  left: "Basic performance with average loading times.",
                  right: "⚡ Optimal performance with fast loading times."
                },
                {
                  left: "Basic SEO practices implemented.",
                  right: "⚡ Advanced SEO tactics for enhanced online visibility."
                },
              ].map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-3 items-center text-left px-6 py-4 bg-white hover:bg-gray-50 transition"
                >
                  <p className="text-gray-700">{row.left}</p>
                  <p className="text-center text-blue-600 font-semibold">⚡</p>
                  <p className="text-gray-900 font-medium text-right">{row.right}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
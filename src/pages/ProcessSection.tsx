import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-white text-center py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
          Smart Design, Converting Ads, and Sales-Focused Marketing Strategy.
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Because, we approach things a bit differently around here.
        </p>

        {/* Process Section */}
        <div className="mt-16">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Process
          </span>
          <h3 className="text-2xl font-bold text-gray-900">
            Our Result-Oriented Process
          </h3>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Discover our efficient method for designing compelling advertisements
            that resonate with your objectives and draw in your Ideal Client Profiles (ICP).
          </p>

          {/* Process Steps */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 border rounded-xl shadow-sm text-left">
              <p className="text-sm font-semibold text-blue-600">Step 01</p>
              <h4 className="mt-2 text-lg font-bold text-gray-900">
                Discovery Phase
              </h4>
              <p className="mt-1 text-gray-600 text-sm">
                Creating targeted campaigns designed to attract ideal clients and align perfectly with your business objectives.
              </p>
            </div>
            <div className="p-6 bg-gray-50 border rounded-xl shadow-sm text-left">
              <p className="text-sm font-semibold text-blue-600">Step 02</p>
              <h4 className="mt-2 text-lg font-bold text-gray-900">
                Strategy & Concepts Development
              </h4>
              <p className="mt-1 text-gray-600 text-sm">
                Creating targeted campaigns designed to attract ideal clients and align perfectly with your business objectives.
              </p>
            </div>
            <div className="p-6 bg-gray-50 border rounded-xl shadow-sm text-left">
              <p className="text-sm font-semibold text-blue-600">Step 03</p>
              <h4 className="mt-2 text-lg font-bold text-gray-900">
                System Implementation & Testing
              </h4>
              <p className="mt-1 text-gray-600 text-sm">
                Building automated systems, optimizing performance, and reducing ad spend.
              </p>
            </div>
            <div className="p-6 bg-gray-50 border rounded-xl shadow-sm text-left">
              <p className="text-sm font-semibold text-blue-600">Step 04</p>
              <h4 className="mt-2 text-lg font-bold text-gray-900">
                Launch & Continuous Optimization
              </h4>
              <p className="mt-1 text-gray-600 text-sm">
                Launching campaigns with ongoing improvements for sustained long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
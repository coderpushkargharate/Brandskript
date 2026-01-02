import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      {/* Title */}
      <div className="text-center mb-10 md:mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          How it works
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm md:text-base">
          ROI Edge provides a complete, performance-driven system to grow your business with predictable, measurable results — not vanity metrics.
        </p>
      </div>

      {/* Steps Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4">

        {/* Step 1: Strategy & Revenue Mapping */}
        <div className="bg-[#EAF0FF] rounded-3xl p-5 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow">
              1
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">
              Strategy & Revenue Mapping
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 md:p-6 relative">
            <div className="flex flex-wrap justify-between items-start gap-2 md:gap-0">
              <p className="font-semibold text-gray-900 text-sm md:text-base">Business Model</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
                Map Now
              </button>
            </div>

            <p className="text-gray-600 text-xs md:text-sm mt-3 md:mt-4">
              We understand your business model, ideal customers, deal size, and revenue goals. Then we design a client acquisition strategy focused purely on ROI—not vanity metrics.
            </p>

            <img
              src="https://placehold.co/100x100/4A90E2/FFFFFF?text=Strategy"
              alt="Strategy & Revenue Mapping"
              className="w-20 md:w-24 absolute bottom-4 right-4"
            />

            <div className="mt-4 md:mt-6">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-4 py-1 text-xs md:text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Step 2: Funnel & Tracking Setup */}
        <div className="bg-[#EAF0FF] rounded-3xl p-5 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow">
              2
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">
              Funnel & Tracking Setup
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 md:p-6 relative">
            <div className="flex flex-wrap justify-between items-start gap-2 md:gap-0">
              <p className="font-semibold text-gray-900 text-sm md:text-base">Tracking System</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
                Setup
              </button>
            </div>

            <p className="text-gray-600 text-xs md:text-sm mt-3 md:mt-4">
              We build high-converting landing pages, funnels, and tracking systems (Pixel, GA4, CRM) so every lead, cost, and conversion is measurable.
            </p>

            <img
              src="https://placehold.co/100x100/50C878/FFFFFF?text=Funnel"
              alt="Funnel & Tracking Setup"
              className="w-20 md:w-24 absolute bottom-4 right-4"
            />

            <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3">
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                Use AI
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                + Add
              </button>
            </div>
          </div>
        </div>

        {/* Step 3: Traffic & Lead Generation */}
        <div className="bg-[#EAF0FF] rounded-3xl p-5 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow">
              3
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">
              Traffic & Lead Generation
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 md:p-6 relative">
            <div className="flex flex-wrap justify-between items-start gap-2 md:gap-0">
              <p className="font-semibold text-gray-900 text-sm md:text-base">Launch Campaign</p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
                Launch
              </button>
            </div>

            <p className="text-gray-600 text-xs md:text-sm mt-3 md:mt-4">
              We launch performance-driven campaigns across Google Ads, Meta Ads, and Outreach channels—targeting high-intent prospects ready to buy.
            </p>

            <img
              src="https://placehold.co/100x100/8A2BE2/FFFFFF?text=Traffic"
              alt="Traffic & Lead Generation"
              className="w-20 md:w-24 absolute bottom-4 right-4"
            />

            <div className="mt-4 md:mt-6">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-4 py-1 text-xs md:text-sm font-medium">
                See Results
              </button>
            </div>
          </div>
        </div>

        {/* Step 4: Automation & Nurturing */}
        <div className="bg-[#EAF0FF] rounded-3xl p-5 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow">
              4
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">
              Automation & Nurturing
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 md:p-6 relative">
            <div className="flex flex-wrap justify-between items-start gap-2 md:gap-0">
              <p className="font-semibold text-gray-900 text-sm md:text-base">Automate Follow-ups</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
                Automate
              </button>
            </div>

            <p className="text-gray-600 text-xs md:text-sm mt-3 md:mt-4">
              Leads are instantly followed up using automated email, WhatsApp, and CRM workflows—keeping your pipeline active without manual effort.
            </p>

            <img
              src="https://placehold.co/100x100/FFD700/FFFFFF?text=Auto"
              alt="Automation & Nurturing"
              className="w-20 md:w-24 absolute bottom-4 right-4"
            />

            <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3">
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                Use AI
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                + Add
              </button>
            </div>
          </div>
        </div>

        {/* Step 5: Optimization & Scale */}
        <div className="bg-[#EAF0FF] rounded-3xl p-5 md:p-6 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow">
              5
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">
              Optimization & Scale
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 md:p-6 relative">
            <div className="flex flex-wrap justify-between items-start gap-2 md:gap-0">
              <p className="font-semibold text-gray-900 text-sm md:text-base">Scale Performance</p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
                Optimize
              </button>
            </div>

            <p className="text-gray-600 text-xs md:text-sm mt-3 md:mt-4">
              We continuously optimize CPR, CAC, and conversions, then scale what works to deliver consistent leads, predictable revenue, and strong ROI.
            </p>

            <img
              src="https://placehold.co/100x100/FF4500/FFFFFF?text=Scale"
              alt="Optimization & Scale"
              className="w-20 md:w-24 absolute bottom-4 right-4"
            />

            <div className="mt-4 md:mt-6">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-4 py-1 text-xs md:text-sm font-medium">
                View Dashboard
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
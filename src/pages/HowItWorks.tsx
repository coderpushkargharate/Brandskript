import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      {/* Title */}
      <div className="text-center mb-10 md:mb-12 px-4">
        <h2
  className="text-3xl  font-bold dm-sans text-gray-900"
  style={{ fontWeight: 900 , fontSize:"48px" }}
>
  How it works
</h2>

        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm md:text-base dm-sans">
          ROI Edge provides a complete, performance-driven system to grow your business with predictable, measurable results — not vanity metrics.
        </p>
      </div>

      {/* Steps Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4">

        {/* STEP 1 */}
        <div className="bg-[#EAF0FF] rounded-3xl p-5 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow dm-sans">
              1
            </div>
            <h3 className="text-lg md:text-xl font-medium noir-pro text-gray-900">
              Strategy & Revenue Mapping
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 md:p-6 relative">
            <div className="flex justify-between items-start">
              <p className="font-semibold text-gray-900 text-sm md:text-base dm-sans">
                Business Model
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                Map Now
              </button>
            </div>

            <p className="text-gray-600 text-xs md:text-sm mt-4 dm-sans">
              We understand your business model, ideal customers, deal size, and revenue goals. Then we design a client acquisition strategy focused purely on ROI.
            </p>

            <img
              src="https://placehold.co/100x100/4A90E2/FFFFFF?text=Strategy"
              alt=""
              className="w-20 md:w-24 absolute bottom-4 right-4"
            />

            <div className="mt-6">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-4 py-1 text-xs md:text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="bg-[#EAF0FF] rounded-3xl p-5 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow dm-sans">
              2
            </div>
            <h3 className="text-lg md:text-xl font-medium noir-pro text-gray-900">
              Funnel & Tracking Setup
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 md:p-6 relative">
            <div className="flex justify-between items-start">
              <p className="font-semibold text-gray-900 text-sm md:text-base dm-sans">
                Tracking System
              </p>
              <button className="bg-[#d2fe3a] hover:bg-[#c7f230] text-black px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                Setup
              </button>
            </div>

            <p className="text-gray-600 text-xs md:text-sm mt-4 dm-sans">
              We build high-converting landing pages, funnels, and tracking systems so every lead, cost, and conversion is measurable.
            </p>

            <img
              src="https://placehold.co/100x100/50C878/FFFFFF?text=Funnel"
              alt=""
              className="w-20 md:w-24 absolute bottom-4 right-4"
            />

            <div className="mt-6 flex gap-3">
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium">
                Use AI
              </button>
              <button className="bg-[#d2fe3a] hover:bg-[#c7f230] text-black px-4 py-2 rounded-full text-xs md:text-sm font-medium">
                + Add
              </button>
            </div>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="bg-[#EAF0FF] rounded-3xl p-5 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow dm-sans">
              3
            </div>
            <h3 className="text-lg md:text-xl font-medium noir-pro text-gray-900">
              Traffic & Lead Generation
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 md:p-6 relative">
            <div className="flex justify-between items-start">
              <p className="font-semibold text-gray-900 text-sm md:text-base dm-sans">
                Launch Campaign
              </p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                Launch
              </button>
            </div>

            <p className="text-gray-600 text-xs md:text-sm mt-4 dm-sans">
              We launch performance-driven campaigns across Google Ads, Meta Ads, and Outreach channels.
            </p>

            <img
              src="https://placehold.co/100x100/8A2BE2/FFFFFF?text=Traffic"
              alt=""
              className="w-20 md:w-24 absolute bottom-4 right-4"
            />
          </div>
        </div>

        {/* STEP 4 */}
        <div className="bg-[#EAF0FF] rounded-3xl p-5 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow dm-sans">
              4
            </div>
            <h3 className="text-lg md:text-xl font-medium noir-pro text-gray-900">
              Automation & Nurturing
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 md:p-6 relative">
            <div className="flex justify-between items-start">
              <p className="font-semibold text-gray-900 text-sm md:text-base dm-sans">
                Automate Follow-ups
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                Automate
              </button>
            </div>

            <p className="text-gray-600 text-xs md:text-sm mt-4 dm-sans">
              Leads are instantly followed up using automated email, WhatsApp, and CRM workflows.
            </p>

            <img
              src="https://placehold.co/100x100/FFD700/FFFFFF?text=Auto"
              alt=""
              className="w-20 md:w-24 absolute bottom-4 right-4"
            />

            <div className="mt-6 flex gap-3">
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium">
                Use AI
              </button>
              <button className="bg-[#d2fe3a] hover:bg-[#c7f230] text-black px-4 py-2 rounded-full text-xs md:text-sm font-medium">
                + Add
              </button>
            </div>
          </div>
        </div>

        {/* STEP 5 */}
        <div className="bg-[#EAF0FF] rounded-3xl p-5 md:p-6 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow dm-sans">
              5
            </div>
            <h3 className="text-lg md:text-xl font-medium noir-pro text-gray-900">
              Optimization & Scale
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 md:p-6 relative">
            <div className="flex justify-between items-start">
              <p className="font-semibold text-gray-900 text-sm md:text-base dm-sans">
                Scale Performance
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                Optimize
              </button>
            </div>

            <p className="text-gray-600 text-xs md:text-sm mt-4 dm-sans">
              We continuously optimize CPR, CAC, and conversions, then scale what works.
            </p>

            <img
              src="https://placehold.co/100x100/FF4500/FFFFFF?text=Scale"
              alt=""
              className="w-20 md:w-24 absolute bottom-4 right-4"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;

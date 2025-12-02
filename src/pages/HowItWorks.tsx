import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-full py-20 bg-white">
      {/* Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-extrabold text-gray-900">
          How it works
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Handoff provides a complete toolkit to grow your remodeling business
          10x faster without having to work 10x harder.
        </p>
      </div>

      {/* Steps Container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4">

        {/* Step 1 */}
        <div className="bg-[#EAF0FF] rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Simply describe your project
            </h3>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow p-6 relative">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-900">New estimate</p>
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Use AI
              </button>
            </div>

            <p className="text-gray-600 text-sm mt-4">
              I need an estimate for a 100 square foot master bathroom remodel
              that involves replacing the bathtub and shower surround with a new
              tiled shower pan, full height...
            </p>

            {/* Illustration */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/2857/2857391.png"
              alt="illustration"
              className="w-24 absolute bottom-4 right-4"
            />

            <div className="mt-6">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-4 py-1 text-sm font-medium">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-[#EAF0FF] rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Handoff generates your estimate with AI
            </h3>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow p-6 relative">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-900">Demolition</p>
              <p className="text-gray-900 font-bold">$2,200</p>
            </div>

            <div className="mt-4 space-y-2">
              <div>
                <p className="text-gray-900 text-sm font-semibold">
                  Demo Shower (HR)
                </p>
                <p className="text-gray-500 text-sm">3 × $80.00</p>
              </div>

              <div>
                <p className="text-gray-900 text-sm font-semibold">
                  Demo Vanity and Floor Tile
                </p>
                <p className="text-gray-500 text-sm">8 × $80.00</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Use AI
              </button>

              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                + Add
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;

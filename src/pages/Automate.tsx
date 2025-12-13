import React, { useEffect } from "react";

export default function Automate() {
  useEffect(() => {
  window.scrollTo(0, 0); // 🔥 Page opens from top
}, []);
  return (
    <div className="w-full">

      {/* ---------------------- SECTION 1 ----------------------- */}
      <section className="w-full bg-[#E8F9F2] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug">
            Automate your contracting<br />
            business with AI estimating software
          </h1>

          {/* Three Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            {/* Box 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center text-yellow-600 font-bold text-lg">
                ●
              </div>
              <h3 className="font-semibold text-lg mt-4">Reclaim Your Time</h3>
              <p className="text-sm text-gray-600 mt-2">
                Regain valuable time with our efficient AI estimator. Let it crunch the numbers for you.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-lg">
                ●
              </div>
              <h3 className="font-semibold text-lg mt-4">Estimate Anywhere, Anytime</h3>
              <p className="text-sm text-gray-600 mt-2">
                Provide the client with an accurate estimate without leaving their house.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-600 font-bold text-lg">
                ●
              </div>
              <h3 className="font-semibold text-lg mt-4">Bid with Expertise</h3>
              <p className="text-sm text-gray-600 mt-2">
                Handoff ensures accuracy, eliminating worries about bidding.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------- SECTION 2 ----------------------- */}
      <section className="w-full bg-black text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Start for free. Pay as little<br />
            as <span className="text-green-400">$119 per month.</span>
          </h2>

          <p className="text-gray-300 mt-4">
            Handoff will immediately start making you more money,<br />
            before you have to pay us even one cent.
          </p>

          {/* Button */}
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm">
            See Plan
          </button>

          {/* Pricing Card */}
          <div className="mt-10 flex justify-center">
            <div className="bg-white text-black p-8 rounded-xl w-80 shadow-xl relative">

              {/* Save Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                Save 20%
              </div>

              <h3 className="text-lg font-semibold text-center">Business Plan</h3>
              <p className="text-sm text-gray-500 text-center mt-1">
                Ideal for businesses getting started with AI estimating.
              </p>

              <p className="text-4xl font-bold text-center mt-4">$119.00</p>

              <p className="text-sm text-gray-500 text-center mt-1">
                Per month / Billed annually
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------- SECTION 3 ----------------------- */}
      <section className="w-full bg-[#F7F7F7] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold">Facebook community</h2>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Have questions about Handoff or need general business advice?
              You can speak with other contractors in Handoff Nation, our engaging
              Facebook community.
            </p>

            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm">
              Join community
            </button>
          </div>

          {/* Right Side – Circular Images */}
          <div className="flex items-center gap-6">

            {/* Image 1 */}
            <img
              src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6650cddf762ba9b692753df7_Scott.webp"
              alt=""
              className="w-24 h-24 rounded-full object-cover shadow"
            />

            {/* Image 2 */}
            <img
              src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6650cddf762ba9b692753df8_Matt.webp"
              alt=""
              className="w-24 h-24 rounded-full object-cover shadow"
            />

            {/* Image 3 */}
            <img
              src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6650cddf762ba9b692753df9_Todd.webp"
              alt=""
              className="w-24 h-24 rounded-full object-cover shadow"
            />

          </div>
        </div>
      </section>

    </div>
  );
}

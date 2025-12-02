import React from "react";

export default function ReviewPage() {
  return (
    <div className="w-full bg-white text-[#0f172a]">

      {/* HERO SECTION */}
      <section className="bg-[#00A651] text-white px-6 md:px-16 py-16 rounded-b-3xl">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-sm font-semibold mb-4">Customer Love</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Contractors love Handoff.  
            But don’t take our word for it,  
            <br /> see for yourself.
          </h1>

          <button className="mt-6 px-6 py-3 bg-white text-[#00A651] font-semibold rounded-xl shadow hover:bg-gray-100">
            Start an estimate
          </button>
        </div>
      </section>


      {/* WHAT OUR CLIENTS SAY */}
      <section className="px-6 md:px-16 py-16">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          What our <span className="text-[#00A651]">clients are saying</span>
        </h2>

        {/* REVIEW GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <img src="/avatar1.png" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold">Valerie Vance</h4>
                <p className="text-sm text-gray-500">Ohio, US</p>
              </div>
            </div>
            <p className="text-gray-700">
              Love this app. It saves me so much time when writing up estimates.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <img src="/avatar2.png" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold">Sonny O</h4>
                <p className="text-sm text-gray-500">Maryland, USA</p>
              </div>
            </div>
            <p className="text-gray-700">
              HANDOFF! A must. I rate my experience 5/5.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <img src="/avatar3.png" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold">Gordon Williams</h4>
                <p className="text-sm text-gray-500">Cincinnati, OH</p>
              </div>
            </div>
            <p className="text-gray-700">
              Handoff saved me a ton of time. A lot of the time it’s things I
              had been mistakenly doing.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <img src="/avatar4.png" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold">Ernest M</h4>
                <p className="text-sm text-gray-500">Erie, PA</p>
              </div>
            </div>
            <p className="text-gray-700">
              Tremendous difference using Handoff. It's fast and easy.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <img src="/avatar5.png" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold">Stephanie H</h4>
                <p className="text-sm text-gray-500">Delaware, US</p>
              </div>
            </div>
            <p className="text-gray-700">
              Awesome app. I love the clean layout and ease of use.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <img src="/avatar6.png" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold">Harold Bailey</h4>
                <p className="text-sm text-gray-500">Georgia, USA</p>
              </div>
            </div>
            <p className="text-gray-700">
              Best estimating system! Clean UI, very efficient.
            </p>
          </div>

        </div>

        <div className="text-center mt-10">
          <button className="px-6 py-3 rounded-xl bg-[#00A651] text-white font-semibold shadow hover:bg-[#008f45]">
            See more reviews
          </button>
        </div>
      </section>

    </div>
  );
}

export default function Automation() {
  return (
    <div className="bg-white text-black overflow-hidden">

      {/* ================= HERO FEATURES ================= */}
      <section className="rounded-3xl mx-4 sm:mx-6 mt-6 px-5 sm:px-10 py-10 bg-[#ECFDF5]">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold max-w-3xl mx-auto leading-tight">
          Automate your contracting <br className="hidden sm:block" />
          business with AI estimating software
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">

          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
              ⏱
            </div>
            <h3 className="font-semibold mt-4 text-lg">Reclaim Your Time</h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              Regain valuable time with our efficient AI estimator.
              Let it crunch the numbers for you.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
              📍
            </div>
            <h3 className="font-semibold mt-4 text-lg">
              Estimate Anywhere, Anytime
            </h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              Provide the client with an accurate estimate
              without leaving their house.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
              ✔
            </div>
            <h3 className="font-semibold mt-4 text-lg">Bid with Expertise</h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              Handoff ensures accuracy, eliminating worries about bidding.
            </p>
          </div>

        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="mt-16 rounded-3xl mx-4 sm:mx-6 px-5 sm:px-6 py-16 sm:py-20 bg-[#0B0B0B]">
        <h2 className="text-white text-center text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Start for free. Pay as little <br className="hidden sm:block" />
          as $119 per month.
        </h2>

        <p className="text-gray-300 text-center mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Handoff will immediately start making you more money,
          before you have to pay us even one cent.
        </p>

        <div className="flex justify-center mt-6">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition">
            See Plan
          </button>
        </div>

        {/* Pricing Card */}
        <div className="flex justify-center mt-14">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6 text-center shadow-xl relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-600">
              Save 20%
            </span>

            <h3 className="font-semibold mt-2 text-lg">Business Plan</h3>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Ideal for businesses getting started with AI estimating.
            </p>

            <div className="text-4xl font-bold mt-6">$119.00</div>
            <p className="text-gray-400 text-sm mt-2">
              Per month / Billed annually
            </p>
          </div>
        </div>
      </section>

      {/* ================= FACEBOOK COMMUNITY ================= */}
      <section className="bg-gray-50 rounded-3xl mx-4 sm:mx-6 my-16 px-5 sm:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">

          <div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Facebook community
            </h3>
            <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
              Have questions about Handoff or need general business advice?
              Speak with other contractors in Handoff Nation,
              our engaging Facebook community.
            </p>

            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition">
              Join community
            </button>
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
            />
            <img
              src="https://randomuser.me/api/portraits/men/44.jpg"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
            />
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
            />
          </div>

        </div>
      </section>

    </div>
  );
}

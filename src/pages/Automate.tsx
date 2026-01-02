export default function Automation() {
  return (
    <div className="bg-white text-black overflow-hidden">

      {/* ================= HERO FEATURES ================= */}
      <section className="rounded-3xl mx-4 sm:mx-6 mt-6 px-6 sm:px-10 py-14 bg-[#ECFDF5]">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold max-w-3xl mx-auto leading-snug">
            Delegate Your Business’s Client Acquisition to{" "}
            <span className="text-green-600">ROI Edge</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition h-full">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-xl">
                ⏱
              </div>
              <h3 className="font-semibold mt-5 text-lg">
                Reclaim your time
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                We handle end-to-end client acquisition so you don’t need to hire,
                train, or manage a team. All we need is just{" "}
                <strong>6 hours per month</strong>.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition h-full">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
                💰
              </div>
              <h3 className="font-semibold mt-5 text-lg">
                Save thousands of dollars
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Eliminate in-house hiring costs, tools, and wasted ad spend.
                Our system delivers results at a fraction of the cost with{" "}
                <strong>assured outcomes</strong>.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition h-full">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-xl">
                🎯
              </div>
              <h3 className="font-semibold mt-5 text-lg">
                Work with industry experts
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Access a team of proven specialists across strategy, ads,
                funnels, and automation — not generalists experimenting on your budget.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition h-full">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xl">
                ✔
              </div>
              <h3 className="font-semibold mt-5 text-lg">
                Assured, measurable results
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Every lead, cost, and conversion is tracked with full transparency —
                because ROI matters more than promises.
              </p>
            </div>

          </div>
        </div>
      </section>

   {/* ================= CONSULTATION CTA ================= */}
<section className="mt-24 rounded-3xl mx-6 sm:mx-10 lg:mx-16 px-6 sm:px-10 py-20 sm:py-28 bg-[#0B0B0B]">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
      Book a consultation call to discuss your business goals
    </h2>

    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
      The ROI Edge team delivers professional execution, full accountability,
      and guaranteed results that make your investment worthwhile.
    </p>

    <div className="flex justify-center mt-12">
      <button className="bg-green-600 hover:bg-green-700 text-white px-14 py-4 rounded-full font-semibold transition shadow-lg">
        Book An Appointment
      </button>
    </div>

  </div>
</section>


      {/* ================= SOCIAL SECTION ================= */}
      <section className="bg-gray-50 rounded-3xl mx-4 sm:mx-6 my-20 px-6 sm:px-10 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Check Our Socials
            </h3>
            <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed max-w-md">
              Have questions about ROI Edge or need general business advice?
              Connect directly with the Founder or follow us for insights.
            </p>

            <button className="mt-7 bg-green-600 hover:bg-green-700 text-white px-9 py-3 rounded-full font-medium transition">
              Connect With Us
            </button>
          </div>

          {/* Avatars */}
          <div className="flex justify-center md:justify-end gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow"
            />
            <img
              src="https://randomuser.me/api/portraits/men/44.jpg"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow"
            />
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow"
            />
          </div>

        </div>
      </section>

    </div>
  );
}

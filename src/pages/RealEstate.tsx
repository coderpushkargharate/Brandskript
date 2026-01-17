import React, { useEffect } from "react";

const RealEstate = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // 🔥 Page opens from top
  }, []);
  
  return (
    <div className="w-full font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-green-500 min-h-[80vh] lg:h-[70vh] text-white rounded-b-[40px] pb-24 pt-20 px-6 lg:px-20 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <div className="lg:pr-10">
            <span className="bg-white text-black px-5 py-1 rounded-full text-sm font-semibold tracking-wide shadow-md">
              REAL ESTATE
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 leading-tight">
              Scale Your Real Estate Business Profitably
            </h1>

            <p className="mt-5 text-white text-lg opacity-95 leading-relaxed">
              Real estate businesses don't grow on exposure alone. They grow when serious buyers and sellers enquire, respond, and convert into real transactions. At ROI Edge, we build ROI-driven Client Acquisition Systems for real estate businesses that need qualified enquiries, booked conversations, and predictable deal flow — without burning money on low-intent leads.
            </p>

            <button className="bg-black mt-8 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-900 transition">
              Book An Appointment
            </button>
          </div>

          {/* RIGHT SIDE: IMAGE + FLOATING CARDS */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6681a13f59ccf69efad6ee76_Mask_features.webp"
              className="w-full max-w-[500px] rounded-3xl object-cover shadow-2xl"
              alt="Real Estate Business"
            />

            {/* FLOATING TILE CARD */}
            <div className="absolute top-5 right-5 bg-white shadow-xl rounded-xl p-4 w-52">
              <div className="font-semibold text-gray-900">Luxury Vinyl Plank (SF)</div>
              <div className="flex justify-between mt-2 text-sm text-gray-700">
                <span>Quantity: 1</span>
                <span>$0.00</span>
              </div>
            </div>

            {/* FLOATING ESTIMATE CARD */}
            <div className="absolute bottom-5 left-5 bg-white shadow-xl rounded-xl p-4 w-64">
              <div className="text-lg font-bold text-gray-900">Master Bathroom</div>
              <div className="text-2xl font-extrabold text-gray-900">$55,200.00</div>
              <div className="text-sm text-gray-600 mt-1">
                Adam Applehead • Jan 01, 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REAL ESTATE CHALLENGES SECTION ================= */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">If your leads look good on paper but don't close, this is for you</h2>
          <p className="mb-6 text-gray-700">
            Most real estate businesses face the same daily problems:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold">Enquiries come in, but prospects go cold</h3>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold">Leads ask for details, then disappear</h3>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold">Sales teams waste time on unqualified calls</h3>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold">Ad spend increases, but closings don't</h3>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold">Revenue depends heavily on market cycles and referrals</h3>
            </div>
          </div>
          <p className="text-gray-700">
            The issue isn't demand. It's lead quality, follow-up, and system efficiency.
          </p>
        </div>
      </section>

      {/* ================= PRIORITIZE INTENT SECTION ================= */}
      <section className="bg-blue-50 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-700 mb-4">We prioritise intent, not just enquiries</h2>
            <p className="mb-4 text-gray-700">
              More leads don't mean more deals.
            </p>
            <p className="mb-4 text-gray-700">
              We design systems that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Attract serious buyers and sellers</li>
              <li>Filter out low-intent and casual browsers</li>
              <li>Qualify prospects before they reach your team</li>
            </ul>
            <p className="font-medium text-gray-700">
              Result: Better conversations and higher closing probability.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/600/400" alt="Real Estate Team Meeting" className="rounded-xl w-full" />
          </div>
        </div>
      </section>

      {/* ================= TURN INTEREST INTO CONVERSATIONS SECTION ================= */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">We turn interest into booked, attended conversations</h2>
          <p className="mb-4 text-gray-700">
            Most real estate leads are lost after the first enquiry.
          </p>
          <p className="mb-4 text-gray-700">
            Our system ensures:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Instant WhatsApp & email responses</li>
            <li>Automated reminders and follow-ups</li>
            <li>Higher show-up rates for calls and site visits</li>
          </ul>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <p className="text-indigo-800 font-medium">
              Result: Less chasing. More real conversations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BUILD AROUND REAL ESTATE SALES SECTION ================= */}
      <section className="bg-blue-50 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <img src="https://picsum.photos/600/400?random=2" alt="Real Estate Sales Journey" className="rounded-xl w-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-orange-700 mb-4">We build acquisition around how real estate actually sells</h2>
            <p className="mb-4 text-gray-700">
              Real estate sales aren't instant — and generic funnels don't work.
            </p>
            <p className="mb-4 text-gray-700">
              We build systems aligned with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Buyer and seller journeys</li>
              <li>Long decision cycles</li>
              <li>Multiple touchpoints before conversion</li>
              <li>High-value, trust-driven sales conversations</li>
            </ul>
            <p className="font-medium text-gray-700">
              Result: A funnel that supports real deal flow, not just lead generation.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TRACK WHAT LEADS TO REVENUE SECTION ================= */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-700 mb-4">We track what leads to real revenue</h2>
          <p className="mb-4 text-gray-700">
            Clicks and leads don't close deals — conversions do.
          </p>
          <p className="mb-4 text-gray-700">
            We track performance from: Ad → Enquiry → Conversation → Conversion
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="bg-purple-100 p-4 rounded-lg flex-1">
              <div className="text-center mb-2">
                <svg className="w-8 h-8 mx-auto text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4h-3v4H7zM10 12a2 2 0 100-4h-3v4H7zM10 12a2 2 0 100-4h-3v4H7z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-center">Cost per qualified enquiry</h3>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg flex-1">
              <div className="text-center mb-2">
                <svg className="w-8 h-8 mx-auto text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4h-3v4H7zM10 12a2 2 0 100-4h-3v4H7zM10 12a2 2 0 100-4h-3v4H7z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-center">Cost per meaningful conversation</h3>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg flex-1">
              <div className="text-center mb-2">
                <svg className="w-8 h-8 mx-auto text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4h-3v4H7zM10 12a2 2 0 100-4h-3v4H7zM10 12a2 2 0 100-4h-3v4H7z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-center">Revenue efficiency</h3>
            </div>
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <p className="text-indigo-800 font-medium">
              Result: Clear ROI and smarter scaling decisions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= AUTOMATE FOLLOW-UPS SECTION ================= */}
      <section className="bg-blue-50 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-700 mb-4">We automate follow-ups without losing the human touch</h2>
            <p className="mb-4 text-gray-700">
              Most real estate teams lose deals due to poor follow-up.
            </p>
            <p className="mb-4 text-gray-700">
              Our AI-powered automation handles:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold">Lead qualification</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold">Follow-ups and reminders</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold">Re-engagement for cold or inactive leads</h3>
              </div>
            </div>
            <p className="font-medium text-gray-700">
              Result: Your team focuses on closing, not chasing.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/600/400?random=3" alt="Automation System" className="rounded-xl w-full" />
          </div>
        </div>
      </section>

      {/* ================= PREDICTABLE DEAL FLOW SECTION ================= */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-700 mb-4">Built for stable, predictable deal flow</h2>
          <p className="mb-4 text-gray-700">
            We don't push volume for the sake of numbers.
          </p>
          <p className="mb-4 text-gray-700">
            We scale only when:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold">Lead quality is consistent</h3>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold">Conversion performance is proven</h3>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold">Your sales team can handle demand</h3>
            </div>
          </div>
          <p className="font-medium text-gray-700">
            Result: Sustainable growth without wasted spend or operational chaos.
          </p>
        </div>
      </section>

      {/* ================= WHO THIS IS FOR SECTION ================= */}
      <section className="bg-blue-50 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Who this is for</h2>
          <p className="mb-6 text-gray-700">
            This is for real estate businesses that:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start">
              <span className="w-6 h-6 mr-2 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
              <span className="text-gray-700">Want higher-quality enquiries, not more noise</span>
            </div>
            <div className="flex items-start">
              <span className="w-6 h-6 mr-2 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
              <span className="text-gray-700">Care about ROI and deal efficiency</span>
            </div>
            <div className="flex items-start">
              <span className="w-6 h-6 mr-2 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
              <span className="text-gray-700">Need predictable pipelines, not spikes</span>
            </div>
            <div className="flex items-start">
              <span className="w-6 h-6 mr-2 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
              <span className="text-gray-700">Are ready to build systems, not gamble on ads</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUILD PROFITABLE SYSTEM SECTION ================= */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-orange-700 mb-4">Build a profitable Client Acquisition System for your Real Estate Business</h2>
            <p className="mb-4 text-gray-700">
              Book a free strategy session to:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold">Identify where your current leads are leaking</h3>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold">Improve enquiry quality and follow-ups</h3>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold">Build a scalable, ROI-driven acquisition system</h3>
              </div>
            </div>
            <p className="mb-4 text-gray-700">
              No pressure. Just clarity.
            </p>
            <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-green-700 transition">
              Book a Strategy Session
            </button>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 px-6 lg:px-20 text-center">
        <h2 className="text-4xl font-bold">How it works</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Handoff delivers fast, accurate construction estimates...
        </p>
      </section>

      {/* ================= GENERATE ESTIMATES ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-20 py-10 items-center">
        <div>
          <h3 className="text-3xl font-bold">Generate Estimates from Photos, Drawings, and More</h3>
          <p className="text-gray-600 mt-3">
            Upload photos, videos, files, or describe the scope...
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full">
            Start free trial
          </button>
        </div>

        <div className="bg-yellow-100 rounded-2xl p-6 shadow">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="font-bold">New Estimate</div>
            <input
              placeholder="Type your project description here..."
              className="mt-4 border p-3 w-full rounded-lg"
            />
            <div className="flex gap-2 mt-3">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Bathroom remodel</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Kitchen remodel</span>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-full mt-5">
              Apply
            </button>
          </div>
        </div>
      </section>

      {/* ================= REWORK ESTIMATE ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-20 py-10 items-center">
        <img
          src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6681bfc2a058f83163f0726c_Img.webp"
          className="rounded-2xl w-full shadow-xl"
        />

        <div>
          <h3 className="text-3xl font-bold">Rework Your Estimate Without Redoing It</h3>
          <p className="text-gray-600 mt-3">
            Whether you’ve uploaded a new photo, changed the scope...
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full">
            Start free trial
          </button>
        </div>
      </section>

      {/* ================= LOCAL PRICING ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-20 py-20 items-center">
        <div>
          <h3 className="text-3xl font-bold">Real-Time, Local Pricing</h3>
          <p className="text-gray-600 mt-3">
            Handoff analyzes live construction pricing in every US city...
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full">
            Start free trial
          </button>
        </div>

        <img
          src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6709227d8639d74e0a46d884_Efficient%20Project%20Estimation.avif"
          className="rounded-2xl w-full shadow-xl"
        />
      </section>

      {/* ================= YELLOW CTA ================= */}
      <section className="bg-yellow-100 px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-3xl">
        <div>
          <h2 className="text-4xl font-extrabold">
            Handoff revolutionizes the construction industry with its
            <span className="underline"> AI-driven estimating software</span>
          </h2>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full mt-6 font-semibold">
            Get started now
          </button>
        </div>

        <img
          src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6681b1003a6814dca7f39ed3_img_integrated.webp"
          className="rounded-3xl w-full shadow-xl object-cover"
        />
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="px-6 lg:px-20 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore all features of Handoff
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h4 className="font-bold text-xl">Client Management System</h4>
            <p className="text-gray-600 mt-2">
              Store all project estimates in one place.
            </p>
            <a className="text-green-600 mt-4 inline-block font-semibold">Learn more →</a>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h4 className="font-bold text-xl">Winning AI Proposals</h4>
            <p className="text-gray-600 mt-2">
              AI generates proposals you can send instantly.
            </p>
            <a className="text-green-600 mt-4 inline-block font-semibold">Learn more →</a>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h4 className="font-bold text-xl">Invoicing</h4>
            <p className="text-gray-600 mt-2">
              Send invoices & track payments easily.
            </p>
            <a className="text-green-600 mt-4 inline-block font-semibold">Learn more →</a>
          </div>
        </div>
      </section>

      {/* ================= RATINGS SECTION ================= */}
      <section className="px-6 lg:px-20 pb-20 text-center">
        <h2 className="text-3xl font-bold">Highly rated by 1000s of contractors</h2>

        <div className="flex justify-center gap-12 mt-10">
          <img src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/67ea7a3eeda87d6ec6d3325f_Frame%201597878587.svg" className="h-10" />
          <img src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/67ea7a7d926dcf9cfb578d33_Frame%201597878593.svg" className="h-10" />
          <img src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/67ea7ab371c1c7e2a43a14e8_Frame%201597878592.svg" className="h-10" />
        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="bg-green-100 py-20 px-6 lg:px-20 rounded-t-3xl text-center">
        <img
          src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6650cddf762ba9b692753e3e_Happy.webp"
          className="mx-auto h-40"
        />

        <h2 className="text-4xl font-bold mt-6">
          Boost your business with Handoff
        </h2>

        <p className="text-gray-700 mt-3">
          Start earning more revenue without spending a single penny upfront.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <img src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6650cddf762ba9b692753e3c_google_app_store.webp" className="h-12" />
          <img src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6650cddf762ba9b692753e3d_app_store.webp" className="h-12" />
        </div>
      </section>
    </div>
  );
};

export default RealEstate;
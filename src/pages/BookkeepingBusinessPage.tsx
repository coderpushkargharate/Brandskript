import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function BookkeepingBusinessPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reusable button class
  const primaryButtonClass =
    "mt-6 px-6 py-3 bg-[#d2fe3a] text-[#0074ff] rounded-full font-semibold shadow hover:scale-[1.02] transition dm-sans";

  return (
    <div className="w-full font-sans bg-white text-gray-900 dm-sans">
      {/* HERO SECTION - Bookkeeping Business */}
      <section className="w-full bg-white py-14 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="bg-blue-600 rounded-3xl p-10 text-white">
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">BOOKKEEPING</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Scale Your Bookkeeping Business Profitably
            </h1>
            <p className="mt-4 opacity-90 mb-5">
              Bookkeeping businesses don't grow on credentials alone. They grow when the right business owners enquire, respond, and stay on as long-term clients. At ROI Edge, we build ROI-driven Client Acquisition Systems for bookkeeping businesses that need qualified enquiries, booked conversations, and predictable recurring revenue — without chasing leads or relying on referrals.
            </p>
            <Link to="/get-started" className={primaryButtonClass}>
              Book An Appointment
            </Link>
            <p className="text-sm mt-2 opacity-80 mt-5">7-day free trial</p>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1c5516346f3336dec4_fix%20and%20flip_1.webp",
              "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1cf086b776db91dc2d_fix%20and%20flip_2.webp",
              "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1c6f5e1c29d54caff3_fix%20and%20flip_3.webp",
              "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1cef39f53a4f040c76_fix%20and%20flip_4.webp",
            ].map((src, i) => (
              <img key={i} className="rounded-xl w-full h-auto object-cover" src={src} alt={`Bookkeeping image ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* BOOKKEEPING BUSINESS CHALLENGES SECTION */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">If getting consistent clients feels harder than doing the work, you're not alone</h2>
          <p className="mb-6 text-gray-700">
            Most bookkeeping business owners face this daily:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Enquiries come in but aren't serious",
              "Prospects price-shop and disappear",
              "Sales conversations don't convert into retainers",
              "Growth depends heavily on referrals",
              "Revenue feels unstable despite steady demand",
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
          <p className="text-gray-700">
            The problem isn't your expertise. It's the lack of a structured acquisition system.
          </p>
        </div>
      </section>

      {/* HOW ROI EDGE HELPS SECTION */}
      <section className="bg-blue-50 py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">How ROI Edge helps bookkeeping businesses grow</h2>
            <h3 className="text-2xl font-bold text-green-600 mb-4">We attract serious business owners — not free consultations</h3>
            <p className="mb-4 text-gray-700">More enquiries don't mean better clients.</p>
            <p className="mb-4 text-gray-700">We design systems that:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Target high-intent business owners</li>
              <li>Filter out low-budget and non-fit prospects</li>
              <li>Qualify leads before conversations happen</li>
            </ul>
            <p className="font-medium text-gray-700">Result: Better conversations and higher-quality clients.</p>
          </div>
          <div>
            <img src="https://picsum.photos/600/400" alt="Business Meeting" className="rounded-xl w-full" />
          </div>
        </div>
      </section>

      {/* TURN INTEREST INTO BOOKED CALLS SECTION */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-600 mb-4">We turn interest into booked, attended sales calls</h2>
          <p className="mb-4 text-gray-700">Most bookkeeping leads drop off during follow-ups.</p>
          <p className="mb-4 text-gray-700">Our system ensures:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Instant WhatsApp & email responses</li>
            <li>Automated reminders and follow-ups</li>
            <li>Higher show-up rates for discovery calls</li>
          </ul>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <h3 className="text-2xl font-bold text-indigo-800 mb-2">Less chasing. More real conversations.</h3>
            <p className="text-indigo-800">Result: Less chasing. More real conversations.</p>
          </div>
        </div>
      </section>

      {/* ALIGN ACQUISITION WITH RECURRING SALES SECTION */}
      <section className="bg-blue-50 py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <img src="https://picsum.photos/600/400?random=2" alt="Business Handshake" className="rounded-xl w-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">We align acquisition with recurring service sales</h2>
            <p className="mb-4 text-gray-700">Bookkeeping is built on trust and long-term value.</p>
            <p className="mb-4 text-gray-700">We design acquisition systems that:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Support decision-making for monthly retainers</li>
              <li>Set clear expectations before calls</li>
              <li>Reduce friction in onboarding</li>
            </ul>
            <p className="font-medium text-gray-700">Result: Clients who stay longer, not just sign up once.</p>
          </div>
        </div>
      </section>

      {/* TRACK WHAT DRIVES REVENUE SECTION */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-600 mb-4">We track what actually drives recurring revenue</h2>
          <p className="mb-4 text-gray-700">Lead volume doesn't equal predictable income.</p>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {["Ad", "Enquiry", "Call", "Client"].map((step, i) => (
              <div key={i} className="bg-purple-100 p-4 rounded-lg flex-1">
                <div className="text-center mb-2">
                  <svg className="w-8 h-8 mx-auto text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4h-3v4H7z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-center">{step}</h3>
              </div>
            ))}
          </div>
          <p className="mb-4 text-gray-700">We track performance from: Ad → Enquiry → Call → Client</p>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {[
              "Cost per booked call",
              "Cost per retained client",
              "Lifetime value efficiency",
            ].map((metric, i) => (
              <div key={i} className="bg-purple-100 p-4 rounded-lg flex-1">
                <h3 className="font-semibold text-center">{metric}</h3>
              </div>
            ))}
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <p className="text-indigo-800 font-medium">Result: Clear ROI and confident scaling.</p>
          </div>
        </div>
      </section>

      {/* AUTOMATE FOLLOW-UPS SECTION */}
      <section className="bg-blue-50 py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">We automate follow-ups without losing the personal touch</h2>
            <p className="mb-4 text-gray-700">Bookkeeping relationships are personal — admin shouldn't be heavy.</p>
            <p className="mb-4 text-gray-700">Our AI-powered automation handles:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Lead qualification</li>
              <li>Follow-ups and reminders</li>
              <li>Re-engagement for stalled prospects</li>
            </ul>
            <p className="font-medium text-gray-700">Result: Your team focuses on delivery, not admin.</p>
          </div>
          <div>
            <img src="https://picsum.photos/600/400?random=3" alt="Automation System" className="rounded-xl w-full" />
          </div>
        </div>
      </section>

      {/* PREDICTABLE MONTHLY REVENUE SECTION */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Built for stable, predictable monthly revenue</h2>
          <p className="mb-4 text-gray-700">We don't push volume that hurts service quality.</p>
          <p className="mb-4 text-gray-700">We scale only when:</p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              "Client quality is consistent",
              "Conversion rates are proven",
              "Your team can deliver without overload",
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg">
            <p className="text-gray-700">Result: Sustainable growth without churn or burnout.</p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR SECTION */}
      <section className="bg-blue-50 py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Who this is for</h2>
          <p className="mb-6 text-gray-700">This is for bookkeeping businesses that:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "Want predictable, recurring clients",
              "Care about client quality over quantity",
              "Are ready to build systems, not chase leads",
              "Want growth without constant uncertainty",
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <span className="w-6 h-6 mr-2 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILD PROFITABLE SYSTEM SECTION */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Build a profitable Client Acquisition System for your Bookkeeping Business</h2>
            <p className="mb-4 text-gray-700">Book a free strategy session to:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              {[
                "Identify where your client flow is breaking",
                "Improve lead quality and conversion",
                "Build a scalable, ROI-driven acquisition system",
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold">{item}</h3>
                </div>
              ))}
            </div>
            <p className="mb-4 text-gray-700">No pressure. Just clarity.</p>
            <Link to="/get-started" className="bg-[#d2fe3a] text-[#0074ff] font-semibold px-6 py-3 rounded-full shadow hover:scale-[1.02] transition dm-sans">
              Book a Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
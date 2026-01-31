import React, { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export default function SaaSBusiness() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  const faqs = [
    "Where does your cost data come from?",
    "Can your pricing be localized to my area?",
    "Does this work for my type of business?",
    "Can I cancel at any time?",
    "When will you have a certain feature that I need?",
    "Do you have an online community for customers?",
    "Do you have an affiliate or ambassador program?",
    "Do you offer homeowner financing options?",
    "Does your AI read my drawings, photos, and other files?",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <div className="w-full bg-white text-gray-900 dm-sans">
      {/* HERO SECTION */}
      <section className="bg-[#0074ff] rounded-3xl max-w-7xl mx-2 lg:mx-auto  mt-6 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-12 ">
          <div className="text-white p-2 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Scale Your SaaS Business Profitably
            </h1>
            <p className="mb-6 opacity-90 text-lg">
              SaaS growth looks different for every business—some scale through installs, others through trials, subscriptions, or demos. The key isn't more traffic, but aligning acquisition with how your product generates revenue. At ROI Edge, we build ROI-driven acquisition systems tailored to your SaaS model and unit economics. Every campaign and funnel is optimized to maintain healthy CAC–LTV ratios while scaling predictably.
            </p>
            <Link
              to="/get-started"
              className="bg-[#d2fe3a] text-[#0074ff] px-8 py-3 mb-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Book An Appointment
            </Link>
            <p className="mt-2 text-sm opacity-90 mt-5">7-day free trial</p>
          </div>

          <div className="rounded-xl overflow-hidden">
            <img
              src="https://picsum.photos/600/400"
              alt="SaaS Growth Illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* SaaS GROWTH SECTION */}
      <section className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="noir-pro text-2xl md:text-3xl font-medium mb-4 text-gray-800">
            SaaS growth isn't about doing more marketing.
          </h2>
          <p className="mb-4 text-gray-700">
            It's about aligning acquisition with how your product actually generates revenue.
          </p>
          <p className="mb-4 text-gray-700">
            Some SaaS businesses scale through app installs and activation. Some through free trials or subscriptions. Others through sales pages, demos, or hybrid models.
          </p>
          <p className="mb-4 text-gray-700">
            The problem isn't demand. The problem is using a generic approach for a product with a unique growth motion.
          </p>
          <p className="mb-4 text-gray-700">
            At ROI Edge, we design ROI-driven client acquisition systems built around how your SaaS converts, not what's easiest to measure.
          </p>
        </div>
      </section>

      {/* ACQUISITION SYSTEM SECTION */}
      <section className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="noir-pro text-2xl md:text-3xl font-medium mb-4 text-gray-800">
            Acquisition designed around your SaaS model
          </h2>
          <p className="mb-4 text-gray-700">
            We begin with how your product converts—not with ad platforms.
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Install-first, trial-first, subscription-first, or demo-led models</li>
            <li>Product-led, sales-led, or hybrid growth motions</li>
            <li>Revenue-driving actions defined before campaign launch</li>
          </ul>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-blue-800 font-medium">
              Outcome: Acquisition that supports your product and growth strategy.
            </p>
          </div>
        </div>
      </section>

      {/* PAID ACQUISITION SECTION */}
      <section className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="noir-pro text-2xl md:text-3xl font-medium mb-4 text-gray-800">
            Paid acquisition optimised for ROI, not volume
          </h2>
          <p className="mb-4 text-gray-700">
            We use Google Ads, Meta Ads, and outreach strategically—based on intent and economics.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-800 dm-sans">High-intent demand capture</h3>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-800 dm-sans">Precise audience and messaging alignment</h3>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-800 dm-sans">Conversion-focused creatives tied to funnel behaviour</h3>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-blue-800 font-medium">
              Outcome: Higher-quality users, controlled CAC, and reduced waste.
            </p>
          </div>
        </div>
      </section>

      {/* FULL-FUNNEL TRACKING SECTION */}
      <section className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="noir-pro text-2xl md:text-3xl font-medium mb-4 text-gray-800">
            Full-funnel tracking and continuous optimisation
          </h2>
          <p className="mb-4 text-gray-700">
            We don't stop at clicks, installs, or signups.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 bg-gray-50 p-5 rounded-lg text-center">
              <div className="inline-block w-12 h-12 bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dm-sans">End-to-end visibility</h3>
              <p className="text-sm text-gray-600 mt-1">From ad → product → revenue</p>
            </div>
            <div className="flex-1 bg-gray-50 p-5 rounded-lg text-center">
              <div className="inline-block w-12 h-12 bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dm-sans">Optimisation across every funnel stage</h3>
            </div>
            <div className="flex-1 bg-gray-50 p-5 rounded-lg text-center">
              <div className="inline-block w-12 h-12 bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dm-sans">Decisions driven by performance data</h3>
              <p className="text-sm text-gray-600 mt-1">Not assumptions</p>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-blue-800 font-medium">
              Outcome: Clear insight into what works and what can scale profitably.
            </p>
          </div>
        </div>
      </section>

      {/* AI-POWERED AUTOMATION SECTION */}
      <section className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <img
                src="https://picsum.photos/400/300"
                alt="AI Agent"
                className="rounded-xl w-full object-cover"
              />
            </div>
            <div>
              <h2 className="noir-pro text-2xl md:text-3xl font-medium mb-4 text-gray-800">
                AI-powered automation built for scale
              </h2>
              <p className="mb-4 text-gray-700">
                Our AI agents handle qualification, nurturing, and follow-ups—without increasing manual workload.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Automated qualification where needed</li>
                <li>Smart follow-ups and reminders</li>
                <li>Improved activation, engagement, and conversion rates</li>
              </ul>
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">
                  Outcome: Your team focuses on growth, not chasing users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFITABLE SCALING SECTION */}
      <section className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="noir-pro text-2xl md:text-3xl font-medium mb-4 text-gray-800">
            A system engineered for profitable scaling
          </h2>
          <p className="mb-4 text-gray-700">
            We scale only after efficiency benchmarks are proven.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-800 dm-sans mb-2">CAC-LTV alignment before budget expansion</h3>
              <p className="text-sm text-gray-600">
                We ensure your unit economics are healthy before increasing spend.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-800 dm-sans mb-2">Controlled scaling without performance drops</h3>
              <p className="text-sm text-gray-600">
                Growth that maintains efficiency at every stage.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-800 dm-sans mb-2">Systems that grow with your SaaS stage</h3>
              <p className="text-sm text-gray-600">
                From early traction to enterprise scale.
              </p>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-blue-800 font-medium">
              Outcome: Predictable, sustainable growth with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* WHY SAAS TEAMS CHOOSE US SECTION */}
      <section className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="noir-pro text-2xl md:text-3xl font-medium mb-4 text-gray-800">
            Why SaaS teams choose ROI Edge
          </h2>
          <ul className="space-y-3 mb-6">
            {[
              "Client acquisition systems—not isolated campaigns",
              "Built for installs, subscriptions, trials, or demos",
              "ROI-first optimisation at every stage",
              "Automation that reduces marketing and sales load",
              "Clear accountability on performance"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="w-6 h-6 mr-3 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-0.5">
                  ✓
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 italic">
            We don't promise "more traffic" or "more leads." We build profitable client acquisition systems for SaaS businesses.
          </p>
        </div>
      </section>

      {/* BUILD PROFITABLE SYSTEM SECTION */}
      <section className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="noir-pro text-2xl md:text-3xl font-medium mb-4 text-gray-800">
            Build a profitable Client Acquisition System for your SaaS
          </h2>
          <p className="mb-4 text-gray-700">
            Book a free strategy session to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Identify the right acquisition model for your SaaS</li>
            <li>Map a scalable, ROI-driven growth system</li>
            <li>Understand where efficiency and ROI can improve immediately</li>
          </ul>
          <p className="mb-6 text-gray-700">No pressure. Just clarity.</p>
          <button className=" dm-sans">
            <Link
              to="/get-started"
              className="bg-[#d2fe3a] text-[#0074ff] px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Book An Appointment
            </Link>
          </button>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="max-w-7xl mx-auto p-6 md:p-8">
        <h2 className="noir-pro text-2xl md:text-3xl font-medium mb-6 text-center text-gray-800">
          Case Studies and Guides
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded-xl shadow p-6">
              <img
                src={`https://picsum.photos/300/200?random=${n}`}
                alt={`Case Study ${n}`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold text-lg mb-2 dm-sans">Case Study Title {n}</h3>
              <p className="text-gray-600 text-sm mb-4">
                Brief description of the case study and results achieved.
              </p>
              <button className="text-green-600 text-sm font-semibold hover:underline dm-sans">Read More →</button>
            </div>
          ))}
        </div>
      </section>

      {/* BOOST YOUR BUSINESS SECTION */}
      <section className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="bg-[#0074ff] rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="noir-pro text-2xl md:text-3xl font-medium mb-4 text-white">
            Boost Your Business With ROI Edge
          </h2>
          <p className="text-white mb-6 max-w-2xl mx-auto">
            Generate consistent leads, reduce acquisition costs, and grow your revenue with our SaaS-focused acquisition systems.
          </p>
          <button className="bg-[#d2fe3a] text-[#0074ff] font-semibold px-6 py-3 rounded-xl shadow hover:bg-green-700 transition dm-sans">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
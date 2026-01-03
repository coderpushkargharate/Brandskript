import React, { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function HandymanPage() {
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
    window.scrollTo(0, 0); // 🔥 Page opens from top
  }, []);

  return (
    <div className="w-full font-sans bg-white text-gray-900">
      {/* HERO SECTION - Updated for SaaS */}
      <section className="bg-green-500 rounded-3xl max-w-7xl mx-auto mt-6 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-12">
          <div className="text-white p-4">
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Scale Your SaaS Business Profitably
            </h1>
            <p className="mb-6 opacity-90">
              SaaS growth looks different for every business—some scale through installs, others through trials, subscriptions, or demos. The key isn't more traffic, but aligning acquisition with how your product generates revenue. At ROI Edge, we build ROI-driven acquisition systems tailored to your SaaS model and unit economics. Every campaign and funnel is optimized to maintain healthy CAC–LTV ratios while scaling predictably.
            </p>
            <button className="bg-white text-green-600 font-semibold px-5 py-2 rounded-xl shadow">
              Book An Appointment
            </button>
            <p className="mt-2 text-sm opacity-90">7-day free trial</p>
          </div>

          <div className="rounded-xl overflow-hidden">
            <img src="https://picsum.photos/600/400" alt="SaaS Growth Illustration" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* SaaS GROWTH SECTION */}
      <section className="max-w-7xl mx-auto p-8 md:p-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
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
      <section className="max-w-7xl mx-auto p-8 md:p-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Acquisition designed around your SaaS model
          </h2>
          <p className="mb-4 text-gray-700">
            We begin with how your product converts—not with ad platforms.
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
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
      <section className="max-w-7xl mx-auto p-8 md:p-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Paid acquisition optimised for ROI, not volume
          </h2>
          <p className="mb-4 text-gray-700">
            We use Google Ads, Meta Ads, and outreach strategically—based on intent and economics.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">High-intent demand capture</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Precise audience and messaging alignment</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Conversion-focused creatives tied to funnel behaviour</h3>
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
      <section className="max-w-7xl mx-auto p-8 md:p-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Full-funnel tracking and continuous optimisation
          </h2>
          <p className="mb-4 text-gray-700">
            We don't stop at clicks, installs, or signups.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 bg-gray-50 p-4 rounded-lg">
              <div className="text-center mb-2">
                <svg className="w-8 h-8 mx-auto text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4h-3v4H7zM10 12a2 2 0 100-4h-3v4H7zM10 12a2 2 0 100-4h-3v4H7z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-center">End-to-end visibility</h3>
              <p className="text-sm text-center mt-1">From ad → product → revenue</p>
            </div>
            <div className="flex-1 bg-gray-50 p-4 rounded-lg">
              <div className="text-center mb-2">
                <svg className="w-8 h-8 mx-auto text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4h-3v4H7zM10 12a2 2 0 100-4h-3v4H7zM10 12a2 2 0 100-4h-3v4H7z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-center">Optimisation across every funnel stage</h3>
            </div>
            <div className="flex-1 bg-gray-50 p-4 rounded-lg">
              <div className="text-center mb-2">
                <svg className="w-8 h-8 mx-auto text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4h-3v4H7zM10 12a2 2 0 100-4h-3v4H7zM10 12a2 2 0 100-4h-3v4H7z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-center">Decisions driven by performance data</h3>
              <p className="text-sm text-center mt-1">Not assumptions</p>
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
      <section className="max-w-7xl mx-auto p-8 md:p-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <img src="https://picsum.photos/400/300" alt="AI Agent" className="rounded-xl w-full" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                AI-powered automation built for scale
              </h2>
              <p className="mb-4 text-gray-700">
                Our AI agents handle qualification, nurturing, and follow-ups—without increasing manual workload.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
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
      <section className="max-w-7xl mx-auto p-8 md:p-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            A system engineered for profitable scaling
          </h2>
          <p className="mb-4 text-gray-700">
            We scale only after efficiency benchmarks are proven.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">CAC-LTV alignment before budget expansion</h3>
              <p className="text-sm">We ensure your unit economics are healthy before increasing spend.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Controlled scaling without performance drops</h3>
              <p className="text-sm">Growth that maintains efficiency at every stage.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Systems that grow with your SaaS stage</h3>
              <p className="text-sm">From early traction to enterprise scale.</p>
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
      <section className="max-w-7xl mx-auto p-8 md:p-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Why SaaS teams choose ROI Edge
          </h2>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="w-6 h-6 mr-2 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
              <span className="text-gray-700">Client acquisition systems—not isolated campaigns</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 mr-2 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
              <span className="text-gray-700">Built for installs, subscriptions, trials, or demos</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 mr-2 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
              <span className="text-gray-700">ROI-first optimisation at every stage</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 mr-2 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
              <span className="text-gray-700">Automation that reduces marketing and sales load</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 mr-2 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
              <span className="text-gray-700">Clear accountability on performance</span>
            </li>
          </ul>
          <p className="text-gray-700 italic">
            We don't promise "more traffic" or "more leads." We build profitable client acquisition systems for SaaS businesses.
          </p>
        </div>
      </section>

      {/* BUILD PROFITABLE SYSTEM SECTION */}
      <section className="max-w-7xl mx-auto p-8 md:p-12">
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Build a profitable Client Acquisition System for your SaaS
          </h2>
          <p className="mb-4 text-gray-700">
            Book a free strategy session to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Identify the right acquisition model for your SaaS</li>
            <li>Map a scalable, ROI-driven growth system</li>
            <li>Understand where efficiency and ROI can improve immediately</li>
          </ul>
          <p className="mb-4 text-gray-700">
            No pressure. Just clarity.
          </p>
          <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-green-700 transition">
            Book a Strategy Session
          </button>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="max-w-7xl mx-auto p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Case Studies and Guides</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded-xl shadow p-6">
              <img src={`https://picsum.photos/300/200?random=${n}`} alt={`Case Study ${n}`} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="font-bold mb-2">Case Study Title {n}</h3>
              <p className="text-gray-600 text-sm mb-4">
                Brief description of the case study and results achieved.
              </p>
              <button className="text-green-600 text-sm font-semibold">Read More →</button>
            </div>
          ))}
        </div>
      </section>

      {/* BOOST YOUR BUSINESS SECTION */}
      <section className="max-w-7xl mx-auto p-8 md:p-12">
        <div className="bg-green-50 rounded-xl shadow-lg p-6 md:p-8 text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4h-3v4H7zM10 12a2 2 0 100-4h-3v4H7zM10 12a2 2 0 100-4h-3v4H7z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Boost Your Business With ROI Edge
          </h2>
          <p className="text-gray-600 mb-6">
            Generate consistent leads, reduce acquisition costs, and grow your revenue with our SaaS-focused acquisition systems.
          </p>
          <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-green-700 transition">
            Get Started Today
          </button>
        </div>
      </section>


    
    </div>
  );
}
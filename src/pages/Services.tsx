// ServicesPage.jsx
import React from "react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Services
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-blue-100">
            What We Deliver And How We Drive Growth.
          </p>
        </div>
      </section>

      {/* ================= CLIENT ACQUISITION SYSTEM ================= */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-14 items-center">
          <div>
            <div className="w-full h-72 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              [Image Placeholder — Leave Blank]
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              CLIENT ACQUISITION SYSTEM
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our proprietary, performance-driven framework designed to consistently attract, qualify, and convert your Ideal Customer Profile into booked appointments. This system bridges the gap between marketing and sales by combining paid ads, outreach, AI-powered automation, and full-funnel optimization—so you don’t just get leads, you get ready-to-convert clients. This is where predictable growth begins at ROI Edge, and the foundation we use to help our partners scale into sustainable, high-revenue businesses with guaranteed results.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ADVANCED LEAD GENERATION ================= */}
      <section className="py-24 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-14 items-center">
          <div className="order-last lg:order-first lg:col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              ADVANCE LEAD GENERATION
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our precision-driven system attracts high-intent prospects who match your Ideal Customer Profile, not random inquiries. Using data-backed targeting, conversion-focused creatives, and advanced tracking, we deliver qualified leads ready for your sales team. Every campaign is optimized to lower cost per lead, improve lead quality, and drive predictable pipeline growth—without wasted ad spend or guesswork.
            </p>
          </div>
          <div>
            <div className="w-full h-72 rounded-2xl bg-gray-800 flex items-center justify-center text-gray-500 text-sm">
              [Image Placeholder — Leave Blank]
            </div>
          </div>
        </div>
      </section>

      {/* ================= META ADS ================= */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-14 items-center">
          <div>
            <div className="w-full h-72 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              [Image Placeholder — Leave Blank]
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">META ADS</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our performance-focused approach to Facebook and Instagram advertising designed to generate qualified leads and booked appointments, not vanity metrics. We build and optimize conversion-driven campaigns using precise audience targeting, high-impact creatives, and full-funnel tracking. Every campaign is continuously refined to reduce cost per result, improve lead quality, and maximize ROI—so your ad spend turns into predictable business growth, not wasted impressions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= GOOGLE ADS ================= */}
      <section className="py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-14 items-center">
          <div>
            <div className="w-full h-72 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
              [Image Placeholder — Leave Blank]
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">GOOGLE ADS</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our intent-driven advertising system designed to capture demand at the exact moment prospects are actively searching for your solution. We build and optimize high-converting search and performance campaigns using precise keyword strategy, compelling ad copy, and advanced conversion tracking. Every campaign is engineered to reduce cost per conversion, attract high-quality leads, and deliver predictable ROI—so you only pay for traffic that’s ready to convert.
            </p>
          </div>
        </div>
      </section>

      {/* ================= AI AGENTS ================= */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-14 items-center">
          <div>
            <div className="w-full h-72 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              [Image Placeholder — Leave Blank]
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">AI AGENTS</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Intelligent automation systems that qualify, nurture, and follow up with leads automatically, so your sales team only works with ready-to-convert prospects. Our AI agents handle lead filtering, multi-touch follow-ups, and engagement across email and WhatsApp—ensuring faster responses, higher show-up rates, and improved conversions. This removes manual workload, reduces leakage, and turns your acquisition process into a scalable, always-on system.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PLAN OF ATTACK ================= */}
      <section className="py-28 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            OUR PLAN OF ATTACK FOR YOUR UNIQUE FIGHT.
          </h2>
          <p className="text-gray-600 max-w-3xl mb-16">
            Every business needs a different growth plan. This is how we build one that delivers qualified leads, booked appointments, and ROI you can bank on.
          </p>

          <div className="space-y-12">
            {[
              {
                title: "01 — DIAGNOSTIC AUDIT",
                steps: [
                  "Start by understanding your business from the inside out.",
                  "Ideal Customer Profile (ICP) clarity",
                  "Market demand & competitor analysis",
                  "Funnel, ads, tracking & conversion gaps",
                  "Sales process and follow-up review"
                ],
                outcome: "Clear visibility on what’s broken, what’s missing, and where growth is possible."
              },
              {
                title: "02 — CLIENT ACQUISITION STRATEGY",
                steps: [
                  "Design your custom Client Acquisition System based on real data, not assumptions.",
                  "Channel mix: Google Ads, Meta, TikTok, LinkedIn.",
                  "Offer positioning & messaging framework",
                  "Formal structure (pre + post conversion)",
                  "KPI benchmarks for leads, cost & ROI"
                ],
                outcome: "A clear roadmap to acquire clients."
              },
              {
                title: "03 — SYSTEM & TRACKING SETUP",
                steps: [
                  "Build the foundation that makes results scalable and measurable.",
                  "Comprehensively landing pages or funnels",
                  "Advanced tracking (UTM, GA4, Pixel, CRM)",
                  "CRM & lead scoring setup",
                  "At agency level qualification & follow-up"
                ],
                outcome: "A measurable acquisition system."
              },
              {
                title: "04 — LAUNCH & TEST PHASE",
                steps: [
                  "Launch campaigns with controlled testing to find what actually converts.",
                  "Creative, audience & keyword testing",
                  "Cost-per-lead and quality validation",
                  "Formal drop-off analysis",
                  "Sales feedback loop"
                ],
                outcome: "Stable, profitable performance backed by real data."
              },
              {
                title: "05 — OPTIMIZATION & VALIDATION",
                steps: [
                  "We refine only what proves results.",
                  "Eliminate low-quality leads",
                  "Improve conversion & show-up rates",
                  "Optimize cost per result",
                  "Validate benchmarks before scaling"
                ],
                outcome: "Stable, profitable performance—no guesswork."
              },
              {
                title: "06 — SCALE WITH CONFIDENCE",
                steps: [
                  "Once benchmarks are met, we scale aggressively but responsibly.",
                  "Budget scaling without efficiency loss",
                  "Replicate success into new audiences/channels",
                  "Automation upgrades",
                  "Continuous performance monitoring"
                ],
                outcome: "Predictable growth with controlled CAC and strong ROI."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border-l-4 border-blue-600 shadow-sm">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {item.steps.map((s, j) => (
                    <li key={j}>{s}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-500 italic">
                  Outcome: {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

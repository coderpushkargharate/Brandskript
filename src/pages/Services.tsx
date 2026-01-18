// ServicesPage.jsx
import React from "react";

const ServicesPage = () => {
  return (
    <div className="bg-white text-gray-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#0B5CFF] text-white px-6 pt-28 pb-36">
        <div className="max-w-7xl mx-auto">

          {/* Small Label */}
          <p className="dm uppercase text-xs tracking-[0.25em] text-white/70 mb-6">
            Our Digital Marketing Services
          </p>

          {/* Headline */}
          <h1 className="noir text-4xl sm:text-5xl md:text-6xl leading-[1.05] font-semibold max-w-4xl">
            What We Deliver And
            <br />
            How We Drive Growth.
          </h1>

          {/* Divider */}
          <div className="w-14 h-[2px] bg-white/40 mt-8 mb-10" />

          {/* Services Row — Now with clickable links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-6 text-sm text-white/90 dm">
            {[
              { label: "Client Acquisition System", id: "client-acquisition" },
              { label: "Lead Generation", id: "lead-generation" },
              { label: "Meta Ads", id: "meta-ads" },
              { label: "Google Ads", id: "google-ads" },
              { label: "AI Agents", id: "ai-agents" }
            ].map((item, i) => (
              <a
                key={i}
                href={`#${item.id}`}
                className="border-l border-white/20 pl-4 leading-snug hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTIONS ================= */}
      <div className="space-y-36 py-36">

        {/* CLIENT ACQUISITION */}
        <section id="client-acquisition" className="px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
              className="rounded-3xl h-96 w-full object-cover"
              alt=""
            />

            <div>
              <span className="dm text-xs uppercase tracking-widest text-[#0B5CFF]">
                Core System
              </span>

              <h2 className="noir text-4xl mt-4 mb-6">
                Client Acquisition System
              </h2>

              <p className="dm text-lg text-gray-600 leading-relaxed">
                “Client Acquisition System — Our proprietary, performance-driven framework designed to consistently attract, qualify, and convert your Ideal Customer Profile into booked appointments. This system bridges the gap between marketing and sales by combining paid ads, outreach, AI-powered automation, and full-funnel optimization—so you don’t just get leads, you get ready-to-convert clients. This is where predictable growth begins at ROI Edge, and the foundation we use to help our partners scale into sustainable, high-revenue businesses with guaranteed results.”
              </p>
            </div>
          </div>
        </section>

        {/* LEAD GENERATION */}
        <section id="lead-generation" className="bg-gray-900 px-6 py-36 text-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="dm text-xs uppercase tracking-widest text-[#40C65D]">
                Demand Engine
              </span>

              <h2 className="noir text-4xl mt-4 mb-6">
                Advanced Lead Generation
              </h2>

              <p className="dm text-lg text-gray-300 leading-relaxed">
                “Lead Generation — Our precision-driven system attracts high-intent prospects who match your Ideal Customer Profile, not random inquiries. Using data-backed targeting, conversion-focused creatives, and advanced tracking, we deliver qualified leads ready for your sales team. Every campaign is optimized to lower cost per lead, improve lead quality, and drive predictable pipeline growth—without wasted ad spend or guesswork.”
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
              className="rounded-3xl h-96 w-full object-cover"
              alt=""
            />
          </div>
        </section>

        {/* META ADS */}
        <section id="meta-ads" className="px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
              className="rounded-3xl h-96 w-full object-cover"
              alt=""
            />

            <div>
              <span className="dm text-xs uppercase tracking-widest text-[#0B5CFF]">
                Paid Media
              </span>

              <h2 className="noir text-4xl mt-4 mb-6">
                Meta Ads
              </h2>

              <p className="dm text-lg text-gray-600 leading-relaxed">
                Our performance-focused approach to Facebook and Instagram advertising designed to generate qualified leads and booked appointments, not vanity metrics.

                We build and optimize conversion-driven campaigns using precise audience targeting, high-impact creatives, and full-funnel tracking. Every campaign is continuously refined to reduce cost per result, improve lead quality, and maximize ROI—so your ad spend turns into predictable business growth, not wasted impressions.
              </p>
            </div>
          </div>
        </section>

        {/* GOOGLE ADS */}
        <section id="google-ads" className="bg-gray-50 px-6 py-36">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="rounded-3xl h-96 w-full object-cover"
              alt=""
            />

            <div>
              <span className="dm text-xs uppercase tracking-widest text-[#0B5CFF]">
                Intent Capture
              </span>

              <h2 className="noir text-4xl mt-4 mb-6">
                Google Ads
              </h2>

              <p className="dm text-lg text-gray-600 leading-relaxed">
                Our intent-driven advertising system designed to capture demand at the exact moment prospects are actively searching for your solution. We build and optimize high-converting search and performance campaigns using precise keyword strategy, compelling ad copy, and advanced conversion tracking. Every campaign is engineered to reduce cost per conversion, attract high-quality leads, and deliver predictable ROI—so you only pay for traffic that’s ready to convert.
              </p>
            </div>
          </div>
        </section>

        {/* AI AGENTS */}
        <section id="ai-agents" className="px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              className="rounded-3xl h-96 w-full object-cover"
              alt=""
            />

            <div>
              <span className="dm text-xs uppercase tracking-widest text-[#0B5CFF]">
                Automation
              </span>

              <h2 className="noir text-4xl mt-4 mb-6">
                AI Agents
              </h2>

              <p className="dm text-lg text-gray-600 leading-relaxed">
                Intelligent automation systems that qualify, nurture, and follow up with leads automatically, so your sales team speaks only with ready-to-convert prospects. Our AI agents handle lead filtering, multi-touch follow-ups, and engagement across email and WhatsApp—ensuring faster responses, higher show-up rates, and improved conversions. This removes manual workload, reduces leakage, and turns your acquisition process into a scalable, always-on system.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ================= PLAN OF ATTACK ================= */}
      <section className="bg-[#0f1f16] py-32 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            Our Plan Of Attack <br /> For Your Unique Fight
          </h2>

          <p className="text-white/80 max-w-3xl mb-20 text-lg">
            Every business needs a different growth plan. This is how we build one
            that delivers qualified leads, booked appointments, and ROI you can bank on.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "01 — Diagnostic Audit",
                steps: [
                  "ICP clarity",
                  "Market & competitor analysis",
                  "Funnel & tracking review",
                  "Sales process audit"
                ],
                outcome: "Clear visibility on growth opportunities."
              },
              {
                title: "02 — Acquisition Strategy",
                steps: [
                  "Channel mix planning",
                  "Offer & messaging",
                  "Funnel structure",
                  "KPI benchmarks"
                ],
                outcome: "Clear roadmap to acquire clients."
              },
              {
                title: "03 — System Setup",
                steps: [
                  "Landing pages",
                  "Tracking & CRM",
                  "Lead qualification",
                  "Automation setup"
                ],
                outcome: "Fully measurable acquisition system."
              },
              {
                title: "04 — Launch & Test",
                steps: [
                  "Creative testing",
                  "Audience testing",
                  "Lead quality validation",
                  "Sales feedback"
                ],
                outcome: "Stable early performance."
              },
              {
                title: "05 — Optimization",
                steps: [
                  "Improve conversions",
                  "Lower CPL",
                  "Remove waste",
                  "Validate benchmarks"
                ],
                outcome: "Consistent profitable performance."
              },
              {
                title: "06 — Scale",
                steps: [
                  "Budget scaling",
                  "Channel expansion",
                  "Automation upgrades",
                  "Performance monitoring"
                ],
                outcome: "Predictable, controlled growth."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white text-gray-800 rounded-3xl p-10 shadow-xl border border-[#40C65D]/20"
              >
                <h3 className="text-xl font-bold mb-6 text-[#40C65D]">
                  {item.title}
                </h3>

                <ul className="space-y-3 text-gray-600 list-disc pl-5">
                  {item.steps.map((s, j) => (
                    <li key={j}>{s}</li>
                  ))}
                </ul>

                <p className="mt-6 text-sm italic text-gray-500">
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
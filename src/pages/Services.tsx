// ServicesPage.jsx
import React from "react";

const ServicesPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-[#40C65D] to-[#2fae4d] text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="uppercase tracking-widest text-white/80 text-sm font-semibold">
            Our Services
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-5 mb-8 leading-tight">
            What We Deliver <br className="hidden md:block" />
            And How We Drive Growth
          </h1>

          <p className="text-lg md:text-xl max-w-2xl text-white/90 leading-relaxed">
            Performance-driven systems built to generate leads, book appointments,
            and scale revenue with clarity and control.
          </p>
        </div>
      </section>

      {/* ================= SECTION WRAPPER ================= */}
      <div className="space-y-32 py-32">

        {/* ================= CLIENT ACQUISITION SYSTEM ================= */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
              alt="Client Acquisition System"
              className="rounded-3xl h-80 w-full object-cover shadow-xl"
            />

            <div>
              <span className="inline-block mb-4 text-sm font-semibold uppercase text-[#40C65D]">
                Core System
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                Client Acquisition System
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our Proprietary, performance-driven framework designed to consistently
                attract, qualify, and convert your Ideal Customer Profile into booked
                appointments. This system bridges the gap between marketing and sales
                by combining paid ads, outreach, AI-powered automation, and full-funnel
                optimization—so you don’t just get leads, you get ready-to-convert clients.
              </p>
            </div>
          </div>
        </section>

        {/* ================= ADVANCED LEAD GENERATION ================= */}
        <section className="bg-gray-900 px-6 py-32 text-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block mb-4 text-sm font-semibold uppercase text-[#40C65D]">
                Demand Engine
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advance Lead Generation
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                Our precision-driven system attracts high-intent prospects who match
                your Ideal Customer Profile, not random inquiries. Using data-backed
                targeting, conversion-focused creatives, and advanced tracking, we
                deliver qualified leads ready for your sales team.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
              alt="Advanced Lead Generation"
              className="rounded-3xl h-80 w-full object-cover shadow-xl"
            />
          </div>
        </section>

        {/* ================= META ADS ================= */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
              alt="Meta Ads"
              className="rounded-3xl h-80 w-full object-cover shadow-xl"
            />

            <div>
              <span className="inline-block mb-4 text-sm font-semibold uppercase text-[#40C65D]">
                Paid Media
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meta Ads
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our performance-focused approach to Facebook and Instagram advertising
                designed to generate qualified leads and booked appointments, not vanity
                metrics. Every campaign is optimized to maximize ROI and reduce cost per result.
              </p>
            </div>
          </div>
        </section>

        {/* ================= GOOGLE ADS ================= */}
        <section className="bg-gray-50 px-6 py-32">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Google Ads"
              className="rounded-3xl h-80 w-full object-cover shadow-xl"
            />

            <div>
              <span className="inline-block mb-4 text-sm font-semibold uppercase text-[#40C65D]">
                Intent Capture
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Google Ads
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our intent-driven advertising system captures demand exactly when prospects
                are searching for your solution. We focus on keyword precision, conversion
                tracking, and cost efficiency to drive predictable ROI.
              </p>
            </div>
          </div>
        </section>

        {/* ================= AI AGENTS ================= */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="AI Agents"
              className="rounded-3xl h-80 w-full object-cover shadow-xl"
            />

            <div>
              <span className="inline-block mb-4 text-sm font-semibold uppercase text-[#40C65D]">
                Automation
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI Agents
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Intelligent automation systems that qualify, nurture, and follow up with
                leads automatically—ensuring faster responses, higher conversions, and
                scalable growth without manual effort.
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

import React from "react";

const steps = [
  {
    step: 1,
    title: "Strategy & Revenue Mapping",
    label: "Business Model",
    desc:
      "We understand your business model, ideal customers, deal size, and revenue goals. Then we design a client acquisition strategy focused purely on ROI.",
    btn: "Map Now",
    accent: "from-indigo-500 to-blue-500",
  },
  {
    step: 2,
    title: "Funnel & Tracking Setup",
    label: "Tracking System",
    desc:
      "We build high-converting landing pages, funnels, and tracking systems so every lead, cost, and conversion is measurable.",
    btn: "Setup",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    step: 3,
    title: "Traffic & Lead Generation",
    label: "Launch Campaign",
    desc:
      "We launch performance-driven campaigns across Google Ads, Meta Ads, and Outreach channels.",
    btn: "Launch",
    accent: "from-violet-500 to-purple-500",
  },
  {
    step: 4,
    title: "Automation & Nurturing",
    label: "Automate Follow-ups",
    desc:
      "Leads are instantly followed up using automated email, WhatsApp, and CRM workflows.",
    btn: "Automate",
    accent: "from-orange-400 to-amber-500",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Title */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-gray-900 noir-pro text-4xl md:text-5xl font-extrabold tracking-tight">
          How it works
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base dm-sans mt-3 leading-relaxed">
          ROI Edge provides a complete, performance-driven system to grow your
          business with predictable, measurable results — not vanity metrics.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {steps.map((item) => (
          <div
            key={item.step}
            className="relative group rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:shadow-2xl"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-all"></div>

            {/* Header */}
            <div className="relative flex items-center gap-4 mb-6">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold dm-sans bg-gradient-to-br ${item.accent}`}
              >
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 noir-pro">
                {item.title}
              </h3>
            </div>

            {/* Content */}
            <div className="relative">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-800 dm-sans">
                  {item.label}
                </p>
                <button
                  className={`text-sm font-medium dm-sans px-4 py-1 rounded-full border border-gray-300 hover:text-white hover:border-transparent transition bg-white hover:bg-gradient-to-r ${item.accent}`}
                >
                  {item.btn}
                </button>
              </div>

              <p className="text-gray-600 text-sm mt-4 dm-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

        {/* STEP 5 */}
        <div className="md:col-span-2 relative rounded-3xl border border-gray-200 bg-white p-8 hover:shadow-2xl transition-all">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold dm-sans bg-gradient-to-br from-red-500 to-rose-500">
              5
            </div>
            <h3 className="text-xl font-semibold text-gray-900 noir-pro">
              Optimization & Scale
            </h3>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="font-semibold text-gray-800 dm-sans">
              Scale Performance
            </p>
            <button className="text-sm font-medium dm-sans px-5 py-1.5 rounded-full text-white bg-gradient-to-r from-red-500 to-rose-500 hover:opacity-90 transition">
              Optimize
            </button>
          </div>

          <p className="text-gray-600 text-sm mt-5 dm-sans leading-relaxed max-w-3xl">
            We continuously optimize CPR, CAC, and conversions, then scale what
            works.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

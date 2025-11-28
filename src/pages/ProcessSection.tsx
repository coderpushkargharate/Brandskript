import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProcessSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const steps = [
    {
      id: "01",
      title: "Discovery Call & Strategy",
      desc: "We understand your business goals, audience, and offers to build a strong ad strategy for growth.",
      icon: "🧠",
      color: "from-purple-500 to-indigo-500",
      aos: "fade-up",
    },
    {
      id: "02",
      title: "Creative & Campaign Setup",
      desc: "We create high-converting creatives and structure campaigns across Meta, Google, YouTube & TikTok.",
      icon: "🚀",
      color: "from-pink-500 to-orange-500",
      aos: "fade-up",
    },
    {
      id: "03",
      title: "Testing & Optimization",
      desc: "We run multiple A/B tests, adjust targeting, and optimize creatives for maximum conversions.",
      icon: "⚙️",
      color: "from-blue-500 to-teal-500",
      aos: "fade-up",
    },
    {
      id: "04",
      title: "Scale & Deliver Results",
      desc: "Once proven, we scale campaigns responsibly to maximize ROI and predictable growth.",
      icon: "📈",
      color: "from-green-500 to-emerald-500",
      aos: "fade-up",
    },
  ];

  return (
    <section className="bg-gray-50 text-center py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div data-aos="fade-down">
          <h2
            className="text-3xl md:text-4xl font-extrabold leading-snug"
            style={{
              fontFamily: "var(--h2-font-family)",
              color: "var(--h2-color)",
            }}
          >
            Smart Design, Converting Ads & Sales-Focused
            <br />
            Marketing Strategy.
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Because we don't just make ads—we make ads that convert.
          </p>
        </div>

        {/* Subtitle */}
        <div className="mt-16" data-aos="zoom-in">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Process
          </span>
          <h3 className="text-2xl font-bold text-gray-900">
            Our Result-Oriented Workflow
          </h3>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            A proven framework built for fast execution, fast delivery and measurable ROI.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              data-aos={step.aos}
              data-aos-delay={index * 150}
              className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center text-4xl text-white rounded-xl bg-gradient-to-r ${step.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {step.icon}
              </div>

              <h4 className="mt-6 text-lg font-semibold text-gray-900">
                {step.title}
              </h4>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>

              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

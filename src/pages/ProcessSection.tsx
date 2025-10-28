import React from "react";

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery Phase",
      desc: "Creating targeted campaigns designed to attract ideal clients and align perfectly with your business objectives.",
      img: "https://framerusercontent.com/images/jJ6toYSKz9DtEMWJDpteC9pF1HM.svg?width=26&height=26",
    },
    {
      id: "02",
      title: "Strategy & Concepts Development",
      desc: "Creating targeted campaigns designed to attract ideal clients and align perfectly with your business objectives.",
      img: "https://framerusercontent.com/images/AXgyjaoddAArynSnELMK0OyXdTc.svg?width=26&height=26",
    },
    {
      id: "03",
      title: "System Implementation & Testing",
      desc: "Building automated systems, optimizing performance, and reducing ad spend.",
      img: "https://framerusercontent.com/images/7YvpqdgJKVCiaafRYxXpuUlwE.svg?width=26&height=26",
    },
    {
      id: "04",
      title: "Launch & Continuous Optimization",
      desc: "Launching campaigns with ongoing improvements for sustained long-term success.",
      img: "https://framerusercontent.com/images/JQVOSvT8HSfik1as2hcjm0MO3I.svg?width=26&height=26",
    },
  ];

  return (
    <section className="bg-white text-center py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
          Smart Design, Converting Ads, and Sales-
          <br />
          Focused Marketing Strategy.
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Because, we approach things a bit differently around here.
        </p>

        {/* Process Section */}
        <div className="mt-16">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Process
          </span>
          <h3 className="text-2xl font-bold text-gray-900">
            Our Result-Oriented Process
          </h3>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Discover our efficient method for designing compelling advertisements
            that resonate with your objectives and draw in your Ideal Client Profiles (ICP).
          </p>

          {/* Process Steps */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="p-6 bg-gray-50 border rounded-xl shadow-sm hover:shadow-md transition text-left"
              >
                <div className="flex items-center justify-between">
                  <img src={step.img} alt={step.title} className="w-8 h-8" />
                  <p className="text-sm font-semibold text-blue-600">
                    Step {step.id}
                  </p>
                </div>
                <h4 className="mt-4 text-lg font-bold text-gray-900">
                  {step.title}
                </h4>
                <p className="mt-2 text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

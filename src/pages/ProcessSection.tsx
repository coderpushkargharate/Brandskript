import React from "react";

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Submit Your Videos",
      desc: "Submit your videos and receive professionally edited content with same-day turnaround.",
      icon: "🎬",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: "02",
      title: "Choose Your Preferred Style",
      desc: "Select your design from our library of options for the best unlimited video editing service.",
      icon: "🎨",
      color: "from-pink-500 to-orange-500",
    },
    {
      id: "03",
      title: "Just Wait & Watch",
      desc: "Our team of experts will share your video promptly based on your selected plan.",
      icon: "⏱️",
      color: "from-blue-500 to-teal-500",
    },
    {
      id: "04",
      title: "Fixed Pricing",
      desc: "Always pay the same amount with our straightforward pricing and no hidden costs or charges.",
      icon: "💵",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="bg-gray-50 text-center py-20">
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
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
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
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative bg-white p-8 rounded-2xl border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto flex items-center justify-center text-4xl text-white rounded-xl bg-gradient-to-r ${step.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h4 className="mt-6 text-lg font-semibold text-gray-900">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Decorative hover line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

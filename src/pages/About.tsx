import React from "react";
import {
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const About = () => {
  const steps = [
    {
      id: 1,
      icon: <Lightbulb className="w-6 h-6 text-blue-500" />,
      title: "Planning Stage",
      desc: "Initial research and analysis to define project goals and requirements.",
    },
    {
      id: 2,
      icon: <PenTool className="w-6 h-6 text-blue-500" />,
      title: "Design Phase",
      desc: "Creating wireframes and prototypes to visualize the user experience.",
    },
    {
      id: 3,
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      title: "Development Process",
      desc: "Building and coding the solution while ensuring quality and functionality.",
    },
    {
      id: 4,
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      title: "Testing and Launch",
      desc: "Thorough testing before deployment ensures a seamless user experience.",
    },
  ];

  const tools = [
    { name: "Figma", desc: "Collaborative design and prototyping tool online." },
    { name: "Webflow", desc: "Design and develop websites visually with ease." },
    { name: "Shopify", desc: "E-commerce platform for online shopping websites." },
    { name: "Notion", desc: "All-in-one workspace for notes and project tasks." },
    { name: "FrameX", desc: "Interactive prototypes for advanced animations." },
    { name: "Payflow", desc: "Online payment processing platform for business." },
  ];

  const plans = [
    {
      title: "Qualified Lead Gen",
      price: "₹24,995/m",
      discount: "15% Off",
      features: [
        "Limitless design requests.",
        "One request at a time",
        "Average 48 hours delivery",
        "Unlimited brands",
        "Easy credit-card payments",
        "Pause or cancel anytime",
      ],
    },
    {
      title: "Lead Gen. Service (GR)",
      price: "₹84,995/m",
      discount: "15% Off",
      popular: true,
      features: [
        "Limitless design requests.",
        "One request at a time",
        "Average 48 hours delivery",
        "Unlimited brands",
        "Easy credit-card payments",
        "Pause or cancel anytime",
      ],
    },
    {
      title: "Lead Gen. System (GR)",
      price: "₹174,995/m",
      discount: "15% Off",
      features: [
        "Limitless design requests.",
        "One request at a time",
        "Average 48 hours delivery",
        "Unlimited brands",
        "Easy credit-card payments",
        "Pause or cancel anytime",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ================== HERO SECTION ================== */}
      <section className="text-center py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-100 rounded-full blur-3xl opacity-60"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
            Leads That Matter. Growth <br /> That Lasts.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Fueled by insights and driven by creativity, we blend data,
            psychology, and design to create campaigns that don’t just grab
            attention, but build lasting impact. In a world that never stops
            scrolling, we make sure your brand doesn’t just get noticed — it
            grows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium">
              🚀 Craft Your Growth Story
            </button>
            <button className="border border-blue-600 text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-full font-medium">
              🚀 Let’s Build Growth Together
            </button>
          </div>
        </div>
      </section>

      {/* ================== MARKETING SECTIONS ================== */}
      <section className="py-20 px-6 md:px-16 bg-white text-center">
        <span className="bg-blue-100 text-blue-700 px-5 py-1 rounded-full text-sm font-medium border border-blue-200">
          Marketing
        </span>
        <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }} className="text-4xl font-bold mt-6 mb-8">Growth, Not Traffic</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-16">
          We don’t just market — we engineer strategies that pull the right
          audience, build trust, and turn interest into revenue.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Pipeline Starter",
              desc: "Perfect for businesses starting out — we deliver consistent, quality leads to get momentum rolling.",
            },
            {
              title: "Only Buyers",
              desc: "We filter the noise, connecting you only with prospects who are ready to convert.",
            },
            {
              title: "Leads on Tap",
              desc: "An automated system that generates, nurtures, and hands you sales-ready leads — on repeat.",
            },
            {
              title: "Custom Playbooks",
              desc: "From influencer marketing to niche-specific campaigns, we build solutions tailored for your business.",
            },
            {
              title: "Code That Converts",
              desc: "From websites to systems, we create digital experiences that don’t just work — they work for your growth.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-blue-50 hover:bg-blue-100 transition border border-blue-100 rounded-2xl p-6 shadow-sm text-left"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================== WHY THIS WORKS ================== */}
      <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 text-center">
        <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }} className="text-4xl font-bold text-gray-900 mb-8">
          Why This Works
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          We don’t guess. We engineer. Our team blends expertise, data, and
          creativity to build systems that actually drive results.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {[
            {
              title: "Buyer Psychology",
              desc: "We understand what makes people click, trust, and buy — turning browsers into buyers.",
            },
            {
              title: "Sales Funnel Design",
              desc: "From awareness to action, we craft seamless funnels that guide prospects straight to conversion.",
            },
            {
              title: "Conversion Copywriting",
              desc: "Every word counts. Our copy is designed to grab attention, build trust, and close deals.",
            },
            {
              title: "Automation Systems",
              desc: "We build smart systems that nurture leads, follow up, and convert — even while you sleep.",
            },
            {
              title: "Constant Optimization",
              desc: "We don’t stop at launch. We tweak, test, and optimize until your ROI is unbeatable.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================== FOUNDER MESSAGE ================== */}
      <section className="py-24 px-6 md:px-16 bg-white text-center">
        <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }} className="text-4xl font-bold text-gray-900 mb-6">
          Founder’s Message
        </h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed mb-10">
          “We’re a results-obsessed team that refuses to settle for ordinary.
          Fueled by strategy, creativity, and relentless testing, we empower
          brands to flourish—not just compete. Every campaign we launch is built
          on data, not guesswork. Every design isn’t just eye-catching—it’s
          engineered to convert. And every system we build works while you
          sleep. This isn’t marketing for the sake of marketing. It’s about
          crafting brands that are truly unstoppable.”
        </p>
        <div className="text-blue-600 font-semibold text-lg">
          — Shubham Channagire, Founder
        </div>
      </section>

      {/* ================== VISION & MISSION ================== */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6 md:px-16 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }} className="text-4xl font-bold text-gray-900 mb-10">
            Vision & Mission
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                🌍 Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                “To build a world where brands don’t just exist — they dominate,
                inspire, and create lasting impact.” We see a future where every
                brand we touch becomes unstoppable: sharper strategies, smarter
                systems, and designs that don’t just look good — they sell.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                🎯 Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                “To engineer growth with precision, creativity, and systems that
                scale.” We deliver strategies laser-focused on the right
                audience, designs that convert, and automated systems that run
                on autopilot — so our clients can focus on scaling revenue, not
                chasing it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================== PROCESS ================== */}
      <section className="py-24 bg-white text-center">
        <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }} className="text-4xl font-bold text-gray-900 mb-8">
          Our Proven Process
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
          We follow a structured process ensuring transparency, collaboration,
          and quality at every stage.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg shadow-sm">
                  {step.icon}
                </div>
                <span className="text-sm font-medium text-blue-600">
                  Step {step.id}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================== TOOLS ================== */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white text-center">
        <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }} className="text-4xl font-bold text-gray-900 mb-8">
          Tools We Utilize
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          Discover the advanced tools and technologies we leverage to create
          cutting-edge websites and campaigns.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {tool.name}
              </h3>
              <p className="text-gray-600 text-sm">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================== PRICING ================== */}
      <section className="py-24 bg-white text-center">
        <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }} className="text-4xl font-bold text-gray-900 mb-8">
          Transparent Pricing Options
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
          Explore our competitive pricing plans designed to meet diverse
          business needs and budgets.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border border-blue-100 shadow-md hover:shadow-lg transition relative ${
                plan.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 rounded-t-2xl text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-8 pt-14 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {plan.title}
                </h3>
                <div className="text-3xl font-bold mt-3 text-blue-600">
                  {plan.price}
                </div>
                <div className="inline-block mt-2 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {plan.discount}
                </div>
                <p className="text-gray-600 text-sm mt-2 mb-6">
                  Pause or cancel anytime.
                </p>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
                  Get Started
                </button>
                <button className="w-full border border-blue-200 hover:bg-blue-50 text-blue-700 py-3 rounded-lg font-medium mt-3 transition">
                  Book a Call →
                </button>

                <div className="text-left mt-8">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What’s included:
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trial Package */}
        <div className="max-w-5xl mx-auto mt-20 border border-blue-100 bg-blue-50 rounded-2xl shadow-sm p-10 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Qualified L.G Trial Package
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore our services confidently with this trial package tailored
            for assessing our agency’s quality and capabilities.
          </p>
          <div className="text-3xl font-bold text-blue-600 mb-2">
            ₹19,995/m
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Pause or cancel anytime.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
            Book A FREE Consultation Call
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;

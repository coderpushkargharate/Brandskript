import React from "react";
import {
  Users,
  Award,
  Target,
  CheckCircle,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
  User,
} from "lucide-react";

const About = () => {

   const plans = [
    {
      title: "Qualified Lead Gen",
      price: "₹24,995/m",
      discount: "15% Off",
      features: [
        "Enjoy limitless design requests.",
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
        "Enjoy limitless design requests.",
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
        "Enjoy limitless design requests.",
        "One request at a time",
        "Average 48 hours delivery",
        "Unlimited brands",
        "Easy credit-card payments",
        "Pause or cancel anytime",
      ],
    },
  ];

  const steps = [
    {
      id: 1,
      icon: <Lightbulb className="w-6 h-6 text-blue-400" />,
      title: "Planning Stage",
      desc: "Initial research and analysis to define project goals and requirements.",
    },
    {
      id: 2,
      icon: <PenTool className="w-6 h-6 text-blue-400" />,
      title: "Design Phase",
      desc: "Creating wireframes and prototypes to visualize the user experience.",
    },
    {
      id: 3,
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      title: "Development Process",
      desc: "Building and coding the solution while ensuring quality and functionality.",
    },
    {
      id: 4,
      icon: <Rocket className="w-6 h-6 text-blue-400" />,
      title: "Testing and Launch",
      desc: "Thorough testing before deployment ensures a seamless user experience.",
    },
  ];

  const tools = [
    { name: "Figurative", desc: "Collaborative design and prototyping tool online." },
    { name: "FrameX", desc: "Interactive prototypes for advanced animations website." },
    { name: "Shopify", desc: "E-commerce platform for online shopping websites." },
    { name: "Ideese", desc: "All-in-one workspace for notes and project tasks." },
    { name: "Webflow", desc: "Design and develop websites visually with ease." },
    { name: "Payflow", desc: "Online payment processing platform for business." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <section
          style={{
            position: "relative",
            textAlign: "center",
            padding: "80px 20px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "800px",
              height: "800px",
              borderRadius: "50%",
              filter: "blur(100px)",
              background: "#dbeafe",
              opacity: "0.6",
              zIndex: 0,
            }}
          ></div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <span
              style={{
                display: "inline-block",
                background: "#e0efff",
                color: "#2563eb",
                padding: "6px 20px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 500,
                marginBottom: "16px",
                border: "1px solid #bfdbfe",
              }}
            >
              About
            </span>

            <h2
              style={{
                fontSize: "42px",
                fontWeight: 800,
                marginBottom: "16px",
                color: "#1e293b",
              }}
            >
              Our Customers
            </h2>

            <p
              style={{
                color: "#475569",
                fontSize: "18px",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Browse through our portfolio showcasing diverse, innovative web design
              customer and client successes.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Commitment to Excellence and Innovation in Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to delivering innovative digital solutions, focusing on quality, creativity, and client satisfaction to drive business success.
          </p>
        </section>

        {/* Process Section */}
        <section className="relative bg-gradient-to-b from-white via-blue-50 to-white text-center py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-100 blur-3xl opacity-60"></div>
          </div>

          <div className="relative z-10 mb-16">
            <span className="bg-blue-100 text-blue-700 px-6 py-1 rounded-full text-sm font-medium border border-blue-200">
              Process
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-gray-900">
              Our Proven Development Process
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-4">
              We follow a structured process, ensuring transparency, collaboration,
              and quality at every stage of the project.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mx-5">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative bg-white border border-blue-100 rounded-2xl p-6 md:p-8 text-left shadow-md hover:shadow-lg transition"
              >
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-medium px-4 py-1 rounded-full border border-blue-200">
                  Step {String(step.id).padStart(2, "0")}
                </div>

                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50">
                  {step.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{step.desc}</p>

                {step.id === 2 && (
                  <button className="absolute bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition">
                    Contact Us
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Who We Are Section */}
        <div className="bg-gradient-to-b from-white via-blue-50 to-white px-6 md:px-16 py-16 space-y-24">
          <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-blue-100 rounded-2xl h-80 flex items-center justify-center text-blue-700 font-semibold">
             <img src="https://framerusercontent.com/images/AtREdU0e7QQi2G5w4osNNCIYvA.jpg" alt="" />
            </div>

            <div>
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium border border-blue-200">
                About Us
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
                Who We Are and What We Stand For
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
                We are a passionate team dedicated to delivering innovative digital
                solutions that empower businesses to succeed. Our focus is on
                creativity, quality, and client satisfaction.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full flex items-center gap-2">
                  Contact Us <ArrowRight size={16} />
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-full flex items-center gap-2">
                  View Projects <ArrowRight size={16} />
                </button>
              </div>

            <div className="flex items-center justify-between  border border-[#0A0F3C] rounded-2xl px-4 py-3 max-w-md shadow-sm">
  {/* Left Section - Profile */}
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center overflow-hidden">
      <img
        src="https://framerusercontent.com/images/6vwvEXYU4xGIl5vfLjnvLYP9NXo.png"
        alt="Shubham Channagire"
        className="w-12 h-12 object-cover"
      />
    </div>
    <div>
      <p className="font-semibold text-dark leading-tight">
        Shubham Channagire
      </p>
      <p className="text-sm text-gray-400">Founder</p>
    </div>
  </div>

  {/* Right Section - Twitter/X icon */}
  <div className="w-10 h-10 flex items-center justify-center  rounded-xl  hover:bg-[#0A0F3C] transition">
    <img
      src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
      alt="X Logo"
      className="w-5 h-5"
    />
  </div>
</div>

            </div>
          </section>

          {/* Tools Section */}
          <section className="text-center">
            <div className="mb-12">
              <span className="bg-blue-100 text-blue-700 px-5 py-1 rounded-full text-sm font-medium border border-blue-200">
                Tools
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-gray-900">
                Tools We Utilize for Excellence
              </h2>

              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                Discover the advanced tools and technologies we leverage to create
                cutting-edge websites.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white border border-blue-100 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {tool.name}
                    </h3>
                    <ArrowRight size={16} className="text-blue-600" />
                  </div>
                  <p className="text-gray-600 text-sm">{tool.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

      <div className="bg-gradient-to-b from-white via-blue-50 to-white text-gray-800 py-20 px-6 md:px-12 lg:px-24">
      {/* ================== HEADER ================== */}
      <div className="text-center mb-16">
        <span className="bg-blue-100 text-blue-700 px-5 py-1 rounded-full text-sm font-medium border border-blue-200">
          Pricing
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
          Transparent Pricing Options
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg">
          Explore our competitive pricing plans designed to meet diverse
          business needs and budgets.
        </p>
      </div>

      {/* ================== PRICING CARDS ================== */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl border border-blue-100 shadow-md hover:shadow-lg transition bg-white relative ${
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
              <div className="text-3xl md:text-4xl font-bold mt-3 text-blue-600">
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
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================== TRIAL PACKAGE ================== */}
      <div className="max-w-6xl mx-auto mt-20 border border-blue-100 bg-white rounded-2xl shadow-md p-10 text-center">
        <div className="text-4xl font-bold text-gray-900 mb-2">
          Qualified L.G Trial Package
        </div>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Explore our services confidently with this trial package tailored for
          assessing our agency’s quality and capabilities.
        </p>
        <div className="text-3xl font-bold text-blue-600 mb-2">₹19,995/m</div>
        <p className="text-gray-500 text-sm mb-6">Pause or cancel anytime.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
          Book A FREE Consultation Call
        </button>
      </div>
    </div>

      </div>
    </div>
  );
};

export default About;

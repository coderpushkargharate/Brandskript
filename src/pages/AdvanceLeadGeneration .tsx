import React from "react";
import { Star, Play, CheckCircle, ChevronDown } from "lucide-react";

const AdvanceLeadGeneration = () => {
  return (
    <div className="bg-[#0a0f1c] text-white font-sans">
      {/* HERO SECTION */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Lead Generation <span className="text-blue-500">Services</span>
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
          Skyrocket your business growth with our proven lead generation
          solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            "SEO",
            "Google Ads",
            "LinkedIn Ads",
            "Email Marketing",
            "Remarketing",
            "Content Marketing",
          ].map((btn, i) => (
            <button
              key={i}
              className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition"
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Reviews */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400 w-5 h-5" />
          ))}
          <p className="ml-2 text-gray-300">4.9/5 from 700+ Customers</p>
        </div>

        {/* Logos */}
        <div className="flex justify-center mt-6 gap-6 flex-wrap">
          {["shopify", "meta", "google", "linkedin", "hubspot"].map(
            (logo, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-white/10 rounded-lg text-sm"
              >
                {logo.toUpperCase()}
              </div>
            )
          )}
        </div>
      </section>

      {/* VIDEO INTRO */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="bg-white/10 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative">
            <img
              src="https://framerusercontent.com/images/wK4E80TjbV0jJFGY1B4doVSx1U.png"
              alt="Video thumbnail"
              className="w-full"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white text-blue-600 p-4 rounded-full shadow-lg">
                <Play className="w-8 h-8" />
              </span>
            </button>
          </div>
        </div>

        {/* 3 Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: "More Reach",
              desc: "Expand your brand presence and get discovered by more customers.",
            },
            {
              title: "More Leads",
              desc: "Attract high-quality leads ready to convert.",
            },
            {
              title: "More Growth",
              desc: "Drive consistent revenue growth and customer loyalty.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white/10 rounded-xl text-center hover:bg-white/20 transition"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-700 to-indigo-800">
        <h2 className="text-3xl md:text-4xl font-bold">
          Maximize Your Leads and Drive Business Growth Instantly
        </h2>
        <p className="mt-3 text-gray-200">
          Generate qualified leads, boost conversions, and achieve
          sales-driven success.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100">
          Get Started Today
        </button>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Design Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Research",
            "Plan",
            "Build",
            "Launch",
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition"
            >
              <h3 className="font-semibold text-lg">{step}</h3>
              <p className="mt-2 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl font-bold mb-10">
          Unmatched Expertise Guaranteed
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Meta Ads",
            "Google Ads",
            "LinkedIn Ads",
            "Email Marketing",
            "Remarketing",
            "Inbound Leads",
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition"
            >
              <h3 className="font-semibold text-lg">{service}</h3>
              <p className="mt-2 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="text-center py-16 bg-white/5">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold">150+</h3>
            <p className="text-gray-300">Clients Served</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">175+</h3>
            <p className="text-gray-300">Successful Campaigns</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">25+</h3>
            <p className="text-gray-300">Industries Covered</p>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIAL */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <blockquote className="text-lg italic text-gray-300">
          "This project provided measurable results for our scalable
          organization. They delivered outstanding support, campaign success,
          and generated quality leads. Highly recommended!"
        </blockquote>
        <p className="mt-4 font-semibold">– Successfull Client</p>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            "What are lead generation services?",
            "How long does it take to see results?",
            "Which platforms do you cover?",
            "Do you provide reporting?",
            "What is the cost of services?",
          ].map((q, i) => (
            <div
              key={i}
              className="p-4 bg-white/10 rounded-lg flex items-center justify-between cursor-pointer hover:bg-white/20 transition"
            >
              <span>{q}</span>
              <ChevronDown />
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-700 to-indigo-800">
        <h2 className="text-3xl md:text-4xl font-bold">
          Unlock Your Business Potential Through Lead Generation
        </h2>
        <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100">
          Let’s Get Started
        </button>
      </section>
    </div>
  );
};

export default AdvanceLeadGeneration;

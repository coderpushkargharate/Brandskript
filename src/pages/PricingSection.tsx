import React from "react";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <div className="w-full bg-white text-[#1a1a1a]">

      {/* HERO */}
      <section className="bg-[#00b074] text-white py-16 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-snug">
          Join thousands of contractors<br />
          using AI to run jobs faster and<br />
          win more work
        </h2>
        <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold">
          Start free trial →
        </button>
        <p className="text-sm mt-2 opacity-90">Start your 7-day free trial today.</p>
      </section>

      {/* PRICING BOX */}
      <section className="py-16 px-4 flex justify-center">
        <div className="bg-white shadow-xl rounded-xl p-8 max-w-xl w-full">
          <h3 className="font-semibold text-lg mb-4 text-center">
            Trusted by 1000s of contractors saving 20 hours per week with AI.
          </h3>

          <ul className="space-y-3 mb-6">
            {[
              "Generate estimates with AI",
              "2 seats included",
              "Generate proposals with AI",
              "Send invoices & get digital payments",
              "Request signatures, send attachments",
              "Manage clients in a CRM",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="text-[#00b074]" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="border rounded-lg p-5 text-center">
            <p className="font-semibold text-2xl">$249/mo</p>
            <p className="text-sm text-gray-500">Monthly</p>
            <button className="mt-4 w-full bg-[#00b074] text-white py-3 rounded-full font-semibold">
              Start free trial →
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES TABLE */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-center text-xl font-bold mb-10">
          Check Out The Features
        </h2>

        {/* Category List */}
        <div className="bg-white rounded-xl shadow p-8">
          {[
            {
              title: "AI Estimating & Agents",
              items: [
                "Understanding requests with AI",
                "Review estimates with AI",
                "Learning from AI summaries",
              ],
            },
            {
              title: "Payment Processing",
              items: [
                "Credit Card Fees – 2.9%",
                "ACH Fees – Free",
                "Processing time (Credit Card) – Instant",
                "Processing time (ACH) – 1-7 days",
              ],
            },
            {
              title: "AI-powered Business Management",
              items: [
                "Multi-user access (3 users included)",
                "Generate proposals with AI",
                "CRM",
                "Track client activity",
                "Contracts",
                "Digital signatures",
                "Progress payments",
                "Invoicing",
              ],
            },
            {
              title: "Expert Support",
              items: [
                "Email and live chat",
                "Access to support when you like",
                "Book a call with our team",
                "Request new features",
              ],
            },
            {
              title: "Web & Mobile Access",
              items: ["Desktop web app", "iOS app", "Android app"],
            },
          ].map((cat, index) => (
            <div className="mb-8" key={index}>
              <h3 className="font-semibold text-lg mb-3">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((i, ix) => (
                  <li key={ix} className="flex items-center gap-3">
                    <Check className="text-[#00b074]" size={20} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* STACKS UP */}
      <section className="py-20 bg-[#f5f5f5] text-center px-4">
        <h2 className="text-2xl font-bold mb-4">
          See How Handoff Stacks Up On Fees
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-6">
          Compare card and ACH transaction fees across top platforms and
          discover why Handoff helps you keep more of what you earn.
        </p>
        <button className="bg-[#00b074] text-white px-6 py-3 rounded-full font-semibold">
          Learn more →
        </button>

        <img
          src="https://dummyimage.com/700x300/cccccc/000"
          alt="Comparison Chart"
          className="mx-auto mt-10 rounded-xl"
        />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4">
        <h2 className="text-center text-xl font-bold mb-10">
          Contractors love Handoff
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="bg-white p-6 rounded-xl shadow"
            >
              <p className="text-gray-700">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam venenatis justo justo.”
              </p>
              <p className="mt-4 font-semibold">John Doe</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-center text-xl font-bold mb-10">
          Frequently Asked Questions
        </h2>

        {[
          "Where does your cost data come from?",
          "Can your pricing be localized to my area?",
          "Does this work for my type of business?",
          "Can I cancel at any time?",
          "When will you have a certain feature?",
          "Do you have an online community?",
          "Do you have an affiliate program?",
          "Do you offer financing options?",
          "Does your AI read images or drawings?",
        ].map((q, i) => (
          <details
            key={i}
            className="border-b py-4 cursor-pointer"
          >
            <summary className="flex justify-between items-center">
              {q} <span>+</span>
            </summary>
          </details>
        ))}
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 text-center">
        <h2 className="text-xl font-bold mb-3">
          Boost your business with Handoff
        </h2>
        <p className="text-gray-600">
          Start saving more by managing work with Handoff.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <img
            src="https://dummyimage.com/150x45/000/fff"
            alt="Google Play"
            className="h-10"
          />
          <img
            src="https://dummyimage.com/150x45/000/fff"
            alt="App Store"
            className="h-10"
          />
        </div>
      </section>

    </div>
  );
}

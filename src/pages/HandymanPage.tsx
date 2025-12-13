import React, { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function HandymanPage() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  const faqs = [
    "Where does your cost data come from?",
    "Can your pricing be localized to my area?",
    "Does this work for my type of business?",
    "Can I cancel at any time?",
    "When will you have a certain feature that I need?",
    "Do you have an online community for customers?",
    "Do you have an affiliate or ambassador program?",
    "Do you offer homeowner financing options?",
    "Does your AI read my drawings, photos, and other files?",
  ];
useEffect(() => {
  window.scrollTo(0, 0); // 🔥 Page opens from top
}, []);

  return (
    <div className="w-full font-sans bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-6 p-6 md:p-12 bg-green-500 rounded-3xl max-w-7xl mx-auto mt-6">
        <div className="text-white p-4">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Become the best paid handyman in your area
          </h1>
          <p className="mb-6 opacity-90">
            Handoff is designed to meet the unique needs of handymen helping you streamline your workflow, increase profitability, and manage projects with ease.
          </p>
          <button className="bg-white text-green-600 font-semibold px-5 py-2 rounded-xl shadow">
            Start an estimate
          </button>
          <p className="mt-2 text-sm opacity-90">7-day free trial</p>
        </div>

        <div className="grid grid-cols-2 gap-3 rounded-xl overflow-hidden">
          <img src="https://picsum.photos/500/300" className="rounded-xl" />
          <img src="https://picsum.photos/501/300" className="rounded-xl" />
          <img src="https://picsum.photos/502/300" className="rounded-xl" />
          <img src="https://picsum.photos/503/300" className="rounded-xl" />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="p-8 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Key benefits for handymen</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Scale your contracting business with AI",
            "Win more projects on the spot",
            "Be confident in your numbers",
            "Grow your revenue and profit",
          ].map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 border hover:shadow-lg transition"
            >
              <p className="font-semibold text-lg">{b}</p>
              <p className="text-sm mt-1 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto p-8">
        <div className="rounded-xl overflow-hidden shadow relative">
          <img src="https://picsum.photos/600/400" className="w-full" />
          <button className="absolute inset-0 m-auto bg-white/80 w-16 h-16 rounded-full grid place-content-center text-black text-xl font-bold">
            ▶
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-2">
            See why Michael Galante finds Handoff to be “revolutionary” for his business.
          </h3>
          <p className="text-gray-600 mb-4">
            After signing up for Handoff, Michael discovered that our product is so powerful that it's impossible to go back to running a contracting business without our AI.
          </p>
          <div className="flex items-center gap-3 mt-3">
            <img src="https://picsum.photos/50" className="rounded-full w-12 h-12" />
            <div>
              <p className="font-semibold">Michael Galante</p>
              <p className="text-sm text-gray-500">Highland Services • Rochester, NY</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES + INVOICE */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 p-8 gap-10">
        <div>
          {[
            "AI Estimates",
            "Centralized CRM",
            "AI Proposals",
            "Invoicing",
          ].map((f, i) => (
            <p key={i} className="py-3 border-b font-semibold cursor-pointer">
              {f}
            </p>
          ))}
          <button className="mt-4 bg-green-500 text-white px-5 py-2 rounded-xl shadow">
            Learn more
          </button>
        </div>

        <div className="border rounded-2xl shadow p-6 bg-white">
          <h3 className="font-bold text-xl mb-4">Invoice</h3>
          <p className="text-3xl font-bold">$5,000.00</p>
          <p className="text-gray-500 text-sm mb-4">Deposit</p>
          <button className="mt-4 bg-gray-100 px-4 py-2 rounded-lg w-full text-left font-medium">
            Select Payment Method
          </button>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="max-w-6xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold mb-6">Handyman community</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Ask questions, connect with contractors, and join our Facebook community.
        </p>
        <button className="bg-green-500 text-white px-5 py-2 rounded-xl shadow mb-6">
          Join community
        </button>

        <div className="flex justify-center gap-4">
          {[1, 2, 3, 4].map((n) => (
            <img key={n} src={`https://picsum.photos/10${n}`} className="w-24 h-24 rounded-xl object-cover" />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        {faqs.map((q, i) => (
          <div key={i} className="border-b py-4 cursor-pointer" onClick={() => toggleFAQ(i)}>
            <div className="flex justify-between items-center">
              <p className="font-semibold">{q}</p>
              {openFAQ === i ? <Minus size={20} /> : <Plus size={20} />}
            </div>
            {openFAQ === i && (
              <p className="text-gray-600 mt-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            )}
          </div>
        ))}
      </section>

      {/* RATINGS */}
      <section className="max-w-5xl mx-auto p-8 text-center">
        <h2 className="text-xl font-bold mb-6">Highly rated by 1000s of contractors</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Capterra", "App Store", "Google Play", "G"].map((p, i) => (
            <div key={i} className="bg-white border shadow px-6 py-4 rounded-xl">
              <p className="text-yellow-400 text-xl">★★★★★</p>
              <p className="mt-1 text-sm text-gray-600">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-500 p-12 text-center text-white rounded-t-3xl mt-10">
        <h2 className="text-3xl font-bold mb-4">Boost your business with Handoff</h2>
        <p className="opacity-90 mb-6">Start earning more revenue right away with Handoff.</p>
        <div className="flex justify-center gap-4">
          <img src="https://via.placeholder.com/120x40" className="rounded" />
          <img src="https://via.placeholder.com/120x40" className="rounded" />
        </div>
      </section>
    </div>
  );
}

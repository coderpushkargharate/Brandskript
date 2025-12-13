import React, { useEffect, useState } from "react";

export default function FixAndFlipPage() {
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
    <div className="w-full font-sans text-gray-900">
      {/* HERO SECTION */}
      <section className="w-full bg-white py-14 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="bg-green-600 rounded-3xl p-10 text-white">
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">FIX AND FLIP</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              A shortcut to growing your real estate empire
            </h1>
            <p className="mt-4 opacity-90">
              Leverage AI-driven estimates to swiftly assess and execute profitable fix and flip projects.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-green-600 rounded-full font-semibold shadow">
              Start an estimate
            </button>
            <p className="text-sm mt-2 opacity-80">7-day free trial</p>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-xl" src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1c5516346f3336dec4_fix%20and%20flip_1.webp" />
            <img className="rounded-xl" src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1cf086b776db91dc2d_fix%20and%20flip_2.webp" />
            <img className="rounded-xl" src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1c6f5e1c29d54caff3_fix%20and%20flip_3.webp" />
            <img className="rounded-xl" src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1cef39f53a4f040c76_fix%20and%20flip_4.webp" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-green-50 py-16 px-6 lg:px-20">
        <h2 className="text-center text-3xl font-bold mb-10">Key benefits for for Fix & Flip Investors</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {[{
            title: "Scale your real estate business with AI",
            desc: "Grow your company rapidly without adding more headcount.",
          },{
            title: "Impress your real estate lenders",
            desc: "Give your lender a construction budget that inspires confidence.",
          },{
            title: "Get a handle on contractor bids",
            desc: "Easily validate what your contractors are charging you.",
          },{
            title: "Grow your portfolio and profit",
            desc: "Make more money and decrease your risk at the same time.",
          }].map((b,i)=>(
            <div key={i} className="bg-white rounded-xl shadow p-6 border">
              <h3 className="font-bold text-lg">{b.title}</h3>
              <p className="mt-2 text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img className="rounded-2xl" src="https://cdn.prod.website-files.com/6650cddf762ba9b692753dc0/667b0bf0516a6deffb5daad7_video_EJ%20Elliot.webp" />
            <button className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full shadow flex items-center justify-center text-red-500 text-3xl">▶</button>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Learn how EJ Elliot made $118,000 in his first month using Handoff.</h3>
            <p className="mt-4 text-gray-600">
              Handoff delivered a detailed estimate for a down-to-the-studs high-end remodel that enabled EJ to go from site visit to a $118,000 winning bid in under 24 hours.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img className="w-12 h-12 rounded-full" src="https://i.postimg.cc/8cGJT2L9/avatar1.jpg" />
              <div>
                <p className="font-semibold">EJ Elliot</p>
                <p className="text-gray-500 text-sm">San Antonio, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI FEATURES */}
      <section className="py-20 px-6 lg:px-20">
        <h2 className="text-center text-3xl font-bold mb-12">Making remodeling businesses run smoothly with AI</h2>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="space-y-6 text-lg font-semibold">
              <p>AI Estimates</p>
              <p>Centralized CRM</p>
              <p>AI Proposals</p>
              <p>Invoicing</p>
            </div>
            <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow">
              Learn more
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 border">
            <h3 className="text-xl font-bold">New estimate</h3>
            <p className="mt-4 text-gray-600 text-sm">
              I need an estimate for a 100 square foot master bathroom remodel that involves replacing the bathtub and shower surround...
            </p>
            <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full">
              Apply
            </button>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="bg-green-50 py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Fix & flip community</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions about Handoff or need general business advice? Join our engaging Facebook community.
          </p>
          <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow">
            Join community
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-20">
        <h2 className="text-center text-3xl font-bold mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto divide-y">
          {faqs.map((q,i)=>(
            <div key={i} className="py-4 cursor-pointer" onClick={()=>toggleFAQ(i)}>
              <div className="flex justify-between items-center text-lg font-medium">
                {q}
                <span>{openFAQ===i ? "-" : "+"}</span>
              </div>
              {openFAQ===i && (
                <p className="mt-3 text-gray-600 text-sm">
                  This is placeholder answer text. Replace with real FAQ content.
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-green-600 text-white rounded-full">Start free trial</button>
        </div>
      </section>

      {/* RATINGS */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Highly rated by 1000s of contractors</h2>
        <div className="flex justify-center gap-8 text-xl">
          <span>⭐⭐⭐⭐⭐</span>
          <span>⭐⭐⭐⭐⭐</span>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
        <div className="flex justify-center gap-6 mt-6 opacity-80">
          <p>Capterra</p>
          <p>App Store</p>
          <p>Google Play</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-50 py-14 text-center">
        <h2 className="text-3xl font-bold">Boost your business with Handoff</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Start earning more revenue right away without spending a single penny upfront.
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <button className="px-6 py-3	bg-black text-white rounded-xl">Google Play</button>
          <button className="px-6 py-3	bg-black text-white rounded-xl">App Store</button>
        </div>
      </section>
    </div>
  );
}

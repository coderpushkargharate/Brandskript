import React, { useEffect, useState } from "react";

// Single-file React + Tailwind component that reproduces the remodeling page layout from the provided image.
// Usage: drop this file into a React app that has Tailwind CSS configured (create-react-app or Vite + Tailwind).
// Exported default component: RemodelingPage

const FeatureCard = ({ title, desc, icon }) => (
  <div className="bg-white rounded-xl shadow-md p-5 flex items-start gap-4">
    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </div>
  </div>
);

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left py-4 flex items-center justify-between"
      >
        <span className="font-medium">{q}</span>
        <span className="text-2xl text-gray-400">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="pb-4 text-sm text-gray-600">{a}</p>}
    </div>
  );
};

export default function RemodelingPage() {
  useEffect(() => {
  window.scrollTo(0, 0); // 🔥 Page opens from top
}, []);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto p-6">
        {/* HERO */}
        <section className="grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="bg-emerald-600 text-white rounded-2xl p-10 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-emerald-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">REMODELER</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">Scale your remodeling business profitably</h1>
              <p className="mt-4 text-gray-100 max-w-xl">Handoff is designed to meet the unique needs of remodelers, helping you streamline your workflow, increase profitability, and manage projects with ease. That’s a fancy way of saying that you can grow really fast without adding more headcount.</p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button className="bg-white text-emerald-700 font-semibold px-4 py-2 rounded-full shadow">Start an estimate</button>
              <span className="text-sm text-emerald-100">7‑day free trial</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 grid grid-cols-2 gap-3">
            <img src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/66750336d42a56a26525cb8f_img_grid_1.webp" alt="kitchen" className="col-span-2 rounded-xl object-cover h-48 w-full" />
            {/* In the original image there's a mosaic of images; here we show the large image and two small ones to the right */}
            <div className="rounded-xl overflow-hidden">
              <img src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/667503361d2969cf1d6ed55c_img_grid_2.webp" alt="small1" className="object-cover h-full w-full" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/667503363c8fdfc828ff37fb_img_grid_4.webp" alt="small2" className="object-cover h-full w-full" />
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mt-10 bg-emerald-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-center">Key benefits for remodelers</h3>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <FeatureCard
              icon={"🤖"}
              title={"Scale your contracting business with AI"}
              desc={"Grow your company rapidly without adding more headcount."}
            />
            <FeatureCard
              icon={"💸"}
              title={"Win more projects on the spot"}
              desc={"Give your clients a professional proposal without leaving their house."}
            />
            <FeatureCard
              icon={"📊"}
              title={"Be confident in your numbers"}
              desc={"Produce detailed, precise estimates quickly with AI."}
            />
            <FeatureCard
              icon={"📈"}
              title={"Grow your revenue and profit"}
              desc={"Make more money and decrease your expenses at the same time."}
            />
          </div>
        </section>
<section className="max-w-6xl mx-auto mt-20 px-4">

  {/* ---------- TESTIMONIAL SECTION ---------- */}
  <div className="bg-white shadow-lg rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0">
    
    {/* Left video */}
    <div className="relative">
      <img
        src="https://cdn.prod.website-files.com/6650cddf762ba9b692753dc0/667b0bf0516a6deffb5daad7_video_EJ%20Elliot.webp"
        className="w-full h-full object-cover"
      />

      {/* Play Button */}
      <button className="absolute inset-0 flex items-center justify-center">
        <span className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center text-3xl">
          ▶
        </span>
      </button>
    </div>

    {/* Right content */}
    <div className="p-10 flex flex-col justify-center">
      <h2 className="text-3xl font-bold leading-snug">
        Learn how EJ Elliot made $118,000 in his first month using Handoff.
      </h2>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        Handoff delivered a detailed estimate for a down-to-the-studs high-end remodel that enabled EJ
        to go from site visit to a $118,000 winning bid in under 24 hours.
      </p>

      {/* Profile Row */}
      <div className="flex items-center gap-4 mt-8">
        <img
          src="/mnt/data/48131299-902a-4636-a3d1-c43aad338f65.png"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold">EJ Elliot</div>
          <div className="text-xs text-gray-500">
            Bellamore Contracting & Renovations • San Antonio, TX
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* ---------- HEADING CENTER ---------- */}
  <h2 className="text-4xl font-bold text-center mt-20">
    Making remodeling businesses <br /> run smoothly with AI
  </h2>

  {/* ---------- FEATURES + UI MOCK SECTION ---------- */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-16 items-start">

    {/* Left Features List */}
    <div>
      <h3 className="text-2xl font-bold">AI Estimates</h3>
      <p className="text-gray-600 mt-2 leading-relaxed">
        Instantly generate winning estimates with AI. Simply provide your project description and our AI
        will do all the work. Your estimate connects with Lowe’s to provide you with accurate
        construction costs in your area.
      </p>

      <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full text-sm">
        Learn more
      </button>

      <div className="mt-8 space-y-3 text-lg font-semibold">
        <div className="border-b pb-2">Centralized CRM</div>
        <div className="border-b pb-2">AI Proposals</div>
        <div className="border-b pb-2">Invoicing</div>
      </div>
    </div>

    {/* Right Estimate UI Box */}
    <div className="bg-[#FFF4E6] rounded-2xl p-6 shadow-sm">
      <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-4">

        <div className="flex justify-between items-center">
          <span className="font-bold text-sm">New estimate</span>
          <button className="px-3 py-1 bg-yellow-400 rounded text-xs font-semibold">Use AI</button>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          I need an estimate for a 100 square foot master bathroom remodel that involves replacing
          the bathtub and shower surround with a new tiled shower pan, full height tile walls, and
          a new double vanity...
        </p>

        <button className="self-start px-6 py-2 bg-gray-900 text-white rounded text-sm">
          Apply
        </button>
      </div>
    </div>

  </div>

</section>


        {/* FAQ */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-center">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto mt-6 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <FAQItem q={"Where does your cost data come from?"} a={"We collect cost data from verified suppliers and our customers' real projects to generate accurate estimates for your area."} />
              <FAQItem q={"Can your pricing be localized to my area?"} a={"Yes — our estimates can be localized based on regional cost data and supplier pricing."} />
              <FAQItem q={"Does this work for my type of business?"} a={"Handoff supports many remodeling business types including kitchens, baths, full home remodels, and more."} />
              <FAQItem q={"Can I cancel at any time?"} a={"Yes — you can cancel your subscription at any time from your account settings."} />
              <FAQItem q={"When will you have a certain feature that I need?"} a={"We continuously add features; join our roadmap mailing list to receive updates."} />
              <FAQItem q={"Do you have an online community for customers?"} a={"Yes — we host an active Facebook group and webinars for customers."} />
              <FAQItem q={"Do you have an affiliate or ambassador program?"} a={"We offer a partner program — contact our sales team for details."} />
              <FAQItem q={"Do you offer homeowner financing options?"} a={"We partner with financing providers to offer options for homeowners."} />
              <FAQItem q={"Does your AI read my drawings, photos, and other files?"} a={"Our AI can process photos and files to help create more accurate estimates."} />
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="bg-emerald-600 text-white px-5 py-2 rounded-full">Start free trial</button>
          </div>
        </section>

        {/* RATINGS */}
        <section className="mt-12 text-center">
          <h4 className="font-bold text-lg">Highly rated by 1000s of contractors</h4>
          <div className="mt-6 inline-flex items-center gap-6 bg-white rounded-full px-6 py-4 shadow">
            <div className="flex items-center gap-4">
              <div className="text-yellow-400 font-bold">★★★★★</div>
              <div className="text-sm text-gray-600">Capterra</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-yellow-400 font-bold">★★★★★</div>
              <div className="text-sm text-gray-600">App Store</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-yellow-400 font-bold">★★★★★</div>
              <div className="text-sm text-gray-600">Google Play</div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="mt-12 bg-emerald-50 rounded-2xl p-10 flex flex-col items-center text-center">
          <div className="w-40 h-40 bg-emerald-200 rounded-full flex items-center justify-center text-6xl">🏗️</div>
          <h3 className="text-2xl font-bold mt-6">Boost your business with Handoff</h3>
          <p className="text-gray-700 mt-3 max-w-2xl">Start earning more revenue right away with Handoff, without spending a single penny upfront.</p>
          <div className="mt-6 flex items-center gap-4">
            <button className="bg-black text-white px-4 py-2 rounded-lg">Get it on Google Play</button>
            <button className="bg-black text-white px-4 py-2 rounded-lg">Download on the App Store</button>
          </div>
        </section>

        <div className="h-20" />
      </div>
    </div>
  );
}

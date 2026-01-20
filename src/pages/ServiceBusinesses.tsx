import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ServiceBusinesses() {
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
    window.scrollTo(0, 0);
  }, []);

  // Reusable primary button class
  const primaryButtonClass =
    "px-8 py-3.5 bg-[#d2fe3a] text-[#0074ff] font-semibold rounded-full shadow-md hover:scale-[1.02] transition duration-200";

  return (
    <div className="w-full font-sans dm-sans text-gray-900">
      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-4">
              Service Business Growth
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Build a <span className="text-green-600">Predictable Client Pipeline</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-lg">
              Stop guessing where your next client will come from. We help service business owners attract, book, and convert high-intent clients—without burnout or endless lead chasing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/get-started" className={primaryButtonClass}>
                Book a Strategy Call
              </Link>
              <button className="px-8 py-3.5 bg-white border border-gray-300 text-gray-800 font-medium rounded-full hover:bg-gray-50 transition">
                See How It Works
              </button>
            </div>
            <p className="text-sm mt-4 text-gray-500">7-day free trial • No credit card required</p>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1c5516346f3336dec4_fix%20and%20flip_1.webp",
              "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1cf086b776db91dc2d_fix%20and%20flip_2.webp",
              "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1c6f5e1c29d54caff3_fix%20and%20flip_3.webp",
              "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1cef39f53a4f040c76_fix%20and%20flip_4.webp",
            ].map((src, i) => (
              <div key={i} className="bg-gray-200 rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={src}
                  alt={`Service image ${i + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE BUSINESS CHALLENGES SECTION */}
      <section className="bg-blue-50 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">If client acquisition feels unpredictable, you're not alone</h2>
          <p className="mb-6 text-gray-700">Most service business owners face this daily:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Leads come in but don't respond",
              "Appointments get booked but don't show up",
              "Ad spend increases with no clear ROI",
              "Sales fluctuate month to month",
              "Growth depends too much on referrals or word of mouth",
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold mb-2">{item}</h3>
              </div>
            ))}
          </div>
          <p className="text-gray-700">The issue isn't your service. It's the lack of a reliable acquisition system.</p>
        </div>
      </section>

      {/* HOW ROI EDGE HELPS SECTION */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">How ROI Edge helps service businesses grow</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-600 mb-4">We focus on lead quality, not lead volume</h3>
            <p className="mb-4 text-gray-700">More leads don't automatically mean more sales.</p>
            <p className="mb-4 text-gray-700">We design systems that:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Attract high-intent prospects</li>
              <li>Filter out low-quality enquiries</li>
              <li>Send only serious buyers to your team</li>
            </ul>
            <p className="font-medium text-gray-700">Result: Better conversations and higher close rates.</p>
          </div>
        </div>
      </section>

      {/* TURN INTEREST INTO APPOINTMENTS SECTION */}
      <section className="bg-blue-50 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">We turn interest into booked, attended appointments</h2>
            <p className="mb-4 text-gray-700">Most leads are lost in followups.</p>
            <p className="mb-4 text-gray-700">Our system ensures:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Instant responses via WhatsApp & email</li>
              <li>Automated reminders and confirmations</li>
              <li>Higher show-up rates</li>
            </ul>
            <p className="font-medium text-gray-700">Result: Less chasing. More real appointments.</p>
          </div>
          <div>
            <img src="https://picsum.photos/600/400" alt="Service Business Owner" className="rounded-xl w-full" />
          </div>
        </div>
      </section>

      {/* BUILD AROUND YOUR SERVICE SECTION */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-600 mb-4">We build around how your service actually sells</h2>
          <p className="mb-4 text-gray-700">Every service business sells differently.</p>
          <p className="mb-4 text-gray-700">We design acquisition systems that align with:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "Consultation-led sales",
              "High-ticket discovery calls",
              "Direct service bookings",
              "Recurring or retainer models",
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
          <p className="font-medium text-gray-700">Result: A funnel that fits your real sales process — not a generic one.</p>
        </div>
      </section>

      {/* TRACK WHAT GENERATES REVENUE SECTION */}
      <section className="bg-blue-50 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">We track what actually generates revenue</h2>
            <p className="mb-4 text-gray-700">Clicks and leads don't pay the bills.</p>
            <p className="mb-4 text-gray-700">We track performance from: Ad → Enquiry → Booking → Client</p>
            <p className="mb-4 text-gray-700">Every optimisation is based on:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Cost per booked appointment</li>
              <li>Cost per client</li>
              <li>Revenue efficiency</li>
            </ul>
          </div>
          <div>
            <img src="https://picsum.photos/600/400?random=2" alt="Revenue Tracking" className="rounded-xl w-full" />
          </div>
        </div>
      </section>

      {/* AUTOMATION SECTION */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <img src="https://picsum.photos/600/400?random=3" alt="Automation" className="rounded-xl w-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">We automate what slows your team down</h2>
            <p className="mb-4 text-gray-700">Your team shouldn't waste time chasing leads.</p>
            <p className="mb-4 text-gray-700">Our AI-powered automation handles:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Lead qualification</li>
              <li>Follow-ups & reminders</li>
              <li>Re-engagement for lost leads</li>
            </ul>
            <p className="font-medium text-gray-700">Result: Less admin. More focus on delivery and growth.</p>
          </div>
        </div>
      </section>

      {/* PREDICTABLE SCALING SECTION */}
      <section className="bg-blue-50 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Built for predictable, profitable scaling</h2>
          <p className="mb-4 text-gray-700">We don't scale blindly.</p>
          <p className="mb-4 text-gray-700">We scale only when:</p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              "Acquisition costs are under control",
              "Conversion quality is proven",
              "Your team can handle growth",
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
          <p className="font-medium text-gray-700">Result: Sustainable growth without chaos or burnout.</p>
        </div>
      </section>

      {/* WHO THIS IS FOR SECTION */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Who this is for</h2>
          <p className="mb-6 text-gray-700">This is for service businesses that:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "Want predictable client flow",
              "Care about ROI, not vanity metrics",
              "Are ready to build systems, not run experiments",
              "Want growth without constant firefighting",
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <span className="w-6 h-6 mr-2 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  ✓
                </span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILD PROFITABLE SYSTEM SECTION */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Build a profitable Client Acquisition System for your Service Business
            </h2>
            <p className="mb-4 text-gray-700">Book a free strategy session to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Identify what's blocking consistent client flow</li>
              <li>Fix holes in your current acquisition process</li>
              <li>Design a scalable, ROI-driven growth system</li>
            </ul>
            <p className="mb-4 text-gray-700">No pressure. Just clarity.</p>
            <Link to="/get-started" className={primaryButtonClass.replace("py-3.5", "py-3")}>
              Book a Strategy Session
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-green-50 py-16 px-6 lg:px-20">
        <h2 className="text-center text-3xl font-bold mb-10">Key benefits for Service Businesses</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Scale your service business with AI",
              desc: "Grow your company rapidly without adding more headcount.",
            },
            {
              title: "Impress your clients with professionalism",
              desc: "Give your clients a seamless experience from first contact to project completion.",
            },
            {
              title: "Get a handle on your conversion rates",
              desc: "Easily track what's working and what needs improvement in your sales process.",
            },
            {
              title: "Grow your revenue and profit",
              desc: "Make more money and decrease your risk at the same time.",
            },
          ].map((b, i) => (
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
            <img
              className="rounded-2xl w-full"
              src="https://cdn.prod.website-files.com/6650cddf762ba9b692753dc0/667b0bf0516a6deffb5daad7_video_EJ%20Elliot.webp"
              alt="EJ Elliot testimonial"
              loading="lazy"
            />
            <button className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full shadow flex items-center justify-center text-red-500 text-3xl">
              ▶
            </button>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              Learn how EJ Elliot made $118,000 in his first month using Handoff.
            </h3>
            <p className="mt-4 text-gray-600">
              Handoff delivered a detailed estimate for a down-to-the-studs high-end remodel that enabled EJ to go from site visit to a $118,000 winning bid in under 24 hours.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="w-12 h-12 rounded-full"
                src="https://i.postimg.cc/8cGJT2L9/avatar1.jpg"
                alt="EJ Elliot"
                loading="lazy"
              />
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
        <h2 className="text-center text-3xl font-bold mb-12">Making service businesses run smoothly with AI</h2>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="space-y-6 text-lg font-semibold">
              <p>AI Estimates</p>
              <p>Centralized CRM</p>
              <p>AI Proposals</p>
              <p>Invoicing</p>
            </div>
            <Link to="/get-started" className="mt-8 px-6 py-3 bg-[#d2fe3a] text-[#0074ff] rounded-full font-semibold shadow inline-block hover:scale-[1.02] transition">
              Learn more
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 border">
            <h3 className="text-xl font-bold">New estimate</h3>
            <p className="mt-4 text-gray-600 text-sm">
              I need an estimate for a 100 square foot master bathroom remodel that involves replacing the bathtub and shower surround...
            </p>
            <Link to="/get-started" className="mt-6 px-6 py-2 bg-[#d2fe3a] text-[#0074ff] rounded-full inline-block font-medium">
              Apply
            </Link>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="bg-green-50 py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Service Business Community</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions about Handoff or need general business advice? Join our engaging Facebook community.
          </p>
          <Link to="/get-started" className="mt-8 px-6 py-3 bg-[#d2fe3a] text-[#0074ff] rounded-full font-semibold shadow inline-block hover:scale-[1.02] transition">
            Join community
          </Link>
        </div>
      </section>
    </div>
  );
}
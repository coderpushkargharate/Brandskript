import React from "react";
import { Link } from "react-router-dom";

export default function Testimonials() {
  const testimonials = [
    { 
      name: "Marcus Chen", 
      role: "Founder", 
      company: "GrowthLabs", 
      metric: "$40K MRR",
      content: "Shubham helped us generate 28 qualified conversations in our first month. We closed 4 new clients worth $40K in recurring revenue.",
      image: "MC"
    },
    { 
      name: "Sarah Williams", 
      role: "Founder", 
      company: "ScaleUp Agency", 
      metric: "28 Meetings/mo",
      content: "Finally, a system that actually works. No more chasing referrals or hoping for leads. My pipeline is predictable now.",
      image: "SW"
    },
    { 
      name: "David Park", 
      role: "CEO", 
      company: "LeadFlow Digital", 
      metric: "12.5x ROI",
      content: "The ROI is insane. $2K investment turned into $25K in new business. Shubham delivers exactly what he promises.",
      image: "DP"
    },
    { 
      name: "Valerie Vance", 
      role: "Contractor", 
      company: "Vance Construction", 
      metric: "50% Growth",
      content: "ROI Edge has helped me save hours every week and made estimating extremely simple.",
      image: "VV"
    },
    { 
      name: "Gordon Williams", 
      role: "Owner", 
      company: "Williams Remodeling", 
      metric: "3x Leads",
      content: "The system delivered qualified clients consistently, and I've doubled my revenue in 90 days.",
      image: "GW"
    },
    { 
      name: "Jennifer Rex-McCray", 
      role: "CEO", 
      company: "Sacramento Builders", 
      metric: "$118K First Month",
      content: "I made $118,000 in my first month using ROI Edge. The detailed estimates helped me scale my business.",
      image: "JR"
    }
  ];

  const caseStudies = [
    {
      title: "How We Helped a Roofing Contractor Scale to $1M",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "From 5 to 50 Jobs/Month: A Painting Company's Journey",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    },
    {
      title: "How a Remodeler Doubled Revenue in 90 Days",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    },
  ];

  const primaryButtonClass =
    "px-6 py-3 md:px-8 md:py-3.5 bg-[#d2fe3a] text-[#0074ff] font-bold rounded-xl shadow hover:bg-yellow-300 transition-transform dm-sans";

  const finalCtaButtonClass =
    "bg-white text-[#00A651] font-bold px-8 py-4 rounded-xl hover:bg-[#e6fff0] transition dm-sans";

  return (
    <div className="w-full bg-white text-slate-900 font-sans dm-sans">
      {/* ================= HERO ================= */}
      <section className="bg-[#0074ff] rounded-3xl max-w-7xl mx-2 lg:mx-auto  mt-6 overflow-hidden p-10 lg:p-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="uppercase text-white/90 text-xs md:text-sm font-semibold mb-3 tracking-wider">
              Customer Love
            </p>
            <h1 className="text-3xl md:text-4xl text-white/90 lg:text-6xl font-extrabold leading-tight noir-pro-medium">
              A System That Delivers Clients — Not Just Promises
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/90 opacity-90 max-w-lg mb-6">
              We don't run one-off campaigns. We build repeatable systems that deliver qualified clients, predictable revenue, and measurable ROI — backed by performance accountability.
            </p>
            <Link to="/get-started" className={primaryButtonClass}>
              Book An Appointment
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41"
            alt="Marketing growth dashboard"
            className="rounded-2xl shadow-xl w-full object-cover max-h-[400px] md:max-h-[500px] mx-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="px-4 md:px-10 lg:px-16 py-16 md:py-20 bg-[#f0fdf4]">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold noir-pro-medium mb-10 md:mb-12">
          What our <span className="text-[#00A651]">clients are saying</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((person, i) => (
            <div
              key={i}
              className="p-5 md:p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition duration-300 relative"
            >
              {/* Metric Badge */}
              <div className="absolute -top-3 right-6">
                <div className="bg-[#00A651] text-white px-4 py-1.5 rounded-full text-sm font-bold">
                  {person.metric}
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#00A651] to-[#00C853] flex items-center justify-center text-white font-bold">
                  {person.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{person.name}</h4>
                  <p className="text-xs md:text-sm text-gray-500">{person.role}, {person.company}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className="text-[#00A651] text-sm md:text-base">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic text-sm md:text-base">
                "{person.content}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="px-4 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8"
                alt="Video testimonial thumbnail"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <svg className="w-8 h-8 text-[#00A651]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold noir-pro-medium">
              Learn how E.J Elliot made $118,000 in his first month using ROI Edge.
            </h3>
            <p className="mt-4 text-gray-600">
              ROI Edge delivered a detailed estimate that helped scale his business into consistent high-value clients.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="px-4 md:px-10 lg:px-16 py-16 md:py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={study.image}
                alt={study.title}
                className="rounded-xl mb-4 h-40 md:h-48 w-full object-cover"
                loading="lazy"
              />
              <h3 className="font-extrabold text-base md:text-lg noir-pro-medium">{study.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Real results from real contractors.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="px-4 md:px-10 lg:px-16 py-16 md:py-20 bg-[#f0fdf4]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 text-center">
          {[
            ["1000+", "Happy Contractors"],
            ["$50M+", "Revenue Generated"],
            ["98%", "Client Retention"],
            ["4.9★", "Avg. Rating"],
          ].map(([value, label], i) => (
            <div key={i} className="px-2">
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#00A651] noir-pro-medium">
                {value}
              </div>
              <p className="text-gray-700 mt-1 text-sm md:text-base">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-4 md:px-10 lg:px-16 py-16 md:py-20 bg-[#e6fff0] rounded-t-[40px] text-center">
        <div className="bg-[#00A651] rounded-2xl p-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white noir-pro-medium mb-4">
            Businesses Prefer ROI Edge, But Don't Take Our Word For It, See For Yourself!
          </h2>
          <p className="text-white/80 text-lg mb-6">
            We don't run one-off campaigns. We build repeatable systems that deliver qualified clients, predictable revenue, and measurable ROI — backed by performance accountability.
          </p>
          <Link to="/get-started" className={finalCtaButtonClass}>
            Book An Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
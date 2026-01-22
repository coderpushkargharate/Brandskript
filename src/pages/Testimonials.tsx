import React from "react";
import { Link } from "react-router-dom";

export default function Testimonials() {
  const testimonials = [
    { name: "Valerie Vance", location: "Ohio, USA", rating: 5 },
    { name: "Sonny O", location: "Maryland, USA", rating: 5 },
    { name: "Gordon Williams", location: "Cincinnati, OH", rating: 5 },
    { name: "Ernest M", location: "Erie, PA", rating: 5 },
    { name: "Stephanie H", location: "Delaware, US", rating: 5 },
    { name: "Harold Bailey", location: "Georgia, USA", rating: 5 },
    { name: "Mitch Kubacki", location: "Chicago, IL", rating: 5 },
    { name: "Roy H", location: "Connecticut, USA", rating: 5 },
    { name: "Jennifer Rex-McCray", location: "Fort Sacramento, CA", rating: 5 },
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

  return (
    <div className="w-full bg-white text-slate-900 font-sans dm-sans">
      {/* ================= HERO ================= */}
      <section className="bg-[#0074ff] min-h-[70vh] md:min-h-[60vh] lg:h-[80vh] text-white rounded-t-[40px] rounded-b-[40px] pb-16 pt-16 md:pt-20 px-4 md:px-6 lg:px-20 mx-4 md:mx-6 lg:mx-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="uppercase text-xs md:text-sm font-semibold mb-3 tracking-wider">
              Customer Love
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight noir-pro-medium">
              A System That Delivers Clients — Not Just Promises
            </h1>
            <p className="mt-4 text-base md:text-lg opacity-90 max-w-lg mb-6">
              We don’t run one-off campaigns. We build repeatable systems that deliver qualified clients, predictable revenue, and measurable ROI.
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

      {/* ================= AI TOOL ================= */}
      <section className="px-4 md:px-10 lg:px-16 py-16 md:py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold noir-pro-medium">
              Run your contracting <br />
              business <span className="text-[#00A651]">with AI</span>
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Handoff is a complete toolkit to help you supercharge your contracting business with AI—create estimates, proposals, invoices, and manage clients.
            </p>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aoTU94nRsBYY4EJLPIXXLTPbzOBOio_XRg&s"
            alt="Handoff mobile app interface"
            className="rounded-2xl shadow-xl mx-auto max-h-[450px] object-contain"
            loading="lazy"
          />
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="px-4 md:px-10 lg:px-16 py-16 md:py-20">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold noir-pro-medium mb-10 md:mb-12">
          What our <span className="text-[#00A651]">clients are saying</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((person, i) => (
            <div
              key={i}
              className="p-5 md:p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=00A651&color=fff`}
                  alt={person.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{person.name}</h4>
                  <p className="text-xs md:text-sm text-gray-500">{person.location}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-sm md:text-base">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic text-sm md:text-base">
                “Handoff has helped me save hours every week and made estimating extremely simple.”
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRUST ================= */}
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

      {/* ================= VIDEO ================= */}
      <section className="px-4 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41"
            alt="Video testimonial thumbnail"
            className="rounded-2xl shadow-lg object-cover h-full w-full max-h-[450px]"
            loading="lazy"
          />
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold noir-pro-medium">
              Learn how E.J Elliot made $118,000 in his first month using Handoff.
            </h3>
            <p className="mt-4 text-gray-600">
              Handoff delivered a detailed estimate that helped scale his business into consistent high-value clients.
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

      {/* ================= FINAL CTA ================= */}
      <section className="px-4 md:px-10 lg:px-16 py-16 md:py-20 bg-[#e6fff0] rounded-t-[40px] text-center">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="ROI Edge team"
          className="mx-auto mb-6 w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
          loading="lazy"
        />
        <h2 className="text-3xl md:text-4xl font-extrabold noir-pro-medium max-w-2xl mx-auto px-2">
          Boost Your Business With ROI Edge
        </h2>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto mb-6 px-2">
          Start earning more revenue right away without spending a single penny upfront.
        </p>
        <Link to="/get-started" className={primaryButtonClass}>
          Book An Appointment
        </Link>
      </section>
    </div>
  );
}
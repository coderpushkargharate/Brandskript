import React from "react";

export default function TestimonialsPage() {
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
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "From 5 to 50 Jobs/Month: A Painting Company's Journey",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    },
    {
      title: "How a Remodeler Doubled Revenue in 90 Days",
      image:
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    },
  ];

  return (
    <div className="w-full bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="bg-[#00A651] text-white px-6 md:px-16 py-20 rounded-b-3xl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-sm font-semibold mb-4">
              Customer Love
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              A System That Delivers Clients — Not Just Promises
            </h1>

            <p className="mt-4 text-lg opacity-90">
              We don’t run one-off campaigns. We build repeatable systems that
              deliver qualified clients, predictable revenue, and measurable ROI.
            </p>

            <button className="mt-6 px-6 py-3 bg-white text-[#00A651] font-semibold rounded-xl shadow hover:bg-gray-100">
              Book An Appointment
            </button>
          </div>

          <img
            src="data:image/jpeg;base64,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"
            alt="Marketing growth"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </section>

      {/* ================= AI TOOL ================= */}
      <section className="px-6 md:px-16 py-20 bg-[#f4f7f9]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Run your contracting <br />
              business <span className="text-[#00A651]">with AI</span>
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Handoff is a complete toolkit to help you supercharge your
              contracting business with AI— create estimates, proposals,
              invoices, and manage clients.
            </p>
          </div>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aoTU94nRsBYY4EJLPIXXLTPbzOBOio_XRg&s"
            alt="Mobile app"
            className="rounded-2xl shadow-xl mx-auto max-h-[500px]"
          />
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
          What our <span className="text-[#00A651]">clients are saying</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((person, i) => (
            <div
              key={i}
              className="p-6 border rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${person.name}&background=00A651&color=fff`}
                  alt={person.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{person.name}</h4>
                  <p className="text-sm text-gray-500">{person.location}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-gray-600">
                Handoff has helped me save hours every week and made estimating
                extremely simple.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="px-6 md:px-16 py-20 bg-[#f4f7f9]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["1000+", "Happy Contractors"],
            ["$50M+", "Revenue Generated"],
            ["98%", "Client Retention"],
            ["4.9★", "Avg. Rating"],
          ].map(([value, label], i) => (
            <div key={i}>
              <div className="text-4xl font-extrabold text-[#00A651]">
                {value}
              </div>
              <p className="text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41"
            alt="Video testimonial"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h3 className="text-2xl font-extrabold">
              Learn how E.J Elliot made $118,000 in his first month using Handoff.
            </h3>
            <p className="mt-4 text-gray-600">
              Handoff delivered a detailed estimate that helped scale his
              business into consistent high-value clients.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="px-6 md:px-16 py-20 bg-[#f4f7f9]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
            >
              <img
                src={study.image}
                alt={study.title}
                className="rounded-xl mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-extrabold text-lg">{study.title}</h3>
              <p className="text-gray-600 mt-2">
                Real results from real contractors.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 md:px-16 py-20 bg-[#e6fff0] rounded-t-3xl text-center">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Team"
          className="mx-auto mb-6 w-32 h-32 rounded-full object-cover"
        />

        <h2 className="text-3xl md:text-4xl font-extrabold">
          Boost Your Business With ROI Edge
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Start earning more revenue right away without spending a single penny upfront.
        </p>

        <button className="mt-6 px-6 py-3 rounded-xl bg-[#00A651] text-white font-semibold shadow hover:bg-[#008f45]">
          Book An Appointment
        </button>
      </section>
    </div>
  );
}

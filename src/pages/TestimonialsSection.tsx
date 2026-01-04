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
    { title: "How We Helped a Roofing Contractor Scale to $1M", image: "https://via.placeholder.com/500x250?text=Case+Study+1" },
    { title: "From 5 to 50 Jobs/Month: A Painting Company's Journey", image: "https://via.placeholder.com/500x250?text=Case+Study+2" },
    { title: "How a Remodeler Doubled Revenue in 90 Days", image: "https://via.placeholder.com/500x250?text=Case+Study+3" },
  ];

  return (
    <div className="w-full bg-white text-[#0f172a]">

      {/* ----------------------------------------------- */}
      {/* HERO SECTION (ROI Edge Style) */}
      {/* ----------------------------------------------- */}
      <section className="bg-[#00A651] text-white px-6 md:px-16 py-20 rounded-b-3xl">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="md:w-1/2">
            <p className="uppercase text-sm font-semibold mb-4">Customer Love</p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              A System That Delivers Clients — Not Just Promises
            </h1>

            <p className="mt-4 max-w-2xl text-lg opacity-90">
              We don’t run one-off campaigns. We build repeatable systems that deliver qualified clients, predictable revenue, and measurable ROI — backed by performance accountability.
            </p>

            <button className="mt-6 px-6 py-3 bg-white text-[#00A651] font-semibold rounded-xl shadow hover:bg-gray-100">
              Book An Appointment
            </button>
          </div>

          {/* Image Placeholder (Right Side) */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://via.placeholder.com/600x300?text=ROI+Edge+Banner"
              alt="ROI Edge Banner"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* AI TOOLKIT SECTION */}
      {/* ----------------------------------------------- */}
      <section className="px-6 md:px-16 py-16 bg-[#f4f7f9]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Run your contracting <br /> business <span className="text-[#00A651]">with AI</span>
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Handoff is a complete toolkit to help you supercharge your contracting business with AI—
              create estimates, send proposals, issue invoices, and manage clients.
            </p>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://via.placeholder.com/350x500?text=Phone+Mockup"
              alt="Handoff mobile app"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* CLIENT REVIEWS GRID */}
      {/* ----------------------------------------------- */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
          What our <span className="text-[#00A651]">clients are saying</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((person, i) => (
            <div
              key={i}
              className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={`https://via.placeholder.com/60?text=${person.name.charAt(0)}`}
                  alt={person.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{person.name}</h4>
                  <p className="text-sm text-gray-500">{person.location}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => (
                  <svg
                    key={idx}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">
                Handoff has helped me save hours every week and made estimating extremely simple.
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="text-[#00A651] font-semibold hover:underline"
          >
            See more reviews →
          </a>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* WHY TO TRUST US SECTION */}
      {/* ----------------------------------------------- */}
      <section className="px-6 md:px-16 py-16 bg-[#f4f7f9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
            Why To Trust Us
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#00A651]">1000+</div>
              <p className="text-gray-600">Happy Contractors</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#00A651]">$50M+</div>
              <p className="text-gray-600">Revenue Generated</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#00A651]">98%</div>
              <p className="text-gray-600">Client Retention</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#00A651]">4.9★</div>
              <p className="text-gray-600">Avg. Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* VIDEO CASE STUDY */}
      {/* ----------------------------------------------- */}
      <section className="px-6 md:px-16 py-20 bg-white">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
          Contractors love Handoff
        </h2>

        <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/500x300?text=Video+Thumbnail"
              alt="E.J. Elliot testimonial"
              className="w-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-extrabold">
              Learn how E.J Elliot made $118,000 in his first month using Handoff.
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Handoff delivered a detailed estimate that helped scale his business from small projects to consistent high-value clients.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* CASE STUDIES */}
      {/* ----------------------------------------------- */}
      <section className="px-6 md:px-16 py-20 bg-[#f4f7f9]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          Case Studies and Guides
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md">
              <img
                src={study.image}
                alt={study.title}
                className="rounded-xl mb-4 w-full"
              />
              <h3 className="font-extrabold text-xl">{study.title}</h3>
              <p className="text-gray-600 mt-2">
                Real results from real contractors who transformed their business with our system.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* HIGHLY RATED */}
      {/* ----------------------------------------------- */}
      <section className="px-6 md:px-16 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold">Highly rated by 1000s of contractors</h2>
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <img src="https://via.placeholder.com/120x40?text=Capterra" alt="Capterra" />
          <img src="https://via.placeholder.com/120x40?text=App+Store" alt="App Store" />
          <img src="https://via.placeholder.com/120x40?text=Google+Play" alt="Google Play" />
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* FINAL CTA BANNER */}
      {/* ----------------------------------------------- */}
      <section className="px-6 md:px-16 py-20 bg-[#e6fff0] rounded-t-3xl text-center">
        <img
          src="https://via.placeholder.com/150?text=ROI+Edge"
          alt="ROI Edge Mascot"
          className="mx-auto mb-6"
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
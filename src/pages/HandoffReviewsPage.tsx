import React from "react";

export default function HandoffReviewsPage() {
  return (
    <div className="w-full bg-white text-[#0f172a]">

      {/* ----------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ----------------------------------------------- */}
      <section className="bg-[#00A651] text-white px-6 md:px-16 py-20 rounded-b-3xl">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-sm font-semibold mb-4">Customer Love</p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Contractors love Handoff.  
            But don’t take our word for it,  
            <br /> see for yourself.
          </h1>

          <p className="mt-4 max-w-2xl text-lg opacity-90">
            Check out real testimonials from actual contractors using Handoff to scale their construction businesses.
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-[#00A651] font-semibold rounded-xl shadow hover:bg-gray-100">
            Start an estimate
          </button>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* RUN YOUR CONTRACTING BUSINESS WITH AI */}
      {/* ----------------------------------------------- */}
      <section className="px-6 md:px-16 py-16 bg-[#f4f7f9]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

          {/* Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Run your contracting <br /> business <span className="text-[#00A651]">with AI</span>
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Handoff is a complete toolkit to help you supercharge your contracting business with AI—
              create estimates, send proposals, issue invoices, and manage clients.
            </p>

            <div className="flex gap-3 mt-6">
              <img
                src="https://via.placeholder.com/120x40?text=Google+Play"
                className="h-10"
              />
              <img
                src="https://via.placeholder.com/120x40?text=App+Store"
                className="h-10"
              />
            </div>
          </div>

          {/* Phone mockups */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://via.placeholder.com/350x500?text=Phone+Mockup"
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

          {/* REVIEW CARD */}
          {[
            { name: "Valerie Vance", location: "Ohio, USA" },
            { name: "Sonny O", location: "Maryland, USA" },
            { name: "Gordon Williams", location: "Cincinnati, OH" },
            { name: "Ernest M", location: "Erie, PA" },
            { name: "Stephanie H", location: "Delaware, US" },
            { name: "Harold Bailey", location: "Georgia, USA" },
            { name: "Mitch Kubacki", location: "Chicago, IL" },
            { name: "Roy H", location: "Connecticut, USA" },
            { name: "Jennifer Rex-McCray", location: "Fort Sacramento, CA" },
          ].map((person, i) => (
            <div
              key={i}
              className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={`https://via.placeholder.com/60?text=User`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{person.name}</h4>
                  <p className="text-sm text-gray-500">{person.location}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Handoff has helped me save hours every week and made estimating extremely simple.
              </p>
            </div>
          ))}

        </div>

        <div className="text-center mt-10">
          <button className="px-6 py-3 rounded-xl bg-[#00A651] text-white font-semibold shadow hover:bg-[#008f45]">
            See more reviews
          </button>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* CONTRACTORS LOVE HANDOFF – VIDEO SECTION */}
      {/* ----------------------------------------------- */}
      <section className="px-6 md:px-16 py-20 bg-[#f4f7f9]">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">
          Contractors love Handoff
        </h2>

        <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-2 gap-10">

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/500x300?text=Video+Thumbnail"
              className="w-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-extrabold">
              Learn how E.J Elliot made $118,000 in his first month using Handoff.
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Handoff delivered a detailed estimate that helped scale his business from small projects to
              consistent high-value clients.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* ESTIMATES IN SECONDS */}
      {/* ----------------------------------------------- */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Handoff creates accurate <br /> estimates <span className="text-[#00A651]">in seconds</span>.
            </h2>

            <p className="mt-4 text-gray-600">
              Work on your business, not in your business.
            </p>

            <button className="mt-6 px-6 py-3 rounded-xl bg-[#00A651] text-white font-semibold shadow hover:bg-[#008f45]">
              Get started now
            </button>
          </div>

          <img
            src="https://via.placeholder.com/450x350?text=Estimate+Dashboard"
            className="rounded-2xl shadow-xl"
          />
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
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-2xl shadow-md">
              <img
                src="https://via.placeholder.com/500x250?text=Case+Study"
                className="rounded-xl mb-4"
              />
              <h3 className="font-extrabold text-xl">Guide Title Here</h3>
              <p className="text-gray-600 mt-2">
                Short description about the guide. Improve your business with these strategies.
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
          <img src="https://via.placeholder.com/120x40?text=Capterra" />
          <img src="https://via.placeholder.com/120x40?text=App+Store" />
          <img src="https://via.placeholder.com/120x40?text=Google+Play" />
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* CTA FOOTER */}
      {/* ----------------------------------------------- */}
      <section className="px-6 md:px-16 py-20 bg-[#e6fff0] rounded-t-3xl text-center">
        <img
          src="https://via.placeholder.com/150?text=Mascot"
          className="mx-auto mb-6"
        />

        <h2 className="text-3xl md:text-4xl font-extrabold">
          Boost your business with Handoff
        </h2>

        <p className="mt-4 text-gray-600">
          Start earning more revenue right away without spending a single penny upfront.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <img src="https://via.placeholder.com/120x40?text=Google+Play" />
          <img src="https://via.placeholder.com/120x40?text=App+Store" />
        </div>
      </section>

    </div>
  );
}

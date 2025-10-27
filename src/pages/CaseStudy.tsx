import React from "react";

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/40 to-white text-gray-900">
      {/* HERO */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left - Text */}
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
              Ready to Roll With Us?
            </h1>
            <p className="mt-4 text-lg opacity-90 leading-relaxed">
              This isn’t just a “job” — it’s a chance to vibe, learn, and create
              work that makes noise in the digital world. Whether you’re here
              for an internship or full-time hustle, let’s make it happen.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#apply"
                className="inline-block rounded-full bg-white text-indigo-700 font-semibold px-8 py-3 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
              >
                JOIN THE TEAM
              </a>

              <a
                href="#roles"
                className="inline-block rounded-full border border-white/60 text-white px-8 py-3 hover:bg-white/10 transition duration-200"
              >
                Find your Role
              </a>
            </div>
          </div>

          {/* Right - Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg max-w-sm text-white">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Work with BrandSkript
            </h3>
            <p className="mt-3 text-sm opacity-95">
              Internships + full-time roles across design, marketing, video and
              copy — learn while you ship.
            </p>
            <ul className="mt-4 text-sm space-y-2 list-disc list-inside opacity-90">
              <li>Hybrid work model</li>
              <li>Mentorship & growth</li>
              <li>Friendly team culture</li>
            </ul>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* QUICK FACTS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Workdays",
              text: "Monday - Friday: ",
              highlight: "09 AM to 06 PM",
            },
            { title: "Work Location", text: "HYBRID" },
            {
              title: "Leaves & Probation",
              text: "Leaves: 24 Days Annual Paid Leaves",
              highlight: "Probation: 6 Months",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition-transform hover:scale-105"
            >
              <h4 className="font-bold text-lg text-indigo-700 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {item.text}{" "}
                {item.highlight && (
                  <span className="font-medium">{item.highlight}</span>
                )}
              </p>
            </div>
          ))}
        </section>

        {/* PAYROLL */}
        <section className="bg-white rounded-2xl p-8 shadow mb-16">
          <h3 className="text-2xl font-bold text-indigo-700">
            Payroll & Performance
          </h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-700">
            {[
              {
                label: "Salary Cycle",
                value: "10th of every month",
              },
              {
                label: "Salary Appraisal",
                value: "Post 1 Year Completion",
              },
              {
                label: "Performance Evaluation",
                value: "Self Evaluation on a Monthly Basis",
              },
            ].map((d, i) => (
              <div key={i} className="hover:translate-y-1 transition">
                <h5 className="font-semibold">{d.label}</h5>
                <p className="mt-1 text-gray-600">{d.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ROLES */}
        <section id="roles" className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-3xl font-extrabold text-indigo-700">
              Find your desired Role!
            </h2>
            <p className="text-sm text-gray-600 max-w-md">
              Not just another job board — this is where passion meets purpose.
            </p>
          </div>

          <p className="mt-3 text-gray-700">
            Whether you’re hunting for your first internship or chasing your
            dream full-time gig, we’ve got a role with your name on it.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Digital Marketing", tag: "Full time + Internship" },
              { title: "Graphic Design", tag: "Full time + Internship" },
              { title: "Video Editing", tag: "Full time + Internship" },
              { title: "Copywriter", tag: "Full time + Internship" },
            ].map((role) => (
              <article
                key={role.title}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg hover:-translate-y-1 transition"
              >
                <h4 className="font-bold text-lg text-indigo-700">
                  {role.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600">{role.tag}</p>
                <div className="mt-4">
                  <a
                    href="#apply"
                    className="inline-block text-sm font-semibold px-4 py-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                  >
                    Apply
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* APPLY CTA */}
        <section
          id="apply"
          className="bg-gradient-to-r from-indigo-100 via-indigo-50 to-white rounded-2xl p-8 shadow-lg text-center md:text-left mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-indigo-700">
                Want to work with us?
              </h3>
              <p className="mt-2 text-gray-700 max-w-xl">
                Start your journey with us. Browse through the job openings to
                see the role that fits you best.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <a
                href="#"
                className="rounded-full bg-indigo-600 text-white px-8 py-3 font-semibold hover:bg-indigo-700 transition"
              >
                Apply Here
              </a>
              <a
                href="#contact"
                className="rounded-full border border-indigo-300 px-8 py-3 text-indigo-700 font-medium hover:bg-indigo-50"
              >
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6">FAQs</h3>
          <p className="text-gray-700 max-w-3xl">
            All that you need to know about BrandSkript! Find the answers to the
            questions we get asked the most about our work policies.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                q: "Workdays",
                a: "Monday - Friday: 09 AM to 06 PM",
              },
              { q: "Work-Location", a: "HYBRID" },
              {
                q: "Leaves & Probation",
                a: "Leaves: 24 Days Annual Paid Leaves · Probation: 6 Months",
              },
              {
                q: "Salary Cycle & Appraisal",
                a: "Salary Cycle: 10th of every month · Appraisal: Post 1 Year Completion",
              },
              {
                q: "Performance Evaluation",
                a: "Self Evaluation on a Monthly Basis",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl p-5 shadow cursor-pointer hover:shadow-md transition"
              >
                <summary className="font-semibold text-indigo-700">
                  {faq.q}
                </summary>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

    
    </div>
  );
}

import React from "react";

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/40 to-white text-gray-900">
      {/* HERO SECTION */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* LEFT - Text */}
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
                Join the Team
              </a>
              <a
                href="#roles"
                className="inline-block rounded-full border border-white/60 text-white px-8 py-3 hover:bg-white/10 transition duration-200"
              >
                Find Your Role
              </a>
            </div>
          </div>

          {/* RIGHT - Info Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg max-w-sm text-white">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Work with BrandSkript
            </h3>
            <p className="mt-3 text-sm opacity-95">
              Explore internships and full-time roles across design, marketing,
              video and copy — learn while you ship impactful projects.
            </p>
            <ul className="mt-4 text-sm space-y-2 list-disc list-inside opacity-90">
              <li>Hybrid work model</li>
              <li>Mentorship & career growth</li>
              <li>Friendly, creative team culture</li>
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
              text: "Monday - Friday:",
              highlight: "09 AM to 06 PM",
            },
            { title: "Work Location", text: "Hybrid (Pune + Remote)" },
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

        {/* PAYROLL & PERFORMANCE */}
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
                value: "After 1 Year Completion",
              },
              {
                label: "Performance Evaluation",
                value: "Monthly self-assessment with manager feedback",
              },
            ].map((d, i) => (
              <div key={i} className="hover:translate-y-1 transition">
                <h5 className="font-semibold">{d.label}</h5>
                <p className="mt-1 text-gray-600">{d.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AVAILABLE ROLES */}
        <section id="roles" className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-3xl font-extrabold text-indigo-700">
              Find Your Desired Role
            </h2>
            <p className="text-sm text-gray-600 max-w-md">
              Whether you're exploring internships or full-time opportunities —
              passion, creativity, and impact are what we value most.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Digital Marketing", tag: "Full Time + Internship" },
              { title: "Graphic Design", tag: "Full Time + Internship" },
              { title: "Video Editing", tag: "Full Time + Internship" },
              { title: "Copywriter", tag: "Full Time + Internship" },
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

        {/* APPLY SECTION */}
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
                Start your journey with BrandSkript. Browse through available
                roles and apply for the one that best fits your creative energy.
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
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-700 max-w-3xl">
            Everything you need to know about BrandSkript’s work culture,
            benefits, and processes — all in one place.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                q: "What are your working hours?",
                a: "We work Monday to Friday, from 09 AM to 06 PM.",
              },
              {
                q: "Where is BrandSkript located?",
                a: "We operate on a hybrid model — primarily in Pune with remote flexibility.",
              },
              {
                q: "How does performance evaluation work?",
                a: "We use a monthly self-evaluation system with feedback sessions to help you grow.",
              },
              {
                q: "When are salaries credited?",
                a: "Salaries are processed on the 10th of every month.",
              },
              {
                q: "Do interns get paid?",
                a: "Yes, all internships are paid and come with mentorship from senior team members.",
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

      {/* FOOTER */}
      <footer className="bg-indigo-600 text-white py-6 text-center rounded-t-2xl">
        <p className="text-sm">
          © {new Date().getFullYear()} BrandSkript · Empowering Digital Growth
        </p>
      </footer>
    </div>
  );
}

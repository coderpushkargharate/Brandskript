import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  CheckCircle,
  Briefcase,
  Users,
  Clock,
  BarChart3,
} from "lucide-react";

const faqs = [
  { question: "Workdays", answer: "Monday - Friday: 09 AM to 06 PM" },
  { question: "Work-Location", answer: "HYBRID" },
  {
    question: "Leaves & Probation",
    answer: "Leaves: 24 Days Annual Paid Leaves | Probation: 6 Months",
  },
  { question: "Salary Cycle", answer: "10th of every month" },
  { question: "Salary Appraisal", answer: "Post 1 Year Completion" },
  { question: "Performance Evaluation", answer: "Self Evaluation Monthly" },
];

const stats = [
  { icon: <Users size={28} />, number: "150+", label: "Happy Employees" },
  { icon: <Briefcase size={28} />, number: "100+", label: "Projects Delivered" },
  { icon: <Clock size={28} />, number: "12+", label: "Years of Expertise" },
  { icon: <BarChart3 size={28} />, number: "85+", label: "Clients Served" },
];

const Career = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-br from-indigo-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          ⚡ Find Your Vibe, Build <br /> Your Tribe
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-10">
          Not just another job board — this is where passion meets purpose.
          Whether you’re hunting for your first internship or chasing your dream
          full-time gig, we’ve got a role with your name on it.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-4 rounded-full shadow-md transition">
          Apply Now
        </button>
      </section>

      {/* ROLES */}
      <section className="py-20 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
          Current Openings
        </h2>

        <div className="space-y-10">
          {/* Role 1 */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-md p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
              💸 Performance Marketing Pro
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              (Employment + Internships — OPEN)
            </p>
            <p className="text-gray-700 mb-6">
              If ads, RoAS, and scaling sales get your adrenaline pumping, this
              is your arena. Join the squad and turn clicks into cha-ching 💰
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold">
              Apply Now
            </button>
          </div>

          {/* Role 2 */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-md p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
              ✍️ Content & Comms Storyteller
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              (Currently Filled — Stay Tuned)
            </p>
            <p className="text-gray-700 mb-6">
              Words are your superpower? You know how to keep things short,
              sharp & scroll-stopping? This role is your jam. We’ll be back with
              more openings soon — don’t ghost us 👀
            </p>
            <button className="border border-indigo-500 text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-50 transition">
              Join Our Talent Pool
            </button>
          </div>

          {/* Role 3 */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-md p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
              🎨 Creative Visualiser & Motion GFX
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              (Currently Filled — Stay Tuned)
            </p>
            <p className="text-gray-700 mb-6">
              If you see visuals even when your eyes are closed and can’t stop
              thinking in transitions, this one’s for you. Role’s filled rn, but
              magic makers like you are always on our radar.
            </p>
            <button className="border border-indigo-500 text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-50 transition">
              Join Our Talent Pool
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-4xl font-bold mb-4">🚀 Ready to Roll With Us?</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
          This isn’t just a “job” — it’s a chance to vibe, learn, and create
          work that makes noise in the digital world. Whether you’re here for an
          internship or full-time hustle, let’s make it happen.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-10 py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition">
          Apply Here
        </button>
      </section>

      {/* INTERNSHIPS */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          🎓 Internships @ Mindstorm
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Kickstart your career the Mindstorm way! 🚀 Think of our internships
          as more than just “work experience.” Here, you’ll brainstorm, create,
          and experiment with real projects that actually make an impact. Zero
          coffee runs. 100% growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 text-center">
          {[
            {
              title: "💡 Learn by Doing",
              desc: "Not just shadowing — you’ll get hands-on experience from Day 1.",
            },
            {
              title: "🎯 Mentorship That Matters",
              desc: "Learn directly from pros who’ve been there, done that.",
            },
            {
              title: "🎉 Culture That Clicks",
              desc: "Work hard, meme harder. Yes, Slack channels for that.",
            },
            {
              title: "🚀 Future-Ready",
              desc: "Many of our interns convert into full-time rockstars.",
            },
          ].map((i, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl shadow hover:shadow-xl transition"
            >
              <h4 className="font-semibold text-indigo-700 mb-2 text-lg">
                {i.title}
              </h4>
              <p className="text-gray-600 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>

        {/* Internship Openings */}
        <h3 className="text-2xl font-bold text-center mb-10">
          💸 Current Internship Openings
        </h3>
        <div className="space-y-10 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-indigo-700 mb-2">
              🚀 Performance Marketing Intern
            </h4>
            <p className="text-gray-700 mb-4">
              Love numbers, ads, and turning clicks into conversions? Join us to
              test, optimize & scale campaigns that move the needle.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold">
              Apply Now
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-indigo-700 mb-2">
              ✍️ Content & Communications Intern
            </h4>
            <p className="text-gray-500 mb-2">(Position Filled)</p>
            <p className="text-gray-700 mb-4">
              If writing captions, blogs, and scroll-stopping content feels like
              second nature — keep an eye out, we’ll be opening spots soon!
            </p>
            <button className="border border-indigo-500 text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-50">
              Join Waitlist
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-indigo-700 mb-2">
              🎨 Creative Visualiser & Motion Graphics Intern
            </h4>
            <p className="text-gray-500 mb-2">(Position Filled)</p>
            <p className="text-gray-700 mb-4">
              Got a knack for design, motion, and making ideas pop? This role’s
              taken for now — but your creativity still has a future here.
            </p>
            <button className="border border-indigo-500 text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-50">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* INTERNSHIP CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-purple-50 via-indigo-50 to-white">
        <h2 className="text-3xl font-bold mb-4">
          ⚡ Ready to Intern the Mindstorm Way?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          This is your launchpad into the digital world. Bring your ideas,
          energy, and ambition — we’ll give you the platform to shine.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-md">
          Apply for Internships
        </button>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="grid grid-cols-2 gap-6 flex-1 w-full">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition"
              >
                <div className="mb-2 text-indigo-600">{s.icon}</div>
                <h2 className="text-2xl font-bold mb-1">{s.number}</h2>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex-1 text-center lg:text-left max-w-lg">
            <h2 className="text-3xl font-bold mb-4">
              A Place Where Creativity Thrives
            </h2>
            <p className="text-gray-600 mb-4">
              At BrandSkript, we don’t just create — we innovate. Our team
              thrives on collaboration, pushing creative boundaries, and growing
              together every single day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            FAQs — All That You Need to Know About BrandSkript!
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-lg max-w-2xl mx-auto">
            Find the answers to the questions we get asked the most about our
            work policies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => toggleFAQ(i)}
              className="bg-white rounded-3xl p-5 cursor-pointer hover:bg-gray-100 transition-all border border-transparent hover:border-gray-300"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-lg">{faq.question}</h4>
                {openFAQ === i ? (
                  <Minus className="w-5 h-5 text-indigo-600" />
                ) : (
                  <Plus className="w-5 h-5 text-indigo-600" />
                )}
              </div>
              <AnimatePresence>
                {openFAQ === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 mt-2 text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Career;

import React, { useRef, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title:
      "Why Gen Z Loves Rule-Breaking Brands — and What It Means for Traditional Marketing",
    date: "7 November 2025",
    sections: [
      {
        id: "rule-breaking",
        heading: "Why Gen Z Chooses Brands That Break Rules",
        image:
          "https://cdn.pixabay.com/photo/2017/06/10/07/23/social-2380836_1280.png",
        content: `
It's pretty clear by now that Gen Z marketing strategies have completely flipped the old rulebook upside down. Paid ads today don’t look like ads anymore—they look like inside jokes, raw confessions, or trend-jacking memes that somehow sell sneakers or skincare at the same time.
The more a brand breaks the rules, the more Gen Z leans in instead of tuning out. 62% of Gen Z say they prefer brands that produce authentic and relatable content. It's messy, honest, and definitely unpredictable—and that's exactly why it works.
        `,
      },
      {
        id: "modern-brands",
        heading: "Why Modern Brands Prioritize Gen Z Audiences More",
        image:
          "https://cdn.pixabay.com/photo/2020/03/07/16/48/brand-4912820_1280.jpg",
        content: `
The world’s biggest brands aren’t guessing anymore; they’re studying Gen Z consumer behavior like it’s a new language. Brands that oversell or sugarcoat lose credibility fast. What works instead is being real—even a little chaotic.
This group doesn’t just buy based on ads; they buy into values, memes, and emotional storytelling. 76% of Gen Z say they actively avoid ads, while 60% only buy from brands that reflect their personal values.
        `,
      },
      {
        id: "unscripted-creativity",
        heading:
          "The Rise of Unscripted Creativity That Breaks Old Advertising Boundaries",
        image:
          "https://cdn.pixabay.com/photo/2017/06/29/01/22/people-2457318_1280.jpg",
        content: `
Every scroll feels like a choice, and Gen Z skips anything that looks overly polished or staged. Rule-breaking brands know that shaky handheld shots, accidental laughs, or lo-fi transitions feel almost comforting—because they mirror how Gen Z communicates online every day.
As Gen Z trends keep evolving, breaking rules isn’t optional—it’s survival.
        `,
      },
    ],
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  if (!blog)
    return (
      <div className="text-center py-20 text-gray-600">Blog not found</div>
    );

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row py-10 md:py-16 px-4 sm:px-6 lg:px-8 gap-10">
      {/* ===== MAIN CONTENT ===== */}
      <article className="flex-1">
        <header className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            {blog.title}
          </h1>
          <p className="text-gray-500 text-sm">{blog.date}</p>
        </header>

        {blog.sections.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            ref={(el) => (sectionRefs.current[sec.id] = el)}
            className="mb-16 scroll-mt-24"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
              {sec.heading}
            </h2>
            <img
              src={sec.image}
              alt={sec.heading}
              className="rounded-lg w-full h-56 sm:h-64 md:h-72 object-cover mb-6 shadow-md"
            />
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 whitespace-pre-line">
              {sec.content.trim()}
            </p>
          </section>
        ))}

        {/* ===== GEN Z COMPARISON ===== */}
        <section
          id="genz-comparison"
          ref={(el) => (sectionRefs.current["genz-comparison"] = el)}
          className="mt-20 bg-gray-50 rounded-3xl p-6 sm:p-10 shadow-sm scroll-mt-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Comparing Traditional Marketing To New Gen Z–Focused Strategies In Action
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              {
                src: "https://cdn.pixabay.com/photo/2023/03/20/15/23/marketing-7864247_1280.jpg",
                label: "Bite-Sized Stories Win",
              },
              {
                src: "https://cdn.pixabay.com/photo/2021/03/08/13/01/social-media-6078722_1280.jpg",
                label: "Real Feels Better",
              },
              {
                src: "https://cdn.pixabay.com/photo/2020/09/09/14/47/online-5552322_1280.jpg",
                label: "Connection Over Perfection",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl shadow-sm w-64 sm:w-72 text-center"
              >
                <img src={item.src} alt={item.label} className="rounded-lg mb-4" />
                <p className="font-semibold text-indigo-600">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-left text-sm sm:text-base text-gray-700">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-4 sm:px-6 py-3">
                    Traditional Marketing Traits
                  </th>
                  <th className="px-4 sm:px-6 py-3">Gen Z Marketing Trends</th>
                  <th className="px-4 sm:px-6 py-3">Why It Works Now</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 sm:px-6 py-3">Highly polished production</td>
                  <td className="px-4 sm:px-6 py-3">Raw, lo-fi, real-time videos</td>
                  <td className="px-4 sm:px-6 py-3">Feels human and relatable</td>
                </tr>
                <tr>
                  <td className="px-4 sm:px-6 py-3">Scripted storytelling</td>
                  <td className="px-4 sm:px-6 py-3">
                    Conversational and emotional
                  </td>
                  <td className="px-4 sm:px-6 py-3">
                    Builds authenticity and trust
                  </td>
                </tr>
                <tr>
                  <td className="px-4 sm:px-6 py-3">Long campaigns and shoots</td>
                  <td className="px-4 sm:px-6 py-3">Rapid trend-based iterations</td>
                  <td className="px-4 sm:px-6 py-3">
                    Keeps pace with short attention spans
                  </td>
                </tr>
                <tr>
                  <td className="px-4 sm:px-6 py-3">Static brand voice</td>
                  <td className="px-4 sm:px-6 py-3">Creator-led collaboration</td>
                  <td className="px-4 sm:px-6 py-3">
                    Fosters community participation
                  </td>
                </tr>
                <tr>
                  <td className="px-4 sm:px-6 py-3">Product-driven messaging</td>
                  <td className="px-4 sm:px-6 py-3">Value-first narratives</td>
                  <td className="px-4 sm:px-6 py-3">
                    Connects emotionally, not just logically
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section
          id="faq"
          ref={(el) => (sectionRefs.current["faq"] = el)}
          className="mt-20 bg-gray-50 rounded-3xl p-6 sm:p-10 shadow-sm scroll-mt-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <p className="font-semibold text-gray-900 mb-2">
                How can brands personalize marketing for Gen Z?
              </p>
              <p>
                Brands use data and AI to craft personalized content and
                interactive experiences that match Gen Z consumer behavior,
                creating real relevance and deeper connections.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">
                What platforms reach Gen Z best?
              </p>
              <p>
                The top platforms are TikTok, Instagram Reels, YouTube Shorts,
                and Snapchat — all optimized for short-form, mobile-first
                storytelling that aligns with Gen Z brand preferences.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">
                Why is authenticity key for Gen Z marketing?
              </p>
              <p>
                Gen Z seeks authenticity and transparency. Genuine stories build
                trust and brand loyalty — essential for marketing success today.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">
                Why use ShortVids for marketing videos?
              </p>
              <p>
                ShortVids creates fast, authentic videos that match rule-breaking
                Gen Z marketing trends — boosting engagement and genuine
                connections.
              </p>
            </div>
          </div>
        </section>

        {/* ===== BOOK A CALL ===== */}
        <section
          id="book-call"
          ref={(el) => (sectionRefs.current["book-call"] = el)}
          className="mt-20 scroll-mt-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Book a Call Today
          </h2>

          <div className="bg-indigo-50 rounded-2xl p-6 sm:p-10 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Fixed monthly plans starting at $999</li>
                <li>24-hour turnaround time on all short-form edits</li>
                <li>3-layer quality check system for every video</li>
                <li>No freelancers — a fully managed team</li>
                <li>
                  Content team trained on platform trends & storytelling
                </li>
                <li>Response time: under 1 hour (US & GCC zones)</li>
              </ul>
              <p className="mt-6 font-medium text-gray-900">
                Cut your production costs, not your standards.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                A Dedicated Team — At Your Service
              </h3>
              <div className="flex justify-center gap-4 mb-4 flex-wrap">
                <div className="px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg text-sm">
                  🎬 Video Editing
                </div>
                <div className="px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg text-sm">
                  ✍️ Script Writer
                </div>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white font-medium py-3 rounded-xl hover:bg-indigo-700 transition">
                Book a Call →
              </button>
            </div>
          </div>
        </section>

        {/* ===== BACK TO BLOGS ===== */}
        <div className="mt-16 text-center">
          <Link
            to="/blog"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-indigo-600 hover:text-indigo-800 font-medium underline"
          >
            ← Back to Blogs
          </Link>

        </div>
      </article>

      {/* ===== SIDEBAR ===== */}
      <aside className="lg:w-80 sticky top-24 self-start hidden lg:block">
        <div className="border-l-2 border-gray-200 pl-6">
          <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">
            Table of Contents
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            {[
              ...blog.sections.map((s) => ({
                id: s.id,
                label: s.heading,
              })),
              { id: "genz-comparison", label: "Gen Z Marketing Comparison" },
              { id: "faq", label: "Frequently Asked Questions" },
              { id: "book-call", label: "Book a Call Today" },
            ].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`block transition-colors ${activeSection === link.id
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 mb-6">
          <img
            src="/ffafeb17-e6b6-4851-9e83-09823179b7f8.png"
            alt="Sidebar illustration"
            className="rounded-xl mb-4"
          />
          <p className="font-medium text-gray-900 text-center">
            Have more questions?
          </p>
          <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg text-sm hover:bg-indigo-700">
            Book Now
          </button>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6 text-center shadow-sm">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Have more questions?
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            Hurry up and book a call now
          </p>
          <a
            href="https://shortvids.co/book-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >
            Book Now
          </a>
        </div>
      </aside>
    </div>
  );
};

export default BlogDetails;

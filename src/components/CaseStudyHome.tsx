import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const caseStudies = [
  {
    id: 1,
    image: "https://shortvids.co/wp-content/uploads/2025/09/fetaure.jpg",
    title: "Why Namami Inc. Trusts ShortVids",
    subtitle: "As Their Extended Creative Team",
    date: "1 September 2025",
    comments: "No Comments",
    description:
      "Digital marketing agencies today know that Video Content is crucial to reaching audiences and growing businesses. Namami, a strong player in development and marketing.",
  },
  {
    id: 2,
    image: "https://shortvids.co/wp-content/uploads/2025/07/super-dupe-fetaure-superdupe-x-shortvids.jpg",
    title: "How SuperDupe Scaled AI-Generated Videos",
    subtitle: "With ShortVids",
    date: "3 July 2025",
    comments: "No Comments",
    description:
      "Tenure of Project: Ongoing. No. Of Creatives Done: 15+. Client Background: SuperDupe is a leading AI company based in Los Angeles, California, that creates realistic generative content.",
  },
  {
    id: 3,
    image: "https://shortvids.co/wp-content/uploads/2025/06/codyblundell-fetaure1.jpg",
    title: "How Cody Blundell Grows His Brand & PARAFLIX",
    subtitle: "Using ShortVids Video Content",
    date: "21 June 2025",
    comments: "No Comments",
    description:
      "Tenure of Project: Ongoing. No. Of Creatives Done: 60+. Cody Blundell is a full-time content creator and kids show expert behind multiple brands.",
  },
];

const CaseStudyHome = () => {
  useEffect(() => {
     window.scrollTo(0, 0); // 🔥 Page opens from top
    AOS.init({ duration: 700, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      className="bg-gray-50 py-20"
      style={{ background: "linear-gradient(to bottom, #f9fafb, #fff)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          style={{
            fontFamily: "var(--h2-font-family)",
            color: "var(--h2-color)",
          }}
          className="text-center text-3xl sm:text-4xl font-semibold text-gray-800 mb-12"
          data-aos="fade-up"
        >
          Our <span className="text-yellow-500">Case Study</span>
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {study.date} / {study.comments}
                </p>
                <h4 className="text-base font-medium text-gray-800 mb-3">
                  {study.subtitle}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {study.description}
                </p>
                <Link
                  to={`/case-details-home/${study.id}`}
                  className="inline-block text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300"
                >
                  Read More »
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHome;

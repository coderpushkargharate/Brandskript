import React from "react";

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

const CaseStudy = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-gray-800 mb-12">
          Our <span className="text-yellow-500">Case Study</span>
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {study.date} / {study.comments}
                </p>
                <h4 className="text-base font-medium text-gray-800 mb-2">
                  {study.subtitle}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                <a
                  href={`/case-study/${study.id}`}
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Read More »
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;

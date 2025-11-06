import React from "react";
import { useParams, Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title:
      "How Namami Inc. Is Using ShortVids As Their Extended Creative Partner",
    date: "1 September 2025",
    image: "https://i.ibb.co/2qVBYwG/case1.png",
    content: `
      Namami Inc. partnered with ShortVids to enhance their creative content
      production and build stronger engagement across social platforms. With
      ShortVids’ professional video editors, Namami achieved higher ROI and
      client satisfaction. Their partnership demonstrates the impact of combining
      strategic creativity with fast and efficient video production services.
    `,
  },
  {
    id: 2,
    title: "How SuperDupe Scaled AI-Generated Videos with ShortVids",
    date: "31 July 2025",
    image: "https://i.ibb.co/3v3ps0Y/case2.png",
    content: `
      SuperDupe leveraged ShortVids' advanced editing tools to integrate
      AI-generated visuals seamlessly into branded campaigns. This resulted in
      faster turnaround times, higher audience retention, and measurable growth.
      The partnership showcases how brands can combine AI with creativity for
      exceptional storytelling.
    `,
  },
  {
    id: 3,
    title:
      "How Cody Blundell Grows His Personal Brand & PARAFLIX with ShortVids",
    date: "21 June 2025",
    image: "https://i.ibb.co/zZX5KyM/case3.png",
    content: `
      Cody Blundell collaborated with ShortVids to enhance his personal
      storytelling through short-form videos. This case study explores how
      creators can scale content efficiently using professional editing support.
      The collaboration helped Cody boost his reach and brand presence through
      consistent, high-quality content delivery.
    `,
  },
];

const CaseStudyDetail = () => {
  const { id } = useParams();
  const caseItem = caseStudies.find((b) => b.id === parseInt(id));

  if (!caseItem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700">
          Case Study not found!
        </h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 sm:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Image */}
        <img
          src={caseItem.image}
          alt={caseItem.title}
          className="w-full h-80 object-cover"
        />

        {/* Content */}
        <div className="p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            {caseItem.title}
          </h2>
          <p className="text-sm text-gray-500 mb-6">{caseItem.date}</p>
          <p className="text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
            {caseItem.content}
          </p>

          {/* Back Button */}
          <Link
            to="/case-study"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetail;

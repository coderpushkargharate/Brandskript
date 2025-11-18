import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title:
      "ShortVids vs. Irisbits: Which Unlimited Video Editing Service Delivers More?",
    date: "30 October 2025",
    banner:
      "https://shortvids.co/wp-content/uploads/2025/05/ShortVids-vs-Irisbits-Comparison-Banner.jpg",
    intro: `
Both ShortVids and Irisbits claim to offer unlimited video editing subscriptions — but when it comes to real-world delivery, speed, and creative output, the experience differs significantly.`,
    table: {
      headers: [
        "Features",
        "Irisbits – $395/month",
        "ShortVids StartUp – $999/month",
      ],
      rows: [
        ["Video Editing & Graphic Design", "Yes", "Yes (Video Focused)"],
        [
          "Unlimited Requests & Revisions",
          "Yes (1 active task at a time)",
          "Yes (1 active task at a time)",
        ],
        ["Turnaround Time", "1–2 business days", "24–36 hours or less"],
        ["Work Days", "Monday to Friday", "24/7 Team Support"],
        ["Raw Footage Limit", "Unlimited", "Unlimited"],
        ["Export Sizes", "Multiple formats", "Multiple formats"],
        ["Music and Stock Assets", "Premium + Royalty-Free", "Included"],
        ["Brands Supported", "Unlimited", "Single brand (on startup plan)"],
        ["Video Styles", "Standard", "10+ Available"],
      ],
    },
    sections: [
      {
        heading: "Turnaround Time",
        text: `ShortVids operates 24/7, with average delivery within 24–36 hours — ideal for content creators needing consistent posting schedules. Irisbits follows a more traditional 1–2 business day cycle.`,
      },
      {
        heading: "Support and Collaboration",
        text: `ShortVids uses Slack and WhatsApp for real-time communication, enabling instant creative feedback. Irisbits limits contact to email support, which can delay creative discussions.`,
      },
      {
        heading: "Final Verdict",
        text: `ShortVids is designed for brands that value speed, creative excellence, and full-time reliability. Irisbits remains suitable for smaller teams needing budget-friendly options, but ShortVids offers a premium experience.`,
      },
    ],
    faqs: [
      {
        q: "Is Irisbits truly an unlimited video editing service if only one active task is allowed?",
        a: "While Irisbits offers unlimited video editing requests, it restricts users to one active task at a time. This queue system can slow down your workflow.",
      },
      {
        q: "Why is ShortVids a better unlimited video editing service for agencies?",
        a: "ShortVids supports faster turnaround times, 24/7 support, and multiple simultaneous editing tasks making it ideal for agencies.",
      },
      {
        q: "How fast is ShortVids’ video editing turnaround?",
        a: "ShortVids delivers most video edits within 24 hours (including weekends).",
      },
      {
        q: "Is ShortVids cost-effective?",
        a: "ShortVids is cost-effective for medium to large content volumes thanks to its 24/7 team and fast turnaround.",
      },
    ],
  },


   {
    id: 2,
    title:
      "ShortVids vs. Irisbits: Which Unlimited Video Editing Service Delivers More?",
    date: "30 October 2025",
    banner:
      "https://shortvids.co/wp-content/uploads/2025/05/ShortVids-vs-Irisbits-Comparison-Banner.jpg",
    intro: `
Both ShortVids and Irisbits claim to offer unlimited video editing subscriptions — but when it comes to real-world delivery, speed, and creative output, the experience differs significantly.`,
    table: {
      headers: [
        "Features",
        "Irisbits – $395/month",
        "ShortVids StartUp – $999/month",
      ],
      rows: [
        ["Video Editing & Graphic Design", "Yes", "Yes (Video Focused)"],
        [
          "Unlimited Requests & Revisions",
          "Yes (1 active task at a time)",
          "Yes (1 active task at a time)",
        ],
        ["Turnaround Time", "1–2 business days", "24–36 hours or less"],
        ["Work Days", "Monday to Friday", "24/7 Team Support"],
        ["Raw Footage Limit", "Unlimited", "Unlimited"],
        ["Export Sizes", "Multiple formats", "Multiple formats"],
        ["Music and Stock Assets", "Premium + Royalty-Free", "Included"],
        ["Brands Supported", "Unlimited", "Single brand (on startup plan)"],
        ["Video Styles", "Standard", "10+ Available"],
      ],
    },
    sections: [
      {
        heading: "Turnaround Time",
        text: `ShortVids operates 24/7, with average delivery within 24–36 hours — ideal for content creators needing consistent posting schedules. Irisbits follows a more traditional 1–2 business day cycle.`,
      },
      {
        heading: "Support and Collaboration",
        text: `ShortVids uses Slack and WhatsApp for real-time communication, enabling instant creative feedback. Irisbits limits contact to email support, which can delay creative discussions.`,
      },
      {
        heading: "Final Verdict",
        text: `ShortVids is designed for brands that value speed, creative excellence, and full-time reliability. Irisbits remains suitable for smaller teams needing budget-friendly options, but ShortVids offers a premium experience.`,
      },
    ],
    faqs: [
      {
        q: "Is Irisbits truly an unlimited video editing service if only one active task is allowed?",
        a: "While Irisbits offers unlimited video editing requests, it restricts users to one active task at a time. This queue system can slow down your workflow.",
      },
      {
        q: "Why is ShortVids a better unlimited video editing service for agencies?",
        a: "ShortVids supports faster turnaround times, 24/7 support, and multiple simultaneous editing tasks making it ideal for agencies.",
      },
      {
        q: "How fast is ShortVids’ video editing turnaround?",
        a: "ShortVids delivers most video edits within 24 hours (including weekends).",
      },
      {
        q: "Is ShortVids cost-effective?",
        a: "ShortVids is cost-effective for medium to large content volumes thanks to its 24/7 team and fast turnaround.",
      },
    ],
  },


   {
    id: 3,
    title:
      "ShortVids vs. Irisbits: Which Unlimited Video Editing Service Delivers More?",
    date: "30 October 2025",
    banner:
      "https://shortvids.co/wp-content/uploads/2025/05/ShortVids-vs-Irisbits-Comparison-Banner.jpg",
    intro: `
Both ShortVids and Irisbits claim to offer unlimited video editing subscriptions — but when it comes to real-world delivery, speed, and creative output, the experience differs significantly.`,
    table: {
      headers: [
        "Features",
        "Irisbits – $395/month",
        "ShortVids StartUp – $999/month",
      ],
      rows: [
        ["Video Editing & Graphic Design", "Yes", "Yes (Video Focused)"],
        [
          "Unlimited Requests & Revisions",
          "Yes (1 active task at a time)",
          "Yes (1 active task at a time)",
        ],
        ["Turnaround Time", "1–2 business days", "24–36 hours or less"],
        ["Work Days", "Monday to Friday", "24/7 Team Support"],
        ["Raw Footage Limit", "Unlimited", "Unlimited"],
        ["Export Sizes", "Multiple formats", "Multiple formats"],
        ["Music and Stock Assets", "Premium + Royalty-Free", "Included"],
        ["Brands Supported", "Unlimited", "Single brand (on startup plan)"],
        ["Video Styles", "Standard", "10+ Available"],
      ],
    },
    sections: [
      {
        heading: "Turnaround Time",
        text: `ShortVids operates 24/7, with average delivery within 24–36 hours — ideal for content creators needing consistent posting schedules. Irisbits follows a more traditional 1–2 business day cycle.`,
      },
      {
        heading: "Support and Collaboration",
        text: `ShortVids uses Slack and WhatsApp for real-time communication, enabling instant creative feedback. Irisbits limits contact to email support, which can delay creative discussions.`,
      },
      {
        heading: "Final Verdict",
        text: `ShortVids is designed for brands that value speed, creative excellence, and full-time reliability. Irisbits remains suitable for smaller teams needing budget-friendly options, but ShortVids offers a premium experience.`,
      },
    ],
    faqs: [
      {
        q: "Is Irisbits truly an unlimited video editing service if only one active task is allowed?",
        a: "While Irisbits offers unlimited video editing requests, it restricts users to one active task at a time. This queue system can slow down your workflow.",
      },
      {
        q: "Why is ShortVids a better unlimited video editing service for agencies?",
        a: "ShortVids supports faster turnaround times, 24/7 support, and multiple simultaneous editing tasks making it ideal for agencies.",
      },
      {
        q: "How fast is ShortVids’ video editing turnaround?",
        a: "ShortVids delivers most video edits within 24 hours (including weekends).",
      },
      {
        q: "Is ShortVids cost-effective?",
        a: "ShortVids is cost-effective for medium to large content volumes thanks to its 24/7 team and fast turnaround.",
      },
    ],
  },

  {
    id: 4,
    title:
      "ShortVids vs. Irisbits: Which Unlimited Video Editing Service Delivers More?",
    date: "30 October 2025",
    banner:
      "https://shortvids.co/wp-content/uploads/2025/05/ShortVids-vs-Irisbits-Comparison-Banner.jpg",
    intro: `
Both ShortVids and Irisbits claim to offer unlimited video editing subscriptions — but when it comes to real-world delivery, speed, and creative output, the experience differs significantly.`,
    table: {
      headers: [
        "Features",
        "Irisbits – $395/month",
        "ShortVids StartUp – $999/month",
      ],
      rows: [
        ["Video Editing & Graphic Design", "Yes", "Yes (Video Focused)"],
        [
          "Unlimited Requests & Revisions",
          "Yes (1 active task at a time)",
          "Yes (1 active task at a time)",
        ],
        ["Turnaround Time", "1–2 business days", "24–36 hours or less"],
        ["Work Days", "Monday to Friday", "24/7 Team Support"],
        ["Raw Footage Limit", "Unlimited", "Unlimited"],
        ["Export Sizes", "Multiple formats", "Multiple formats"],
        ["Music and Stock Assets", "Premium + Royalty-Free", "Included"],
        ["Brands Supported", "Unlimited", "Single brand (on startup plan)"],
        ["Video Styles", "Standard", "10+ Available"],
      ],
    },
    sections: [
      {
        heading: "Turnaround Time",
        text: `ShortVids operates 24/7, with average delivery within 24–36 hours — ideal for content creators needing consistent posting schedules. Irisbits follows a more traditional 1–2 business day cycle.`,
      },
      {
        heading: "Support and Collaboration",
        text: `ShortVids uses Slack and WhatsApp for real-time communication, enabling instant creative feedback. Irisbits limits contact to email support, which can delay creative discussions.`,
      },
      {
        heading: "Final Verdict",
        text: `ShortVids is designed for brands that value speed, creative excellence, and full-time reliability. Irisbits remains suitable for smaller teams needing budget-friendly options, but ShortVids offers a premium experience.`,
      },
    ],
    faqs: [
      {
        q: "Is Irisbits truly an unlimited video editing service if only one active task is allowed?",
        a: "While Irisbits offers unlimited video editing requests, it restricts users to one active task at a time. This queue system can slow down your workflow.",
      },
      {
        q: "Why is ShortVids a better unlimited video editing service for agencies?",
        a: "ShortVids supports faster turnaround times, 24/7 support, and multiple simultaneous editing tasks making it ideal for agencies.",
      },
      {
        q: "How fast is ShortVids’ video editing turnaround?",
        a: "ShortVids delivers most video edits within 24 hours (including weekends).",
      },
      {
        q: "Is ShortVids cost-effective?",
        a: "ShortVids is cost-effective for medium to large content volumes thanks to its 24/7 team and fast turnaround.",
      },
    ],
  },

    {
    id: 5,
    title:
      "ShortVids vs. Irisbits: Which Unlimited Video Editing Service Delivers More?",
    date: "30 October 2025",
    banner:
      "https://shortvids.co/wp-content/uploads/2025/05/ShortVids-vs-Irisbits-Comparison-Banner.jpg",
    intro: `
Both ShortVids and Irisbits claim to offer unlimited video editing subscriptions — but when it comes to real-world delivery, speed, and creative output, the experience differs significantly.`,
    table: {
      headers: [
        "Features",
        "Irisbits – $395/month",
        "ShortVids StartUp – $999/month",
      ],
      rows: [
        ["Video Editing & Graphic Design", "Yes", "Yes (Video Focused)"],
        [
          "Unlimited Requests & Revisions",
          "Yes (1 active task at a time)",
          "Yes (1 active task at a time)",
        ],
        ["Turnaround Time", "1–2 business days", "24–36 hours or less"],
        ["Work Days", "Monday to Friday", "24/7 Team Support"],
        ["Raw Footage Limit", "Unlimited", "Unlimited"],
        ["Export Sizes", "Multiple formats", "Multiple formats"],
        ["Music and Stock Assets", "Premium + Royalty-Free", "Included"],
        ["Brands Supported", "Unlimited", "Single brand (on startup plan)"],
        ["Video Styles", "Standard", "10+ Available"],
      ],
    },
    sections: [
      {
        heading: "Turnaround Time",
        text: `ShortVids operates 24/7, with average delivery within 24–36 hours — ideal for content creators needing consistent posting schedules. Irisbits follows a more traditional 1–2 business day cycle.`,
      },
      {
        heading: "Support and Collaboration",
        text: `ShortVids uses Slack and WhatsApp for real-time communication, enabling instant creative feedback. Irisbits limits contact to email support, which can delay creative discussions.`,
      },
      {
        heading: "Final Verdict",
        text: `ShortVids is designed for brands that value speed, creative excellence, and full-time reliability. Irisbits remains suitable for smaller teams needing budget-friendly options, but ShortVids offers a premium experience.`,
      },
    ],
    faqs: [
      {
        q: "Is Irisbits truly an unlimited video editing service if only one active task is allowed?",
        a: "While Irisbits offers unlimited video editing requests, it restricts users to one active task at a time. This queue system can slow down your workflow.",
      },
      {
        q: "Why is ShortVids a better unlimited video editing service for agencies?",
        a: "ShortVids supports faster turnaround times, 24/7 support, and multiple simultaneous editing tasks making it ideal for agencies.",
      },
      {
        q: "How fast is ShortVids’ video editing turnaround?",
        a: "ShortVids delivers most video edits within 24 hours (including weekends).",
      },
      {
        q: "Is ShortVids cost-effective?",
        a: "ShortVids is cost-effective for medium to large content volumes thanks to its 24/7 team and fast turnaround.",
      },
    ],
  },

    {
    id: 6,
    title:
      "ShortVids vs. Irisbits: Which Unlimited Video Editing Service Delivers More?",
    date: "30 October 2025",
    banner:
      "https://shortvids.co/wp-content/uploads/2025/05/ShortVids-vs-Irisbits-Comparison-Banner.jpg",
    intro: `
Both ShortVids and Irisbits claim to offer unlimited video editing subscriptions — but when it comes to real-world delivery, speed, and creative output, the experience differs significantly.`,
    table: {
      headers: [
        "Features",
        "Irisbits – $395/month",
        "ShortVids StartUp – $999/month",
      ],
      rows: [
        ["Video Editing & Graphic Design", "Yes", "Yes (Video Focused)"],
        [
          "Unlimited Requests & Revisions",
          "Yes (1 active task at a time)",
          "Yes (1 active task at a time)",
        ],
        ["Turnaround Time", "1–2 business days", "24–36 hours or less"],
        ["Work Days", "Monday to Friday", "24/7 Team Support"],
        ["Raw Footage Limit", "Unlimited", "Unlimited"],
        ["Export Sizes", "Multiple formats", "Multiple formats"],
        ["Music and Stock Assets", "Premium + Royalty-Free", "Included"],
        ["Brands Supported", "Unlimited", "Single brand (on startup plan)"],
        ["Video Styles", "Standard", "10+ Available"],
      ],
    },
    sections: [
      {
        heading: "Turnaround Time",
        text: `ShortVids operates 24/7, with average delivery within 24–36 hours — ideal for content creators needing consistent posting schedules. Irisbits follows a more traditional 1–2 business day cycle.`,
      },
      {
        heading: "Support and Collaboration",
        text: `ShortVids uses Slack and WhatsApp for real-time communication, enabling instant creative feedback. Irisbits limits contact to email support, which can delay creative discussions.`,
      },
      {
        heading: "Final Verdict",
        text: `ShortVids is designed for brands that value speed, creative excellence, and full-time reliability. Irisbits remains suitable for smaller teams needing budget-friendly options, but ShortVids offers a premium experience.`,
      },
    ],
    faqs: [
      {
        q: "Is Irisbits truly an unlimited video editing service if only one active task is allowed?",
        a: "While Irisbits offers unlimited video editing requests, it restricts users to one active task at a time. This queue system can slow down your workflow.",
      },
      {
        q: "Why is ShortVids a better unlimited video editing service for agencies?",
        a: "ShortVids supports faster turnaround times, 24/7 support, and multiple simultaneous editing tasks making it ideal for agencies.",
      },
      {
        q: "How fast is ShortVids’ video editing turnaround?",
        a: "ShortVids delivers most video edits within 24 hours (including weekends).",
      },
      {
        q: "Is ShortVids cost-effective?",
        a: "ShortVids is cost-effective for medium to large content volumes thanks to its 24/7 team and fast turnaround.",
      },
    ],
  },

    {
    id: 7,
    title:
      "ShortVids vs. Irisbits: Which Unlimited Video Editing Service Delivers More?",
    date: "30 October 2025",
    banner:
      "https://shortvids.co/wp-content/uploads/2025/05/ShortVids-vs-Irisbits-Comparison-Banner.jpg",
    intro: `
Both ShortVids and Irisbits claim to offer unlimited video editing subscriptions — but when it comes to real-world delivery, speed, and creative output, the experience differs significantly.`,
    table: {
      headers: [
        "Features",
        "Irisbits – $395/month",
        "ShortVids StartUp – $999/month",
      ],
      rows: [
        ["Video Editing & Graphic Design", "Yes", "Yes (Video Focused)"],
        [
          "Unlimited Requests & Revisions",
          "Yes (1 active task at a time)",
          "Yes (1 active task at a time)",
        ],
        ["Turnaround Time", "1–2 business days", "24–36 hours or less"],
        ["Work Days", "Monday to Friday", "24/7 Team Support"],
        ["Raw Footage Limit", "Unlimited", "Unlimited"],
        ["Export Sizes", "Multiple formats", "Multiple formats"],
        ["Music and Stock Assets", "Premium + Royalty-Free", "Included"],
        ["Brands Supported", "Unlimited", "Single brand (on startup plan)"],
        ["Video Styles", "Standard", "10+ Available"],
      ],
    },
    sections: [
      {
        heading: "Turnaround Time",
        text: `ShortVids operates 24/7, with average delivery within 24–36 hours — ideal for content creators needing consistent posting schedules. Irisbits follows a more traditional 1–2 business day cycle.`,
      },
      {
        heading: "Support and Collaboration",
        text: `ShortVids uses Slack and WhatsApp for real-time communication, enabling instant creative feedback. Irisbits limits contact to email support, which can delay creative discussions.`,
      },
      {
        heading: "Final Verdict",
        text: `ShortVids is designed for brands that value speed, creative excellence, and full-time reliability. Irisbits remains suitable for smaller teams needing budget-friendly options, but ShortVids offers a premium experience.`,
      },
    ],
    faqs: [
      {
        q: "Is Irisbits truly an unlimited video editing service if only one active task is allowed?",
        a: "While Irisbits offers unlimited video editing requests, it restricts users to one active task at a time. This queue system can slow down your workflow.",
      },
      {
        q: "Why is ShortVids a better unlimited video editing service for agencies?",
        a: "ShortVids supports faster turnaround times, 24/7 support, and multiple simultaneous editing tasks making it ideal for agencies.",
      },
      {
        q: "How fast is ShortVids’ video editing turnaround?",
        a: "ShortVids delivers most video edits within 24 hours (including weekends).",
      },
      {
        q: "Is ShortVids cost-effective?",
        a: "ShortVids is cost-effective for medium to large content volumes thanks to its 24/7 team and fast turnaround.",
      },
    ],
  },



  // Duplicate objects for demo (id:2,3,5,6)
  // Keep same structure as ID 1
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id || ""));
  const [openIndex, setOpenIndex] = useState(null);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 px-6 py-16">
         {/* SIDEBAR */}
        <aside className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            More Articles
          </h3>

          {blogs
            .filter((b) => b.id !== blog.id)
            .slice(0, 4)
            .map((item) => (
              <Link
                key={item.id}
                to={`/blogs/${item.id}`}
                className="block border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.date}</p>
              </Link>
            ))}
        </aside>
        {/* MAIN ARTICLE */}
        <article className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-snug">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500 mb-8">{blog.date}</p>

          {blog.banner && (
            <div className="rounded-xl overflow-hidden shadow-md mb-10">
              <img
                src={blog.banner}
                alt={blog.title}
                className="w-full h-72 object-cover"
              />
            </div>
          )}

          <p className="text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
            {blog.intro}
          </p>

          {/* TABLE */}
          <div className="overflow-x-auto mb-10 border border-gray-200 rounded-xl shadow-sm">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-800 font-semibold">
                <tr>
                  {blog.table.headers.map((header, i) => (
                    <th key={i} className="px-4 py-3 border-b">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {blog.table.rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } border-b`}
                  >
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-gray-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SECTIONS */}
          {blog.sections.map((section, i) => (
            <div key={i} className="mb-10">
              <h2
                style={{
                  fontFamily: "var(--h2-font-family)",
                  color: "var(--h2-color)",
                }}
                className="text-2xl font-semibold mb-3"
              >
                {section.heading}
              </h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            </div>
          ))}

          {/* FAQ */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {blog.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-lg font-medium"
                  >
                    {faq.q}
                    <span className="text-xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {openIndex === index && (
                    <div className="px-5 pb-4 text-gray-700 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>

       
      </div>
    </div>
  );
};

export default BlogDetails;

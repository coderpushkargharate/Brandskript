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
                a: "While Irisbits offers unlimited video editing requests, it restricts users to one active task at a time. This queue system can slow down your workflow, especially if you need to manage multiple video projects simultaneously.",
            },
            {
                q: "Why is ShortVids a better unlimited video editing service for agencies than Irisbits?",
                a: "ShortVids supports faster turnaround times, 24/7 support, and multiple simultaneous editing tasks making it ideal for agencies and businesses scaling video content. Irisbits is better suited for low-volume creators.",
            },
            {
                q: "How fast is ShortVids’ video editing turnaround compared to Irisbits?",
                a: "ShortVids delivers most video edits within 24 hours, including weekends, whereas Irisbits operates only on weekdays with a 1–2 business day turnaround. This makes ShortVids more reliable for content needs.",
            },
            {
                q: "Is ShortVids cost–effective for small video content creators compared to Irisbits?",
                a: "For creators with minimal editing needs, Irisbits may appear cheaper upfront but has slower delivery. ShortVids becomes cost-effective for medium to large volumes of video editing, thanks to its 24/7 team and multiple active tasks.",
            },
        ],
    },
    // 🆕 You can easily add more blog objects below for other pages
];

const BlogDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const blog = blogs.find((b) => b.id === parseInt(id || ""));
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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

                    {/* Comparison Table */}
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
                                        className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"
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
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                {section.heading}
                            </h2>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {section.text}
                            </p>
                        </div>
                    ))}

                    {/* FAQ ACCORDION */}
                    <section className="bg-gray-50 rounded-2xl shadow-sm p-8 mb-20">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {blog.faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="border border-gray-200 rounded-xl bg-white shadow-sm transition"
                                >
                                    <button
                                        className="w-full flex justify-between items-center px-6 py-4 text-left"
                                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    >
                                        <span className="font-medium text-gray-900 text-lg">
                                            {i + 1}. {faq.q}
                                        </span>
                                        <span className="text-blue-600 text-2xl font-bold">
                                            {openIndex === i ? "−" : "+"}
                                        </span>
                                    </button>
                                    {openIndex === i && (
                                        <div className="px-6 pb-5 text-gray-700 border-t border-gray-100">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </article>

                {/* SIDEBAR */}
                <aside className="lg:col-span-1 pl-6">
                    <div className="sticky top-24">
                        {/* Sidebar Image */}
                        <div className="mb-6">
                            <img
                                src="https://shortvids.co/wp-content/uploads/2025/05/ShortVids-vs-Irisbits-Comparison-Banner.jpg"
                                alt="Sidebar Banner"
                                className="rounded-xl shadow-md w-full object-cover"
                            />
                        </div>

                        {/* CTA BOX */}
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

                        {/* RELATED BLOGS */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Related Blogs
                        </h3>
                        <ul className="space-y-3">
                            {blogs.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        to={`/blogdetails/${item.id}`}
                                        className={`block text-sm text-gray-600 hover:text-blue-600 transition ${item.id === parseInt(id || "")
                                            ? "font-semibold text-blue-600"
                                            : ""
                                            }`}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* BACK LINK */}
                <div className="mt-12 mb-16">
                    <Link
                        to="/comparisonsection"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

                        className="inline-block px-5 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition"
                    >
                        ← Back to Blogs
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default BlogDetails;

import React from "react";
import { Search, CheckCircle, Settings, CreditCard, Book, Users, Receipt } from "lucide-react";

const HelpCenter = () => {
  const sections = [
    {
      icon: <CheckCircle className="text-green-600 w-6 h-6" />,
      title: "Getting Started",
      desc: "A collection of resources for new users to setup their Handoff account for optimization",
      authors: ["Handoff", "1 other"],
      articles: 11,
    },
    {
      icon: <Book className="text-blue-500 w-6 h-6" />,
      title: "AI",
      desc: "A collection of resources to best understand and leverage Handoff AI capabilities",
      authors: ["Handoff", "1 other"],
      articles: 10,
    },
    {
      icon: <Users className="text-blue-600 w-6 h-6" />,
      title: "Client and Project Management",
      desc: "Understand how to manage your clients and their projects",
      authors: ["Handoff", "2 others"],
      articles: 19,
    },
    {
      icon: <CreditCard className="text-sky-600 w-6 h-6" />,
      title: "Finance and Payments",
      desc: "For business users, learn how to leverage finance and online payments for your clients.",
      authors: ["Dave", "2 others"],
      articles: 11,
    },
    {
      icon: <Settings className="text-blue-500 w-6 h-6" />,
      title: "Settings",
      desc: "Basics on setting preferences & team management",
      authors: ["Handoff", "2 others"],
      articles: 12,
    },
    {
      icon: <Receipt className="text-blue-600 w-6 h-6" />,
      title: "Billing and Subscriptions",
      desc: "Review the features each plan offers on Handoff",
      authors: ["Handoff", "1 other"],
      articles: 12,
    },
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen">

      {/* ================= HEADER ================= */}
      <div className="bg-green-600 text-white px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm opacity-80">Handoff Help Center</p>
          <h1 className="text-3xl font-semibold mt-2">Advice and answers from the Handoff Team</h1>

          {/* Search Bar */}
          <div className="mt-6 bg-white rounded-full p-3 flex items-center shadow-lg">
            <Search className="text-gray-500 ml-3" />
            <input
              type="text"
              placeholder="Search for articles..."
              className="ml-3 w-full outline-none text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-5xl mx-auto p-5 mt-10">

        {sections.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer mb-4 border border-gray-200"
          >
            <div className="flex items-start gap-4">
              <div>{item.icon}</div>

              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>

                {/* Authors & article count */}
                <div className="flex items-center gap-2 mt-3 text-gray-500 text-xs">
                  <div className="flex -space-x-2">
                    <img
                      src="https://i.pravatar.cc/40?img=1"
                      className="w-6 h-6 rounded-full border"
                    />
                    <img
                      src="https://i.pravatar.cc/40?img=2"
                      className="w-6 h-6 rounded-full border"
                    />
                  </div>

                  <span>By {item.authors.join(" and ")}</span>
                  <span>•</span>
                  <span>{item.articles} articles</span>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        <p>Handoff Help Center</p>
        <p className="mt-2 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-green-600 rounded-full"></span> We run on Intercom
        </p>
      </footer>
    </div>
  );
};

export default HelpCenter;

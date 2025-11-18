import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const comparisons = [
  {
    id: 1,
    title: "Facebook Ads vs Google Ads: Which Works Better in 2025?",
    date: "30 October 2025",
    comments: "No Comments",
    img: "https://cdn.pixabay.com/photo/2015/05/26/09/37/facebook-784089_1280.jpg",
    desc: "Choosing between Facebook Ads and Google Ads can make or break your marketing ROI. Let’s compare their targeting, cost, and performance for 2025...",
  },
  {
    id: 2,
    title: "YouTube Shorts vs Instagram Reels: Which Platform Converts Better?",
    date: "29 October 2025",
    comments: "No Comments",
    img: "https://cdn.pixabay.com/photo/2017/02/23/13/05/youtube-2092160_1280.png",
    desc: "Both YouTube Shorts and Instagram Reels are dominating short-form video. But which drives more engagement and leads? Let’s find out...",
  },
  {
    id: 3,
    title: "AI Video Editors vs Human Editors: Which Delivers Better Results?",
    date: "28 October 2025",
    comments: "No Comments",
    img: "https://cdn.pixabay.com/photo/2017/08/06/06/54/ai-2591672_1280.jpg",
    desc: "AI editing tools promise speed, but do they match human creativity? We’ve tested both to find which truly delivers the edge for modern marketers...",
  },
   {
    id: 4,
    title: "AI Video Editors vs Human Editors: Which Delivers Better Results?",
    date: "28 October 2025",
    comments: "No Comments",
    img: "https://cdn.pixabay.com/photo/2017/08/06/06/54/ai-2591672_1280.jpg",
    desc: "AI editing tools promise speed, but do they match human creativity? We’ve tested both to find which truly delivers the edge for modern marketers...",
  },
   {
    id: 5,
    title: "AI Video Editors vs Human Editors: Which Delivers Better Results?",
    date: "28 October 2025",
    comments: "No Comments",
    img: "https://cdn.pixabay.com/photo/2017/08/06/06/54/ai-2591672_1280.jpg",
    desc: "AI editing tools promise speed, but do they match human creativity? We’ve tested both to find which truly delivers the edge for modern marketers...",
  },
   {
    id: 6,
    title: "AI Video Editors vs Human Editors: Which Delivers Better Results?",
    date: "28 October 2025",
    comments: "No Comments",
    img: "https://cdn.pixabay.com/photo/2017/08/06/06/54/ai-2591672_1280.jpg",
    desc: "AI editing tools promise speed, but do they match human creativity? We’ve tested both to find which truly delivers the edge for modern marketers...",
  },
];

const ComparisonSection: React.FC = () => {
   useEffect(() => {
    window.scrollTo(0, 0); // 🔥 Page opens from top
  
  }, []);
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }} className="text-3xl font-bold text-gray-900 mb-12">
          Our <span className="text-indigo-600">Comparisons</span>
        </h2>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {comparisons.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {item.date} / {item.comments}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.desc}
                </p>
                <Link
                  to={`/comparison/${item.id}`}
                  className="text-indigo-600 font-medium text-sm hover:text-indigo-800"
                >
                  View Comparison →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <button className="mt-10 px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition">
          Load More
        </button>
      </div>
    </section>
  );
};

export default ComparisonSection;

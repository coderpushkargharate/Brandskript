import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "10 Creative Formulas for High-Converting Facebook Video Ads",
    date: "30 October 2025",
    comments: "No Comments",
    img: "https://cdn.pixabay.com/photo/2017/06/10/07/23/social-2380836_1280.png",
    desc: "There’s real magic in Facebook video ads when they combine creativity with strategy. At ShortVids, we’ve watched ordinary brands turn into unforgettable names through clever...",
  },
  {
    id: 2,
    title: "How to Build a High-Converting YouTube Sales Funnel in 2026",
    date: "29 October 2025",
    comments: "No Comments",
    img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/youtube-1868269_1280.jpg",
    desc: "Video content is now the main focus of the internet, and a good YouTube sales funnel is becoming one of the best strategies for 2026...",
  },
  {
    id: 3,
    title: "Is AI Creative Testing the Future of Ads — and How Can Brands Use It Now?",
    date: "28 October 2025",
    comments: "No Comments",
    img: "https://cdn.pixabay.com/photo/2019/07/10/06/33/artificial-intelligence-4321890_1280.jpg",
    desc: "AI creative testing has already started changing how video ads perform online. At ShortVids, there’s never been a day without running into countless creative combinations...",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Our <span className="text-indigo-600">Blogs</span>
        </h2>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {blog.date} / {blog.comments}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {blog.desc}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-indigo-600 font-medium text-sm hover:text-indigo-800"
                >
                  Read More →
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

export default BlogSection;

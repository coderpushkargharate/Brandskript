import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const blogs = [
  {
    id: 1,
    title: "10 Creative Formulas for High-Converting Facebook Video Ads",
    date: "30 October 2025",
    comments: "No Comments",
    img: "https://shortvids.co/wp-content/uploads/2025/06/FEATUREGene-Slades-ShortVids-Success-Story.jpg",
    desc: "There’s real magic in Facebook video ads when they combine creativity with strategy. At ShortVids, we’ve watched ordinary brands turn into unforgettable names through clever...",
  },
  {
    id: 2,
    title: "How to Build a High-Converting YouTube Sales Funnel in 2026",
    date: "29 October 2025",
    comments: "No Comments",
    img: "https://shortvids.co/wp-content/uploads/2025/05/FEATURE-ramp.jpg",
    desc: "Video content is now the main focus of the internet, and a good YouTube sales funnel is becoming one of the best strategies for 2026...",
  },
  {
    id: 3,
    title: "Is AI Creative Testing the Future of Ads — and How Can Brands Use It Now?",
    date: "28 October 2025",
    comments: "No Comments",
    img: "https://shortvids.co/wp-content/uploads/2025/05/FEATURE-morning-brew.jpg",
    desc: "AI creative testing has already started changing how video ads perform online. At ShortVids, there’s never been a day without running into countless creative combinations...",
  },
   {
    id: 4,
    title: "10 Creative Formulas for High-Converting Facebook Video Ads",
    date: "30 October 2025",
    comments: "No Comments",
    img: "https://shortvids.co/wp-content/uploads/2025/06/FEATUREGene-Slades-ShortVids-Success-Story.jpg",
    desc: "There’s real magic in Facebook video ads when they combine creativity with strategy. At ShortVids, we’ve watched ordinary brands turn into unforgettable names through clever...",
  },
   {
    id: 5,
    title: "10 Creative Formulas for High-Converting Facebook Video Ads",
    date: "30 October 2025",
    comments: "No Comments",
    img: "https://shortvids.co/wp-content/uploads/2025/06/FEATUREGene-Slades-ShortVids-Success-Story.jpg",
    desc: "There’s real magic in Facebook video ads when they combine creativity with strategy. At ShortVids, we’ve watched ordinary brands turn into unforgettable names through clever...",
  },
   {
    id: 6,
    title: "10 Creative Formulas for High-Converting Facebook Video Ads",
    date: "30 October 2025",
    comments: "No Comments",
    img: "https://shortvids.co/wp-content/uploads/2025/06/FEATUREGene-Slades-ShortVids-Success-Story.jpg",
    desc: "There’s real magic in Facebook video ads when they combine creativity with strategy. At ShortVids, we’ve watched ordinary brands turn into unforgettable names through clever...",
  },
   {
    id: 7,
    title: "10 Creative Formulas for High-Converting Facebook Video Ads",
    date: "30 October 2025",
    comments: "No Comments",
    img: "https://shortvids.co/wp-content/uploads/2025/06/FEATUREGene-Slades-ShortVids-Success-Story.jpg",
    desc: "There’s real magic in Facebook video ads when they combine creativity with strategy. At ShortVids, we’ve watched ordinary brands turn into unforgettable names through clever...",
  },
];

const BlogSection = () => {
  useEffect(() => {
     window.scrollTo(0, 0); // 🔥 Page opens from top
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }}
          className="text-3xl font-bold text-gray-900 mb-12"
          data-aos="fade-up"
        >
          Our <span className="text-indigo-600">Blogs</span>
        </h2>

        {/* Blog Cards */}
        <div
          className="grid md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden transform hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
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
        <div data-aos="fade-up" data-aos-delay="400">
          <button className="mt-10 px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    title: "Mastering Instagram Reels Ads: A 2026 Marketer’s Guide",
    date: "27 October 2025",
    comments: "No Comments",
    img: "https://shortvids.co/wp-content/uploads/2025/05/FEATURE-instagram-reels.jpg",
    desc: "Instagram Reels ads are one of the most powerful tools for short-form storytelling. Here's how you can use them to grow your brand...",
  },
  {
    id: 5,
    title: "5 Secrets to Crafting High-Retention TikTok Ads",
    date: "26 October 2025",
    comments: "No Comments",
    img: "https://shortvids.co/wp-content/uploads/2025/05/FEATURE-tiktok-ads.jpg",
    desc: "TikTok is the king of engagement, but what separates viral ads from forgettable ones? We break down what actually makes users stay and convert...",
  },
  {
    id: 6,
    title: "The Psychology Behind Short Video Storytelling",
    date: "25 October 2025",
    comments: "No Comments",
    img: "https://shortvids.co/wp-content/uploads/2025/05/FEATURE-storytelling.jpg",
    desc: "Great video ads tap into emotion, rhythm, and curiosity. Here’s how brands use the psychology of storytelling to boost engagement...",
  },
  {
    id: 7,
    title: "Creative Hook Ideas to Boost Watch Time in 3 Seconds",
    date: "24 October 2025",
    comments: "No Comments",
    img: "https://shortvids.co/wp-content/uploads/2025/05/FEATURE-hooks.jpg",
    desc: "Your first 3 seconds can make or break a video ad. We share proven hook ideas that instantly capture audience attention...",
  },
  {
    id: 8,
    title: "Data-Driven Ad Testing: How to Find Winning Videos Faster",
    date: "23 October 2025",
    comments: "No Comments",
    img: "https://shortvids.co/wp-content/uploads/2025/05/FEATURE-testing.jpg",
    desc: "Testing video creatives doesn’t have to be slow or random. Learn how data-driven testing can help you scale faster...",
  },
  {
    id: 9,
    title: "Scaling Video Ads: Lessons from 7-Figure Brands",
    date: "22 October 2025",
    comments: "No Comments",
    img: "https://shortvids.co/wp-content/uploads/2025/05/FEATURE-scaling.jpg",
    desc: "Scaling successful video campaigns requires a smart balance between creative diversity and data. Here's what big brands do right...",
  },
  {
    id: 10,
    title: "How Short-Form Ads Outperform Long Videos in 2026",
    date: "21 October 2025",
    comments: "No Comments",
    img: "https://shortvids.co/wp-content/uploads/2025/05/FEATURE-shortform.jpg",
    desc: "Short-form content is dominating attention spans. Find out why short ads convert better — and how to make yours stand out...",
  },
];

const BlogSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(8); // Show 8 initially

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4); // Show 4 more on each click
  };

  const visibleBlogs = blogs.slice(0, visibleCount);
  const hasMore = visibleCount < blogs.length;

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Our <span className="text-indigo-600">Blogs</span>
        </h2>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {visibleBlogs.map((blog) => (
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
        {hasMore ? (
          <button
            onClick={handleLoadMore}
            className="mt-10 px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition"
          >
            Load More
          </button>
        ) : (
          <p className="mt-10 text-gray-500 text-sm">No more blogs to show.</p>
        )}
      </div>
    </section>
  );
};

export default BlogSection;

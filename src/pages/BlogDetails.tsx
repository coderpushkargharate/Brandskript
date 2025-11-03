import React from "react";
import { useParams, Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "10 Creative Formulas for High-Converting Facebook Video Ads",
    date: "30 October 2025",
    img: "https://cdn.pixabay.com/photo/2017/06/10/07/23/social-2380836_1280.png",
    content: `
      Facebook video ads are among the most powerful marketing tools available today. 
      In this blog, we’ll explore the creative strategies that help your videos convert better...
    `,
  },
  {
    id: 2,
    title: "How to Build a High-Converting YouTube Sales Funnel in 2026",
    date: "29 October 2025",
    img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/youtube-1868269_1280.jpg",
    content: `
      The YouTube sales funnel is the future of online video marketing. Here's how you can set it up effectively...
    `,
  },
  {
    id: 3,
    title: "Is AI Creative Testing the Future of Ads — and How Can Brands Use It Now?",
    date: "28 October 2025",
    img: "https://cdn.pixabay.com/photo/2019/07/10/06/33/artificial-intelligence-4321890_1280.jpg",
    content: `
      AI-powered creative testing has revolutionized how we design and measure ad performance. Let’s dive deep into this innovation...
    `,
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="text-center py-20">Blog not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{blog.date}</p>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.content}
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;

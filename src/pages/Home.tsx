import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialsSection";
import FeaturesCarousel from "./FeaturesCarousel";
import HandOff from "./HandOff";
import HowItWorks from "./HowItWorks";
import Automate from "./Automate";
import HandoffSection from "./HandoffSection";

import { Blog } from "../types/blog";

const Home: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchFeaturedBlogs();
  }, []);

  const fetchFeaturedBlogs = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
      const response = await fetch(`${apiUrl}/api/blogs`);
      const data = await response.json();

      const featuredBlogs = data
        .filter((blog: Blog) => blog.featured)
        .slice(0, 3);

      setBlogs(featuredBlogs);
    } catch (error) {
      console.error("Blog fetch error:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="AI powered platform with automation and blogs"
        />
      </Helmet>

      {/* ------------------- Page Sections --------------------- */}
      <HeroSection />
      <TestimonialSection />
      <FeaturesCarousel />
      <HandOff />
      <HowItWorks />
      <Automate />

      {/* ------------------- BLOG SECTION --------------------- */}
      {blogs.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latest Blogs
              </h2>
              <p className="text-gray-600 text-lg">
                Insights, updates & industry knowledge
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />

                  <div className="p-6">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {blog.category}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{blog.author}</span>
                      <span>
                        {new Date(blog.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/blogs"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
              >
                View All Blogs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <HandoffSection />
    </div>
  );
};

export default Home;

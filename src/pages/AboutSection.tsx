import React from "react";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://framerusercontent.com/images/fv5yPBmjikTk2Jc47v6BFoFyxg.png"
            alt="Team working together"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          {/* Small Tag */}
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            About Us
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Discover Who We Are <br /> and Our Mission
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We are a dedicated team of professionals with a results-oriented
            mindset in design, marketing, and advertising. Our mission is to
            empower businesses to thrive by delivering measurable outcomes that
            drive growth and enhance brand presence, transforming challenges
            into opportunities for lasting impact and success in the digital
            world.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-base font-medium px-6 py-3 rounded-full transition duration-200 flex items-center gap-2">
              Contact Us <ArrowRight size={18} />
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 text-base font-medium px-6 py-3 rounded-full transition duration-200 flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </button>
          </div>

          {/* Founder Card */}
          <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-4 max-w-md shadow-sm">
            {/* Left - Profile */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/6vwvEXYU4xGIl5vfLjnvLYP9NXo.png"
                  alt="Shubham Channagire"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 leading-tight">
                  Shubham Channagire
                </p>
                <p className="text-sm text-gray-500">Founder</p>
              </div>
            </div>

            {/* Right - X Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
                alt="Twitter/X Logo"
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

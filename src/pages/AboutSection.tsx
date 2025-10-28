import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-center py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Us */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="https://framerusercontent.com/images/fv5yPBmjikTk2Jc47v6BFoFyxg.png"
            alt="Team working"
            className="rounded-xl shadow-md"
          />
          <div className="text-left">
            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
              About Us
            </span>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              Discover Who We Are and Our Mission
            </h3>
            <p className="mt-3 text-gray-600">
              We are a dedicated team of professionals with a results-oriented mindset in design, marketing, and advertising. 
              Our mission is to empower businesses to thrive by delivering measurable outcomes that drive growth and enhance brand presence.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
              <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                View Projects
              </button>
            </div>
                   <div className="flex items-center justify-between  border border-[#0A0F3C] rounded-2xl px-4 py-3 max-w-md shadow-sm mt-5">
  {/* Left Section - Profile */}
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center overflow-hidden">
      <img
        src="https://framerusercontent.com/images/6vwvEXYU4xGIl5vfLjnvLYP9NXo.png"
        alt="Shubham Channagire"
        className="w-12 h-12 object-cover"
      />
    </div>
    <div>
      <p className="font-semibold text-dark leading-tight">
        Shubham Channagire
      </p>
      <p className="text-sm text-gray-400">Founder</p>
    </div>
  </div>

  {/* Right Section - Twitter/X icon */}
  <div className="w-10 h-10 flex items-center justify-center  rounded-xl  hover:bg-[#0A0F3C] transition">
    <img
      src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
      alt="X Logo"
      className="w-5 h-5"
    />
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
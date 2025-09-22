import React from 'react';

const StatsTestimonialsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8">
            <h3 className="text-3xl font-bold text-gray-900">340+</h3>
            <p className="mt-2 text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8">
            <h3 className="text-3xl font-bold text-gray-900">850+</h3>
            <p className="mt-2 text-gray-600">Projects Completed</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8">
            <h3 className="text-3xl font-bold text-gray-900">8+</h3>
            <p className="mt-2 text-gray-600">Years of Experience</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8">
            <h3 className="text-3xl font-bold text-gray-900">22+</h3>
            <p className="mt-2 text-gray-600">Team Members</p>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="mt-20 text-center">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
            Results & Analytics
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            Performance Insights and Analytics Overview
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Trusted by Leading Brands
          </p>

          {/* Logos (placeholder, replace with actual logos) */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 opacity-80">
            <span className="text-gray-500 font-medium">Nexus</span>
            <span className="text-gray-500 font-medium">Echo</span>
            <span className="text-gray-500 font-medium">Quantum</span>
            <span className="text-gray-500 font-medium">Lumina</span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 text-center">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            Client Success Stories
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Discover what our clients say about their experiences and success
            working with us.
          </p>

          {/* Testimonial Card */}
          <div className="mt-12 max-w-3xl mx-auto bg-white border border-gray-200 shadow-lg rounded-2xl p-10">
            <p className="text-lg text-gray-700 italic">
              “The lead generation service from Brandskript exceeded our
              expectations. They provided a steady stream of high-quality leads
              that matched our target audience perfectly, even with our WA API
              issues. Their attention to detail and exceptional customer service
              truly set them apart. We couldn’t be happier with the results!”
            </p>

            {/* Rating */}
            <div className="flex justify-center mt-6">
              {"★".repeat(5).split("").map((star, i) => (
                <span key={i} className="text-yellow-500 text-xl">
                  {star}
                </span>
              ))}
            </div>

            {/* Author */}
            <div className="mt-6">
              <p className="font-bold text-gray-900">Anand Patil</p>
              <p className="text-gray-500 text-sm">Founder Of Anandigro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsTestimonialsSection;
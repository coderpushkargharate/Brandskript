import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BookCallSection = () => {
  const reasons = [
    {
      number: "01",
      text: "Consultation is FREE & best if your confused about marketing direction",
    },
    {
      number: "02",
      text: "Expert Advice, Suggestions & feedbacks for Qualified Lead Gen & Ad Growth",
    },
    {
      number: "03",
      text: "Get Complete Clarity on Your Requirements before selecting the plan",
    },
    {
      number: "04",
      text: "Clear idea of results you can achieve with Brandskript",
    },
    {
      number: "05",
      text: "A deep dive on our case studies & success of our clients",
    },
    {
      number: "06",
      text: "Special discounts & upgrades on showup",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 text-center"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          data-aos="fade-down"
        >
          Here’s Why You Should{" "}
          <span className="text-indigo-600 hover:text-indigo-700 transition-colors">
            Book the Call Now
          </span>
        </h2>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {reasons.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1 p-8 border border-gray-200"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Number Circle */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white w-12 h-12 flex items-center justify-center text-lg font-bold rounded-full shadow-md">
                {item.number}
              </div>

              {/* Card Text */}
              <p className="text-gray-700 text-sm mt-8">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div data-aos="fade-up" data-aos-delay="400">
          <button className="mt-12 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md flex items-center mx-auto transition">
            Book a call
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;

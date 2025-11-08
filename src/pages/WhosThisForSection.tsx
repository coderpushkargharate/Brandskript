import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhosThisForSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const categories = [
    {
      id: 1,
      title: "Consultants",
      desc: "For founders, coaches, and executives exploring short form content editing.",
      img: "https://cdn-icons-png.flaticon.com/512/3271/3271010.png",
    },
    {
      id: 2,
      title: "SaaS",
      desc: "For tech founders hunting engagement & seeking social media video production.",
      img: "https://cdn-icons-png.flaticon.com/512/9109/9109839.png",
    },
    {
      id: 3,
      title: "Healthcare",
      desc: "For businesses using videos to market services with bulk video editor support.",
      img: "https://cdn-icons-png.flaticon.com/512/2966/2966487.png",
    },
    {
      id: 4,
      title: "E-Commerce",
      desc: "For creators staying consistent and saving hours on content editing.",
      img: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
    },
    {
      id: 5,
      title: "Architectures & Developers",
      desc: "For creative teams managing high-volume content across multiple clients.",
      img: "https://cdn-icons-png.flaticon.com/512/3263/3263522.png",
    },
    {
      id: 6,
      title: "Home Services",
      desc: "For pros needing fast, reliable post-production support for client work.",
      img: "https://cdn-icons-png.flaticon.com/512/2503/2503529.png",
    },
    {
      id: 7,
      title: "Coaches",
      desc: "For companies that require high-quality, branded content creation and corporate edits.",
      img: "https://cdn-icons-png.flaticon.com/512/1161/1161388.png",
    },
    {
      id: 8,
      title: "Realtors, Brokers",
      desc: "For agents & brokers needing high-impact property reels, client stories, and explainers.",
      img: "https://cdn-icons-png.flaticon.com/512/6357/6357245.png",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-white to-gray-100 py-20"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          Who’s this{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            for?
          </span>
        </h2>

        {/* Category Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {categories.map((item, index) => (
            <div
              key={item.id}
              data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
              data-aos-delay={index * 100}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 text-center flex flex-col items-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 object-contain mb-6"
              />
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className="mt-12"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full shadow-lg transition duration-300 flex items-center mx-auto">
            Connect with Our Team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 ml-2"
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

export default WhosThisForSection;

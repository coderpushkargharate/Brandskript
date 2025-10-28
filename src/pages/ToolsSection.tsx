import React from "react";
import Slider from "react-slick";
import { ArrowUpRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ToolsSection = () => {
  const tools = [
    {
      name: "Meta Ads",
      desc: "Collaborative design and prototyping tool online.",
      icon: "https://framerusercontent.com/images/c1ND1d7N7UWmtyCmZy89PkkC6m4.png?width=512&height=512",
    },
    {
      name: "Google Ads",
      desc: "Interactive prototypes for advanced animations website.",
      icon: "https://framerusercontent.com/images/XEgb6Kc9y7tPFQ0qinq8sBJ7ZZQ.png?width=512&height=512",
    },
    {
      name: "LinkedIn Ads",
      desc: "E-commerce platform for online shopping websites.",
      icon: "https://framerusercontent.com/images/rin30quf7EsKF3THDucF4NtykJw.png?width=512&height=512",
    },
    {
      name: "Clay.io",
      desc: "All-in-one workspace for notes and project tasks.",
      icon: "https://framerusercontent.com/images/Gtzp9Wckn7m8ws5x46ABWVpU0.png?width=512&height=512",
    },
    {
      name: "Phantom Buster",
      desc: "Design and develop websites visually with ease.",
      icon: "https://framerusercontent.com/images/SLjeOKPg8rPXme6aHMav104Q5s4.png?width=512&height=512 ",
    },
    {
      name: "SmartLead",
      desc: "Online payment processing platform for businesses.",
      icon: "https://framerusercontent.com/images/NtlHUs933g5sjkh3OEzw1t3mf4o.svg?width=40&height=40",
    },
  ];

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="bg-white text-center py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <span className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1 rounded-full shadow-sm">
          Tools
        </span>

        {/* Carousel Container (dark rounded capsule) */}
        <div
          style={{
            marginTop: "3rem",
            maxWidth: "480px",
            marginLeft: "auto",
            marginRight: "auto",
         
            borderRadius: "9999px",
            padding: "14px 20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
          }}
        >
          <Slider {...carouselSettings}>
            {tools.map((tool, index) => (
              <div key={index}>
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-inner mx-auto">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Heading & Description */}
        <h2 className="mt-8 text-3xl font-bold text-gray-900">
          Tools We Utilize for Excellence
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto text-base">
          Empowering our workflow with top digital marketing and automation
          tools for performance-driven results.
        </p>

        {/* Tool Cards Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 border border-gray-200 rounded-2xl bg-gray-50 hover:bg-blue-50 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-8 h-8 object-contain"
                  />
                  <h4 className="text-lg font-semibold text-gray-900">
                    {tool.name}
                  </h4>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400" />
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

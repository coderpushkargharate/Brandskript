import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShortVidsAtGlance = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats = [
    {
      id: 1,
      icon: "🌍",
      number: "29+",
      title: "Countries",
      description: "Trusted by clients worldwide",
    },
    {
      id: 2,
      icon: "🎬",
      number: "13162+",
      title: "Videos",
      description: "Expertly edited and delivered",
    },
    {
      id: 3,
      icon: "🎞️",
      number: "43",
      title: "Full-time editors",
      description: "Dedicated to quality and creativity",
    },
    {
      id: 4,
      icon: "👥",
      number: "112",
      title: "Team members",
      description: "A powerhouse of talent",
    },
    {
      id: 5,
      icon: "🕓",
      number: "7+",
      title: "Time zones",
      description: "Seamlessly collaborating around the globe",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="bg-gradient-to-b from-white to-gray-100 py-16 md:py-24"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Title */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          ShortVids at{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Glance
          </span>
        </h2>

        {/* Carousel */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Slider {...settings}>
            {stats.map((item, index) => (
              <div
                key={item.id}
                className="px-3"
                data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
                data-aos-delay={index * 150}
              >
                <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 py-8 md:py-10 px-5 flex flex-col items-center justify-center">
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-indigo-600">
                    {item.number}
                  </h3>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mt-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-[220px] mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ShortVidsAtGlance;

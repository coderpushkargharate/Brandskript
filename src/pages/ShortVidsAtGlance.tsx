import React from "react";
import Slider from "react-slick";

const ShortVidsAtGlance = () => {
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
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
          ShortVids at{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Glance
          </span>
        </h2>

        <Slider {...settings}>
          {stats.map((item) => (
            <div key={item.id} className="px-3">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 py-10 px-6 flex flex-col items-center justify-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-3xl font-extrabold text-indigo-600">
                  {item.number}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 mt-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ShortVidsAtGlance;

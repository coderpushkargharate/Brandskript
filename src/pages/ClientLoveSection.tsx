import React from "react";
import Slider from "react-slick";

const ClientShowcaseSection = () => {
  const testimonials = [
    {
      id: 1,
      title: "Helped Josh to streamline video editing process to perfection.",
      thumbnail: "https://i.ibb.co/6bP3nrf/client1.jpg",
    },
    {
      id: 2,
      title: "Helped Lead Ninja to streamline video editing process to perfection.",
      thumbnail: "https://i.ibb.co/YjJpnCz/client2.jpg",
    },
    {
      id: 3,
      title: "Helped Brandon to streamline video editing process to perfection.",
      thumbnail: "https://i.ibb.co/2MMJrR9/client3.jpg",
    },
    {
      id: 4,
      title: "Helped Jakib to achieve 2M+ subscribers through YouTube automation.",
      thumbnail: "https://i.ibb.co/bRy2YqT/client4.jpg",
    },
    {
      id: 5,
      title: "Helped Alex scale his video production for his consulting business.",
      thumbnail: "https://i.ibb.co/xGMzJFx/client5.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      {/* ======= Top Hero Section (Light Theme) ======= */}
      <section className="bg-gradient-to-b from-white to-gray-50 text-center py-20 text-gray-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="uppercase text-indigo-600 font-semibold tracking-wide text-sm">
            Industry Insights
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-3">
            Qualified Leads <br /> Impacts Sales Growth
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Capture & convert more customers by upgrading your lead generation
            methods for high growth in revenue.
          </p>
          <button className="mt-8 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-full font-medium text-white shadow-lg">
            Book A FREE Consultation Call
          </button>
        </div>

        {/* Subtle light glow effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-indigo-200 opacity-30 blur-[150px] rounded-full"></div>
      </section>

      {/* ======= Client Carousel Section ======= */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Clients Shared Their{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Love For Our Work
            </span>
          </h2>

          {/* Carousel */}
          <div className="mt-14">
            <Slider {...settings}>
              {testimonials.map((client) => (
                <div key={client.id} className="px-3">
                  <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={client.thumbnail}
                        alt={client.title}
                        className="w-full h-72 object-cover"
                      />
                      <div className="absolute inset-0 bg-white/40 group-hover:bg-white/60 transition duration-300 flex items-center justify-center">
                        <button className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="p-5 text-left">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {client.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientShowcaseSection;

import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials = [
    {
      id: 1,
      title: "Helped Josh to streamline video editing process to perfection.",
      thumbnail:
        "https://shortvids.co/wp-content/uploads/2025/04/FEATURE-liquid-death.jpg",
    },
    {
      id: 2,
      title: "Helped Lead Ninja to streamline video editing process to perfection.",
      thumbnail:
        "https://shortvids.co/wp-content/uploads/2025/04/FEATURE-bloomberg-.jpg",
    },
    {
      id: 3,
      title: "Helped Brandon to streamline video editing process to perfection.",
      thumbnail:
        "https://shortvids.co/wp-content/uploads/2025/04/colin-FEATURE.jpg",
    },
    {
      id: 4,
      title: "Helped Jakib to achieve 2M+ subscribers through YouTube automation.",
      thumbnail:
        "https://shortvids.co/wp-content/uploads/2025/03/Brooks-kelly-mortgage-feature.jpg",
    },
    {
      id: 5,
      title: "Helped Alex scale his video production for his consulting business.",
      thumbnail:
        "https://shortvids.co/wp-content/uploads/2025/02/feature-Jesse-Sieffs2.jpg",
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
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // ✅ better for mobile
    ],
  };

  return (
    <>
      {/* ======= Top Hero Section ======= */}
      <section className="bg-gradient-to-b from-white to-gray-50 text-center py-16 md:py-24 text-gray-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10" data-aos="fade-up">
          <p className="uppercase text-indigo-600 font-semibold tracking-wide text-xs sm:text-sm" data-aos="fade-down" data-aos-delay="100">
            Industry Insights
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-3" data-aos="zoom-in-up" data-aos-delay="200">
            Qualified Leads <br /> Impacts Sales Growth
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            Capture & convert more customers by upgrading your lead generation
            methods for high growth in revenue.
          </p>
          <button
            className="mt-8 px-6 sm:px-8 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-full font-medium text-white shadow-lg text-sm sm:text-base"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Book A FREE Consultation Call
          </button>
        </div>

        {/* Subtle Glow Effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-indigo-200 opacity-30 blur-[150px] rounded-full"></div>
      </section>

      {/* ======= Client Carousel Section ======= */}
      <section className="bg-white py-12 sm:py-16 md:py-24 text-center" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <h2
            className="text-xl sm:text-3xl md:text-4xl font-extrabold text-gray-900"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Clients Shared Their{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Love For Our Work
            </span>
          </h2>

          {/* Carousel */}
          <div className="mt-8 sm:mt-10 md:mt-14" data-aos="zoom-in-up" data-aos-delay="200">
            <Slider {...settings}>
              {testimonials.map((client, index) => (
                <div key={client.id} className="px-2 sm:px-3" data-aos="fade-up" data-aos-delay={index * 150}>
                  <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    {/* Image */}
                    <img
                      src={client.thumbnail}
                      alt={client.title}
                      className="w-full h-52 sm:h-64 md:h-80 object-cover rounded-xl"
                    />

                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-lg p-2 sm:p-3 shadow-md">
                        <p className="text-xs sm:text-sm md:text-base text-gray-900 font-medium leading-relaxed">
                          {client.title}
                        </p>
                      </div>
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <button className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
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

export default TestimonialsSection;

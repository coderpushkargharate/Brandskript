import React, { useEffect } from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const team = [
    {
      title: "Video Editing",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920332.png",
    },
    {
      title: "Script Writer",
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
    },
    {
      title: "Project Manager",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
    },
    {
      title: "Creative Director",
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
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

  const brandImages = [
    "https://framerusercontent.com/images/fWRiiLcqQoucPAq3Ut9yHeVAZA.png?width=1400&height=600",
    "https://framerusercontent.com/images/l9CwuiW5n0mLLvbEHNqeU1VQM.png?width=1000&height=600",
    "https://framerusercontent.com/images/4p9eSy8R2WQrXc8zWgf0dhVp6ck.png?width=1000&height=600",
    "https://framerusercontent.com/images/EPoEgAmp3ix1dfny5HFCTfASQ68.png?width=1000&height=600",
    "https://framerusercontent.com/images/AeSHm9HVC7P8cx0s62CciYEOMA.png?width=1000&height=600",
    "https://framerusercontent.com/images/OrmT3dRpNIH3fYTPibChhG6Qxu8.png?width=1400&height=600",
    "https://framerusercontent.com/images/bs9rrk7GgV1SZ4kww4yHh2F98.png?width=1400&height=600",
    "https://framerusercontent.com/images/oYIEqYL6fivcrdm7Lp6CO4HLihk.png?width=1400&height=600",
  ];

  return (
    <section className="relative overflow-hidden bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 relative z-10 text-center">
        {/* Top Badge */}
        <div
          className="inline-flex items-center bg-blue-50 text-blue-700 font-medium px-5 py-2 rounded-full text-sm mb-6 shadow-sm"
          data-aos="fade-down"
        >
          Grow Revenue <span className="ml-2 text-gray-500">→ with Ads Experts</span>
        </div>

        {/* Subtitle */}
        <p
          className="pb-5 text-base md:text-lg text-gray-600"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We’re in the top 1% of agencies — focused on outcomes that matter to you.
        </p>

        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          data-aos="zoom-in"
        >
          10x Your Business Revenue
          <br />
          <span className="text-blue-600">
            with Qualified Lead Gen & <br className="hidden sm:block" /> Ad Experts
          </span>
        </h1>

        {/* CTA Button */}
        <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
          <button className="bg-blue-600 text-white px-8 sm:px-12 lg:px-16 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300">
            Book A FREE Strategy Call
          </button>
          <p className="mt-4 text-orange-600 font-medium text-base" data-aos="fade">
            Over 3k+ sales meetings booked!
          </p>
        </div>

        {/* Rating */}
        <div
          className="mt-10 flex justify-center items-center space-x-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-gray-700 text-base md:text-lg font-medium">
            4.8/5 From 602 Customers
          </p>
        </div>

        {/* ✅ Logo Carousel */}
        <div
          className="mt-14 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Slider {...settings}>
            {brandImages.map((img, index) => (
              <div key={index} className="px-3">
                <div className="flex justify-center items-center">
                  <img
                    src={img}
                    alt={`Brand ${index + 1}`}
                    className="w-full h-32 object-contain rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Video Section */}
        <div className="mt-16" data-aos="zoom-in-up" data-aos-delay="200">
          <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://framerusercontent.com/images/wK4E80TjbV0jJFGY1B4doVSx1U.png"
              alt="Video thumbnail"
              className="w-full h-auto object-cover"
            />
            <a
              href="https://www.youtube.com/watch?v=Mlor_dBRrjE&t=6s"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition text-lg">
                ▶ Play Video
              </span>
            </a>
          </div>
        </div>

        {/* Features */}
        <section
          className="pt-12 bg-white text-gray-800"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="max-w-6xl mx-auto px-6 text-center">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-2" data-aos="zoom-in">
              A Dedicated Team – At Your Service
            </h2>
            <p className="text-gray-500 mb-8" data-aos="fade-up" data-aos-delay="150">
              Corporate &amp; Outsource Video Editing Services
            </p>

            {/* Card Container */}
            <div
              className="flex flex-wrap justify-center gap-4 bg-gray-100 rounded-xl p-6 border border-gray-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {team.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white text-gray-900 px-5 py-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-blue-50 via-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;

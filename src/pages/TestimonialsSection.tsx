import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Todd",
    company: "GoHome LLC",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    review:
      "I've been so frustrated with estimating that I was ready to give it up. Handoff is like taking a 1,000-pound weight off my chest. I feel so much better now. I'm so glad I found you guys.",
    location: "Chester, VA",
  },
  {
    name: "Aaron",
    company: "Hamilton Valentino Design",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The first estimate I made with Handoff won us a kitchen remodel.",
    location: "Cumberland, MD",
  },
  {
    name: "Matt",
    company: "equi-linc",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "Handoff AI is a game changer in helping us develop our long term sales & operations plan. AI is the way of the future and this hits us in a very important part of our business.",
    location: "Brownsburg, IN",
  },
  {
    name: "Scott",
    company: "MCM Homes",
    img: "https://randomuser.me/api/portraits/men/40.jpg",
    review:
      "I can genuinely trust the estimates I’m getting. Since I’ve been in Handoff, there hasn’t been a time I haven’t checked numbers and gotten a number in my head or got the same scope. It's incredibly comfortable for me.",
    location: "Omaha, NE",
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

    // 🔥 Auto carousel added
    autoplay: true,
    autoplaySpeed: 2500,

    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-white">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16">
        AI estimating software contractors love
      </h2>

      <div className="max-w-7xl mx-auto px-6">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 h-full">

                {/* Profile */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.company}</p>
                  </div>
                </div>

                {/* Review */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.review}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-700 font-medium">
                  <MapPin className="w-4 h-4 text-yellow-500" />
                  <span>{item.location}</span>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { MapPin } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

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
    name: "Matt",
    company: "equi-linc",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "Handoff AI is a game changer in helping us develop our long term sales & operations plan.",
    location: "Brownsburg, IN",
  },
  {
    name: "Scott",
    company: "MCM Homes",
    img: "https://randomuser.me/api/portraits/men/40.jpg",
    review:
      "I can genuinely trust the estimates I’m getting. It's incredibly comfortable for me.",
    location: "Omaha, NE",
  },
  {
    name: "Alex",
    company: "BuildPro",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The accuracy and speed are unmatched. This tool improved our close rate significantly.",
    location: "Austin, TX",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 px-4">
        AI estimating software contractors love
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          speed={600}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col transition hover:shadow-xl">
                
                {/* PROFILE */}
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">{item.company}</p>
                  </div>
                </div>

                {/* REVIEW */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                  “{item.review}”
                </p>

                {/* FOOTER */}
                <div className="flex items-center gap-2 text-gray-700 font-medium mt-6 pt-4 border-t">
                  <MapPin className="w-4 h-4 text-green-500" />
                  <span className="text-sm">{item.location}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination spacing fix */}
      <style>{`
        .swiper-pagination {
          bottom: -35px !important;
        }
        @media (max-width: 768px) {
          .swiper-pagination {
            bottom: -25px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;

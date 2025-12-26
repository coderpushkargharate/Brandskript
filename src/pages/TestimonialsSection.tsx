import React, { useEffect, useRef, useState } from "react";
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
  {
    name: "Alex",
    company: "BuildPro",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The accuracy and speed are unmatched. This tool alone improved our close rate significantly.",
    location: "Austin, TX",
  },
];

const TestimonialSection = () => {
  const sliderRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  // Calculate tallest card height
  useEffect(() => {
    const updateHeight = () => {
      if (sliderRef.current) {
        const cards = sliderRef.current.querySelectorAll(".testimonial-card");
        let tallest = 0;
        cards.forEach((card) => {
          const h = card.offsetHeight;
          if (h > tallest) tallest = h;
        });
        setMaxHeight(tallest);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 px-4">
        AI estimating software contractors love
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={sliderRef}>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3">
              <div
                className="testimonial-card bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-between transition hover:shadow-xl"
                style={{ minHeight: `${maxHeight}px` }} // Set equal height
              >
                {/* TOP */}
                <div>
                  {/* PROFILE */}
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.company}</p>
                    </div>
                  </div>

                  {/* REVIEW */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    “{item.review}”
                  </p>
                </div>

                {/* FOOTER */}
                <div className="flex items-center gap-2 text-gray-700 font-medium mt-6 pt-4 border-t">
                  <MapPin className="w-4 h-4 text-green-500" />
                  <span className="text-sm">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* SLICK FIXES */}
      <style>{`
        .slick-slide > div {
          height: 100%;
        }
        .slick-dots {
          bottom: -45px;
        }
        .slick-prev, .slick-next {
          z-index: 10;
        }
        @media (max-width: 768px) {
          .slick-dots {
            bottom: -35px;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;

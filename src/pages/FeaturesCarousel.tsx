import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  {
    tag: "New Feature",
    title: "AI Transcription",
    desc: "Record once. Handoff transcribes your walkthroughs, meetings, and crew notes into project-ready documents.",
    img: "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/68fb42ac471ea353a2d87afc_image%20109294.png",
    bg: "#E8F7ED",
  },
  {
    tag: "New Feature",
    title: "AI Documents",
    desc: "Upload files in Handoff to get instant AI estimates. No more typing — just upload and get results.",
    img: "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/68d69aae8507706f045c0283_image%20109293.avif",
    bg: "#FFEECF",
  },
  {
    tag: "New Feature",
    title: "Creating Estimates from Files",
    desc: "Creating Estimates from Drawings, Photos and more!",
    img: "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/685e843294db13ddf766d945_Form.avif",
    bg: "#E3EDFF",
  },
  {
    tag: "New Feature",
    title: "Customer Financing",
    desc: "Close more deals by offering homeowner financing inside your proposal.",
    img: "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/685e843294db13ddf766d945_Form.avif",
    bg: "#D2F9E8",
  },
];

const FeaturesCarousel = () => {
  const sliderRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  // Calculate tallest card height
  useEffect(() => {
    const updateHeight = () => {
      if (sliderRef.current) {
        const cards = sliderRef.current.querySelectorAll(".feature-card");
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
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2, arrows: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  };

  return (
    <div className="py-20 bg-[#EAFBF1]">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 px-4">
        Automate your contracting<br />business with AI
      </h2>

      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-14 px-4 sm:px-0">
        Handoff provides everything you need to automate the operations of your contracting business
        with Artificial Intelligence. Create instant estimates, send winning proposals, wow your clients,
        and get paid faster.
      </p>

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={sliderRef}>
        <Slider {...settings}>
          {features.map((item, i) => (
            <div key={i} className="px-3">
              <div
                className="feature-card rounded-3xl shadow-md p-6 sm:p-8 border border-gray-200 flex flex-col justify-between transition hover:shadow-xl"
                style={{ backgroundColor: item.bg, minHeight: `${maxHeight}px` }}
              >
                {/* Tag */}
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
                  {item.tag}
                </span>

                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full mt-4 rounded-xl object-contain"
                />

                {/* Title */}
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-700 mt-2">{item.desc}</p>

                {/* Learn More */}
                <button className="mt-4 text-black font-semibold flex items-center gap-2 hover:underline">
                  Learn more →
                </button>
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
          bottom: -35px;
        }
        @media (max-width: 768px) {
          .slick-dots {
            bottom: -25px;
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturesCarousel;

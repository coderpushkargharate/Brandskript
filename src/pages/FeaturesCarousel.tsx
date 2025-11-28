import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  {
    tag: "New Feature",
    title: "AI Transcription",
    desc: "Record once. Handoff transcribes your walkthroughs, meetings, and crew notes into project-ready documents.",
    img: "https://i.ibb.co/8PjWHjQ/transcription.png",
    bg: "#E8F7ED",
  },
  {
    tag: "New Feature",
    title: "AI Documents",
    desc: "Upload files in Handoff to get instant AI estimates. No more typing — just upload and get results.",
    img: "https://i.ibb.co/2N0zgdv/documents.png",
    bg: "#FFEECF",
  },
  {
    tag: "New Feature",
    title: "Creating Estimates from Files",
    desc: "Creating Estimates from Drawings, Photos and more!",
    img: "https://i.ibb.co/tZpkHj4/estimates.png",
    bg: "#E3EDFF",
  },
  {
    tag: "New Feature",
    title: "Customer Financing",
    desc: "Close more deals by offering homeowner financing inside your proposal.",
    img: "https://i.ibb.co/qNvHMGD/customer.png",
    bg: "#D2F9E8",
  },
];

const FeaturesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

    // Auto sliding
    autoplay: true,
    autoplaySpeed: 2500,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-20 bg-[#EAFBF1]">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-4">
        Automate your contracting<br />business with AI
      </h2>

      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-14">
        Handoff provides everything you need to automate the operations of your contracting business 
        with Artificial Intelligence. Create instant estimates, send winning proposals, wow your clients, 
        and get paid faster.
      </p>

      <div className="max-w-7xl mx-auto px-6">
        <Slider {...settings}>
          {features.map((item, i) => (
            <div key={i} className="px-4">
              <div
                className="rounded-3xl shadow-md p-6 border border-gray-200"
                style={{ backgroundColor: item.bg }}
              >
                {/* Tag */}
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
                  {item.tag}
                </span>

                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full mt-4 rounded-xl"
                />

                {/* Title */}
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-700 mt-2">{item.desc}</p>

                {/* Learn More */}
                <button className="mt-4 text-black font-semibold flex items-center gap-2">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturesCarousel;

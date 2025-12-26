import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
  return (
    <section className="py-20 bg-[#EAFBF1]">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 px-4">
        Automate your contracting <br /> business with AI
      </h2>

      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-14 px-4">
        Handoff provides everything you need to automate the operations of your contracting business
        with Artificial Intelligence.
      </p>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {features.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="h-full flex flex-col rounded-3xl border border-gray-200 shadow-md p-6 sm:p-8 hover:shadow-xl transition"
                style={{ backgroundColor: item.bg }}
              >
                <span className="w-fit text-xs bg-black text-white px-3 py-1 rounded-full mb-4">
                  {item.tag}
                </span>

                <div className="h-44 sm:h-52 flex items-center justify-center mb-4">
                  <img src={item.img} alt={item.title} className="max-h-full object-contain" />
                </div>

                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700 flex-grow">{item.desc}</p>

                <button className="mt-5 font-semibold hover:underline">
                  Learn more →
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturesCarousel;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* ================= FEATURE DATA ================= */
const features = [
  {
    tag: "Process",
    title: "ROI-Directed Strategy",
    desc: "We start by understanding your business goals, ICP, and revenue targets. A custom funnel and channel mix is planned based on data, not assumptions. Every decision is aligned to maximize ROI and scalability.",
    img: "https://cdn-icons-png.flaticon.com/512/1907/1907552.png",
    bg: "#FFEECF",
  },
  {
    tag: "Creative",
    title: "Result-Oriented Ad Design & Editing",
    desc: "Creatives are designed to stop scrolls and attract qualified intent, not just clicks. Messaging is crafted around pain points, triggers, and buying psychology—optimized for conversions.",
    img: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    bg: "#E3EDFF",
  },
  {
    tag: "Setup",
    title: "Proven Campaign Setup",
    desc: "Campaigns are structured with the right objectives, audiences, and bidding strategy. Tracking, pixels, and events are configured for accurate data from day one.",
    img: "https://cdn-icons-png.flaticon.com/512/3208/3208707.png",
    bg: "#E8F7ED",
  },
  {
    tag: "Leads",
    title: "High-Intent Lead Generation",
    desc: "Leads are generated through optimized ads, continuous testing, and conversion-focused landing flows. We prioritize quality volume over vanity metrics.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    bg: "#D2F9E8",
  },
  {
    tag: "Automation",
    title: "Lead Qualification & Filtering",
    desc: "Leads are filtered using budget, need, and intent criteria. Automation removes junk entries instantly, so your sales team only gets sales-ready prospects.",
    img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    bg: "#FFEECF",
  },
  {
    tag: "Conversion",
    title: "Lead Conversion Support",
    desc: "We automate meeting scheduling and follow-ups until prospects attend. Scripts, insights, and conversion data help remove bottlenecks and improve close rates.",
    img: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
    bg: "#E3EDFF",
  },
  {
    tag: "CRM",
    title: "Centralized Lead Management",
    desc: "All leads live inside a CRM with clear stage-wise visibility. Follow-ups, reminders, and status updates are automated—nothing slips through the cracks.",
    img: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    bg: "#E8F7ED",
  },
  {
    tag: "AI",
    title: "Customized AI Sales Agents",
    desc: "We deploy AI agents tailored to your sales flow. They handle qualification, instant replies, follow-ups, reminders, and CRM updates in real time.",
    img: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    bg: "#D2F9E8",
  },
];

/* ================= COMPONENT ================= */
const FeaturesCarousel = () => {
  return (
    <section className="py-20 bg-[#EAFBF1]">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 px-4">
        Get More Ideal Clients with <br />
        Client Acquisition System
      </h2>

      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-14 px-4">
        ROI Edge handles everything end-to-end — from strategy, ad design, campaign setup,
        lead generation, qualification, nurturing, management, and conversion support.
      </p>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
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
                {/* Tag */}
                <span className="w-fit text-xs bg-black text-white px-3 py-1 rounded-full mb-4">
                  {item.tag}
                </span>

                {/* Image */}
                <div className="h-40 sm:h-48 flex items-center justify-center mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-full object-contain"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                  {item.desc}
                </p>

                {/* CTA */}
                <button className="mt-5 font-semibold text-sm hover:underline">
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

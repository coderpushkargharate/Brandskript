import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HandOff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">

      {/* ================= VIDEO + TEXT ================= */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-16 px-4">
        
        {/* Video Card */}
        <div className="bg-white rounded-2xl shadow p-4 flex justify-center items-center">
          <div className="relative">
            <img
              src="https://cdn.prod.website-files.com/6650cddf762ba9b692753dc0/667b0bf0516a6deffb5daad7_video_EJ%20Elliot.webp"
              alt="Case Study"
              className="rounded-xl w-full"
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded-md text-sm">
              Using ROI Edge to generate 600+ leads monthly
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            How BCabs Generates 600+ Leads Monthly and Earns $35,000+ Every Month with ROI Edge
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            ROI Edge delivers 600+ qualified leads every month at 2× lower cost per
            result, cutting customer acquisition costs by over 60% and creating a
            predictable revenue flow for BCabs for the last 2 years — powered by
            Google Ads and Meta Ads.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <img
              src="https://i.ibb.co/zWJ8x6j/avatar.png"
              className="w-10 h-10 rounded-full"
              alt="Client"
            />
            <div>
              <p className="font-semibold">Suhail B</p>
              <p className="text-sm text-gray-500">BTransport Private Limited</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOGOS ================= */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold">
          Working with Top Industry Players
        </h2>

        <div className="flex flex-wrap justify-center gap-10 mt-10 grayscale opacity-70">
          {[
            "/logos/client1.png",
            "/logos/client2.png",
            "/logos/client3.png",
            "/logos/client4.png",
            "/logos/client5.png",
            "/logos/client6.png",
          ].map((logo, i) => (
            <img key={i} src={logo} alt="Client Logo" className="h-10" />
          ))}
        </div>
      </section>

      {/* ================= ROI EDGE SECTION ================= */}
      <section className="bg-[#FFF3DF] py-16 rounded-2xl max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row items-center gap-10">
        
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold leading-tight">
            ROI Edge Replaces Empty Promises with Performance, Accountability, and Guaranteed Results.
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            You finally get a marketing partner who keeps your pipeline full — at
            15× lower cost than an in-house team and 2× better performance than
            local agencies.
          </p>

          <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow hover:bg-green-600">
            Get started now
          </button>
        </div>

        <img
          src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6650cddf762ba9b692753e31_iPad%20%26%20Apple%20Pencil.webp"
          alt="Dashboard"
          className="rounded-xl w-[380px] md:w-[480px]"
        />
      </section>

      {/* ================= WHO WE SERVE (CAROUSEL) ================= */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-center text-3xl font-bold">
          Who We Serve?
        </h2>

        <p className="text-center text-gray-600 mt-2 max-w-3xl mx-auto">
          If you run a Healthcare, Service, Bookkeeping, Real Estate or SaaS
          business — ROI Edge is built for you.
        </p>

        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[
              {
                title: "Healthcare Business",
                img: "/6650cddf762ba9b692753dd1_Remodelers.webp",
                desc: "Generate consistent high-intent patient inquiries with automation."
              },
              {
                title: "Service Business",
                img: "/6650cddf762ba9b692753dd2_Handyman.webp",
                desc: "Fill your pipeline with ready-to-convert clients."
              },
              {
                title: "Bookkeeping Business",
                img: "/6650cddf762ba9b692753dd3_Fix and flip.webp",
                desc: "Attract qualified business owners and improve conversions."
              },
              {
                title: "Real Estate Business",
                img: "/6650cddf762ba9b692753dd1_Remodelers.webp",
                desc: "High-quality buyer & seller leads with faster deal velocity."
              },
              {
                title: "SaaS Business",
                img: "/6650cddf762ba9b692753dd3_Fix and flip.webp",
                desc: "Acquire paid users while lowering CAC & CPR."
              },
            ].map((item, i) => (
              <SwiperSlide key={i}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/45 flex flex-col justify-end p-5">
                    <h3 className="text-white text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-white text-sm mt-1">
                      {item.desc}
                    </p>
                    <button className="text-white mt-3 underline text-sm">
                      Learn more →
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </div>
  );
};

export default HandOff;

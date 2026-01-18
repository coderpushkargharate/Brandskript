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
    <div className="w-full dm-sans">

      {/* ================= VIDEO + TEXT ================= */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-20 px-4">

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
        <div className="bg-white rounded-2xl shadow p-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold dm-sans">
            How BCabs Generates 600+ Leads Monthly and Earns $35,000+ Every Month with ROI Edge
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed">
            ROI Edge delivers 600+ qualified leads every month at 2× lower cost per
            result, cutting customer acquisition costs by over 60% and creating a
            predictable revenue flow for BCabs for the last 2 years.
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
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold dm-sans">
          Working with Top Industry Players
        </h2>

        <div className="flex flex-wrap justify-center gap-10 mt-12 grayscale opacity-70">
          {[
            "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
            "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
          ].map((logo, i) => (
            <img key={i} src={logo} alt="Client Logo" className="h-10" />
          ))}
        </div>
      </section>

      {/* ================= ROI EDGE SECTION ================= */}
      <section className="bg-[#FFF3DF] py-20 rounded-3xl max-w-6xl mx-auto px-8 mt-10 flex flex-col md:flex-row items-center gap-12">

        <div className="max-w-xl">
          <h2 className="text-4xl md:text-4xl font-bold dm-sans leading-tight">
            ROI Edge Replaces Empty Promises with Performance, Accountability, and Guaranteed Results.
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            You finally get a marketing partner who keeps your pipeline full — at
            15× lower cost than an in-house team and 2× better performance than
            local agencies.
          </p>

          <button className="mt-8 bg-[#d2fe3a] text-black px-8 py-3 rounded-full text-sm font-semibold shadow hover:scale-105 transition">
            Get started now
          </button>
        </div>

        <img
          src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6650cddf762ba9b692753e31_iPad%20%26%20Apple%20Pencil.webp"
          alt="Dashboard"
          className="rounded-xl w-[380px] md:w-[480px]"
        />
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-center  font-bold dm-sans" style={{ fontWeight: 900 , fontSize:"48px" }}>
          Who We Serve?
        </h2>

        <p className="text-center text-gray-600 mt-1 max-w-3xl mx-auto noir-pro">
          ROI Edge is built for Healthcare, Service, Bookkeeping, Real Estate <br /> & SaaS businesses.
        </p>

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[
              { title: "Healthcare Business", img: "/6650cddf762ba9b692753dd1_Remodelers.webp", desc: "High-intent patient leads." },
              { title: "Service Business", img: "/6650cddf762ba9b692753dd2_Handyman.webp", desc: "Ready-to-convert clients." },
              { title: "Bookkeeping Business", img: "/6650cddf762ba9b692753dd3_Fix and flip.webp", desc: "Qualified business owners." },
            ].map((item, i) => (
              <SwiperSlide key={i}>
                <div className="relative rounded-3xl overflow-hidden shadow-lg">
                  <img src={item.img} alt={item.title} className="w-full h-74 object-cover" />
                  <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end">
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    <p className="text-white text-sm mt-1">{item.desc}</p>
                    <span className="text-[#d2fe3a] mt-3 text-sm font-semibold">
                      Learn more →
                    </span>
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

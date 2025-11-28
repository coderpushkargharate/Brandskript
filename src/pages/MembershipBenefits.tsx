import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const benefits = [
  {
    title: "No Need to Invest in 4 Team Members",
    img: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png",
    dark: true,
  },
  {
    title: "8.8/10 Success Ratio",
    img: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    dark: false,
  },
  {
    title: "Unlimited Smart Ad Creatives",
    img: "https://cdn-icons-png.flaticon.com/512/2920/2920215.png",
    dark: false,
  },
  {
    title: "8+ Years of Experience",
    img: "https://cdn-icons-png.flaticon.com/512/4329/4329410.png",
    dark: false,
  },
  {
    title: "Continuous Performance Reports",
    img: "https://cdn-icons-png.flaticon.com/512/3039/3039385.png",
    dark: false,
  },
  {
    title: "Client Closing Guidance",
    img: "https://cdn-icons-png.flaticon.com/512/3050/3050158.png",
    dark: true,
  },
  {
    title: "Monthly Subscription",
    img: "https://cdn-icons-png.flaticon.com/512/3247/3247472.png",
    dark: false,
  },
  {
    title: "Scalable Ads Strategy",
    img: "https://cdn-icons-png.flaticon.com/512/2454/2454252.png",
    dark: true,
  },
  {
    title: "No Hidden Cost",
    img: "https://cdn-icons-png.flaticon.com/512/4315/4315583.png",
    dark: true,
  },
  {
    title: "Free NDA",
    img: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    dark: false,
  },
  {
    title: "Smart Video Ads",
    img: "https://cdn-icons-png.flaticon.com/512/3019/3019590.png",
    dark: true,
  },
    {
    title: "Smart Copywriting Guidance",
    img: "https://cdn-icons-png.flaticon.com/512/3019/3019590.png",
    dark: false,
  },
];

const MembershipBenefits = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white">
      {/* Section Title */}
      <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        data-aos="fade-up"
      >
        Working with Brandskript {" "}
        <span className="text-purple-600 underline decoration-purple-400">
          Benefits
        </span>
      </h2>

      {/* Cards Grid */}
      <div
        className="
          grid gap-8 max-w-7xl w-full
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        "
      >
        {benefits.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 50}
            className={`rounded-2xl shadow-md flex flex-col justify-between items-center text-center p-8 transition-transform duration-300 hover:scale-105 ${
              item.dark
                ? "bg-gradient-to-b from-black via-[#1a0033] to-purple-900 text-white"
                : "bg-white border border-gray-200 text-gray-900"
            }`}
          >
            <h3 className="font-semibold mb-4 text-base md:text-lg leading-tight">
              {item.title}
            </h3>
            <img
              src={item.img}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipBenefits;

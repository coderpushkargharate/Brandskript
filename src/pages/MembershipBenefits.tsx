import React from "react";

const benefits = [
  {
    title: "Unlimited Requests",
    img: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png",
    dark: true,
  },
  {
    title: "Unlimited Revisions",
    img: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    dark: false,
  },
  {
    title: "Extremely Fast Delivery",
    img: "https://cdn-icons-png.flaticon.com/512/2920/2920215.png",
    dark: false,
  },
  {
    title: "One Stop Shop",
    img: "https://cdn-icons-png.flaticon.com/512/4329/4329410.png",
    dark: false,
  },
  {
    title: "Monthly Subscription",
    img: "https://cdn-icons-png.flaticon.com/512/3039/3039385.png",
    dark: false,
  },
  {
    title: "Flexible & Scalable",
    img: "https://cdn-icons-png.flaticon.com/512/3050/3050158.png",
    dark: true,
  },
  {
    title: "Copyright Free",
    img: "https://cdn-icons-png.flaticon.com/512/3247/3247472.png",
    dark: false,
  },
  {
    title: "Content Repurposing",
    img: "https://cdn-icons-png.flaticon.com/512/2454/2454252.png",
    dark: true,
  },
  {
    title: "No Hidden Cost",
    img: "https://cdn-icons-png.flaticon.com/512/4315/4315583.png",
    dark: true,
  },
  {
    title: "Unlimited Styles",
    img: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    dark: false,
  },
  {
    title: "Bundled for Perfection",
    img: "https://cdn-icons-png.flaticon.com/512/3019/3019590.png",
    dark: true,
  },
];

const MembershipBenefits = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Membership{" "}
        <span className="text-purple-600 underline decoration-purple-400">
          Benefits
        </span>
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-6xl">
        {benefits.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md flex flex-col justify-between items-center text-center p-6 transition-transform duration-300 hover:scale-105 ${
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
              className="w-20 h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipBenefits;

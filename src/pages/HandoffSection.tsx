import React from "react";
import { Star } from "lucide-react";

const RatingCard = ({ logo, label }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill="#FFC107" color="#FFC107" />
        ))}
      </div>

      <img src={logo} alt={label} className="h-8 object-contain" />
    </div>
  );
};

const HandoffSection = () => {
  return (
    <div className="w-full">
      {/* ====================== TOP RATING SECTION ====================== */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
        Highly rated by 1000s of contractors
      </h2>

      <div className="bg-white shadow-md rounded-3xl p-8 mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        <RatingCard
          logo="https://upload.wikimedia.org/wikipedia/commons/6/69/Capterra-logo.png"
          label="Capterra"
        />

        <RatingCard
          logo="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_logo_black.svg"
          label="App Store"
        />

        <RatingCard
          logo="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          label="Google Play"
        />

        <RatingCard
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/G2_logo.svg/600px-G2_logo.svg.png"
          label="G2"
        />
      </div>

      {/* ====================== BOOST BUSINESS SECTION ====================== */}
      <div className="bg-green-50 rounded-3xl mt-16 py-16 px-6 md:px-12 text-center relative overflow-hidden">
        {/* Mascot Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/6569/6569269.png"
          alt="Character"
          className="w-60 mx-auto mb-6"
        />

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Boost your business with Handoff
        </h2>

        <p className="text-gray-600 mb-6 text-lg">
          Start earning more revenue right away with Handoff, without spending a
          single penny upfront
        </p>

        {/* App Store Buttons */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-12 cursor-pointer"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Download_on_the_App_Store_Badge.svg"
            alt="App Store"
            className="h-12 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default HandoffSection;

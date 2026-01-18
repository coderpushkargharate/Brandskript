import React from "react";

/* ================= STAT ITEM ================= */
const StatItem = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-black dm-sans">
        {value}
      </h3>
      <p className="text-sm text-gray-500 mt-1 dm-sans">
        {label}
      </p>
    </div>
  );
};

/* ================= MAIN SECTION ================= */
const TrustAndBoostSection = () => {
  return (
    <div className="w-full">

      {/* ================= WHY TO TRUST US ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

          {/* Left Title */}
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight dm-sans">
              Why To <br /> Trust Us
            </h2>
          </div>

          {/* Stats */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            <StatItem value="+$500k" label="Saved on Ad Spend" />
            <StatItem value="+$6M" label="In Total Ad Spend" />
            <StatItem value="+300" label="Clients Across Globe" />
            <StatItem value="+12k" label="Campaigns Created" />
            <StatItem value="+4.8 / 5" label="Rating on Google" />
            <StatItem value="< 3%" label="Churn Rate" />
          </div>

        </div>
      </section>

      {/* ================= BOOST BUSINESS ================= */}
      <section className="bg-[#ECFDF5] rounded-3xl mx-6 mb-20 py-20 px-6 text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
              alt="Dashboard Icon"
              className="w-14 h-14"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dm-sans">
          Boost Your Business With{" "}
          <span className="bg-[#d2fe3a] px-2 rounded-md">
            ROI Edge
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-3xl mx-auto text-lg dm-sans">
          Generate consistent leads, reduce acquisition costs, and grow your
          revenue with a fully managed, ROI-driven client acquisition system.
        </p>

      </section>

    </div>
  );
};

export default TrustAndBoostSection;

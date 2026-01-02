import React from "react";
import { Star } from "lucide-react";

const StatCard = ({ value, label, color = "text-gray-900" }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm">
      <div className={`text-3xl font-bold ${color}`}>{value}</div>
      <div className="text-xs text-gray-500 text-center">{label}</div>
    </div>
  );
};

const HandoffSection = () => {
  return (
    <div className="w-full">

      {/* ====================== WHY TO TRUST US SECTION ====================== */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
        Why To Trust Us
      </h2>

      <div className="bg-white shadow-md rounded-3xl p-8 mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard value="+$500k" label="Saved on Ad Spend" color="text-green-600" />
        <StatCard value="+$6M" label="In Total Ad Spend" color="text-blue-600" />
        <StatCard value="+300" label="Clients Across Globe" color="text-purple-600" />
        <StatCard value="+12k" label="Campaigns Created" color="text-orange-600" />
        <StatCard value="+4.8/5" label="Rating On Google" color="text-yellow-600" />
        <StatCard value=">3%" label="In Churn Rate" color="text-red-600" />
      </div>

      {/* ====================== BOOST BUSINESS SECTION ====================== */}
      <div className="bg-green-50 rounded-3xl mt-16 py-16 px-6 md:px-12 text-center relative overflow-hidden">
        {/* Icon Image */}
        <img
          src="https://placehold.co/150x150/4A90E2/FFFFFF?text=📊"
          alt="ROI Edge Dashboard"
          className="w-32 mx-auto mb-6"
        />

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Boost Your Business With ROI Edge
        </h2>

        <p className="text-gray-600 mb-6 text-lg max-w-3xl mx-auto">
          Generate consistent leads, reduce acquisition costs, and grow your revenue with a fully managed, ROI-driven client acquisition system.
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
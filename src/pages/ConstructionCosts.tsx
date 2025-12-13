import React, { useEffect, useState } from "react";
import { Search, MapPin } from "lucide-react";

export default function ConstructionCosts() {
  const categories = [
    "All","Appliances","Cabinets","Ceiling","Cleaning","Concrete","Countertops","Demolition","Doors","Drywall","Electrical","Excavation","Flooring","Framing","HVAC","Insulation","Landscaping","Masonry","Other","Painting","Plumbing","Roofing","Siding","Specialties","Tile","Trim","Windows",
  ];

  const items = [
    "Cost To Install Gas Dryer In The US",
    "Cost To Install A Gas Stove In The US",
    "Cost To Install Microwave Oven In The US",
    "Cost To Install A Microwave Over The Range In The US",
    "Cost To Repair Appliances In The US",
    "Cost To Install Dishwasher In The US",
    "Cost To Install Gas Cooktop In The US",
  ];

  useEffect(() => {
  window.scrollTo(0, 0); // 🔥 Page opens from top
}, []);

  return (
    <div className="bg-[#f8f8f8] min-h-screen pb-20 pt-10 px-4 md:px-10">
      {/* Header */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Construction Costs for Contractors
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Get accurate, up-to-date construction cost estimates for any project. Search
        our free online construction estimating database below.
      </p>

      {/* Search + Location */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-4 md:p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg flex-1">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Find a Service"
              className="bg-transparent outline-none flex-1"
            />
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg md:w-60 cursor-pointer">
            <MapPin size={18} className="text-gray-500" />
            <span className="text-gray-700 flex-1">National Average, US</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full border text-sm font-medium ${
              index === 0 ? "bg-green-600 text-white border-green-600" : "bg-white border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border cursor-pointer hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-2">{item}</h3>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium uppercase">Appliances</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> United States</span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-10">
        <button className="px-8 py-3 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-700 transition">
          Load More
        </button>
      </div>
    </div>
  );
}
import React from "react";

const Services: React.FC = () => {
  return (
    <section className="bg-white text-black py-20 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="block">WHAT WE <span className="outline-text">DELIVER</span> AND</span>
          <span className="block">
            HOW WE DRIVE <span className="outline-text">IMPACT</span>
          </span>
        </h2>
      </div>

      <div className="text-gray-700 text-sm font-semibold mb-8 text-center md:text-left">
        OUR DIGITAL MARKETING SERVICES:
      </div>

      <div className="grid md:grid-cols-3 gap-12 text-lg">
        {/* Column 1 */}
        <div>
          <p className="font-bold">01 /</p>
          <p className="border-b border-gray-300 pb-2">eCommerce Strategy (CHASSM™)</p>

          <p className="font-bold mt-8">04 /</p>
          <p className="border-b border-gray-300 pb-2">Email Marketing</p>
        </div>

        {/* Column 2 */}
        <div>
          <p className="font-bold">02 /</p>
          <p className="border-b border-gray-300 pb-2">Social Media Advertising</p>

          <p className="font-bold mt-8">05 /</p>
          <p className="border-b border-gray-300 pb-2">SMS Marketing</p>
        </div>

        {/* Column 3 */}
        <div>
          <p className="font-bold">03 /</p>
          <p className="border-b border-gray-300 pb-2">Google Advertising</p>

          <p className="font-bold mt-8">+</p>
          <p className="border-b border-gray-300 pb-2">Our Methodology</p>
        </div>
      </div>

      {/* Outline text styling */}
      <style >{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1.5px black;
        }
      `}</style>
    </section>
  );
};

export default Services;

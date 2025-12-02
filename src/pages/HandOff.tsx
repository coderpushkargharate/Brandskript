import React from "react";
import { Play } from "lucide-react";

const HandOff = () => {
  return (
    <div className="w-full">

      {/* ---------------------- VIDEO + TEXT SECTION ----------------------- */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-16 px-4">
        {/* Left Video */}
        <div className="bg-white rounded-2xl shadow p-4 flex justify-center items-center">
          <div className="relative">
            <img
              src="https://cdn.prod.website-files.com/6650cddf762ba9b692753dc0/667b0bf0516a6deffb5daad7_video_EJ%20Elliot.webp"
              alt="Video"
              className="rounded-xl w-full"
            />
            <button className="absolute inset-0 m-auto bg-white rounded-full p-4 shadow-lg">
              <Play size={32} className="text-black" />
            </button>

            <p className="absolute bottom-4 left-0 right-0 mx-auto bg-black text-white px-3 py-1 rounded-md text-sm w-max">
              Using HandOff to close $118,000
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Learn how EJ Elliot made $118,000 in his first month using HandOff.
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            HandOff delivered a detailed estimate for a down-to-the-studs
            high-end remodel that enabled EJ to go from site visit to a
            $118,000 winning bid in under 24 hours.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <img
              src="https://i.ibb.co/zWJ8x6j/avatar.png"
              className="w-10 h-10 rounded-full"
              alt="avatar"
            />
            <div>
              <p className="font-semibold">EJ Elliot</p>
              <p className="text-sm text-gray-500">
                Bellamore Contracting & Renovations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- SUPPLIER LOGOS ----------------------- */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold">Integrated with top</h2>
        <p className="text-2xl font-bold -mt-1">construction suppliers</p>

        <div className="flex flex-wrap justify-center gap-10 mt-10 grayscale opacity-70">
          {[
            "https://i.ibb.co/dmr9wVW/logo1.png",
            "https://i.ibb.co/Yf9CkZR/logo2.png",
            "https://i.ibb.co/Fq5vC47/logo3.png",
            "https://i.ibb.co/TtGq7V3/logo4.png",
            "https://i.ibb.co/ysS8J3t/logo5.png",
            "https://i.ibb.co/vmqhRxr/logo6.png",
            "https://i.ibb.co/6XxSg5M/logo7.png",
          ].map((logo, index) => (
            <img key={index} src={logo} alt="Supplier" className="h-10" />
          ))}
        </div>
      </section>

      {/* ---------------------- ACCURATE ESTIMATE SECTION ----------------------- */}
      <section className="bg-[#FFF3DF] py-16 rounded-2xl max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold leading-tight">
            HandOff creates accurate estimates in seconds.
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            You will finally have the time to start working on <b>your business</b>, 
            not in your business.
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow hover:bg-green-600">
            Get started now
          </button>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://i.ibb.co/nnD58Vt/phones.png"
            alt="Estimate"
            className="rounded-xl w-[380px] md:w-[480px]"
          />
        </div>
      </section>

      {/* ---------------------- WHO IS HANDOFF FOR ----------------------- */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-center text-3xl font-bold">Who is HandOff for?</h2>
        <p className="text-center text-gray-600 mt-2">
          If you are an owner of a residential construction business, HandOff is for you.
          Supercharge your growth and let us handle your operations on autopilot.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <div className="relative rounded-xl overflow-hidden shadow group">
            <img
              src="https://i.ibb.co/bb8CS4P/remodelers.jpg"
              className="w-full h-64 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-xl font-bold">Remodelers</h3>
              <p className="text-white text-sm">Grow your business without adding overhead</p>
              <button className="text-white mt-2 underline">Learn more →</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl overflow-hidden shadow group">
            <img
              src="https://i.ibb.co/BnKVdMF/handyman.jpg"
              className="w-full h-64 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-xl font-bold">Handyman</h3>
              <p className="text-white text-sm">Bid on bigger jobs with confidence</p>
              <button className="text-white mt-2 underline">Learn more →</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-xl overflow-hidden shadow group">
            <img
              src="https://i.ibb.co/Ydf4BLf/fixflip.jpg"
              className="w-full h-64 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-xl font-bold">Fix and flip</h3>
              <p className="text-white text-sm">Instantly assess investment opportunities and get funded</p>
              <button className="text-white mt-2 underline">Learn more →</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HandOff;

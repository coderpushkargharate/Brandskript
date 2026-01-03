import React, { useEffect, useState } from "react";

/* ---------- COUNT UP COMPONENT ---------- */
const CountUp = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * end);
      setCount(value);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

/* ---------- HERO SECTION ---------- */
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-24 pb-20">

      {/* ===== OUTER BOX ===== */}
      <div className="relative overflow-hidden rounded-[32px] border border-gray-200 shadow-xl">

        {/* ===== BRAND GRADIENT BACKGROUND ===== */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-green-100" />

        {/* Decorative Blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-40 -right-24 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-40" />

        {/* ===== CONTENT ===== */}
        <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-md border border-blue-200 px-5 py-2 rounded-full w-fit mb-6 shadow-sm">
              <span className="text-xs tracking-widest font-semibold uppercase text-blue-600">
                AI ESTIMATOR FOR REMODELERS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-900">
              We Solve Growth <br />
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                With ROI Client Acquisition Systems
              </span>
            </h1>

            <p className="mt-6 text-gray-700 max-w-xl text-lg italic">
              Where performance meets accountability, and guaranteed results
              replace empty promises.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg">
                Book An Appointment
              </button>

              <button className="bg-white/80 backdrop-blur border border-blue-200 text-blue-600 px-8 py-3 rounded-full font-semibold shadow-sm">
                Case Studies
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="absolute -z-10 w-80 h-80 bg-gradient-to-tr from-blue-400 to-green-400 rounded-full blur-3xl opacity-40" />
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
              alt="Growth System"
              className="rounded-3xl shadow-2xl w-full max-w-md border border-white/70"
            />
          </div>
        </div>
      </div>

   

   {/* ===== NEW IMAGE DATA SECTION ===== */}
<div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 text-center">
  <div className="border-2 border-gray-300 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-6 gap-8 items-center">

    {/* Left Column: Headline */}
    <div className="md:col-span-1 text-left">
      <h3 className="text-2xl font-extrabold">See Immediate Results</h3>
    </div>

    {/* Stat 1 */}
    <div>
      <h4 className="text-3xl font-extrabold">
        <span className="relative">
          <CountUp end={15000} prefix="+$" />
          <span className="absolute bottom-[-4px] left-0 right-0 h-3 bg-yellow-300 rounded-sm"></span>
        </span>
      </h4>
      <p className="text-sm text-gray-600 mt-1">Saved on Team Hiring</p>
    </div>

    {/* Stat 2 */}
    <div>
      <h4 className="text-3xl font-extrabold">
        <span className="relative">
          <CountUp end={80} suffix=" hrs" />
          <span className="absolute bottom-[-4px] left-0 right-0 h-3 bg-yellow-300 rounded-sm"></span>
        </span>
      </h4>
      <p className="text-sm text-gray-600 mt-1">Saved weekly</p>
    </div>

    {/* Stat 3 */}
    <div>
      <h4 className="text-3xl font-extrabold">
        <span className="relative">
          <CountUp end={60} suffix="%" />
          <span className="absolute bottom-[-4px] left-0 right-0 h-3 bg-yellow-300 rounded-sm"></span>
        </span>
      </h4>
      <p className="text-sm text-gray-600 mt-1">ROI Compared to others</p>
    </div>

    {/* Stat 4 */}
    <div>
      <h4 className="text-3xl font-extrabold">
        <span className="relative">
          <CountUp end={400} suffix="%" />
          <span className="absolute bottom-[-4px] left-0 right-0 h-3 bg-yellow-300 rounded-sm"></span>
        </span>
      </h4>
      <p className="text-sm text-gray-600 mt-1">More Clients Acquired</p>
    </div>

    {/* Image Column (Right Side) */}
    <div className="md:col-span-1 flex justify-center items-center">
      <img
        src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6650cddf762ba9b692753e22_AI.webp" // 👈 Replace with your actual image path
        alt="Green monster with crown"
        className="h-24 w-auto object-contain"
      />
    </div>

  </div>
</div>
    </section>
  );
};

export default HeroSection;

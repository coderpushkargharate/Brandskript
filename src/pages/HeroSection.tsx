import React, { useEffect, useState } from "react";

/* ---------- COUNT UP COMPONENT ---------- */
const CountUp = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * end);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
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
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-24 pb-10">

      {/* ===== OUTER BOX ===== */}
      <div className="relative overflow-hidden rounded-[32px] border border-gray-200 shadow-xl">

        {/* ===== BRAND GRADIENT BACKGROUND ===== */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-green-100" />

        {/* Soft Decorative Blobs */}
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
              Win more jobs <br />
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                with AI-powered estimates
              </span>
            </h1>

            <p className="mt-6 text-gray-700 max-w-xl text-lg">
              Create accurate remodeling estimates in minutes.
              Increase close rates and impress clients with professional proposals.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg">
                Start an estimate
              </button>

              <button className="bg-white/80 backdrop-blur border border-blue-200 text-blue-600 px-8 py-3 rounded-full font-semibold shadow-sm">
                Watch demo
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="absolute -z-10 w-80 h-80 bg-gradient-to-tr from-blue-400 to-green-400 rounded-full blur-3xl opacity-40" />
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
              alt="AI Estimator"
              className="rounded-3xl shadow-2xl w-full max-w-md border border-white/70"
            />
          </div>
        </div>
      </div>

      {/* ===== METRICS ROW (COUNTING) ===== */}
      <div className="max-w-7xl mx-auto sm:pt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4 sm:px-6">

        <div>
          <h3 className="text-2xl sm:text-4xl font-extrabold">
            <CountUp end={5250} prefix="↑$" />
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            More earned weekly
          </p>
        </div>

        <div>
          <h3 className="text-2xl sm:text-4xl font-extrabold">
            <CountUp end={14} suffix=" hrs" />
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Saved weekly
          </p>
        </div>

        <div>
          <h3 className="text-2xl sm:text-4xl font-extrabold">
            <CountUp end={40} suffix="%" />
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            More deals closed
          </p>
        </div>

        <div>
          <h3 className="text-2xl sm:text-4xl font-extrabold">
            <CountUp end={85000} prefix="+$" />
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            In annual profit
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

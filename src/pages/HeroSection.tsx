import React, { useEffect, useState } from "react";

/* ---------- COUNT UP ---------- */
const CountUp = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

/* ---------- HERO SECTION ---------- */
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-24 pb-8">

      {/* ===== HERO BOX ===== */}
      <div className="relative overflow-hidden rounded-[32px] bg-[#0074ff] border border-white/20 shadow-2xl">

        {/* BLOBS */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#d2fe3a] blur-3xl opacity-30 rounded-full" />
        <div className="absolute top-40 -right-24 w-96 h-96 bg-white blur-3xl opacity-20 rounded-full" />

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="hidden lg:inline-flex items-center bg-white/15 backdrop-blur border border-white/30 px-5 py-2 rounded-full mb-6">
              <span className="text-xs tracking-widest uppercase text-[#d2fe3a] noir-pro">
                AI ESTIMATOR FOR REMODELERS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight text-white dm-sans">
              We Solve Growth With ROI-Deriven<br />
              <span className="text-[#d2fe3a]">
                Client Acquisition Systems
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/90 italic noir-pro">
              Where performance meets accountability, and guaranteed results
              replace empty promises.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-[#d2fe3a] text-[#0074ff] px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
                Book An Appointment
              </button>

              <button className="bg-white/10 border border-white/40 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition">
                Case Studies
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -z-10 w-80 h-80 bg-[#d2fe3a] blur-3xl opacity-30 rounded-full" />
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
              alt="Growth System"
              className="rounded-3xl shadow-2xl max-w-md w-full border border-white/30"
            />
          </div>
        </div>
      </div>


      {/* ===== DATA SECTION (PERFECTLY ALIGNED) ===== */}
   <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6">
  <div className="p-12 grid grid-cols-1 md:grid-cols-5 gap-12 items-start">

    {/* TITLE */}
    <div className="md:col-span-1 flex items-center">
      <h3 className="text-3xl noir-pro leading-snug">
        See <br /> Immediate Results
      </h3>
    </div>

    {/* STAT ITEMS */}
    <div className="md:col-span-4 flex justify-between">
      {[
        { end: 15000, prefix: "+$", label: "Saved on Team Hiring" },
        { end: 80, suffix: " hrs", label: "Saved Weekly" },
        { end: 60, suffix: "%", label: "ROI Compared" },
        { end: 400, suffix: "%", label: "More Clients" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center flex-1 mx-2">
          <h4 className="text-5xl font-bold dm-sans relative inline-block">
            <CountUp {...item} />
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#c8f75b] rounded-sm"></span>
          </h4>
          <p className="mt-3 text-sm text-gray-600 noir-pro text-center">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>


    </section>
  );
};

export default HeroSection;

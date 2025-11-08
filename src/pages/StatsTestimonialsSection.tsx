import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const StatsSection = () => {
  const stats = [
    { value: 300, suffix: "+", label: "Businesses and agencies" },
    { value: 27, suffix: "k+", label: "Videos edited and delivered" },
    { value: 50, suffix: "%", label: "Cost Reduction" },
    { value: 300, suffix: "k+", label: "Saved by businesses" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  // 👇 Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // 👇 Detect when section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 👇 Start count-up animation when visible
  useEffect(() => {
    if (!startCount) return;

    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, i) => {
      let current = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          clearInterval(timer);
          current = stat.value;
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(current);
          return updated;
        });
      }, interval);
    });
  }, [startCount]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-white to-gray-100 py-20 transition-all duration-700"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div
          className="text-center md:text-left space-y-6"
          data-aos="fade-right"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            The Best{" "}
            <span className="text-indigo-600">Return On Your Investment</span>
          </h2>
          <p className="uppercase text-gray-500 tracking-wider text-xs font-medium">
            SUCCESS IN NUMBER
          </p>
          <button
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md transition"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Start Working Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* Right Stats */}
        <div
          className="grid grid-cols-2 gap-x-12 gap-y-10 text-center md:text-left"
          data-aos="fade-left"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`relative ${
                i === 0 || i === 2 ? "border-r border-gray-300" : ""
              } pr-6`}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-700">
                {counts[i]}
                {stat.suffix}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

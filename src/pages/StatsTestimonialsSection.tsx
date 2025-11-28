import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const StatsSection = () => {
  const stats = [
    { value: 8.8, suffix: "/10", label: "Rating" },
    { value: 300, suffix: "+", label: "Clients" },
    { value: 8000, suffix: "+", label: "Campaigns" },
    { value: 80, suffix: "%", label: "High ROI" },
    { value: 200, suffix: "k+", label: "Saved by businesses" },
    { value: 1, suffix: "M+", label: "In Ad Spend Managed" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

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
          updated[i] = stat.value < 10 ? current.toFixed(1) : Math.floor(current);
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
        <div className="text-center md:text-left space-y-6" data-aos="fade-right">
          <h2
            style={{ fontFamily: "var(--h2-font-family)", color: "var(--h2-color)" }}
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
          >
            The Best{" "}
            <span className="text-indigo-600">Return On Your Investment</span>
          </h2>
          <p className="uppercase text-gray-500 tracking-wider text-xs font-medium">
            SUCCESS IN NUMBERS
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M18 12H6" />
            </svg>
          </button>
        </div>

        {/* Right Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10 text-center md:text-left"
          data-aos="fade-left"
        >
          {stats.map((stat, i) => (
            <div key={i} className="relative" data-aos="zoom-in" data-aos-delay={i * 150}>
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

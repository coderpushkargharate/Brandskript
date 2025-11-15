import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    logo: "https://righthookdigital.com/wp-content/uploads/2025/08/Koahanna-Logo-Black.png",
    title: "FROM REVENUE CEILING TO RECORD $50K PROFIT: HOW KA’OHANA TRUMPED TARIFFS",
    description:
      "How RH helped Ka’Ohana hit $50K profit and record revenue, even after tariffs forced them to retire their best-selling product.",
    imageGrid: [
      "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/KaOhana-Landscape-ra56apndl9oycwe3z0izlxz1tg4bb64olog9ux8x9g.jpg",
    ],
    highlights: [
      { label: "Record growth &", value: "$50K profit in 1 month" },
      { label: "Emotion-led creative", value: "into scaling" },
      { label: "Niche", value: "Personalizable Jewelry" },
      { label: "Services", value: "Paid Social" },
    ],
  },
  {
    id: 2,
    logo: "https://righthookdigital.com/wp-content/uploads/2025/07/LittleTrouble-Black.png",
    title: "FROM ROCK BOTTOM TO 136% GROWTH. LITTLE TROUBLE’S SUCCESS STORY.",
    description:
      "Little Trouble went from being down substantially to having the best month in the brand’s history within weeks of starting with Right Hook.",
    imageGrid: [
      "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/LittleTrouble-scaled-r9hr1o4jt96vajots0kv9fr4iy4844ry89q6inxqhw.jpg",
    ],
    highlights: [
      { label: "138% Revenue Growth", value: "YoY" },
      { label: "Same Ad Spend", value: "3x Performance" },
      { label: "First 7-Figure", value: "Months on Track" },
      { label: "Services", value: "Paid Social, Google PPC" },
    ],
  },
  {
    id: 3,
    logo: "https://righthookdigital.com/wp-content/uploads/2025/07/SillyGeorge-Logo.png",
    title: "FROM STRESS TO SCALE: TURNING A 6-MONTH STALL INTO A $20K/DAY GROWTH MACHINE",
    description:
      "How RH helped get Silly George back in profit after an extended decline, with consistent $15–20K days and a full-funnel strategy scaling across platforms.",
    imageGrid: [
      "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/SillyGeorge-r8v9i1fakvr9ueft40rs78bpw5d2itkzoow6ylhld0.jpg",
    ],
    highlights: [
      { label: "Consistent", value: "$15–20K days" },
      { label: "Global DTC brand", value: "multiple markets" },
      { label: "Niche", value: "Beauty" },
      { label: "Services", value: "Paid Social, Google PPC" },
    ],
  },
];

const CaseStudy = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-28">
        {caseStudies.map((study, index) => (
          <div
            key={study.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
            data-aos={index % 2 === 0 ? "fade-up" : "fade-left"}
          >
            {/* Left Content */}
            <div data-aos="zoom-in">
              {study.logo && (
                <img
                  src={study.logo}
                  alt="Logo"
                  className="h-10 mb-6 object-contain"
                  data-aos="fade-right"
                />
              )}
              <h2
                style={{
                  fontFamily: "var(--h2-font-family)",
                  color: "var(--h2-color)",
                }}
                className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4"
                data-aos="fade-up"
              >
                {study.title}
              </h2>
              <p
                className="text-gray-600 text-base leading-relaxed mb-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {study.description}
              </p>

              <div
                className="border-t border-gray-300 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {study.highlights.map((item, i) => (
                  <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                    <p className="font-semibold text-black">{item.label}</p>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                ))}
                <div
                  className="col-span-2 sm:col-span-4 mt-4"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <Link
                    to={`/case-study/${study.id}`}
                    className="text-black font-medium hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="grid grid-cols-2 gap-4"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay="150"
            >
              <img
                src={study.imageGrid[0]}
                alt={study.title}
                className="rounded-lg w-full h-[400px] object-cover col-span-2 shadow-md hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;

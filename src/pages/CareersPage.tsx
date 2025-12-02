import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CareersPage = () => {
  // Slider settings
  const valueSlider = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const teamSlider = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="w-full bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-green-600 text-white p-10 rounded-b-3xl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="px-3 py-1 bg-white text-black rounded-full text-sm font-semibold">
              Careers
            </span>
            <h1 className="text-5xl font-bold mt-4 leading-tight">
              We're Growing Our Team
            </h1>
            <p className="mt-4 text-white/90">
              We’re building the AI agent that runs construction businesses.
              We help remodelers automate estimates and streamline operations.
            </p>
            <button className="mt-6 bg-white text-green-600 px-6 py-3 font-semibold rounded-full">
              Join the Team
            </button>
          </div>

          <div>
            <img
              src="https://i.ibb.co/khqZqZ7/team.png"
              alt="team"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ================= COMPANY MISSION ================= */}
      <section className="max-w-6xl mx-auto py-16 px-5 text-center">
        <h2 className="text-3xl font-bold">
          Handoff is changing residential construction forever
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          We're developing the first AI agent that can run a construction business.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white shadow p-6 rounded-xl">
            <h3 className="font-bold text-green-700">Vision</h3>
            <p className="text-gray-600 mt-2">
              Creating AI that can run a construction business.
            </p>
          </div>

          <div className="bg-white shadow p-6 rounded-xl">
            <h3 className="font-bold text-green-700">Product</h3>
            <p className="text-gray-600 mt-2">
              Building the first AI-native construction product.
            </p>
          </div>

          <div className="bg-white shadow p-6 rounded-xl">
            <h3 className="font-bold text-green-700">Impact</h3>
            <p className="text-gray-600 mt-2">
              Building towards a future of affordable housing.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="w-full bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-5">

          <h2 className="text-3xl font-bold text-center">
            Benefits of joining Handoff
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              "Competitive salary in USD",
              "Attractive stock options",
              "Unlimited PTO",
              "Relocation allowance",
              "Top-notch equipment",
              "Regular offsites around the world"
            ].map((item, i) => (
              <div key={i} className="bg-white shadow p-5 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-600"></div>
                <span className="font-semibold text-gray-700">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= LATEST JOBS ================= */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Latest jobs</h2>
        <div className="w-8 h-8 border-4 border-green-600 border-t-transparent animate-spin rounded-full mx-auto mt-6"></div>
      </section>

      {/* ================= OUR HANDOFF VALUES — CAROUSEL ================= */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Handoff values</h2>

          <Slider {...valueSlider}>
            {/* Card 1 */}
            <div className="px-4">
              <div className="bg-white p-6 rounded-2xl shadow">
                <img src="https://i.ibb.co/HPp517F/val1.png" className="rounded-xl" />
                <h3 className="font-bold mt-4">Delight customers daily</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  We always put customers first and celebrate delight.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="px-4">
              <div className="bg-white p-6 rounded-2xl shadow">
                <img src="https://i.ibb.co/g4L6VXz/val2.png" className="rounded-xl" />
                <h3 className="font-bold mt-4">Step up to the challenge</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Tackle big problems and grow outside comfort zone.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="px-4">
              <div className="bg-white p-6 rounded-2xl shadow">
                <img src="https://i.ibb.co/2jFqsXf/val3.png" className="rounded-xl" />
                <h3 className="font-bold mt-4">Seek and speak the truth</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Communicate honestly with clarity and accuracy.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* ================= TEAM — CAROUSEL ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-10">Our team</h2>

          <Slider {...teamSlider}>
            {[
              "https://i.ibb.co/WfSsgDz/team1.png",
              "https://i.ibb.co/VxPjtkf/team2.png",
              "https://i.ibb.co/2gCZGkB/team3.png",
              "https://i.ibb.co/vHC5qRt/team4.png",
              "https://i.ibb.co/Qj7Vv3v/team5.png"
            ].map((img, i) => (
              <div key={i} className="px-4">
                <img src={img} className="rounded-xl shadow-lg" />
              </div>
            ))}
          </Slider>

        </div>
      </section>

    </div>
  );
};

export default CareersPage;

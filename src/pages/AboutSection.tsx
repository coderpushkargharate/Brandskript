import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      {/* ---------- SEO SECTION ---------- */}
      <Helmet>
        <title>About Us | Discover Our Mission & Vision</title>
        <meta
          name="description"
          content="Learn about our dedicated team focused on design, marketing, and advertising. Discover our mission to empower businesses with measurable growth and impactful digital presence."
        />
        <meta
          name="keywords"
          content="About Us, Digital Marketing Team, Creative Agency, Mission, Vision, Business Growth, Branding, Design Agency"
        />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="About Us - Discover Our Mission" />
        <meta
          property="og:description"
          content="We help businesses grow through design, marketing, and advertising services."
        />
        <meta
          property="og:image"
          content="https://framerusercontent.com/images/fv5yPBmjikTk2Jc47v6BFoFyxg.png"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourwebsite.com/about" />
      </Helmet>
      {/* -------------------------------- */}

      <section className="bg-white text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src="https://framerusercontent.com/images/fv5yPBmjikTk2Jc47v6BFoFyxg.png"
              alt="Team working together"
              className="rounded-2xl shadow-xl w-full max-w-lg object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" data-aos-delay="200">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              About Us
            </span>

            <h2
              style={{
                fontFamily: "var(--h2-font-family)",
                color: "var(--h2-color)",
              }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Discover Who We Are <br /> and Our Mission
            </h2>

            <p
              className="text-gray-600 text-lg leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              We are a dedicated team of professionals with a results-oriented
              mindset in design, marketing, and advertising. Our mission is to
              empower businesses to thrive by delivering measurable outcomes
              that drive growth and enhance brand presence.
            </p>

            <div
              className="flex flex-wrap gap-4 mb-8"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-base font-medium px-6 py-3 rounded-full transition duration-300 flex items-center gap-2 shadow-md hover:shadow-lg">
                Contact Us <ArrowRight size={18} />
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 text-base font-medium px-6 py-3 rounded-full transition duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
                View Projects <ArrowRight size={18} />
              </button>
            </div>

            {/* Founder Card */}
            <div
              className="flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-4 max-w-md shadow-sm hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/6vwvEXYU4xGIl5vfLjnvLYP9NXo.png"
                    alt="Shubham Channagire"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 leading-tight">
                    Shubham Channagire
                  </p>
                  <p className="text-sm text-gray-500">Founder</p>
                </div>
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
                  alt="Twitter/X Logo"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;

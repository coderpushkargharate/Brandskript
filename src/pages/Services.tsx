import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  const leadRef = useRef(null);
  const adRef = useRef(null);
  const emailRef = useRef(null);
  const otherRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white text-black overflow-hidden">
      {/* ================= Header Section ================= */}
      <section className="text-center py-20 px-6 md:px-16 lg:px-24">
        <h2
          style={{
            fontFamily: "var(--h2-font-family)",
            color: "var(--h2-color)",
          }}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-8"
        >
          <span className="block">
            WHAT WE <span className="outline-text">DELIVER</span> AND
          </span>
          <span className="block">
            HOW WE DRIVE <span className="outline-text">IMPACT</span>
          </span>
        </h2>
        <p className="text-gray-700 text-sm font-semibold mb-12">
          OUR DIGITAL MARKETING SERVICES:
        </p>

        {/* Services List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-lg cursor-pointer text-left">
          <div
            onClick={() => scrollToSection(leadRef)}
            className="group transition"
          >
            <p className="font-bold group-hover:text-blue-600">01 /</p>
            <p className="border-b border-gray-300 pb-2 group-hover:text-blue-600">
              Qualified Lead Generation
            </p>
          </div>

          <div
            onClick={() => scrollToSection(adRef)}
            className="group transition"
          >
            <p className="font-bold group-hover:text-blue-600">02 /</p>
            <p className="border-b border-gray-300 pb-2 group-hover:text-blue-600">
              Ad Expertise (Meta, Google & Linkedin)
            </p>
          </div>

          <div
            onClick={() => scrollToSection(emailRef)}
            className="group transition"
          >
            <p className="font-bold group-hover:text-blue-600">03 /</p>
            <p className="border-b border-gray-300 pb-2 group-hover:text-blue-600">
              Email Marketing
            </p>
          </div>

          <div
            onClick={() => scrollToSection(otherRef)}
            className="group transition"
          >
            <p className="font-bold group-hover:text-blue-600">04 /</p>
            <p className="border-b border-gray-300 pb-2 group-hover:text-blue-600">
              Others
            </p>
          </div>
        </div>
      </section>

      {/* ================= Section 01 – Qualified Lead Generation ================= */}
      <section
        ref={leadRef}
        className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-20 bg-white"
      >
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <h2 className="text-2xl font-bold text-blue-700 underline">01</h2>
          <h1 className="text-5xl font-extrabold leading-tight">
            QUALIFIED LEAD GENERATION
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            We create strategic funnels that capture high-quality leads through targeted
            campaigns and data-driven insights — ensuring your sales team focuses on
            prospects that convert.
          </p>
          <Link
            to="/ServicesBookCall"
            className="font-semibold border-b-2 border-black hover:text-blue-600"
          >
            Get started →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            src="https://righthookdigital.com/wp-content/uploads/2022/02/ChassmHero-1024x927.png"
            alt="Lead Generation"
            className="max-w-full h-auto"
          />
        </motion.div>
      </section>

      {/* ================= Section 02 – Ad Expertise ================= */}
      <section
        ref={adRef}
        className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-20 bg-black text-white"
      >
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-400 underline">02</h2>
          <h1 className="text-5xl font-extrabold leading-tight">
            AD EXPERTISE (META, GOOGLE & LINKEDIN)
          </h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Drive performance and conversions across major ad platforms. Our experts craft
            audience-focused ad strategies optimized for ROI and growth.
          </p>
          <Link
            to="/ServicesBookCall"
            className="font-semibold border-b-2 border-white hover:text-blue-400"
          >
            Get started →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            src="https://righthookdigital.com/wp-content/uploads/2022/02/SocialMediaAdvertising-1024x971.png"
            alt="Ad Expertise"
            className="max-w-full h-auto"
          />
        </motion.div>
      </section>

      {/* ================= Section 03 – Email Marketing ================= */}
      <section
        ref={emailRef}
        className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-20 bg-white"
      >
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <h2 className="text-2xl font-bold text-blue-700 underline">03</h2>
          <h1 className="text-5xl font-extrabold leading-tight">
            EMAIL MARKETING
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Build customer loyalty and retention through personalized, automated, and
            impactful email journeys that keep your audience engaged.
          </p>
          <Link
            to="/ServicesBookCall"
            className="font-semibold border-b-2 border-black hover:text-blue-600"
          >
            Get started →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            src="/assets/img/Services/email.png"
            alt="Email Marketing"
            className="max-w-full h-auto"
          />
        </motion.div>
      </section>

      {/* ================= Section 04 – Others ================= */}
      <section
        ref={otherRef}
        className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-20 bg-black text-white"
      >
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-400 underline">04</h2>
          <h1 className="text-5xl font-extrabold leading-tight">OTHERS</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            From performance analytics to creative optimization, we offer additional
            digital services that enhance your marketing ecosystem and boost results.
          </p>
          <Link
            to="/ServicesBookCall"
            className="font-semibold border-b-2 border-white hover:text-blue-400"
          >
            Get started →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            src="https://righthookdigital.com/wp-content/uploads/2022/02/SMSMarketing-Hero-1003x1024.png"
            alt="Others"
            className="max-w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Outline text style */}
      <style>{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1.5px black;
        }
      `}</style>
    </div>
  );
};

export default Services;

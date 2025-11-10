import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Services: React.FC = () => {
  // Refs for each service section
  const ecomRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const googleRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const smsRef = useRef<HTMLDivElement>(null);
  const methodRef = useRef<HTMLDivElement>(null);

  // Smooth scroll
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white text-black overflow-hidden">
      {/* ================= Header Section ================= */}
      <section className="text-center py-20 px-6 md:px-16 lg:px-24">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-8">
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
        <div className="grid md:grid-cols-3 gap-12 text-lg cursor-pointer text-left">
          <div onClick={() => scrollToSection(ecomRef)} className="group transition">
            <p className="font-bold group-hover:text-blue-600">01 /</p>
            <p className="border-b border-gray-300 pb-2 group-hover:text-blue-600">
              eCommerce Strategy (CHASSM™)
            </p>
          </div>

          <div onClick={() => scrollToSection(socialRef)} className="group transition">
            <p className="font-bold group-hover:text-blue-600">02 /</p>
            <p className="border-b border-gray-300 pb-2 group-hover:text-blue-600">
              Social Media Advertising
            </p>
          </div>

          <div onClick={() => scrollToSection(googleRef)} className="group transition">
            <p className="font-bold group-hover:text-blue-600">03 /</p>
            <p className="border-b border-gray-300 pb-2 group-hover:text-blue-600">
              Google Advertising
            </p>
          </div>

          <div onClick={() => scrollToSection(emailRef)} className="group transition">
            <p className="font-bold group-hover:text-blue-600">04 /</p>
            <p className="border-b border-gray-300 pb-2 group-hover:text-blue-600">
              Email Marketing
            </p>
          </div>

          <div onClick={() => scrollToSection(smsRef)} className="group transition">
            <p className="font-bold group-hover:text-blue-600">05 /</p>
            <p className="border-b border-gray-300 pb-2 group-hover:text-blue-600">
              SMS Marketing
            </p>
          </div>

          <div onClick={() => scrollToSection(methodRef)} className="group transition">
            <p className="font-bold group-hover:text-blue-600">06 /</p>
            <p className="border-b border-gray-300 pb-2 group-hover:text-blue-600">
              Our Methodology
            </p>
          </div>
        </div>
      </section>

      {/* ================= Fixed Left Navigation ================= */}
      <div className="fixed top-1/2 left-6 transform -translate-y-1/2 z-20 flex flex-col space-y-4">
        {[ecomRef, socialRef, googleRef, emailRef, smsRef, methodRef].map(
          (ref, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(ref)}
              className="text-lg font-bold hover:text-blue-600 transition-colors"
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          )
        )}
      </div>

      {/* ================= Section 01 – Ecommerce Strategy ================= */}
      <section
        ref={ecomRef}
        id="ecommerce"
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
            ECOMMERCE STRATEGY (CHASSM™)
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            <strong>CHASSM™</strong> – Our proprietary strategic planning process designed
            to bridge the gap between you and the competition. This is the foundation for
            building 7 & 8-figure powerhouse brands.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="font-semibold border-b-2 border-black hover:text-blue-600">
              Find out more →
            </a>


            <Link
              to="/ServicesBookCall"
              className="font-semibold border-b-2 border-white hover:text-blue-400 transition-colors duration-200"
            >
              Get started →
            </Link>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            src="/assets/img/Services/chassm.png"
            alt="Ecommerce Strategy Graphic"
            className="max-w-full h-auto"
          />
        </motion.div>
      </section>

      {/* ================= Section 02 – Social Media Advertising ================= */}
      <section
        ref={socialRef}
        id="social"
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
            SOCIAL MEDIA ADVERTISING
          </h1>
          <p className="text-lg leading-relaxed text-gray-300">
            At the core of any eCommerce brand looking for serious growth, social
            advertising is a non-negotiable. Our elite specialists drive ROI for every
            dollar spent.
          </p>
          <p className="text-sm text-gray-400">
            Facebook / Instagram / Pinterest / Snapchat / TikTok Advertising
          </p>
          <Link
            to="/ServicesBookCall"
            className="font-semibold border-b-2 border-white hover:text-blue-400 transition-colors duration-200"
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
            src="/assets/img/Services/social-ads.png"
            alt="Social Media Advertising Graphic"
            className="max-w-full h-auto"
          />
        </motion.div>
      </section>

      {/* ================= Section 03 – Google Advertising ================= */}
      <section
        ref={googleRef}
        id="google"
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
          <h1 className="text-5xl font-extrabold leading-tight">GOOGLE ADVERTISING</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Maximize ROI through precision-targeted Google Ads and Display campaigns that
            convert browsers into buyers.
          </p>
          <Link
            to="/ServicesBookCall"
            className="font-semibold border-b-2 border-white hover:text-blue-400 transition-colors duration-200"
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
            src="/assets/img/Services/google-ads.png"
            alt="Google Advertising Graphic"
            className="max-w-full h-auto"
          />
        </motion.div>
      </section>

      {/* ================= Section 04 – Email Marketing ================= */}
      <section
        ref={emailRef}
        id="email"
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
          <h1 className="text-5xl font-extrabold leading-tight">EMAIL MARKETING</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Build customer loyalty and retention through powerful, automated, and
            personalized email journeys.
          </p>
          <Link
            to="/ServicesBookCall"
            className="font-semibold border-b-2 border-white hover:text-blue-400 transition-colors duration-200"
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
            alt="Email Marketing Graphic"
            className="max-w-full h-auto"
          />
        </motion.div>
      </section>

      {/* ================= Section 05 – SMS Marketing ================= */}
      <section
        ref={smsRef}
        id="sms"
        className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-20 bg-white"
      >
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <h2 className="text-2xl font-bold text-blue-700 underline">05</h2>
          <h1 className="text-5xl font-extrabold leading-tight">SMS MARKETING</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Engage customers instantly with high-conversion mobile messaging campaigns
            that drive immediate action.
          </p>
          <Link
            to="/ServicesBookCall"
            className="font-semibold border-b-2 border-white hover:text-blue-400 transition-colors duration-200"
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
            src="/assets/img/Services/sms.png"
            alt="SMS Marketing Graphic"
            className="max-w-full h-auto"
          />
        </motion.div>
      </section>

      {/* ================= Section 06 – Methodology ================= */}
      <section
        ref={methodRef}
        id="methodology"
        className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-20 bg-black text-white"
      >
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-400 underline">06</h2>
          <h1 className="text-5xl font-extrabold leading-tight">OUR METHODOLOGY</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            We combine creativity, analytics, and technology to deliver measurable and
            repeatable growth strategies that scale brands efficiently.
          </p>
          <a
            href="#"
            className="font-semibold border-b-2 border-white hover:text-blue-400"
          >
            Learn more →
          </a>
        </motion.div>

        {/* ✅ Added your uploaded image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            src="/assets/img/Services/8e65237a-36cf-4fb4-bb2b-efa545437b30.png"
            alt="Our Methodology Graphic"
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



      <section className="bg-[#F7F7F7] text-black py-24 px-6 md:px-16 lg:px-32 relative">
        {/* Top bar with title and link */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <p className="uppercase text-sm tracking-wide font-semibold text-gray-500 mb-3">
              Our Methodology
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
              OUR PLAN OF ATTACK <br className="hidden md:block" />
              FOR YOUR UNIQUE FIGHT.
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl">
              Every brand requires a unique plan of attack. This is how we’ll devise one for
              you.
            </p>
          </div>

          {/* Top-right link */}
          <Link
            to="/ServicesBookCall"
            className="font-semibold border-b-2 border-white hover:text-blue-400 transition-colors duration-200"
          >
            Get started →
          </Link>
        </div>

        {/* Steps */}
        <div className="divide-y divide-gray-300 border-t border-b border-gray-300">
          {[
            "DIAGNOSIS",
            "STRATEGIC PLANNING (CHASSM™)",
            "CREATIVE DEVELOPMENT",
            "TEST PHASE",
            "VERIFY BENCHMARKS",
            "SCALE PHASE",
          ].map((title, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-6 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <span className="text-blue-600 font-bold text-xl md:text-2xl w-10 text-right">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                  {title}
                </h3>
              </div>
              <span className="text-2xl font-light text-gray-500">+</span>
            </div>
          ))}
        </div>
      </section>
    </div>

  );
};

export default Services;

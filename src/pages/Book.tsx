import React, { useEffect } from "react";
import { Mail, MessageCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Book = () => {
  const points = [
    "It’s Free but super valuable if you’re just starting out or stuck in Growth.",
    "Experts advice, suggestions and feedbacks for content lead growth.",
    "Get Complete Clarity on Your Requirements before selecting the plan.",
    "Clear idea of results you can achieve with ShortVids.",
    "A Deep dive on our case studies & success of our clients.",
    "Special Discounts as well Free Upgrades on Showup.",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="bg-white py-16 px-6 lg:px-20"
      style={{
        background: "linear-gradient(to bottom right, #ffffff, #f9f9ff)",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-snug">
            Do You Have More Questions?{" "}
            <a
              href="#book"
              className="text-indigo-600 hover:underline font-bold"
            >
              Book Your Call Now!
            </a>
          </h2>

          <h3
            className="text-lg font-semibold text-gray-800 mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Why You Should Book the Call:
          </h3>

          <ul className="space-y-4">
            {points.map((text, index) => (
              <li
                key={index}
                className="flex items-start bg-gradient-to-b from-purple-100 to-indigo-200 text-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md border border-indigo-300 transition-all duration-300"
                data-aos="zoom-in-up"
                data-aos-delay={index * 150}
              >
                <span className="text-indigo-600 text-xl mr-3">✦</span>
                <p className="text-sm sm:text-base font-medium leading-snug">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="https://shortvids.co/wp-content/uploads/2025/10/ai-content-creation.png"
            alt="Book a Call"
            className="w-56 sm:w-64 mb-4 transition-transform duration-500 hover:scale-105"
            data-aos="zoom-in"
          />

          <a
            href="#book"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md shadow-md mb-6 transition flex items-center justify-center gap-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Book a Call Now →
          </a>

          <p
            className="text-gray-800 font-medium mb-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Reach out to us
          </p>

          <div
            className="flex gap-4 flex-wrap justify-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a
              href="mailto:info@shortvids.com"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition"
            >
              <Mail size={18} /> Email us
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition"
            >
              <MessageCircle size={18} /> Whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;

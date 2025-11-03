import React from "react";
import { Mail, MessageCircle } from "lucide-react";

const Book= () => {
  const points = [
    "It’s Free but super valuable if you’re just starting out or stuck in Growth.",
    "Experts advice, suggestions and feedbacks for content lead growth.",
    "Get Complete Clarity on Your Requirements before selecting the plan.",
    "Clear idea of results you can achieve with ShortVids.",
    "A Deep dive on our case studies & success of our clients.",
    "Special Discounts as well Free Upgrades on Showup.",
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Do You Have More Questions?{" "}
            <a
              href="#book"
              className="text-indigo-600 hover:underline font-semibold"
            >
              Book Your Call Now!
            </a>
          </h2>

          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Why You Should Book the Call:
          </h3>

          <ul className="space-y-4">
            {points.map((text, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 rounded-lg p-3 shadow-sm hover:shadow-md transition"
              >
                <span className="text-indigo-500 text-xl font-bold">✱</span>
                <p className="text-gray-800 text-sm md:text-base leading-snug">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://i.ibb.co/Z8MrvCc/book-call-img.png" // 🔁 Replace with your real image
            alt="Book a Call"
            className="w-60 mb-4"
          />
          <a
            href="#book"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md shadow-md mb-6 transition flex items-center gap-2"
          >
            Book a Call Now →
          </a>

          <p className="text-gray-700 font-medium mb-3">Reach out to us</p>
          <div className="flex gap-4">
            <a
              href="mailto:info@shortvids.com"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
            >
              <Mail size={18} /> Email us
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
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

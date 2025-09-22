import React from "react";
import { Star, Play, ChevronDown } from "lucide-react";

const WebDevelopment = () => {
  return (
    <div className=" text-dark font-sans">
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Expert <span className="text-blue-500">Web Development</span> <br />
          for Seamless Online Experiences
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
          Transform your digital presence with cutting-edge web development solutions.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-500 rounded-lg font-semibold hover:bg-gray-700 transition">
            Learn More
          </button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400" />
          ))}
          <p className="ml-2 text-gray-300">4.9/5 from 700+ Customers</p>
        </div>
        <div className="flex justify-center mt-6 gap-6 flex-wrap">
          {["Shopify", "Meta", "Google", "LinkedIn", "Hubspot"].map((logo, i) => (
            <div key={i} className="px-4 py-2 bg-white/10 rounded-lg text-sm">
              {logo}
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO + FEATURES */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="bg-white/10 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative">
            <img
              src="https://framerusercontent.com/images/wK4E80TjbV0jJFGY1B4doVSx1U.png"
              alt="Video"
              className="w-full"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white text-blue-600 p-4 rounded-full shadow-lg">
                <Play className="w-8 h-8" />
              </span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "Scalable", desc: "Solutions designed for long-term growth." },
            { title: "Secure", desc: "Advanced security for reliable performance." },
            { title: "High ROI", desc: "Optimize resources with measurable results." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-700 to-indigo-800">
        <h2 className="text-3xl md:text-4xl font-bold">
          Secure and Scalable Web Development Solutions
        </h2>
        <p className="mt-3 text-gray-200">We build robust, future-proof websites designed for growth and success.</p>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Streamlined Web Development Process for Optimal Results
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["Planning", "Design", "Development", "Launch"].map((step, i) => (
            <div key={i} className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition">
              <h3 className="font-semibold text-lg">{step}</h3>
              <p className="mt-2 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INNOVATIVE SECTION */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">Innovative Web Development for Modern Digital Experiences</h2>
          <p className="mt-4 text-gray-300">
            Empowering businesses with cutting-edge websites tailored for user engagement and scalability.
          </p>
        </div>
        <img
          src="https://framerusercontent.com/images/ktJ3K1XFcY5c84Rrbw4GmDHL.png"
          alt="Innovative"
          className="rounded-xl"
        />
      </section>

      {/* TOOLS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl font-bold mb-10">Tools We Utilize for Excellence</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Meta Ads", "Google Ads", "LinkedIn", "Shopify", "WooCommerce", "WordPress"].map((tool, i) => (
            <div key={i} className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition text-center">
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Recent Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {["SaaS Website Template", "Marketing Landing Page", "Portfolio Website", "Product Landing Page"].map(
            (proj, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition">
                <img
                  src="https://framerusercontent.com/images/ObfLxXy6sGEuM7xKrhvhz3Kbk.png"
                  alt={proj}
                  className="rounded-lg"
                />
                <h3 className="mt-4 font-semibold">{proj}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* INDUSTRY INSIGHTS */}
      <section className="text-center py-16 bg-white/5">
        <h2 className="text-3xl font-bold">Web Development Trends and Insights</h2>
        <p className="mt-3 text-gray-300">
          Explore industry insights that shape future-ready web solutions.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 font-semibold rounded-lg shadow hover:bg-blue-700">
          See Full Report
        </button>
      </section>

      {/* COMPARISON */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Choosing Brandkrit Over Others</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-lg p-6">Other Agencies</div>
          <div className="bg-blue-600 rounded-lg p-6">Brandkrit</div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6 text-center">
        {["Optimal Performance", "Engaging UI/UX", "Conversion Driven"].map((feat, i) => (
          <div key={i} className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition">
            <h3 className="text-xl font-semibold">{feat}</h3>
            <p className="mt-2 text-gray-300">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        ))}
      </section>

      {/* SOLUTIONS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
        <div className="bg-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Creative Design</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>✔ Responsive Websites</li>
            <li>✔ Custom UI/UX</li>
            <li>✔ SEO-friendly Code</li>
          </ul>
        </div>
        <div className="bg-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Strategic Marketing</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>✔ Data-Driven Campaigns</li>
            <li>✔ Performance Monitoring</li>
            <li>✔ End-to-End Support</li>
          </ul>
        </div>
      </section>

      {/* STATS */}
      <section className="text-center py-16 bg-white/5 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div>
          <h3 className="text-4xl font-bold">150+</h3>
          <p className="text-gray-300">Clients</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">100+</h3>
          <p className="text-gray-300">Projects</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">8+</h3>
          <p className="text-gray-300">Years Exp</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">22+</h3>
          <p className="text-gray-300">Industries</p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <blockquote className="text-lg italic text-gray-300">
          "The team exceeded our expectations with a future-proof website. Reliable, secure, and growth-focused solutions."
        </blockquote>
        <p className="mt-4 font-semibold">– Happy Client</p>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            "What are web development services?",
            "Do you offer eCommerce solutions?",
            "How long does it take to build a site?",
            "Will my website be SEO optimized?",
          ].map((q, i) => (
            <div key={i} className="p-4 bg-white/10 rounded-lg flex items-center justify-between cursor-pointer hover:bg-white/20 transition">
              <span>{q}</span>
              <ChevronDown />
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-700 to-indigo-800">
        <h2 className="text-3xl md:text-4xl font-bold">Stay Connected with Us Today</h2>
        <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default WebDevelopment;

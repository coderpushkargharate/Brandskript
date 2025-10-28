import React from "react";
import { Star } from "lucide-react";
import { Search, Lightbulb, Palette, Rocket } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
const BrandDesignSection = () => {
  const works = [
    {
      image: "https://via.placeholder.com/400x250?text=Hippister+Logo",
      title: "Hippister",
      desc: "A vibrant brand identity capturing modern, playful shopping experiences.",
    },
    {
      image: "https://via.placeholder.com/400x250?text=Futuro+Polytech",
      title: "Futuro Polytech",
      desc: "Designed a modern, innovative brand identity for advanced polymer solutions.",
    },
    {
      image: "https://via.placeholder.com/400x250?text=Rohit+Alluminium",
      title: "Rohit Alluminium",
      desc: "Created a bold, impactful brand identity for a fitness community.",
    },
    {
      image: "https://via.placeholder.com/400x250?text=Mitglow+Logo",
      title: "Mitglow",
      desc: "Developed a luminous, inviting brand identity for skincare excellence.",
    },
    {
      image: "https://via.placeholder.com/400x250?text=H-Mart",
      title: "H-Mart",
      desc: "Crafted a fresh, dynamic brand identity for modern retail experiences.",
    },
    {
      image: "https://via.placeholder.com/400x250?text=TFC+Guidelines",
      title: "TFC",
      desc: "Established a strong, sleek brand identity for premium aluminum products.",
    },
  ];
    const steps = [
    {
      icon: <Search size={28} className="text-blue-500" />,
      title: "Discover Insights",
      desc: "Research and understand brand goals and audience needs",
      step: "Step 01",
    },
    {
      icon: <Lightbulb size={28} className="text-yellow-500" />,
      title: "Develop Concepts",
      desc: "Brainstorm and craft distinctive ideas that align with your brand’s vision and goals",
      step: "Step 02",
    },
    {
      icon: <Palette size={28} className="text-pink-500" />,
      title: "Design Identity",
      desc: "Create visuals that represent your brand’s essence effectively",
      step: "Step 03",
    },
    {
      icon: <Rocket size={28} className="text-green-500" />,
      title: "Refine & Launch",
      desc: "Perfect final details and implement a cohesive brand identity for maximum impact",
      step: "Step 04",
    },
  ];
  return (
    <section className="bg-white text-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Top Label */}
        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          Grow Revenue →
        </button>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Empowering Brands with <br />
          <span className="text-blue-600">Modern Identity</span>
        </h1>

        {/* Subheading */}
        <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-base">
          Crafting unique, memorable brand identities that captivate audiences
          and build lasting connections through innovative design and strategic
          storytelling.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-blue-700 transition">
            Book A FREE Strategy Call
          </button>
        </div>

        {/* Rating */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="flex gap-1 text-yellow-500 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <p className="text-gray-700 font-medium text-sm">
            4.9/5 From 150+ Customers
          </p>
        </div>

        {/* Brand Logos */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {["Lumina", "Spectrum", "Echo", "Quantum", "Evolve", "Stellar"].map(
            (brand) => (
              <div
                key={brand}
                className="px-6 py-2 border border-gray-200 bg-white rounded-full shadow-sm hover:shadow-md transition text-sm font-medium text-gray-800"
              >
                {brand}
              </div>
            )
          )}
        </div>

        {/* Divider with text */}
        <div className="mt-14 border-t border-gray-200 relative">
          <span className="absolute bg-white px-4 -top-3 left-1/2 -translate-x-1/2 text-gray-500 text-sm">
            Learn more in the video below and Book A Free Strategy Call Today!
          </span>
        </div>

        {/* Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Card 1 */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="text-blue-600 text-3xl mb-4">🎨</div>
            <h3 className="text-lg font-bold text-gray-900">
              Creative Identity Design
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              Developing unique and memorable brand identities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="text-blue-600 text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-bold text-gray-900">
              Strategic Storytelling
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              Engaging audiences with compelling brand narratives.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="text-blue-600 text-3xl mb-4">💬</div>
            <h3 className="text-lg font-bold text-gray-900">
              Lasting Connections
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              Fostering deep connections between brands and audiences.
            </p>
          </div>
        </div>
      </div>


 <section className="bg-white text-gray-800 py-20 px-6 md:px-16">
      {/* Hero Text */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Creating Authentic Brand Identities that{" "}
          <span className="text-blue-600">Resonate Deeply</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We design impactful, cohesive brand identities that captivate audiences,
          enhance brand recognition, and build lasting connections through strategy
          and innovation.
        </p>
      </div>

      {/* Process Section */}
      <div className="text-center mb-10">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
          Process
        </p>
        <h3 className="text-2xl md:text-4xl font-bold mb-3">
          Our Brand Design Process
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          A strategic approach to crafting distinctive, memorable brand identities
          that connect with target audiences.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="absolute top-4 right-4 text-sm text-gray-500 font-medium">
              {step.step}
            </div>
            <div className="mb-4">{step.icon}</div>
            <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>


 <section className="bg-white text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://framerusercontent.com/images/fv5yPBmjikTk2Jc47v6BFoFyxg.png"
            alt="Team working together"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          {/* Small Tag */}
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            About Us
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Discover Who We Are <br /> and Our Mission
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We are a dedicated team of professionals with a results-oriented
            mindset in design, marketing, and advertising. Our mission is to
            empower businesses to thrive by delivering measurable outcomes that
            drive growth and enhance brand presence, transforming challenges
            into opportunities for lasting impact and success in the digital
            world.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-base font-medium px-6 py-3 rounded-full transition duration-200 flex items-center gap-2">
              Contact Us <ArrowRight size={18} />
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 text-base font-medium px-6 py-3 rounded-full transition duration-200 flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </button>
          </div>

          {/* Founder Card */}
          <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-4 max-w-md shadow-sm">
            {/* Left - Profile */}
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

            {/* Right - X Icon */}
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


    <section className="bg-white text-gray-800 py-20 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
          Works
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Our Tools Work
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our tools enhance collaboration, creativity, and efficiency in Brand Design.
        </p>
      </div>

      {/* Work Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {works.map((work, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative group"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-1">{work.title}</h3>
              <p className="text-gray-600 text-sm">{work.desc}</p>
            </div>
            <div className="absolute top-5 right-5 bg-white border border-gray-200 p-2 rounded-full shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
              <ArrowUpRight size={18} />
            </div>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
};

export default BrandDesignSection;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WallOfLove: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ Feedback images
  const feedbackImages: string[] = [
    "/assets/img/feedback1.png",
    "/assets/img/feedback2.png",
    "/assets/img/feedback3.png",
    "/assets/img/feedback4.png",
    "/assets/img/feedback5.png",
    "/assets/img/feedback6.png",
    "/assets/img/feedback7.png",
    "/assets/img/feedback8.png",
    "/assets/img/feedback9.png",
  ];

  // ✅ Video testimonials data
  const testimonials = [
    {
      title:
        "Helped Weidmann Group — a 150-year legacy business — educate its audience with engaging content.",
      videoUrl: "https://www.youtube.com/embed/GREG_REVEW_ID",
    },
    {
      title: "Helped Brandon streamline his video editing process to perfection.",
      videoUrl: "https://www.youtube.com/embed/TESTIMONIAL_OG_BRANDON",
    },
    {
      title: "Helped Jakib Sports generate 2M+ Shorts views!",
      videoUrl: "https://www.youtube.com/embed/JAKIB_SPORTS_ID",
    },
    {
      title: "Helped Josh achieve editing consistency and process optimization.",
      videoUrl: "https://www.youtube.com/embed/JOSH_EDITING_ID",
    },
    {
      title:
        "Helped Chris gain 2M+ Shorts views in just 45 days across social media.",
      videoUrl: "https://www.youtube.com/embed/CHRIS_SHORTS_ID",
    },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* 🌸 Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* ---------- WALL OF LOVE HEADER ---------- */}
      <section className="relative py-20 text-center px-6 md:px-12">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          data-aos="fade-up"
        >
          Our Wall of <span className="text-[#8B5CF6]">Love 💜</span>
        </h2>
        <p
          className="text-lg md:text-xl text-gray-700 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Shortvids is trusted and loved by creators and brands around the world.
        </p>

        {/* ---------- TESTIMONIAL CHAT STYLE ---------- */}
        <div
          className="max-w-3xl mx-auto space-y-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Jesse */}
          <div className="border-2 border-[#8B5CF6] rounded-2xl p-6 bg-gray-50 shadow-md text-left">
            <div className="flex items-center mb-3">
              <img
                src="https://via.placeholder.com/50"
                alt="Jesse avatar"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">Jesse</p>
                <p className="text-sm text-gray-500">9:20 PM</p>
              </div>
            </div>
            <p className="text-gray-800">
              Hello <span className="text-[#8B5CF6] font-semibold">@Paras</span>{" "}
              — <span className="font-medium">Fantastic work on this draft!</span>{" "}
              The storytelling is clear and very professional.
            </p>
          </div>

          {/* Josh & Team */}
          <div className="border-2 border-[#8B5CF6] rounded-2xl p-6 bg-gray-50 shadow-md text-left space-y-4">
            <div className="flex items-start">
              <img
                src="https://via.placeholder.com/50"
                alt="Josh"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">Josh</p>
                <p className="text-sm text-gray-500">4:49 PM</p>
                <p>
                  The short from yesterday is getting amazing feedback. Really
                  impressed with the quality!
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                src="https://via.placeholder.com/50"
                alt="Hamna"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">Hamna</p>
                <p className="text-sm text-gray-500">4:57 PM</p>
                <p>
                  Thank you! We’ll keep improving with every passing day :)
                </p>
              </div>
            </div>
          </div>

          {/* Colin & Hadeel Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-[#8B5CF6] rounded-2xl p-6 bg-gray-50 shadow-md">
              <p className="text-[#8B5CF6] font-semibold mb-1">
                Colin Client
              </p>
              <p className="text-sm text-gray-500 mb-2">12:35 AM</p>
              <p className="mb-2">
                You guys absolutely nailed it with this video — 8k views in 48
                hours!
              </p>
              <img
                src="/assets/img/feedback6.png"
                alt="Colin feedback"
                className="rounded-lg mb-2"
              />
              <p className="text-gray-700">
                Gained 600+ new subscribers in a week!
              </p>
            </div>

            <div className="border-2 border-[#8B5CF6] rounded-2xl p-6 bg-gray-50 shadow-md">
              <p className="text-[#8B5CF6] font-semibold mb-1">Hadeel Mirza</p>
              <p className="text-sm text-gray-500 mb-2">7:36 PM</p>
              <p className="mb-3">
                Here’s a repurposed edit from Brooks’ long-form YouTube video.
              </p>
              <img
                src="/assets/img/feedback7.png"
                alt="Hadeel feedback"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CLIENT FEEDBACK GRID ---------- */}
      <section
        id="client-feedback"
        className="relative py-20 px-6 md:px-12 lg:px-24 bg-gray-50"
      >
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            data-aos="fade-up"
          >
            💬 Client Feedback & Results
          </h2>
          <p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Real feedback and screenshots from our happy clients showing
            outstanding results.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {feedbackImages.map((img, index) => (
            <div
              key={index}
              className="rounded-3xl p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transform transition duration-300"
            >
              <div className="rounded-3xl bg-white p-3 shadow-xl">
                <img
                  src={img}
                  alt={`Client Feedback ${index + 1}`}
                  className="rounded-2xl w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- VIDEO TESTIMONIALS SECTION ---------- */}
      <section className="bg-gray-100 py-20 px-6 md:px-12 text-center relative">
        <h2
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
          data-aos="fade-up"
        >
          🎥 Video Testimonials
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto"
          data-aos="fade-up"
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-md hover:scale-[1.02] transition-transform"
            >
              <p className="font-semibold mb-4 text-gray-800 text-center">
                {item.title}
              </p>
              <div className="relative w-full overflow-hidden rounded-xl aspect-video">
                <iframe
                  src={item.videoUrl}
                  title={`Testimonial ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-gray-500 mt-12 text-sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Real success stories from our amazing clients ✨
        </p>


        {/* Josh & Team */}
        <div className="border-2 border-[#8B5CF6] rounded-2xl p-6 bg-gray-50 shadow-md text-left space-y-4">
          <div className="flex items-start">
            <img
              src="https://via.placeholder.com/50"
              alt="Josh"
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">Josh</p>
              <p className="text-sm text-gray-500">4:49 PM</p>
              <p>
                The short from yesterday is getting amazing feedback. Really
                impressed with the quality!
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <img
              src="https://via.placeholder.com/50"
              alt="Hamna"
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">Hamna</p>
              <p className="text-sm text-gray-500">4:57 PM</p>
              <p>
                Thank you! We’ll keep improving with every passing day :)
              </p>
            </div>
          </div>
        </div>




      </section>



    </div>
  );
};

export default WallOfLove;

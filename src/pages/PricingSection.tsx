// import React from "react";
import { Check } from "lucide-react";
import React, { useRef, useEffect } from "react";


export default function PricingSection() {


  const sliderRef = useRef<HTMLDivElement>(null);

  const pauseSlider = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = "paused";
    }
  };

  const playSlider = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = "running";
    }
  };

  const testimonials = [
    {
      img: "/assets/testimonials/user1.jpg",
      name: "John Carter",
      text: "Handoff saves us 20+ hours per week. AI estimating is unbelievable.",
    },
    {
      img: "/assets/testimonials/user2.jpg",
      name: "Emily Johnson",
      text: "Our proposals look professional and client conversions increased instantly.",
    },
    {
      img: "/assets/testimonials/user3.jpg",
      name: "Michael Smith",
      text: "Digital payments and signatures made our workflow super smooth.",
    },
    {
      img: "/assets/testimonials/user4.jpg",
      name: "Sarah Williams",
      text: "The best AI tool for contractors. I can't imagine working without it now.",
    },
    // Repeat cards if you want infinite scroll effect
  ];




  return (
    <div className="w-full bg-white text-[#1a1a1a]">
      {/* HERO */}
      <section
        className="text-white py-20 text-center px-4 flex justify-center"
        style={{
          background: "linear-gradient(135deg, #00b074 0%, #00c985 100%)",
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.15)",
        }}
      >
        <div className="max-w-3xl mx-auto" style={{ padding: "10px" }}>
          <h2
            className="font-bold leading-snug"
            style={{
              fontSize: "40px",
              lineHeight: "1.3",
              textShadow: "0 3px 8px rgba(0,0,0,0.25)",
            }}
          >
            Join thousands of contractors<br />
            using AI to run jobs faster and<br />
            win more work
          </h2>

          <button
            className="mt-8 font-semibold rounded-full transition-all bg-white text-black"
            style={{
              padding: "14px 36px",
              fontSize: "16px",
              boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 10px 18px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 6px 14px rgba(0,0,0,0.2)";
            }}
          >
            Start free trial →
          </button>

          <p
            className="mt-4"
            style={{
              opacity: 0.95,
              fontSize: "15px",
              letterSpacing: "0.2px",
            }}
          >
            Start your 7-day free trial today.
          </p>
        </div>
      </section>
















      {/* PRICING BOX */}
      <section
        className="py-16 px-4 flex justify-center"
        style={{
          background: "linear-gradient(180deg, #f8f8f8 0%, #ffffff 100%)",
        }}
      >
        <div
          className="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full transition-all duration-300"
          style={{
            border: "1px solid #e6e6e6",
            boxShadow: "0px 8px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            className="font-semibold text-lg mb-6 text-center"
            style={{ color: "#1a1a1a", fontSize: "1.2rem", lineHeight: "1.6" }}
          >
            Trusted by 1000s of contractors saving 20 hours per week with AI.
          </h3>

          <ul className="space-y-4 mb-8">
            {[
              "Generate estimates with AI",
              "2 seats included",
              "Generate proposals with AI",
              "Send invoices & get digital payments",
              "Request signatures, send attachments",
              "Manage clients in a CRM",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3"
                style={{
                  padding: "6px 0",
                  transition: "0.25s",
                }}
              >
                <Check
                  className="text-[#00b074]"
                  size={22}
                  style={{ flexShrink: 0 }}
                />
                <span style={{ fontSize: "0.95rem", color: "#333" }}>{item}</span>
              </li>
            ))}
          </ul>

          {/* Price */}
          <div
            className="rounded-xl p-6 text-center transition-all duration-300"
            style={{
              border: "1px solid #e0e0e0",
              background: "#fafafa",
            }}
          >
            <p
              className="font-semibold text-3xl"
              style={{ color: "#00b074", marginBottom: "2px" }}
            >
              $249/mo
            </p>
            <p className="text-sm text-gray-500">Monthly</p>

            <button
              className="mt-5 w-full text-white py-3 rounded-full font-semibold transition-all duration-300"
              style={{
                backgroundColor: "#00b074",
                boxShadow: "0 4px 12px rgba(0,176,116,0.3)",
              }}
            >
              Start free trial →
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES TABLE */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2
          className="text-center text-3xl font-extrabold mb-12"
          style={{ letterSpacing: "-0.5px" }}
        >
          Check Out The Features
        </h2>

        <div
          className="bg-white rounded-2xl shadow-xl p-10"
          style={{
            border: "1px solid #e5e7eb",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          {[
            {
              title: "AI Estimating & Agents",
              items: [
                "Understanding requests with AI",
                "Review estimates with AI",
                "Learning from AI summaries",
              ],
            },
            {
              title: "Payment Processing",
              items: [
                "Credit Card Fees – 2.9%",
                "ACH Fees – Free",
                "Processing time (Credit Card) – Instant",
                "Processing time (ACH) – 1-7 days",
              ],
            },
            {
              title: "AI-powered Business Management",
              items: [
                "Multi-user access (3 users included)",
                "Generate proposals with AI",
                "CRM",
                "Track client activity",
                "Contracts",
                "Digital signatures",
                "Progress payments",
                "Invoicing",
              ],
            },
            {
              title: "Expert Support",
              items: [
                "Email and live chat",
                "Access to support when you like",
                "Book a call with our team",
                "Request new features",
              ],
            },
            {
              title: "Web & Mobile Access",
              items: ["Desktop web app", "iOS app", "Android app"],
            },
          ].map((cat, index) => (
            <div
              key={index}
              className="pb-8 mb-8 transition-all"
              style={{
                borderBottom: index !== 4 ? "1px solid #f0f0f0" : "none",
              }}
            >
              <h3
                className="font-bold text-xl mb-4"
                style={{ color: "#1a1a1a" }}
              >
                {cat.title}
              </h3>

              <ul className="space-y-3">
                {cat.items.map((i, ix) => (
                  <li
                    key={ix}
                    className="flex items-center gap-3 p-2 rounded-lg transition"
                    style={{
                      cursor: "default",
                    }}
                  >
                    <div
                      className="rounded-full p-1.5 flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, #00b074, #00c889)",
                      }}
                    >
                      <Check size={18} className="text-white" />
                    </div>

                    <span
                      className="text-base"
                      style={{
                        color: "#333",
                        fontWeight: 500,
                      }}
                    >
                      {i}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>







      {/* STACKS UP */}
      <section className="py-20 bg-[#f5f5f5] text-center px-4">
        <h2 className="text-2xl font-bold mb-4">
          See How Handoff Stacks Up On Fees
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-6">
          Compare card and ACH transaction fees across top platforms and
          discover why Handoff helps you keep more of what you earn.
        </p>
        <button className="bg-[#00b074] text-white px-6 py-3 rounded-full font-semibold">
          Learn more →
        </button>

        <img
          src="https://dummyimage.com/700x300/cccccc/000"
          alt="Comparison Chart"
          className="mx-auto mt-10 rounded-xl"
        />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 bg-[#f9f9f9]">
        <h2 className="text-center text-3xl font-bold mb-14">
          Contractors love Handoff
        </h2>

        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-8 animate-scroll"
            style={{
              width: "max-content",
              animation: "scroll 20s linear infinite",
            }}
            onMouseEnter={pauseSlider}
            onMouseLeave={playSlider}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg border flex-shrink-0"
                style={{ width: "calc((100% - 3rem) / 4)" }} // 4 cards at a time with gap
              >
                <div className="flex justify-center mb-5">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover shadow-md"
                  />
                </div>

                <p className="text-gray-700 text-center leading-relaxed">
                  “{t.text}”
                </p>

                <p className="mt-6 font-semibold text-center text-lg">{t.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tailwind animation */}
        <style>
          {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
        </style>
      </section>


      {/* FAQ */}
      <section
        style={{
          padding: "80px 16px",
          maxWidth: "900px",
          margin: "0 auto",
          background: "linear-gradient(135deg, #f0f4ff 0%, #e6f7ff 100%)",
          borderRadius: "16px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "50px",
            color: "#1a1a1a",
          }}
        >
          Frequently Asked Questions
        </h2>

        {[
          "Where does your cost data come from?",
          "Can your pricing be localized to my area?",
          "Does this work for my type of business?",
          "Can I cancel at any time?",
          "When will you have a certain feature?",
          "Do you have an online community?",
          "Do you have an affiliate program?",
          "Do you offer financing options?",
          "Does your AI read images or drawings?",
        ].map((q, i) => (
          <details
            key={i}
            style={{
              border: "1px solid #d0d7de",
              borderRadius: "12px",
              padding: "20px 25px",
              marginBottom: "20px",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
              backgroundColor: "#fff",
              transition: "all 0.3s ease",
              overflow: "hidden",
            }}
          >
            <summary
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "1.2rem",
                fontWeight: "500",
                listStyle: "none",
              }}
            >
              {q}
              <span
                style={{
                  display: "inline-block",
                  transition: "transform 0.3s ease",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                ▼
              </span>
            </summary>
            <p
              style={{
                marginTop: "15px",
                color: "#555",
                lineHeight: "1.8",
                fontSize: "1rem",
                opacity: 0,
                maxHeight: 0,
                transition: "all 0.5s ease",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </details>
        ))}

        <script>
          {`
      const detailsElements = document.querySelectorAll('details');
      detailsElements.forEach(detail => {
        const summary = detail.querySelector('summary');
        const icon = summary.querySelector('span');
        const content = detail.querySelector('p');

        detail.addEventListener('toggle', () => {
          if(detail.open){
            icon.style.transform = 'rotate(180deg)';
            content.style.opacity = '1';
            content.style.maxHeight = content.scrollHeight + 'px';
            detail.style.boxShadow = '0 12px 25px rgba(0,0,0,0.1)';
          } else {
            icon.style.transform = 'rotate(0deg)';
            content.style.opacity = '0';
            content.style.maxHeight = '0';
            detail.style.boxShadow = '0 8px 20px rgba(0,0,0,0.05)';
          }
        });
      });
    `}
        </script>
      </section>


      {/* FOOTER CTA */}
      <section
        style={{
          padding: "100px 16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f5f7ff",
          borderRadius: "20px",
          margin: "60px auto",
          maxWidth: "1000px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            marginBottom: "20px",
            background: "linear-gradient(90deg, #0072ff, #00c6ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Boost Your Business with Handoff
        </h2>

        <p
          style={{
            fontSize: "1.25rem",
            color: "#555",
            textAlign: "center",
            maxWidth: "700px",
            marginBottom: "50px",
            lineHeight: "1.6",
          }}
        >
          Manage your work efficiently, save time, and grow your business with Handoff’s smart tools.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          {[
            { src: "https://dummyimage.com/180x60/0072ff/fff&text=Google+Play", alt: "Google Play" },
            { src: "https://dummyimage.com/180x60/0072ff/fff&text=App+Store", alt: "App Store" },
          ].map((btn, i) => (
            <img
              key={i}
              src={btn.src}
              alt={btn.alt}
              style={{
                height: "60px",
                borderRadius: "16px",
                cursor: "pointer",
                boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.transform = "translateY(-6px) scale(1.08)";
                el.style.boxShadow = "0 15px 35px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
              }}
            /> 
          ))}
        </div>
      </section>


    </div>
  );
}

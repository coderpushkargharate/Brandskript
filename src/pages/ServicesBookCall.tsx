import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  company: string;
  text: string;
  img: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Reed",
    company: "",
    text: "They helped us hit the ground running in time for Black Friday, during which we saw our gross revenue double—an amazing start to the partnership.",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Amanda",
    company: "Rebel Gypsy",
    text: "...there is no marketing company like Right Hook. I have tried so many and they don’t compare...they suck compared to you.",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Jake",
    company: "Pupentials",
    text: "...we’re doing $100k weeks now. On target MER for September. 🙌 Thankful for you guys!",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Jessica",
    company: "Bimby & Roy",
    text: "...we’ve had the most beautiful experience with Right Hook...we’ve grown 200%.",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Liam",
    company: "GrowthHub",
    text: "Our campaigns scaled faster than ever with Right Hook’s expertise.",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Sophia",
    company: "Nova Co.",
    text: "Right Hook truly understands what drives conversions. Incredible experience.",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Ethan",
    company: "AdBoost",
    text: "Their creative team redefined how we connect with our customers.",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Mia",
    company: "VibeWear",
    text: "I’d recommend them 100%. The results speak for themselves.",
    img: "https://via.placeholder.com/50",
  },
];

const chunkArray = (arr: Testimonial[], size: number): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const testimonialGroups = chunkArray(testimonials, 4);

const ServicesBookCall: React.FC = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialGroups.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        padding: "80px 24px",
        backgroundColor: "#fff",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <h1 style={{ fontSize: "40px", fontWeight: 800, marginBottom: "20px" }}>
        BOOK A CALL…
      </h1>
      <p
        style={{
          color: "#444",
          maxWidth: "700px",
          margin: "0 auto 20px",
          lineHeight: "1.6",
          fontSize: "16px",
        }}
      >
        Let’s hop on a call. On the call we’ll discuss your goals, show you
        strategies, answer questions, and see if Right Hook is the scale partner
        you’ve been looking for!{" "}
        <a href="#" style={{ color: "#2563eb", textDecoration: "underline" }}>
          Remember, we have a Worry-Free Trial. There’s zero downside to hopping
          on a call and talking.
        </a>
      </p>

      <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "50px 0 25px" }}>
        Trusted by over 352+ Brands Last 6 Years
      </h2>

      {/* ===== 4 Cards Auto-Sliding Section ===== */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          maxWidth: "1200px",
          margin: "0 auto 60px",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "nowrap",
            }}
          >
            {testimonialGroups[index].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                style={{
                  flex: "0 0 260px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "16px",
                  padding: "20px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                }}
              >
                <p
                  style={{
                    color: "#444",
                    fontStyle: "italic",
                    marginBottom: "16px",
                    lineHeight: "1.5",
                    fontSize: "15px",
                  }}
                >
                  “{t.text}”
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "15px" }}>{t.name}</div>
                    <div style={{ fontSize: "13px", color: "#6b7280" }}>{t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ===== Simple Form Section (kept same) ===== */}
      <div
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "18px",
            marginBottom: "20px",
          }}
        >
          Simply fill out the form below to get started.
        </h3>

        <form>
          {["Your Full Name *", "Business Email *", "Phone *"].map((label, i) => (
            <div key={i} style={{ marginBottom: "15px" }}>
              <label
                style={{ fontWeight: 600, fontSize: "14px", marginBottom: "6px", display: "block" }}
              >
                {label}
              </label>
              <input
                type={label.includes("Email") ? "email" : label.includes("Phone") ? "tel" : "text"}
                placeholder={label.replace("*", "").trim()}
                style={{
                  width: "100%",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  padding: "10px",
                  fontSize: "15px",
                  boxSizing: "border-box",
                }}
              />
            </div>
          ))}

          <label style={{ fontWeight: 600, fontSize: "14px" }}>What Kind of Business?</label>
          <select
            style={{
              width: "100%",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              padding: "10px",
              fontSize: "15px",
              marginBottom: "15px",
            }}
          >
            <option value="">Pls select one</option>
            <option value="ecommerce">E-commerce</option>
            <option value="service">Service</option>
            <option value="agency">Agency</option>
            <option value="other">Other</option>
          </select>

          <label style={{ fontWeight: 600, fontSize: "14px" }}>Your Monthly Revenue *</label>
          <select
            style={{
              width: "100%",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              padding: "10px",
              fontSize: "15px",
              marginBottom: "15px",
            }}
          >
            <option value="">Pls select one</option>
            <option value="under10k">Under $10k</option>
            <option value="10k-50k">$10k–$50k</option>
            <option value="50k-100k">$50k–$100k</option>
            <option value="over100k">Over $100k</option>
          </select>

          <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: "1.5" }}>
            We’re committed to your privacy. We hate spam too. Right Hook uses
            the information you provide to contact you about relevant content,
            products, and services. You may unsubscribe at any time.
          </p>

          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#1d4ed8",
              color: "#fff",
              padding: "10px",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "15px",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default ServicesBookCall;

import React from "react";
import { useParams, Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    logo: "https://righthookdigital.com/wp-content/uploads/2025/08/Koahanna-Logo-Black.png",
    title:
      "FROM REVENUE CEILING TO RECORD $50K PROFIT: HOW KA’OHANA TRUMPED TARIFFS",
    subtitle:
      "How RH helped Ka’Ohana hit $50K profit and record revenue, even after tariffs forced them to retire their best-selling product.",
    heroImages: [
      "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/KaOhana-Landscape-ra56apndl9oycwe3z0izlxz1tg4bb64olog9ux8x9g.jpg",
      "https://righthookdigital.com/wp-content/uploads/2025/08/Koahana-1.png",
      "https://righthookdigital.com/wp-content/uploads/2025/08/Koahana-2.png",
    ],
    highlights: [
      { label: "Record growth &", value: "$50K profit in 1 month" },
      { label: "The Win", value: "Emotion-led creative into scaling" },
      { label: "Niche", value: "Personalizable Jewelry" },
      { label: "Services", value: "Paid Social" },
    ],
    background: {
      title: "The Background",
      text: `
Founded by Reed Yamaguchi, Ka’Ohana was created to honor Hawaiian heritage through heirloom-quality jewelry rooted in family, culture, and connection.

Each piece was designed to be a keepsake, not just another accessory. The brand built a deeply loyal customer base by staying true to its mission. But as demand grew, revenue plateaued.`,
      images: [
        "https://righthookdigital.com/wp-content/uploads/2025/08/Koahana-1.png",
        "https://righthookdigital.com/wp-content/uploads/2025/08/Koahana-2.png",
      ],
    },
    challenge: {
      title: "The Challenge",
      image:
        "https://righthookdigital.com/wp-content/uploads/2025/08/Koahana-Instagram.png",
      text: `
Ka’Ohana had everything in place: premium product, strong mission, and a loyal audience. But none of it translated into sustainable growth. Messaging focused too heavily on product features and overlooked emotional resonance. Then tariffs landed, forcing them to retire their best-selling product.`,
    },
  },
  {
    id: 2,
    logo: "https://righthookdigital.com/wp-content/uploads/2025/07/LittleTrouble-Black.png",
    title:
      "FROM ROCK BOTTOM TO 136% GROWTH. LITTLE TROUBLE’S SUCCESS STORY.",
    subtitle:
      "Little Trouble went from being down substantially to having the best month in the brand’s history within weeks of starting with Right Hook.",
    heroImages: [
      "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/LittleTrouble-scaled-r9hr1o4jt96vajots0kv9fr4iy4844ry89q6inxqhw.jpg",
      "https://righthookdigital.com/wp-content/uploads/2025/07/LittleTrouble-Ad1.png",
      "https://righthookdigital.com/wp-content/uploads/2025/07/LittleTrouble-Ad2.png",
    ],
    highlights: [
      { label: "138% Revenue Growth", value: "YoY" },
      { label: "Same Ad Spend", value: "3x Performance" },
      { label: "Niche", value: "Pet Accessories" },
      { label: "Services", value: "Paid Social, Google PPC" },
    ],
    background: {
      title: "The Background",
      text: `
Little Trouble started as a small brand with a cult following in the pet accessories space. They had strong engagement but struggled to translate that into consistent sales. Their creative approach lacked direction and emotional resonance.`,
      images: [
        "https://righthookdigital.com/wp-content/uploads/2025/07/LittleTrouble-Ad1.png",
        "https://righthookdigital.com/wp-content/uploads/2025/07/LittleTrouble-Ad2.png",
      ],
    },
    challenge: {
      title: "The Challenge",
      image:
        "https://righthookdigital.com/wp-content/uploads/2025/07/LittleTrouble-IG.png",
      text: `
After several poor-performing months, Little Trouble’s founder reached a breaking point. With ad fatigue and no new direction, they needed a total creative and strategic reset to regain traction and scale profitably.`,
    },
  },
  {
    id: 3,
    logo: "https://righthookdigital.com/wp-content/uploads/2025/07/SillyGeorge-Logo.png",
    title:
      "FROM STRESS TO SCALE: TURNING A 6-MONTH STALL INTO A $20K/DAY GROWTH MACHINE",
    subtitle:
      "How RH helped get Silly George back in profit after an extended decline, with consistent $15–20K days and a full-funnel strategy scaling across platforms.",
    heroImages: [
      "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/SillyGeorge-r8v9i1fakvr9ueft40rs78bpw5d2itkzoow6ylhld0.jpg",
      "https://righthookdigital.com/wp-content/uploads/2025/07/SillyGeorge-1.png",
      "https://righthookdigital.com/wp-content/uploads/2025/07/SillyGeorge-2.png",
    ],
    highlights: [
      { label: "Consistent", value: "$15–20K days" },
      { label: "Global DTC brand", value: "multiple markets" },
      { label: "Niche", value: "Beauty" },
      { label: "Services", value: "Paid Social, Google PPC" },
    ],
    background: {
      title: "The Background",
      text: `
Silly George is a global beauty brand known for its lash innovations. After rapid initial growth, sales plateaued, and acquisition costs soared. They needed a sustainable full-funnel strategy to get back to profitability.`,
      images: [
        "https://righthookdigital.com/wp-content/uploads/2025/07/SillyGeorge-1.png",
        "https://righthookdigital.com/wp-content/uploads/2025/07/SillyGeorge-2.png",
      ],
    },
    challenge: {
      title: "The Challenge",
      image:
        "https://righthookdigital.com/wp-content/uploads/2025/07/SillyGeorge-Ad.png",
      text: `
Despite great products and loyal customers, Silly George’s paid strategy was inefficient. Campaigns weren’t aligned with user intent, and creative fatigue set in. They needed a comprehensive paid media overhaul.`,
    },
  },
];

const CaseStudyDetail = () => {
  const { id } = useParams();
  const caseItem = caseStudies.find((b) => b.id === parseInt(id));

  if (!caseItem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700">
          Case Study not found!
        </h2>
      </div>
    );
  }

  return (
    <section className="bg-white text-gray-900">
      {/* HERO */}
      <div className="relative">
        <div className="grid md:grid-cols-3">
          {caseItem.heroImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Hero"
              className="w-full h-64 md:h-[420px] object-cover"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-6">
          <img src={caseItem.logo} alt="Logo" className="h-10 mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-3xl leading-snug">
            {caseItem.title}
          </h1>
        </div>
      </div>

      {/* SUBTITLE & HIGHLIGHTS */}
      <div className="max-w-6xl mx-auto px-6 py-10 border-b border-gray-300">
        <p className="text-lg text-gray-700 mb-8">{caseItem.subtitle}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {caseItem.highlights.map((item, i) => (
            <div key={i}>
              <p className="font-semibold">{item.label}</p>
              <p className="text-gray-600">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BACKGROUND */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wide">
          {caseItem.background.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-4">
            {caseItem.background.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Background"
                className={`rounded-lg object-cover ${
                  i === 0 ? "col-span-2 h-[300px]" : "h-[150px]"
                } w-full`}
              />
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {caseItem.background.text}
          </p>
        </div>
      </div>

      {/* CHALLENGE */}
      <div className="max-w-6xl mx-auto px-6 py-14 bg-gray-50 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wide">
          {caseItem.challenge.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={caseItem.challenge.image}
            alt="Challenge"
            className="rounded-lg w-full object-cover shadow-md"
          />
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {caseItem.challenge.text}
          </p>
        </div>
      </div>

      {/* BACK BUTTON */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <Link
          to="/case-study-list"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
        >
          ← Back to Case Studies
        </Link>
      </div>
    </section>
  );
};

export default CaseStudyDetail;

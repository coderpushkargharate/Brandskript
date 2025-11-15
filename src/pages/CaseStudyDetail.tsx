import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const caseStudies = [
  {
    id: 1,
    logoWhite: "https://righthookdigital.com/wp-content/uploads/2025/08/Koahanna-Logo-White.png",
    logoBlack: "https://righthookdigital.com/wp-content/uploads/2025/08/Koahanna-Logo-Black.png",
    title: "FROM REVENUE CEILING TO RECORD $50K PROFIT: HOW KA’OHANA TRUMPED TARIFFS",
    subtitle:
      "How RH helped Ka’Ohana hit $50K profit and record revenue, even after tariffs forced them to retire their best-selling product.",
    heroImages: [
      "https://righthookdigital.com/wp-content/uploads/2025/08/KaOhana-Landscape.jpg",
    ],
    highlight: {
      data: [
        { label: "THE HIGHLIGHT", value: "Record growth & $50K profit in 1 month" },
        { label: "THE WIN", value: "Emotion-led creative into scaling" },
        { label: "NICHE", value: "Personalizable Jewelry" },
        { label: "SERVICES", value: "Paid Social" },
      ],
    },
    background: {
      title: "THE BACKGROUND",
      text: [
        "Founded by Reed Yamaguchi, Ka’Ohana was created to honor Hawaiian heritage through heirloom-quality jewelry rooted in family, culture, and connection.",
        "The brand built a deeply loyal customer base by staying true to its mission. But as demand grew, revenue plateaued.",
        "Ka’Ohana came to RH with a clear vision and a growth ceiling they couldn’t crack alone.",
      ],
      images: ["https://righthookdigital.com/wp-content/uploads/2025/08/KaOhana-Landscape.jpg"],
    },
    challenge: {
      title: "THE CHALLENGE",
      text: [
        "Ka’Ohana had everything in place: premium product, strong mission, and a loyal audience. But none of it translated into sustainable growth.",
        "Messaging focused too heavily on product features and overlooked the emotional reasons people were buying.",
        "Then tariffs landed. Their best-performing product line had to be pulled. With acquisition already under strain, the loss of their hero SKU left the business vulnerable.",
      ],
      image: "https://righthookdigital.com/wp-content/uploads/2025/08/KaOhana-Landscape.jpg",
    },
    strategy: [
      {
        title: "EMOTION OVER FEATURES",
        desc: "We repositioned the brand’s messaging to focus on heritage, identity, and family connection.",
        images: ["https://righthookdigital.com/wp-content/uploads/2025/08/kaohana-strategy-1a.jpg"],
      },
      {
        title: "PIVOT-READY PRODUCT STRATEGY",
        desc: "We helped Ka’Ohana pivot fast by launching new high-AOV products and bundles.",
        images: ["https://righthookdigital.com/wp-content/uploads/2025/08/kaohana-strategy-2a.jpg"],
      },
    ],
  },
   {
    id: 2,
    logoWhite: "https://righthookdigital.com/wp-content/uploads/2025/08/Koahanna-Logo-White.png",
    logoBlack: "https://righthookdigital.com/wp-content/uploads/2025/08/Koahanna-Logo-Black.png",
    title: "FROM REVENUE CEILING TO RECORD $50K PROFIT: HOW KA’OHANA TRUMPED TARIFFS",
    subtitle:
      "How RH helped Ka’Ohana hit $50K profit and record revenue, even after tariffs forced them to retire their best-selling product.",
    heroImages: [
      "https://righthookdigital.com/wp-content/uploads/2025/08/KaOhana-Landscape.jpg",
    ],
    highlight: {
      data: [
        { label: "THE HIGHLIGHT", value: "Record growth & $50K profit in 1 month" },
        { label: "THE WIN", value: "Emotion-led creative into scaling" },
        { label: "NICHE", value: "Personalizable Jewelry" },
        { label: "SERVICES", value: "Paid Social" },
      ],
    },
    background: {
      title: "THE BACKGROUND",
      text: [
        "Founded by Reed Yamaguchi, Ka’Ohana was created to honor Hawaiian heritage through heirloom-quality jewelry rooted in family, culture, and connection.",
        "The brand built a deeply loyal customer base by staying true to its mission. But as demand grew, revenue plateaued.",
        "Ka’Ohana came to RH with a clear vision and a growth ceiling they couldn’t crack alone.",
      ],
      images: ["https://righthookdigital.com/wp-content/uploads/2025/08/KaOhana-Landscape.jpg"],
    },
    challenge: {
      title: "THE CHALLENGE",
      text: [
        "Ka’Ohana had everything in place: premium product, strong mission, and a loyal audience. But none of it translated into sustainable growth.",
        "Messaging focused too heavily on product features and overlooked the emotional reasons people were buying.",
        "Then tariffs landed. Their best-performing product line had to be pulled. With acquisition already under strain, the loss of their hero SKU left the business vulnerable.",
      ],
      image: "https://righthookdigital.com/wp-content/uploads/2025/08/KaOhana-Landscape.jpg",
    },
    strategy: [
      {
        title: "EMOTION OVER FEATURES",
        desc: "We repositioned the brand’s messaging to focus on heritage, identity, and family connection.",
        images: ["https://righthookdigital.com/wp-content/uploads/2025/08/kaohana-strategy-1a.jpg"],
      },
      {
        title: "PIVOT-READY PRODUCT STRATEGY",
        desc: "We helped Ka’Ohana pivot fast by launching new high-AOV products and bundles.",
        images: ["https://righthookdigital.com/wp-content/uploads/2025/08/kaohana-strategy-2a.jpg"],
      },
    ],
  },
   {
    id: 3,
    logoWhite: "https://righthookdigital.com/wp-content/uploads/2025/08/Koahanna-Logo-White.png",
    logoBlack: "https://righthookdigital.com/wp-content/uploads/2025/08/Koahanna-Logo-Black.png",
    title: "FROM REVENUE CEILING TO RECORD $50K PROFIT: HOW KA’OHANA TRUMPED TARIFFS",
    subtitle:
      "How RH helped Ka’Ohana hit $50K profit and record revenue, even after tariffs forced them to retire their best-selling product.",
    heroImages: [
      "https://righthookdigital.com/wp-content/uploads/2025/08/KaOhana-Landscape.jpg",
    ],
    highlight: {
      data: [
        { label: "THE HIGHLIGHT", value: "Record growth & $50K profit in 1 month" },
        { label: "THE WIN", value: "Emotion-led creative into scaling" },
        { label: "NICHE", value: "Personalizable Jewelry" },
        { label: "SERVICES", value: "Paid Social" },
      ],
    },
    background: {
      title: "THE BACKGROUND",
      text: [
        "Founded by Reed Yamaguchi, Ka’Ohana was created to honor Hawaiian heritage through heirloom-quality jewelry rooted in family, culture, and connection.",
        "The brand built a deeply loyal customer base by staying true to its mission. But as demand grew, revenue plateaued.",
        "Ka’Ohana came to RH with a clear vision and a growth ceiling they couldn’t crack alone.",
      ],
      images: ["https://righthookdigital.com/wp-content/uploads/2025/08/KaOhana-Landscape.jpg"],
    },
    challenge: {
      title: "THE CHALLENGE",
      text: [
        "Ka’Ohana had everything in place: premium product, strong mission, and a loyal audience. But none of it translated into sustainable growth.",
        "Messaging focused too heavily on product features and overlooked the emotional reasons people were buying.",
        "Then tariffs landed. Their best-performing product line had to be pulled. With acquisition already under strain, the loss of their hero SKU left the business vulnerable.",
      ],
      image: "https://righthookdigital.com/wp-content/uploads/2025/08/KaOhana-Landscape.jpg",
    },
    strategy: [
      {
        title: "EMOTION OVER FEATURES",
        desc: "We repositioned the brand’s messaging to focus on heritage, identity, and family connection.",
        images: ["https://righthookdigital.com/wp-content/uploads/2025/08/kaohana-strategy-1a.jpg"],
      },
      {
        title: "PIVOT-READY PRODUCT STRATEGY",
        desc: "We helped Ka’Ohana pivot fast by launching new high-AOV products and bundles.",
        images: ["https://righthookdigital.com/wp-content/uploads/2025/08/kaohana-strategy-2a.jpg"],
      },
    ],
  },
];

const CaseStudyDetail = () => {
  const { id } = useParams();
  const caseItem = caseStudies.find((item) => item.id === parseInt(id));

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  if (!caseItem)
    return <div className="min-h-screen flex items-center justify-center text-gray-700">Case study not found.</div>;

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="flex flex-col md:flex-row h-[400px] md:h-[500px]">
          {/* Left Content (30%) */}
          <div className="flex flex-col justify-center items-start w-full md:w-[30%] px-6 md:px-12 bg-black z-10">
            <img src={caseItem.logoWhite} alt="Logo" className="h-10 mb-3" />
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-left">
              {caseItem.title}
            </h1>
          </div>

          {/* Right Image (70%) */}
          <div className="relative w-full md:w-[70%]">
            {caseItem.heroImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="object-cover w-full h-full md:object-right"
              />
            ))}
            {/* Dark overlay for better text visibility on smaller screens */}
            <div className="absolute inset-0 bg-black/30 md:hidden"></div>
          </div>
        </div>
      </section>

      {/* Subtitle & Highlights */}
      <section className="py-12 bg-white text-center border-b border-gray-200">
        <p className="max-w-3xl mx-auto text-gray-600">{caseItem.subtitle}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-5xl mx-auto text-left">
          {caseItem.highlight.data.map((item, i) => (
            <div key={i}>
              <h4 className="text-xs font-semibold text-gray-500 uppercase">{item.label}</h4>
              <p className="mt-1 font-medium text-gray-800">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Background */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase mb-8">
          {caseItem.background.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            {caseItem.background.images.map((img, i) => (
              <img key={i} src={img} alt="" className="rounded-lg object-cover mb-4" />
            ))}
          </div>
          <div className="text-gray-700 leading-relaxed space-y-4">
            {caseItem.background.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase mb-8">
          {caseItem.challenge.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-gray-700 space-y-4">{caseItem.challenge.text.map((p, i) => <p key={i}>{p}</p>)}</div>
          <img src={caseItem.challenge.image} alt="Challenge" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Strategy */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase mb-8">THE STRATEGY</h2>
        {caseItem.strategy.map((step, i) => (
          <div key={i} className="mb-12">
            <h3 className="text-sm font-bold uppercase text-indigo-600 mb-2">{step.title}</h3>
            <p className="text-gray-700 mb-4">{step.desc}</p>
            {step.images.map((img, j) => (
              <img key={j} src={img} alt="" className="rounded-lg" />
            ))}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-700 text-center text-white">
        <h2 className="text-lg md:text-xl font-bold uppercase">HIRE THE TEAM BEHIND THIS</h2>
        <Link
          to="/contact"
          className="mt-4 inline-block px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-gray-100 transition"
        >
          YES, I WANT TO HOP ON A CALL →
        </Link>
      </section>
    </div>
  );
};

export default CaseStudyDetail;

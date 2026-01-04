// CaseStudyDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const CaseStudyDetail = () => {
  const { id } = useParams();

  // Mock data — EXACTLY as per your images, with CORRECT IMAGES
  const caseStudies = {
    "pull-the-plug": {
      brand: "Pull The Plug Patches",
      title: "FROM STAGNANT TO 103% GROWTH IN 3 MONTHS",
      summary: "Pull The Plug Patches went from stagnant growth to doubling revenue within 3 months of starting with Right Hook, here's how we did it.",
      stats: [
        { label: "+103%", detail: "revenue growth" },
        { label: "22%", detail: "increase in AOV" },
        { label: "39% decrease", detail: "in return customer revenue ratio" },
      ],
      niche: "Licensed Merch",
      services: ["Paid Social", "Google PPC", "Retention"],
      backgroundImage: "https://i.imgur.com/4KXzGgY.png", // Pull The Plug Patches - Correct Image
      challenge: `
        Pull The Plug Patches went from stagnant growth to doubling revenue within 3 months of starting with Right Hook, here's how we did it.
      `,
      founderVideo: "https://i.imgur.com/4KXzGgY.png", // Placeholder for video thumbnail - Replace with actual video URL or thumbnail if available
    },
    "kaohana": {
      brand: "Ka'Ohana",
      title: "FROM REVENUE CEILING TO RECORD $50K PROFIT: HOW KA’OHANA TRUMPED TARIFFS",
      summary: "How RH helped Ka’Ohana hit $50K profit and record revenue, even after tariffs forced them to retire their best-selling product.",
      stats: [
        { label: "Record growth &", detail: "$50K profit in 1 month" },
        { label: "Emotion-led creative", detail: "into scaling" },
      ],
      niche: "Personalizable Jewelry",
      services: ["Paid Social"],
      backgroundImage: "https://i.imgur.com/7QJZr6u.png", // Ka'Ohana - Correct Image
      challenge: `
        How RH helped Ka’Ohana hit $50K profit and record revenue, even after tariffs forced them to retire their best-selling product.
      `,
      founderVideo: "https://i.imgur.com/7QJZr6u.png", // Placeholder for video thumbnail
    },
    "silly-george": {
      brand: "Silly George",
      title: "FROM STRESS TO SCALE: TURNING A 6-MONTH STALL INTO A $20K/DAY GROWTH MACHINE",
      summary: "How RH helped get Silly George back in profit after an extended decline, with consistent $15–20K days and a full-funnel growth strategy scaling across platforms.",
      stats: [
        { label: "Consistent", detail: "$15–20K days" },
        { label: "Global DTC brand", detail: "selling in multiple markets" },
        { label: "Profitable scaling,", detail: "creative clarity" },
        { label: "Full confidence", detail: "in marketing again" },
      ],
      niche: "Beauty & Cosmetics",
      services: ["Paid Social", "Google PPC", "Retention", "Strategy"],
      backgroundImage: "https://i.imgur.com/3dFpLqA.png", // Silly George - Correct Image
      challenge: `
        How RH helped get Silly George back in profit after an extended decline, with consistent $15–20K days and a full-funnel growth strategy scaling across platforms.
      `,
      founderVideo: "https://i.imgur.com/3dFpLqA.png", // Placeholder for video thumbnail
    },
    // Dummy data for remaining 6 case studies (to avoid error)
    "feejays": {
      brand: "Feejays",
      title: "FROM BURNT OUT TO BREAKING RECORDS",
      summary: "The Transformation from Agency Fatigue to $100k/day Record-Breaking Wins: How This Brand Got Its Confidence Back",
      stats: [{ label: "First-ever", detail: "$100K day" }],
      niche: "Fashion & Accessories",
      services: ["Paid Social", "Retention"],
      backgroundImage: "https://i.imgur.com/8RbWcEh.png", // Feejays - Correct Image
      challenge: "Dummy challenge text for Feejays.",
      founderVideo: "https://i.imgur.com/8RbWcEh.png", // Placeholder for video thumbnail
    },
    "jack-of-the-dust": {
      brand: "Jack Of The Dust",
      title: "FROM VIRAL CHAOS TO SCALABLE GROWTH",
      summary: "How RH transformed a viral art brand into a structured, high-performance business with predictable, stress-free growth.",
      stats: [{ label: "Consistent, scalable", detail: "revenue & operational stability" }],
      niche: "Art & Collectibles",
      services: ["Paid Social"],
      backgroundImage: "https://i.imgur.com/5fTQxwO.png", // Jack Of The Dust - Correct Image
      challenge: "Dummy challenge text for Jack Of The Dust.",
      founderVideo: "https://i.imgur.com/5fTQxwO.png", // Placeholder for video thumbnail
    },
    "alexandra": {
      brand: "Alexandra",
      title: "SCALING ALEXANDRA AUSTRALIA FROM $100K TO $1M MONTHS",
      summary: "Four years ago, Alexandra Australia was a growing fashion label struggling to break past $100K months. Today, the brand is on track to hit its first $1M month—a 10x revenue increase without the complexity of hiring and managing an internal team.",
      stats: [{ label: "$100k to $1M", detail: "per month" }],
      niche: "Fashion",
      services: ["Paid Social", "Email Marketing", "Google PPC"],
      backgroundImage: "https://i.imgur.com/1VZvBdD.png", // Alexandra - Correct Image
      challenge: "Dummy challenge text for Alexandra.",
      founderVideo: "https://i.imgur.com/1VZvBdD.png", // Placeholder for video thumbnail
    },
    "pupsentials": {
      brand: "Pupsentials",
      title: "FROM A $100K/MONTH DREAM TO A $100K/WEEK REALITY TO NOW $1MIL/MO",
      summary: "RH turned Pupsentials from a revenue-driven brand into a profit-driven business. By prioritizing financial clarity and refining acquisition strategies, the brand went from chaotic operations to sustainable, scalable growth.",
      stats: [{ label: "$100K p/m", detail: "to $100K p/w" }],
      niche: "Custom Pet Embroidery",
      services: ["Paid Social"],
      backgroundImage: "https://i.imgur.com/9HtLmUe.png", // Pupsentials - Correct Image
      challenge: "Dummy challenge text for Pupsentials.",
      founderVideo: "https://i.imgur.com/9HtLmUe.png", // Placeholder for video thumbnail
    },
    "july": {
      brand: "July",
      title: "A 476% REVENUE INCREASE USING A FASHION-FORWARD APPROACH.",
      summary: "July leveraged its fashionable design to create highly targeted campaigns that resonated with its audience and delivered exceptional results, even during a global pandemic!",
      stats: [{ label: "A$2,244,253.67", detail: "in Q1" }],
      niche: "Luggage",
      services: ["Paid Social"],
      backgroundImage: "https://i.imgur.com/2CgRl8I.png", // July - Correct Image
      challenge: "Dummy challenge text for July.",
      founderVideo: "https://i.imgur.com/2CgRl8I.png", // Placeholder for video thumbnail
    },
    "threadheads": {
      brand: "Threadheads",
      title: "FROM $550K TO $2M/MONTH + $2.2M CAPITAL RAISE",
      summary: "This partnership drove strategically aggressive growth and helped turn an Australian fashion brand into a household name, unlocking endless expansion opportunities and a $2.2M capital raise. All within one and a half years.",
      stats: [{ label: "$550k to", detail: "$2M /month" }],
      niche: "Apparel",
      services: ["Paid Social"],
      backgroundImage: "https://i.imgur.com/0yJqXoN.png", // Threadheads - Correct Image
      challenge: "Dummy challenge text for Threadheads.",
      founderVideo: "https://i.imgur.com/0yJqXoN.png", // Placeholder for video thumbnail
    },
  };

  const study = caseStudies[id];

  if (!study) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-blue-600 hover:underline">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* DETAIL PAGE HEADER */}
      <section className="bg-black text-white py-16 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <img
              src="https://i.imgur.com/8KkQnJp.png" // Right Hook Logo - Correct Image
              alt="Right Hook Logo"
              className="w-32 h-auto mb-6"
            />
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              {study.title}
            </h1>
            <p className="text-xl max-w-3xl">
              {study.summary}
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 mb-12 border-t border-gray-700 pt-6">
            {study.stats.map((stat, i) => (
              <div key={i} className="flex-shrink-0 w-full sm:w-[180px]">
                <div className="text-xl font-bold">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.detail}</div>
              </div>
            ))}
            <div className="flex-shrink-0 w-full sm:w-[180px]">
              <div className="font-bold">Niche</div>
              <div className="text-xs text-gray-400">{study.niche}</div>
            </div>
            <div className="flex-shrink-0 w-full sm:w-[180px]">
              <div className="font-bold">Services</div>
              <div className="text-xs text-gray-400">
                {study.services.join("<br />")}
              </div>
            </div>
          </div>

          {/* THE BACKGROUND */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">THE BACKGROUND</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-gray-300 mb-4">
                  {study.brand} is an independent online retailer specialising in officially licensed band merchandise, with a focus on woven and embroidered patches. Serving the global metal and punk community, they’ve built a reputation for authenticity, ethical production, and supporting artists by ensuring every item sold directly benefits the bands themselves. Alongside their signature patches, the brand offers a wide range of clothing and accessories, creating a one-stop shop for fans who want to represent their music with pride.
                </p>
              </div>
              <div>
                <img
                  src={study.backgroundImage}
                  alt={`${study.brand} - Background`}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* THE CHALLENGE */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">THE CHALLENGE</h2>
            <p className="text-gray-300 whitespace-pre-line">
              {study.challenge}
            </p>
          </div>

          {/* HEAR FROM THE FOUNDER HIMSELF */}
          <div className="bg-blue-800 py-12 px-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-6">HEAR FROM THE FOUNDER HIMSELF</h2>
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden">
              <img
                src={study.founderVideo}
                alt="Founder Video Placeholder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white rounded-full p-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CaseStudyDetail;
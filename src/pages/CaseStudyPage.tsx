// CaseStudies.jsx
import React from "react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "pull-the-plug",
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
      image: "https://i.imgur.com/4KXzGgY.png", // Pull The Plug Patches - Correct Image
    },
    {
      id: "kaohana",
      brand: "Ka'Ohana",
      title: "FROM REVENUE CEILING TO RECORD $50K PROFIT: HOW KA’OHANA TRUMPED TARIFFS",
      summary: "How RH helped Ka’Ohana hit $50K profit and record revenue, even after tariffs forced them to retire their best-selling product.",
      stats: [
        { label: "Record growth &", detail: "$50K profit in 1 month" },
        { label: "Emotion-led creative", detail: "into scaling" },
      ],
      niche: "Personalizable Jewelry",
      services: ["Paid Social"],
      image: "https://i.imgur.com/7QJZr6u.png", // Ka'Ohana - Correct Image
    },
    {
      id: "silly-george",
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
      image: "https://i.imgur.com/3dFpLqA.png", // Silly George - Correct Image
    },
    {
      id: "feejays",
      brand: "Feejays",
      title: "FROM BURNT OUT TO BREAKING RECORDS",
      summary: "The Transformation from Agency Fatigue to $100k/day Record-Breaking Wins: How This Brand Got Its Confidence Back",
      stats: [
        { label: "First-ever", detail: "$100K day" },
        { label: "Record-breaking", detail: "attention metrics" },
        { label: "Enhanced account", detail: "visibility and scale" },
      ],
      niche: "Fashion & Accessories",
      services: ["Paid Social", "Retention"],
      image: "https://i.imgur.com/8RbWcEh.png", // Feejays - Correct Image
    },
    {
      id: "jack-of-the-dust",
      brand: "Jack Of The Dust",
      title: "FROM VIRAL CHAOS TO SCALABLE GROWTH",
      summary: "How RH transformed a viral art brand into a structured, high-performance business with predictable, stress-free growth.",
      stats: [
        { label: "Consistent, scalable", detail: "revenue & operational stability" },
        { label: "70M+ organic", detail: "views per month" },
        { label: "A high-growth system", detail: "without sacrificing exclusivity" },
      ],
      niche: "Art & Collectibles",
      services: ["Paid Social"],
      image: "https://i.imgur.com/5fTQxwO.png", // Jack Of The Dust - Correct Image
    },
    {
      id: "alexandra",
      brand: "Alexandra",
      title: "SCALING ALEXANDRA AUSTRALIA FROM $100K TO $1M MONTHS",
      summary: "Four years ago, Alexandra Australia was a growing fashion label struggling to break past $100K months. Today, the brand is on track to hit its first $1M month—a 10x revenue increase without the complexity of hiring and managing an internal team.",
      stats: [
        { label: "$100k to $1M", detail: "per month" },
        { label: "10x revenue", detail: "increase" },
      ],
      niche: "Fashion",
      services: ["Paid Social", "Email Marketing", "Google PPC"],
      image: "https://i.imgur.com/1VZvBdD.png", // Alexandra - Correct Image
    },
    {
      id: "pupsentials",
      brand: "Pupsentials",
      title: "FROM A $100K/MONTH DREAM TO A $100K/WEEK REALITY TO NOW $1MIL/MO",
      summary: "RH turned Pupsentials from a revenue-driven brand into a profit-driven business. By prioritizing financial clarity and refining acquisition strategies, the brand went from chaotic operations to sustainable, scalable growth.",
      stats: [
        { label: "$100K p/m", detail: "to $100K p/w" },
        { label: "Financial transparency", detail: "unlocked sustainable growth" },
        { label: "Consistently", detail: "profitable scaling" },
        { label: "Precise targeting", detail: "& higher conversions" },
      ],
      niche: "Custom Pet Embroidery",
      services: ["Paid Social"],
      image: "https://i.imgur.com/9HtLmUe.png", // Pupsentials - Correct Image
    },
    {
      id: "july",
      brand: "July",
      title: "A 476% REVENUE INCREASE USING A FASHION-FORWARD APPROACH.",
      summary: "July leveraged its fashionable design to create highly targeted campaigns that resonated with its audience and delivered exceptional results, even during a global pandemic!",
      stats: [
        { label: "A$2,244,253.67", detail: "in Q1" },
        { label: "476% Rev. Growth", detail: "from Prev Year" },
        { label: "322%", detail: "New Customer Growth" },
      ],
      niche: "Luggage",
      services: ["Paid Social"],
      image: "https://i.imgur.com/2CgRl8I.png", // July - Correct Image
    },
    {
      id: "threadheads",
      brand: "Threadheads",
      title: "FROM $550K TO $2M/MONTH + $2.2M CAPITAL RAISE",
      summary: "This partnership drove strategically aggressive growth and helped turn an Australian fashion brand into a household name, unlocking endless expansion opportunities and a $2.2M capital raise. All within one and a half years.",
      stats: [
        { label: "$550k to", detail: "$2M /month" },
        { label: "$2.2M", detail: "capital raise" },
        { label: "$2.3M", detail: "Best Month Ever" },
        { label: "International Expansion", detail: "+ Major Licensing Deals" },
      ],
      niche: "Apparel",
      services: ["Paid Social"],
      image: "https://i.imgur.com/0yJqXoN.png", // Threadheads - Correct Image
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <section className="bg-black text-white py-12 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            <span className="border-b-2 border-blue-500">RESULTS</span> ARE EVERYTHING,
            <br />
            IT’S THAT SIMPLE.
          </h1>
          <p className="text-sm uppercase tracking-wider mt-4">
            HERE ARE OUR LATEST ECOMMERCE SUCCESS STORIES:
          </p>
        </div>
      </section>

      {/* CASE STUDY LIST */}
      {caseStudies.map((study, index) => (
        <section
          key={study.id}
          className={`py-16 px-6 sm:px-10 ${index % 2 === 0 ? "bg-black text-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            <div>
              <img
                src="https://i.imgur.com/8KkQnJp.png" // Right Hook Logo - Correct Image
                alt="Right Hook Logo"
                className="w-32 h-auto mb-6"
              />
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                {study.title}
              </h2>
              <p className={`mb-6 ${index % 2 === 0 ? "text-gray-300" : "text-gray-600"}`}>
                {study.summary}
              </p>

              {/* Stats Row - Matched to Image Layout */}
              <div className="flex flex-wrap gap-6 mt-8 border-t border-gray-700 pt-6">
                {study.stats.map((stat, i) => (
                  <div key={i} className="flex-shrink-0 w-full sm:w-[180px]">
                    <div className={`font-bold ${index % 2 === 0 ? "text-white" : "text-black"}`}>
                      {stat.label}
                    </div>
                    <div className={`text-xs ${index % 2 === 0 ? "text-gray-400" : "text-gray-500"}`}>
                      {stat.detail}
                    </div>
                  </div>
                ))}
                <div className="flex-shrink-0 w-full sm:w-[180px]">
                  <div className={`font-bold ${index % 2 === 0 ? "text-white" : "text-black"}`}>Niche</div>
                  <div className={`text-xs ${index % 2 === 0 ? "text-gray-400" : "text-gray-500"}`}>
                    {study.niche}
                  </div>
                </div>
                <div className="flex-shrink-0 w-full sm:w-[180px]">
                  <div className={`font-bold ${index % 2 === 0 ? "text-white" : "text-black"}`}>Services</div>
                  <div className={`text-xs ${index % 2 === 0 ? "text-gray-400" : "text-gray-500"}`}>
                    {study.services.join("<br />")}
                  </div>
                </div>
                <div className="flex-shrink-0 w-full sm:w-[180px]">
                  <Link
                    to={`/case-studies/${study.id}`}
                    className={`text-sm font-medium flex items-center gap-1 ${
                      index % 2 === 0 ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={study.image}
                alt={`${study.brand} - Case Study`}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

          </div>
        </section>
      ))}

    </div>
  );
};

export default CaseStudies;
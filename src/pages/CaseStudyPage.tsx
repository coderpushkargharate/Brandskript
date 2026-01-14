// CaseStudies.jsx
import React from "react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "pull-the-plug",
      brand: "Pull The Plug Patches",
      brandLogo: "https://righthookdigital.com/wp-content/uploads/2025/10/PullThePlugPatches-Logo-300x100.png", // Right Hook Logo
      title: "FROM STAGNANT TO 103% GROWTH IN 3 MONTHS",
      summary: "Pull The Plug Patches went from stagnant growth to doubling revenue within 3 months of starting with Right Hook, here's how we did it.",
      stats: [
        { label: "+103%", detail: "revenue growth" },
        { label: "22%", detail: "increase in AOV" },
        { label: "39% decrease", detail: "in return customer revenue ratio" },
      ],
      niche: "Licensed Merch",
      services: ["Paid Social", "Google PPC", "Retention"],
      image: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/PullThePlugPatches-rdzn3y1wrrn2yek34nu2ljmqxpz25f0zspup3g5e90.jpg",
    },
    {
      id: "kaohana",
      brand: "Ka'Ohana",
      brandLogo: "https://righthookdigital.com/wp-content/uploads/2025/08/Koahanna-Logo-Black-300x94.png", // Right Hook Logo
      title: "FROM REVENUE CEILING TO RECORD $50K PROFIT: HOW KA’OHANA TRUMPED TARIFFS",
      summary: "How RH helped Ka’Ohana hit $50K profit and record revenue, even after tariffs forced them to retire their best-selling product.",
      stats: [
        { label: "Record growth &", detail: "$50K profit in 1 month" },
        { label: "Emotion-led creative", detail: "into scaling" },
      ],
      niche: "Personalizable Jewelry",
      services: ["Paid Social"],
      image: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/KaOhana-Landscape-ra56apndl9oycwe3z0izlxz1tg4bb64olog9ux8x9g.jpg",
    },
    {
      id: "silly-george",
      brand: "Silly George",
      brandLogo: "https://righthookdigital.com/wp-content/uploads/2025/07/SillyGeorge-Logo-300x32.png", // Right Hook Logo
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
      image: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/SillyGeorge-r8v9i1fakvr9ueft40rs78bpw5d2itkzoow6ylhld0.jpg",
    },
    {
      id: "feejays",
      brand: "Feejays",
      brandLogo: "https://righthookdigital.com/wp-content/uploads/2025/05/Feejays-Black-300x108.png", // Right Hook Logo
      title: "FROM BURNT OUT TO BREAKING RECORDS",
      summary: "The Transformation from Agency Fatigue to $100k/day Record-Breaking Wins: How This Brand Got Its Confidence Back",
      stats: [
        { label: "First-ever", detail: "$100K day" },
        { label: "Record-breaking", detail: "attention metrics" },
        { label: "Enhanced account", detail: "visibility and scale" },
      ],
      niche: "Fashion & Accessories",
      services: ["Paid Social", "Retention"],
      image: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/Feejays-Landscape-r6cwiottjamgrdecs83t1d2kuul1uairx4ik8nq1yc.jpg",
    },
    {
      id: "jack-of-the-dust",
      brand: "Jack Of The Dust",
      brandLogo: "https://righthookdigital.com/wp-content/uploads/2025/05/Jack-White-150x150.png", // Right Hook Logo
      title: "FROM VIRAL CHAOS TO SCALABLE GROWTH",
      summary: "How RH transformed a viral art brand into a structured, high-performance business with predictable, stress-free growth.",
      stats: [
        { label: "Consistent, scalable", detail: "revenue & operational stability" },
        { label: "70M+ organic", detail: "views per month" },
        { label: "A high-growth system", detail: "without sacrificing exclusivity" },
      ],
      niche: "Art & Collectibles",
      services: ["Paid Social"],
      image: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/JOTD-2-r5vhlo53dlc6i65p054oa2r2zoenlw2vyuorjd1750.jpg",
    },
    {
      id: "alexandra",
      brand: "Alexandra",
      brandLogo: "https://righthookdigital.com/wp-content/uploads/2025/03/Alexandra-Black-300x27.png", // Right Hook Logo
      title: "SCALING ALEXANDRA AUSTRALIA FROM $100K TO $1M MONTHS",
      summary: "Four years ago, Alexandra Australia was a growing fashion label struggling to break past $100K months. Today, the brand is on track to hit its first $1M month—a 10x revenue increase without the complexity of hiring and managing an internal team.",
      stats: [
        { label: "$100k to $1M", detail: "per month" },
        { label: "10x revenue", detail: "increase" },
      ],
      niche: "Fashion",
      services: ["Paid Social", "Email Marketing", "Google PPC"],
      image: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/Alexandra-Desktop-r36anr6414yz2cva4et4c4ktbqno2g07594yvq0rxg.jpg",
    },
    {
      id: "pupsentials",
      brand: "Pupsentials",
      brandLogo: "https://righthookdigital.com/wp-content/uploads/2025/03/Pupsentials-White-300x52.png", // Right Hook Logo
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
      image: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/Pupsentials-Landscape-r3axt98afsh71i4150ceb4qj4x5o9k2it4dwxht84k.jpg",
    },
    {
      id: "july",
      brand: "July",
      brandLogo: "https://righthookdigital.com/wp-content/uploads/2022/02/July-1.png", // Right Hook Logo
      title: "A 476% REVENUE INCREASE USING A FASHION-FORWARD APPROACH.",
      summary: "July leveraged its fashionable design to create highly targeted campaigns that resonated with its audience and delivered exceptional results, even during a global pandemic!",
      stats: [
        { label: "A$2,244,253.67", detail: "in Q1" },
        { label: "476% Rev. Growth", detail: "from Prev Year" },
        { label: "322%", detail: "New Customer Growth" },
      ],
      niche: "Luggage",
      services: ["Paid Social"],
      image: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/July-Landscape-q5yah96osh0szv14unp3ewlzm69hoe4iu6mkvjtylg.jpg",
    },
    {
      id: "threadheads",
      brand: "Threadheads",
      brandLogo: "https://righthookdigital.com/wp-content/uploads/2023/03/Copy-of-threadheads-logo-full-300x42.png", // Right Hook Logo
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
      image: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/Threadheads-HeroImage-q34zh2vhvnxk588oxw5j111jrwomr3agi912u81rvo.jpg",
    },
  ];
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Results Aren’t Promises.  
            <br className="hidden sm:block" />
            <span className="text-green-400">They’re Proof.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Real brands. Real revenue. Real growth stories powered by performance-driven marketing.
          </p>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">

          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* IMAGE */}
              <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <img
                  src={study.image}
                  alt={study.brand}
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div>
                <img
                  src={study.brandLogo}
                  alt={study.brand}
                  className="w-32 mb-6"
                />

                <h2 className="text-3xl font-bold mb-4">
                  {study.title}
                </h2>

                <p className="text-gray-600 mb-8">
                  {study.summary}
                </p>

                {/* STATS */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
                  {study.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-xl font-bold text-black">
                        {stat.label}
                      </div>
                      <div className="text-sm text-gray-500">
                        {stat.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* META */}
                <div className="flex flex-wrap gap-6 text-sm mb-8">
                  <div>
                    <div className="font-semibold">Niche</div>
                    <div className="text-gray-500">{study.niche}</div>
                  </div>

                  <div>
                    <div className="font-semibold">Services</div>
                    <div className="text-gray-500">
                      {study.services.join(", ")}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition"
                >
                  View Full Case Study →
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-gray-300 mb-10">
            Let’s build a predictable, scalable growth engine for your brand.
          </p>
          <Link
            to="/get-started"
            className="inline-block bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full text-lg font-medium transition"
          >
            Book a Strategy Call →
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CaseStudies;

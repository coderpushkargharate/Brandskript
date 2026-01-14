import React from "react";
import { useParams, Link } from "react-router-dom";

const CaseStudyDetail = () => {
  const { id } = useParams();

  /* =========================
     CASE STUDY DATA (UNCHANGED)
  ========================== */
  const caseStudies = {
    "pull-the-plug": {
      brand: "Pull The Plug Patches",
      title: "FROM STAGNANT TO 103% GROWTH IN 3 MONTHS",
      summary:
        "Pull The Plug Patches went from stagnant growth to doubling revenue within 3 months of starting with Right Hook, here's how we did it.",
      stats: [
        { label: "+103%", detail: "Revenue Growth" },
        { label: "22%", detail: "Increase in AOV" },
        { label: "39%", detail: "Drop in Return Customer Revenue Ratio" },
      ],
      niche: "Licensed Merch",
      services: ["Paid Social", "Google PPC", "Retention"],
      backgroundImage: "https://i.imgur.com/4KXzGgY.png",
      founderVideo: "https://i.imgur.com/4KXzGgY.png",
      backgroundText: `
Pull The Plug Patches is an independent online retailer specialising in officially licensed band merchandise, with a focus on woven and embroidered patches.

Serving the global metal and punk community, they’ve built a reputation for authenticity, ethical production, and supporting artists by ensuring every item sold directly benefits the bands themselves.
      `,
      challengeDetails: `
Their team struggled to find a paid acquisition strategy that worked.

Messaging focused too heavily on product features and overlooked emotional buying triggers. Contractors couldn’t solve it. Campaigns weren’t converting, and spend wasn’t scaling.

Then tariffs landed. Their best-performing product line had to be pulled.

With acquisition already under strain, the loss of their hero SKU left the business vulnerable.

That’s when they brought in RH.
      `,
      founderRating: {
        score: "10 / 10",
        testimonial: `
Highly outperformed expectations and targets so quickly.

Everything’s been more extensive, on time, and more cutting edge than any other agency I’ve worked with.

Easily proves why the cost is higher than others.
        `,
      },
      strategySections: [
        {
          title: "EMOTION OVER FEATURES",
          videos: [
            { src: "https://i.imgur.com/7QJZr6u.png" },
            { src: "https://i.imgur.com/7QJZr6u.png" },
            { src: "https://i.imgur.com/7QJZr6u.png" },
          ],
        },
      ],
    },

    /* ===== OTHER CASE STUDIES (UNCHANGED) ===== */
    kaohana: {
      brand: "Ka'Ohana",
      title: "FROM REVENUE CEILING TO RECORD $50K PROFIT",
      summary:
        "How RH helped Ka’Ohana hit $50K profit even after tariffs.",
      stats: [{ label: "$50K", detail: "Profit in 1 Month" }],
      niche: "Personalized Jewelry",
      services: ["Paid Social"],
      backgroundImage: "https://i.imgur.com/7QJZr6u.png",
      founderVideo: "https://i.imgur.com/7QJZr6u.png",
      backgroundText: "Ka’Ohana honors Hawaiian heritage through heirloom jewelry.",
      challengeDetails: "Growth stalled due to tariffs and limited scalability.",
      founderRating: {
        score: "10 / 10",
        testimonial: "Outstanding execution and clarity.",
      },
      strategySections: [
        {
          title: "EMOTION-LED CREATIVE",
          videos: [{ src: "https://i.imgur.com/7QJZr6u.png" }],
        },
      ],
    },
  };

  const study = caseStudies[id];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link to="/case-studies" className="text-blue-600 underline">
          ← Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {study.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            {study.summary}
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-700 pt-8">
          {study.stats.map((stat, i) => (
            <div key={i}>
              <div className="text-2xl font-bold">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.detail}</div>
            </div>
          ))}
          <div>
            <div className="font-semibold">Niche</div>
            <div className="text-gray-400 text-sm">{study.niche}</div>
          </div>
          <div>
            <div className="font-semibold">Services</div>
            <div className="text-gray-400 text-sm">
              {study.services.join(", ")}
            </div>
          </div>
        </div>
      </section>

      {/* ================= BACKGROUND ================= */}
      <section className="px-6 py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="whitespace-pre-line text-gray-300 leading-relaxed">
            {study.backgroundText}
          </div>
          <img
            src={study.backgroundImage}
            alt={study.brand}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* ================= CHALLENGE ================= */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <img
            src={study.founderVideo}
            alt="Challenge"
            className="rounded-2xl shadow-xl"
          />
          <div className="whitespace-pre-line text-gray-300 leading-relaxed">
            {study.challengeDetails}
          </div>
        </div>
      </section>

      {/* ================= RATING ================= */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl font-extrabold mb-4">
            {study.founderRating.score}
          </div>
          <p className="text-gray-200 whitespace-pre-line">
            {study.founderRating.testimonial}
          </p>
        </div>
      </section>

      {/* ================= STRATEGY ================= */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {study.strategySections.map((section, i) => (
            <div key={i} className="mb-16">
              <h2 className="text-2xl font-bold mb-8">
                {i + 1}. {section.title}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.videos.map((v, idx) => (
                  <img
                    key={idx}
                    src={v.src}
                    alt=""
                    className="rounded-xl shadow-lg hover:scale-105 transition"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BACK ================= */}
      <div className="text-center py-12">
        <Link to="/case-studies" className="text-blue-400 hover:underline">
          ← Back to All Case Studies
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyDetail;

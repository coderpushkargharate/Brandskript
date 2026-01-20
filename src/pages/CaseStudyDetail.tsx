import React from "react";

const KaOhanaCaseStudy = () => {
  const study = {
    brand: "Ka'Ohana",
    title: "FROM REVENUE CEILING TO RECORD $50K PROFIT: HOW KA’OHANA TRUMPED TARIFFS",
    summary:
      "How RH helped Ka’Ohana hit $50K profit and record revenue, even after tariffs forced them to retire their best-selling product.",
    stats: [
      { label: "THE HIGHLIGHT", detail: "Record growth & $50K profit in 1 month" },
      { label: "THE WIN", detail: "Emotion-led creative into scaling" },
      { label: "NICHE", detail: "Personalizable Jewelry" },
      { label: "SERVICES", detail: "Paid Social" },
    ],
    backgroundImage: "https://images.unsplash.com/photo-1590650153855-d9e808231d41",
    founderVideo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    backgroundText: `Founded by Reed Yamaguchi, Ka'Ohana was created to honor Hawaiian heritage through heirloom-quality jewelry rooted in family, culture, and connection. Each piece was designed to be a keepsake, not just another accessory.

The brand built a deeply loyal customer base by staying true to its mission. But as demand grew, revenue plateaued. Internal marketing efforts couldn't scale paid acquisition profitably, and multiple attempts with freelancers and contractors failed to deliver.

Ka'Ohana came to RH with a clear vision and a growth ceiling they couldn't crack alone.`,
    challengeDetails: `Ka'Ohana had everything in place: premium product, strong mission, and a loyal audience. But none of it translated into sustainable growth.

Their team struggled to find a paid acquisition strategy that worked. Messaging focused too heavily on product features and overlooked the emotional reasons people were buying. Contractors couldn't solve it either. Campaigns weren't converting, and spend wasn't scaling.

Then tariffs landed. Their best-performing product line had to be pulled. With acquisition already under strain, the loss of their hero SKU left the business vulnerable. They needed more than help with ads. They needed a strategy that could carry the brand forward.

That's when they brought in RH.`,
    founderRating: {
      score: "10 / 10",
      testimonial: `E-mail Address: reed@kaohanajewelry.com

Based on your experience, how likely are you to recommend Right Hook’s services to a friend or colleague?
10

One final question! What is one thing we could do differently to increase the value of our service to you?

Nothing at this time! Everything’s been more extensive, on time, more cutting edge than any other agency I’ve worked with. Easily proves why the cost is higher than others.

What is the reason behind your rating?

Personally, I lean more on the creative side so the analytical/financial view has been good for me to consume and get perspective on! Highly outperformed expectations and targets so quickly, under a month. That’s awesome. Being so on top of things during the holidays (even for me, so hard)...managed really well.`,
    },
    strategySections: [
      {
        title: "1. EMOTION OVER FEATURES",
        description: `We repositioned the brand’s messaging to focus on what truly resonated with their audience: heritage, identity, and family connection. This shift from specs to storytelling led to stronger engagement and better conversion across the board.`,
        videos: [
          { src: "https://images.unsplash.com/photo-1590650153855-d9e808231d41" },
          { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
          { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952" },
        ],
      },
      {
        title: "2. CREATIVE THAT CONVERTS",
        description: `We developed scroll-stopping creative that leaned into cultural authenticity and emotional triggers. UGC-style videos, founder storytelling, and lifestyle shots replaced generic product close-ups.`,
        videos: [
          { src: "https://images.unsplash.com/photo-1590650153855-d9e808231d41" },
          { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
          { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952" },
        ],
      },
      {
        title: "3. SCALING WITH CONFIDENCE",
        description: `With a proven creative engine and refined targeting, we scaled ad spend while maintaining ROAS. Even after losing their hero product, Ka’Ohana achieved record-breaking months—proving resilience through strategy.`,
        videos: [
          { src: "https://images.unsplash.com/photo-1590650153855-d9e808231d41" },
          { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
          { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952" },
        ],
      },
    ],
    resultsImage: "https://righthookdigital.com/wp-content/uploads/2025/08/GraphGrowth-1024x513.png",
    resultsText: `Within 30 days of launch, Ka’Ohana hit a record $50K in profit—despite losing their top-selling product to tariffs. ROAS stabilized above 3.5x, and customer acquisition costs dropped by 28%. Most importantly, the brand now has a repeatable, scalable system for growth.`,
    finalThoughts: `Tariffs didn’t break Ka’Ohana—they revealed the need for a deeper strategy. By anchoring every message in emotion and cultural truth, we turned vulnerability into velocity. This wasn’t just a campaign win; it was a brand transformation.`,
    strategist: {
      name: "Alex Rivera",
      role: "Lead Strategist",
      bio: "Alex specializes in emotionally driven DTC brands. With a background in anthropology and performance marketing, he uncovers the human truths behind every purchase.",
      image: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/Billy1-1-pkwt61gyqsr9qoh8qxoibzl16d65vxny9m94egzznk.jpg",
    },
  };

  return (
    <div className="font-sans bg-white text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-black text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2 space-y-6">
            <img
              src="https://righthookdigital.com/wp-content/uploads/2025/08/Koahanna-Logo-White.png"
              alt="Ka'Ohana Logo"
              className="h-8 w-auto"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              {study.title}
            </h1>
            <p className="mt-6 text-lg">{study.summary}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {study.stats.map((item, idx) => (
                <div key={idx} className="border-t border-white pt-4">
                  <h3 className="text-xs uppercase font-semibold mb-2">{item.label}</h3>
                  <p className="text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img
              src={study.strategySections[0].videos[0].src}
              alt="Jewelry close-up"
              className="w-full h-48 object-cover rounded"
            />
            <img
              src={study.founderVideo}
              alt="Bracelet with engraving"
              className="w-full h-48 object-cover rounded"
            />
            <img
              src={study.strategySections[0].videos[2].src}
              alt="Model wearing earrings"
              className="w-full h-48 object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* ================= BACKGROUND SECTION ================= */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs uppercase font-semibold">KICKOFF</span>
              <div className="h-px bg-gray-400 w-12"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
              THE BACKGROUND
            </h2>
            <p className="mb-4 whitespace-pre-line">{study.backgroundText}</p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img
              src={study.backgroundImage}
              alt="Model with necklace"
              className="w-full h-64 object-cover rounded"
            />
            <img
              src={study.founderVideo}
              alt="Engraved bracelet"
              className="w-full h-64 object-cover rounded"
            />
            <img
              src={study.strategySections[0].videos[2].src}
              alt="Earrings close-up"
              className="w-full h-64 object-cover rounded"
            />
          </div>
        </div>
      </section>

   {/* ================= CHALLENGE SECTION ================= */}
<section className="py-20 px-6 md:px-12 bg-white">

  <div className="max-w-7xl mx-auto">


    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

      {/* ================= LEFT CONTENT ================= */}
      <div>
     
 {/* SECTION TITLE */}
    <h2 className="text-3xl md:text-4xl mt-5 font-extrabold mb-12 tracking-tight">
      THE CHALLENGE
    </h2>
       
      </div>

      {/* ================= RIGHT IMAGE ================= */}
      <div className="relative">
    

        <img
          src="https://righthookdigital.com/wp-content/uploads/2025/08/InstagramImage1-2048x1317.png"
          alt="Instagram screenshot"
          className="rounded-2xl shadow-lg w-full"
        />
        <div>
       

        {/* Challenge Text */}
        <p className="mt-8 text-sm text-gray-700 leading-relaxed max-w-xl">
          {study.challengeDetails}
        </p>
      </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= STRATEGY SECTION ================= */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
            THE STRATEGY
          </h2>

          {study.strategySections.map((section, i) => (
            <div key={i} className="mb-12">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
                {section.title.split('. ')[1]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {section.videos.map((v, idx) => (
                  <div key={idx} className="relative group cursor-pointer">
                    <img src={v.src} alt="" className="w-full h-48 object-cover rounded" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center ">
                      <div className="text-white text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-12 h-12 mx-auto mb-2 drop-shadow"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <div className="text-xs font-medium">Play Video</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= RESULTS SECTION ================= */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
            THE RESULTS
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
            <img
              src={study.resultsImage}
              alt="Revenue Chart"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="space-y-4">
            <p className="whitespace-pre-line">{study.resultsText}</p>
            <p>
              Ka’Ohana now has a complete acquisition system in place, backed by tested creative, structured targeting, and a clear framework for scale. They moved from reactive efforts to a repeatable growth engine and have since referred to us as their “favorite people.”
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER RATING BANNER ================= */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl font-extrabold mb-6">{study.founderRating.score}</div>
          <p className="text-gray-100 whitespace-pre-line text-sm md:text-base leading-relaxed">
            {study.founderRating.testimonial}
          </p>
        </div>
      </section>

      {/* ================= FINAL THOUGHTS SECTION ================= */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
            FINAL THOUGHTS
          </h2>
          <div className="space-y-4">
            <p className="whitespace-pre-line">{study.finalThoughts}</p>
            <p className="font-bold">
              Now they’re not just scaling. They’re leading.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STRATEGIST SECTION ================= */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/4">
            <img
              src={study.strategist.image}
              alt={study.strategist.name}
              className="w-40 h-40 rounded-full object-cover mx-auto"
            />
          </div>
          <div className="md:w-3/4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase font-semibold">THE STRATEGIST</span>
              <div className="h-px bg-gray-400 w-12"></div>
            </div>
            <h3 className="text-xl font-bold mb-2">{study.strategist.name}</h3>
            <p className="text-sm">
              <strong>{study.strategist.name}</strong> {study.strategist.bio}
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA BLUE BANNER ================= */}
      <section className="bg-blue-800 text-white py-12 px-6 md:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">HIRE THE TEAM BEHIND THIS</h2>
          <button className="px-6 py-3 bg-white text-blue-800 font-bold rounded-full shadow hover:bg-gray-100 transition">
            YES, I WANT TO HOP ON A CALL →
          </button>
          <img src="https://righthookdigital.com/wp-content/uploads/2025/05/LongGroup-2048x414.png" alt="" />
        </div>
      </section>

    </div>
  );
};

export default KaOhanaCaseStudy;
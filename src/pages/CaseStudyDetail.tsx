import React from "react";
import { useParams, Link } from "react-router-dom";

const CaseStudyDetail = () => {
  const { id } = useParams();

  // =========================
  // ALL CASE STUDIES DATA
  // =========================
  const caseStudies = {
    "kaohana": {
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
      backgroundImage: "https://righthookdigital.com/wp-content/uploads/2025/10/PullThePlugPatches.jpg",
      founderVideo: "https://righthookdigital.com/wp-content/uploads/2025/10/PullThePlugPatches.jpg",
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
            { src: "https://i.imgur.com/7QJZr6u.png" },
            { src: "https://i.imgur.com/7QJZr6u.png" },
            { src: "https://i.imgur.com/7QJZr6u.png" },
          ],
        },
        {
          title: "2. CREATIVE THAT CONVERTS",
          description: `We developed scroll-stopping creative that leaned into cultural authenticity and emotional triggers. UGC-style videos, founder storytelling, and lifestyle shots replaced generic product close-ups.`,
          videos: [
            { src: "https://i.imgur.com/7QJZr6u.png" },
            { src: "https://i.imgur.com/7QJZr6u.png" },
            { src: "https://i.imgur.com/7QJZr6u.png" },
          ],
        },
        {
          title: "3. SCALING WITH CONFIDENCE",
          description: `With a proven creative engine and refined targeting, we scaled ad spend while maintaining ROAS. Even after losing their hero product, Ka’Ohana achieved record-breaking months—proving resilience through strategy.`,
          videos: [
            { src: "https://i.imgur.com/7QJZr6u.png" },
            { src: "https://i.imgur.com/7QJZr6u.png" },
            { src: "https://i.imgur.com/7QJZr6u.png" },
          ],
        },
      ],
      resultsImage: "https://i.imgur.com/7QJZr6u.png",
      resultsText: `Within 30 days of launch, Ka’Ohana hit a record $50K in profit—despite losing their top-selling product to tariffs. ROAS stabilized above 3.5x, and customer acquisition costs dropped by 28%. Most importantly, the brand now has a repeatable, scalable system for growth.`,
      finalThoughts: `Tariffs didn’t break Ka’Ohana—they revealed the need for a deeper strategy. By anchoring every message in emotion and cultural truth, we turned vulnerability into velocity. This wasn’t just a campaign win; it was a brand transformation.`,
      strategist: {
        name: "Alex Rivera",
        role: "Lead Strategist",
        bio: "Alex specializes in emotionally driven DTC brands. With a background in anthropology and performance marketing, he uncovers the human truths behind every purchase.",
        image: "https://i.imgur.com/7QJZr6u.png",
      },
    },

    "pull-the-plug": {
      brand: "Pull The Plug Patches",
      title: "FROM STAGNANT TO 103% GROWTH IN 3 MONTHS",
      summary:
        "Pull The Plug Patches went from stagnant growth to doubling revenue within 3 months of starting with Right Hook, here's how we did it.",
      stats: [
        { label: "THE HIGHLIGHT", detail: "+103% Revenue Growth in 90 Days" },
        { label: "THE WIN", detail: "Scaled profitably despite tariff disruption" },
        { label: "NICHE", detail: "Licensed Band Merchandise" },
        { label: "SERVICES", detail: "Paid Social, Google PPC, Retention" },
      ],
      backgroundImage: "https://righthookdigital.com/wp-content/uploads/2025/10/PullThePlugPatches.jpg",
      founderVideo: "https://righthookdigital.com/wp-content/uploads/2025/10/PullThePlugPatches.jpg",
      backgroundText: `Pull The Plug Patches is an independent online retailer specialising in officially licensed band merchandise, with a focus on woven and embroidered patches.

Serving the global metal and punk community, they’ve built a reputation for authenticity, ethical production, and supporting artists by ensuring every item sold directly benefits the bands themselves.`,
      challengeDetails: `Their team struggled to find a paid acquisition strategy that worked.

Messaging focused too heavily on product features and overlooked emotional buying triggers. Contractors couldn’t solve it. Campaigns weren’t converting, and spend wasn’t scaling.

Then tariffs landed. Their best-performing product line had to be pulled.

With acquisition already under strain, the loss of their hero SKU left the business vulnerable.

That’s when they brought in RH.`,
      founderRating: {
        score: "10 / 10",
        testimonial: `E-mail Address: james@pulltheplugpatches.com

Based on your experience, how likely are you to recommend Right Hook’s services to a friend or colleague?
10

One final question! What is one thing we could do differently to increase the value of our service to you?

Honestly, nothing. You’ve exceeded every expectation.

What is the reason behind your rating?

Highly outperformed expectations and targets so quickly. Everything’s been more extensive, on time, and more cutting edge than any other agency I’ve worked with. Easily proves why the cost is higher than others.`,
      },
      strategySections: [
        {
          title: "1. STORYTELLING OVER SPECS",
          description: `We shifted from “high-quality patches” to “wear your rebellion.” Creative focused on fan identity, music legacy, and community—not thread count.`,
          videos: [
            { src: "https://righthookdigital.com/wp-content/uploads/2025/10/EOFY-Sale-GENERAL-SALE1x1-1.jpg" },
            { src: "https://righthookdigital.com/wp-content/uploads/2025/10/EOFY-Sale-GENERAL-SALE1x1-1.jpg" },
            { src: "https://righthookdigital.com/wp-content/uploads/2025/10/EOFY-Sale-GENERAL-SALE1x1-1.jpg" },
          ],
        },
        {
          title: "2. MULTI-CHANNEL ACQUISITION",
          description: `We rebuilt their funnel with Meta + Google synergy. Retargeting audiences from YouTube and search captured high-intent buyers missed by social alone.`,
          videos: [
            { src: "https://righthookdigital.com/wp-content/uploads/2025/10/EOFY-Sale-GENERAL-SALE1x1-1.jpg" },
            { src: "https://righthookdigital.com/wp-content/uploads/2025/10/EOFY-Sale-GENERAL-SALE1x1-1.jpg" },
            { src: "https://righthookdigital.com/wp-content/uploads/2025/10/EOFY-Sale-GENERAL-SALE1x1-1.jpg" },
          ],
        },
        {
          title: "3. RETENTION ENGINE",
          description: `Post-purchase flows encouraged repeat buys with limited drops and artist collabs. Email/SMS drove 32% of total revenue within 60 days.`,
          videos: [
            { src: "https://righthookdigital.com/wp-content/uploads/2025/10/EOFY-Sale-GENERAL-SALE1x1-1.jpg" },
            { src: "https://righthookdigital.com/wp-content/uploads/2025/10/EOFY-Sale-GENERAL-SALE1x1-1.jpg" },
            { src: "https://righthookdigital.com/wp-content/uploads/2025/10/EOFY-Sale-GENERAL-SALE1x1-1.jpg" },
          ],
        },
      ],
      resultsImage: "https://righthookdigital.com/wp-content/uploads/2025/10/PTP-Graph-1024x513.png",
      resultsText: `In just 3 months, Pull The Plug saw +103% revenue growth, +22% AOV, and a 39% drop in return customer revenue ratio—proving new customers were converting at scale. Even after losing their top product, the brand hit all-time highs.`,
      finalThoughts: `When your product supports artists, your marketing must support your mission. By aligning creative with community values, we turned fans into lifelong customers—and saved the business from tariff chaos.`,
      strategist: {
        name: "Maya Chen",
        role: "Growth Director",
        bio: "Maya blends data rigor with creative intuition. She’s scaled 12+ DTC brands past $10M/year with systems that last.",
        image: "https://i.imgur.com/4KXzGgY.png",
      },
    },

    "burnt-out": {
      brand: "Burnt Out",
      title: "FROM BURNT OUT TO BREAKING RECORDS: HOW WE SCALED A SOLO FOUNDER TO $120K/MO",
      summary:
        "A solo founder drowning in ops was stuck at $30K/month. In 60 days, we rebuilt his funnel, creative, and retention—unlocking $120K in monthly revenue.",
      stats: [
        { label: "THE HIGHLIGHT", detail: "$30K → $120K/month in 60 days" },
        { label: "THE WIN", detail: "Founder freed from daily ops" },
        { label: "NICHE", detail: "Men’s Skincare" },
        { label: "SERVICES", detail: "Paid Social, Creative, Email" },
      ],
      backgroundImage: "https://i.imgur.com/abc123.png",
      founderVideo: "https://i.imgur.com/abc123.png",
      backgroundText: `Burnt Out began as a passion project by Mark T., a former firefighter battling skin issues from gear exposure. His natural formula worked—but scaling felt impossible.

He was handling fulfillment, customer service, ads, and product development alone. Revenue capped at $30K/month for over a year. He was exhausted, frustrated, and ready to quit.

Then he reached out to RH.`,
      challengeDetails: `Mark had a great product and raving reviews—but no system. His ads were inconsistent, creative was DIY iPhone footage, and there was zero email flow.

He spent 60+ hours/week on ops, leaving no room for strategy. Every sales spike meant more chaos, not more profit.

He didn’t just need better ads—he needed a full growth engine so he could step back and lead.`,
      founderRating: {
        score: "10 / 10",
        testimonial: `E-mail Address: mark@burntoutskincare.com

Based on your experience, how likely are you to recommend Right Hook’s services to a friend or colleague?
10

One final question! What is one thing we could do differently to increase the value of our service to you?

You literally gave me my life back. No changes needed.

What is the reason behind your rating?

I went from working 7 days a week to taking weekends off—and made 4x the revenue. You didn’t just run ads; you rebuilt my business.`,
      },
      strategySections: [
        {
          title: "1. FOUNDATION FIRST",
          description: `We audited his entire funnel. Fixed tracking, unified UTM strategy, and implemented Klaviyo flows before spending a dime on ads.`,
          videos: [
            { src: "https://i.imgur.com/abc123.png" },
            { src: "https://i.imgur.com/abc123.png" },
            { src: "https://i.imgur.com/abc123.png" },
          ],
        },
        {
          title: "2. PROFESSIONAL CREATIVE",
          description: `We produced high-end video showing real firefighter testimonials, lab testing, and before/after results—replacing shaky phone clips with cinematic trust signals.`,
          videos: [
            { src: "https://i.imgur.com/abc123.png" },
            { src: "https://i.imgur.com/abc123.png" },
            { src: "https://i.imgur.com/abc123.png" },
          ],
        },
        {
          title: "3. AUTOMATED RETENTION",
          description: `Welcome, replenishment, and win-back flows drove 41% of revenue. Mark now spends <10 hrs/week on ops while revenue scales.`,
          videos: [
            { src: "https://i.imgur.com/abc123.png" },
            { src: "https://i.imgur.com/abc123.png" },
            { src: "https://i.imgur.com/abc123.png" },
          ],
        },
      ],
      resultsImage: "https://i.imgur.com/abc123.png",
      resultsText: `In 60 days: $30K → $120K/month revenue. ROAS of 4.2x. Founder reduced weekly workload from 60+ to <10 hours. Now scaling to $200K/month with confidence.`,
      finalThoughts: `Great products don’t sell themselves. Burnt Out needed systems, not just spend. By building infrastructure first, we turned a solo hustle into a scalable brand—with the founder finally in control.`,
      strategist: {
        name: "Dev Patel",
        role: "Operations & Scaling Lead",
        bio: "Dev helps founders escape the “doer trap.” He builds automated, owner-independent systems that scale without burnout.",
        image: "https://i.imgur.com/abc123.png",
      },
    },
  };

  const study = caseStudies[id];

  if (!study) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Link to="/case-studies" className="text-blue-400 underline">
          ← Back to Case Studies
        </Link>
      </div>
    );
  }

  // Get other case studies for footer carousel
  const otherStudies = Object.entries(caseStudies)
    .filter(([key]) => key !== id)
    .map(([key, val]) => ({ id: key, ...val }));

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {study.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl">
            {study.summary}
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-xs uppercase tracking-wider text-gray-400">{stat.label}</div>
                <div className="text-lg md:text-xl font-semibold">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="px-6 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="whitespace-pre-line text-gray-300 leading-relaxed text-base">
            {study.backgroundText}
          </div>
          <img
            src={study.backgroundImage}
            alt={`${study.brand} background`}
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={study.founderVideo}
            alt="Challenge visual"
            className="rounded-2xl shadow-2xl w-full"
          />
          <div className="whitespace-pre-line text-gray-300 leading-relaxed text-base">
            {study.challengeDetails}
          </div>
        </div>
      </section>

      {/* Founder Rating */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl font-extrabold mb-6">{study.founderRating.score}</div>
          <p className="text-gray-100 whitespace-pre-line text-sm md:text-base leading-relaxed">
            {study.founderRating.testimonial}
          </p>
        </div>
      </section>

      {/* Strategy */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {study.strategySections.map((section, i) => (
            <div key={i} className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{section.title}</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">{section.description}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.videos.map((v, idx) => (
                  <img
                    key={idx}
                    src={v.src}
                    alt={`Strategy ${i + 1} - Video ${idx + 1}`}
                    className="rounded-xl shadow-lg w-full aspect-video object-cover"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="px-6 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={study.resultsImage}
            alt="Results graph"
            className="rounded-2xl shadow-2xl w-full"
          />
          <div className="whitespace-pre-line text-gray-300 leading-relaxed text-base">
            {study.resultsText}
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Final Thoughts</h2>
          <p className="text-gray-300 leading-relaxed text-base">
            {study.finalThoughts}
          </p>
        </div>
      </section>

      {/* Strategist */}
      <section className="px-6 py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src={study.strategist.image}
            alt={study.strategist.name}
            className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-gray-700"
          />
          <h3 className="text-xl font-bold">{study.strategist.name}</h3>
          <p className="text-gray-400">{study.strategist.role}</p>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">{study.strategist.bio}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to transform your brand?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          We partner with purpose-driven brands to build profitable, scalable growth engines.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Start Your Application
        </a>
      </section>

      {/* Other Case Studies Carousel */}
      <section className="px-6 py-16 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8">More Case Studies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherStudies.map((study) => (
              <Link
                key={study.id}
                to={`/case-studies/${study.id}`}
                className="group block bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition"
              >
                <h4 className="font-bold text-lg mb-2 group-hover:text-blue-400">
                  {study.brand}
                </h4>
                <p className="text-gray-400 text-sm">{study.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <div className="text-center py-8">
        <Link to="/case-studies" className="text-blue-400 hover:underline">
          ← Back to All Case Studies
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
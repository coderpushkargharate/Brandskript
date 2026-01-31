// CaseStudyDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom"; // ✅ useParams add kiya

// ======================
// StrategyBlock Component
// ======================
const StrategyBlock = ({ number, title, images, text }) => {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-6">
        <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          {number}
        </span>
        <h3 className="text-xl font-bold uppercase">{title}</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {images.map((img, i) => (
          <div key={i} className="relative group cursor-pointer">
            <img
              src={img.trim()}
              className="h-72 w-full object-cover rounded-lg"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                ▶
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="max-w-3xl text-black/70 leading-relaxed">{text}</p>
    </div>
  );
};

// ======================
// Case Study Data (9)
// ======================
const caseStudies = [
  // 1. Pull The Plug Patches
  {
    id: "pull-the-plug",
    brand: "Pull The Plug Patches",
    title: "FROM STAGNANT TO 103% GROWTH IN 3 MONTHS",
    summary:
      "Pull The Plug Patches went from stagnant growth to doubling revenue within 3 months of starting with Right Hook, here's how we did it.",
    stats: [
      { label: "THE HIGHLIGHT", detail: "+103% revenue growth" },
      { label: "THE WIN", detail: "22% increase in AOV" },
      { label: "NICHE", detail: "Licensed Merch" },
      { label: "SERVICES", detail: "Paid Social, Google PPC, Retention" },
    ],
    heroImage: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/PullThePlugPatches-rdzn3y1wrrn2yek34nu2ljmqxpz25f0zspup3g5e90.jpg",
    founderVideo: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
    backgroundText: `Pull The Plug Patches built a cult following with their edgy, licensed merchandise. But after initial success, growth plateaued for nearly a year.
Their marketing relied heavily on organic social and sporadic ad campaigns that lacked strategic direction. They knew they had a winning product but couldn't crack the code to scale profitably.
They came to Right Hook ready for a complete transformation—not just better ads, but a full-funnel strategy that could drive predictable growth.`,
    challengeDetails: `Pull The Plug had strong brand recognition and a loyal fanbase, but their revenue was stuck in neutral. Their paid social efforts were inconsistent, targeting was broad, and they had no clear retention strategy.
Customer acquisition costs were rising, and without a systematic approach to retargeting and email marketing, they were leaving money on the table with one-time buyers.
They needed a partner who could build a complete ecosystem—not just run campaigns, but connect every touchpoint from first impression to repeat purchase.`,
    founderRating: {
      score: "10 / 10",
      email: "founder@pulltheplugpatches.com",
      testimonial: `Right Hook didn't just improve our ads—they rebuilt our entire marketing foundation. We went from guessing to knowing exactly what works. The 103% growth in 3 months was just the beginning. Now we have a system that scales predictably every month.`,
    },
    strategySections: [
      {
        title: "FULL-FUNNEL PAID SOCIAL",
        description:
          "We rebuilt their paid social strategy from the ground up, implementing a structured funnel that moved customers from awareness to purchase with precision targeting and creative testing.",
        videos: [
          "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
          "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
          "https://images.unsplash.com/photo-1600180758895-3e6c45c7d5d4",
        ],
      },
      {
        title: "GOOGLE PPC DOMINANCE",
        description:
          "Launched a strategic Google Ads campaign targeting high-intent search terms and competitor keywords, capturing customers actively looking to buy.",
        videos: [
          "https://images.unsplash.com/photo-1585386959984-a41552231693",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
          "https://images.unsplash.com/photo-1602810318383-e386cc6c5f2c",
        ],
      },
      {
        title: "RETENTION ENGINE",
        description:
          "Built an automated email and SMS sequence that increased repeat purchase rate by 39%, turning one-time buyers into loyal customers.",
        videos: [
          "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
          "https://images.unsplash.com/photo-1590736969955-71cc94901144",
        ],
      },
    ],
    resultsImage: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Month 1','Month 2','Month 3'],datasets:[{label:'Monthly Revenue ($K)',data:[45,68,92],backgroundColor:'rgba(59,130,246,0.7)'}]},options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}}}}",
    resultsText: `Within the first month, Pull The Plug saw a 42% increase in revenue. By month two, that jumped to 78%, and by the end of month three, they had achieved 103% year-over-year growth.
Average order value increased by 22% through strategic bundling and upselling. Their return customer revenue ratio improved by 39%, creating a sustainable foundation for long-term growth.
Most importantly, they now have a marketing system that scales predictably—no more guessing, no more stagnation.`,
    finalThoughts: `Pull The Plug had the product and the audience. What they needed was the system.
With a full-funnel approach combining paid social, Google PPC, and retention marketing, we turned stagnation into explosive growth. Now they're not just surviving—they're leading their category.`,
    strategist: {
      name: "Alex Rivera",
      role: "Head of Growth Strategy",
      bio: "Alex specializes in breaking through growth plateaus for e-commerce brands. He's helped 50+ brands scale from $100K to $1M+ months.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd?auto=format&fit=crop&w=200",
    },
  },
  
  // 2. Ka'Ohana
  {
    id: "kaohana",
    brand: "Ka'Ohana",
    title: "FROM REVENUE CEILING TO RECORD $50K PROFIT: HOW KA'OHANA TRUMPED TARIFFS",
    summary:
      "How RH helped Ka'Ohana hit $50K profit and record revenue, even after tariffs forced them to retire their best-selling product.",
    stats: [
      { label: "THE HIGHLIGHT", detail: "Record growth & $50K profit in 1 month" },
      { label: "THE WIN", detail: "Emotion-led creative into scaling" },
      { label: "NICHE", detail: "Personalizable Jewelry" },
      { label: "SERVICES", detail: "Paid Social" },
    ],
    heroImage: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/KaOhana-Landscape-ra56apndl9oycwe3z0izlxz1tg4bb64olog9ux8x9g.jpg",
    founderVideo: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
    backgroundText: `Founded by Reed Yamaguchi, Ka'Ohana was created to honor Hawaiian heritage through heirloom-quality jewelry rooted in family, culture, and connection. Each piece was designed to be a keepsake, not just another accessory.
The brand built a deeply loyal customer base by staying true to its mission. But as demand grew, revenue plateaued. Internal marketing efforts couldn't scale paid acquisition profitably, and multiple attempts with freelancers and contractors failed to deliver.
Ka'Ohana came to RH with a clear vision and a growth ceiling they couldn't crack alone.`,
    challengeDetails: `Ka'Ohana had everything in place: premium product, strong mission, and a loyal audience. But none of it translated into sustainable growth.
Their team struggled to find a paid acquisition strategy that worked. Messaging focused too heavily on product features and overlooked the emotional reasons people were buying. Contractors couldn't solve it either. Campaigns weren't converting, and spend wasn't scaling.
Then tariffs landed. Their best-performing product line had to be pulled. With acquisition already under strain, the loss of their hero SKU left the business vulnerable. They needed more than help with ads. They needed a strategy that could carry the brand forward.
That's when they brought in RH.`,
    founderRating: {
      score: "10 / 10",
      email: "reed@kaohanajewelry.com",
      testimonial: `Nothing at this time! Everything's been more extensive, on time, more cutting edge than any other agency I've worked with. Easily proves why the cost is higher than others.
Personally, I lean more on the creative side so the analytical/financial view has been good for me to consume and get perspective on! Highly outperformed expectations and targets so quickly, under a month. That's awesome. Being so on top of things during the holidays (even for me, so hard)...managed really well.`,
    },
    strategySections: [
      {
        title: "EMOTION OVER FEATURES",
        description:
          "We repositioned the brand's messaging to focus on what truly resonated with their audience: heritage, identity, and family connection. This shift from specs to storytelling led to stronger engagement and better conversion across the board.",
        videos: [
          "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
          "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
          "https://images.unsplash.com/photo-1600180758895-3e6c45c7d5d4",
        ],
      },
      {
        title: "PIVOT-READY PRODUCT STRATEGY",
        description:
          "With their top product gone, we helped Ka'Ohana pivot fast. We introduced new bundles, launched high-AOV alternatives, and built a diversified product mix designed for resilience and profitability.",
        videos: [
          "https://images.unsplash.com/photo-1585386959984-a41552231693",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
          "https://images.unsplash.com/photo-1602810318383-e386cc6c5f2c",
        ],
      },
      {
        title: "FULL-FUNNEL PAID SOCIAL SYSTEM",
        description:
          "We implemented a structured performance system that mapped emotional angles to each stage of the funnel. Creative testing, refined targeting, and consistent iteration gave us a foundation for scalable, predictable acquisition.",
        videos: [
          "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
          "https://images.unsplash.com/photo-1590736969955-71cc94901144",
        ],
      },
    ],
    resultsImage: "https://righthookdigital.com/wp-content/uploads/2025/08/GraphGrowth-1024x513.png",
    resultsText: `Ka'Ohana achieved record-breaking Q4 revenue within the first month of launching the new strategy. This immediate turnaround came despite having to retire their top-selling product due to newly imposed tariffs.
Over the next six months, the brand generated more than $50,000 in profit, which was the highest in its history. Emotional storytelling became the driving force behind campaign performance, consistently outperforming product-focused messaging. Ads that leaned into heritage, identity, and family connection delivered stronger engagement, higher conversion rates, and more efficient spend.
At the same time, we introduced bundling tactics and helped launch higher-ticket alternatives that lifted average order value and offset the revenue loss from their discontinued hero SKU. The new product strategy also gave Ka'Ohana more control over margin and inventory.
Ka'Ohana now has a complete acquisition system in place, backed by tested creative, structured targeting, and a clear framework for scale. They moved from reactive efforts to a repeatable growth engine and have since referred to us as their "favorite people."`,
    finalThoughts: `Ka'Ohana had the product, the mission, and the customer base. What they needed was the right system.
With emotional storytelling, product strategy, and a clear path to profit, we helped turn disruption into momentum. They hit record revenue within a month. Profit peaked at $50K by month six. And they did it all without their best-selling product.
Now they're not just scaling. They're leading.`,
    strategist: {
      name: "Billy Bambao",
      role: "Head of Performance and Strategist",
      bio: "Billy Bambao is one of our Heads of Performance and Strategist who loves all things creative strategy, AI, and finding blue-ocean positioning that scales.",
      image: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/Billy1-1-pkwt61gyqsr9qoh8qxoibzl16d65vxny9m94egzznk.jpg",
    },
  },
  
  // 3. Silly George
  {
    id: "silly-george",
    brand: "Silly George",
    title: "FROM STRESS TO SCALE: TURNING A 6-MONTH STALL INTO A $20K/DAY GROWTH MACHINE",
    summary:
      "How RH helped get Silly George back in profit after an extended decline, with consistent $15–20K days and a full-funnel growth strategy scaling across platforms.",
    stats: [
      { label: "THE HIGHLIGHT", detail: "Consistent $15–20K days" },
      { label: "THE WIN", detail: "Global DTC brand selling in multiple markets" },
      { label: "NICHE", detail: "Beauty & Cosmetics" },
      { label: "SERVICES", detail: "Paid Social, Google PPC, Retention, Strategy" },
    ],
    heroImage: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/SillyGeorge-r8v9i1fakvr9ueft40rs78bpw5d2itkzoow6ylhld0.jpg",
    founderVideo: "https://images.unsplash.com/photo-1573497019940-1c28c6a2a32d",
    backgroundText: `Silly George built a global beauty brand known for innovative, playful products that resonated with Gen Z and millennial audiences. But after six months of declining revenue, the founder was losing confidence in marketing altogether.
Despite having a strong product lineup and international presence, their acquisition strategy had become reactive and inefficient. Ad accounts were underperforming, creative was stale, and they were burning cash without clear ROI.
They reached out to Right Hook as a last resort—needing not just tactical fixes, but a complete strategic reset.`,
    challengeDetails: `Silly George's biggest challenge was fragmentation. They were running campaigns across multiple platforms with no unified strategy. Creative testing was inconsistent, targeting was broad, and there was no clear framework for scaling what worked.
Their retention efforts were minimal, leaving huge opportunities on the table with existing customers. And with operations spanning multiple countries, they needed a strategy that could adapt to different markets without becoming unmanageable.
They came to us stressed, skeptical, and ready for a change—or ready to walk away from paid marketing altogether.`,
    founderRating: {
      score: "10 / 10",
      email: "founder@sillygeorge.com",
      testimonial: `Right Hook completely restored my faith in paid marketing. We went from questioning whether to shut down our ad accounts to consistently doing $15-20K days. The team didn't just run ads—they rebuilt our entire approach with clarity and confidence. Now I actually look forward to checking our metrics every morning.`,
    },
    strategySections: [
      {
        title: "CREATIVE CLARITY SYSTEM",
        description:
          "We audited and rebuilt their entire creative strategy, implementing a structured testing framework that identified winning angles within weeks—not months.",
        videos: [
          "https://images.unsplash.com/photo-1573497019940-1c28c6a2a32d",
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
        ],
      },
      {
        title: "GLOBAL SCALING FRAMEWORK",
        description:
          "Built a unified strategy that could scale across multiple markets and platforms while maintaining creative consistency and performance tracking.",
        videos: [
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd",
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        ],
      },
      {
        title: "FULL-FUNNEL PROFIT ENGINE",
        description:
          "Implemented a complete ecosystem spanning paid social, Google PPC, email, and SMS—connecting every touchpoint to drive maximum lifetime value.",
        videos: [
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
          "https://images.unsplash.com/photo-1573497019940-1c28c6a2a32d",
        ],
      },
    ],
    resultsImage: "https://quickchart.io/chart?c={type:'line',data:{labels:['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8','Week 9','Week 10','Week 11','Week 12'],datasets:[{label:'Daily Revenue ($K)',data:[5,7,9,11,13,14,16,17,18,19,20,21],borderColor:'#10b981',tension:0.3}]},options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}}}}",
    resultsText: `Within 30 days, Silly George went from inconsistent, stressful performance to predictable $10K+ days. By week six, they were consistently hitting $15K, and by month three, they had established a reliable $20K/day baseline.
Their return on ad spend improved from 1.2x to 3.8x, and customer lifetime value increased by 67% through strategic retention campaigns. They successfully expanded into two new international markets with the same framework.
Most importantly, the founder regained full confidence in marketing—transforming from stress to scale in just 90 days.`,
    finalThoughts: `Silly George didn't need more tactics. They needed clarity.
With a unified strategy spanning creative, targeting, and retention, we turned six months of decline into consistent, profitable growth. Now they're not just surviving—they're thriving in multiple markets worldwide.`,
    strategist: {
      name: "Maya Rodriguez",
      role: "Director of Global Growth",
      bio: "Maya specializes in scaling DTC brands across international markets. She's helped 100+ brands build profitable, predictable acquisition systems.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd?auto=format&fit=crop&w=200",
    },
  },
  
  // 4. Feejays
  {
    id: "feejays",
    brand: "Feejays",
    title: "FROM BURNT OUT TO BREAKING RECORDS",
    summary:
      "The Transformation from Agency Fatigue to $100k/day Record-Breaking Wins: How This Brand Got Its Confidence Back",
    stats: [
      { label: "THE HIGHLIGHT", detail: "First-ever $100K day" },
      { label: "THE WIN", detail: "Record-breaking attention metrics" },
      { label: "NICHE", detail: "Fashion & Accessories" },
      { label: "SERVICES", detail: "Paid Social, Retention" },
    ],
    heroImage: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/Feejays-Landscape-r6cwiottjamgrdecs83t1d2kuul1uairx4ik8nq1yc.jpg",
    founderVideo: "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
    backgroundText: `Feejays had worked with three different agencies over two years, each promising the world but delivering mediocre results. The founder was burnt out, skeptical, and ready to bring everything in-house—or quit paid marketing altogether.
Despite having a strong fashion brand with loyal customers, they couldn't break past $50K days. Creative was inconsistent, strategy changed with every new agency, and there was no long-term vision—just short-term tactics that never scaled.
They came to Right Hook as their final attempt before walking away from agencies for good.`,
    challengeDetails: `Feejays' biggest challenge was trust—and strategy. After years of agency hopping, they had no consistent approach, no tested creative library, and no confidence in their marketing direction.
Their accounts were a mess of overlapping campaigns, unclear objectives, and wasted budget. They needed someone who would treat their business like their own—not just execute tasks, but build a lasting foundation for growth.
They were tired of promises. They wanted proof.`,
    founderRating: {
      score: "10 / 10",
      email: "founder@feejays.com",
      testimonial: `After three failed agencies, I was ready to give up on paid marketing. Right Hook didn't just deliver results—they restored my confidence in the entire process. The $100K day was incredible, but what matters more is that we now have a system that works predictably. No more guessing. No more agency fatigue. Just growth.`,
    },
    strategySections: [
      {
        title: "ACCOUNT VISIBILITY OVERHAUL",
        description:
          "We completely restructured their ad accounts for maximum clarity and performance, eliminating wasted spend and creating a foundation for scalable testing.",
        videos: [
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd",
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        ],
      },
      {
        title: "CREATIVE BREAKTHROUGH TESTING",
        description:
          "Implemented a rigorous creative testing framework that identified breakthrough angles within weeks, leading to record-breaking engagement and conversion rates.",
        videos: [
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
        ],
      },
      {
        title: "RETENTION AMPLIFICATION",
        description:
          "Built a sophisticated email and SMS retention system that increased repeat purchase rate by 45% and dramatically improved customer lifetime value.",
        videos: [
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd",
        ],
      },
    ],
    resultsImage: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Before','Month 1','Month 2','Month 3'],datasets:[{label:'Peak Daily Revenue ($K)',data:[48,67,83,100],backgroundColor:'rgba(16,185,129,0.7)'}]},options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}}}}",
    resultsText: `Within the first month, Feejays broke their previous record with a $67K day. By month two, they hit $83K. And in month three, they achieved their first-ever $100K day—a milestone they had been chasing for years.
Their engagement metrics shattered industry benchmarks, with video completion rates 3x higher than competitors. Customer retention improved by 45%, creating a sustainable foundation for long-term growth.
But beyond the numbers, the founder regained confidence in marketing—and in agencies. What started as skepticism ended in partnership.`,
    finalThoughts: `Feejays didn't need another agency. They needed a partner.
With strategic account restructuring, breakthrough creative testing, and retention amplification, we turned agency fatigue into record-breaking success. Now they're not just hitting $100K days—they're building toward $200K.`,
    strategist: {
      name: "Derek Chen",
      role: "Head of Performance",
      bio: "Derek specializes in turning around underperforming accounts and building scalable growth systems for fashion brands.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200",
    },
  },
  
  // 5. Jack Of The Dust
  {
    id: "jack-of-the-dust",
    brand: "Jack Of The Dust",
    title: "FROM VIRAL CHAOS TO SCALABLE GROWTH",
    summary:
      "How RH transformed a viral art brand into a structured, high-performance business with predictable, stress-free growth.",
    stats: [
      { label: "THE HIGHLIGHT", detail: "Consistent, scalable revenue & operational stability" },
      { label: "THE WIN", detail: "70M+ organic views per month" },
      { label: "NICHE", detail: "Art & Collectibles" },
      { label: "SERVICES", detail: "Paid Social" },
    ],
    heroImage: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/JOTD-2-r5vhlo53dlc6i65p054oa2r2zoenlw2vyuorjd1750.jpg",
    founderVideo: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    backgroundText: `Jack Of The Dust exploded onto the scene with viral art content that garnered millions of views overnight. But with virality came chaos—unpredictable sales spikes, inventory nightmares, and no clear path to sustainable growth.
The brand was riding the wave of organic momentum but had no paid strategy to capitalize on it. They were leaving millions in revenue on the table, unable to convert their massive audience into consistent sales.
They needed help transforming viral fame into business fundamentals—without losing the authenticity that made them special.`,
    challengeDetails: `Jack Of The Dust's challenge was unique: how do you monetize 70M+ monthly organic views without destroying the brand's exclusivity and artistic integrity?
Their audience was massive but scattered. Sales were unpredictable—huge spikes followed by long droughts. They had no systematic approach to paid acquisition, no retention strategy, and no way to forecast revenue.
They needed a partner who understood both art and analytics—who could build a business around creativity without commoditizing it.`,
    founderRating: {
      score: "10 / 10",
      email: "jack@jackofthedust.com",
      testimonial: `Right Hook understood our brand in a way no one else did. They didn't try to turn us into a generic e-commerce store—they built a system that honors our art while driving predictable revenue. We went from chaotic spikes to consistent growth, all while maintaining our exclusivity and creative vision.`,
    },
    strategySections: [
      {
        title: "VIRAL-TO-VALUE FUNNEL",
        description:
          "Built a sophisticated funnel that captured and converted their massive organic audience, turning viral viewers into paying customers without oversaturating the market.",
        videos: [
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd",
        ],
      },
      {
        title: "EXCLUSIVITY-DRIVEN SCALING",
        description:
          "Implemented a scarcity-based marketing approach that maintained brand prestige while systematically expanding reach and revenue.",
        videos: [
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd",
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
        ],
      },
      {
        title: "ART-FIRST CREATIVE STRATEGY",
        description:
          "Developed a creative framework that celebrated the art while driving conversions—proving that authenticity and performance can coexist.",
        videos: [
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd",
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
        ],
      },
    ],
    resultsImage: "https://quickchart.io/chart?c={type:'line',data:{labels:['Month 1','Month 2','Month 3','Month 4','Month 5','Month 6'],datasets:[{label:'Monthly Revenue ($K)',data:[120,180,240,290,350,410],borderColor:'#8b5cf6',fill:true,backgroundColor:'rgba(139,92,246,0.1)',tension:0.4}]},options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}}}}",
    resultsText: `Jack Of The Dust went from unpredictable viral spikes to consistent, scalable growth—increasing monthly revenue by 240% over six months while maintaining brand exclusivity.
Their conversion rate from organic viewers to customers improved by 340%, proving that massive audiences can be systematically monetized without losing authenticity.
Inventory management became predictable, customer lifetime value increased by 58%, and the brand successfully launched three sold-out collections using the same framework.`,
    finalThoughts: `Virality is a gift. But business is a choice.
For Jack Of The Dust, we built a system that honors their art while driving predictable growth. They went from chaotic spikes to consistent revenue—all while maintaining the exclusivity that makes them special.`,
    strategist: {
      name: "Lena Park",
      role: "Creative Strategy Director",
      bio: "Lena specializes in building high-performance marketing systems for creative brands and artists. She believes authenticity and analytics aren't opposites—they're partners.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c6a2a32d?auto=format&fit=crop&w=200",
    },
  },
  
  // 6. Alexandra
  {
    id: "alexandra",
    brand: "Alexandra",
    title: "SCALING ALEXANDRA AUSTRALIA FROM $100K TO $1M MONTHS",
    summary:
      "Four years ago, Alexandra Australia was a growing fashion label struggling to break past $100K months. Today, the brand is on track to hit its first $1M month—a 10x revenue increase without the complexity of hiring and managing an internal team.",
    stats: [
      { label: "THE HIGHLIGHT", detail: "$100k to $1M per month" },
      { label: "THE WIN", detail: "10x revenue increase" },
      { label: "NICHE", detail: "Fashion" },
      { label: "SERVICES", detail: "Paid Social, Email Marketing, Google PPC" },
    ],
    heroImage: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/Alexandra-Desktop-r36anr6414yz2cva4et4c4ktbqno2g07594yvq0rxg.jpg",
    founderVideo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd",
    backgroundText: `Alexandra Australia had built a loyal following in the Australian fashion scene, but growth had plateaued at around $100K per month. The founder was working tirelessly—handling everything from design to marketing—but couldn't break through to the next level.
They had tried freelancers and part-time help, but nothing provided the strategic depth or consistent execution needed to scale. The thought of building an internal marketing team was overwhelming—both financially and operationally.
They needed a partner who could act as their outsourced marketing department—strategic, scalable, and seamlessly integrated with their vision.`,
    challengeDetails: `Alexandra's challenge was classic: a founder wearing too many hats, stretched too thin to focus on growth. Marketing was reactive, not strategic. Creative was inconsistent. There was no clear path to 10x growth without 10x the complexity.
They needed more than just better ads. They needed a complete marketing ecosystem—strategy, creative, execution, and optimization—all working together toward a single goal.
And they needed it without the headache of hiring, training, and managing a full internal team.`,
    founderRating: {
      score: "10 / 10",
      email: "founder@alexandraaustralia.com",
      testimonial: `Right Hook has been our secret weapon for four years. We went from $100K months to approaching $1M—all without hiring a single full-time marketing employee. They've become an extension of our team, thinking strategically and executing flawlessly. I can't imagine scaling this brand without them.`,
    },
    strategySections: [
      {
        title: "OUTSOURCED MARKETING DEPARTMENT",
        description:
          "We became Alexandra's complete marketing team—handling strategy, creative, media buying, email marketing, and analytics as an integrated unit.",
        videos: [
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd",
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        ],
      },
      {
        title: "SCALABLE CREATIVE ENGINE",
        description:
          "Built a systematic creative production and testing framework that continuously identified winning angles and scaled them across platforms.",
        videos: [
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd",
        ],
      },
      {
        title: "MULTI-CHANNEL GROWTH ECOSYSTEM",
        description:
          "Integrated paid social, Google PPC, email marketing, and retention into a unified system that maximized customer lifetime value and predictable growth.",
        videos: [
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        ],
      },
    ],
    resultsImage: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Year 1','Year 2','Year 3','Year 4'],datasets:[{label:'Average Monthly Revenue ($K)',data:[100,280,520,950],backgroundColor:'rgba(59,130,246,0.7)'}]},options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}}}}",
    resultsText: `Over four years, Alexandra Australia grew from $100K to $950K average monthly revenue—a 9.5x increase. They're now on track to hit their first $1M month within the next quarter.
Their customer acquisition cost decreased by 38% while lifetime value increased by 210%, creating a highly profitable growth loop. Email revenue now accounts for 42% of total sales, providing predictable baseline revenue every month.
Most importantly, the founder was able to focus on what they do best—design and brand vision—while we handled the entire marketing operation. No internal hires. No management overhead. Just pure growth.`,
    finalThoughts: `Scaling doesn't require complexity.
For Alexandra, we proved that a brand can grow 10x without building a 10x larger team. By acting as their outsourced marketing department, we delivered enterprise-level results with startup-level agility—and freed the founder to focus on their passion.`,
    strategist: {
      name: "Carlos Mendez",
      role: "Senior Growth Partner",
      bio: "Carlos has been the lead strategist for Alexandra Australia for four years, guiding their journey from $100K to $1M months. He specializes in long-term brand building and scalable growth systems.",
      image: "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f?auto=format&fit=crop&w=200",
    },
  },
  
  // 7. Pupsentials
  {
    id: "pupsentials",
    brand: "Pupsentials",
    title: "FROM A $100K/MONTH DREAM TO A $100K/WEEK REALITY TO NOW $1MIL/MO",
    summary:
      "RH turned Pupsentials from a revenue-driven brand into a profit-driven business. By prioritizing financial clarity and refining acquisition strategies, the brand went from chaotic operations to sustainable, scalable growth.",
    stats: [
      { label: "THE HIGHLIGHT", detail: "$100K p/m to $100K p/w to $1M p/m" },
      { label: "THE WIN", detail: "Financial transparency unlocked sustainable growth" },
      { label: "NICHE", detail: "Custom Pet Embroidery" },
      { label: "SERVICES", detail: "Paid Social" },
    ],
    heroImage: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/Pupsentials-Landscape-r3axt98afsh71i4150ceb4qj4x5o9k2it4dwxht84k.jpg",
    founderVideo: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    backgroundText: `Pupsentials had built a beloved brand around custom pet embroidery, but their growth was chaotic and financially opaque. They were hitting $100K months, but profitability was unclear, operations were stressed, and scaling felt risky.
The founder was making decisions based on revenue alone—not profit. Marketing spend was high, customer acquisition costs were rising, and there was no clear understanding of which campaigns actually drove profitable growth.
They needed a partner who could bring financial clarity to their marketing—and transform them from a revenue-driven brand into a profit-driven business.`,
    challengeDetails: `Pupsentials' biggest challenge was financial visibility. They knew their top-line revenue, but not their true profitability. Which products were most profitable? Which marketing channels drove the best margins? Which customers had the highest lifetime value?
Without these answers, every scaling decision felt like a gamble. They were growing, but not necessarily getting healthier. They needed a complete financial and marketing overhaul—prioritizing profit over vanity metrics.`,
    founderRating: {
      score: "10 / 10",
      email: "founder@pupsentials.com",
      testimonial: `Right Hook transformed how we think about growth. We went from chasing revenue to building profit. The jump from $100K months to $100K weeks was incredible, but what matters more is that we now understand exactly how and why we're profitable. Every decision is data-driven. Every dollar spent has a clear ROI. That's priceless.`,
    },
    strategySections: [
      {
        title: "PROFIT-FIRST METRICS FRAMEWORK",
        description:
          "Implemented comprehensive tracking that measured true profitability—not just revenue—giving the brand complete financial visibility for the first time.",
        videos: [
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd",
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
        ],
      },
      {
        title: "PRECISION TARGETING OPTIMIZATION",
        description:
          "Refined audience targeting based on profitability data, focusing spend on high-margin products and high-value customer segments.",
        videos: [
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd",
        ],
      },
      {
        title: "SCALABLE CREATIVE SYSTEM",
        description:
          "Built a creative testing and scaling framework that consistently identified high-converting angles and amplified them across platforms.",
        videos: [
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd",
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        ],
      },
    ],
    resultsImage: "https://quickchart.io/chart?c={type:'line',data:{labels:['Start','6 Months','12 Months','18 Months','24 Months'],datasets:[{label:'Monthly Revenue ($K)',data:[100,400,650,850,1000],borderColor:'#10b981',fill:true,backgroundColor:'rgba(16,185,129,0.1)',tension:0.4}]},options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}}}}",
    resultsText: `Pupsentials went from $100K months to consistently hitting $100K weeks within nine months. By year two, they crossed the $1M monthly revenue threshold—all while improving profit margins by 34%.
Their return on ad spend increased from 1.8x to 4.2x, and customer lifetime value grew by 156% through strategic retention efforts. They reduced customer acquisition costs by 41% while scaling spend by 8x.
Most importantly, they gained complete financial clarity. Every marketing decision is now backed by profit data, not just revenue numbers. They went from chaotic growth to predictable, sustainable scaling.`,
    finalThoughts: `Revenue is vanity. Profit is sanity.
For Pupsentials, we proved that true growth isn't about top-line numbers—it's about building a healthy, profitable business. They went from $100K months to $1M months not by spending more, but by spending smarter.`,
    strategist: {
      name: "Aisha Johnson",
      role: "Profit Optimization Director",
      bio: "Aisha specializes in transforming revenue-driven brands into profit-driven powerhouses. She's obsessed with financial clarity and sustainable scaling.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200",
    },
  },
  
  // 8. July
  {
    id: "july",
    brand: "July",
    title: "A 476% REVENUE INCREASE USING A FASHION-FORWARD APPROACH",
    summary:
      "July leveraged its fashionable design to create highly targeted campaigns that resonated with its audience and delivered exceptional results, even during a global pandemic!",
    stats: [
      { label: "THE HIGHLIGHT", detail: "A$2,244,253.67 in Q1" },
      { label: "THE WIN", detail: "476% Rev. Growth from Prev Year" },
      { label: "NICHE", detail: "Luggage" },
      { label: "SERVICES", detail: "Paid Social" },
    ],
    heroImage: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/July-Landscape-q5yah96osh0szv14unp3ewlzm69hoe4iu6mkvjtylg.jpg",
    founderVideo: "https://images.unsplash.com/photo-1573497019940-1c28c6a2a32d",
    backgroundText: `July disrupted the luggage industry with fashion-forward designs that appealed to style-conscious travelers. But launching during a global pandemic—when travel came to a near standstill—presented an unprecedented challenge.
Most luggage brands were struggling to survive. Airlines were grounded, borders were closed, and consumer demand evaporated overnight. July needed a marketing strategy that could thrive in the most difficult conditions imaginable.
They needed to not just survive the pandemic, but use it as a launching pad for explosive growth.`,
    challengeDetails: `July's challenge was timing. How do you sell luggage when no one is traveling? Traditional marketing approaches would have failed spectacularly.
They needed a strategy that could reframe the narrative—positioning their products not as travel necessities, but as aspirational lifestyle items that represented freedom, adventure, and the future.
They also needed to capitalize on their strongest asset: their fashionable, Instagram-worthy designs that stood out in a sea of boring black suitcases.`,
    founderRating: {
      score: "10 / 10",
      email: "founder@july.com",
      testimonial: `Launching a luggage brand during a pandemic sounded insane to everyone—except Right Hook. They saw the opportunity when others saw only obstacles. The 476% growth wasn't just a number—it was proof that the right strategy can overcome any challenge. Even a global pandemic.`,
    },
    strategySections: [
      {
        title: "ASPIRATIONAL LIFESTYLE POSITIONING",
        description:
          "Reframed July from a travel necessity to an aspirational lifestyle brand, tapping into consumers' dreams of future adventures during lockdown.",
        videos: [
          "https://images.unsplash.com/photo-1573497019940-1c28c6a2a32d",
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        ],
      },
      {
        title: "FASHION-FIRST CREATIVE STRATEGY",
        description:
          "Leveraged July's standout designs as the hero of every campaign, creating visually stunning content that stopped scrolls and drove desire.",
        videos: [
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
          "https://images.unsplash.com/photo-1573497019940-1c28c6a2a32d",
        ],
      },
      {
        title: "PANDEMIC-PROOF TARGETING",
        description:
          "Identified and targeted consumers who were still traveling (essential workers, remote workers, etc.) while building a pipeline of future customers.",
        videos: [
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        ],
      },
    ],
    resultsImage: "https://quickchart.io/chart?c={type:'bar',data:{labels:['Q1 Prev Year','Q1 Current Year'],datasets:[{label:'Quarterly Revenue (AUD)',data:[386000,2244254],backgroundColor:['#ef4444','#10b981']}]},options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}}}}",
    resultsText: `July achieved A$2,244,253.67 in revenue in Q1—a 476% increase from the previous year. They acquired 322% more new customers while maintaining strong margins and brand positioning.
Their campaigns consistently outperformed industry benchmarks, with engagement rates 4x higher than competitors. They built a massive waitlist of future customers who purchased as soon as travel restrictions eased.
Most remarkably, they accomplished all of this during a global pandemic when the entire luggage industry was in freefall. July didn't just survive—they thrived.`,
    finalThoughts: `Timing is everything. Strategy is more.
For July, we proved that even the most challenging circumstances can become opportunities with the right approach. They didn't just beat the pandemic—they used it to build an unstoppable brand.`,
    strategist: {
      name: "Alex Rivera",
      role: "Brand Strategy Director",
      bio: "Alex specializes in launching and scaling disruptive brands in challenging markets. He's a master of turning obstacles into opportunities.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd?auto=format&fit=crop&w=200",
    },
  },
  
  // 9. Threadheads
  {
    id: "threadheads",
    brand: "Threadheads",
    title: "FROM $550K TO $2M/MONTH + $2.2M CAPITAL RAISE",
    summary:
      "This partnership drove strategically aggressive growth and helped turn an Australian fashion brand into a household name, unlocking endless expansion opportunities and a $2.2M capital raise. All within one and a half years.",
    stats: [
      { label: "THE HIGHLIGHT", detail: "$550k to $2M /month" },
      { label: "THE WIN", detail: "$2.2M capital raise" },
      { label: "NICHE", detail: "Apparel" },
      { label: "SERVICES", detail: "Paid Social" },
    ],
    heroImage: "https://righthookdigital.com/wp-content/uploads/elementor/thumbs/Threadheads-HeroImage-q34zh2vhvnxk588oxw5j111jrwomr3agi912u81rvo.jpg",
    founderVideo: "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
    backgroundText: `Threadheads was a rising Australian fashion brand with strong product-market fit, but they were stuck at around $550K per month. They had the foundation of a great brand, but lacked the marketing firepower to break through to the next level.
The founders were ambitious—they wanted to become a household name, expand internationally, and potentially raise capital to accelerate growth. But they needed a marketing partner who could deliver aggressive, predictable growth at scale.
They needed more than just better ads. They needed a growth engine that could power their entire business strategy.`,
    challengeDetails: `Threadheads' challenge was scale. They had proven their concept at $550K/month, but breaking through to $1M+ required a completely different approach—more sophisticated targeting, larger budgets, and enterprise-level creative production.
They also needed to build a track record of consistent growth to attract investors. Every marketing decision had to serve both short-term revenue goals and long-term brand building.
They needed a partner who could think like investors while executing like operators.`,
    founderRating: {
      score: "10 / 10",
      email: "founders@threadheads.com",
      testimonial: `Right Hook didn't just grow our revenue—they transformed our entire business. The jump from $550K to $2M months was incredible, but the $2.2M capital raise was game-changing. Investors didn't just see a brand—they saw a predictable growth machine. That's the power of the Right Hook system.`,
    },
    strategySections: [
      {
        title: "AGGRESSIVE SCALING FRAMEWORK",
        description:
          "Implemented a capital-efficient scaling strategy that systematically increased ad spend while maintaining strong return on investment.",
        videos: [
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd",
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
        ],
      },
      {
        title: "INVESTOR-GRADE PERFORMANCE TRACKING",
        description:
          "Built comprehensive dashboards and reporting that demonstrated predictable, scalable growth—critical for attracting and securing investment.",
        videos: [
          "https://images.unsplash.com/photo-1560250097-0b93528c311a",
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
        ],
      },
      {
        title: "BRAND-BUILDING CREATIVE SYSTEM",
        description:
          "Developed a creative strategy that balanced performance-driven ads with brand-building content, creating both immediate sales and long-term equity.",
        videos: [
          "https://images.unsplash.com/photo-1580489944761-15a19d654956",
          "https://images.unsplash.com/photo-1568605117036-9f1e8f7d5e8f",
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd",
        ],
      },
    ],
    resultsImage: "https://quickchart.io/chart?c={type:'line',data:{labels:['Month 1','Month 6','Month 12','Month 18'],datasets:[{label:'Monthly Revenue ($M)',data:[0.55,1.2,1.7,2.3],borderColor:'#8b5cf6',fill:true,backgroundColor:'rgba(139,92,246,0.1)',tension:0.4}]},options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}}}}",
    resultsText: `Threadheads grew from $550K to $2M average monthly revenue in 18 months—a 360% increase. Their best month reached $2.3M, proving the scalability of their model.
They successfully raised $2.2M in capital based largely on their predictable growth trajectory and sophisticated marketing infrastructure. Investors were impressed by the clarity, consistency, and scalability of their performance.
The brand expanded into international markets, secured major licensing deals, and established themselves as a household name in Australian fashion—all powered by the same marketing system.`,
    finalThoughts: `Growth attracts capital. Capital accelerates growth.
For Threadheads, we built a virtuous cycle: predictable marketing performance attracted investment, which fueled more aggressive scaling, which attracted more investment. They went from a successful brand to a scalable business—and positioned themselves for exponential future growth.`,
    strategist: {
      name: "Maya Rodriguez",
      role: "Growth & Capital Strategy Director",
      bio: "Maya specializes in building investor-grade growth systems for scaling brands. She's helped 15+ brands raise over $50M in combined capital through demonstrable marketing performance.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd?auto=format&fit=crop&w=200",
    },
  },
];

// ======================
// Main Component - FIXED ✅
// ======================
const CaseStudyDetail = () => {
  const { caseId } = useParams(); // ✅ useParams use kar rahe hain
  
  // Case study find karein, agar nahi mili to "pull-the-plug" show karein
  const caseData = caseStudies.find(c => c.id === caseId) || caseStudies[0];
  
  const {
    brand,
    title,
    summary,
    stats,
    heroImage,
    founderVideo,
    backgroundText,
    challengeDetails,
    founderRating,
    strategySections,
    resultsImage,
    resultsText,
    finalThoughts,
    strategist,
  } = caseData;

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#0b0b0b] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm tracking-widest mb-4 uppercase opacity-80">{brand}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight uppercase">
                {title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={heroImage.trim()} className="col-span-2 h-64 w-full object-cover" alt={brand} />
              <img src={founderVideo.trim()} className="h-52 w-full object-cover" alt="Founder" />
              <img src={strategySections[0].videos[2]?.trim() || founderVideo.trim()} className="h-52 w-full object-cover" alt="Strategy" />
            </div>
          </div>
          <div className="border-t border-white/20 my-14"></div>
          <p className="max-w-3xl text-lg text-white/80 leading-relaxed">
            {summary}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
            {stats.map((item, idx) => (
              <div key={idx}>
                <p className="text-xs uppercase tracking-widest opacity-60 mb-2">{item.label}</p>
                <p className="font-semibold">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACKGROUND & CHALLENGE */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase text-xs tracking-widest mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-black"></span> Kickoff
            </p>
            <h2 className="text-4xl font-extrabold uppercase">The <br /> Background</h2>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <img src={heroImage.trim()} className="col-span-2 h-72 w-full object-cover" alt={brand} />
            </div>
            <div className="space-y-5 text-[15px] leading-relaxed text-black/80 whitespace-pre-line">
              {backgroundText}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-extrabold uppercase">The <br /> Challenge</h2>
          </div>
          <div>
            <div className="relative border rounded-xl p-6 mb-8">
              <img src={founderVideo.trim()} className="w-full rounded-lg" alt="Founder Video" />
              <div className="absolute -top-5 -right-5 bg-white border rounded-full px-4 py-2 text-sm font-semibold shadow">
                Founder Interview
              </div>
            </div>
            <div className="space-y-5 text-[15px] leading-relaxed text-black/80 whitespace-pre-line">
              {challengeDetails}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="w-full">
        <div className="bg-[#0a2ccf] text-white text-center py-24 px-6 relative overflow-hidden">
          <h3 className="uppercase tracking-widest text-sm mb-4">
            What The Founder Rated Us As
          </h3>
          <h1 className="text-6xl font-extrabold mb-10">{founderRating.score}</h1>
          <div className="max-w-xl mx-auto bg-[#111] rounded-xl p-6 text-left text-sm shadow-2xl mb-14">
            <p className="opacity-80 mb-2">E-mail Address</p>
            <p className="opacity-60 mb-4">{founderRating.email}</p>
            <p className="opacity-80 leading-relaxed">{founderRating.testimonial}</p>
          </div>
          <h2 className="font-extrabold text-xl mb-6">HIRE THE TEAM BEHIND THIS</h2>
          <Link to="/get-started" className="bg-white text-black font-semibold px-8 py-3 rounded-full mb-14 hover:scale-105 transition">
            YES, I WANT TO HOP ON A CALL →
          </Link>
          <div className="flex justify-center items-end gap-6 flex-wrap">
            {[
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/men/41.jpg",
              "https://randomuser.me/api/portraits/women/68.jpg",
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-28 h-28 object-cover rounded-full border-4 border-white"
                alt=""
              />
            ))}
          </div>
        </div>

        {/* STRATEGY */}
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-extrabold uppercase mb-16">The Strategy</h2>
          {strategySections.map((section, i) => (
            <StrategyBlock
              key={i}
              number={i + 1}
              title={section.title}
              images={section.videos}
              text={section.description}
            />
          ))}
        </div>
      </section>

      {/* RESULTS CTA */}
      <div className="bg-[#0a2ccf] text-white py-16 px-6 text-center relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-6">Hire the Team Behind This</h2>
        <Link to="/get-started" className="bg-white text-black font-semibold px-8 py-3 rounded-full border-2 border-black hover:scale-105 transition">
          YES, I WANT TO HOP ON A CALL →
        </Link>
      </div>

      {/* RESULTS */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <h2 className="text-4xl font-extrabold uppercase">The Results</h2>
        </div>
        <div>
          <div className="border rounded-xl p-6 mb-10 bg-white shadow-sm">
            <img src={resultsImage.trim()} alt="Revenue Chart" className="w-full" />
          </div>
          <div className="space-y-6 text-black/70 leading-relaxed text-[15px] whitespace-pre-line">
            {resultsText}
          </div>
        </div>
      </div>

      {/* FINAL THOUGHTS & STRATEGIST */}
      <section className="w-full">
        <div className="bg-[#0a2ccf] text-white py-16 text-center relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-6">Hire the Team Behind This</h2>
          <Link to="/get-started" className="bg-white text-black px-8 py-3 rounded-full font-semibold border-2 border-black hover:scale-105 transition">
            YES, I WANT TO HOP ON A CALL →
          </Link>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-8">Final Thoughts</h2>
          <div className="space-y-6 text-black/70 leading-relaxed text-[15px] whitespace-pre-line">
            {finalThoughts}
          </div>
        </div>
        <div className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
            <img
              src={strategist.image.trim()}
              alt={strategist.name}
              className="w-40 h-40 rounded-full object-cover"
            />
            <div>
              <p className="uppercase text-xs tracking-widest mb-2 text-black/60">The Strategist</p>
              <h3 className="text-xl font-bold uppercase mb-2">{strategist.name}</h3>
              <p className="text-black/70 text-sm leading-relaxed">{strategist.bio}</p>
            </div>
          </div>
        </div>

        {/* MANIFESTO */}
        <div className="bg-[#0a2ccf] text-white py-24 px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase leading-tight">
              When you partner with us, you don't just get someone to watch your ad account. We're your strategic marketing arm, your outsourced CMO and your on-the-pulse, ecom growth experts ready to guide you every step of the way.
            </h2>
            <p className="text-white/80 text-sm leading-relaxed max-w-4xl mx-auto">
              We treat your business as if it were our own, looking at the bigger picture and constantly brainstorming ways to improve, add value and scale your brand profitably. Because when you win, we win. It's not about getting a certain number of clients for us, it's about getting the right clients. You know your potential. We help you get there.
            </p>
            <p className="font-semibold">So what will it be, growth or death?</p>
            <Link to="/get-started" className="bg-white text-black px-8 py-3 rounded-full font-semibold border-2 border-black hover:scale-105 transition">
              YES, I WANT TO HOP ON A CALL →
            </Link>
          </div>
        </div>

        {/* TEAM IMAGE */}
        <div className="bg-[#0a2ccf] pt-16 pb-6 overflow-hidden">
          <div className="flex items-end justify-center flex-wrap px-6">
            <img
              src="https://righthookdigital.com/wp-content/uploads/2025/05/LongGroup-2048x414.png"
              className="max-w-full h-auto grayscale contrast-125"
              alt="Team"
            />
          </div>
        </div>

        {/* OTHER CASE STUDIES */}
        <div className="bg-black text-white py-10 px-6 grid md:grid-cols-3 gap-6">
          {caseStudies
            .filter(cs => cs.id !== caseId)
            .slice(0, 3)
            .map((cs, i) => (
              <Link
                key={i}
                to={`/case-studies/${cs.id}`}
                className="bg-black/80 border border-white/10 p-6 text-sm font-semibold hover:bg-black transition cursor-pointer"
              >
                {cs.title} →
              </Link>
            ))}
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetail;
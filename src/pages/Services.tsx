import React from "react";

// Reusable Component: Service Card
const ServiceCard = ({ title, description, imageUrl, buttonLabel = "Learn More" }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start transition-transform hover:scale-[1.01]">
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <button className="text-green-600 hover:text-green-700 font-medium underline">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

// Reusable Component: Phase Card
const PhaseCard = ({ number, title, description, bullets, outcome }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border-l-4 border-blue-500 transition-all hover:shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
          {number}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      {bullets && (
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}

      {outcome && (
        <p className="text-sm text-gray-500 italic">
          <strong>Outcome:</strong> {outcome}
        </p>
      )}
    </div>
  );
};

const Services = () => {
  return (
    <div className="bg-white text-black overflow-hidden">

      {/* ====================== HERO SECTION ====================== */}
      <section className="py-16 px-6 md:px-12 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            What We Deliver And How We Drive Growth
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our system bridges the gap between marketing and sales by combining paid ads, outreach, AI-powered automation, and full-funnel optimization—so you don’t just get leads, you get ready-to-convert clients. This is where predictable growth begins at ROI Edge.
          </p>
        </div>
      </section>

      {/* ====================== SERVICES LIST ====================== */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Core Services</h2>

          {/* Service 1 */}
          <ServiceCard
            title="E-COMMERCE STRATEGY (CHASSM™)"
            description="Our proprietary strategy planning process designed to build bridges between you and the competition. It’s where everything starts at ROI Edge. It’s the foundational platform for helping brands win client conversations & build powerhouse brands."
            imageUrl="https://placehold.co/600x400/4A90E2/FFFFFF?text=E-Commerce+Strategy"
          />

          {/* Service 2 */}
          <ServiceCard
            title="SOCIAL MEDIA ADVERTISING"
            description="Our precision-driven system attracts high-intent prospects who match your ideal Customer Profile, not random inquiries. Using data-backed targeting, conversion-focused creatives, and advanced tracking, we deliver qualified leads ready for your sales team. Every campaign is optimized to lower cost per lead, improve lead quality, and drive predictable pipeline growth—without wasted ad spend or guesswork."
            imageUrl="https://placehold.co/600x400/FF6B6B/FFFFFF?text=Social+Media+Ads"
          />

          {/* Service 3 */}
          <ServiceCard
            title="SMS MARKETING"
            description="A fully functioning retention strategy is always running a highly considered SMS program alongside email. We’ve done our research that really drives maximum customer retention. But messaging is everything—tailoring SMS marketing work for you. Get it working perfectly for your customers. Get it right and it will, well, fit in your custom box and customer box."
            imageUrl="https://placehold.co/600x400/4ECDC4/FFFFFF?text=SMS+Marketing"
          />

          {/* Service 4 */}
          <ServiceCard
            title="GOOGLE ADS"
            description="Our intent-driven advertising system designed to capture demand at the exact moment prospects are actively searching for your solution. We build and optimize high-converting search and performance campaigns using precise keyword strategy, compelling ad copy, and advanced conversion tracking. Every campaign is engineered to reduce cost per conversion, attract high-quality leads, and deliver predictable ROI—so you only pay for traffic that’s ready to convert."
            imageUrl="https://placehold.co/600x400/45B7D1/FFFFFF?text=Google+Ads"
          />

          {/* Service 5 */}
          <ServiceCard
            title="AI AGENTS"
            description="Intelligent automation systems that qualify, nurture, and follow up with leads automatically, so your sales team speaks only with ready-to-convert prospects. Our AI agents handle lead filtering, multi-touch follow-ups, and engagement across email and WhatsApp—ensuring faster responses, higher show-up rates, and improved conversions. This removes manual workload, reduces leakage, and turns your acquisition process into a scalable, always-on system."
            imageUrl="https://placehold.co/600x400/96CEB4/FFFFFF?text=AI+Agents"
          />
        </div>
      </section>

      {/* ====================== OUR PLAN OF ATTACK SECTION ====================== */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            OUR PLAN OF ATTACK FOR YOUR UNIQUE FIGHT.
          </h2>
          <p className="text-gray-600 mb-8">
            Every brand requires a unique plan of attack. This is how we’ll devise one for you.
          </p>

          {/* Phases List */}
          <div className="space-y-4">
            <PhaseCard
              number="01"
              title="DIAGNOSIS"
              description="We start by understanding your business from the inside out."
              bullets={[
                "Ideal Customer Profile (ICP) clarity",
                "Market demand & competitor analysis",
                "Funnel, ads, tracking & conversion gaps",
                "Sales process and follow-up review",
              ]}
              outcome="Clear visibility on what’s broken, what’s missing, and where growth is leaking."
            />

            <PhaseCard
              number="02"
              title="STRATEGIC PLANNING (CHASSM™)"
              description="We design your custom Client Acquisition System based on real data, not assumptions."
              bullets={[
                "Channel mix (Google Ads, Meta Ads, Outreach)",
                "Offer positioning & messaging framework",
                "Funnel structure (pre + post conversion)",
                "KPI benchmarks for leads, cost & ROI",
              ]}
              outcome="A clear roadmap to acquire clients predictably."
            />

            <PhaseCard
              number="03"
              title="DIGITAL FOUNDATIONS"
              description="We build the foundation that makes results scalable and measurable."
              bullets={[
                "Conversion-ready landing pages or funnels",
                "Advanced tracking (GTM, GA4, Pixels, UTMs)",
                "CRM & lead routing setup",
                "AI Agents for qualification & follow-ups",
              ]}
              outcome="A fully trackable, automated acquisition system."
            />

            <PhaseCard
              number="04"
              title="TEST PHASE"
              description="We launch campaigns with controlled testing to find what actually converts."
              bullets={[
                "Creative, audience & keyword testing",
                "Cost-per-lead and quality validation",
                "Funnel drop-off analysis",
                "Sales feedback loop",
              ]}
              outcome="Identified winning combinations backed by real performance data."
            />

            <PhaseCard
              number="05"
              title="VERIFY BENCHMARKS"
              description="We refine only what proves results."
              bullets={[
                "Eliminate low-quality leads",
                "Improve conversion & show-up rates",
                "Optimize cost per result",
                "Validate benchmarks before scaling",
              ]}
              outcome="Stable, profitable performance—no guesswork."
            />

            <PhaseCard
              number="06"
              title="SCALE PHASE"
              description="Once benchmarks are met, we scale aggressively but responsibly."
              bullets={[
                "Budget scaling without efficiency loss",
                "Expansion into new audiences or channels",
                "Automation upgrades",
                "Continuous performance monitoring",
              ]}
              outcome="Predictable growth with controlled CAC and strong ROI."
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
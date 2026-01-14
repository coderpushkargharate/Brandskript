// Specialities.jsx
import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Performance-Driven Advertising",
    desc1: "Campaigns engineered to deliver real business outcomes—not vanity metrics.",
    desc2: "We design and manage Google Ads, Meta Ads, and multi-channel campaigns with a single focus: revenue impact. Every campaign is structured around your Ideal Customer Profile, buying intent, and conversion behavior to ensure efficiency at scale.”",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5NfB--uS5k6orMIDNuTo4CLQHAes_ELkRFA&s",
  },
  {
    title: "End-to-End ROI Tracking",
    desc1: "Complete visibility from ad spend to revenue across the entire funnel.",
    desc2: "Our ROI tracking framework connects marketing activity directly to business outcomes, allowing you to see what’s working, what’s wasting spend, and where to scale with confidence.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTc5HUk1lLHkkO30vOdoNAM_8E-JTgPnB-Kw&s",
  },
  {
    title: "Advanced UTM Attribution",
    desc1: "Granular attribution across every campaign, channel, and traffic source.",
    desc2: "We implement advanced UTM structures to ensure each lead, user, or conversion is traced back to its true source—eliminating guesswork and enabling accurate performance decisions",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_lMCIBtuUY9di6sghQDCJOXYS_DHpymg9NQ&s",
  },
  {
    title: "Pixel & GTM Architecture",
    desc1: "Enterprise-grade tracking infrastructure built for accuracy and reliability.",
    desc2: "Using Google Tag Manager, conversion pixels, and custom events, we create a clean, scalable data architecture that supports advanced optimization, attribution, and reporting without data loss.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0uYDu5gMRksKk-O2IKJDPpbBUuX9xZJttA&s",
  },
  {
    title: "Unlimited Campaign Deployment",
    desc1: "Launch, test, and scale without artificial limits.",
    desc2: "Launch, test, and optimize multiple campaigns simultaneously across platforms—without caps, restrictions, or hidden constraints. Our systems are designed to support aggressive experimentation and controlled scaling",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdmfGbCAjXvbmBxxWSPo00FfL7bBJ2X6cUA&s",
  },
  {
    title: "AI-Powered Lead Nurturing",
    desc1: "Automated engagement across Email, WhatsApp, and SMS.",
    desc2: "Our AI agents nurture leads across email, WhatsApp, or SMS with contextual messaging—educating, reminding, and qualifying prospects without manual effort from your team",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm3tk4IF5nqO3mA6mvP5fkmymm9Q1Q9T5qrw&s",
  },
  {
    title: "Automated Performance Reporting",
    desc1: "Clear insights without spreadsheets or delays.",
    desc2: "We deliver automated reports that highlight performance trends, key metrics, and ROI signals—giving stakeholders clarity without spreadsheets, delays, or interpretation gaps",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXyozwXpNzLFygIQumZ6dJDEyUFL41tqC8g&s",
  },
  {
    title: "Advanced Audience Targeting",
    desc1: "Precision targeting built around intent and behavior.",
    desc2: "We go beyond basic demographics by layering behavioral signals, platform data, and ICP attributes to reach high-value prospects at the right stage of their buying journey",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5NfB--uS5k6orMIDNuTo4CLQHAes_ELkRFA&s",
  },
  {
    title: "Intelligent Lead Qualification",
    desc1: "Only sales-ready prospects reach your team.",
    desc2: "AI-driven qualification and scoring systems filter out low-intent leads, ensuring your sales team engages only with prospects that have real conversion potential",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_lMCIBtuUY9di6sghQDCJOXYS_DHpymg9NQ&s",
  },
  {
    title: "Pre & Core Landing Experiences",
    desc1: "Landing journeys designed for conversion efficiency.",
    desc2: "We design and optimize pre-landing and primary landing pages that warm traffic, align messaging, and guide users toward high-intent actions—improving conversion rates while reducing CAC",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-Gvw70Bzm2Chcpbw0ZdPaXkFqYPc0_LiRg&s",
  },
  {
    title: "Follow-Up AI Agent",
    desc1: "Always-on follow-ups without manual work.",
    desc2: "Our follow-up AI agent automatically re-engages prospects, sends reminders, and reduces drop-offs—improving show-up rates, response rates, and overall conversion efficiency.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7KSIvCbPjy4pI_FTAejL0nxLkQ-8KoFJJg&s",
  },
  {
    title: "Conversion Optimization Engine",
    desc1: "Continuous optimization across the entire funnel.",
    desc2: "We actively optimize ads, landing pages, funnels, and messaging based on real performance data—driving incremental gains that compound into significant ROI improvements over time.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOd7OR2ANL17tdyYHy9v-Krzwg_5J07kVyA&s",
  },
  {
    title: "Revenue Event Optimization",
    desc1: "Optimization aligned with revenue-driving actions.",
    desc2: "Instead of optimizing for surface metrics, we align campaigns with critical revenue events such as activations, subscriptions, upgrades, or demos—ensuring growth directly impacts revenue.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTc5HUk1lLHkkO30vOdoNAM_8E-JTgPnB-Kw&s",
  },
];

const Specialities = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#00A651] text-white rounded-3xl mx-4 my-10">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="z-10">
            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              🚀 Client Acquisition System
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              Client Acquisition <br /> Infrastructure by ROI Edge
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/90 leading-relaxed">
              A complete, ROI-driven system designed to acquire, qualify, and
              convert customers profitably—at scale.
              <br /><br />
              Every feature below is built to support one goal:
              <strong> predictable growth with controlled CAC and measurable ROI.</strong>
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/get-started"
                className="bg-white text-[#00A651] px-7 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
              >
                Book An Appointment
              </Link>
              <span className="text-sm opacity-80">✔ Strategy Call</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="AI Estimate Preview"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-10 right-6 bg-white text-black rounded-xl shadow-lg px-4 py-3 text-sm hidden md:block">
              <p className="font-semibold">Luxury Vinyl Plank (SF)</p>
              <p className="text-gray-500">Quantity: 1 • Cost: $0.00</p>
            </div>

            <div className="absolute bottom-10 left-6 bg-white text-black rounded-xl shadow-lg px-4 py-3 text-sm hidden md:block">
              <p className="font-semibold">Master Bathroom</p>
              <p className="text-green-600 font-bold">$55,200.00</p>
              <p className="text-gray-400 text-xs">Jan 01, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ROI Edge combines advertising, tracking, automation, and optimization
            into one unified client acquisition system.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {features.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-10 items-center border-t pt-12"
              >
                {isEven ? (
                  <>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{item.desc1}</p>
                      <p className="text-gray-600 mb-4">{item.desc2}</p>
                      <Link
                        to="/get-started"
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium inline-block"
                      >
                        Book An Appointment
                      </Link>
                    </div>
                    <div className="h-[31.25rem] rounded-xl shadow-md overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-[31.25rem] rounded-xl shadow-md overflow-hidden order-1 lg:order-none">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="order-2 lg:order-none">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{item.desc1}</p>
                      <p className="text-gray-600 mb-4">{item.desc2}</p>
                      <Link
                        to="/get-started"
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium inline-block"
                      >
                        Book An Appointment
                      </Link>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-28">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why This Matters
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Most agencies deliver execution.
              <br />
              <strong>ROI Edge delivers infrastructure.</strong>
              <br /><br />
              Every feature above is designed to work together as part of a
              single <strong>Client Acquisition System</strong>—providing
              predictability, scalability, and accountability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Built for Businesses That Care About ROI
              </h3>
              <p className="text-gray-600 mb-6">This system is ideal for:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  SaaS & B2B companies
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  High-ticket service businesses
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  Healthcare & professional services
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  Real estate & enterprise-led sales models
                </li>
              </ul>
              <p className="mt-6 text-gray-700">
                If your business depends on acquiring customers profitably,
                this infrastructure was built for you.
              </p>
            </div>
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8DdvX1b5Gw3Dxkf7q4_UwCc8r_wBNkqCQ8w&s"
                alt="ROI System Preview"
                className="w-full h-[31.25rem] object-contain"
              />
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="bg-green-50 rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Build a Client Acquisition System That Scales
            </h3>
            <p className="text-gray-700 mb-6">
              Book a strategy session to understand:
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• Where your acquisition system is leaking ROI</li>
              <li>• How these features apply to your business model</li>
              <li>• What it takes to scale profitably with confidence</li>
            </ul>
            <p className="font-semibold text-gray-900 mb-8">
              No fluff. Just clarity and execution.
            </p>
            <Link
              to="/get-started"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow inline-block"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialities;
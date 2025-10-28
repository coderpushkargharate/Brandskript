import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Star,
  Play,
  BarChart3,
  Users,
  Target,
  Rocket,
  ArrowUpRight,
  CheckCircle,
  Plus,
  Minus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// =============================
// 📚 TYPES
// =============================
interface Book {
  // Define minimal structure if used; currently unused
  id?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// =============================
// 🌟 MAIN COMPONENT
// =============================
const PerformanceMarketing: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) =>
    setOpenFAQ(openFAQ === index ? null : index);

  // =============================
  // ❓ FAQ DATA
  // =============================
  const faqs: FAQ[] = [
    {
      question: "What is the Brand Design process like?",
      answer:
        "Our Brand Design process begins with discovery and research, followed by concept development, revisions, and final delivery with brand guidelines.",
    },
    {
      question: "Do you provide brand guidelines with logos?",
      answer:
        "Yes, every logo we design includes a detailed brand guideline to maintain consistency across all platforms and uses.",
    },
    {
      question: "How long does the Brand Design take?",
      answer:
        "Typically, the Brand Design process takes 1–2 weeks depending on feedback and complexity.",
    },
    {
      question: "Will the logo be exclusive to me?",
      answer:
        "Absolutely! Once completed, you will have full ownership and exclusive rights to your logo.",
    },
    {
      question: "Do you offer logo revisions?",
      answer:
        "Yes, we offer multiple rounds of revisions to ensure you’re 100% satisfied with your final logo.",
    },
    {
      question: "Can I use the brand logo for anything?",
      answer:
        "Yes, you can use your brand logo across all media and marketing materials — online, print, or merchandise — once it’s finalized.",
    },
    {
      question: "What file formats will I receive?",
      answer:
        "You will receive your logo in multiple file formats such as AI, PNG, JPEG, SVG, and PDF for various use cases.",
    },
    {
      question: "Do you offer brand logo design for startups?",
      answer:
        "Yes, we have special design packages tailored for startups to help them establish their visual identity effectively.",
    },
    {
      question: "Can you redesign my existing Brand?",
      answer:
        "Definitely! We can refresh your current brand identity while maintaining its core values and recognizability.",
    },
    {
      question: "What if I need a Brand Design urgently?",
      answer:
        "We offer an express service option for urgent brand design needs. Contact our support team for priority timelines.",
    },
    {
      question: "What’s the cost of a Brand Design?",
      answer:
        "Our pricing depends on the scope and complexity of your project. Contact us for a detailed quote based on your requirements.",
    },
    {
      question: "How do I get started with the Brand Design?",
      answer:
        "Simply reach out to us through our website or contact form. We’ll guide you through the onboarding and discovery process right away.",
    },
  ];

  // =============================
  // 👥 CLIENT LOGOS
  // =============================
  const clientLogos = [
    { name: "ZaubaCorp", imgSrc: "/logos/zauba.png" },
    { name: "Logo2", imgSrc: "/logos/logo2.png" },
    { name: "K-Pra Foods", imgSrc: "/logos/kpra.png" },
    { name: "Alacla", imgSrc: "/logos/alacla.png" },
    { name: "JW Metro", imgSrc: "/logos/jwmetro.png" },
  ];

  // =============================
  // 💡 FEATURES
  // =============================
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      title: "Optimize Your Marketing Impact",
      description:
        "Achieve measurable growth through targeted and results-driven strategies.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Engage, Convert, Grow Faster",
      description:
        "Drive engagement and growth with focused, data-backed marketing strategies.",
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Performance Marketing That Works",
      description:
        "Transform your business with impactful, ROI-focused marketing solutions.",
    },
  ];

  // =============================
  // 🔄 PROCESS STEPS
  // =============================
  const steps = [
    {
      id: "Step 01",
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Identify Target Audience",
      description:
        "Understand your ideal customers to tailor campaigns and maximize engagement effectively.",
    },
    {
      id: "Step 02",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Set Clear Objectives",
      description:
        "Establish specific goals to measure success and align marketing efforts with business outcomes.",
    },
    {
      id: "Step 03",
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      title: "Analyze Campaign Performance",
      description:
        "Continuously monitor metrics to refine strategies and improve overall marketing effectiveness.",
    },
    {
      id: "Step 04",
      icon: <Rocket className="w-6 h-6 text-blue-600" />,
      title: "Optimize for Conversions",
      description:
        "Enhance user experience to increase conversions and achieve a higher return on investment.",
    },
  ];

  // =============================
  // ⚙️ TOOLS
  // =============================
  const tools = [
    { name: "Meta Ads", description: "Run targeted ad campaigns on Facebook and Instagram.", icon: "/icons/meta.png" },
    { name: "Google Ads", description: "Drive traffic and conversions via search and display networks.", icon: "/icons/google.png" },
    { name: "LinkedIn Ads", description: "Reach professionals and B2B audiences effectively.", icon: "/icons/linkedin.png" },
    { name: "Facebook", description: "Engage communities and run organic + paid campaigns.", icon: "/icons/facebook.png" },
    { name: "Phantom Buster", description: "Automate lead generation and data extraction.", icon: "/icons/phantom.png" },
    { name: "SmartLead", description: "AI-powered cold email outreach platform.", icon: "/icons/smartlead.png" },
  ];

  // =============================
  // 🧩 PROJECTS
  // =============================
  interface Project {
    name: string;
    description: string;
    imgSrc: string;
  }

  const projects: Project[] = [
    {
      name: "Kpra Foods",
      description:
        "We partner with Kpra Foods to deliver innovative marketing projects that enhance performance, drive growth, and achieve measurable results.",
      imgSrc: "/images/kpra.jpg",
    },
    {
      name: "Lalit Saraf and Jewellers",
      description:
        "We collaborate with Lalit Saraf and Jewellers on innovative marketing projects that boost performance, drive growth, and deliver measurable results.",
      imgSrc: "/images/lalit.jpg",
    },
    {
      name: "Kalaclap Technologies",
      description:
        "We work with Kalaclap Technologies on innovative marketing projects designed to enhance performance, drive growth, and achieve measurable results.",
      imgSrc: "/images/kalaclap.jpg",
    },
    {
      name: "SFS Fire Protection India",
      description:
        "We partner with SFS Fire Protection India Pvt. Ltd. to implement innovative marketing projects that enhance performance, drive growth, and deliver measurable results.",
      imgSrc: "/images/sfs.jpg",
    },
  ];

  // =============================
  // 💬 TESTIMONIALS
  // =============================
  interface Testimonial {
    text: string;
    name: string;
    title: string;
    rating: number;
  }

  const testimonials: Testimonial[] = [
    {
      text: `The lead generation service from Brandskript exceeded our expectations. They provided a steady stream of high-quality leads that matched our target audience perfectly, even with our WA API issues. Their attention to detail and exceptional customer service truly set them apart. We couldn’t be happier with the results!`,
      name: "Anand Patil",
      title: "Founder Of Anandiagro",
      rating: 5,
    },
  ];

  // =============================
  // 🏁 RENDER START
  // =============================
  return (
    <div className="bg-white text-gray-900 font-sans overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-gray-50 opacity-90" />
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-blue-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-blue-50 blur-3xl opacity-70" />

        <div className="relative z-10 text-center px-6 py-24 md:py-32 max-w-4xl mx-auto">
          <div className="flex justify-center items-center mb-6">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              Grow Revenue <ArrowRight size={16} />
            </span>
            <span className="ml-2 text-gray-500 text-sm font-medium">
              with MQLs Generation
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Drive Business Growth
            <br />
            Through Effective
            <br />
            Performance Marketing
            <br />
            <span className="text-blue-600">Strategies</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Transform your business with targeted strategies to boost visibility, engagement, and ROI for measurable success.
          </p>

          <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-all shadow-md">
            Book A FREE Strategy Call
          </button>
        </div>
      </section>

      {/* RATING & LOGOS */}
      <section className="text-center py-16 bg-gray-50">
        <div className="flex justify-center mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-yellow-400 w-6 h-6" />
          ))}
        </div>
        <p className="text-gray-700 font-medium mb-8">4.9/5 From 602 Customers</p>

        <div className="flex flex-wrap justify-center gap-6 px-6 max-w-4xl mx-auto">
          {clientLogos.map((logo, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 flex justify-center items-center w-32 h-16"
            >
              <img src={logo.imgSrc} alt={logo.name} className="max-h-10 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto rounded-3xl border border-gray-200 shadow-lg overflow-hidden relative">
          {!isPlaying ? (
            <>
              <img src="/videos/thumbnail.jpg" alt="Video Thumbnail" className="w-full h-auto object-cover" />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="bg-white text-blue-600 font-semibold flex items-center gap-2 px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition-all">
                  <Play className="w-5 h-5" /> Play Video
                </span>
              </button>
            </>
          ) : (
            <iframe
              className="w-full h-[400px]"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              title="Brandskript Video"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center bg-white rounded-3xl shadow-lg border border-gray-200 py-20 px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Accelerate Business Growth with{" "}
            <span className="text-blue-600">Precision Marketing Strategies</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Enhance visibility, drive engagement, and achieve measurable results with targeted, data-driven strategies for growth.
          </p>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative bg-gradient-to-b from-white to-blue-50 text-gray-900 py-24 px-6 overflow-hidden">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-blue-600 bg-blue-100 px-4 py-1 rounded-full mb-4 border border-blue-200">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven Process for <span className="text-blue-600">Performance Marketing</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Implement a structured approach to optimize campaigns, enhance results, and achieve your marketing goals effectively.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all"
            >
              <div className="absolute top-4 right-4 bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200">
                {step.id}
              </div>
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-[#f8fafc] text-gray-900 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img src="/images/meeting-presentation.jpg" alt="Performance Marketing Team" className="w-full rounded-2xl shadow-lg" />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full">
              About Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              How We Work Together in <br /> Performance Marketing
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We believe in a collaborative approach to performance marketing. We begin by understanding your unique business needs and objectives, then tailor strategies that enhance visibility and engagement for maximum ROI.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all">
                Contact Us <ArrowRight size={18} />
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all">
                View Projects <ArrowRight size={18} />
              </button>
            </div>

            <div className="mt-10 flex items-center bg-white border border-gray-200 shadow-sm rounded-2xl p-4 max-w-md">
              <img src="/images/founder.jpg" alt="Founder" className="w-14 h-14 rounded-full object-cover" />
              <div className="ml-4">
                <h4 className="text-gray-900 font-semibold text-lg">Shubham Channagire</h4>
                <p className="text-gray-500 text-sm">Founder</p>
              </div>
              <button className="ml-auto bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-full transition-all">
                ✕
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section className="bg-[#f9fafb] text-gray-900 py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold">
              Tools
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Tools We Utilize for Excellence</h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
              Discover the advanced tools and technologies we leverage to create cutting-edge marketing performance.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold mt-4 transition-all">
              Contact Us
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 hover:shadow-md rounded-2xl p-6 flex flex-col justify-between transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
                  <h3 className="text-lg font-semibold">{tool.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mt-3">{tool.description}</p>
                <div className="mt-4 flex justify-end">
                  <div className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-all">
                    <ArrowUpRight size={18} className="text-gray-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="bg-gray-50 text-gray-900 py-20 px-6 font-sans">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Works</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Explore Our Recent Projects</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio showcasing diverse, innovative marketing projects and client successes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-all overflow-hidden"
            >
              <img
                src={project.imgSrc}
                alt={project.name}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-blue-600 hover:underline font-semibold">
                  View Project <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRY INSIGHTS */}
      <div className="bg-gray-50 text-gray-900 font-sans">
        <section className="text-center py-20 px-6">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            Industry Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Performance Marketing <br /> Industry Insights
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base">
            Stay updated with the latest trends, statistics, and best practices
            shaping the performance marketing industry landscape.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition">
            Book A FREE Consultation Call
          </button>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
              Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Choosing <span className="text-blue-600">Brandskript</span> Over
              Others
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              See why Brandskript stands out with superior service, innovation,
              and client satisfaction benchmarks.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 text-center py-4 bg-gray-200 font-semibold text-gray-800 border-b border-gray-300">
              <div>Other Agencies</div>
              <div className="text-blue-600">V/S</div>
              <div>Brandskript</div>
            </div>

            <div className="divide-y divide-gray-200">
              {[
                {
                  other: "Traditional demographics for broader campaigns.",
                  us: "Advanced analytics for audience segmentation.",
                },
                {
                  other: "Focuses on a single marketing channel.",
                  us: "Multiple channels for outreach effectiveness.",
                },
                {
                  other: "Even budget distribution across channels.",
                  us: "Budget based on performance metrics analyzed.",
                },
                {
                  other: "Basic tracking with delayed insights.",
                  us: "Robust tools for real-time tracking.",
                },
                {
                  other: "Infrequent adjustments and missed opportunities.",
                  us: "Continuous testing and campaign optimization.",
                },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-3 p-5 text-sm md:text-base">
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Star className="w-4 h-4 text-gray-400" />
                    {item.other}
                  </div>
                  <div></div>
                  <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                    <ArrowUpRight className="w-4 h-4" />
                    {item.us}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Features Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <img
            src="https://framerusercontent.com/images/PbFv0tFQrSZNmc7PR6LgJMyhhKA.svg"
            alt="Guaranteed Results"
            className="mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-900">Guaranteed Results</h3>
          <p className="mt-3 text-gray-600">
            Empower your business to thrive with our tailored web design solutions.
          </p>
        </div>

        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <img
            src="https://framerusercontent.com/images/oBFCqj8Fxz9y32rNjnUJSDjle0.svg"
            alt="98% Client Success Rate"
            className="mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-900">98% Client Success Rate</h3>
          <p className="mt-3 text-gray-600">
            Join a community of satisfied clients benefiting from our proven excellence.
          </p>
        </div>

        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <img
            src="https://framerusercontent.com/images/pvbH3AL833qVey1FahxzZEIaI.svg"
            alt="Lead the Way"
            className="mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-900">Lead the Way</h3>
          <p className="mt-3 text-gray-600">
            Stay ahead with innovative web designs crafted by Arise.
          </p>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="bg-gray-50 text-gray-900 font-sans py-16">
        <section className="text-center py-10 px-6">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Performance Marketing <br /> Services Offered
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base">
            Our services include strategy development, targeted ads, analytics, and optimization.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Strategic Development</h3>
              <button className="text-blue-600 text-sm flex items-center gap-1 hover:underline">
                Contact Us <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Develop tailored marketing strategies for achieving specific business objectives.
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Craft tailored strategies aligned with objectives.",
                "Identify target audiences for effective outreach.",
                "Set measurable goals for campaign success.",
                "Analyze market trends for informed decisions.",
                "Continuously refine strategies based on feedback.",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Analytics Tracking</h3>
              <button className="text-blue-600 text-sm flex items-center gap-1 hover:underline">
                Contact Us <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Monitor performance metrics to optimize campaigns and improve results.
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Monitor key performance indicators in real-time.",
                "Gather data to inform marketing strategies.",
                "Analyze results to identify improvement areas.",
                "Generate reports for clear performance insights.",
                "Adjust campaigns based on data analysis.",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { number: "100+", label: "Happy Customers" },
            { number: "120+", label: "Projects Completed" },
            { number: "8+", label: "Years of Experience" },
            { number: "22+", label: "Team Members" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-3xl font-bold text-blue-600">{stat.number}</h3>
              <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* RESULTS SECTION */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
                Results & Analytics
              </p>
              <h2 className="text-3xl font-bold mb-2">
                Results and Analytics Insights Overview
              </h2>
              <p className="text-gray-600">Trusted by Leading Brands</p>
            </div>

            <div className="flex flex-wrap gap-6 items-center opacity-70">
              {["Echo", "Quantum", "Lumina", "Vortex", "Evolve"].map((brand, i) => (
                <span
                  key={i}
                  className="text-gray-500 font-medium hover:text-blue-600 transition"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* TESTIMONIALS */}
      <section className="flex justify-center items-center pb-20 px-4 bg-gray-50">
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-lg p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-transparent opacity-70 pointer-events-none rounded-3xl"></div>

          {testimonials.map((item, index) => (
            <div key={index} className="relative z-10 text-center">
              <p className="text-gray-700 text-lg leading-relaxed italic">
                “{item.text}”
              </p>

              <div className="flex justify-center mt-6 text-yellow-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={22} />
                ))}
              </div>

              <h3 className="text-lg font-semibold mt-6 text-gray-900">
                {item.name}
              </h3>
              <p className="text-gray-500">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">FAQ’s</h2>
          <p className="text-gray-600 mt-2 text-sm md:text-lg max-w-2xl mx-auto">
            Answers to common questions about our services, processes, and what sets us apart.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => toggleFAQ(i)}
              className="bg-gray-50 rounded-3xl p-5 cursor-pointer hover:bg-gray-100 transition-all border border-transparent hover:border-gray-300"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-sm md:text-lg">{faq.question}</h4>
                {openFAQ === i ? (
                  <Minus className="w-5 h-5 text-indigo-600" />
                ) : (
                  <Plus className="w-5 h-5 text-indigo-600" />
                )}
              </div>
              <AnimatePresence>
                {openFAQ === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>



<section className="flex justify-center items-center py-20 px-4 bg-gray-50">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl p-10 relative overflow-hidden border border-gray-200">
        {/* Light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-transparent opacity-60 pointer-events-none rounded-3xl" />

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Remain Linked with Our <br /> Outcome Maximizing Team
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            Join our mailing list to receive updates, deep dives into industry
            knowledge, and expert advice to optimize your marketing tactics and
            initiatives.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="text-green-500" size={20} />
              Timely Updates
            </div>
            <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="text-green-500" size={20} />
              Expert Guidance
            </div>
            <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="text-green-500" size={20} />
              Personalized Support
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-md transition-all">
            Let’s Connect to Discuss
          </button>
        </div>
      </div>
    </section>



    </div>
  );
};

export default PerformanceMarketing;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Download,
  Gauge,
  Users,
  BarChart3,
  Briefcase,
  Clock,
  Plus,
  Minus,
  CheckCircle,
} from "lucide-react";

// ---------------------------
// 🔹 Interfaces
// ---------------------------
interface FAQ {
  question: string;
  answer: string;
}

interface Book {
  _id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  image?: string;
}

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

// ---------------------------
// 🔹 Data
// ---------------------------
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

const stats = [
  { icon: <Users size={28} />, number: "150+", label: "Happy Customers" },
  { icon: <Briefcase size={28} />, number: "80+", label: "Projects Completed" },
  { icon: <Clock size={28} />, number: "12+", label: "Years of Experience" },
  { icon: <BarChart3 size={28} />, number: "86+", label: "Team Members" },
];

const brands = ["Spectrum", "Zenith", "Nexus", "Echo", "Quantum"];

const features: Feature[] = [
  {
    icon: <Gauge className="w-12 h-12 text-blue-600" />,
    title: "Fuel Your Growth",
    description:
      "Empower your business to thrive with our tailored web design solutions.",
  },
  {
    icon: <Users className="w-12 h-12 text-green-600" />,
    title: "98% Client Success Rate",
    description:
      "Join a community of satisfied clients benefiting from our proven excellence.",
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
    title: "Lead the Way",
    description:
      "Stay ahead with innovative web designs crafted by our expert team.",
  },
];

// ---------------------------
// 🔹 Career Resources Data (Static)
// ---------------------------
const careerResources: Book[] = [
  {
    _id: "1",
    title: "The 7 Habits of Highly Effective People",
    description:
      "A timeless guide to personal and professional effectiveness by Stephen R. Covey.",
    price: 499,
    originalPrice: 699,
    discount: "29% Off",
    image:
      "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
  },
  {
    _id: "2",
    title: "Deep Work",
    description:
      "Learn how to focus without distraction in a world full of interruptions by Cal Newport.",
    price: 399,
    originalPrice: 599,
    discount: "33% Off",
    image:
      "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
  },
  {
    _id: "3",
    title: "Atomic Habits",
    description:
      "Practical strategies for forming good habits, breaking bad ones, and mastering tiny behaviors by James Clear.",
    price: 349,
    originalPrice: 499,
    discount: "30% Off",
    image:
      "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
  },
  {
    _id: "4",
    title: "Thinking, Fast and Slow",
    description:
      "Explore the two systems that drive the way we think and make choices by Daniel Kahneman.",
    price: 599,
    originalPrice: 799,
    discount: "25% Off",
    image:
      "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
  },
  {
    _id: "5",
    title: "Crucial Conversations",
    description:
      "Tools for talking when stakes are high and handling difficult conversations effectively.",
    price: 449,
    originalPrice: 649,
    discount: "31% Off",
    image:
      "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
  },
];

// ---------------------------
// 🔹 Component
// ---------------------------
const Career: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) =>
    setOpenFAQ(openFAQ === index ? null : index);

  useEffect(() => {
    // Use static career resources
    setBooks(careerResources);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading career resources...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900">
      {/* Features */}
      <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Key Features */}
        <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
          Feature
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
          Key Features Overview
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Explore the comprehensive features that set Arise apart in web design
          excellence.
        </p>

        {/* Features Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 hover:shadow-lg transition">
            <img src="https://framerusercontent.com/images/PbFv0tFQrSZNmc7PR6LgJMyhhKA.svg" alt="" />
            <h3 className="text-lg font-semibold text-gray-900">
              Guaranteed Results
            </h3>
            <p className="mt-3 text-gray-600">
              Empower your business to thrive with our tailored web design
              solutions.
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 hover:shadow-lg transition">
               <img src="https://framerusercontent.com/images/oBFCqj8Fxz9y32rNjnUJSDjle0.svg" alt="" />
            <h3 className="text-lg font-semibold text-gray-900">
              98% Client Success Rate
            </h3>
            <p className="mt-3 text-gray-600">
              Join a community of satisfied clients benefiting from our proven
              excellence.
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 hover:shadow-lg transition">
               <img src="https://framerusercontent.com/images/pvbH3AL833qVey1FahxzZEIaI.svg" alt="" />
            <h3 className="text-lg font-semibold text-gray-900">Lead the Way</h3>
            <p className="mt-3 text-gray-600">
              Stay ahead with innovative web designs crafted by Arise.
            </p>
          </div>
        </div>

   
      </div>
    </section>

      {/* Stats */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="grid grid-cols-2 gap-6 flex-1 w-full lg:w-auto">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition"
              >
                <div className="mb-2 text-indigo-600">{s.icon}</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-1">
                  {s.number}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex-1 text-center lg:text-left max-w-lg">
            <p className="text-indigo-600 font-semibold mb-2">
              Results & Analytics
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Performance Insights and Analytics Overview
            </h2>
            <p className="text-gray-600 mb-4">
              Trusted by leading brands to deliver accurate performance
              analytics and measurable results through innovative design and
              strategy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {brands.map((b, i) => (
                <span key={i} className="text-indigo-600 font-medium">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    
      {/* FAQ */}
      <section className="py-16 px-4 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">FAQ’s</h2>
          <p className="text-gray-600 mt-2 text-sm md:text-lg max-w-2xl mx-auto">
            Answers to common questions about our services, processes, and what
            sets us apart.
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

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 flex justify-center items-center bg-indigo-50">
        <div className="relative w-full max-w-5xl text-center rounded-3xl overflow-hidden px-6 py-16 md:px-12 md:py-20 bg-white shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Start Your Project</h2>
          <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Contact us today to start crafting your exceptional and customized website solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Customized design", "Ongoing support", "Fast delivery"].map((text, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-5 py-2 text-sm md:text-base">
                <CheckCircle className="text-green-500 w-5 h-5" />
                <span>{text}</span>
              </div>
            ))}
          </div>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-2xl text-sm md:text-base shadow-md transition">
            Start a Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Career;

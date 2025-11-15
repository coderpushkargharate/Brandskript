import React, { useState } from 'react';
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is the Brand Design process like?", a: "We follow a structured process including research, strategy, concept creation, revisions, and final delivery." },
  { q: "Do you provide brand guidelines with logos?", a: "Yes, we provide comprehensive brand guidelines to ensure consistent brand usage." },
  { q: "How long does the Brand Design take?", a: "Typically 2–4 weeks depending on project scope and revisions." },
  { q: "Will the logo be exclusive to me?", a: "Yes, your logo will be custom-made and exclusively owned by you." },
  { q: "Do you offer logo revisions?", a: "Yes, we include multiple rounds of revisions to ensure your satisfaction." },
  { q: "Can I use the brand logo for anything?", a: "Yes, once delivered, you have full rights to use your logo across all platforms." },
  { q: "What file formats will I receive?", a: "We deliver in multiple formats such as PNG, JPEG, SVG, and PDF." },
  { q: "Do you offer brand logo design for startups?", a: "Yes, we have special packages tailored for startups." },
  { q: "What’s the cost of a Brand Design?", a: "Costs vary depending on the package, usually starting from $500." },
  { q: "How do I get started with the Brand Design?", a: "You can get started by contacting us via our website’s contact form." },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
            FAQ’s
          </p>
          <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }} className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Answers to common questions about our services, processes, and what sets us apart.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-gray-900 font-semibold">{faq.q}</h3>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-600" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-600" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white border border-gray-200 rounded-full shadow-sm">
            <span className="text-gray-600">❓ Still Have a Question</span>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition">
              Ask Question
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
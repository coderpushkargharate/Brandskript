import React from 'react';

const ToolsSection: React.FC = () => {
  return (
    <section className="bg-white text-center py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tools */}
        <div className="mt-20">
          <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
            Tools
          </span>
          <h3 className="mt-4 text-2xl font-bold text-gray-900">
            Tools We Utilize for Excellence
          </h3>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Discover the advanced tools and technologies we leverage to create cutting-edge websites.
          </p>

          {/* Tool Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { name: "Meta Ads", desc: "Collaborative design and prototyping tool online." },
              { name: "Google Ads", desc: "Interactive prototypes for advanced animations website." },
              { name: "LinkedIn Ads", desc: "E-commerce platform for online shopping websites." },
              { name: "Clay.io", desc: "All-in-one workspace for notes and project tasks." },
              { name: "Phantom Buster", desc: "Design and develop websites visually with ease." },
              { name: "SmartLead", desc: "Online payment processing platform for businesses." },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 border rounded-xl shadow-sm"
              >
                <h4 className="text-lg font-bold text-gray-900">{tool.name}</h4>
                <p className="mt-2 text-gray-600 text-sm">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
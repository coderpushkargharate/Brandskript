import React from 'react';

const FeaturesServicesSection: React.FC = () => {
  return (
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

        {/* Services Section */}
        <div className="mt-20">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
            Services
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            Explore Our Core Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of services tailored to enhance your
            digital presence.
          </p>

          {/* Services Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Web Design */}
            <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Web Design</h3>
                <button className="text-sm font-medium text-blue-600 hover:underline">
                  Contact Us →
                </button>
              </div>
              <p className="mt-3 text-gray-600">
                Crafting visually captivating websites that resonate with your
                audience and elevate your brand identity.
              </p>
              <ul className="mt-5 space-y-2 text-gray-700 text-sm">
                <li>✔ Customized visual aesthetics</li>
                <li>✔ User-centric design approach</li>
                <li>✔ Responsive and mobile-friendly</li>
                <li>✔ Intuitive user interface (UI)</li>
                <li>✔ Interactive and engaging layouts</li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Web Development</h3>
                <button className="text-sm font-medium text-blue-600 hover:underline">
                  Contact Us →
                </button>
              </div>
              <p className="mt-3 text-gray-600">
                Building robust websites with advanced functionality and seamless
                performance, tailored to your business needs.
              </p>
              <ul className="mt-5 space-y-2 text-gray-700 text-sm">
                <li>✔ Custom backend development</li>
                <li>✔ Ongoing maintenance and support</li>
                <li>✔ Security and data protection</li>
                <li>✔ Content management systems (CMS)</li>
                <li>✔ API integration and development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesServicesSection;
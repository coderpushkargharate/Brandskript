import React from 'react';
import { CheckCircle } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 style={{
    fontFamily: "var(--h2-font-family)",
    color: "var(--h2-color)"
  }} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing Options
          </h2>
          <p className="text-xl text-gray-600">
            Explore our competitive pricing plans designed to meet diverse business needs and budgets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Basic Plan */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualified Lead Gen</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">₹1500</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">Pause or cancel anytime.</p>
              <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors mb-4">
                Get Started
              </button>
              <button className="w-full text-gray-600 hover:text-gray-900 transition-colors">
                Book a Call →
              </button>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Enjoy limitless design requests</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">One request at a time</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gray-300 mr-3" />
                  <span className="text-gray-400">Average 48 hours delivery</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gray-300 mr-3" />
                  <span className="text-gray-400">Unlimited brands</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Popular Plan */}
          <div className="bg-blue-600 text-white rounded-lg p-8 relative transform scale-105 shadow-xl">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Lead Gen. Service (RC)</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">₹3500</span>
                <span className="text-blue-100">/month</span>
              </div>
              <p className="text-blue-100 mb-6">Pause or cancel anytime.</p>
              <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors mb-4">
                Get Started
              </button>
              <button className="w-full text-blue-100 hover:text-white transition-colors">
                Book a Call →
              </button>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold mb-4">What's included:</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-white mr-3" />
                  <span>Enjoy limitless design requests</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-white mr-3" />
                  <span>One request at a time</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-white mr-3" />
                  <span>Average 48 hours delivery</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-white mr-3" />
                  <span>Unlimited brands</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-white mr-3" />
                  <span>Easy credit-card payments</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lead Gen. System (GR)</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">₹5500</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">Pause or cancel anytime.</p>
              <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors mb-4">
                Get Started
              </button>
              <button className="w-full text-gray-600 hover:text-gray-900 transition-colors">
                Book a Call →
              </button>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Enjoy limitless design requests</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">One request at a time</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Average 48 hours delivery</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Unlimited brands</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Easy credit-card payments</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Pause or cancel anytime</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trial Plan */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Trial Plan</h3>
          <p className="text-blue-100 mb-6">
            Explore our services confidently with this trial package tailored for assessing our agency's quality and capabilities.
          </p>
          <div className="mb-6">
            <span className="text-5xl font-bold">₹850</span>
            <span className="text-blue-100 text-xl">/15 Days</span>
          </div>
          <p className="text-blue-100 mb-8">Pause or cancel anytime.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Book A FREE Consultation Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
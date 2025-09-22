import React from 'react';
import { Users, Award, Target, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: "Shubham Champagne",
      role: "Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sarah Johnson",
      role: "Lead Designer",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mike Chen",
      role: "Senior Developer",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const tools = [
    { name: "Figurative", description: "Collaborative design and prototyping tool online." },
    { name: "FrameX", description: "Interactive prototypes for advanced animations website." },
    { name: "Shopify", description: "E-commerce platform for online shopping websites." },
    { name: "Ideese", description: "All-in-one workspace for notes and project tasks." },
    { name: "Webflow", description: "Design and develop websites visually with ease." },
    { name: "Payflow", description: "Online payment processing platform for business." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Commitment to Excellence and Innovation in Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to delivering innovative digital solutions, focusing on quality, creativity, and client satisfaction to drive business success.
          </p>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Development Process</h2>
            <p className="text-xl text-gray-600">
              We follow a structured process, ensuring transparency, collaboration, and quality at every stage of the project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded">Step 01</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning Stage</h3>
              <p className="text-gray-600">Initial research and analysis to define project goals and requirements.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded">Step 02</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Phase</h3>
              <p className="text-gray-600">Creating wireframes and prototypes to visualize the user experience.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded">Step 03</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development Process</h3>
              <p className="text-gray-600">Building and coding the solution while ensuring quality and functionality.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded">Step 04</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Testing and Launch</h3>
              <p className="text-gray-600">Thorough testing before deployment ensures a seamless user experience.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Who We Are and What We Stand For
                </h2>
                <p className="text-gray-600 mb-6">
                  We are a passionate team dedicated to delivering innovative digital solutions that empower businesses to succeed. Our focus is on creativity, quality, and client satisfaction. With years of experience, we understand the unique challenges each business faces and tailor our strategies to drive growth and enhance online presence.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Contact Us
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tools We Utilize for Excellence</h2>
            <p className="text-xl text-gray-600">
              Discover the advanced tools and technologies we leverage to create cutting-edge websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                </div>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              These principles guide everything we do and help us deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">We never compromise on quality and always deliver excellence.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Focus</h3>
              <p className="text-gray-600">Our clients' success is our top priority in everything we do.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace new technologies and innovative solutions.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every project we undertake.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pricing Plans</h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan that fits your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Starter</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">₹1500</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">Basic lead generation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">Email support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">Monthly reports</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Popular Plan */}
            <div className="bg-blue-600 text-white rounded-lg p-6 relative transform scale-105 shadow-xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                  Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Professional</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">₹3500</span>
                  <span className="text-blue-100">/month</span>
                </div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-white mr-2" />
                    <span className="text-sm">Advanced lead generation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-white mr-2" />
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-white mr-2" />
                    <span className="text-sm">Weekly reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-white mr-2" />
                    <span className="text-sm">Custom integrations</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">₹5500</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">Premium lead generation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">24/7 support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">Daily reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">Dedicated manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">Custom solutions</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
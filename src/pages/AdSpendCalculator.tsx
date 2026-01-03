import React, { useState, useEffect } from "react";

export default function AdSpendCalculator() {
  const [activeTab, setActiveTab] = useState("Leads");
  const [industry, setIndustry] = useState("Real Estate");
  const [country, setCountry] = useState("United States");
  const [adChannel, setAdChannel] = useState("Meta Ads (Facebook/Instagram)");
  const [leadMethod, setLeadMethod] = useState("WhatsApp (30% higher engagement)");
  const [targetLeads, setTargetLeads] = useState("20");
  const [showResults, setShowResults] = useState(false);
  
  // Mock data for calculation based on selections
  const calculateResults = () => {
    let cplRange = "$26 - $78";
    let baseAdSpendRange = "$520 - $1,560";
    let recommendedBudget = "$624 - $1,872";
    
    // Simple logic based on industry and ad channel
    if (industry === "Real Estate" && adChannel === "Meta Ads (Facebook/Instagram)") {
      cplRange = "$26 - $78";
      baseAdSpendRange = "$520 - $1,560";
      recommendedBudget = "$624 - $1,872";
    } else if (industry === "Healthcare" && adChannel === "Google Ads") {
      cplRange = "$35 - $95";
      baseAdSpendRange = "$700 - $1,900";
      recommendedBudget = "$840 - $2,280";
    } else if (industry === "Bookkeeping" && adChannel === "LinkedIn Ads") {
      cplRange = "$45 - $120";
      baseAdSpendRange = "$900 - $2,400";
      recommendedBudget = "$1,080 - $2,880";
    }
    
    return {
      requiredLeads: targetLeads,
      cplRange,
      baseAdSpendRange,
      recommendedBudget
    };
  };

  const handleCalculate = () => {
    if (!industry || !country || !adChannel || !leadMethod || !targetLeads) {
      alert("Please fill in all required fields");
      return;
    }
    setShowResults(true);
  };

  const handleReset = () => {
    setIndustry("Real Estate");
    setCountry("United States");
    setAdChannel("Meta Ads (Facebook/Instagram)");
    setLeadMethod("WhatsApp (30% higher engagement)");
    setTargetLeads("20");
    setShowResults(false);
  };

  const results = calculateResults();

  return (
    <div className="min-h-screen bg-white p-6 md:p-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Calculate Your Ad Spend & Expected Results
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get instant estimates based on real industry data from Meta & Google Ads campaigns
        </p>
      </div>

      {/* Calculator Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 px-6 py-4 rounded-t-xl border-b border-gray-100">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path d="M7 2a2 2 0 002 2h6a2 2 0 002-2V0L12 6v14l5-5H2V0z"/>
            </svg>
            <h2 className="text-xl font-bold text-gray-800">Ad Spend Calculator</h2>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Calculate your expected ad spend, leads, and ROI based on industry benchmarks
          </p>
        </div>

        {/* Tabs */}
        <div className="px-6 pt-4">
          <div className="flex border-b border-gray-200">
            {["Leads", "Appointments", "Sales", "Brand Awareness"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-sm transition ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Form Fields */}
        <div className="px-6 py-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Industry */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry *
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Real Estate">Real Estate</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Bookkeeping">Bookkeeping</option>
                <option value="Construction">Construction</option>
                <option value="Remodeling">Remodeling</option>
                <option value="SaaS">SaaS</option>
              </select>
            </div>

            {/* Target Country/Region */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Country/Region *
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
              </select>
            </div>

            {/* Ad Channel */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ad Channel *
              </label>
              <select
                value={adChannel}
                onChange={(e) => setAdChannel(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Meta Ads (Facebook/Instagram)">Meta Ads (Facebook/Instagram)</option>
                <option value="Google Ads">Google Ads</option>
                <option value="LinkedIn Ads">LinkedIn Ads</option>
                <option value="TikTok Ads">TikTok Ads</option>
                <option value="YouTube Ads">YouTube Ads</option>
              </select>
            </div>
          </div>

          {/* Lead Collection Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lead Collection Method *
            </label>
            <select
              value={leadMethod}
              onChange={(e) => setLeadMethod(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="WhatsApp (30% higher engagement)">WhatsApp (30% higher engagement)</option>
              <option value="Email Form">Email Form</option>
              <option value="Phone Call">Phone Call</option>
              <option value="Live Chat">Live Chat</option>
              <option value="SMS">SMS</option>
            </select>
          </div>

          {/* Target Number of Leads */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Number of Leads *
            </label>
            <input
              type="number"
              value={targetLeads}
              onChange={(e) => setTargetLeads(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter number of leads"
              min="1"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={handleCalculate}
              className="flex-1 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-green-600 transition"
            >
              <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path d="M7 2a2 2 0 002 2h6a2 2 0 002-2V0L12 6v14l5-5H2V0z"/>
              </svg>
              Calculate Results
            </button>
            <button
              onClick={handleReset}
              className="border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {showResults && (
        <div className="max-w-6xl mx-auto mt-8 bg-white rounded-xl shadow-lg border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 px-6 py-4 rounded-t-xl border-b border-gray-100">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v11a1 1 0 100 2h11a1 1 0 100-2V5a1 1 0 00-1-1H3zM9 8a1 1 0 011-1h6a1 1 0 110 2H10a1 1 0 01-1-1zM9 12a1 1 0 011-1h6a1 1 0 110 2H10a1 1 0 01-1-1zM9 16a1 1 0 011-1h6a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <h2 className="text-xl font-bold text-gray-800">Your Results</h2>
            </div>
          </div>

          {/* Results Cards */}
          <div className="px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Required Leads */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Required Leads</div>
                <div className="text-2xl font-bold text-blue-700">{results.requiredLeads}</div>
              </div>

              {/* CPL Range */}
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">CPL Range</div>
                <div className="text-2xl font-bold text-green-700">{results.cplRange}</div>
              </div>

              {/* Base Ad Spend Range */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Base Ad Spend Range</div>
                <div className="text-2xl font-bold text-blue-700">{results.baseAdSpendRange}</div>
              </div>
            </div>

            {/* Recommended Budget */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-6">
              <div className="text-sm text-gray-600 mb-2">Recommended Budget Range (with 20% optimization buffer)</div>
              <div className="text-3xl font-bold text-green-700">{results.recommendedBudget}</div>
            </div>

            {/* Key Insights */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 001 1h1a1 1 0 100-2H9a1 1 0 00-1 1zm3 5a1 1 0 100-2h1a1 1 0 100 2h-1z" clipRule="evenodd" />
                </svg>
                Key Insights
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                  <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">WhatsApp leads show 30% higher engagement but require &lt;5min response time.</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                  <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Meta Ads CPL range for Real Estate: $26.00 – $78.00</span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="text-sm text-gray-700">
                <strong>Disclaimer:</strong> These estimates are based on industry benchmarks. Actual results vary based on ad quality, targeting precision, offer strength, and sales process efficiency. We recommend starting with a test budget to validate performance in your specific market.
              </div>
            </div>

            {/* Schedule Call Button */}
            <div className="text-center">
              <button
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-8 rounded-lg font-medium hover:from-blue-700 hover:to-green-600 transition"
              >
                Schedule A Call to Discuss These Numbers
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
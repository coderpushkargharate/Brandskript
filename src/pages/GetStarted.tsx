import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import SEO from "../components/SEO";

export default function GetStarted() {
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    startTimeline: "",
    monthlyRevenue: "",
    selectedDate: "",
    timeSlot: "",
    businessName: "",
    productsServices: "",
    targetAudience: "",
    leadGenerationMethod: "",
    mainChallenges: ""
  });

  // Generate current dates for the next 7 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const day = dayNames[date.getDay()];
      const dateNum = date.getDate();
      
      dates.push(`${dateNum} ${day}`);
    }
    
    return dates;
  };

  const [dates, setDates] = useState<string[]>([]);

  const timeSlots = {
    "Morning": ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
    "Afternoon": ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"],
    "Evening": ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"],
  };

  useEffect(() => {
    setDates(generateDates());
    if (dates.length > 0 && !selectedDate) {
      setSelectedDate(dates[0]);
      setFormData(prev => ({ ...prev, selectedDate: dates[0] }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setFormData({ ...formData, selectedDate: date });
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setFormData({ ...formData, timeSlot: time });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      alert("Please select date & time");
      return;
    }

    if (!formData.startTimeline || !formData.monthlyRevenue) {
      alert("Please answer both questions");
      return;
    }

    // Validate required additional fields
    if (!formData.businessName.trim()) {
      alert("Please enter your business name");
      return;
    }

    if (!formData.productsServices.trim()) {
      alert("Please describe your products or services");
      return;
    }

    if (!formData.targetAudience.trim()) {
      alert("Please describe your target audience or ideal customer");
      return;
    }

    if (!formData.leadGenerationMethod.trim()) {
      alert("Please describe how you currently generate leads");
      return;
    }

    if (!formData.mainChallenges.trim()) {
      alert("Please describe your main challenges in generating consistent leads");
      return;
    }

    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
      const response = await fetch(`${apiUrl}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        alert("Event Scheduled Successfully! Check your email for confirmation.");
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          startTimeline: "",
          monthlyRevenue: "",
          selectedDate: "",
          timeSlot: "",
          businessName: "",
          productsServices: "",
          targetAudience: "",
          leadGenerationMethod: "",
          mainChallenges: ""
        });
        setSelectedDate(null);
        setSelectedTime(null);
      } else {
        alert(result.message || "Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="1-1 Consultation Call" />

      <div className="min-h-screen bg-gray-100 flex justify-center items-start py-8 px-4">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl grid md:grid-cols-2">

          {/* LEFT PANEL - Information Sections */}
          <div className="p-8 border-r border-gray-200">
            <img 
              src="/logo.png" 
              alt="Brand" 
              className="h-8 mb-6"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/100x30?text=ROI+Edge";
              }}
            />

            <h2 className="text-2xl font-bold mb-2">1-1 Consultation Call</h2>

            <div className="flex items-center text-gray-600 text-sm mb-4">
              <Clock className="w-4 h-4 mr-2" /> 30 min
            </div>

            <p className="text-gray-700 mb-6">
              Ready to scale your business with predictable leads & profitable ads?
            </p>

            <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-sm text-red-700 mb-6">
              Only for businesses generating <strong>$10K+/month</strong>.
            </div>

            {/* Before You Book Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2 mb-2">
                <svg className="w-5 h-5 text-red-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 11-2 0 1 1 0 012 0zm0 6a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                </svg>
                <h3 className="font-semibold text-gray-800">Before You Book (Important)</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">This consultation is best suited for businesses that:</p>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-2 space-y-1">
                <li>Are already generating revenue</li>
                <li>Have a validated product or service</li>
                <li>Are serious about scaling profitably</li>
              </ul>
              <p className="text-sm text-gray-600 mb-2">
                If you're still testing ideas or looking for free marketing advice, this call may not be the right fit.
              </p>
              <p className="text-sm text-gray-600">
                We work best with founders and teams who value systems, accountability, and execution.
              </p>
            </div>

            {/* What This Strategy Session Is About */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2 mb-2">
                <svg className="w-5 h-5 text-yellow-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 001 1h1a1 1 0 100-2H9a1 1 0 00-1 1zm3 5a1 1 0 100-2h1a1 1 0 100 2h-1z" clipRule="evenodd" />
                </svg>
                <h3 className="font-semibold text-gray-800">What This Strategy Session Is About</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                In this 1:1 session, we'll focus on your business numbers, not theory.
              </p>
              <p className="text-sm text-gray-600 mb-2">We'll discuss:</p>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-2 space-y-1">
                <li>Your current acquisition model (leads, installs, trials, subscriptions, demos, etc)</li>
                <li>Where CAC is leaking and ROI is breaking</li>
                <li>What's stopping predictable scale right now</li>
                <li>Whether a Client Acquisition System makes sense for your business</li>
              </ul>
              <p className="text-sm text-gray-600 mb-2">
                If there's a clear opportunity, we'll map out how ROI Edge would approach it.
              </p>
              <p className="text-sm text-gray-600">
                If not, we'll tell you honestly.
              </p>
            </div>

            {/* How ROI Edge Is Different */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2 mb-2">
                <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 001 1h1a1 1 0 100-2H9a1 1 0 00-1 1zm3 5a1 1 0 100-2h1a1 1 0 100 2h-1z" clipRule="evenodd" />
                </svg>
                <h3 className="font-semibold text-gray-800">How ROI Edge Is Different</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                We don't sell "ads" or "leads" in isolation.
              </p>
              <p className="text-sm text-gray-600 mb-2">
                We build Client Acquisition Systems that combine:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-2 space-y-1">
                <li>Google Ads & Meta Ads (intent + demand capture)</li>
                <li>Funnel and conversion optimization</li>
                <li>Full-funnel tracking (CAC, ROAS, ROI)</li>
                <li>AI-powered qualification and follow-ups</li>
              </ul>
              <p className="text-sm text-gray-600">
                Everything is designed to support profitable scale, not vanity metrics.
              </p>
            </div>

            {/* Who We Typically Work With */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2 mb-2">
                <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 001 1h1a1 1 0 100-2H9a1 1 0 00-1 1zm3 5a1 1 0 100-2h1a1 1 0 100 2h-1z" clipRule="evenodd" />
                </svg>
                <h3 className="font-semibold text-gray-800">Who We Typically Work With</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                We partner with growth-focused businesses across the US, India, UAE, Europe & Australia, including:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-2 space-y-1">
                <li>SaaS & B2B Software Companies</li>
                <li>Healthcare Clinics & Medical Services</li>
                <li>Real Estate, Builders & Developers</li>
                <li>High-ticket Service Businesses</li>
                <li>Consulting & Professional Services</li>
              </ul>
              <p className="text-sm text-gray-600">
                If your business depends on acquiring customers profitably, this call is for you.
              </p>
            </div>

            {/* Real Results, Real Accountability */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2 mb-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 001 1h1a1 1 0 100-2H9a1 1 0 00-1 1zm3 5a1 1 0 100-2h1a1 1 0 100 2h-1z" clipRule="evenodd" />
                </svg>
                <h3 className="font-semibold text-gray-800">Real Results, Real Accountability</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Our systems have helped businesses:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-2 space-y-1">
                <li>Generate consistent, qualified pipelines</li>
                <li>Reduce CAC while scaling spend</li>
                <li>Improve conversion quality and sales efficiency</li>
                <li>Build predictable, repeatable growth</li>
              </ul>
              <p className="text-sm text-gray-600 mb-2">
                We don't promise "results someday."
              </p>
              <p className="text-sm text-gray-600">
                We focus on clear benchmarks, accountability, and execution.
              </p>
            </div>

            {/* Why Book This Call */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2 mb-2">
                <svg className="w-5 h-5 text-yellow-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 001 1h1a1 1 0 100-2H9a1 1 0 00-1 1zm3 5a1 1 0 100-2h1a1 1 0 100 2h-1z" clipRule="evenodd" />
                </svg>
                <h3 className="font-semibold text-gray-800">Why Book This Call</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Book this session if you want:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-2 space-y-1">
                <li>A clear acquisition strategy aligned with your business model</li>
                <li>Honest feedback — even if we're not a fit</li>
                <li>A scalable alternative to hiring in-house teams</li>
                <li>A partner focused on ROI, not activity</li>
              </ul>
              <p className="text-sm text-gray-600">
                This is a strategy-first conversation, not a sales pitch.
              </p>
            </div>

            {/* Next Step Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2 mb-2">
                <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 001 1h1a1 1 0 100-2H9a1 1 0 00-1 1zm3 5a1 1 0 100-2h1a1 1 0 100 2h-1z" clipRule="evenodd" />
                </svg>
                <h3 className="font-semibold text-gray-800">Next Step</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                If you're serious about building a predictable, ROI-driven acquisition system:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mb-2 space-y-1">
                <li>Book Your Strategy Session</li>
              </ul>
              <p className="text-sm text-gray-600">
                We'll help you decide the smartest next move — with clarity and numbers.
              </p>
            </div>

            {/* Signature Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-2 mb-2">
                <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 001 1h1a1 1 0 100-2H9a1 1 0 00-1 1zm3 5a1 1 0 100-2h1a1 1 0 100 2h-1z" clipRule="evenodd" />
                </svg>
                <h3 className="font-semibold text-gray-800">Signature (Updated for Trust)</h3>
              </div>
              <p className="text-sm text-gray-600 mb-1">Shubham Channagire</p>
              <p className="text-sm text-gray-600 mb-1">Founder, ROI Edge</p>
              <p className="text-sm text-gray-600">Helping businesses scale with predictable client acquisition systems</p>
            </div>
          </div>

          {/* RIGHT PANEL - Calendar and Form */}
          <div className="p-8">
            <h3 className="text-xl font-semibold mb-6">Enter Details</h3>

            {/* DATE */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              {dates.map((date) => (
                <button
                  key={date}
                  onClick={() => handleDateSelect(date)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                    selectedDate === date
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>

            {/* TIME */}
            <div className="space-y-3 mb-6">
              {Object.entries(timeSlots).map(([label, times]) => (
                <div key={label}>
                  <p className="text-sm text-gray-600 mb-1 font-medium">{label}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {times.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`border rounded-lg py-2 text-sm ${
                          selectedTime === time
                            ? "bg-green-600 text-white border-green-600"
                            : "border-gray-300 hover:border-green-400"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="fullName"
                placeholder="Name *"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />

              <input
                name="email"
                type="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />

              {/* ADDITIONAL QUESTIONS */}
              <div className="space-y-6 pt-6 border-t border-gray-200">
                <div>
                  <label className="block font-medium mb-2">
                    What is the name of your business?
                  </label>
                  <input
                    name="businessName"
                    placeholder="Enter your business name"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    What products or services do you offer?
                  </label>
                  <input
                    name="productsServices"
                    placeholder="Describe your products or services"
                    required
                    value={formData.productsServices}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    Who is your target audience or ideal customer?
                  </label>
                  <input
                    name="targetAudience"
                    placeholder="Describe your target audience or ideal customer"
                    required
                    value={formData.targetAudience}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    How do you currently generate leads or acquire new customers?
                  </label>
                  <textarea
                    name="leadGenerationMethod"
                    placeholder="Describe your current lead generation methods"
                    required
                    rows={3}
                    value={formData.leadGenerationMethod}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    What are the main challenges you face in generating consistent leads or clients?
                  </label>
                  <textarea
                    name="mainChallenges"
                    placeholder="Describe your main challenges in generating consistent leads"
                    required
                    rows={3}
                    value={formData.mainChallenges}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                {/* QUESTION 1 */}
                <div>
                  <p className="font-medium mb-2">
                    How soon can we get started if we are on the same page?
                  </p>
                  {[
                    "Immediately",
                    "Within 7 days",
                    "Within 15 - 30 days",
                    "After 30 days",
                  ].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 mb-1">
                      <input
                        type="radio"
                        name="startTimeline"
                        value={opt}
                        checked={formData.startTimeline === opt}
                        onChange={handleRadioChange}
                      />
                      {opt}
                    </label>
                  ))}
                </div>

                {/* QUESTION 2 */}
                <div>
                  <p className="font-medium mb-2">
                    Which range best describes your current monthly revenue?
                  </p>
                  {[
                    "Under $10k",
                    "$10k–$30k",
                    "$30k–$100k",
                    "$100k+",
                  ].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 mb-1">
                      <input
                        type="radio"
                        name="monthlyRevenue"
                        value={opt}
                        checked={formData.monthlyRevenue === opt}
                        onChange={handleRadioChange}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* TERMS AND CONDITIONS */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  By proceeding, you confirm that you have read and agree to 
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline ml-1">Brandskript's Terms of Use</a> and 
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline ml-1">Privacy Notice</a>.
                </p>
              </div>

              <button
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                {loading ? "Scheduling..." : "Schedule Event"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
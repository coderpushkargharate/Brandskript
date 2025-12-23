import { useState } from "react";
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
  });

  const dates = ['24 Mon', '25 Tue', '26 Wed', '27 Thu', '28 Fri', '29 Sat', '30 Sun'];

  const timeSlots = {
    "Morning": ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM"],
    "Afternoon": ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"],
    "Evening": ["4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"],
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
      await fetch(`${apiUrl}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      alert("Event Scheduled Successfully");
    } catch {
      alert("Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="1-1 Consultation Call" />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl grid md:grid-cols-2">

          {/* LEFT PANEL */}
          <div className="p-8 border-r">
            <img src="/logo.png" alt="Brand" className="h-10 mb-6" />

            <h2 className="text-2xl font-bold mb-2">1-1 Consultation Call</h2>

            <div className="flex items-center text-gray-600 text-sm mb-4">
              <Clock className="w-4 h-4 mr-2" /> 30 min
            </div>

            <p className="text-gray-700 mb-6">
              Ready to scale your business with predictable leads & profitable ads?
            </p>

            <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-sm text-red-700">
              Only for businesses generating <strong>$10K+/month</strong>.
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="p-8">
            <h3 className="text-xl font-semibold mb-6">Enter Details</h3>

            {/* DATE */}
            <div className="flex gap-2 mb-4">
              {dates.map((date) => (
                <button
                  key={date}
                  onClick={() => {
                    setSelectedDate(date);
                    setFormData({ ...formData, selectedDate: date });
                  }}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedDate === date
                      ? "bg-green-600 text-white"
                      : "bg-gray-100"
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
                  <p className="text-sm text-gray-600 mb-1">{label}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {times.map((time) => (
                      <button
                        key={time}
                        onClick={() => {
                          setSelectedTime(time);
                          setFormData({ ...formData, timeSlot: time });
                        }}
                        className={`border rounded-lg py-2 text-sm ${
                          selectedTime === time
                            ? "bg-green-600 text-white"
                            : ""
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
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg"
              />

              <input
                name="email"
                type="email"
                placeholder="Email *"
                required
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg"
              />

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
                      onChange={handleChange}
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
                      onChange={handleChange}
                    />
                    {opt}
                  </label>
                ))}
              </div>

              <button
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
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

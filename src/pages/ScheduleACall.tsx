import React, { useState } from "react";

const ScheduleAcall = () => {
  const [selectedDate, setSelectedDate] = useState(24);
  const [selectedTime, setSelectedTime] = useState("");

  const dates = [
    { day: "Mon", date: 24 },
    { day: "Tue", date: 25 },
    { day: "Wed", date: 26 },
    { day: "Thu", date: 27 },
    { day: "Fri", date: 28 },
    { day: "Sat", date: 29 },
    { day: "Sun", date: 30 },
  ];

  const timeSlots = {
    "Night (12AM-4AM)": [
      "12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM",
      "2:00 AM", "2:30 AM", "3:00 AM", "3:30 AM",
    ],
    "Early Morning (4AM-8AM)": [
      "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM",
      "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM",
    ],
    "Morning (8AM-12PM)": [
      "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
      "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    ],
  };

  return (
    <div className="flex justify-center items-center w-full px-4 py-12 bg-teal-50">
      <div className="bg-white w-full max-w-3xl p-6 md:p-10 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-orange-600">
          Book a Free 1-on-1 Session
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Select a time, fill your details, and get started.
        </p>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input" placeholder="Full Name*" required />
          <input className="input" placeholder="Email*" required />
          <input className="input" placeholder="Phone Number*" required />
          <input className="input" placeholder="Occupation*" required />
          <input className="input" placeholder="Weight (kg)*" required />
          <input className="input" placeholder="Height (cm)*" required />
          <input className="input" placeholder="Age*" required />

          <select className="input">
            <option>Select a condition*</option>
            <option>Diabetes</option>
            <option>Blood Pressure</option>
            <option>Thyroid</option>
            <option>PCOS</option>
          </select>
        </div>

        {/* Date Selector */}
        <p className="mt-6 text-gray-600 font-medium">Select Date*</p>
        <div className="flex gap-2 overflow-auto py-4">
          {dates.map((item) => (
            <button
              key={item.date}
              onClick={() => setSelectedDate(item.date)}
              className={`px-4 py-2 rounded-xl border text-sm ${
                selectedDate === item.date
                  ? "bg-orange-500 text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.date} {item.day}
            </button>
          ))}
        </div>

        {/* Time Slot */}
        <p className="mt-3 text-gray-600 font-medium">Select Time Slot*</p>

        <div className="border rounded-xl p-4 h-48 overflow-y-scroll scroll-smooth">
          {Object.entries(timeSlots).map(([label, slots]) => (
            <div key={label} className="mb-4">
              <p className="text-sm text-gray-500 mb-2">{label}</p>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {slots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`border rounded-lg py-2 text-sm ${
                      selectedTime === time
                        ? "bg-orange-100 border-orange-500 text-orange-600"
                        : "border-gray-300 hover:border-orange-400"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl mt-6 hover:bg-orange-600">
          Book Session
        </button>
      </div>
    </div>
  );
};

export default ScheduleAcall;

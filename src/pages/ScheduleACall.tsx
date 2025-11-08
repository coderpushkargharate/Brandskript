import React, { useState, useEffect } from 'react';

const ScheduleAcall = () => {
  const [selectedDate, setSelectedDate] = useState(9);
  const [selectedTime, setSelectedTime] = useState('09:00 PM');
  const [timeZone, setTimeZone] = useState('GMT-08:00 America/Los_Angeles (PST)');
  const [showMore, setShowMore] = useState(false);

  // Mock data for November 2025 calendar
  const daysInNovember = 30;
  const firstDayOfMonth = 6; // November 1, 2025 is a Saturday

  const generateCalendarDays = () => {
    const days = [];
    // Add empty cells for days before the 1st
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    // Add actual days
    for (let i = 1; i <= daysInNovember; i++) {
      days.push(i);
    }
    return days;
  };

  const calendarDays = generateCalendarDays();

  const timeSlots = [
    '09:00 PM',
    '09:15 PM',
    '10:00 PM',
    '10:30 PM'
  ];

  const benefits = [
    "It's Free but super valuable if you're just starting out or stuck in Growth.",
    "Experts advice, suggestions and feedbacks for content lead growth.",
    "Get Complete Clarity on Your Requirements before selecting the plan",
    "Clear idea of results you can achieve with ShortVids.",
    "A Deep dive on our case studies & success of our clients.",
    "Special Discounts as well Free Upgrades on Showup."
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Book A <span className="text-blue-600">Call Now</span>
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Benefits */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-center text-lg font-medium text-gray-700 mb-6">
            Why You Should Book the Call:
          </h2>
          
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="w-6 h-6 flex-shrink-0 mr-3">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 001.028.684l3.292.762c.921.22 1.564 1.045 1.564 1.945 0 .899-.643 1.724-1.564 1.945l-3.292.762a1 1 0 00-1.028.684l-1.07 3.292c-.3.921-1.603.921-1.902 0l-1.07-3.292a1 1 0 00-1.028-.684l-3.292-.762c-.921-.22-1.564-1.045-1.564-1.945 0-.899.643-1.724 1.564-1.945l3.292-.762a1 1 0 001.028-.684l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Booking Form */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">What Time Works for a Quick Call?</h2>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Call with Dev from ShortVids</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
                <span>30 Mins</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14" />
                </svg>
                <span>Sun, Nov 9, 2025</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a1 1 0 011 1h3a1 1 0 011-1v-1a2 2 0 012-2h1.055M9 19C6.238 19 4 16.762 4 14s2.238-5 5-5 5 2.238 5 5 2.238 5 5 5z" />
                </svg>
                <span>America/Los_Angeles (PST)</span>
              </div>
              
              <div className="pt-2 border-t border-gray-200">
                <div className="flex items-start">
                  <div className="w-8 h-8 flex-shrink-0 mr-3">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 5a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1zm0 10a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Devrat this side 👋 Founder of ShortVids</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {showMore ? (
                        "I am happy to see that you are looking forward to schedule a call with me. You are really special for me. I'll help you understand how ShortVids can transform your content strategy and help you achieve your growth goals."
                      ) : (
                        "I am happy to see that you are looking forward to schedule a call with me. You are really special for m..."
                      )}
                    </p>
                    {!showMore && (
                      <button 
                        onClick={() => setShowMore(true)}
                        className="text-blue-600 text-xs font-medium mt-1 hover:underline"
                      >
                        Show More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-4">Select Date & Time</h4>
              
              {/* Calendar Navigation */}
              <div className="flex justify-between items-center mb-4">
                <button className="p-2 rounded-full hover:bg-blue-50 text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <span className="font-medium">November 2025</span>
                
                <button className="p-2 rounded-full hover:bg-blue-50 text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Calendar Days */}
              <div className="mb-6">
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-xs font-medium text-center text-gray-600">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => {
                    if (day === null) {
                      return <div key={`empty-${index}`} className="h-10"></div>;
                    }
                    
                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                          day === selectedDate 
                            ? 'bg-blue-600 text-white' 
                            : 'hover:bg-blue-50 text-gray-700'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Time Slots */}
              <div className="mb-6">
                <div className="grid grid-cols-1 gap-3">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-4 rounded-lg border-2 text-center transition-colors ${
                        time === selectedTime 
                          ? 'border-blue-600 bg-blue-50 text-blue-600' 
                          : 'border-blue-300 text-blue-600 hover:border-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Time Zone Selector */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Time zone</label>
                <div className="relative">
                  <select
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                    className="w-full pl-3 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="GMT-08:00 America/Los_Angeles (PST)">GMT-08:00 America/Los_Angeles (PST)</option>
                    <option value="GMT-05:00 Eastern Time (ET)">GMT-05:00 Eastern Time (ET)</option>
                    <option value="GMT+00:00 London (GMT)">GMT+00:00 London (GMT)</option>
                    <option value="GMT+05:30 India (IST)">GMT+05:30 India (IST)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAcall;
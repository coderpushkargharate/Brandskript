import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Booking } from '../types/booking';
import SEO from '../components/SEO';

export default function GetStarted() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState<Booking>({
    fullName: '',
    email: '',
    phoneNumber: '',
    occupation: '',
    weight: 0,
    height: 0,
    age: 0,
    condition: '',
    selectedDate: '',
    timeSlot: ''
  });

  const dates = ['24 Mon', '25 Tue', '26 Wed', '27 Thu', '28 Fri', '29 Sat', '30 Sun'];

  const timeSlots = {
    'Night (12AM-4AM)': ['12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM', '3:00 AM', '3:30 AM'],
    'Early Morning (4AM-8AM)': ['4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM'],
    'Morning (8AM-12PM)': ['8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
    'Afternoon (12PM-4PM)': ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'],
    'Evening (4PM-8PM)': ['4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM']
  };

  const conditions = [
    'General Checkup',
    'Weight Loss',
    'Muscle Gain',
    'Fitness Assessment',
    'Nutrition Planning',
    'Injury Recovery',
    'Athletic Performance',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'weight' || name === 'height' || name === 'age' ? Number(value) : value
    });
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
      alert('Please select both date and time slot');
      return;
    }

    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          occupation: '',
          weight: 0,
          height: 0,
          age: 0,
          condition: '',
          selectedDate: '',
          timeSlot: ''
        });
        setSelectedDate(null);
        setSelectedTime(null);

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert('Failed to book session. Please try again.');
      }
    } catch (error) {
      console.error('Error booking session:', error);
      alert('Error booking session. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Book Your Free Session"
        description="Schedule a free 1-on-1 session with our expert consultants. Get personalized guidance for your business. Quick and easy booking."
        keywords="free consultation, session booking, expert advice, contractor consultation"
        type="website"
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-6">
                Your session has been scheduled successfully. Check your email for confirmation details.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Date:</strong> {formData.selectedDate}<br />
                  <strong>Time:</strong> {formData.timeSlot}
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  Book a Free 1-on-1 Session
                </h1>
                <p className="text-gray-600">
                  Select a time, fill your details, and get started.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number*</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Occupation*</label>
                    <input
                      type="text"
                      name="occupation"
                      required
                      value={formData.occupation}
                      onChange={handleInputChange}
                      placeholder="Your occupation"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)*</label>
                    <input
                      type="number"
                      name="weight"
                      required
                      value={formData.weight || ''}
                      onChange={handleInputChange}
                      placeholder="70"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)*</label>
                    <input
                      type="number"
                      name="height"
                      required
                      value={formData.height || ''}
                      onChange={handleInputChange}
                      placeholder="175"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age*</label>
                    <input
                      type="number"
                      name="age"
                      required
                      value={formData.age || ''}
                      onChange={handleInputChange}
                      placeholder="25"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select a condition*</label>
                    <div className="relative">
                      <select
                        name="condition"
                        required
                        value={formData.condition}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">Choose a condition</option>
                        {conditions.map((condition) => (
                          <option key={condition} value={condition}>
                            {condition}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-4">Select Date*</label>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {dates.map((date) => (
                      <button
                        key={date}
                        type="button"
                        onClick={() => handleDateSelect(date)}
                        className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                          selectedDate === date
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-4">Select Time Slot*</label>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {Object.entries(timeSlots).map(([period, times]) => (
                      <div key={period}>
                        <p className="text-sm text-gray-600 font-medium mb-2">{period}</p>
                        <div className="grid grid-cols-4 gap-2">
                          {times.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => handleTimeSelect(time)}
                              className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                                selectedTime === time
                                  ? 'bg-green-600 text-white'
                                  : 'border border-gray-300 text-gray-700 hover:border-green-500'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Booking Session...' : 'Book Session'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      </div>
    </>
  );
}

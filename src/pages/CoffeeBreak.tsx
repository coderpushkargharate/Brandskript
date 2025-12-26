// src/pages/CEOCoffeeBreakPage.jsx

import { useEffect, useState } from "react";

const CEOCoffeeBreakPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    userType: "",
  });

  const [newspapers, setNewspapers] = useState([]);
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // 🔹 Fetch newspapers
  useEffect(() => {
    fetch("http://localhost:3001/api/newspapers")
      .then((res) => res.json())
      .then(setNewspapers)
      .catch(console.error);
  }, []);

  // 🔹 Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/api/coffee-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ firstName: "", email: "", phone: "", userType: "" });
        setTimeout(() => {
          setSuccess(false);
          setShowModal(false);
        }, 3000);
      }
    } catch (err) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="bg-[#fdfbf9] min-h-screen font-sans relative">
      {/* HEADER */}
      <div className="text-center py-8 border-b">
        <h2 className="text-xs uppercase tracking-wider text-gray-600">
          FOUNDER OS
        </h2>
      </div>

      {/* PAGE CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Register for the next CEO Coffee Break.
        </h1>

        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe below and you’ll be placed on our CEO Coffee Break waitlist.
        </p>
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-xl p-6 relative animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">
              CEO Coffee Break Registration
            </h2>

            {success ? (
              <div className="bg-green-100 text-green-700 p-3 rounded text-center">
                ✅ Thank you! You’ve been added to the waitlist.
              </div>
            ) : (
              <form onSubmit={submitHandler} className="space-y-4">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full border p-3 rounded"
                  required
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border p-3 rounded"
                  required
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  className="w-full border p-3 rounded"
                  required
                />
                <div className="space-y-2">
                  {["Freelancer", "Agency", "Business Owner", "Other"].map(
                    (type) => (
                      <label key={type} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="userType"
                          value={type}
                          onChange={handleChange}
                          required
                        />
                        {type}
                      </label>
                    )
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-lime-400 hover:bg-lime-500 py-3 rounded font-medium"
                >
                  REGISTER NOW
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ================= FEATURED MEDIA ================= */}
      {newspapers.length > 0 && (
        <div className="max-w-7xl mx-auto py-16 px-6">
          <p className="text-center text-sm uppercase tracking-wider text-gray-600 mb-8">
            As Featured In
          </p>

          {/* Horizontal Scroll on Mobile, Grid on Desktop */}
          <div className="overflow-x-auto pb-6 md:pb-0">
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-max md:w-full">
              {newspapers.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 min-w-[300px] md:min-w-0"
                >
                  {/* Media */}
                  <div className="h-48 w-full">
                    {item.mediaType === 'image' ? (
                      <img
                        src={item.mediaUrl}
                        alt={item.title}
                        className="w-full h-full object-contain p-4 bg-gray-50"
                      />
                    ) : (
                      <video
                        src={item.mediaUrl}
                        controls
                        className="w-full h-full object-contain p-2 bg-black"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {item.logoUrl && (
                      <img
                        src={item.logoUrl}
                        alt="Logo"
                        className="h-8 mb-2"
                      />
                    )}
                    <div className="flex items-start space-x-2 mb-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">
                          {item.authorName.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.authorName}</p>
                        <p className="text-xs text-gray-500">{item.authorTitle}</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div className="border-t py-8 text-center text-xs text-gray-500">
        © 2025 Founder OS. All rights reserved.
      </div>
    </div>
  );
};

export default CEOCoffeeBreakPage;
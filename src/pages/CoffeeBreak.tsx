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

  /* 🔹 Newsletter Popup */
  const [selectedNews, setSelectedNews] = useState(null);

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    fetch("http://localhost:3001/api/newspapers")
      .then((res) => res.json())
      .then(setNewspapers)
      .catch(console.error);
  }, []);

  /* ---------------- POPUP TIMER ---------------- */
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 5000);
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
    } catch {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="bg-[#fdfbf9] min-h-screen font-sans">

      {/* ---------------- HEADER ---------------- */}
      <div className="text-center py-8 border-b">
        <h2 className="text-xs uppercase tracking-wider text-gray-600">
          FOUNDER OS
        </h2>
      </div>

      {/* ---------------- PAGE CONTENT ---------------- */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Register for the next CEO Coffee Break.
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Subscribe below and you’ll be placed on our CEO Coffee Break waitlist.
        </p>
      </div>

      {/* ================= FORM MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-xl p-6 relative">
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

      {/* ================= FEATURED NEWSLETTER ================= */}
      {newspapers.length > 0 && (
        <div className="max-w-7xl mx-auto py-16 px-6">
          <p className="text-center text-sm uppercase tracking-wider text-gray-600 mb-10">
            As Featured In
          </p>

          <div className="overflow-x-auto">
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-max md:w-full">

              {newspapers.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm min-w-[320px] h-[320px] flex flex-col justify-between"
                >
                  <div className="p-5">
                    {/* Author */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-700">
                        {item.authorName?.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-900">
                          {item.authorName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {item.authorTitle}
                        </p>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="px-5 pb-4 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedNews(item)}
                      className="text-sm text-blue-600 font-medium"
                    >
                      Show more
                    </button>

                    <p className="text-xs text-gray-400">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      )}

      {/* ================= NEWSLETTER DETAIL MODAL ================= */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-xl p-6 relative">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl"
            >
              ✕
            </button>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-700">
                {selectedNews.authorName?.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{selectedNews.authorName}</p>
                <p className="text-sm text-gray-500">
                  {selectedNews.authorTitle}
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              {selectedNews.description}
            </p>

            <p className="text-xs text-gray-400">
              {new Date(selectedNews.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      )}

      {/* ---------------- FOOTER ---------------- */}
      <div className="border-t py-8 text-center text-xs text-gray-500">
        © 2025 Founder OS. All rights reserved.
      </div>
    </div>
  );
};

export default CEOCoffeeBreakPage;

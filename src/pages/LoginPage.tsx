import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [method, setMethod] = useState("phone");

  return (
    <div className="min-h-screen w-full bg-white flex">
      {/* LEFT SECTION — Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-600 w-8 h-8 rounded-md"></div>
          <h1 className="text-2xl font-bold text-gray-800">ROI Edge</h1>
        </div>

        <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
        <p className="text-gray-600 mt-2">
          New here?{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Create an account
          </span>
        </p>

        {/* Login Method Tabs */}
        <div className="flex gap-3 mt-6">
          <button
            className={`px-4 py-2 rounded-md border transition ${
              method === "phone"
                ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold"
                : "border-gray-300 text-gray-700"
            }`}
            onClick={() => setMethod("phone")}
          >
            Phone
          </button>
          <button
            className={`px-4 py-2 rounded-md border transition ${
              method === "email"
                ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold"
                : "border-gray-300 text-gray-700"
            }`}
            onClick={() => setMethod("email")}
          >
            Email
          </button>
        </div>

        {/* Warning */}
        <div className="bg-blue-50 border border-blue-200 text-blue-700 text-sm px-4 py-3 rounded-md mt-6">
          We’ll send a one-time code to verify your {method === "phone" ? "phone number" : "email"}.
        </div>

        {/* Input Field */}
        <input
          type={method === "phone" ? "tel" : "email"}
          placeholder={method === "phone" ? "(123) 456-7890" : "you@company.com"}
          className="border w-full px-4 py-3 rounded-lg mt-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        {/* Continue Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 mt-6 rounded-lg text-lg font-medium transition">
          Continue
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 mt-8">
          <span className="flex-1 h-px bg-gray-300"></span>
          <span className="text-gray-500 text-sm">or continue with</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </div>

        {/* Google Login */}
        <button className="flex items-center justify-center gap-3 w-full py-3 mt-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
          <FcGoogle className="text-xl" />
          <span className="font-medium text-gray-700">Continue with Google</span>
        </button>
      </div>

      {/* RIGHT SIDE — Branding / Testimonial */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-50 to-indigo-50 justify-center items-center p-8">
        <div className="text-center max-w-md">
          {/* Card Image */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 w-80 h-52 mx-auto flex items-center justify-center overflow-hidden">
            <img
              src="https://app.handoff.ai/assets/src/common/components/FullPageAuthCarousel/assets/slide-1-desktop.b41b9dbb41e4c8216aba2a95c865c06c.png"
              alt="ROI Edge Dashboard Preview"
              className="w-full h-auto object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">AI-Powered Profit Insights</h2>

          <p className="text-gray-600 mt-4 italic">
            “ROI Edge cut our forecasting time by 70% and uncovered hidden margin opportunities we’d been missing for years.”
          </p>

          <p className="mt-6 font-semibold text-gray-800">Sarah Mitchell</p>
          <p className="text-gray-500 text-sm">COO, BuildRight Contractors</p>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
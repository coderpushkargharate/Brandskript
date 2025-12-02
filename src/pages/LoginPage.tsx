import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [method, setMethod] = useState("phone");

  return (
    <div className="min-h-screen w-full bg-white flex">
      {/* LEFT SECTION */}
      <div className="w-1/2 flex flex-col justify-center px-32">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-green-600 p-2 rounded-md"></div>
          <h1 className="text-2xl font-semibold">Handoff</h1>
        </div>

        <h1 className="text-3xl font-semibold">Welcome back!</h1>
        <p className="text-gray-600 mt-2">
          New here?{" "}
          <span className="text-green-700 cursor-pointer">Create an account</span>
        </p>

        {/* Login Method Tabs */}
        <div className="flex gap-3 mt-6">
          <button
            className={`px-4 py-1 rounded-md border ${
              method === "phone" ? "border-black font-semibold" : "border-gray-300"
            }`}
            onClick={() => setMethod("phone")}
          >
            Phone
          </button>
          <button
            className={`px-4 py-1 rounded-md border ${
              method === "email" ? "border-black font-semibold" : "border-gray-300"
            }`}
            onClick={() => setMethod("email")}
          >
            Email
          </button>
        </div>

        {/* Warning */}
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm px-4 py-3 rounded-md mt-6">
          We will send you a text message with a one-time password to log in.
        </div>

        {/* INPUT */}
        <input
          type={method === "phone" ? "text" : "email"}
          placeholder={method === "phone" ? "Phone" : "Email"}
          className="border w-full px-4 py-3 rounded-lg mt-6 focus:outline-none"
        />

        {/* Continue Button */}
        <button className="bg-green-600 text-white w-full py-3 mt-6 rounded-lg text-lg font-medium">
          Continue
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 mt-6">
          <span className="flex-1 h-px bg-gray-300"></span>
          <span className="text-gray-500">or</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </div>

        {/* Google Login */}
        <div className="flex justify-center mt-6">
          <FcGoogle size={35} className="cursor-pointer" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 bg-gray-50 flex justify-center items-center">
        <div className="text-center">
          {/* Card Image Section */}
          <div className="bg-green-200 w-80 h-52 mx-auto rounded-xl"></div>

          <h2 className="text-2xl font-semibold mt-10">Instant AI Estimates</h2>

          <p className="text-gray-600 max-w-md mt-4">
            "At first I was skeptical. I've completed 3 estimates using this
            system and it puts it right on the money."
          </p>

          <p className="mt-6 font-semibold">Jason Timms</p>
          <p className="text-gray-500 text-sm">Home Remedies, Inc.</p>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

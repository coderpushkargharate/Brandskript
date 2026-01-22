import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin } from "lucide-react";

export default function Healthcare() {
  const categories = [
    "All", "Appliances", "Cabinets", "Ceiling", "Cleaning", "Concrete", "Countertops", "Demolition", "Doors", "Drywall", "Electrical", "Excavation", "Flooring", "Framing", "HVAC", "Insulation", "Landscaping", "Masonry", "Other", "Painting", "Plumbing", "Roofing", "Siding", "Specialties", "Tile", "Trim", "Windows",
  ];

  const items = [
    "Cost To Install Gas Dryer In The US",
    "Cost To Install A Gas Stove In The US",
    "Cost To Install Microwave Oven In The US",
    "Cost To Install A Microwave Over The Range In The US",
    "Cost To Repair Appliances In The US",
    "Cost To Install Dishwasher In The US",
    "Cost To Install Gas Cooktop In The US",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const primaryButtonClass =
    "mt-6 px-6 py-3 bg-[#d2fe3a] text-[#0074ff] rounded-full font-semibold shadow hover:scale-[1.02] transition-transform dm-sans";

  return (
    <div className="bg-[#f8f8f8] min-h-screen pb-20 px-4 md:px-6 lg:px-10 dm-sans">
      {/* HERO SECTION */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-14 px-4 lg:px-10 xl:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="bg-[#0074ff] rounded-3xl p-8 md:p-10 text-white">
            <span className="text-xs md:text-sm bg-white/20 px-3 py-1 rounded-full">HEALTHCARE</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Scale Your Healthcare Business Profitably
            </h1>
            <p className="mt-4 opacity-90 mb-5 text-sm md:text-base">
              Healthcare businesses don't grow on awareness alone. They grow when the right patients enquire, show up, and continue their care. At ROI Edge, we build ROI-driven Client Acquisition Systems for healthcare businesses that need qualified patient enquiries, booked appointments, and predictable revenue — without wasted ad spend or no-shows.
            </p>
            <Link to="/get-started" className={primaryButtonClass}>
              Book An Appointment
            </Link>
            <p className="text-xs mt-2 opacity-80">7-day free trial</p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1c5516346f3336dec4_fix%20and%20flip_1.webp",
              "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1cf086b776db91dc2d_fix%20and%20flip_2.webp",
              "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1c6f5e1c29d54caff3_fix%20and%20flip_3.webp",
              "https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6676ce1cef39f53a4f040c76_fix%20and%20flip_4.webp",
            ].map((src, i) => (
              <img
                key={i}
                className="rounded-xl w-full h-auto object-cover aspect-[4/3]"
                src={src}
                alt={`Healthcare visual ${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES SECTION */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6">If patient acquisition feels stressful, you're not alone</h2>
          <p className="mb-5 md:mb-6 text-gray-700">
            Most healthcare business owners deal with this daily:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 md:mb-8">
            {[
              "Enquiries come in but patients don't book",
              "Appointments get scheduled... then don't show up",
              "Ad spend increases but patient flow stays unstable",
              "Front desks spend hours following up",
              "Growth feels risky because demand is inconsistent",
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border">
                <h3 className="font-medium text-sm md:text-base">{item}</h3>
              </div>
            ))}
          </div>
          <p className="text-gray-700">
            The issue isn't the quality of your care. It's the system behind patient acquisition and follow-up.
          </p>
        </div>
      </section>

      {/* ATTRACT RIGHT PATIENTS */}
      <section className="bg-blue-50 py-12 md:py-16 px-4 md:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">We attract the right patients — not just more enquiries</h2>
            <p className="mb-4 text-gray-700">
              More enquiries don't mean more revenue if they're unqualified.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>Target high-intent patient demand</li>
              <li>Filter out low-quality or irrelevant enquiries</li>
              <li>Ensure only serious patients reach your team</li>
            </ul>
            <p className="font-medium text-gray-700">
              Result: Better consultations and higher treatment conversions.
            </p>
          </div>
          <div>
            <img
              src="https://picsum.photos/600/400"
              alt="Healthcare Professional"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* TURN INTEREST INTO APPOINTMENTS */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">We turn interest into booked, attended appointments</h2>
          <p className="mb-4 text-gray-700">
            Most patient drop-off happens after the first enquiry.
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
            <li>Instant WhatsApp & email responses</li>
            <li>Automated appointment reminders</li>
            <li>Reduced no-shows and cancellations</li>
          </ul>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <p className="text-indigo-800 font-medium">
              Result: More patients walking in — not just filling forms.
            </p>
          </div>
        </div>
      </section>

      {/* ALIGN WITH DECISIONS */}
      <section className="bg-blue-50 py-12 md:py-16 px-4 md:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <img
              src="https://picsum.photos/600/400?random=2"
              alt="Doctor Consultation"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">We align acquisition with how healthcare decisions are made</h2>
            <p className="mb-4 text-gray-700">
              Healthcare decisions require trust, clarity, and timing.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>Support patient decision journeys</li>
              <li>Build confidence before appointments</li>
              <li>Reduce friction in booking and follow-ups</li>
            </ul>
            <p className="font-medium text-gray-700">
              Result: A smoother patient experience and better outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* TRACK REVENUE DRIVERS */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">We track what actually drives revenue</h2>
          <p className="mb-4 text-gray-700">Impressions and clicks don't run a clinic.</p>
          <p className="mb-4 text-gray-700">We track performance from: Ad → Enquiry → Appointment → Treatment</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 md:mb-8">
            {[
              "Cost per booked appointment",
              "Cost per patient",
              "Revenue efficiency",
            ].map((title, i) => (
              <div key={i} className="bg-purple-100 p-4 rounded-lg flex flex-col items-center text-center">
                <svg className="w-8 h-8 text-purple-600 mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4h-3v4H7z"/>
                </svg>
                <h3 className="font-semibold text-sm md:text-base">{title}</h3>
              </div>
            ))}
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <p className="text-indigo-800 font-medium text-center">
              Result: Clear ROI and smarter growth decisions.
            </p>
          </div>
        </div>
      </section>

      {/* AUTOMATE TEAM OVERLOAD */}
      <section className="bg-blue-50 py-12 md:py-16 px-4 md:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">We automate what overwhelms your team</h2>
            <p className="mb-4 text-gray-700">Healthcare teams shouldn't be buried in admin.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {[
                "Lead qualification",
                "Appointment confirmations & reminders",
                "Re-engagement for missed or inactive patients",
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg border">
                  <h3 className="font-medium text-sm">{item}</h3>
                </div>
              ))}
            </div>
            <p className="font-medium text-gray-700">
              Result: Your team focuses on care — not chasing patients.
            </p>
          </div>
          <div>
            <img
              src="https://picsum.photos/600/400?random=3"
              alt="Healthcare Team"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* PREDICTABLE FLOW */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">Built for predictable, sustainable patient flow</h2>
          <p className="mb-4 text-gray-700">We don't push volume at the cost of quality.</p>
          <p className="mb-4 text-gray-700">We scale only when:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 md:mb-8">
            {[
              "Patient acquisition costs are controlled",
              "Appointment quality is consistent",
              "Your team can deliver care without burnout",
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border">
                <h3 className="font-medium text-sm">{item}</h3>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-5 rounded-lg text-center">
            <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-2">Growth that's sustainable, ethical, and profitable.</h3>
            <p className="text-gray-700">
              Result: Growth that's sustainable, ethical, and profitable.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-blue-50 py-12 md:py-16 px-4 md:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6">Who this is for</h2>
          <p className="mb-5 md:mb-6 text-gray-700">This is for healthcare businesses that:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Want consistent, qualified patient flow",
              "Care about outcomes and long-term value",
              "Need systems, not short-term ad spikes",
              "Want growth without operational chaos",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="w-5 h-5 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">Build a profitable Client Acquisition System for your Healthcare Business</h2>
            <p className="mb-4 text-gray-700">Book a free strategy session to:</p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
              <li>Identify where patient drop-offs are happening</li>
              <li>Improve appointment quality and attendance</li>
              <li>Build a scalable, ROI-driven acquisition system</li>
            </ul>
            <p className="mb-4 text-gray-700">No pressure. Just clarity.</p>
            <Link
              to="/get-started"
              className="inline-block bg-[#d2fe3a] text-[#0074ff] font-semibold px-6 py-3 rounded-full shadow hover:scale-[1.02] transition-transform dm-sans"
            >
              Book a Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import React, { useEffect } from "react";

const EstimatingAIPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // 🔥 Page opens from top
  }, []);
  return (
    <div className="w-full font-sans ">

      {/* ================= HERO SECTION ================= */}
<section className="bg-green-500 min-h-[80vh] lg:h-[70vh] text-white rounded-b-[40px] pb-24 pt-20 px-6 lg:px-20 relative overflow-hidden">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* LEFT TEXT */}
    <div className="lg:pr-10">
      <span className="bg-white text-black px-5 py-1 rounded-full text-sm font-semibold tracking-wide shadow-md">
        ESTIMATES AI
      </span>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 leading-tight">
        Create Accurate <br />
        AI-Powered <br />
        Estimates in Seconds
      </h1>

      <p className="mt-5 text-white text-lg opacity-95 leading-relaxed">
        Type a quick scope. Upload a photo or floorplan.  
        Handoff reads your files, analyzes the job,  
        and builds a clean estimate with real-time pricing.
      </p>

      <button className="bg-black mt-8 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-900 transition">
        Get started free
      </button>
    </div>

    {/* RIGHT SIDE: IMAGE + FLOATING CARDS */}
    <div className="relative flex justify-center lg:justify-end">
      <img
        src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6681a13f59ccf69efad6ee76_Mask_features.webp"
        className="w-full max-w-[500px] rounded-3xl object-cover shadow-2xl"
        alt="AI Estimate"
      />

      {/* FLOATING TILE CARD */}
      <div className="absolute top-5 right-5 bg-white shadow-xl rounded-xl p-4 w-52">
        <div className="font-semibold text-gray-900">Luxury Vinyl Plank (SF)</div>
        <div className="flex justify-between mt-2 text-sm text-gray-700">
          <span>Quantity: 1</span>
          <span>$0.00</span>
        </div>
      </div>

      {/* FLOATING ESTIMATE CARD */}
      <div className="absolute bottom-5 left-5 bg-white shadow-xl rounded-xl p-4 w-64">
        <div className="text-lg font-bold text-gray-900">Master Bathroom</div>
        <div className="text-2xl font-extrabold text-gray-900">$55,200.00</div>
        <div className="text-sm text-gray-600 mt-1">
          Adam Applehead • Jan 01, 2024
        </div>
      </div>
    </div>

  </div>
</section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 px-6 lg:px-20 text-center">
        <h2 className="text-4xl font-bold">How it works</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Handoff delivers fast, accurate construction estimates...
        </p>
      </section>

      {/* ================= GENERATE ESTIMATES ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-20 py-10 items-center">

        <div>
          <h3 className="text-3xl font-bold">Generate Estimates from Photos, Drawings, and More</h3>
          <p className="text-gray-600 mt-3">
            Upload photos, videos, files, or describe the scope...
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full">
            Start free trial
          </button>
        </div>

        <div className="bg-yellow-100 rounded-2xl p-6 shadow">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="font-bold">New Estimate</div>
            <input
              placeholder="Type your project description here..."
              className="mt-4 border p-3 w-full rounded-lg"
            />
            <div className="flex gap-2 mt-3">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Bathroom remodel</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Kitchen remodel</span>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-full mt-5">
              Apply
            </button>
          </div>
        </div>

      </section>

      {/* ================= REWORK ESTIMATE ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-20 py-10 items-center">

        <img
          src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6681bfc2a058f83163f0726c_Img.webp"
          className="rounded-2xl w-full shadow-xl"
        />

        <div>
          <h3 className="text-3xl font-bold">Rework Your Estimate Without Redoing It</h3>
          <p className="text-gray-600 mt-3">
            Whether you’ve uploaded a new photo, changed the scope...
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full">
            Start free trial
          </button>
        </div>
      </section>

      {/* ================= LOCAL PRICING ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-20 py-20 items-center">

        <div>
          <h3 className="text-3xl font-bold">Real-Time, Local Pricing</h3>
          <p className="text-gray-600 mt-3">
            Handoff analyzes live construction pricing in every US city...
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full">
            Start free trial
          </button>
        </div>

        <img
          src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6709227d8639d74e0a46d884_Efficient%20Project%20Estimation.avif"
          className="rounded-2xl w-full shadow-xl"
        />
      </section>

      {/* ================= YELLOW CTA ================= */}
      <section className="bg-yellow-100 px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-3xl">

        <div>
          <h2 className="text-4xl font-extrabold">
            Handoff revolutionizes the construction industry with its
            <span className="underline"> AI-driven estimating software</span>
          </h2>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full mt-6 font-semibold">
            Get started now
          </button>
        </div>

        <img
          src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6681b1003a6814dca7f39ed3_img_integrated.webp"
          className="rounded-3xl w-full shadow-xl object-cover"
        />
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="px-6 lg:px-20 py-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          Explore all features of Handoff
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h4 className="font-bold text-xl">Client Management System</h4>
            <p className="text-gray-600 mt-2">
              Store all project estimates in one place.
            </p>
            <a className="text-green-600 mt-4 inline-block font-semibold">Learn more →</a>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h4 className="font-bold text-xl">Winning AI Proposals</h4>
            <p className="text-gray-600 mt-2">
              AI generates proposals you can send instantly.
            </p>
            <a className="text-green-600 mt-4 inline-block font-semibold">Learn more →</a>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h4 className="font-bold text-xl">Invoicing</h4>
            <p className="text-gray-600 mt-2">
              Send invoices & track payments easily.
            </p>
            <a className="text-green-600 mt-4 inline-block font-semibold">Learn more →</a>
          </div>

        </div>
      </section>

      {/* ================= RATINGS SECTION ================= */}
      <section className="px-6 lg:px-20 pb-20 text-center">
        <h2 className="text-3xl font-bold">Highly rated by 1000s of contractors</h2>

        <div className="flex justify-center gap-12 mt-10">
          <img src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/67ea7a3eeda87d6ec6d3325f_Frame%201597878587.svg" className="h-10" />
          <img src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/67ea7a7d926dcf9cfb578d33_Frame%201597878593.svg " className="h-10" />
          <img src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/67ea7ab371c1c7e2a43a14e8_Frame%201597878592.svg " className="h-10" />
        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="bg-green-100 py-20 px-6 lg:px-20 rounded-t-3xl text-center">

        <img
          src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6650cddf762ba9b692753e3e_Happy.webp"
          className="mx-auto h-40"
        />

        <h2 className="text-4xl font-bold mt-6">
          Boost your business with Handoff
        </h2>

        <p className="text-gray-700 mt-3">
          Start earning more revenue without spending a single penny upfront.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <img src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6650cddf762ba9b692753e3c_google_app_store.webp" className="h-12" />
          <img src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6650cddf762ba9b692753e3d_app_store.webp" className="h-12" />
        </div>
      </section>

    </div>
  );
};

export default EstimatingAIPage;

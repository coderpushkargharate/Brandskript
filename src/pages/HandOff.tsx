import React, { useEffect } from "react";
import { Play } from "lucide-react";

const HandOff = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // 🔥 Page opens from top
  }, []);

  return (
    <div className="w-full">

      {/* ---------------------- VIDEO + TEXT SECTION ----------------------- */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-16 px-4">
        {/* Left Video */}
        <div className="bg-white rounded-2xl shadow p-4 flex justify-center items-center">
          <div className="relative">
            <img
              src="https://cdn.prod.website-files.com/6650cddf762ba9b692753dc0/667b0bf0516a6deffb5daad7_video_EJ%20Elliot.webp"
              alt="Video"
              className="rounded-xl w-full"
            />
            {/* <button className="absolute inset-0 m-auto w-15 h-15 bg-white rounded-full p-4 shadow-lg">
              <Play size={32} className="text-black" />
            </button> */}

            <p className="absolute bottom-4 left-0 right-0 mx-auto bg-black text-white px-3 py-1 rounded-md text-sm w-max">
              Using HandOff to close $118,000
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Learn how EJ Elliot made $118,000 in his first month using HandOff.
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            HandOff delivered a detailed estimate for a down-to-the-studs
            high-end remodel that enabled EJ to go from site visit to a
            $118,000 winning bid in under 24 hours.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <img
              src="https://i.ibb.co/zWJ8x6j/avatar.png"
              className="w-10 h-10 rounded-full"
              alt="avatar"
            />
            <div>
              <p className="font-semibold">EJ Elliot</p>
              <p className="text-sm text-gray-500">
                Bellamore Contracting & Renovations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- SUPPLIER LOGOS ----------------------- */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold">Working with Top Industry Players</h2>
        {/* <p className="text-2xl font-bold -mt-1">construction suppliers</p> */}

        <div className="flex flex-wrap justify-center gap-10 mt-10 grayscale opacity-70">
          {[
            // Placeholder for Client Logos. Replace these URLs with actual client logos from brandsript.
            "https://via.placeholder.com/150?text=Client+Logo+1",
            "https://via.placeholder.com/150?text=Client+Logo+2",
            "https://via.placeholder.com/150?text=Client+Logo+3",
            "https://via.placeholder.com/150?text=Client+Logo+4",
            "https://via.placeholder.com/150?text=Client+Logo+5",
            "https://via.placeholder.com/150?text=Client+Logo+6",
            "https://via.placeholder.com/150?text=Client+Logo+7",
          ].map((logo, index) => (
            <img key={index} src={logo} alt="Client Logo" className="h-10" />
          ))}
        </div>
      </section>

      {/* ---------------------- ACCURATE ESTIMATE SECTION ----------------------- */}
      <section className="bg-[#FFF3DF] py-16 rounded-2xl max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold leading-tight">
            ROI Edge Replaces Empty Promises with Performance, Accountability, and Guaranteed Results.
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            You finally get a marketing partner who keeps your pipeline full—at 15× lower cost than an in-house team and 2× better performance than local agencies. All driven by strong ROI.
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow hover:bg-green-600">
            Get started now
          </button>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://cdn.prod.website-files.com/6650cddf762ba9b692753d9a/6650cddf762ba9b692753e31_iPad%20%26%20Apple%20Pencil.webp"
            alt="Estimate"
            className="rounded-xl w-[380px] md:w-[480px]"
          />
        </div>
      </section>

      {/* ---------------------- WHO IS HANDOFF FOR ----------------------- */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-center text-3xl font-bold">Who We Serve?</h2>
        <p className="text-center text-gray-600 mt-2">
          If you run a Healthcare, Service Business, Bookkeeping Business, Real Estate & SaaS Business, ROI Edge is For You. Supercharge your business growth with a strong ROI-driven Client Acquisition System.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Card 1: Healthcare Business */}
          <div className="relative rounded-xl overflow-hidden shadow group">
            <img
              src="/6650cddf762ba9b692753dd1_Remodelers.webp"
              className="w-full h-64 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-xl font-bold">Healthcare Business</h3>
              <p className="text-white text-sm">Help you generate a consistent flow of high-intent patient inquiries using Paid Ads & automated follow-ups—while reducing cost per lead, lowering acquisition cost, and improving ROI.</p>
              <button className="text-white mt-2 underline">Learn more →</button>
            </div>
          </div>

          {/* Card 2: Service Business */}
          <div className="/6650cddf762ba9b692753dd3_Fix and flip.webp">
            <img
              src="/6650cddf762ba9b692753dd2_Handyman.webp"
              className="w-full h-64 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-xl font-bold">Service Business</h3>
              <p className="text-white text-sm">Help you fill your pipeline with ready-to-convert clients using Paid Ads & automated nurturing—reducing CPR, cutting CAC, and driving predictable monthly revenue.</p>
              <button className="text-white mt-2 underline">Learn more →</button>
            </div>
          </div>

          {/* Card 3: Bookkeeping Business */}
          <div className="relative rounded-xl overflow-hidden shadow group">
            <img
              src="/6650cddf762ba9b692753dd3_Fix and flip.webpp"
              className="w-full h-64 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-xl font-bold">Bookkeeping Business</h3>
              <p className="text-white text-sm">Help you attract qualified business owners with Paid Ads & automated outreach—lowering lead costs, improving conversion rates, and increasing overall ROI.</p>
              <button className="text-white mt-2 underline">Learn more →</button>
            </div>
          </div>

          {/* Card 4: Real Estate Business */}
          <div className="relative rounded-xl overflow-hidden shadow group">
            <img
              src="/6650cddf762ba9b692753e89_Heath.webp"
              className="w-full h-64 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-xl font-bold">Real Estate Business</h3>
              <p className="text-white text-sm">Help you generate high-quality buyer and seller leads using Paid Ads & automation—reducing cost per result, improving deal velocity, and maximizing ROI.</p>
              <button className="text-white mt-2 underline">Learn more →</button>
            </div>
          </div>

          {/* Card 5: SaaS Business */}
          <div className="relative rounded-xl overflow-hidden shadow group">
            <img
              src="https://via.placeholder.com/400x300?text=SaaS+Business"
              className="w-full h-64 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-xl font-bold">SaaS Business</h3>
              <p className="text-white text-sm">Help you generate a constant flow of new paid users using Paid Ads & automated outreach—while reducing CPR, lowering CAC, and increasing ROI.</p>
              <button className="text-white mt-2 underline">Learn more →</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HandOff;
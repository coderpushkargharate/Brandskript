  import React from "react";

  // Define StrategyBlock component
  const StrategyBlock = ({ number, title, images, text }) => {
    return (
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            {number}
          </span>
          <h3 className="text-xl font-bold uppercase">{title}</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {images.map((img, i) => (
            <div key={i} className="relative group cursor-pointer">
              <img
                src={img.trim()} // Trim whitespace in URL
                className="h-72 w-full object-cover rounded-lg"
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                  ▶
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="max-w-3xl text-black/70 leading-relaxed">
          {text}
        </p>
      </div>
    );
  };

  const KaOhanaCaseStudy = () => {
    return (
      <>
        <section className="relative bg-[#0b0b0b] text-white overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-20"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-20">
            {/* TOP GRID */}
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* LEFT TEXT */}
              <div>
                <p className="text-sm tracking-widest mb-4 uppercase opacity-80">
                  KAʻOHANA
                </p>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight uppercase">
                  From Revenue Ceiling <br />
                  To Record $50K <br />
                  Profit: How <br />
                  KaʻOhana <br />
                  Trumped Tariffs
                </h1>
              </div>

              {/* RIGHT IMAGE GRID */}
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://righthookdigital.com/wp-content/uploads/2025/08/KaOhana.jpg"
                  className="col-span-2 h-64 w-full object-cover"
                  alt=""
                />

                <img
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0"
                  className="h-52 w-full object-cover"
                  alt=""
                />

                <img
                  src="https://images.unsplash.com/photo-1617038260892-5b3f4c5e59c1"
                  className="h-52 w-full object-cover"
                  alt=""
                />
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-white/20 my-14"></div>

            {/* DESCRIPTION */}
            <p className="max-w-3xl text-lg text-white/80 leading-relaxed">
              How RH helped KaʻOhana hit <span className="text-white font-semibold">$50K profit</span> and
              record revenue, even after tariffs forced them to retire their
              best-selling product.
            </p>

            {/* STATS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
              <div>
                <p className="text-xs uppercase tracking-widest opacity-60 mb-2">
                  The Highlight
                </p>
                <p className="font-semibold">
                  Record growth & $50K profit in 1 month
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest opacity-60 mb-2">
                  The Win
                </p>
                <p className="font-semibold">
                  Emotion-led creative into scaling
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest opacity-60 mb-2">
                  Niche
                </p>
                <p className="font-semibold">Personalizable Jewelry</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest opacity-60 mb-2">
                  Services
                </p>
                <p className="font-semibold">Paid Social</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white text-black">
          {/* ================= BACKGROUND SECTION ================= */}
          <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT TITLE */}
            <div>
              <p className="uppercase text-xs tracking-widest mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-black"></span> Kickoff
              </p>

              <h2 className="text-4xl font-extrabold uppercase">
                The <br /> Background
              </h2>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              {/* IMAGE GRID */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img
                  src="https://righthookdigital.com/wp-content/uploads/2025/08/KaOhana.jpg"
                  className="col-span-2 h-72 w-full object-cover"
                  alt=""
                />
               
              </div>

              {/* TEXT */}
              <div className="space-y-5 text-[15px] leading-relaxed text-black/80">
                <p>
                  Founded by Reed Yamaguchi, KaʻOhana was created to honor Hawaiian
                  heritage through heirloom-quality jewelry rooted in family,
                  culture, and connection. Each piece was designed to be a keepsake,
                  not just another accessory.
                </p>

                <p>
                  The brand built a deeply loyal customer base by staying true to its
                  mission. But as demand grew, revenue plateaued. Internal marketing
                  efforts couldn’t scale paid acquisition profitably, and multiple
                  attempts with freelancers and contractors failed to deliver.
                </p>

                <p>
                  KaʻOhana came to RH with a clear vision and a growth ceiling they
                  couldn’t crack alone.
                </p>
              </div>
            </div>
          </div>

          {/* ================= CHALLENGE SECTION ================= */}
          <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT TITLE */}
            <div>
              <h2 className="text-4xl font-extrabold uppercase">
                The <br /> Challenge
              </h2>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              {/* SOCIAL CARD */}
              <div className="relative border rounded-xl p-6 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1617042375876-a13e36702d6f"
                  className="w-full rounded-lg"
                  alt=""
                />

                {/* FOLLOWERS BADGE */}
                <div className="absolute -top-5 -right-5 bg-white border rounded-full px-4 py-2 text-sm font-semibold shadow">
                  30.1K followers
                </div>
              </div>

              {/* TEXT */}
              <div className="space-y-5 text-[15px] leading-relaxed text-black/80">
                <p>
                  KaʻOhana had everything in place: premium product, strong mission,
                  and a loyal audience. But none of it translated into sustainable
                  growth.
                </p>

                <p>
                  Their team struggled to find a paid acquisition strategy that
                  worked. Messaging focused too heavily on product features and
                  overlooked the emotional reasons people were buying.
                </p>

                <p>
                  Contractors couldn’t solve it either. Campaigns weren’t converting,
                  and spend wasn’t scaling.
                </p>

                <p>
                  Then tariffs landed. Their best-performing product line had to be
                  pulled. With acquisition already under strain, the loss of their
                  hero SKU left the business vulnerable.
                </p>

                <p>
                  They needed more than help with ads. They needed a strategy that
                  could carry the brand forward.
                </p>

                <p className="font-semibold text-black">
                  That’s when they brought in RH.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          {/* ================= TESTIMONIAL BLUE SECTION ================= */}
          <div className="bg-[#0a2ccf] text-white text-center py-24 px-6 relative overflow-hidden">
            <h3 className="uppercase tracking-widest text-sm mb-4">
              What Reed Rated Us As
            </h3>

            <h1 className="text-6xl font-extrabold mb-10">10 / 10</h1>

            {/* Testimonial Card */}
            <div className="max-w-xl mx-auto bg-[#111] rounded-xl p-6 text-left text-sm shadow-2xl mb-14">
              <p className="opacity-80 mb-2">E-mail Address</p>
              <p className="opacity-60 mb-4">reed@email.com</p>

              <p className="opacity-80 leading-relaxed">
                Nothing at this time! Everything’s been more extensive, on time,
                more cutting edge than any other agency I’ve worked with. Easily
                proves why the cost is higher than others.
                <br /><br />
                Personally, I learn more on the creative side than analytical/
                financial side has been good for me to consume and get perspective.
                Highly outperformed expectations and targets so quickly, under a
                month. That’s awesome.
              </p>
            </div>

            <h2 className="font-extrabold text-xl mb-6">
              HIRE THE TEAM BEHIND THIS
            </h2>

            <button className="bg-white text-black font-semibold px-8 py-3 rounded-full mb-14 hover:scale-105 transition">
              YES, I WANT TO HOP ON A CALL →
            </button>

            {/* Team Images */}
            <div className="flex justify-center items-end gap-6 flex-wrap">
              {[
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/men/41.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg",
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-28 h-28 object-cover rounded-full border-4 border-white"
                  alt=""
                />
              ))}
            </div>
          </div>

          {/* ================= STRATEGY SECTION ================= */}
          <div className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-4xl font-extrabold uppercase mb-16">
              The Strategy
            </h2>

            {/* ===== STRATEGY 1 ===== */}
            <StrategyBlock
              number="1"
              title="Emotion Over Features"
              images={[
                "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
                "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
                "https://images.unsplash.com/photo-1600180758895-3e6c45c7d5d4",
              ]}
              text="We repositioned the brand’s messaging to focus on what truly resonated with their audience: heritage, identity, and family connection. This shift from specs to storytelling led to stronger engagement and better conversion across the board."
            />

            {/* ===== STRATEGY 2 ===== */}
            <StrategyBlock
              number="2"
              title="Pivot-Ready Product Strategy"
              images={[
                "https://images.unsplash.com/photo-1585386959984-a41552231693",
                "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
                "https://images.unsplash.com/photo-1602810318383-e386cc6c5f2c",
              ]}
              text="With their top product gone, we helped KaʻOhana pivot fast. We introduced new bundles, launched high-AOV alternatives, and built a diversified product mix designed for resilience and profitability."
            />

            {/* ===== STRATEGY 3 ===== */}
            <StrategyBlock
              number="3"
              title="Full-Funnel Paid Social System"
              images={[
                "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
                "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
                "https://images.unsplash.com/photo-1590736969955-71cc94901144",
              ]}
              text="We implemented a structured performance system that mapped emotional angles to each stage of the funnel. Creative testing, refined targeting, and consistent iteration gave us a foundation for scalable, predictable acquisition."
            />
          </div>
        </section>

        {/* ================= BLUE CTA STRIP ================= */}
        <div className="bg-[#0a2ccf] text-white py-16 px-6 text-center relative overflow-hidden">
          {/* Decorative icons */}
          <span className="absolute top-6 left-1/4 text-xl">⚡</span>
          <span className="absolute top-6 right-1/4 text-xl">✈️</span>
          <span className="absolute top-10 left-1/2 text-xl">📈</span>

          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-6">
            Hire the Team Behind This
          </h2>

          <button className="bg-white text-black font-semibold px-8 py-3 rounded-full border-2 border-black hover:scale-105 transition">
            YES, I WANT TO HOP ON A CALL →
          </button>
        </div>

        {/* ================= RESULTS SECTION ================= */}
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT TITLE */}
          <div>
            <h2 className="text-4xl font-extrabold uppercase">
              The Results
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Graph Card */}
            <div className="border rounded-xl p-6 mb-10 bg-white shadow-sm">
              <img
                src="https://quickchart.io/chart?c={type:'line',data:{labels:['Aug 24','','','Scaling Period','','','Nov 24'],datasets:[{label:'Revenue',data:[5,6,6,7,18,19,18],borderColor:'%233b82f6',fill:true,backgroundColor:'rgba(59,130,246,0.08)',tension:0.4}]},options:{plugins:{legend:{display:false}},scales:{x:{display:false},y:{display:false}}}}"
                alt="Revenue Growth Chart"
                className="w-full"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 text-black/70 leading-relaxed text-[15px]">
              <p>
                KaʻOhana achieved record-breaking Q4 revenue within the first month
                of launching the new strategy. This immediate turnaround came
                despite having to retire their top-selling product due to newly
                imposed tariffs.
              </p>

              <p>
                Over the next six months, the brand generated more than
                <span className="font-semibold text-black"> $50,000 in profit</span>,
                which was the highest in its history. Emotional storytelling became
                the driving force behind campaign performance, consistently
                outperforming product-focused messaging.
              </p>

              <p>
                At the same time, we introduced bundling tactics and helped launch
                higher-ticket alternatives that lifted average order value and
                offset the revenue loss from their discontinued hero SKU.
              </p>

              <p>
                KaʻOhana now has a complete acquisition system in place, backed by
                tested creative, structured targeting, and a clear framework for
                scale. They moved from reactive efforts to a repeatable growth
                engine and now refer to us as their “favorite people.”
              </p>
            </div>
          </div>
        </div>

        {/* ================= FINAL THOUGHTS SECTION ================= */}
        <section className="w-full">
          {/* ================= TOP CTA ================= */}
          <div className="bg-[#0a2ccf] text-white py-16 text-center relative overflow-hidden">
            <div className="absolute top-6 left-1/4 text-xl">⚡</div>
            <div className="absolute top-6 right-1/4 text-xl">✈️</div>
            <div className="absolute top-8 left-1/2 text-xl">📈</div>

            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-6">
              Hire the Team Behind This
            </h2>

            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold border-2 border-black hover:scale-105 transition">
              YES, I WANT TO HOP ON A CALL →
            </button>
          </div>

          {/* ================= FINAL THOUGHTS ================= */}
          <div className="max-w-4xl mx-auto px-6 py-24 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-8">
              Final Thoughts
            </h2>

            <div className="space-y-6 text-black/70 leading-relaxed text-[15px]">
              <p>
                KaʻOhana had the product, the mission, and the customer base.
                What they needed was the right system.
              </p>

              <p>
                With emotional storytelling, product strategy, and a clear path
                to profit, we helped turn disruption into momentum. They hit
                record revenue within a month. Profit peaked at
                <span className="font-semibold text-black"> $50K by month six</span>.
                And they did it all without their best-selling product.
              </p>

              <p className="font-semibold text-black">
                Now they’re not just scaling. They’re leading.
              </p>
            </div>
          </div>

          {/* ================= STRATEGIST ================= */}
          <div className="bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                alt="Billy Bambao"
                className="w-40 h-40 rounded-full object-cover"
              />

              <div>
                <p className="uppercase text-xs tracking-widest mb-2 text-black/60">
                  The Strategist
                </p>

                <h3 className="text-xl font-bold uppercase mb-2">
                  Billy Bambao
                </h3>

                <p className="text-black/70 text-sm leading-relaxed">
                  Billy Bambao is one of our Heads of Performance and Strategist
                  who loves all things creative strategy, AI, and finding
                  blue-ocean positioning that scales.
                </p>
              </div>
            </div>
          </div>

          {/* ================= MANIFESTO ================= */}
          <div className="bg-[#0a2ccf] text-white py-24 px-6 text-center">
            <div className="max-w-5xl mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase leading-tight">
                When you partner with us, you don’t just get someone to watch your ad
                account. We’re your strategic marketing arm, your outsourced CMO
                and your on-the-pulse, ecom growth experts ready to guide you every
                step of the way
              </h2>

              <p className="text-white/80 text-sm leading-relaxed max-w-4xl mx-auto">
                We treat your business as if it were our own, looking at the bigger
                picture and constantly brainstorming ways to improve, add value and
                scale your brand profitably. Because when you win, we win. It’s not
                about getting a certain number of clients for us, it’s about getting
                the right clients. You know your potential. We help you get there.
              </p>

              <p className="font-semibold">
                So what will it be, growth or death?
              </p>

              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold border-2 border-black hover:scale-105 transition">
                YES, I WANT TO HOP ON A CALL →
              </button>
            </div>
          </div>

          {/* ================= TEAM STRIP ================= */}
          <div className="bg-[#0a2ccf] pt-16 pb-6 overflow-hidden">
            <div className="flex items-end justify-center  flex-wrap">
              {[
                "https://righthookdigital.com/wp-content/uploads/2025/05/LongGroup-2048x414.png",
              
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-100 md:w-100 grayscale contrast-125"
                  alt=""
                />
              ))}
            </div>
          </div>

          {/* ================= CASE STUDY CARDS ================= */}
          <div className="bg-black text-white py-10 px-6 grid md:grid-cols-3 gap-6">
            {[
              "FROM STAGNANT TO 103% GROWTH IN 3 MONTHS",
              "FROM STRESS TO SCALE: TURNING A 6-MONTH STALL INTO A $20K/DAY GROWTH MACHINE",
              "FROM BURNT OUT TO BREAKING RECORDS",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-black/80 border border-white/10 p-6 text-sm font-semibold hover:bg-black transition cursor-pointer"
              >
                {title} →
              </div>
            ))}
          </div>
        </section>
      </>
    );
  };

  export default KaOhanaCaseStudy;
import React from 'react';

const CEOCoffeeBreakPage = () => {
  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Christine Carrillo",
      title: "Entrepreneur & CEO Coach",
      content: "This is what I wish I had when launching my very first business. Matt has been building communities and businesses at scale for years. I can't imagine a better course, or a better teacher to help entrepreneurs build their brand, community and business.",
      date: "Sep 11, 2022",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      name: "Brett Adcock",
      title: "Founder @ Figure",
      content: "Matt is an absolute beast when it comes to audience and community growth. He has one of the fastest growing brands online and is an incredible teacher. He goes above and beyond to help founders - you can tell he genuinely cares. Would highly recommend working with him.",
      date: "Oct 28, 2022",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      name: "Rob Hoffman",
      title: "CEO and Co-Founder of Contact Studios",
      content: "Founder OS gave me the playbook to grow my audience. Best service ever. Don’t know where I’d be without Matt. Founder OS gave me clarity, systems, and momentum—my business will never be the same.",
      date: "Dec 4, 2022",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 4,
      name: "Jonathan \"JCron\" Cronstedt",
      title: "Board Director (Former President) Kajabi.com",
      content: "Build a powerful personal brand that scales. If your asking how to start and systemize a perpetual growth machine in your company, Matt gives you a playbook that delivers real answer.",
      date: "Jan 29, 2023",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 5,
      name: "Josh Viner",
      title: "Growth Marketing Consultant, The Creative Lab",
      content: "I’m a Growth Marketing Consultant and joined Founder OS to help build systems for my business and grow my audience. Founder OS has been instrumental in helping me breakthrough content blocks, build systems to grow my business, and connect with other incredible legends. The program has given me proven systems to build my audience online and content flywheel (the 60... Show more",
      date: "Nov 2, 2023",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 6,
      name: "Steve Gatena",
      title: "Founder & CEO of Pray.com",
      content: "My name is Steve Gatena and I am the founder of Pray.com. In a pursuit to better understand how content creators are building communities, monetizing their content, and expanding their influence I set out to learn from the best. During my journey I came across Matt and his content. His mission and his spirit for helping... Show more",
      date: "Aug 15, 2022",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 7,
      name: "Kelli Law",
      title: "Founder, THE LIMITLESS WOMAN",
      content: "My name is Kelli Law, and I’m an American living the expat life in the UAE. Before joining Founder OS, I felt stuck. The marketing game has changed so much over the past few years, and the strategies that used to work just don’t cut it anymore. I lacked the systems and structure needed to grow my audience and truly stand out online. Since joining, everything has shifted. Thanks to Founder... Show more",
      date: "Jan 23, 2025",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 8,
      name: "Calvin Cummings",
      title: "The Founder Doctor",
      content: "The Community Matt Has Built in Skool and the Weekly Q&A Calls Have Been Invaluable! If you are in business and struggling, wanting a proven Internet Legend to help you get reinvigorated and take it to the next level, you owe it to yourself to sign up for Matt’s Founder OS Program today!",
      date: "Jul 6, 2023",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 9,
      name: "Nicole Murphy",
      title: "Founder & CEO of Tall Size",
      isVideo: true,
      videoThumbnail: "https://via.placeholder.com/300x200?text=Video+Thumbnail",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 10,
      name: "Ali Abdaal",
      title: "Doctor, Entrepreneur, YouTuber, Author",
      isVideo: true,
      videoThumbnail: "https://via.placeholder.com/300x200?text=Ali+Abdaal+Video",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 11,
      name: "Marina Paul",
      title: "Founder, SPRHRA",
      isVideo: true,
      videoThumbnail: "https://via.placeholder.com/300x200?text=Marina+Paul+Video",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 12,
      name: "Alice Moon",
      title: "Cannabis Publicist and LinkedIn Strategist",
      content: "Taking Matt’s course changed my life for the better. Matt sets you up with systems to be not only a better entrepreneur but a better human too. For anyone looking to learn how to improve their online presence, build a business, or find inspiration for content, Matt’s course is worth it.",
      date: "Aug 18, 2022",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 13,
      name: "Josh Ramsey",
      title: "Ramsey Consulting",
      content: "Uncertainty is everywhere. Where should you invest? I invested in myself. I trusted Matt Gray and invested in Founder OS. Since implementing his Founder OS program, I’ve been able to improve my marketing consulting services pitch and approach. Leveraging the incredible network he has brought together in... Show more",
      date: "Nov 2, 2023",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 14,
      name: "Samee Hassan",
      title: "Co-founder @ DevSignal",
      content: "I run DevSignal where we help startups hire and manage remote developers. All of the content in Founder OS was so helpful to get the idea of building a brand that people can trust + the network you get is just priceless! I met amazing people through the program! Highly recommended for anyone who’s serious about growth and ready to take massive action!",
      date: "Nov 1, 2023",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 15,
      name: "Sierra Madre",
      title: "Founder of OYH Inc. Co-founder of Soul School Yoga",
      content: "Founder OS Program was the course I wish existed when I started my business 6 years ago. I found more clarity and direction from the templates and discussion Matt provided in 3 weeks than I could have mustered up on my own in 3 years. This course is like a compressed pearl of knowledge. ... Show more",
      date: "Aug 15, 2022",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 16,
      name: "Shubhra Kathuria",
      title: "Founder and CEO, Nova School",
      content: "Founder OS is a fantastic resource for anyone transitioning into entrepreneurship. The program provides the structure, support, and confidence needed to take the leap into building your own venture. Matt has created a comprehensive, step-by-step training program and fostered a thriving community of founders who actively support one another. His group mentoring sessions have bee... Show more",
      date: "Jan 28, 2025",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 17,
      name: "Dr. Gloria Lee",
      title: "Owner, The Relationship Collective",
      content: "Before joining Founder OS, I was drowning in 'busyness' without a clear game plan or direction. After joining, I now feel comfortable and confident knowing exactly what I need to do and how to get there. The best part about Founder OS is the direct coaching that caters exactly to my business needs. I also deeply appreciate Matt’s genuine care for each of the founders’ success, his vast... Show more",
      date: "Mar 11, 2025",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 18,
      name: "Josh Schoonover",
      title: "Founder and CEO, Ask A DSO",
      content: "Matt Gray’s systems and the Founder OS",
      date: "Mar 11, 2025",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  return (
    <div className="bg-[#fdfbf9] min-h-screen font-sans">
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-xs uppercase tracking-wider font-medium">FOUNDER OS</h1>
      </div>

      {/* Registration Section */}
      <div className="max-w-md mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Register for the next <br /> CEO Coffee Break.
        </h1>
        <p className="text-sm mb-4">
          Subscribe below and you’ll be placed on our CEO Coffee Break waitlist.
        </p>
        <p className="text-sm mb-8">
          Be the first to know when our next workshop launches.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Enter your first name"
            className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="flex items-center gap-2">
            <select className="w-12 px-2 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>🇮🇳</option>
            </select>
            <input
              type="tel"
              placeholder="Enter your phone"
              className="flex-grow px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* NEW: What defines you? */}
          <div className="text-left">
            <label className="block text-sm font-medium mb-2">
              What defines you?
            </label>
            <div className="space-y-2">
              {['Freelancer', 'Agency', 'Business Owner', 'Other'].map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="radio"
                    id={`option-${option.toLowerCase().replace(/\s+/g, '-')}`}
                    name="userType"
                    value={option}
                    className="h-4 w-4 text-lime-500 focus:ring-lime-400 border-gray-300"
                  />
                  <label
                    htmlFor={`option-${option.toLowerCase().replace(/\s+/g, '-')}`}
                    className="ml-2 text-sm"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-2 text-xs">
            <input type="checkbox" id="consent" className="mt-1" defaultChecked />
            <label htmlFor="consent" className="leading-tight">
              By providing your information you agree to allow Founder OS, and/or its partners to contact you by mail, phone, email, or text even if the phone number is present on a state or national Do Not Call list. By submitting this information you agree to our{" "}
              <a href="#" className="underline">Privacy Policy</a> and{" "}
              <a href="#" className="underline">Terms of Service</a>.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-lime-400 hover:bg-lime-500 text-black font-medium py-2 px-6 rounded transition-colors"
          >
            REGISTER NOW
          </button>
        </form>
      </div>

      {/* Success Stories Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Here are a few more success stories.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-white p-6 rounded-lg shadow-sm ${
                testimonial.isVideo ? "aspect-video relative" : ""
              }`}
            >
              {testimonial.isVideo ? (
                <>
                  <img
                    src={testimonial.videoThumbnail}
                    alt={`${testimonial.name} video`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 rounded-full p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-lg">
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm">{testimonial.title}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-3 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-xs text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-4 leading-relaxed">{testimonial.content}</p>
                  <p className="text-xs text-gray-500">{testimonial.date}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CEOCoffeeBreakPage;
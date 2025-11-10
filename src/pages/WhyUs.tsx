import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  Film,
  Video,
  Play,
  Mic,
  User,
  Cpu,
  RefreshCcw,
  Headphones,
  UserPlus,
  ShieldCheck,
  Image as ImageIcon,
  Clock,
  Users,
  BarChart3,
  Settings,
  Tag,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyUs = () => {
  const [selectedDate, setSelectedDate] = useState(9);
  const [selectedTime, setSelectedTime] = useState("09:00 PM");
  const [timeZone, setTimeZone] = useState(
    "GMT-08:00 America/Los_Angeles (PST)"
  );

  // November 2025 calendar data
  const daysInNovember = 30;
  const firstDayOfMonth = 6; // Saturday (0 = Sunday)

  const generateCalendarDays = () => {
    const days = Array(firstDayOfMonth).fill(null);
    for (let i = 1; i <= daysInNovember; i++) {
      days.push(i);
    }
    return days;
  };

  const calendarDays = generateCalendarDays();
  const timeSlots = ["09:00 PM", "09:15 PM", "10:00 PM", "10:30 PM"];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  // Cleaned image URLs (removed trailing spaces)
  const studies = [
    {
      id: 1,
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/01/feature-chris1.jpg",
      title:
        "How ShortVids Helped Chris Colgan Grew from 1K to 68K Followers",
      desc:
        "Tenure of Project: Ongoing Projects Delivered: 625 Edits Chris Colgan is a seasoned real estate professional based in Northern Virginia, with over 18 years of experience in the industry. He leads the Chris Colgan Real Estate Team under EXP Realty LLC and PLACE, focusing on the Northern Virginia and Washington area.",
      link: "#",
    },
    {
      id: 2,
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/01/fit-focus-feature-image.jpg",
      title:
        "How ShortVids Helped Brandon Streamlined His Video Editing Process To Perfection",
      desc:
        "Tenure of Project: Ongoing Projects Delivered: 530+ Edits Let me take you behind the scenes of a fitness-driven story starring Brandon and his team at Fit Focus Media. Fit Focus Media is an Australia-based company dedicated to creating engaging video content for fitness professionals and businesses.",
      link: "#",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  const videoContent = [
    {
      title: "Video Ads",
      desc: "Create ads that boost click rates and lower acquisition costs, helping you get more results for your campaigns.",
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/01/video-ads.png",
    },
    {
      title: "Instagram Reels",
      desc: "Short, engaging videos, made to grab attention and encourage action.",
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/05/instagram-reels.png",
    },
    {
      title: "VSLs",
      desc: "Turn viewers into buyers with sales videos proven to increase conversions by 40%.",
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/01/blog-2-1024x538.jpg",
    },
    {
      title: "AI–Enhanced Reels",
      desc: "Use AI-powered videos to create fresh, engaging content 2× faster.",
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/01/vsl.jpg",
    },
  ];

  const logos = [
    {
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/03/Group-3.png",
      name: "Greek Speek",
    },
    {
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/03/Group-9.png",
      name: "Freedom Funders",
    },
    {
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/03/Group-8.png",
      name: "Lead Ninja",
    },
    {
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/03/Group-10.png",
      name: "Earth’s Secret",
    },
    {
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/03/Group-11.png",
      name: "Mortgage Link",
    },
    {
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/03/Group-12.png",
      name: "Sieff Studios",
    },
  ];

  const cards = [
    {
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/11/FEATURE-1-300x130.jpg",
      title:
        "Why Gen Z Loves Rule-Breaking Brands—and What It Means for Traditional Marketing",
      link: "#",
    },
    {
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/11/How-to-Create-YouTube-Ads-That-Convert-Write-Edit-and-Optimize-300x130.jpg",
      title:
        "How to Create YouTube Ads That Convert – Write, Edit, and Optimize",
      link: "#",
    },
    {
      img: "https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/11/Professional-Video-Editing-Services-in-the-USA-for-Brands-Creators-300x130.jpeg",
      title:
        "Professional Video Editing Services in the USA for Brands & Creators",
      link: "#",
    },
  ];

  const featureHighlights = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/9068/9068699.png",
      title: "All-in-One Editing Solution",
      desc: "From ads to Reels, podcasts to YouTube videos—we handle all your content needs under one roof.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1151/1151506.png",
      title: "Cost-Effective Scaling",
      desc: "Save up to 80% compared to hiring a full-time editor with high-quality, reliable editing, starting at just $33/day.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3437/3437310.png",
      title: "Flexible Subscriptions",
      desc: "Scale up or down depending on your agency’s workload, with no long-term contracts or any legal binding.",
    },
  ];

  const videoServices = [
    {
      icon: <Film size={30} />,
      title: "Short-Form Editing",
      desc: "Quick, attention-grabbing videos for Instagram Reels, TikToks, and YouTube Shorts.",
    },
    {
      icon: <Video size={30} />,
      title: "Long-Form Edits",
      desc: "Turn raw footage into professional YouTube videos.",
    },
    {
      icon: <Play size={30} />,
      title: "YouTube Content",
      desc: "Elevate your channel with polished, professional videos.",
    },
    {
      icon: <User size={30} />,
      title: "UGC Videos",
      desc: "Refine user-generated content to build trust and connection.",
    },
    {
      icon: <Cpu size={30} />,
      title: "2D Animation",
      desc: "Creative motion graphics to make your videos exciting.",
    },
    {
      icon: <Film size={30} />,
      title: "Video Ads",
      desc: "Craft high-performing ad videos for social platforms.",
    },
    {
      icon: <User size={30} />,
      title: "Faceless Videos",
      desc: "Deliver your message effectively using stock and motion graphics.",
    },
    {
      icon: <Mic size={30} />,
      title: "Podcast Editing",
      desc: "Transform your podcasts into shareable video versions.",
    },
    {
      icon: <RefreshCcw size={30} />,
      title: "Repurposed Shorts",
      desc: "Reuse your content across Instagram, TikTok, and YouTube.",
    },
    {
      icon: <Headphones size={30} />,
      title: "AI-Powered Videos",
      desc: "Use AI to create dynamic videos with automated features.",
    },
  ];

  const testimonials = [
    {
      title:
        "Sieff Studios Working with ShortVids Experience by Jesse Sieff",
      videoUrl: "https://www.youtube.com/embed/hsYpA57Y9Zg",
    },
    {
      title:
        "Helped Jakib Sports generate 2Mn+ Shorts views on YouTube alone in 6 Months",
      videoUrl: "https://www.youtube.com/embed/2X8LhVQYwF8",
    },
  ];

  const agencyAdvantages = [
    {
      icon: <UserPlus className="w-8 h-8 text-indigo-600" />,
      title: "No Hiring Hassles",
      desc: "Skip the time and cost of recruiting and training editors—we’ve got you covered.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
      title: "Vetted Talents",
      desc: "Don’t just hire editors but a team professionally vetted and trained for Agency Owners.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-indigo-600" />,
      title: "Access to Experts",
      desc: "Work with skilled editors ready to deliver top-notch videos for your agency.",
    },
    {
      icon: <ImageIcon className="w-8 h-8 text-indigo-600" />,
      title: "40+ Editing Styles",
      desc: "From clean and corporate to trendy and bold, choose the perfect style for every project.",
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      title: "24/7 Availability",
      desc: "Get your videos delivered fast with round-the-clock support for your projects.",
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Dedicated Team",
      desc: "Enjoy seamless coordination with managers who keep your projects on track.",
    },
  ];

  return (
    <section className="flex flex-col items-center text-center px-4 py-10 bg-white">
      {/* Intro */}
      <div data-aos="fade-up" className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-light italic">
          <span className="not-italic font-normal">Short</span>
          <span className="italic font-semibold">Vids</span>:
          <span className="not-italic font-normal"> A Dedicated Creative Partner for Your </span>
          <br />
          <span className="italic underline">Agency’s Success</span>
        </h2>
        <h3 className="mt-6 text-xl md:text-2xl font-bold text-black">
          Unlimited Video Editing, Unlimited Growth
        </h3>
      </div>

      {/* Hero Video */}
      <div
        className="mt-8 w-full flex justify-center"
        style={{ height: "60vh" }}
        data-aos="zoom-in"
      >
        <video
          className="rounded-2xl w-full max-w-4xl shadow-lg object-cover"
          controls
          muted
          src="/your-video.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Feature Highlights */}
      <section className="py-16 bg-white text-center px-4" data-aos="fade-up">
        <p className="text-purple-600 font-semibold tracking-wide">
          Trusted Over Agencies Across the Globe
        </p>
        <h2 className="mt-3 text-2xl md:text-4xl font-medium text-black">
          Let Us Handle Your Video Content So You Can Focus on Growing Your
          Agency
        </h2>
        <h3 className="mt-10 text-2xl font-bold text-black">
          Why Agencies Choose Us?
        </h3>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {featureHighlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition p-6 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-48 h-48 object-contain mb-6"
                loading="lazy"
              />
              <h4 className="text-lg font-semibold text-purple-700">
                {item.title}
              </h4>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        className="py-16 bg-white px-4 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          What ShortVids Can Do For You?
        </h2>
        <p className="text-gray-600 text-lg mb-10">Here is what we do</p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
          {videoServices.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border ${
                index === 1
                  ? "bg-purple-50 border-purple-200"
                  : "bg-white border-gray-200"
              } text-left shadow-sm hover:shadow-md transition duration-300`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                  index === 1
                    ? "bg-purple-600 text-white"
                    : "bg-purple-100 text-purple-600"
                }`}
              >
                {service.icon}
              </div>
              <h3
                className={`font-semibold text-lg mb-2 ${
                  index === 1 ? "text-purple-800" : "text-black"
                }`}
              >
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cards */}
      <section
        className="py-16 px-4 text-center bg-white"
        data-aos="fade-up"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-3">
          ShortVids: Built by Agency Owners for <br /> Agency Owners Like You!
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mt-10">
          What We Do, How We Deliver
        </h3>
        <p className="text-lg text-gray-700 mt-2 mb-12">
          Explore our services and the results we’ve achieved for clients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5 text-left">
                <h4 className="font-medium text-gray-900 text-base leading-snug">
                  {card.title}
                </h4>
                <a
                  href={card.link}
                  className="text-sm text-purple-600 font-semibold mt-3 inline-block hover:underline"
                >
                  Read More »
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-16 px-4 bg-white text-center"
        data-aos="fade-up"
      >
        <p className="text-purple-600 font-semibold text-lg mb-2">
          What Our Clients Say
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-10">
          Real Feedback from Agency Owners Like You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-md rounded-2xl p-4 hover:shadow-lg transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3 className="italic text-gray-700 mb-4 text-lg">
                {item.title}
              </h3>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="315"
                  src={item.videoUrl}
                  title="Client feedback video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="text-center mb-12">
          <h6 className="text-indigo-600 font-semibold">
            How ShortVids Simplifies Video Creation
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Your One-Stop Solution for Engaging and Effective Video Content
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-10 px-4 md:px-6">
          {videoContent.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="md:w-1/2">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2 p-6 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Carousel */}
      {/* Clients Carousel */}
<section className="py-16 bg-white w-full" data-aos="fade-up">
  <div className="text-center mb-10 px-4">
    <h6 className="text-indigo-600 font-semibold text-base">Our Clients</h6>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
      Companies we've edited for
    </h2>
  </div>

  <div className="max-w-7xl mx-auto px-4" data-aos="zoom-in">
    <Slider
      dots={false}
      infinite={true}
      autoplay={true}
      autoplaySpeed={2000}
      speed={1000}
      slidesToShow={5}
      slidesToScroll={1}
      arrows={false}
      pauseOnHover={false}
      responsive={[
        {
          breakpoint: 1024, // Tablet & smaller laptops
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640, // Mobile
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]}
    >
      {logos.map((client, index) => (
        <div key={index} className="px-2 py-2">
          <div className="border border-gray-300 rounded-2xl p-5 flex justify-center items-center bg-white shadow-sm hover:shadow-md transition">
            <img
              src={client.img}
              alt={client.name}
              className="h-14 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>

      {/* Final Agency Advantages */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
            Why Agencies Choose{" "}
            <span className="text-gray-900">ShortVids</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {agencyAdvantages.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 text-indigo-600">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Real Results from Our Clients
          </h2>

          <div className="space-y-16">
            {studies.map((study, index) => (
              <div
                key={study.id}
                className={`flex flex-col md:flex-row items-center bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="md:w-1/2">
                  <img
                    src={study.img}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                    {study.desc}
                  </p>
                  <a
                    href={study.link}
                    className="text-red-600 font-semibold hover:text-red-700 transition"
                  >
                    Read More »
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with ShortVids */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
              data-aos="fade-right"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Why Partner with <span className="font-extrabold">ShortVids?</span>
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                ShortVids is built for agency owners who need reliable,
                high-quality video editing at scale. We understand your
                challenges and provide solutions that help you focus on what
                matters most — growing your agency.
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  { icon: <Film className="w-5 h-5 text-indigo-600" />, text: "A Plug-and-Play Video Team" },
                  { icon: <BarChart3 className="w-5 h-5 text-indigo-600" />, text: "Customizable Content Styles" },
                  { icon: <BarChart3 className="w-5 h-5 text-indigo-600" />, text: "Data-Driven Results" },
                  { icon: <Settings className="w-5 h-5 text-indigo-600" />, text: "Scalable Workflow" },
                  { icon: <Headphones className="w-5 h-5 text-indigo-600" />, text: "Dedicated Agency Support" },
                  { icon: <Tag className="w-5 h-5 text-indigo-600" />, text: "White-Label Capabilities" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center" data-aos="fade-left">
              <img
                src="https://green-raven-254938.hostingersite.com/wp-content/uploads/2025/01/why-partner-with-shortvids.2png.png"
                alt="Why Partner with ShortVids - Circular Diagram"
                className="w-full max-w-lg rounded-xl shadow-lg border border-gray-200"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Do Agencies Keep Coming Back */}
      <div className="bg-white py-12" data-aos="fade-up">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-600">
            More Savings. More Speed. Better Results.
          </h1>
        </div>

        <div className="bg-purple-50 py-12 px-4 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                Why Do Agencies Keep Coming Back to ShortVids?
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                ShortVids Subscription makes content creation simple and
                hassle-free:
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div
                className="lg:w-1/2 relative"
                data-aos="fade-right"
              >
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center border-2 border-purple-200 shadow-lg">
                      <div className="text-purple-700 font-bold text-xl text-center">
                        Content Creation<br />
                        <span className="font-normal italic">Made Simple</span>
                      </div>
                    </div>
                  </div>

                  {/* Top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 bg-purple-700 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-gray-800"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Right-top */}
                  <div className="absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/4">
                    <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-gray-800"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-2-2v-4h2v4l2 2H10zm6 0h-2l-2-2v-4h2v4l2 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Right-bottom */}
                  <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/4">
                    <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-gray-800"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17 12h-2l-2-2v2h-2v-2L9 12H7v2h2v2h2v-2h2v2h2v-2h2v-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-gray-800"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-2-2v-4h2v4l2 2H10zm6 0h-2l-2-2v-4h2v4l2 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2" data-aos="fade-left">
                <ul className="space-y-3">
                  {[
                    "Pre-Vetted Expertise",
                    "No Surprise Billing",
                    "24/7 Creative Availability",
                    "All Talents in One Place",
                    "Global Top Talents",
                    "Flexibility Redefined",
                    "Contract-Free Commitment",
                    "Budget-Friendly Pay-as-You-Go",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414l4 4a1 1 0 011.414 0l8-8a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-black font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Call Section */}
      <div className="bg-white py-12 px-4" data-aos="fade-up">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Made Your Mind?
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-black">
            It's Time To Schedule a Call!
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div
              className="lg:w-1/3 p-6 border-r border-gray-200"
              data-aos="fade-right"
            >
              <h2 className="text-xl font-bold mb-4">
                Call with Dev from ShortVids
              </h2>
              <div className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 mr-2 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600">30 Mins</span>
              </div>
              <div className="flex items-center mb-6">
                <svg
                  className="w-5 h-5 mr-2 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1H7a1 1 0 00-1 1v1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  Sun, Nov {selectedDate}, 2025
                </span>
              </div>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200">
                  <h3 className="font-bold text-lg">
                    Devrat this side 👋 Founder of ShortVids
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    I am happy to see that you are looking forward to schedule a
                    call with me. You are really special for me.
                  </p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-700">
                    Team Short Vids is looking forward to working with you on
                    your video creation journey.
                  </p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-700">
                    We'll discuss your goals, answer all your questions, and
                    create a customized plan for your video content needs.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    Looking forward to connecting with you soon!
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 p-6" data-aos="fade-left">
              <h3 className="text-lg font-semibold mb-4">
                Select Date & Time
              </h3>
              <div className="flex justify-between items-center mb-4">
                <button className="p-2 rounded-full hover:bg-blue-50 text-blue-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <span className="font-medium">November 2025</span>
                <button className="p-2 rounded-full hover:bg-blue-50 text-blue-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <div className="mb-6">
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="text-xs font-medium text-center text-gray-600"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => {
                    if (day === null) {
                      return (
                        <div key={`empty-${index}`} className="h-10"></div>
                      );
                    }
                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                          day === selectedDate
                            ? "bg-blue-600 text-white"
                            : "hover:bg-blue-50 text-gray-700"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="mb-6">
                <div className="grid grid-cols-1 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-4 rounded-lg border-2 text-center transition-colors ${
                        time === selectedTime
                          ? "border-blue-600 bg-blue-50 text-blue-600"
                          : "border-blue-300 text-blue-600 hover:border-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time zone
                </label>
                <div className="relative">
                  <select
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                    className="w-full pl-3 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  >
                    <option value="GMT-08:00 America/Los_Angeles (PST)">
                      GMT-08:00 America/Los_Angeles (PST)
                    </option>
                    <option value="GMT-05:00 Eastern Time (ET)">
                      GMT-05:00 Eastern Time (ET)
                    </option>
                    <option value="GMT+00:00 London (GMT)">
                      GMT+00:00 London (GMT)
                    </option>
                    <option value="GMT+05:30 India (IST)">
                      GMT+05:30 India (IST)
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
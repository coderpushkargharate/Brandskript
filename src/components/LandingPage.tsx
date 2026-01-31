"use client";

import {
  Shield,
  ArrowRight,
  Play,
  Users,
  AlertCircle,
  Clock,
  Mail,
  Linkedin,
  DollarSign,
  TrendingDown,
  Target,
  MessageSquare,
  Database,
  Calendar,
  TrendingUp,
  Rocket,
  BarChart3,
  CheckCircle2,
  XCircle,
  Star,
  Flame,
  Check,
  X,
  Instagram,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";

// ================== AttentionBar ==================
const AttentionBar = () => {
  return (
    <div className="bg-[hsl(68,100%,50%)] text-[hsl(220,25%,10%)] py-2.5 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
      <div className="container mx-auto flex items-center justify-center gap-3 text-sm md:text-base font-bold relative z-10">
        <Shield className="h-5 w-5" />
        <span>15+ Conversations Guarantee</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">For B2B Lead Generation Agencies</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
};

// ================== HeroSection ==================
const HeroSection = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,30%,10%)] to-[hsl(220,25%,6%)] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(68,100%,50%)]/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_hsl(68,100%,50%,0.1)_1px,_transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Scarcity Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[hsl(68,100%,50%)]/30 rounded-full px-4 py-2 mb-8 text-[hsl(68,100%,50%)] text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-[hsl(68,100%,50%)] animate-pulse" />
              Only taking 3 new clients this month
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Get <span className="text-gradient">15+ Qualified Sales</span>
              <br />
              Conversations in 30 Days
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/70 mb-4 max-w-2xl mx-auto leading-relaxed">
              Without Hiring a Sales Team or Spending on Ads
            </p>

            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Done-for-you outbound system for B2B lead generation agencies who
              need consistent pipeline without the trial-and-error
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://calendly.com/brandskript/1-1-consultation-call?month=2026-01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg px-8 py-6 bg-[hsl(68,100%,50%)] hover:bg-[hsl(68,100%,45%)] text-[hsl(220,25%,10%)] font-semibold rounded-md transition-all duration-300 group animate-pulse-glow"
              >
                Book a 20-Minute Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>


              <button
                onClick={() => setOpenVideo(true)}
                className="text-lg px-8 py-6 bg-transparent border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 inline-block group-hover:scale-110 transition-transform" />
                Watch How It Works
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-3 text-white/60 text-sm">
              <Users className="h-5 w-5 text-[hsl(68,100%,50%)]" />
              <span>
                Trusted by businesses across
                <span className="text-white font-medium"> 5 countries</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
              fill="hsl(220, 25%, 6%)"
            />
          </svg>
        </div>
      </section>

      {/* ================= VIDEO POPUP ================= */}
      {openVideo && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setOpenVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute top-3 right-3 bg-black/60 hover:bg-black text-white rounded-full p-2 z-10"
            >
              <X className="h-5 w-5" />
            </button>

            {/* ONLINE VIDEO — fixed URL (no trailing space) */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="How It Works"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

// ================== ClientLogos ==================
const ClientLogos = () => {
  const logos = [
    { image: "/clientLogo/Logo 1.png" },
    { image: "/clientLogo/Logo 2.png" },
    { image: "/clientLogo/Logo 3.png" },
    { image: "/clientLogo/Logo 4.png" },
    { image: "/clientLogo/Logo 5.png" },
    { image: "/clientLogo/Logo 6.png" },
    { image: "/clientLogo/Logo 7.png" },
    { image: "/clientLogo/Logo 8.png" },
    { image: "/clientLogo/Logo 9.png" },
    { image: "/clientLogo/Logo 10.png" },
    { image: "/clientLogo/Logo 11.png" },
    { image: "/clientLogo/Logo 12.png" },
    { image: "/clientLogo/Logo 13.png" },
    { image: "/clientLogo/Logo 14.png" },
    { image: "/clientLogo/Logo 15.png" },
    { image: "/clientLogo/Logo 16.png" },
  ];

  return (
    <section className="py-12 bg-[hsl(220,25%,6%)] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <p className="text-center text-white/100 mb-8 text-sm uppercase tracking-wider font-medium">
          Trusted by businesses across 5 countries
        </p>

        {/* Infinite Scroll */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll-rtl">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-6 md:mx-10">
                <div className="flex items-center justify-center bg-white/100 rounded-lg border ">
                  
                  {/* ONLY LOGO IMAGE */}
                  <img
                    src={logo.image}
                    alt="Client Logo"
                    className="h-16 md:h-18 "
                  />

                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[hsl(220,25%,6%)] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[hsl(220,25%,6%)] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};





// ================== ProblemSection ==================
const ProblemSection = () => {
  const problems = [
    { icon: AlertCircle, text: "Feast-or-famine revenue from referrals" },
    { icon: Clock, text: "No time to do outbound for YOUR business" },
    { icon: Mail, text: "Tried cold email - got buried in spam" },
    { icon: Linkedin, text: "LinkedIn outreach feels like shouting into the void" },
    { icon: DollarSign, text: "Can't afford a $6K/month BDR who may or may not work out" },
    { icon: TrendingDown, text: "Inconsistent sales each month - not predictable revenue" },
  ];

  return (
    <section className="py-20 bg-[hsl(220,25%,6%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            You're great at delivering lead gen for your clients...
          </h2>
          <p className="text-2xl md:text-3xl text-[hsl(68,100%,50%)] font-bold mb-12">
            But your own pipeline is a mess.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <problem.icon className="h-5 w-5 text-red-400" />
                </div>
                <p className="text-white/80 text-left text-sm md:text-base">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xl text-white/60">
            Sound familiar? 👇
          </p>
        </div>
      </div>
    </section>
  );
};

// ================== SolutionSection ==================
const SolutionSection = () => {
  const features = [
    { icon: Target, title: "ICP-Targeted Prospect List", description: "500+ qualified agency owners/directors" },
    { icon: Mail, title: "Complete Outbound Setup", description: "Email + LinkedIn campaigns ready to go" },
    { icon: MessageSquare, title: "Multi-touch Follow-up", description: "7-10 touchpoints that actually convert" },
    { icon: Database, title: "CRM & Pipeline Setup", description: "Nothing falls through the cracks" },
    { icon: Calendar, title: "30 Days Managed", description: "I run it, you take the calls" },
    { icon: Shield, title: "15+ Conversations Guarantee", description: "Or I work free until we hit it" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[hsl(220,25%,6%)] to-[hsl(220,25%,10%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              I install a complete outbound system that{" "}
              <span className="text-gradient">runs FOR you</span>, not BY you.
            </h2>
            <p className="text-xl text-white/60">In 30 days, you get:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[hsl(68,100%,50%)]/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(68,100%,50%)]/0 via-[hsl(68,100%,50%)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[hsl(68,100%,50%)]/20 text-[hsl(68,100%,50%)] mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://calendly.com/brandskript/1-1-consultation-call?month=2026-01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="text-lg px-8 py-6 bg-[hsl(68,100%,50%)] hover:bg-[hsl(68,100%,45%)] text-[hsl(220,25%,10%)] font-semibold rounded-md transition-all duration-300 group animate-pulse-glow"
              >
                Book Your Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

// ================== StatsSection ==================
const StatsSection = () => {
  const stats = [
    { icon: TrendingUp, value: "40,000+", label: "Leads Generated", description: "Qualified B2B contacts delivered" },
    { icon: Users, value: "11,000+", label: "Campaigns Managed", description: "Across multiple industries" },
    { icon: Target, value: "5", label: "Countries Served", description: "Global reach and expertise" },
    { icon: Clock, value: "8+", label: "Years Experience", description: "Building acquisition systems" },
  ];

  return (
    <section className="py-20 bg-[hsl(220,25%,8%)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(68,100%,50%)_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[hsl(68,100%,50%)]/20 text-[hsl(68,100%,50%)] rounded-full text-sm font-medium mb-4">
            Proven Track Record
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Numbers That <span className="text-gradient">Speak Volumes</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real metrics from real campaigns across 5 countries
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 hover:border-[hsl(68,100%,50%)]/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(68,100%,50%)]/0 via-[hsl(68,100%,50%)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[hsl(68,100%,50%)]/20 text-[hsl(68,100%,50%)] mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[hsl(68,100%,50%)] mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <p className="text-white/50 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================== HowItWorks ==================
const HowItWorks = () => {
  const steps = [
    {
      icon: Target,
      emoji: "🎯",
      week: "Week 1",
      title: "Strategy & Setup",
      description: "ICP definition, list building, messaging framework, system setup",
      color: "from-[hsl(68,100%,50%)] to-[hsl(80,100%,60%)]",
    },
    {
      icon: Rocket,
      emoji: "🚀",
      week: "Week 2-4",
      title: "Campaign Execution",
      description: "Daily outreach, inbox monitoring, booking qualified calls to your calendar",
      color: "from-[hsl(68,100%,50%)] to-[hsl(80,100%,60%)]",
    },
    {
      icon: BarChart3,
      emoji: "📊",
      week: "Week 5",
      title: "Performance Review",
      description: "Results analysis, optimization recommendations, retainer option discussion",
      color: "from-[hsl(68,100%,50%)] to-[hsl(80,100%,60%)]",
    },
  ];

  return (
    <section className="py-24 bg-[hsl(220,25%,8%)] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2" />

            <div className="grid lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-[hsl(68,100%,50%)]/50 hover:bg-white/10 transition-all duration-300 group-hover:-translate-y-2">
                    {/* Emoji */}
                    <div className="text-4xl mb-4">{step.emoji}</div>

                    {/* Week Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-[hsl(220,25%,10%)] text-sm font-bold mb-4`}>
                      {step.week}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ================== FitSection ==================
const FitSection = () => {
  const perfectFit = [
    "B2B lead generation agencies doing $50K-$500K/month",
    "You have a proven service but need consistent deal flow",
    "You're tired of referral dependency",
    "You want pipeline you can count on, not hope for",
  ];

  const notFor = [
    "Agencies just starting out (under $30K/month)",
    "Businesses that can't handle 20 new conversations",
    "Companies looking for \"magic button\" solutions",
  ];

  return (
    <section className="py-24 bg-[hsl(220,25%,6%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Is This <span className="text-gradient">Right For You</span>?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Perfect Fit */}
          <div className="bg-[hsl(68,100%,50%)]/5 border border-[hsl(68,100%,50%)]/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-[hsl(68,100%,50%)] mb-6">✅ Perfect Fit</h3>
            <ul className="space-y-4">
              {perfectFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(68,100%,50%)] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div className="bg-red-500/5 border border-red-500/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-red-400 mb-6">❌ Not For</h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// ================== PricingSection ==================
const PricingSection = () => {
  const features = ["15+ qualified conversations guarantee", "Monthly retainer available after pilot (optional)"];
  return (
    <section className="py-24 bg-gradient-to-b from-[hsl(220,25%,8%)] to-[hsl(220,25%,6%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm border border-[hsl(68,100%,50%)]/50 rounded-3xl p-8 text-center">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-2 bg-[hsl(68,100%,50%)] text-[hsl(220,25%,10%)] px-5 py-1.5 rounded-full text-sm font-bold whitespace-nowrap">
                <Flame className="h-4 w-4" />
                Book in the next 48 hours
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-4 mb-6">30-Day System (Pilot Plan)</h3>

            {/* Price */}
            <div className="mb-6">
              <span className="text-2xl text-white/40 line-through">$6,000</span>
              <div className="text-6xl font-bold text-[hsl(68,100%,50%)] mt-2">
                $2,000
              </div>
              <p className="text-white/60 mt-2">75% to start, 25% on day 15</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-white/80">
                  <Check className="h-5 w-5 text-[hsl(68,100%,50%)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://calendly.com/brandskript/1-1-consultation-call?month=2026-01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center text-lg py-6 bg-[hsl(68,100%,50%)] hover:bg-[hsl(68,100%,45%)] text-[hsl(220,25%,10%)] font-semibold rounded-md transition-all duration-300 group animate-pulse-glow"
            >
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

          {/* Guarantee Badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 bg-[hsl(68,100%,50%)]/10 border border-[hsl(68,100%,50%)]/30 rounded-xl px-6 py-4">
              <Shield className="h-8 w-8 text-[hsl(68,100%,50%)]" />
              <div className="text-left">
                <div className="text-[hsl(68,100%,50%)] font-bold">15+ Conversations</div>
                <div className="text-white/60 text-sm">Or Free Work Until You Get Desired Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ================== Testimonials ==================
const Testimonials = () => {
  const testimonials = [
    {
      name: "Suhail M.",
      role: "Owner",
      company: "BTransport Pvt. Ltd.",
      image: "SM",
      content: "We were about to shut down Google Ads completely — it was bleeding money with negative ROI. Shubham turned it around. Meta ads now run at 3.2x lower CAC, and Google ads went from a loss to profitable. We've been working with him for over 18 months now, and there's no reason to stop.",
      metric: "3.2x Lower CAC",
    },
    {
      name: "Tushar Sontakke",
      role: "Owner",
      company: "The HealingMonk LLP",
      image: "TS",
      content: "I expected him to just generate leads — that's what most people do. But Shubham started tracking lead quality, show-up rates, and actual ROI. That surprised me. We were skeptical at first, especially with a new service launch, but I've already sent him two referrals. We're on retainer now.",
      metric: "2.8x Lower CAC + 2x Lead Quality",
    },
    {
      name: "Shivani",
      role: "Head of Marketing",
      company: "CeeKr Concepts Pvt. Ltd.",
      image: "SH",
      content: "Our app install-to-retention rate was terrible. Shubham didn't just run ads — he came back with a detailed execution plan showing exactly what needed to change and why it was urgent. Meta CAC dropped 5.4x, Google cost-per-conversion improved 3.4x, and retention actually started moving. He treats feedback like fuel.",
      metric: "5.4x Lower CAC + 3.4x Better Conversions",
    },
  ];

  return (
    <section className="py-24 bg-[hsl(220,25%,6%)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[hsl(68,100%,50%)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Real Results From <span className="text-gradient">Real Businesses</span>
          </h2>
          <p className="text-white/60 text-lg">
            Don't take my word for it. Here's what clients say:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[hsl(68,100%,50%)]/50 hover:bg-white/10 transition-all duration-500 relative"
            >
              {/* Metric Badge */}
              <div className="absolute -top-3 right-6">
                <div className="bg-[hsl(68,100%,50%)] text-[hsl(220,25%,10%)] px-4 py-1.5 rounded-full text-sm font-bold">
                  {testimonial.metric}
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[hsl(68,100%,50%)] text-[hsl(68,100%,50%)]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(68,100%,50%)] to-[hsl(80,100%,60%)] flex items-center justify-center text-[hsl(220,25%,10%)] font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-white/60">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video CTA */}
        {/* <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4 hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white text-xl font-bold">S</span>
            </div>
            <div className="text-left">
              <div className="text-white font-medium">Watch: How Marcus Generated $40K in 30 Days</div>
              <div className="text-white/60 text-sm">2 minute case study</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

// ================== AboutSection ==================
const AboutSection = () => {
  const stats = [
    { value: 11000, label: "Campaigns Managed", suffix: "+" },
    { value: 5, label: "Countries Served", suffix: "" },
    { value: 40000, label: "Qualified Leads", suffix: "+" },
    { value: 8, label: "Years Experience", suffix: "+" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts(
        stats.map((stat) => Math.min(Math.floor((step / steps) * stat.value), stat.value))
      );
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[hsl(220,25%,6%)] to-[hsl(220,25%,8%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-[hsl(68,100%,50%)] to-[hsl(80,100%,60%)] flex items-center justify-center text-[hsl(220,25%,10%)] text-5xl lg:text-6xl font-bold shadow-2xl">
                <img src="/Shubh Dp new.jpg.jpeg" alt="Shubham Channagire" className="w-32 h-32 lg:w-40 lg:h-40 rounded-full" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Hey, I'm <span className="text-gradient">Shubham Channagire</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                I've spent 8+ years building client acquisition systems for B2B service businesses
                across 5 countries. I've managed 11,000+ campaigns, generated 40,000+ qualified leads,
                and helped businesses move from referral-dependent to pipeline-predictable.
              </p>
              <p className="text-white/70 text-lg mt-4">
                I don't do this as a side hustle. <span className="text-white font-medium">This is what I do, full-time, every day.</span>
              </p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://www.linkedin.com/in/shubhamchannagire/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-[hsl(68,100%,50%)] hover:text-[hsl(220,25%,10%)] transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/marketing_with_shubh/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-[hsl(68,100%,50%)] hover:text-[hsl(220,25%,10%)] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@shubhamchannagire" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-[hsl(68,100%,50%)] hover:text-[hsl(220,25%,10%)] transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 rounded-xl border border-white/10"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[hsl(68,100%,50%)] mb-2">
                  {counts[index].toLocaleString()}{stat.suffix}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ================== FAQSection ==================
const FAQSection = () => {
  const faqs = [
    {
      question: "Why should I trust you?",
      answer: "I've been doing this for 8+ years across 5 countries, managing 11,000+ campaigns and generating 40,000+ qualified leads. My track record speaks for itself, and I offer a money-back guarantee if we don't hit 15+ conversations.",
    },
    {
      question: "What if the leads are low quality?",
      answer: "Every lead goes through a rigorous ICP-matching process. We define your ideal customer profile together, and I only count conversations with decision-makers who actually match your criteria. No fluff, no wasted calls.",
    },
    {
      question: "Do you just set it up and leave?",
      answer: "Absolutely not. I manage everything for the full 30 days — daily outreach, inbox monitoring, reply handling, and booking calls directly to your calendar. You focus on closing, I focus on filling your pipeline.",
    },
    {
      question: "What happens after 30 days?",
      answer: "After the pilot, you'll have a complete outbound system that's proven to work. You can continue managing it yourself, or we can discuss a monthly retainer where I keep running and optimizing it for you.",
    },
    {
      question: "How is this different from hiring a BDR?",
      answer: "A BDR costs $6K+/month with no guarantee. They need 3-6 months to ramp up, might not work out, and you're stuck with HR headaches. I deliver 15+ qualified conversations in 30 days, guaranteed, for a fraction of the cost.",
    },
  ];

  return (
    <section className="py-24 bg-[hsl(220,25%,6%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-[hsl(68,100%,50%)]/10 text-[hsl(68,100%,50%)] rounded-full text-sm font-medium mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white/5 border border-white/10 rounded-xl group">
                <summary className="list-none cursor-pointer py-6 px-6 text-white hover:text-[hsl(68,100%,50%)] font-medium">
                  {faq.question}
                  <span className="float-right transform transition-transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/70 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ================== CTASection ==================
const CTASection = () => {
  const guarantees = [
    { icon: Shield, text: "15+ Conversations Guaranteed" },
    { icon: Clock, text: "Results in 30 Days" },
    { icon: CheckCircle2, text: "Free Work Until You Get Desired Results" },
  ];

  return (
    <section id="book-call" className="py-24 bg-gradient-to-br from-[hsl(220,25%,8%)] via-[hsl(220,30%,12%)] to-[hsl(220,25%,8%)] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(68,100%,50%)]/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[hsl(68,100%,50%)]/10 border border-[hsl(68,100%,50%)]/30 rounded-full px-4 py-2 mb-8 text-[hsl(68,100%,50%)] text-sm font-medium">
            <span className="flex h-2 w-2 rounded-full bg-[hsl(68,100%,50%)] animate-pulse" />
            Only 3 spots left this month
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Fill Your <span className="text-gradient">Pipeline</span>?
          </h2>

          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Book a 20-minute strategy call. We'll discuss your ICP, current challenges,
            and whether this system is the right fit for your agency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/brandskript/1-1-consultation-call?month=2026-01",
                  "_blank"
                )
              }
              className="text-lg px-10 py-7 bg-[hsl(68,100%,50%)] hover:bg-[hsl(68,100%,45%)] text-[hsl(220,25%,10%)] font-semibold rounded-md transition-all duration-300 group"
            >
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap justify-center gap-6">
            {guarantees.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/70 text-sm"
              >
                <item.icon className="h-5 w-5 text-[hsl(68,100%,50%)]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ================== Footer ==================
const Footer = () => {
  return (
    <footer className="bg-[hsl(220,25%,4%)] text-white/60 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-white mb-2">
              ROI Edge
            </div>
            <p className="text-sm">
              Get 15+ Qualified Sales Conversations in 30 Days
            </p>
          </div>

          {/* Social Links */}
      <div className="mt-8 pt-8 border-t border-white/10 text-sm text-white">

  {/* Contact Information */}
  <div className="">
    <p>
      Address: C1G, Floor 12, 1203, Brooklyn Pride World City, Charholi Budruk, <br />
      Pune, Maharashtra 412105
    </p>
    <p className="mt-1">
      Contact No.: +1 213-646-7609 (USA) | +91 899 905 1967 (India)
    </p>
   <p className="mt-1">
  Email:
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=hello.roiedge@gmail.com"
    className="underline ml-1"
  >
    hello.roiedge@gmail.com
  </a>

 
</p>

  </div>

  {/* Social Icons */}
  <div className="flex justify-center gap-4 mt-6">
    <a
      href="https://www.linkedin.com/in/shubhamchannagire/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                 hover:bg-[hsl(68,100%,50%)] hover:text-[hsl(220,25%,10%)]
                 transition-colors"
    >
      <Linkedin className="h-5 w-5" />
    </a>

   <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello.roiedge@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
             hover:bg-[hsl(68,100%,50%)] hover:text-[hsl(220,25%,10%)]
             transition-colors"
>
  <Mail className="h-5 w-5" />
</a>

  </div>

</div>

        </div>

        
      </div>
    </footer>
  );
};

// ================== HomePage ==================
export default function LandingPage() {
  return (
    <>
      <AttentionBar />
      <HeroSection />
      <ClientLogos />
      <ProblemSection />
      <SolutionSection />
      <StatsSection />
      <HowItWorks />
      <FitSection />
      <PricingSection />
      <Testimonials />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
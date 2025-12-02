import React from "react";
import { Helmet } from "react-helmet-async";

import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import AboutSection from "./AboutSection";
import ToolsSection from "./ToolsSection";
import ComparisonSection from "./ComparisonSection";
import PricingSection from "./PricingSection";
import FeaturesServicesSection from "./FeaturesServicesSection";
import StatsTestimonialsSection from "./StatsTestimonialsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import ClientLoveSection from "./ClientLoveSection";
import ShortVidsAtGlance from "./ShortVidsAtGlance";
import WhosThisForSection from "./WhosThisForSection";
import BookCallSection from "./BookCallSection";
import MembershipBenefits from "./MembershipBenefits";
import BlogSectionHome from "../components/BlogSectionHome";
import CaseStudyHome from "../components/CaseStudyHome";
import Book from "./Book";
import TestimonialSection from "./TestimonialsSection";
import FeaturesCarousel from "./FeaturesCarousel";
import HandOff from "./HandOff";
import HowItWorks from "./HowItWorks";
import PricingSections from "./PricingSection";
import HandoffSection from "./HandoffSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">

      {/* 🌟 HOME PAGE SEO */}
      <Helmet>
        <title>ShortVids – Best Creative Video Agency | Branding, Editing & Marketing</title>

        <meta
          name="description"
          content="ShortVids helps brands grow with high-quality short videos, creative editing, storytelling, performance marketing, branding, and full-funnel content solutions."
        />

        <meta
          name="keywords"
          content="short video editing, creative agency, performance marketing, content creation, reels editing, youtube shorts editing, brand growth, digital marketing, business branding, video agency"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="ShortVids – Creative Video & Marketing Agency" />
        <meta
          property="og:description"
          content="Grow your brand with high-quality video content, editing, and marketing solutions. Trusted by top companies."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ShortVids – Creative Video Agency" />
        <meta
          name="twitter:description"
          content="Boost your brand with premium short videos, storytelling, and performance marketing."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>

      {/* ------------------- Page Sections --------------------- */}
      <HeroSection />
      <TestimonialSection/>
      <FeaturesCarousel/>
      <HandOff/>
      <HowItWorks/>
      <PricingSections/>
      <BlogSectionHome />
      <HandoffSection/>
      {/* <ProcessSection />
      <AboutSection />
      <ClientLoveSection />
      <ShortVidsAtGlance />
      <WhosThisForSection />
      <StatsTestimonialsSection />
      <BookCallSection />
      <MembershipBenefits />
      <BlogSectionHome />?
      <CaseStudyHome />
      <Book /> */}

    </div>
  );
};

export default Home;

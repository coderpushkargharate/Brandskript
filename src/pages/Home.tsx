import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialsSection";
import FeaturesCarousel from "./FeaturesCarousel";
import HandOff from "./HandOff";
import HowItWorks from "./HowItWorks";
import Automate from "./Automate";
import HandoffSection from "./HandoffSection";



const Home: React.FC = () => {
  return (
    <div className="min-h-screen">

    
      {/* ------------------- Page Sections --------------------- */}
      <HeroSection />
      <TestimonialSection/>
      <FeaturesCarousel/>
      <HandOff/>
      <HowItWorks/>
      <Automate/>
      {/* <BlogSectionHom /> */}
      <HandoffSection/>
      
    </div>
  );
};

export default Home;

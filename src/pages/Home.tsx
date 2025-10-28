import React from 'react';
import HeroSection from './HeroSection';
import ProcessSection from './ProcessSection';
import AboutSection from './AboutSection';
import ToolsSection from './ToolsSection';
import ComparisonSection from './ComparisonSection';
import PricingSection from './PricingSection';
import FeaturesServicesSection from './FeaturesServicesSection';
import StatsTestimonialsSection from './StatsTestimonialsSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';


const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProcessSection />
      <AboutSection />
      <ToolsSection />
      <ComparisonSection />
      {/* <PricingSection /> */}
      <FeaturesServicesSection />
      <StatsTestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;
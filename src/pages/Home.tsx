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
import ClientLoveSection from './ClientLoveSection';
import ShortVidsAtGlance from './ShortVidsAtGlance';
import WhosThisForSection from './WhosThisForSection';
import BookCallSection from './BookCallSection';
import MembershipBenefits from './MembershipBenefits';
import BlogSection from '../components/BlogSection';
import CaseStudyList from '../components/CaseStudyList';
import Book from './Book';
import CaseStudyHome from './CaseStudyHome';


const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProcessSection />
      <AboutSection />
      {/* <ToolsSection /> */}
      <ClientLoveSection/>
      <ShortVidsAtGlance/>
      <WhosThisForSection/>
      {/* <ComparisonSection /> */}
      {/* <PricingSection /> */}
      {/* <FeaturesServicesSection /> */}
      <StatsTestimonialsSection />
      <BookCallSection/>
      <MembershipBenefits/>
      <BlogSection/>
      <CaseStudyHome/>
      <Book/>
      {/* <FAQSection /> */}
      {/* <CTASection /> */}
    </div>
  );
};

export default Home;
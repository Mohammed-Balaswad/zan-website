import React from 'react';
import { HeroSection } from '../../components/sections/HeroSection';
import { PositioningSection } from '../../components/sections/PositioningSection';
import { ProjectShowcaseSection } from '../../components/sections/ProjectShowcaseSection';
import { OpportunitiesSection } from '../../components/sections/OpportunitiesSection';
import { SectorsSection } from '../../components/sections/SectorsSection';
import { PartnersSection } from '../../components/sections/PartnersSection';
import { HomeCtaSection } from '../../components/sections/HomeCtaSection';

export function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. ZAN Positioning & Institutional Overview */}
      <PositioningSection />

      {/* 3. Featured Investment & Project Showcase (Editorial Layout) */}
      <ProjectShowcaseSection />

      {/* 4. Target Investment Opportunities (Dark Navy High-Contrast Section) */}
      <OpportunitiesSection />

      {/* 5. Core Sectors Display */}
      <SectorsSection />

      {/* 6. Strategic Partners (Neutral Placeholders) */}
      <PartnersSection />

      {/* 7. Executive Investor CTA Banner */}
      <HomeCtaSection />
    </div>
  );
}

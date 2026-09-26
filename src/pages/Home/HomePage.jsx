import React from 'react';
import { HeroSection } from '../../components/sections/HeroSection';
import { PositioningSection } from '../../components/sections/PositioningSection';
import { ProjectShowcaseSection } from '../../components/sections/ProjectShowcaseSection';
import { OpportunitiesSection } from '../../components/sections/OpportunitiesSection';
import { SectorsSection } from '../../components/sections/SectorsSection';
import { PartnersSection } from '../../components/sections/PartnersSection';
import { HomeCtaSection } from '../../components/sections/HomeCtaSection';
import { FEATURE_FLAGS } from '../../config/features';

export function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. ZAN Positioning & Institutional Overview */}
      <PositioningSection />

      {/* 3. Featured Investment & Project Showcase (Editorial Layout) */}
      {FEATURE_FLAGS.homeSections.projectShowcase && <ProjectShowcaseSection />}

      {/* 4. Target Investment Opportunities (Dark Navy High-Contrast Section) */}
      {FEATURE_FLAGS.homeSections.opportunities && <OpportunitiesSection />}

      {/* 5. Core Sectors Display */}
      {FEATURE_FLAGS.homeSections.sectors && <SectorsSection />}

      {/* 6. Strategic Partners (Neutral Placeholders) */}
      <PartnersSection />

      {/* 7. Executive Investor CTA Banner */}
      <HomeCtaSection />
    </div>
  );
}

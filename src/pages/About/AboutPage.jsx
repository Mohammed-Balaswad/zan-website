import React from 'react';
import { AboutHero } from './components/AboutHero';
import { AboutWhoWeAre } from './components/AboutWhoWeAre';
import { AboutModel } from './components/AboutModel';
import { AboutVisionMission } from './components/AboutVisionMission';
import { AboutSectors } from './components/AboutSectors';
import { AboutCta } from './components/AboutCta';

export function AboutPage() {
  return (
    <div className="w-full">
      {/* 1. Institutional Hero */}
      <AboutHero />

      {/* 2. Who We Are (Asymmetric Editorial Section) */}
      <AboutWhoWeAre />

      {/* 3. Integrated Operating Model (Investment → Operations → Project Development) */}
      <AboutModel />

      {/* 4. Strategic Vision & Mission */}
      <AboutVisionMission />

      {/* 5. Our Approach / Operational Journey Timeline */}
      <AboutSectors />

      {/* 6. Closing Institutional Call to Action */}
      <AboutCta />
    </div>
  );
}

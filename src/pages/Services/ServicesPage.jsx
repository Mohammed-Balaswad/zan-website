import React from 'react';
import { ServicesHero } from './components/ServicesHero';
import { ServicesOverview } from './components/ServicesOverview';
import { ServicesJourney } from './components/ServicesJourney';
import { ServiceDetail } from './components/ServiceDetail';
import { ServicesCta } from './components/ServicesCta';

export function ServicesPage() {
  return (
    <div className="w-full">
      {/* 1. Institutional Hero */}
      <ServicesHero />

      {/* 2. Services Overview / Strategic Integrated Model */}
      <ServicesOverview />

      {/* 3. ZAN Service Journey (The 7 Stages from Establishment to Expansion) */}
      <ServicesJourney />

      {/* 4. Detailed Service Areas (The 5 Core Pillars from zan-services.pdf) */}
      <ServiceDetail />

      {/* 5. Closing Institutional Call to Action */}
      <ServicesCta />
    </div>
  );
}

export default ServicesPage;

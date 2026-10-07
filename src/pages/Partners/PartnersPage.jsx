import React from "react";
import { PartnersHero } from "./components/PartnersHero";
import { PartnershipOverview } from "./components/PartnershipOverview";
import { PartnersShowcase } from "./components/PartnersShowcase";
import { PartnershipModel } from "./components/PartnershipModel";
import { PartnersCta } from "./components/PartnersCta";

export function PartnersPage() {
  return (
    <main>
      <PartnersHero />
      <PartnershipOverview />
      <PartnersShowcase />
      <PartnershipModel />
      <PartnersCta />
    </main>
  );
}

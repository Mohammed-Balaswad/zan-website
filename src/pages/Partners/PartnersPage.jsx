import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PARTNERS_DATA } from '../../data/partners';
import { PartnerCard } from '../../components/cards/PartnerCard';

export function PartnersPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-container mx-auto px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-navy mb-6">
        {t('nav.partners')}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PARTNERS_DATA.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
}

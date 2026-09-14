import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { OPPORTUNITIES_DATA } from '../../data/opportunities';

export function OpportunitiesPage() {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-container mx-auto px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-navy mb-6">
        {t('nav.opportunities')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {OPPORTUNITIES_DATA.map((opp) => (
          <div key={opp.id} className="bg-white p-6 rounded-card border border-border">
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">
              {opp.type[language] || opp.type.ar}
            </span>
            <h3 className="text-base font-bold text-navy mt-1 mb-2">
              {opp.title[language] || opp.title.ar}
            </h3>
            <p className="text-xs text-text-muted">
              {opp.description[language] || opp.description.ar}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SERVICES_DATA } from '../../data/services';

export function ServicesPage() {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-container mx-auto px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-navy mb-6">
        {t('nav.services')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES_DATA.map((srv) => (
          <div key={srv.id} className="bg-white p-6 rounded-card border border-border">
            <h3 className="text-base font-bold text-navy mb-2">
              {srv.title[language] || srv.title.ar}
            </h3>
            <p className="text-xs text-text-muted">
              {srv.description[language] || srv.description.ar}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

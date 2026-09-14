import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-container mx-auto px-4 md:px-8 py-12">
      <div className="bg-white rounded-card p-8 border border-border">
        <h1 className="text-2xl font-bold text-navy mb-4">
          {t('nav.about')}
        </h1>
        <p className="text-sm text-text-muted leading-relaxed">
          {t('common.companyName')} — {t('common.tagline')}
        </p>
      </div>
    </div>
  );
}

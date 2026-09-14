import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ContactForm } from '../Contact/ContactForm';

export function PartnershipsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-container mx-auto px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-navy mb-6">
        {t('nav.partnerships')}
      </h1>
      <div className="max-w-3xl">
        <ContactForm />
      </div>
    </div>
  );
}

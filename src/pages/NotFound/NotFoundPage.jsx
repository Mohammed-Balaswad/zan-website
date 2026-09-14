import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export function NotFoundPage() {
  const { language, t } = useLanguage();

  return (
    <div className="max-w-container mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
      <p className="text-lg text-text-muted mb-8">Page Not Found</p>
      <Link
        to={`/${language}`}
        className="px-6 py-3 bg-navy text-white text-sm font-semibold rounded-btn hover:bg-navy-dark transition-colors inline-block"
      >
        {t('nav.home')}
      </Link>
    </div>
  );
}

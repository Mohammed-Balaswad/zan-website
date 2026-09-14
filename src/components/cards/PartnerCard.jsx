import React from 'react';
import { PartnerLogoPlaceholder } from '../ui/PartnerLogoPlaceholder';
import { useLanguage } from '../../context/LanguageContext';

export function PartnerCard({ partner }) {
  const { language, t } = useLanguage();
  
  const name = partner.name?.[language] || partner.name?.en || partner.name?.ar || '';
  const sector = partner.sector?.[language] || partner.sector?.en || partner.sector?.ar || '';

  if (!partner.logoUrl) {
    return (
      <PartnerLogoPlaceholder
        name={name}
        sector={sector}
        placeholderLabel={t('common.partnerLogoPlaceholder')}
      />
    );
  }

  return (
    <div className="w-full h-32 bg-surface-white border border-border rounded-card p-4 flex flex-col items-center justify-center text-center shadow-subtle hover:border-gold/50 transition-colors">
      <img
        src={partner.logoUrl}
        alt={name}
        className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
        loading="lazy"
      />
      <span className="text-xs text-text-muted mt-2 font-medium">
        {name}
      </span>
    </div>
  );
}

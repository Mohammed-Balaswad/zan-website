import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { PARTNERS_DATA } from '../../data/partners';
import { PartnerCard } from '../cards/PartnerCard';

export function PartnersSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-border/60">
      <div className="max-w-container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">
            {t('home.partners.eyebrow')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
            {t('home.partners.title')}
          </h2>
          <p className="text-xs sm:text-sm text-text-muted">
            {t('home.partners.subtitle')}
          </p>
        </div>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {PARTNERS_DATA.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
            >
              <PartnerCard partner={partner} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

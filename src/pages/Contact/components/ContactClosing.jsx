import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export function ContactClosing() {
  const { t, isRTL } = useLanguage();

  const pillars = [
    'confidentiality',
    'alignment',
    'clarity',
  ];

  return (
    <section className="relative overflow-hidden bg-surface-offwhite py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="mx-auto max-w-container px-4 md:px-8">
        <div
          className={`grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end ${
            isRTL ? 'lg:text-right' : 'lg:text-left'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.18em] text-gold">
              {t('contactPage.closing.eyebrow')}
            </span>

            <h2 className="max-w-3xl text-3xl font-bold leading-[1.2] tracking-tight text-navy md:text-4xl">
              {t('contactPage.closing.title')}
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-text-muted md:text-base">
              {t('contactPage.closing.subtitle')}
            </p>
          </motion.div>

          <div className="border-t border-border">
            {pillars.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: isRTL ? 18 : -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex gap-4 border-b border-border py-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />

                <div>
                  <h3 className="text-sm font-bold text-navy">
                    {t(`contactPage.closing.pillars.${key}.title`)}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-text-muted">
                    {t(`contactPage.closing.pillars.${key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
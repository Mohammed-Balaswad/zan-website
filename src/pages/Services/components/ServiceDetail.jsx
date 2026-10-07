import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { SERVICES_PILLARS } from '../../../data/services';
import {
  Building2,
  TrendingUp,
  Calculator,
  FileSpreadsheet,
  Layers,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

const ICON_MAP = {
  Building2,
  TrendingUp,
  Calculator,
  FileSpreadsheet,
  Layers,
};

export function ServiceDetail() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="services-list" className="relative overflow-hidden bg-surface-offwhite py-20 md:py-28 lg:py-32">
      {/* Decorative background geometry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(#0B1F33 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-container mx-auto px-4 md:px-8">

        {/* ================= Header ================= */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-3xl mb-16 md:mb-22 space-y-3"
        >
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              {t('servicesPage.detailed.eyebrow')}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            {t('servicesPage.detailed.title')}
          </h2>

          <p className="text-sm sm:text-base text-text-muted leading-relaxed font-normal">
            {t('servicesPage.detailed.subtitle')}
          </p>
        </motion.div>

        {/* ================= Detailed Service Areas Master Stack ================= */}
        <div className="space-y-8 md:space-y-10">
          {SERVICES_PILLARS.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Layers;
            const itemKey = `servicesPage.detailed.items.${service.key}`;
            const title = t(`${itemKey}.title`);
            const category = t(`${itemKey}.category`);
            const desc = t(`${itemKey}.desc`);

            // Retrieve features array from translation
            const features = t(`${itemKey}.features`, { returnObjects: true }) || [];

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-border/80 p-7 sm:p-9 md:p-11 shadow-soft hover:shadow-elevated hover:border-gold/50 transition-all duration-300"
              >
                {/* Gold Accent Bar on top */}
                <div
                  className={`absolute top-0 h-1.5 w-24 bg-gold transition-all duration-500 group-hover:w-full ${isRTL ? 'right-0' : 'left-0'
                    }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* Left Column: Number, Category, Title, Lead */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-4">
                      {/* Architectural Number */}
                      <span className="text-3xl sm:text-4xl font-black text-gold/80 font-arabic tracking-tight">
                        {service.number}
                      </span>

                      {/* Category Badge */}
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-navy/5 text-navy border border-navy/10">
                        {category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-navy">
                        {title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-text-muted leading-relaxed font-normal pt-1">
                      {desc}
                    </p>
                  </div>

                  {/* Right Column: Capabilities & Sub-services strictly from PDF */}
                  <div className="lg:col-span-5 bg-surface-offwhite/70 rounded-xl p-5 sm:p-6 border border-border/60">
                    <span className="text-xs font-bold text-navy/70 uppercase tracking-wider block mb-4">
                      {t('servicesPage.detailed.featuresLabel')}
                    </span>

                    <ul className="space-y-3">
                      {Array.isArray(features) &&
                        features.map((feature, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-navy/90 font-medium leading-relaxed"
                          >
                            <span className="w-5 h-5 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

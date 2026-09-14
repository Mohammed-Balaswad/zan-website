import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { IMAGES } from '../../constants/images';
import { ShieldCheck, Layers } from 'lucide-react';

export function PositioningSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-surface-offwhite border-b border-border/60">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                {t('home.positioning.eyebrow')}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy leading-tight">
                {t('home.positioning.title')}
              </h2>
            </div>

            <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
              <p>{t('home.positioning.paragraph1')}</p>
              <p>{t('home.positioning.paragraph2')}</p>
            </div>

            {/* Institutional Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-white rounded-container border border-border/80 shadow-subtle flex items-start gap-4">
                <div className="p-2.5 rounded-btn bg-gold/10 text-gold flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy">
                    {t('home.positioning.stat1Title')}
                  </h4>
                  <p className="text-xs text-text-muted mt-1">
                    {t('home.positioning.stat1Desc')}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-container border border-border/80 shadow-subtle flex items-start gap-4">
                <div className="p-2.5 rounded-btn bg-navy/10 text-navy flex-shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy">
                    {t('home.positioning.stat2Title')}
                  </h4>
                  <p className="text-xs text-text-muted mt-1">
                    {t('home.positioning.stat2Desc')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Imagery with Gold Accent Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-card overflow-hidden shadow-elevated border border-gold/30 group">
              <img
                src={IMAGES.positioning}
                alt="ZAN Investment Architecture"
                className="w-full h-[380px] sm:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>

            {/* Decorative Architectural Accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold/40 rounded-bl-card pointer-events-none hidden sm:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

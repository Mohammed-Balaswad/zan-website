import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import {
  UtensilsCrossed,
  Hotel,
  Store,
  Building,
} from 'lucide-react';

export function AboutSectors() {
  const { t, isRTL } = useLanguage();

  const sectors = [
    {
      num: t('aboutPage.sectors.items.food.number'),
      title: t('aboutPage.sectors.items.food.title'),
      desc: t('aboutPage.sectors.items.food.desc'),
      icon: UtensilsCrossed,
    },
    {
      num: t('aboutPage.sectors.items.hospitality.number'),
      title: t('aboutPage.sectors.items.hospitality.title'),
      desc: t('aboutPage.sectors.items.hospitality.desc'),
      icon: Hotel,
    },
    {
      num: t('aboutPage.sectors.items.commercial.number'),
      title: t('aboutPage.sectors.items.commercial.title'),
      desc: t('aboutPage.sectors.items.commercial.desc'),
      icon: Store,
    },
    {
      num: t('aboutPage.sectors.items.development.number'),
      title: t('aboutPage.sectors.items.development.title'),
      desc: t('aboutPage.sectors.items.development.desc'),
      icon: Building,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28 lg:py-32 text-white border-b border-white/10">
      
      {/* Subtle architectural grid pattern to match site identity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10" dir={isRTL ? 'rtl' : 'ltr'}>
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              {t('aboutPage.sectors.eyebrow')}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('aboutPage.sectors.title')}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/65 leading-relaxed font-normal">
            {t('aboutPage.sectors.subtitle')}
          </p>
        </div>

        {/* ================= SECTORS LUXURY GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, idx) => {
            const IconComponent = sector.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative flex flex-col p-8 rounded-2xl bg-white/[0.035] border border-white/10 hover:border-gold/50 hover:bg-white/[0.06] transition-all duration-300 shadow-xl"
              >
                {/* Top Row: Icon & Number Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-gold group-hover:bg-gold transition-all duration-300 flex items-center justify-center text-gold group-hover:text-navy shadow-subtle flex-shrink-0">
                    <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="text-xs font-bold font-mono tracking-widest text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
                    {sector.num}
                  </span>
                </div>

                {/* Sector Title */}
                <h3 className="text-base font-bold text-white leading-snug mb-3 group-hover:text-gold transition-colors duration-200">
                  {sector.title}
                </h3>

                {/* Sector Description */}
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                  {sector.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
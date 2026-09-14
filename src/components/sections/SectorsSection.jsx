import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { IMAGES } from '../../constants/images';
import { Hotel, Warehouse, Building, ShieldCheck } from 'lucide-react';

export function SectorsSection() {
  const { t } = useLanguage();

  const sectors = [
    {
      id: 'hospitality',
      icon: Hotel,
      title: t('home.sectors.hospitality.title'),
      desc: t('home.sectors.hospitality.desc'),
      image: IMAGES.sectorHospitality,
    },
    {
      id: 'logistics',
      icon: Warehouse,
      title: t('home.sectors.logistics.title'),
      desc: t('home.sectors.logistics.desc'),
      image: IMAGES.sectorLogistics,
    },
    {
      id: 'realestate',
      icon: Building,
      title: t('home.sectors.realestate.title'),
      desc: t('home.sectors.realestate.desc'),
      image: IMAGES.sectorRealEstate,
    },
    {
      id: 'services',
      icon: ShieldCheck,
      title: t('home.sectors.services.title'),
      desc: t('home.sectors.services.desc'),
      image: IMAGES.sectorGovernance,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface-offwhite border-b border-border/60">
      <div className="max-w-container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">
            {t('home.sectors.eyebrow')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy">
            {t('home.sectors.title')}
          </h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            {t('home.sectors.subtitle')}
          </p>
        </div>

        {/* 4 Sector Photo Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <motion.div
                key={sec.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="group relative rounded-card overflow-hidden bg-navy text-white shadow-subtle min-h-[300px] flex flex-col justify-end p-6 border border-border"
              >
                {/* Background Image */}
                <img
                  src={sec.image}
                  alt={sec.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/60 to-transparent" />

                {/* Content */}
                <div className="relative z-10 space-y-2">
                  <div className="w-10 h-10 rounded-btn bg-gold/90 text-navy flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-text-light/90 leading-relaxed line-clamp-2">
                    {sec.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

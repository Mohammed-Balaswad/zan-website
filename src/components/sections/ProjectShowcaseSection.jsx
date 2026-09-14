import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS_DATA } from '../../data/projects';
import { IMAGES } from '../../constants/images';
import { ArrowUpRight, MapPin, Building2 } from 'lucide-react';

export function ProjectShowcaseSection() {
  const { language, t } = useLanguage();

  // Attach photography URLs to project items
  const projectsWithImages = PROJECTS_DATA.map((proj, idx) => ({
    ...proj,
    image: idx === 0 ? IMAGES.hospitalityProject : idx === 1 ? IMAGES.logisticsProject : IMAGES.commercialTower,
  }));

  const primaryProject = projectsWithImages[0];
  const secondaryProjects = projectsWithImages.slice(1, 3);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-border/60">
      <div className="max-w-container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              {t('home.projects.eyebrow')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy mt-1">
              {t('home.projects.title')}
            </h2>
          </div>
          <Link
            to={`/${language}/projects`}
            className="inline-flex items-center gap-2 text-xs font-bold text-navy hover:text-gold transition-colors group"
          >
            <span>{t('home.projects.viewAll')}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90" />
          </Link>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Primary Featured Project Card */}
          {primaryProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 group relative rounded-card overflow-hidden bg-navy text-white shadow-elevated border border-border flex flex-col justify-end min-h-[420px] lg:min-h-[500px]"
            >
              <img
                src={primaryProject.image}
                alt={primaryProject.name[language] || primaryProject.name.ar}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/50 to-transparent" />

              <div className="relative z-10 p-6 md:p-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-gold/90 text-navy font-bold text-xs rounded-full">
                    {primaryProject.sector[language] || primaryProject.sector.ar}
                  </span>
                  <span className="text-xs text-white/80 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    {primaryProject.location[language] || primaryProject.location.ar}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {primaryProject.name[language] || primaryProject.name.ar}
                </h3>

                <p className="text-xs sm:text-sm text-text-light/90 line-clamp-2 leading-relaxed max-w-xl">
                  {primaryProject.description[language] || primaryProject.description.ar}
                </p>

                <div className="pt-2">
                  <Link
                    to={`/${language}/projects`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-white transition-colors"
                  >
                    <span>{t('common.viewDetails')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-90" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Secondary Featured Projects */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
                className="group relative rounded-card overflow-hidden bg-white border border-border shadow-subtle hover:border-gold/50 transition-all p-5 flex flex-col sm:flex-row gap-5 items-center"
              >
                <div className="w-full sm:w-40 h-36 rounded-container overflow-hidden flex-shrink-0 relative">
                  <img
                    src={proj.image}
                    alt={proj.name[language] || proj.name.ar}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-grow space-y-2">
                  <span className="text-[11px] font-bold text-gold uppercase tracking-wider block">
                    {proj.sector[language] || proj.sector.ar}
                  </span>
                  <h4 className="text-base font-bold text-navy group-hover:text-gold transition-colors">
                    {proj.name[language] || proj.name.ar}
                  </h4>
                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                    {proj.description[language] || proj.description.ar}
                  </p>
                  <Link
                    to={`/${language}/projects`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-navy hover:text-gold transition-colors pt-1"
                  >
                    <span>{t('common.viewDetails')}</span>
                    <ArrowUpRight className="w-3 h-3 rtl:rotate-90" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

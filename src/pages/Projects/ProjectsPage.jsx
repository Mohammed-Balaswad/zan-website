import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS_DATA } from '../../data/projects';

export function ProjectsPage() {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-container mx-auto px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-navy mb-6">
        {t('nav.projects')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((proj) => (
          <div key={proj.id} className="bg-white p-6 rounded-card border border-border">
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">
              {proj.sector[language] || proj.sector.ar}
            </span>
            <h3 className="text-base font-bold text-navy mt-1 mb-2">
              {proj.name[language] || proj.name.ar}
            </h3>
            <p className="text-xs text-text-muted">
              {proj.description[language] || proj.description.ar}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

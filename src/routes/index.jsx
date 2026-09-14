import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { HomePage } from '../pages/Home/HomePage';
import { AboutPage } from '../pages/About/AboutPage';
import { ProjectsPage } from '../pages/Projects/ProjectsPage';
import { OpportunitiesPage } from '../pages/Opportunities/OpportunitiesPage';
import { ServicesPage } from '../pages/Services/ServicesPage';
import { PartnersPage } from '../pages/Partners/PartnersPage';
import { PartnershipsPage } from '../pages/Partnerships/PartnershipsPage';
import { ContactPage } from '../pages/Contact/ContactPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { DEFAULT_LANGUAGE } from '../i18n';

export function AppRoutes() {
  return (
    <Routes>
      {/* Root redirect to default locale /ar */}
      <Route path="/" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />

      {/* Localized routes /:lang/... */}
      <Route path="/:lang" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="opportunities" element={<OpportunitiesPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="partnerships" element={<PartnershipsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Catch-all redirect to /ar */}
      <Route path="*" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
    </Routes>
  );
}

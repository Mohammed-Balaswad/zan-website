import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from '../../context/LanguageContext';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from '../ui/ScrollToTop';

function LayoutContent() {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);

  const isHomePage =
    location.pathname === '/' ||
    location.pathname === `/${language}` ||
    location.pathname === `/${language}/`;

  return (
    <div className="min-h-screen flex flex-col bg-surface-offwhite text-text-dark antialiased">
      <Header />
      <main className={`flex-grow ${isHomePage ? '' : 'pt-20'}`}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export function Layout() {
  return (
    <LanguageProvider>
      <LayoutContent />
    </LanguageProvider>
  );
}
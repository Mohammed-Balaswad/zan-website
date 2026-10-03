import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from '../../context/LanguageContext';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from '../ui/ScrollToTop';

function LayoutContent() {
  const location = useLocation();
  const { language, supportedLanguages } = useLanguage();

  // Strip the language prefix from a pathname so we can compare
  // the "content path" independent of the active language.
  const stripLangPrefix = (pathname) => {
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length > 0 && supportedLanguages[parts[0]]) {
      return '/' + parts.slice(1).join('/');
    }
    return pathname;
  };

  const prevContentPathRef = useRef(stripLangPrefix(location.pathname));

  useEffect(() => {
    const currentContentPath = stripLangPrefix(location.pathname);
    const isLanguageSwitch = currentContentPath === prevContentPathRef.current;
    prevContentPathRef.current = currentContentPath;

    // Only scroll to top on genuine page navigation, not on language switches.
    if (!isLanguageSwitch) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

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
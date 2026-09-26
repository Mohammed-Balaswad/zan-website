import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../navigation/LanguageSwitcher';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import {
  FEATURE_FLAGS,
  hasVisibleInvestmentLinks,
  hasVisiblePartnershipLinks,
} from '../../config/features';

export function Header() {
  const { language, t } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dropdown states for desktop
  const [investmentOpen, setInvestmentOpen] = useState(false);
  const [partnershipsOpen, setPartnershipsOpen] = useState(false);

  const investmentRef = useRef(null);
  const partnershipsRef = useRef(null);

  const isHomePage =
    location.pathname === '/' ||
    location.pathname === `/${language}` ||
    location.pathname === `/${language}/`;

  const isTransparent = isHomePage && !isScrolled;

  // Responsive breakpoint helpers for Russian vs Arabic/English
  const isRussian = language === 'ru';
  const desktopNavShowClass = isRussian ? 'hidden xl:flex' : 'hidden lg:flex';
  const mobileControlsShowClass = isRussian ? 'flex xl:hidden' : 'flex lg:hidden';
  const mobileDrawerShowClass = isRussian ? 'xl:hidden' : 'lg:hidden';

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setInvestmentOpen(false);
    setPartnershipsOpen(false);
  }, [location.pathname]);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (investmentRef.current && !investmentRef.current.contains(event.target)) {
        setInvestmentOpen(false);
      }
      if (partnershipsRef.current && !partnershipsRef.current.contains(event.target)) {
        setPartnershipsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation: Escape key closes all open menus
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setInvestmentOpen(false);
        setPartnershipsOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Check active state helper for dropdown parents
  const isPathActive = (paths) => paths.some((path) => location.pathname === path);

  const investmentPaths = [
    ...(FEATURE_FLAGS.nav.investmentProjects ? [`/${language}/projects`] : []),
    ...(FEATURE_FLAGS.nav.investmentOpportunities ? [`/${language}/opportunities`] : []),
  ];
  const partnershipsPaths = [
    ...(FEATURE_FLAGS.nav.strategicPartners ? [`/${language}/partners`] : []),
    ...(FEATURE_FLAGS.nav.investorsPartnerships ? [`/${language}/partnerships`] : []),
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        isTransparent
          ? 'bg-gradient-to-b from-navy-dark/80 via-navy-dark/40 to-transparent text-white border-b border-white/10'
          : 'bg-white/95 backdrop-blur-md border-b border-border/80 shadow-subtle text-navy'
      }`}
    >
      <div className="max-w-container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        {/* ================= AREA 1: LOGO AREA ================= */}
        <div className="flex-1 flex justify-start items-center shrink-0 min-w-0">
          <Link
            to={`/${language}`}
            onClick={(e) => {
              if (window.location.pathname === `/${language}` || window.location.pathname === `/${language}/`) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center group cursor-pointer py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-btn"
            aria-label={t('common.companyName')}
          >
            <img
              src="/images/ZAN-LOGO-2.svg"
              alt="ZAN Global Investments Logo"
              className={`h-9 sm:h-10 md:h-11 w-auto max-w-[160px] sm:max-w-[180px] xl:max-w-[200px] object-contain transition-all duration-300 ${
                isTransparent ? 'brightness-0 invert drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' : ''
              } group-hover:scale-[1.02]`}
            />
          </Link>
        </div>

        {/* ================= AREA 2: MAIN NAVIGATION AREA (CENTER) ================= */}
        <nav className={`${desktopNavShowClass} items-center justify-center gap-3 lg:gap-4 xl:gap-6.5 shrink-0 px-2`}>
          {/* 1. Home Link */}
          <NavLink
            to={`/${language}`}
            end
            className={({ isActive }) =>
              `text-xs xl:text-sm font-semibold transition-colors duration-200 hover:text-gold whitespace-nowrap py-1 px-1 border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm ${
                isActive
                  ? isTransparent
                    ? 'text-white font-bold border-gold'
                    : 'text-navy font-bold border-gold'
                  : isTransparent
                    ? 'text-white/90 border-transparent hover:border-gold/50'
                    : 'text-text-dark/80 border-transparent hover:border-gold/50'
              }`
            }
          >
            {t('nav.home')}
          </NavLink>

          {/* 2. About ZAN */}
          <NavLink
            to={`/${language}/about`}
            className={({ isActive }) =>
              `text-xs xl:text-sm font-semibold transition-colors duration-200 hover:text-gold whitespace-nowrap py-1 px-1 border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm ${
                isActive
                  ? isTransparent
                    ? 'text-white font-bold border-gold'
                    : 'text-navy font-bold border-gold'
                  : isTransparent
                    ? 'text-white/90 border-transparent hover:border-gold/50'
                    : 'text-text-dark/80 border-transparent hover:border-gold/50'
              }`
            }
          >
            {t('nav.about')}
          </NavLink>

          {/* 3. Investment Dropdown (Click Interaction) */}
          {hasVisibleInvestmentLinks && (
            <div className="relative" ref={investmentRef}>
              <button
                type="button"
                onClick={() => {
                  setInvestmentOpen(!investmentOpen);
                  setPartnershipsOpen(false);
                }}
                className={`flex items-center gap-1 text-xs xl:text-sm font-semibold transition-colors duration-200 hover:text-gold whitespace-nowrap py-1 px-1 border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm ${
                  isPathActive(investmentPaths)
                    ? isTransparent
                      ? 'text-white font-bold border-gold'
                      : 'text-navy font-bold border-gold'
                    : isTransparent
                      ? 'text-white/90 border-transparent hover:border-gold/50'
                      : 'text-text-dark/80 border-transparent hover:border-gold/50'
                }`}
                aria-expanded={investmentOpen}
                aria-haspopup="true"
                aria-label={t('nav.investment')}
              >
                <span>{t('nav.investment')}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${investmentOpen ? 'rotate-180 text-gold' : ''}`} />
              </button>

              {investmentOpen && (
                <div
                  className={`absolute top-full mt-2 ltr:left-0 rtl:right-0 min-w-[200px] border rounded-btn shadow-elevated py-2 z-50 animate-fadeIn ${
                    isTransparent
                      ? 'bg-navy-dark/95 border-white/15 text-white backdrop-blur-md'
                      : 'bg-white border-border text-navy'
                  }`}
                  role="menu"
                >
                  {FEATURE_FLAGS.nav.investmentProjects && (
                    <NavLink
                      to={`/${language}/projects`}
                      onClick={() => setInvestmentOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-xs font-semibold transition-colors border-l-2 rtl:border-l-0 rtl:border-r-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                          isActive
                            ? 'border-gold text-gold bg-gold/10'
                            : isTransparent
                              ? 'border-transparent text-white/90 hover:bg-white/10 hover:text-white'
                              : 'border-transparent text-text-dark hover:bg-surface-offwhite hover:text-navy'
                        }`
                      }
                      role="menuitem"
                    >
                      {t('nav.projects')}
                    </NavLink>
                  )}
                  {FEATURE_FLAGS.nav.investmentOpportunities && (
                    <NavLink
                      to={`/${language}/opportunities`}
                      onClick={() => setInvestmentOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-xs font-semibold transition-colors border-l-2 rtl:border-l-0 rtl:border-r-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                          isActive
                            ? 'border-gold text-gold bg-gold/10'
                            : isTransparent
                              ? 'border-transparent text-white/90 hover:bg-white/10 hover:text-white'
                              : 'border-transparent text-text-dark hover:bg-surface-offwhite hover:text-navy'
                        }`
                      }
                      role="menuitem"
                    >
                      {t('nav.opportunities')}
                    </NavLink>
                  )}
                </div>
              )}
            </div>
          )}

          {/* 4. Partnerships Dropdown (Click Interaction) */}
          {hasVisiblePartnershipLinks && (
            <div className="relative" ref={partnershipsRef}>
              <button
                type="button"
                onClick={() => {
                  setPartnershipsOpen(!partnershipsOpen);
                  setInvestmentOpen(false);
                }}
                className={`flex items-center gap-1 text-xs xl:text-sm font-semibold transition-colors duration-200 hover:text-gold whitespace-nowrap py-1 px-1 border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm ${
                  isPathActive(partnershipsPaths)
                    ? isTransparent
                      ? 'text-white font-bold border-gold'
                      : 'text-navy font-bold border-gold'
                    : isTransparent
                      ? 'text-white/90 border-transparent hover:border-gold/50'
                      : 'text-text-dark/80 border-transparent hover:border-gold/50'
                }`}
                aria-expanded={partnershipsOpen}
                aria-haspopup="true"
                aria-label={t('nav.partnershipsMenu')}
              >
                <span>{t('nav.partnershipsMenu')}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${partnershipsOpen ? 'rotate-180 text-gold' : ''}`} />
              </button>

              {partnershipsOpen && (
                <div
                  className={`absolute top-full mt-2 ltr:left-0 rtl:right-0 min-w-[210px] border rounded-btn shadow-elevated py-2 z-50 animate-fadeIn ${
                    isTransparent
                      ? 'bg-navy-dark/95 border-white/15 text-white backdrop-blur-md'
                      : 'bg-white border-border text-navy'
                  }`}
                  role="menu"
                >
                  {FEATURE_FLAGS.nav.strategicPartners && (
                    <NavLink
                      to={`/${language}/partners`}
                      onClick={() => setPartnershipsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-xs font-semibold transition-colors border-l-2 rtl:border-l-0 rtl:border-r-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                          isActive
                            ? 'border-gold text-gold bg-gold/10'
                            : isTransparent
                              ? 'border-transparent text-white/90 hover:bg-white/10 hover:text-white'
                              : 'border-transparent text-text-dark hover:bg-surface-offwhite hover:text-navy'
                        }`
                      }
                      role="menuitem"
                    >
                      {t('nav.partners')}
                    </NavLink>
                  )}
                  {FEATURE_FLAGS.nav.investorsPartnerships && (
                    <NavLink
                      to={`/${language}/partnerships`}
                      onClick={() => setPartnershipsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-xs font-semibold transition-colors border-l-2 rtl:border-l-0 rtl:border-r-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                          isActive
                            ? 'border-gold text-gold bg-gold/10'
                            : isTransparent
                              ? 'border-transparent text-white/90 hover:bg-white/10 hover:text-white'
                              : 'border-transparent text-text-dark hover:bg-surface-offwhite hover:text-navy'
                        }`
                      }
                      role="menuitem"
                    >
                      {t('nav.partnerships')}
                    </NavLink>
                  )}
                </div>
              )}
            </div>
          )}

          {/* 5. Services */}
          <NavLink
            to={`/${language}/services`}
            className={({ isActive }) =>
              `text-xs xl:text-sm font-semibold transition-colors duration-200 hover:text-gold whitespace-nowrap py-1 px-1 border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm ${
                isActive
                  ? isTransparent
                    ? 'text-white font-bold border-gold'
                    : 'text-navy font-bold border-gold'
                  : isTransparent
                    ? 'text-white/90 border-transparent hover:border-gold/50'
                    : 'text-text-dark/80 border-transparent hover:border-gold/50'
              }`
            }
          >
            {t('nav.services')}
          </NavLink>

          {/* 6. Contact Us */}
          <NavLink
            to={`/${language}/contact`}
            className={({ isActive }) =>
              `text-xs xl:text-sm font-semibold transition-colors duration-200 hover:text-gold whitespace-nowrap py-1 px-1 border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm ${
                isActive
                  ? isTransparent
                    ? 'text-white font-bold border-gold'
                    : 'text-navy font-bold border-gold'
                  : isTransparent
                    ? 'text-white/90 border-transparent hover:border-gold/50'
                    : 'text-text-dark/80 border-transparent hover:border-gold/50'
              }`
            }
          >
            {t('nav.contact')}
          </NavLink>
        </nav>

        {/* ================= AREA 3: ACTIONS AREA ================= */}
        <div className={`${desktopNavShowClass} flex-1 justify-end items-center gap-2.5 lg:gap-3.5 shrink-0`}>
          <LanguageSwitcher isTransparent={isTransparent} />

          <Link
            to={`/${language}/contact`}
            className={`px-3.5 xl:px-5 py-2 text-xs font-bold rounded-btn transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              isTransparent
                ? 'bg-gold hover:bg-gold-dark text-navy-dark shadow-elevated'
                : 'bg-navy hover:bg-navy-dark text-white'
            }`}
          >
            <span>{t('common.investWithUs')}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 rtl:rotate-90 ${isTransparent ? 'text-navy-dark' : 'text-gold'}`} />
          </Link>
        </div>

        {/* ================= MOBILE / TABLET NAV CONTROLS ================= */}
        <div className={`${mobileControlsShowClass} items-center gap-3`}>
          <LanguageSwitcher isTransparent={isTransparent} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className={`p-2 rounded-btn transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              isTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-navy hover:bg-surface-offwhite'
            }`}
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU DRAWER ================= */}
      {mobileMenuOpen && (
        <div
          className={`${mobileDrawerShowClass} bg-navy-dark text-white border-b border-white/10 px-6 py-6 space-y-4 animate-fadeIn shadow-elevated max-h-[85vh] overflow-y-auto`}
        >
          <nav className="flex flex-col space-y-2">
            {/* 1. Home */}
            <NavLink
              to={`/${language}`}
              end
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-semibold py-2.5 border-b border-white/10 ${
                  isActive ? 'text-gold font-bold border-gold' : 'text-white/90 hover:text-gold'
                }`
              }
            >
              {t('nav.home')}
            </NavLink>

            {/* 2. About */}
            <NavLink
              to={`/${language}/about`}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-semibold py-2.5 border-b border-white/10 ${
                  isActive ? 'text-gold font-bold border-gold' : 'text-white/90 hover:text-gold'
                }`
              }
            >
              {t('nav.about')}
            </NavLink>

            {/* 3. Investment Group */}
            {hasVisibleInvestmentLinks && (
              <div className="py-2 border-b border-white/10">
                <div className="text-xs uppercase tracking-wider text-gold font-bold mb-2">
                  {t('nav.investment')}
                </div>
                <div className="ltr:pl-3 rtl:pr-3 flex flex-col space-y-2">
                  {FEATURE_FLAGS.nav.investmentProjects && (
                    <NavLink
                      to={`/${language}/projects`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-xs font-semibold py-1.5 ${
                          isActive ? 'text-gold font-bold' : 'text-white/80 hover:text-white'
                        }`
                      }
                    >
                      {t('nav.projects')}
                    </NavLink>
                  )}
                  {FEATURE_FLAGS.nav.investmentOpportunities && (
                    <NavLink
                      to={`/${language}/opportunities`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-xs font-semibold py-1.5 ${
                          isActive ? 'text-gold font-bold' : 'text-white/80 hover:text-white'
                        }`
                      }
                    >
                      {t('nav.opportunities')}
                    </NavLink>
                  )}
                </div>
              </div>
            )}

            {/* 4. Partnerships Group */}
            {hasVisiblePartnershipLinks && (
              <div className="py-2 border-b border-white/10">
                <div className="text-xs uppercase tracking-wider text-gold font-bold mb-2">
                  {t('nav.partnershipsMenu')}
                </div>
                <div className="ltr:pl-3 rtl:pr-3 flex flex-col space-y-2">
                  {FEATURE_FLAGS.nav.strategicPartners && (
                    <NavLink
                      to={`/${language}/partners`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-xs font-semibold py-1.5 ${
                          isActive ? 'text-gold font-bold' : 'text-white/80 hover:text-white'
                        }`
                      }
                    >
                      {t('nav.partners')}
                    </NavLink>
                  )}
                  {FEATURE_FLAGS.nav.investorsPartnerships && (
                    <NavLink
                      to={`/${language}/partnerships`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-xs font-semibold py-1.5 ${
                          isActive ? 'text-gold font-bold' : 'text-white/80 hover:text-white'
                        }`
                      }
                    >
                      {t('nav.partnerships')}
                    </NavLink>
                  )}
                </div>
              </div>
            )}

            {/* 5. Services */}
            <NavLink
              to={`/${language}/services`}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-semibold py-2.5 border-b border-white/10 ${
                  isActive ? 'text-gold font-bold border-gold' : 'text-white/90 hover:text-gold'
                }`
              }
            >
              {t('nav.services')}
            </NavLink>

            {/* 6. Contact Us */}
            <NavLink
              to={`/${language}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-semibold py-2.5 border-b border-white/10 ${
                  isActive ? 'text-gold font-bold border-gold' : 'text-white/90 hover:text-gold'
                }`
              }
            >
              {t('nav.contact')}
            </NavLink>
          </nav>

          <div className="pt-2">
            <Link
              to={`/${language}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-gold hover:bg-gold-dark text-navy-dark text-center text-xs font-bold rounded-btn flex items-center justify-center gap-2 shadow-elevated"
            >
              <span>{t('common.investWithUs')}</span>
              <ArrowUpRight className="w-4 h-4 text-navy-dark rtl:rotate-90" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
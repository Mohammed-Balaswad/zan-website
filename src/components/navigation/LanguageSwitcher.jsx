import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe, ChevronDown } from 'lucide-react';

export function LanguageSwitcher({ isTransparent = false }) {
  const { language, changeLanguage, supportedLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = supportedLanguages[language];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-btn transition-colors duration-200 ${
          isTransparent
            ? 'text-white bg-white/10 border border-white/25 hover:bg-white/20 backdrop-blur-sm'
            : 'text-navy bg-white border border-border hover:border-gold/60 shadow-subtle'
        }`}
        aria-expanded={isOpen}
        aria-label="Select Language"
      >
        <Globe className="w-3.5 h-3.5 text-gold" />
        <span>{currentLang?.name}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isTransparent ? 'text-white/80' : 'text-text-muted'} ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className={`absolute top-full mt-1.5 ltr:right-0 rtl:left-0 min-w-[130px] border rounded-btn shadow-elevated py-1 z-50 animate-fadeIn ${
          isTransparent ? 'bg-navy-dark/95 border-white/15 text-white backdrop-blur-md' : 'bg-white border-border text-navy'
        }`}>
          {Object.values(supportedLanguages).map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left rtl:text-right px-4 py-2 text-xs font-medium transition-colors flex items-center justify-between ${
                language === lang.code
                  ? isTransparent
                    ? 'bg-gold/15 text-gold font-bold border-l-2 rtl:border-l-0 rtl:border-r-2 border-gold'
                    : 'bg-navy/5 text-navy font-bold border-l-2 rtl:border-l-0 rtl:border-r-2 border-gold'
                  : isTransparent
                    ? 'text-white/80 hover:bg-white/10 hover:text-white'
                    : 'text-text-dark hover:bg-surface-offwhite hover:text-navy'
              }`}
            >
              <span>{lang.name}</span>
              {language === lang.code && (
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const currentLang = siteConfig.languages.find(l => l.code === i18n.language) || siteConfig.languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-header py-3'
          : 'bg-transparent py-5'
      }`}
      style={{ transitionTimingFunction: 'var(--ease-sacred)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-heading text-xl sm:text-2xl font-semibold transition-all duration-500 ${
              isScrolled ? 'scale-90 text-[#333]' : 'scale-100 text-white'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-sacred)' }}
          >
            <span className="text-gold">{siteConfig.siteName.split(' ')[0]}</span>{' '}
            {siteConfig.siteName.split(' ').slice(1).join(' ')}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.href
                    ? 'text-gold'
                    : isScrolled
                      ? 'text-[#333] hover:text-gold'
                      : 'text-white hover:text-gold'
                }`}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          {/* Right Section: Language + Donate + Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium hover:text-gold transition-colors duration-300 ${
                  isScrolled ? 'text-[#333]' : 'text-white'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>{currentLang.flag} {currentLang.name}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isLangOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                  {siteConfig.languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors duration-200 ${
                        i18n.language === lang.code
                          ? 'text-gold font-medium'
                          : 'text-[#333]'
                      }`}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Donate Button */}
            <Link
              to="/donate"
              className="hidden sm:inline-flex px-5 py-2 bg-gold text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#b8921f] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ transitionTimingFunction: 'var(--ease-sacred)' }}
            >
              {t('nav.donate')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 hover:text-gold transition-colors duration-300 ${
                isScrolled ? 'text-[#333]' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-2">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium hover:bg-gray-50 rounded transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-gold'
                      : 'text-[#333] hover:text-gold'
                  }`}
                >
                  {t(item.label)}
                </Link>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <p className="px-3 text-xs text-gray-500 uppercase tracking-wider mb-2">
                  {t('languages')}
                </p>
                <div className="flex flex-wrap gap-2 px-3">
                  {siteConfig.languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`px-3 py-1 text-sm rounded border transition-colors duration-200 ${
                        i18n.language === lang.code
                          ? 'border-gold text-gold bg-gold/10'
                          : 'border-gray-200 text-[#333] hover:border-gold'
                      }`}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

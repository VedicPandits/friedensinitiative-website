import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Youtube, Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export default function Footer() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer
        ref={footerRef}
        className="bg-white pt-16 pb-8 overflow-hidden relative"
      >
        {/* Sacred Geometry Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
          <svg
            className="w-[800px] h-[800px] mandala-rotate"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="200" r="180" stroke="#c9a227" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="150" stroke="#c9a227" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="120" stroke="#c9a227" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="90" stroke="#c9a227" strokeWidth="0.5" />
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1="200"
                y1="20"
                x2="200"
                y2="380"
                stroke="#c9a227"
                strokeWidth="0.5"
                transform={`rotate(${i * 45} 200 200)`}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Contact Section */}
          <div className="text-center mb-12">
            <p
              className={`text-[#666] text-lg mb-4 transition-all duration-400 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-settle)' }}
            >
              {t('footer.contactText')}
            </p>
            
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className={`inline-flex items-center space-x-3 text-gold hover:text-[#b8921f] transition-all duration-500 group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
              style={{
                transitionTimingFunction: 'var(--ease-sacred)',
                transitionDelay: '100ms',
              }}
            >
              <Mail className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xl sm:text-2xl font-heading font-medium">
                {siteConfig.contact.email}
              </span>
            </a>
          </div>

          {/* Legal Link */}
          <div
            className={`text-center mb-12 transition-all duration-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
            style={{
              transitionTimingFunction: 'var(--ease-settle)',
              transitionDelay: '200ms',
            }}
          >
            <Link
              to="/terms"
              className="text-sm text-[#888] hover:text-gold underline underline-offset-4 transition-colors duration-300"
            >
              {t('footer.termsLink')}
            </Link>
          </div>

          {/* Divider */}
          <div
            className={`w-full h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent mb-12 transition-all duration-600 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{
              transitionTimingFunction: 'var(--ease-flow)',
              transitionDelay: '300ms',
            }}
          />

          {/* Social Links */}
          <div
            className={`flex justify-center items-center space-x-6 mb-12 transition-all duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionTimingFunction: 'var(--ease-ascend)',
              transitionDelay: '400ms',
            }}
          >
            {siteConfig.social.youtube && (
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227] hover:bg-[#c9a227] hover:text-white hover:scale-115 transition-all duration-300"
                style={{ transitionTimingFunction: 'var(--ease-sacred)' }}
                aria-label={t('footer.youtube')}
              >
                <Youtube className="w-5 h-5" />
              </a>
            )}
            
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227] hover:bg-[#c9a227] hover:text-white hover:scale-115 transition-all duration-300"
                style={{ transitionTimingFunction: 'var(--ease-sacred)' }}
                aria-label={t('footer.facebook')}
              >
                <Facebook className="w-5 h-5" />
              </a>
            )}
            
            {siteConfig.social.twitter && (
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227] hover:bg-[#c9a227] hover:text-white hover:scale-115 transition-all duration-300"
                style={{ transitionTimingFunction: 'var(--ease-sacred)' }}
                aria-label={t('footer.twitter')}
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227] hover:bg-[#c9a227] hover:text-white hover:scale-115 transition-all duration-300"
                style={{ transitionTimingFunction: 'var(--ease-sacred)' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Copyright */}
          <div
            className={`text-center transition-all duration-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
            style={{
              transitionTimingFunction: 'var(--ease-settle)',
              transitionDelay: '500ms',
            }}
          >
            <p className="text-sm text-[#888] mb-4">
              {t('footer.copyright', { year: currentYear })}
            </p>

            <p className="text-xs text-[#aaa] max-w-3xl mx-auto leading-relaxed">
              {t('footer.trademark')}
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#c9a227] text-white shadow-lg flex items-center justify-center transition-all duration-400 hover:-translate-y-1 hover:shadow-xl z-50 ${
          showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
        style={{
          transitionTimingFunction: 'var(--ease-sacred)',
          boxShadow: '0 4px 20px rgba(201, 162, 39, 0.4)',
        }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}

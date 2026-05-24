import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Play, Volume2 } from 'lucide-react';
import { siteConfig } from '../config/site.config';

// Hero Section Component
function HeroSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sacred Geometry Mandala Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg
          className={`w-[150vw] h-[150vw] opacity-[0.03] mandala-rotate transition-all duration-1500 ${
            isVisible ? 'opacity-[0.03] rotate-0' : 'opacity-0 -rotate-[30deg]'
          }`}
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="180" stroke="#c9a227" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="150" stroke="#c9a227" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" stroke="#c9a227" strokeWidth="0.5" />
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

      {/* Hero Background - Using gradient since we need real photos */}
      <div
        className={`absolute inset-0 transition-all duration-1200 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        style={{
          transitionTimingFunction: 'var(--ease-dramatic)',
          transitionDelay: '200ms',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a2a] via-[#2d5a45] to-[#1a3a2a]" />
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Hero Logo — golden world map, dominant visual anchor */}
        <div
          className={`mx-auto mb-8 sm:mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{
            transitionTimingFunction: 'var(--ease-sacred)',
            transitionDelay: '200ms',
            maxWidth: 'min(480px, 80vw)',
          }}
        >
          <img
            src="/logo.png"
            alt="Globale Friedensinitiative Schweiz"
            className="w-full h-auto select-none"
            style={{
              filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.25))',
            }}
            draggable={false}
          />
        </div>

        <p
          className={`text-white/90 text-sm sm:text-base uppercase tracking-[0.3em] mb-4 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionTimingFunction: 'var(--ease-settle)',
            transitionDelay: '600ms',
          }}
        >
          {t('hero.subtitle')}
        </p>

        <h1
          className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium mb-6 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            transitionTimingFunction: 'var(--ease-sacred)',
            transitionDelay: '800ms',
            textShadow: '0 4px 30px rgba(0,0,0,0.3)',
          }}
        >
          {t('hero.title')}
        </h1>

        <div
          className={`flex items-center justify-center mb-8 transition-all duration-800 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            transitionTimingFunction: 'var(--ease-flow)',
            transitionDelay: '1000ms',
          }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />
          <div className="w-2 h-2 mx-3 rotate-45 border border-[#c9a227]" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />
        </div>

        <p
          className={`text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionTimingFunction: 'var(--ease-settle)',
            transitionDelay: '1200ms',
          }}
        >
          {t('hero.description')}
        </p>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-400 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transitionTimingFunction: 'var(--ease-ascend)',
          transitionDelay: '1200ms',
        }}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest mb-2">
          {t('hero.scrollDown')}
        </span>
        <ChevronDown className="w-5 h-5 text-[#c9a227] bounce-animation" />
      </div>
    </section>
  );
}

// Training Section
function TrainingSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2
              className={`font-heading text-3xl sm:text-4xl lg:text-[42px] text-[#333] mb-8 leading-tight transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-sacred)', transitionDelay: '100ms' }}
              dangerouslySetInnerHTML={{
                __html: t('training.title').replace(/\{\{highlight\}\}/g, '<span class="text-gold">').replace(/\{\{\/highlight\}\}/g, '</span>')
              }}
            />

            <div
              className={`w-20 h-1 bg-gold mb-8 transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-flow)', transitionDelay: '300ms', transformOrigin: 'left' }}
            />

            <div className="space-y-6">
              {['paragraph1', 'paragraph2', 'paragraph3'].map((key, index) => (
                <p
                  key={key}
                  className={`text-[#666] leading-relaxed transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionTimingFunction: 'var(--ease-settle)', transitionDelay: `${400 + index * 100}ms` }}
                >
                  {t(`training.${key}`)}
                </p>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className={`relative transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-dramatic)', transitionDelay: '300ms' }}
            >
              <div
                className="relative overflow-hidden bg-gradient-to-br from-[#e8d5b7] to-[#d4c4a8]"
                style={{
                  clipPath: isVisible
                    ? 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)'
                    : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
                  transition: 'clip-path 800ms var(--ease-dramatic) 300ms',
                  aspectRatio: '3/4',
                }}
              >
                {/* Placeholder for real photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
                      <span className="text-4xl">🙏</span>
                    </div>
                    <p className="text-[#666] text-sm">{t('training.title').replace(/<[^>]*>/g, '')}</p>
                    <p className="text-[#999] text-xs mt-2">Add your photo here:<br/>/public/training.jpg</p>
                  </div>
                </div>
              </div>
              <div
                className={`absolute -bottom-4 -left-4 w-24 h-24 border border-[#c9a227]/30 transition-all duration-600 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-sacred)', transitionDelay: '800ms' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Yoga Section
function YogaSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div
              className={`relative transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-dramatic)', transitionDelay: '300ms' }}
            >
              <div
                className="relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#c5d5e5] to-[#a8c4d9]"
                style={{
                  perspective: '1000px',
                  transform: isVisible ? 'rotateY(2deg)' : 'rotateY(15deg)',
                  aspectRatio: '3/4',
                }}
              >
                {/* Placeholder for real photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
                      <span className="text-4xl">🧘</span>
                    </div>
                    <p className="text-[#666] text-sm">Meditation Practice</p>
                    <p className="text-[#999] text-xs mt-2">Add your photo here:<br/>/public/meditation.jpg</p>
                  </div>
                </div>
              </div>
              <div
                className={`absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#c9a227]/40 transition-all duration-600 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-sacred)', transitionDelay: '700ms' }}
              />
            </div>
          </div>

          <div>
            <h2
              className={`font-heading text-3xl sm:text-4xl lg:text-[42px] text-[#333] mb-8 leading-tight transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-sacred)', transitionDelay: '100ms' }}
              dangerouslySetInnerHTML={{
                __html: t('yoga.title')
                  .replace(/\{\{highlight1\}\}/g, '<span class="text-gold">')
                  .replace(/\{\{\/highlight1\}\}/g, '</span>')
                  .replace(/\{\{highlight2\}\}/g, '<span class="text-gold">')
                  .replace(/\{\{\/highlight2\}\}/g, '</span>')
              }}
            />

            <div
              className={`w-20 h-1 bg-gold mb-8 transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-flow)', transitionDelay: '300ms', transformOrigin: 'left' }}
            />

            <div className="space-y-6">
              {['paragraph1', 'paragraph2'].map((key, index) => (
                <p
                  key={key}
                  className={`text-[#666] leading-relaxed transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionTimingFunction: 'var(--ease-settle)', transitionDelay: `${400 + index * 100}ms` }}
                >
                  {t(`yoga.${key}`)}
                </p>
              ))}
            </div>

            <div
              className={`mt-10 quote-card p-6 sm:p-8 rounded-r-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-ascend)', transitionDelay: '600ms' }}
            >
              <p className="text-sm text-[#666] mb-4 italic">{t('yoga.quoteIntro')}</p>
              <p className="font-heading text-2xl sm:text-3xl text-gold mb-4">{t('yoga.sanskritQuote')}</p>
              <blockquote className="text-[#555] leading-relaxed">
                {t('yoga.quoteTranslation')}
                <cite className="block mt-2 text-sm text-[#888] not-italic">{t('yoga.quoteSource')}</cite>
              </blockquote>
            </div>

            <p
              className={`mt-8 text-[#666] leading-relaxed transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-settle)', transitionDelay: '700ms' }}
            >
              {t('yoga.closingText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Yagya Section
function YagyaSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2
              className={`font-heading text-3xl sm:text-4xl lg:text-[42px] text-[#333] mb-8 leading-tight transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-sacred)', transitionDelay: '100ms' }}
              dangerouslySetInnerHTML={{
                __html: t('yagya.title').replace(/\{\{highlight\}\}/g, '<span class="text-gold">').replace(/\{\{\/highlight\}\}/g, '</span>')
              }}
            />

            <div
              className={`w-20 h-1 bg-gold mb-8 transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-flow)', transitionDelay: '300ms', transformOrigin: 'left' }}
            />

            <div className="space-y-6">
              {['paragraph1', 'paragraph2', 'paragraph3'].map((key, index) => (
                <p
                  key={key}
                  className={`text-[#666] leading-relaxed transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionTimingFunction: 'var(--ease-settle)', transitionDelay: `${400 + index * 100}ms` }}
                >
                  {t(`yagya.${key}`)}
                </p>
              ))}
              <p
                className={`text-[#666] leading-relaxed transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-settle)', transitionDelay: '700ms' }}
                dangerouslySetInnerHTML={{
                  __html: t('yagya.paragraph4', { panditsCount: siteConfig.stats.dailyPandits })
                }}
              />
            </div>

            <div
              className={`mt-10 flex items-center space-x-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-ascend)', transitionDelay: '800ms' }}
            >
              <div className="text-center">
                <span className="block font-heading text-5xl sm:text-6xl text-gold font-medium">
                  {siteConfig.stats.dailyPandits.toLocaleString()}
                </span>
                <span className="text-sm text-[#666] uppercase tracking-wider">{t('yagya.stat1')}</span>
              </div>
              <div className="h-16 w-px bg-[#c9a227]/30" />
              <div className="text-center">
                <span className="block font-heading text-5xl sm:text-6xl text-gold font-medium">
                  {siteConfig.stats.trainingYears}
                </span>
                <span className="text-sm text-[#666] uppercase tracking-wider">{t('yagya.stat2')}</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className={`relative transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-dramatic)', transitionDelay: '300ms' }}
            >
              <div
                className="relative overflow-hidden bg-gradient-to-br from-[#d4a574] to-[#b8834f]"
                style={{
                  clipPath: isVisible
                    ? 'polygon(0% 0, 100% 0, 100% 100%, 10% 100%)'
                    : 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)',
                  transition: 'clip-path 800ms var(--ease-dramatic) 300ms',
                  aspectRatio: '3/4',
                }}
              >
                {/* Placeholder for real photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#c9a227]/30 flex items-center justify-center">
                      <span className="text-4xl">🔥</span>
                    </div>
                    <p className="text-[#333] text-sm">Yagya Ceremony</p>
                    <p className="text-[#555] text-xs mt-2">Add your photo here:<br/>/public/yagya.jpg</p>
                  </div>
                </div>
              </div>
              <div
                className={`absolute -bottom-4 -right-4 w-24 h-24 border border-[#c9a227]/30 transition-all duration-600 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-sacred)', transitionDelay: '800ms' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Media Section
function MediaSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-[#1a1a1a] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-4 uppercase tracking-wider transition-all duration-600 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-sacred)', transitionDelay: '200ms' }}
          >
            {t('media.title')}
          </h2>
          <div
            className={`flex items-center justify-center transition-all duration-600 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-flow)', transitionDelay: '400ms' }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c9a227]" />
            <Volume2 className="w-5 h-5 text-[#c9a227] mx-4" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c9a227]" />
          </div>
        </div>

        <p
          className={`text-center text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-settle)', transitionDelay: '500ms' }}
        >
          {t('media.description')}
        </p>

        <div
          className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-dramatic)', transitionDelay: '600ms' }}
        >
          <div
            className="relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-400 hover:-translate-y-1"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
          >
            <div className="relative aspect-video bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]">
              {!isPlaying ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#c9a227]/90 flex items-center justify-center pulse-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c9a227]">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="white" />
                    </div>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/60 text-sm uppercase tracking-wider mb-2">{t('media.featuredVideo')}</p>
                    <h3 className="text-white text-xl sm:text-2xl font-heading">{t('media.videoTitle')}</h3>
                  </div>
                </>
              ) : (
                <iframe
                  src={siteConfig.videos.mainVideo}
                  title="Maharishi Vedic Pandits"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>

        <div
          className={`mt-12 flex flex-wrap justify-center gap-4 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-settle)', transitionDelay: '1000ms' }}
        >
          <a
            href={siteConfig.videos.playlist}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 border border-white/20 rounded-full text-white/80 hover:text-white hover:border-[#c9a227] hover:bg-[#c9a227]/10 transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="text-sm font-medium">{t('media.moreVideos')}</span>
          </a>
          <a
            href="#gallery"
            className="flex items-center space-x-2 px-6 py-3 border border-white/20 rounded-full text-white/80 hover:text-white hover:border-[#c9a227] hover:bg-[#c9a227]/10 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">{t('media.photoGallery')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Main Home Page
export default function Home() {
  return (
    <>
      <HeroSection />
      <TrainingSection />
      <YogaSection />
      <YagyaSection />
      <MediaSection />
    </>
  );
}

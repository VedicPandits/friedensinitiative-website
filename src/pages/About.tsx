import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, FileText, ShieldCheck, Download } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export default function About() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timelineItems = [
    {
      year: '1918',
      title: t('about.earlyLife'),
      description: t('about.earlyLifeText'),
    },
    {
      year: '1955',
      title: t('about.teaching'),
      description: t('about.teachingText'),
    },
    {
      year: '1960s+',
      title: t('about.vedicScience'),
      description: t('about.vedicScienceText'),
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#1a3a2a] via-[#2d5a45] to-[#1a3a2a] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            {t('about.title')}
          </h1>
          <p className="text-white/80 text-lg sm:text-xl">{t('about.subtitle')}</p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div
            className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-sacred)' }}
          >
            <p className="text-xl text-[#666] leading-relaxed">{t('about.intro')}</p>
          </div>

          {/* Photo Placeholder */}
          <div
            className={`relative max-w-md mx-auto mb-20 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-dramatic)', transitionDelay: '200ms' }}
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-[#e8d5b7] to-[#d4c4a8] rounded-lg shadow-xl overflow-hidden">
              {/* Placeholder for Maharishi photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
                    <span className="text-5xl">🙏</span>
                  </div>
                  <p className="text-[#666] font-heading text-xl mb-2">Maharishi Mahesh Yogi</p>
                  <p className="text-[#999] text-sm">1918 - 2008</p>
                  <p className="text-[#999] text-xs mt-4">Add your photo here:<br/>/public/maharishi.jpg</p>
                </div>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#c9a227]/30 rounded-lg -z-10" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[#c9a227]/30 hidden lg:block" />

            <div className="space-y-16">
              {timelineItems.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative transition-all duration-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-sacred)',
                    transitionDelay: `${400 + index * 150}ms`,
                  }}
                >
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Year - Always on left on mobile, alternating on desktop */}
                    <div className={`mb-4 lg:mb-0 ${index % 2 === 0 ? 'lg:text-right' : 'lg:order-2 lg:text-left'}`}>
                      <span className="inline-block px-6 py-2 bg-gold text-white font-heading text-2xl rounded-full">
                        {item.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 0 ? '' : 'lg:order-1'}>
                      <h3 className="font-heading text-2xl sm:text-3xl text-[#333] mb-4">{item.title}</h3>
                      <p className="text-[#666] leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-md" />
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div
            className={`mt-24 max-w-3xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-ascend)', transitionDelay: '900ms' }}
          >
            <div className="quote-card p-8 sm:p-12 rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-6 text-gold">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <blockquote className="font-heading text-2xl sm:text-3xl text-[#333] mb-6 italic">
                "The goal of the Transcendental Meditation technique is the state of enlightenment. 
                This means we experience that inner calmness, that quiet state of least excitation, 
                even when we are dynamically busy."
              </blockquote>
              <cite className="text-gold font-medium not-italic">— Maharishi Mahesh Yogi</cite>
            </div>
          </div>

          {/* Swiss Initiative Section */}
          <div
            className={`mt-24 max-w-4xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-sacred)', transitionDelay: '1000ms' }}
          >
            <div className="bg-gradient-to-br from-[#1a3a2a] to-[#2d5a45] rounded-xl shadow-xl p-8 sm:p-12 text-white">
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl sm:text-4xl text-white mb-3">
                  {t('about.swissTitle')}
                </h2>
                <p className="text-white/70 text-lg">{t('about.swissSubtitle')}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* Founding */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#c9a227]/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <p className="text-white/90 leading-relaxed text-sm">
                    {t('about.swissFounding')}
                  </p>
                </div>

                {/* Legal form */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#c9a227]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <p className="text-white/90 leading-relaxed text-sm">
                    {t('about.swissLegal')}
                  </p>
                </div>

                {/* Tax exemption */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#c9a227]/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <p className="text-white/90 leading-relaxed text-sm">
                    {t('about.swissTax')}
                  </p>
                </div>

                {/* UID */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#c9a227]/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <p className="text-white/90 leading-relaxed text-sm font-medium">
                    {t('about.swissUid')}
                  </p>
                </div>
              </div>

              {/* Documents (Statuten PDF link) */}
              {siteConfig.organization.statutesPdf && (
                <div className="mt-10 pt-8 border-t border-white/20 text-center">
                  <h3 className="font-heading text-lg text-white mb-4">
                    {t('about.swissDocsTitle')}
                  </h3>
                  <a
                    href={siteConfig.organization.statutesPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-3 bg-[#c9a227] text-white text-sm font-medium rounded hover:bg-[#b8921f] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t('about.swissDocsStatutes')}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

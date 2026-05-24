import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Users, Globe, Sparkles, Gift } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export default function Donate() {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const widgetContainerRef = useRef<HTMLDivElement>(null);

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

  // Load DonorBox widget script
  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = siteConfig.donorbox.scriptSrc;
      script.async = true;
      document.body.appendChild(script);
      scriptRef.current = script;
      setScriptLoaded(true);

      return () => {
        if (scriptRef.current && document.body.contains(scriptRef.current)) {
          document.body.removeChild(scriptRef.current);
        }
      };
    }
  }, [scriptLoaded]);

  // Create / re-create the DonorBox widget imperatively inside our container.
  // Runs whenever the script finishes loading, or the language changes.
  // We do NOT use JSX for the <dbox-widget> custom element because that path
  // triggers a crash inside DonorBox's widgets.js (NotSupportedError on
  // createElement). Building the element by hand with setAttribute works.
  useEffect(() => {
    if (!scriptLoaded) return;
    const container = widgetContainerRef.current;
    if (!container) return;

    // Clear any existing widget
    container.innerHTML = '';

    const lang = i18n.language as keyof typeof siteConfig.donorbox.campaigns;
    const campaign = siteConfig.donorbox.campaigns[lang] || siteConfig.donorbox.campaigns.en;

    const widget = document.createElement('dbox-widget');
    widget.setAttribute('campaign', campaign);
    widget.setAttribute('type', 'donation_form');
    widget.setAttribute('enable-auto-scroll', 'true');
    container.appendChild(widget);
  }, [scriptLoaded, i18n.language]);

  const impactItems = [
    {
      icon: Heart,
      title: t('donate.whyDonate'),
      description: t('donate.whyDonateText'),
    },
    {
      icon: Users,
      title: t('donate.howUsed'),
      description: t('donate.howUsedText'),
    },
    {
      icon: Globe,
      title: t('donate.globalImpact'),
      description: t('donate.globalImpactText'),
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
          <Sparkles className="w-12 h-12 text-[#c9a227] mx-auto mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            {t('donate.title')}
          </h1>
          <p className="text-white/80 text-lg sm:text-xl">{t('donate.subtitle')}</p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div
            className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-sacred)' }}
          >
            <p className="text-xl text-[#666] leading-relaxed italic mb-6">{t('donate.intro')}</p>
            <p className="text-base text-[#555] leading-relaxed mb-4">{t('donate.introParagraph1')}</p>
            <p className="text-base text-[#555] leading-relaxed">{t('donate.introParagraph2')}</p>
          </div>

          {/* Impact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {impactItems.map((item, index) => (
              <div
                key={item.title}
                className={`bg-[#f5f5f5] rounded-xl p-8 text-center transition-all duration-600 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-sacred)',
                  transitionDelay: `${200 + index * 100}ms`,
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading text-xl text-[#333] mb-4">{item.title}</h3>
                <p className="text-[#666] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* DonorBox Widget Section */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Info */}
            <div
              className={`lg:col-span-1 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-dramatic)', transitionDelay: '500ms' }}
            >
              {/* One-Time Donation Info */}
              <div className="bg-gradient-to-br from-[#1a3a2a] to-[#2d5a45] rounded-xl shadow-xl overflow-hidden text-white mb-8">
                <div className="p-8">
                  <Gift className="w-10 h-10 text-[#c9a227] mb-6" />
                  <h3 className="font-heading text-2xl mb-4">{t('donate.oneTime')}</h3>
                  <p className="text-white/80 mb-6">{t('donate.oneTimeText')}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] text-xs font-bold">1</div>
                      <span className="text-white/90 text-sm">{t('donate.oneTimeBullet1')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] text-xs font-bold">2</div>
                      <span className="text-white/90 text-sm">{t('donate.oneTimeBullet2')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] text-xs font-bold">3</div>
                      <span className="text-white/90 text-sm">{t('donate.oneTimeBullet3')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Donation Info */}
              <div className="bg-[#f5f5f5] rounded-xl p-8 mb-8">
                <Heart className="w-10 h-10 text-gold mb-6" />
                <h3 className="font-heading text-2xl text-[#333] mb-4">{t('donate.monthly')}</h3>
                <p className="text-[#666] mb-6">{t('donate.monthlyText')}</p>
                
                <ul className="space-y-3 text-[#666]">
                  <li className="flex items-start space-x-3">
                    <span className="text-gold mt-1">•</span>
                    <span>{t('donate.monthlyBullet1')}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gold mt-1">•</span>
                    <span>{t('donate.monthlyBullet2')}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gold mt-1">•</span>
                    <span>{t('donate.monthlyBullet3')}</span>
                  </li>
                </ul>
              </div>

              {/* Bank transfer block */}
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h4 className="font-heading text-lg text-[#333] mb-2">{t('donate.bankTitle')}</h4>
                <p className="text-[#666] text-sm leading-relaxed mb-5">{t('donate.bankIntro')}</p>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <dl className="space-y-2 text-sm">
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <dt className="text-[#888] sm:w-32 flex-shrink-0">{t('donate.bankHolderLabel')}</dt>
                        <dd className="text-[#333] font-medium">{t('donate.bankHolderValue')}</dd>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <dt className="text-[#888] sm:w-32 flex-shrink-0">{t('donate.bankIbanLabel')}</dt>
                        <dd className="text-[#333] font-mono font-semibold tracking-wide break-all">{siteConfig.bank?.iban ?? 'CH82 0900 0000 8547 9574 7'}</dd>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <dt className="text-[#888] sm:w-32 flex-shrink-0">{t('donate.bankBicLabel')}</dt>
                        <dd className="text-[#333] font-mono">{siteConfig.bank?.bic ?? 'POFICHBEXXX'}</dd>
                      </div>
                    </dl>
                  </div>
                  {siteConfig.bank?.qrImage && (
                    <div className="flex-shrink-0 flex flex-col items-center md:items-end">
                      <img
                        src={siteConfig.bank.qrImage}
                        alt="Swiss QR-Bill"
                        className="w-40 h-40 rounded border border-gray-200 bg-white"
                      />
                    </div>
                  )}
                </div>
                {siteConfig.bank?.qrImage && (
                  <p className="mt-5 pt-5 border-t border-gray-100 text-xs text-[#666] leading-relaxed">
                    {t('donate.bankQrHint')}
                  </p>
                )}
              </div>

              {/* TWINT block - shown if a QR image is configured */}
              {siteConfig.twint?.qrImage && (
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h4 className="font-heading text-lg text-[#333] mb-2">{t('donate.twintTitle')}</h4>
                  <p className="text-[#666] text-sm leading-relaxed mb-5">{t('donate.twintIntro')}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <img
                      src={siteConfig.twint.qrImage}
                      alt="TWINT QR Code"
                      className="w-40 h-40 flex-shrink-0 rounded border border-gray-200"
                    />
                    <ol className="text-sm text-[#555] space-y-3 leading-relaxed list-none">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/15 text-gold text-xs font-bold flex items-center justify-center">1</span>
                        <span>{t('donate.twintStep1')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/15 text-gold text-xs font-bold flex items-center justify-center">2</span>
                        <span>{t('donate.twintStep2')}</span>
                      </li>
                    </ol>
                  </div>
                  {(() => {
                    const lang = i18n.language as 'en' | 'de' | 'fr';
                    const urls = siteConfig.twint?.raiseNowUrls;
                    const fallbackUrl = urls?.[lang] || urls?.en;
                    return fallbackUrl ? (
                      <div className="mt-5 pt-5 border-t border-gray-100">
                        <a
                          href={fallbackUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gold hover:underline"
                        >
                          {t('donate.twintFallback')} →
                        </a>
                      </div>
                    ) : null;
                  })()}
                </div>
              )}

              {/* Volunteer note + donation email */}
              <div className="bg-[#f5efe2] border border-[#c9a227]/30 rounded-xl p-6 text-sm text-[#555] leading-relaxed">
                <p className="mb-3">{t('donate.volunteersNote')}</p>
                {siteConfig.donationEmail && (
                  <p>
                    <a
                      href={`mailto:${siteConfig.donationEmail}`}
                      className="text-gold hover:underline font-medium"
                    >
                      {siteConfig.donationEmail}
                    </a>
                  </p>
                )}
              </div>
            </div>

            {/* Right Column - DonorBox Widget */}
            <div
              className={`lg:col-span-2 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-dramatic)', transitionDelay: '600ms' }}
            >
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6 bg-gold text-white text-center">
                  <h3 className="font-heading text-2xl mb-2">
                    {t('donate.widgetTitle')}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {t('donate.widgetSubtitle')}
                  </p>
                </div>
                <div className="p-6">
                  {/* DonorBox Widget container - widget is created imperatively
                      (see useEffect below) because React's JSX rendering of
                      this custom element triggers a crash inside widgets.js. */}
                  <div ref={widgetContainerRef} />

                  {/* Fallback while script loads */}
                  {!scriptLoaded && (
                    <div className="flex items-center justify-center py-12">
                      <div className="text-center">
                        <svg className="animate-spin h-8 w-8 text-gold mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="text-[#666]">Loading donation form...</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Tax Information */}
              <div className="mt-8 p-6 bg-[#f5f5f5] rounded-xl text-center">
                <p className="text-[#666] text-sm">
                  {t('donate.taxNote', {
                    orgName: siteConfig.organization.name,
                    orgDescription: siteConfig.organization.description,
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

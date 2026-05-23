import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export default function Contact() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (siteConfig.contactForm.provider === 'formspree') {
        const response = await fetch(siteConfig.contactForm.formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormState({ name: '', email: '', subject: '', message: '' });
        } else {
          setSubmitStatus('error');
        }
      } else if (siteConfig.contactForm.useNetlifyForms) {
        // Netlify Forms handling
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData as any).toString(),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormState({ name: '', email: '', subject: '', message: '' });
        } else {
          setSubmitStatus('error');
        }
      } else {
        // For demo purposes, simulate success
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    ...(siteConfig.contact.phone ? [{
      icon: Phone,
      label: t('contact.info.phone'),
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone}`,
    }] : []),
    ...(siteConfig.contact.address ? [{
      icon: MapPin,
      label: t('contact.info.address'),
      value: siteConfig.contact.address,
      href: null, // Address is not a clickable link
    }] : []),
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
          <Mail className="w-12 h-12 text-[#c9a227] mx-auto mb-6" />
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-white/80 text-lg sm:text-xl">{t('contact.subtitle')}</p>
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
            <p className="text-xl text-[#666] leading-relaxed">{t('contact.intro')}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div
              className={`lg:col-span-2 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-dramatic)', transitionDelay: '200ms' }}
            >
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8">
                <h2 className="font-heading text-2xl text-[#333] mb-6">{t('contact.form.send')}</h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-700">{t('contact.form.success')}</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-700">{t('contact.form.error')}</span>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  {...(siteConfig.contactForm.useNetlifyForms ? { 'data-netlify': 'true', name: 'contact' } : {})}
                >
                  {siteConfig.contactForm.useNetlifyForms && (
                    <input type="hidden" name="form-name" value="contact" />
                  )}

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#333] mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all duration-300 outline-none"
                        placeholder={t('contact.form.name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#333] mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all duration-300 outline-none"
                        placeholder={t('contact.form.email')}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-[#333] mb-2">
                      {t('contact.form.subject')} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all duration-300 outline-none bg-white"
                    >
                      <option value="">{t('contact.subjectOptions.placeholder')}</option>
                      <option value="general">{t('contact.subjectOptions.general')}</option>
                      <option value="donation">{t('contact.subjectOptions.donation')}</option>
                      <option value="volunteer">{t('contact.subjectOptions.volunteer')}</option>
                      <option value="media">{t('contact.subjectOptions.media')}</option>
                      <option value="other">{t('contact.subjectOptions.other')}</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-[#333] mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all duration-300 outline-none resize-none"
                      placeholder={t('contact.form.message')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-[#b8921f] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t('contact.form.send')}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-dramatic)', transitionDelay: '400ms' }}
            >
              <div className="bg-gradient-to-br from-[#1a3a2a] to-[#2d5a45] rounded-xl shadow-xl p-8 text-white">
                <h2 className="font-heading text-2xl text-white mb-8">{t('contact.info.title')}</h2>

                <div className="space-y-6">
                  {contactInfo.map((item) => {
                    const Inner = (
                      <>
                        <div className="w-12 h-12 rounded-full bg-[#c9a227]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a227]/30 transition-colors duration-300">
                          <item.icon className="w-5 h-5 text-[#c9a227]" />
                        </div>
                        <div>
                          <p className="text-white/60 text-sm mb-1">{item.label}</p>
                          <p className="text-white group-hover:text-[#c9a227] transition-colors duration-300 whitespace-pre-line">{item.value}</p>
                        </div>
                      </>
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-start space-x-4 group"
                      >
                        {Inner}
                      </a>
                    ) : (
                      <div
                        key={item.label}
                        className="flex items-start space-x-4 group"
                      >
                        {Inner}
                      </div>
                    );
                  })}
                </div>

                {/* Office Hours */}
                {siteConfig.contact.showOfficeHours && (
                  <div className="mt-10 pt-8 border-t border-white/20">
                    <h3 className="font-heading text-lg text-white mb-4">{t('contact.officeHours.title')}</h3>
                    <div className="space-y-2 text-white/80">
                      <p>{t('contact.officeHours.line1')}</p>
                      <p>{t('contact.officeHours.line2')}</p>
                    </div>
                  </div>
                )}

                {/* Response Time */}
                <div className="mt-8 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm text-white/80">
                    {t('contact.responseTime')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * SITE CONFIGURATION FILE
 * 
 * Edit this file to customize your website content
 * All changes will be reflected across the site
 */

export const siteConfig = {
  // Basic Site Info
  siteName: 'Maharishi Vedic Pandits',
  siteTagline: 'Peace-Creating Group',
  
  // Contact Information - EDIT THESE
  contact: {
    email: 'info@friedensinitiative.ch',
    phone: '+41 44 260 44 72',
    // Postal address is shown in two visual styles: organization name bold,
    // address line(s) normal weight underneath.
    organizationName: 'Globale Friedensinitiative Schweiz',
    addressLine: '4000 Basel',
    showOfficeHours: false, // Set to true to show the office hours block
  },
  
  // Social Media Links - EDIT THESE
  social: {
    youtube: 'https://www.youtube.com/watch?v=0VqiaQaG4uI&list=PLd2VIS0aIdOMSmmH-3Xvx3i3X3ma95SS8',
    facebook: 'https://www.facebook.com/VedicPandits',
    twitter: 'https://twitter.com/GlobalPeaceIni',
    instagram: '', // Optional
  },
  
  // DonorBox Configuration - EDIT THESE
  // Each language has its own DonorBox campaign
  donorbox: {
    // Widget script URL (same for all languages)
    scriptSrc: 'https://donorbox.org/widgets.js',
    
    // Campaign IDs per language
    campaigns: {
      en: 'peaceinitiative',           // English campaign
      de: 'friedensinitiative',        // German campaign
      fr: 'initiative-mondiale-de-paix', // French campaign
    },
  },

  // Bank Transfer (PostFinance)
  // Note: 'holder' here is a fallback; the actual displayed name comes
  // from i18n (donate.bankHolderValue) so it can be localized correctly.
  bank: {
    holder: 'Globale Friedensinitiative Schweiz, 4000 Basel',
    iban: 'CH82 0900 0000 8547 9574 7',
    bic: 'POFICHBEXXX',
    // Swiss QR-Bill (QR-Rechnung) image path. Donors can scan this with any
    // Swiss banking app and the payment form is pre-filled automatically.
    // Empty string hides the QR. Generate a new one if the address changes:
    // e.g. via your PostFinance banking or https://qr-rechnung-generator.ch
    qrImage: '/images/swiss-qr.png',
  },

  // TWINT donation (via RaiseNow)
  // The QR code contains a TWINT-pairing code (NOT a URL), so it must be
  // scanned with the TWINT app. The RaiseNow URLs below are a fallback for
  // desktop users who can't scan: they open a RaiseNow web donation page.
  twint: {
    // QR code image path. Empty string hides the TWINT block.
    qrImage: '/images/twint-qr.png',
    // Per-language RaiseNow web donation page (used as fallback link).
    // Leave a language empty to hide the fallback link for that language.
    raiseNowUrls: {
      en: 'https://donate.raisenow.io/pxmbx?lng=en',
      de: 'https://donate.raisenow.io/pxmbx?lng=de',
      fr: 'https://donate.raisenow.io/pxmbx?lng=fr',
    },
  },

  // Donation-specific email shown on the donate page
  donationEmail: 'spenden@friedensinitiative.ch',
  
  // Contact Form Configuration
  contactForm: {
    // Options: 'formspree', 'netlify', 'emailjs', or 'custom'
    // For Formspree: https://formspree.io/
    // For Netlify Forms: https://docs.netlify.com/forms/setup/
    provider: 'netlify',

    // Your Formspree endpoint (only used if provider === 'formspree')
    formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',

    // Netlify Forms enabled
    useNetlifyForms: true,
  },
  
  // Organization Info
  // The official multi-language name is set per language; the website picks
  // the right form via i18n. The 'name' below is the fallback / canonical
  // name shown e.g. in addresses or when no language context is available.
  // Per Vereinsstatuten (Art. 60 ff. ZGB, Sitz Basel) gibt es vier
  // amtliche Namensvarianten: DE, FR, IT, RM, EN.
  organization: {
    name: 'Globale Friedensinitiative Schweiz',
    // Other official names from the statutes (not currently displayed,
    // kept here for reference and future use):
    //   FR: 'Initiative mondiale de Paix - Suisse'
    //   IT: 'Iniziativa Mondiale di Pace - Svizzera'
    //   RM: 'Iniziativa Mundiala da Pasch - Svizra'
    //   EN: 'Global Peace Initiative Switzerland'
    description: 'ein gemeinnütziger Verein nach Schweizer Recht',
    foundedYear: 2012,
    uid: 'CHE-142.469.811',
    // Path to statutes PDF relative to /public.
    // If the file does not exist, the link is automatically hidden.
    // To activate: upload your PDF as public/documents/statuten.pdf
    statutesPdf: '/documents/statuten.pdf',
  },
  
  // Statistics (shown on the site)
  stats: {
    dailyPandits: 1331,
    trainingYears: '10-20',
  },
  
  // Video URLs
  videos: {
    mainVideo: 'https://www.youtube.com/embed/ZQOxpwHk0fQ',
    playlist: 'https://www.youtube.com/watch?v=0VqiaQaG4uI&list=PLd2VIS0aIdOMSmmH-3Xvx3i3X3ma95SS8',
  },
  
  // SEO & Meta
  seo: {
    title: 'Maharishi Vedic Pandits - Peace-Creating Group',
    description: 'Creating peace for the world through the timeless Vedic traditions of India. Support the Maharishi Vedic Pandits program.',
    keywords: 'Maharishi, Vedic Pandits, Transcendental Meditation, TM, Yagya, World Peace, Vedic Tradition',
    image: '/images/og-image.jpg', // Social sharing image
  },
  
  // Languages available
  languages: [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ],
  
  // Navigation Links
  navigation: [
    { label: 'nav.home', href: '/' },
    { label: 'nav.about', href: '/about' },
    { label: 'nav.donate', href: '/donate' },
    { label: 'nav.contact', href: '/contact' },
  ],
};

export default siteConfig;

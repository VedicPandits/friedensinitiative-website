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
    address: 'Globale Friedensinitiative Schweiz\n4000 Basel',
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
  
  // Contact Form Configuration
  contactForm: {
    // Options: 'formspree', 'netlify', 'emailjs', or 'custom'
    // For Formspree: https://formspree.io/
    // For Netlify Forms: https://docs.netlify.com/forms/setup/
    provider: 'formspree',
    
    // Your Formspree endpoint (if using Formspree)
    // Example: 'https://formspree.io/f/YOUR_FORM_ID'
    formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
    
    // Or use Netlify Forms (set to true if hosting on Netlify)
    useNetlifyForms: false,
  },
  
  // Organization Info
  organization: {
    name: 'Brahmananda Saraswati Foundation',
    description: 'a non-profit organization',
    foundedYear: 1995,
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

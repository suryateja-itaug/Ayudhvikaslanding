import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FAQ_ITEMS } from '../data/mockData';

interface SEOProps {
  activeTab: string;
}

export const SEO: React.FC<SEOProps> = ({ activeTab }) => {
  const getSEOData = (tab: string) => {
    switch (tab) {
      case 'services':
        return {
          title: 'Security Guards & Facility Management Services | Hanamkonda, Warangal, Kazipet',
          description: 'Explore security guards, corporate staffing, deep cleaning, and facility management in Hanamkonda, Warangal, and Kazipet.',
          keywords: 'security guard services warangal, corporate staffing hanamkonda, deep cleaning warangal, facility management warangal',
          canonical: 'https://ayudhvikas.com/#services',
        };
      case 'ayudhklin-products':
        return {
          title: 'AYUDHKLIN - Deep Cleaning & Hygiene Solutions in Hanamkonda, Warangal, Kazipet',
          description: 'Professional deep cleaning services for homes, offices, hospitals, and commercial complexes in Hanamkonda, Warangal & Kazipet. Sanitization, carpet cleaning, & floor scrubbing.',
          keywords: 'deep cleaning warangal, house cleaning hanamkonda, office deep cleaning kazipet, sanitization services warangal, commercial deep cleaning telangana',
          canonical: 'https://ayudhvikas.com/#ayudhklin-products',
        };
      case 'why-us':
        return {
          title: 'Why Choose Ayudh Vikas | Security Agency',
          description: 'Why enterprise leaders trust Ayudh Vikas Manpower Solutions: 100% statutory compliant, 24/7 supervisor response, police verified manpower in Hanamkonda, Warangal, Kazipet.',
          keywords: 'licensed security agency warangal, top security agency kazipet, verified manpower solutions telangana',
          canonical: 'https://ayudhvikas.com/#why-us',
        };
      case 'faq':
        return {
          title: 'Security & Deep Cleaning FAQs | Ayudh Vikas Manpower Solutions',
          description: 'Get clear answers on security guard deployment SLAs, police verification procedures, deep cleaning pricing, and statutory compliance in Hanamkonda, Warangal, Kazipet.',
          keywords: 'security guard deployment faq, deep cleaning price warangal, security agency questions hanamkonda',
          canonical: 'https://ayudhvikas.com/#faq',
        };
      case 'contact':
        return {
          title: 'Contact Ayudh Vikas | Command HQ in Warangal, Hanamkonda & Kazipet',
          description: 'Contact Ayudh Vikas Manpower Solutions central command desk. KM Complex, Hunter Road, Warangal. Call +91 9000045073 or WhatsApp for instant 24/7 security & cleaning quotes.',
          keywords: 'ayudh vikas phone number, security guard office warangal, contact security agency hanamkonda, deep cleaning contact kazipet',
          canonical: 'https://ayudhvikas.com/#contact',
        };
      case 'av-ride':
        return {
          title: 'AV Ride Coming Soon | Ayudh Vikas Ride Booking',
          description: 'AV Ride by Ayudh Vikas is a coming-soon ride booking template for managed local travel, staff commute, and guest pickup requests.',
          keywords: 'av ride, ayudh vikas ride booking, warangal ride booking, staff commute booking',
          canonical: 'https://ayudhvikas.com/#av-ride',
        };
      case 'av-food':
        return {
          title: 'AV Food Coming Soon | Ayudh Vikas Food Ordering',
          description: 'AV Food by Ayudh Vikas is a coming-soon food ordering template for office meals, catering orders, and scheduled delivery.',
          keywords: 'av food, ayudh vikas food ordering, office meals warangal, catering order template',
          canonical: 'https://ayudhvikas.com/#av-food',
        };
      case 'home':
      default:
        return {
          title: 'Ayudh Vikas Manpower Solutions | #1 Security Guards & Deep Cleaning in Hanamkonda, Warangal, Kazipet',
          description: 'Ayudh Vikas Manpower Solutions provides security guards, facility support, and AYUDHKLIN professional deep cleaning in Hanamkonda, Warangal, and Kazipet. Call +91 9000045073.',
          keywords: 'security guards in warangal, deep cleaning hanamkonda, security agency kazipet, manpower agency warangal, ayudh vikas manpower solutions, house cleaning kazipet',
          canonical: 'https://ayudhvikas.com/',
        };
    }
  };

  const seo = getSEOData(activeTab);

  // FAQ Schema JSON-LD structure for Search Engine Rich Snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQ_ITEMS.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://ayudhvikas.com/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': activeTab.charAt(0).toUpperCase() + activeTab.slice(1),
        'item': seo.canonical
      }
    ]
  };

  return (
    <Helmet>
      {/* Title & Meta Tags */}
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={seo.canonical} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonical} />

      {/* Twitter Cards */}
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      {activeTab === 'faq' && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
    </Helmet>
  );
};

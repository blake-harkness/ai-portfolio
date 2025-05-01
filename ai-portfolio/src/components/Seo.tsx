import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
  keywords?: string;
}

const defaultKeywords = "AI New Zealand, Christchurch AI, Auckland AI, Wellington AI, NZ AI Solutions";

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = '/blake_photo.jpg',
  jsonLd,
  keywords = defaultKeywords,
}) => {
  // Ensure title is under 60 chars
  const formattedTitle = `${title} | Harkness AI - New Zealand`.substring(0, 60);
  
  // Ensure description is under 155 chars
  const formattedDescription = description.substring(0, 155);
  
  // Format JSON-LD
  const jsonLdString = jsonLd 
    ? JSON.stringify(jsonLd)
    : JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Harkness AI",
        "url": "https://www.harknessai.nz",
        "logo": "https://www.harknessai.nz/harkness-ai-favicon.svg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "",
          "contactType": "customer service",
          "areaServed": ["New Zealand", "Christchurch", "Auckland", "Wellington"],
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Christchurch",
          "addressRegion": "Canterbury",
          "addressCountry": "New Zealand"
        }
      });

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={formattedDescription} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical Link */}
      {canonical && (
        <link rel="canonical" href={`https://www.harknessai.nz${canonical}`} />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={formattedDescription} />
      {canonical && (
        <meta property="og:url" content={`https://www.harknessai.nz${canonical}`} />
      )}
      <meta property="og:image" content={`https://www.harknessai.nz${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={formattedDescription} />
      <meta name="twitter:image" content={`https://www.harknessai.nz${ogImage}`} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{jsonLdString}</script>
    </Helmet>
  );
};

export default Seo; 
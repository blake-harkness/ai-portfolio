/**
 * Utility functions to generate JSON-LD schema for structured data
 */

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Harkness AI",
    "url": "https://www.harknessai.nz",
    "logo": "https://www.harknessai.nz/harkness-ai-favicon.svg",
    "sameAs": [
      "https://github.com/username",
      "https://linkedin.com/in/username"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
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
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Harkness AI",
    "image": "https://www.harknessai.nz/blake_photo.jpg",
    "url": "https://www.harknessai.nz",
    "telephone": "",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Christchurch",
      "addressRegion": "Canterbury",
      "addressCountry": "New Zealand"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-43.5321",
      "longitude": "172.6362"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };
};

export const generateServiceSchema = (name: string, description: string, url: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Consulting",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Harkness AI",
      "url": "https://www.harknessai.nz"
    },
    "areaServed": {
      "@type": "Country",
      "name": "New Zealand"
    },
    "url": url
  };
};

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.harknessai.nz${item.url}`
    }))
  };
};

export const generateFAQSchema = (questions: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}; 
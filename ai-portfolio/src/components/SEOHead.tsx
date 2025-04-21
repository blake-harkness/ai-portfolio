import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
}

/**
 * SEOHead component for dynamically setting page titles and meta descriptions
 * This improves SEO by providing unique metadata for each page
 */
const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  keywords = "New Zealand AI, Christchurch AI, Auckland AI, Wellington AI, NZ AI Solutions",
  canonicalPath = ""
}) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Harkness AI - New Zealand`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    let canonicalUrl = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      canonicalUrl.setAttribute(
        'href', 
        `https://www.harknessai.nz${canonicalPath || window.location.pathname}`
      );
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | Harkness AI - New Zealand`);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute(
        'content', 
        `https://www.harknessai.nz${canonicalPath || window.location.pathname}`
      );
    }
  }, [title, description, keywords, canonicalPath]);
  
  // This component doesn't render anything visible
  return null;
};

export default SEOHead; 
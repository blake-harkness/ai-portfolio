/**
 * Preload script for optimizing loading of critical assets
 */
(function() {
  // Add preload links to the head
  function addPreloadLink(href, as, type = '', crossorigin = false) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    
    if (type) {
      link.type = type;
    }
    
    if (crossorigin) {
      link.crossOrigin = 'anonymous';
    }
    
    document.head.appendChild(link);
  }
  
  // Critical assets to preload
  const criticalAssets = [
    // Hero image
    { href: '/hero.jpg', as: 'image' },
    
    // Main font
    { 
      href: '/fonts/inter-var.woff2', 
      as: 'font', 
      type: 'font/woff2',
      crossorigin: true
    },
    
    // Critical JS (adjust paths as needed)
    { href: '/assets/vendor-react.js', as: 'script' }
  ];
  
  // Add preload links for all critical assets
  criticalAssets.forEach(asset => {
    addPreloadLink(
      asset.href, 
      asset.as, 
      asset.type || '', 
      asset.crossorigin || false
    );
  });
  
  // Preconnect to external domains
  ['https://www.googletagmanager.com', 'https://www.google-analytics.com'].forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
})(); 
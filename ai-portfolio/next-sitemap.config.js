/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.harknessai.nz',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.harknessai.nz/sitemap.xml',
    ],
  },
  exclude: ['/404', '/server-sitemap.xml'],
  // Add specific route configurations
  transform: async (config, path) => {
    // Custom priority for specific pages
    if (path === '/') {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    
    if (path === '/contact' || path === '/how-i-can-help') {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Default transformation for all other routes
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
}; 
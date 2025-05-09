import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  siteUrl: 'https://www.harknessai.nz',
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: new Date().toISOString(),
  outputDir: './dist',
};

// Define your routes
const routes = [
  { path: '/', priority: 1.0 },
  { path: '/contact', priority: 0.9 },
  { path: '/how-i-can-help', priority: 0.9 },
  { path: '/blog', priority: 0.8 },
  { path: '/about', priority: 0.8 },
  { path: '/start', priority: 0.8 },
  { path: '/privacy-policy', priority: 0.7 },
  { path: '/terms-of-service', priority: 0.7 },
];

// Generate sitemap XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${config.siteUrl}${route.path}</loc>
    <lastmod>${config.lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${route.priority || config.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Write sitemap file
  fs.writeFileSync(path.join(config.outputDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `# robots.txt
User-agent: *
Allow: /

Sitemap: ${config.siteUrl}/sitemap.xml`;

  // Write robots.txt file
  fs.writeFileSync(path.join(config.outputDir, 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt generated successfully!');
};

// Create the output directory if it doesn't exist
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Generate files
generateSitemap();
generateRobotsTxt();

console.log('✨ Sitemap and robots.txt generation completed!'); 
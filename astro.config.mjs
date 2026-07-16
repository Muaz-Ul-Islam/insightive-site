import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

// Build an honest lastmod map for published essays from their frontmatter
// (updatedDate if present, else publishDate). Drafts are skipped.
const insightsDir = path.resolve('./src/content/insights');
const essayLastmod = {};
try {
  for (const file of fs.readdirSync(insightsDir)) {
    if (!file.endsWith('.md')) continue;
    const fm = (fs.readFileSync(path.join(insightsDir, file), 'utf8').split('---')[1]) || '';
    if (/\bdraft:\s*true/.test(fm)) continue;
    const updated = (fm.match(/\bupdatedDate:\s*([0-9-]+)/) || [])[1];
    const published = (fm.match(/\bpublishDate:\s*([0-9-]+)/) || [])[1];
    const d = updated || published;
    if (d) essayLastmod['/insights/' + file.replace(/\.md$/, '')] = new Date(d).toISOString();
  }
} catch { /* no-op: sitemap still builds without lastmod */ }

// Priority + change frequency by page type.
function seoMeta(p) {
  if (p === '/') return { priority: 1.0, changefreq: 'weekly' };
  if (p === '/insights') return { priority: 0.8, changefreq: 'weekly' };
  if (p.startsWith('/insights/')) return { priority: 0.7, changefreq: 'monthly' };
  if (p === '/thesis') return { priority: 0.9, changefreq: 'monthly' };
  if (p === '/services' || p.startsWith('/services/')) return { priority: 0.9, changefreq: 'monthly' };
  if (p === '/industries' || p.startsWith('/industries/')) return { priority: 0.8, changefreq: 'monthly' };
  if (p === '/partners') return { priority: 0.7, changefreq: 'monthly' };
  if (p === '/careers' || p === '/work') return { priority: 0.6, changefreq: 'monthly' };
  if (p === '/contact') return { priority: 0.5, changefreq: 'yearly' };
  if (['/privacy-policy', '/terms-of-service', '/billing-policy'].includes(p)) return { priority: 0.2, changefreq: 'yearly' };
  return { priority: 0.6, changefreq: 'monthly' };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://insightive.io',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        const p = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        const { priority, changefreq } = seoMeta(p);
        item.priority = priority;
        item.changefreq = changefreq;
        if (essayLastmod[p]) item.lastmod = essayLastmod[p];
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️  CHANGE THIS after you deploy.
// Put your real, live address here (e.g. https://your-name.netlify.app
// or your own domain). It is used for the sitemap, RSS feed and the
// canonical/SEO tags that Google reads. Everything still works locally
// if you leave it, but update it before your first real deploy.
const SITE_URL = 'https://thedeltabangladesh.netlify.app';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  // Pretty, lower-case URLs without a trailing slash, good for SEO.
  trailingSlash: 'never',
  build: { format: 'directory' },
});

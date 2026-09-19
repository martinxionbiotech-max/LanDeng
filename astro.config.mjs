import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the production domain before launch.
export default defineConfig({
  site: 'https://incenseherbs.com',
  output: 'static',
  integrations: [sitemap()],
});

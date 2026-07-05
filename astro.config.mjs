import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://simplygeo.de',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'night-owl',
    },
  },
});

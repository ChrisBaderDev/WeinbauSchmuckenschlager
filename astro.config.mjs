// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  site: 'https://weinbau-schmuckenschlager.at',
  vite: {
      plugins: [tailwindcss()],
      build: {
          cssCodeSplit: true,
      }
  },
  integrations: [sitemap()]
});
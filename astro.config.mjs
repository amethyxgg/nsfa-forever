// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import solidJs from '@astrojs/solid-js';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nsfa-forever.netlify.app',
  integrations: [mdx(), sitemap(), solidJs()],

  vite: {
    plugins: [tailwindcss()],
  },
});
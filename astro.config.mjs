import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://dalodriguez.github.io
export default defineConfig({
  site: 'https://dalodriguez.github.io',
  integrations: [mdx(), sitemap(), tailwind()]
});
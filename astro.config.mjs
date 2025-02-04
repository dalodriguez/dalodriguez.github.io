import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://dalodriguez.github.io',
  output: 'static',   // Ensures the output is fully static (no symlinks)
  outDir: 'dist',     // Explicitly sets the output folder
  integrations: [mdx(), sitemap(), tailwind()]
});
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://daractivosdigitales.com.ar',
  outDir: './dist',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: ['csharp', 'sql', 'bash', 'typescript', 'json', 'yaml', 'html', 'css'],
      wrap: true
    }
  }
});

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://costcohotdogguide.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    // Duplicate content cleanup — redirect old URLs to canonical pages
    '/dietary/gluten-free/': '/hot-dog/gluten-free/',
    '/dietary/vegan/': '/hot-dog/vegan/',
    '/dietary/halal/': '/faq/halal/',
    '/dietary/kosher/': '/faq/kosher/',
    '/dietary/nitrates/': '/hot-dog/sodium/',
    '/dietary/dairy-free/': '/faq/dairy-free-buns/',
    '/dietary/pork/': '/ingredients/beef-or-pork/',
    '/dietary/': '/hot-dog/healthy/',
    '/faq/gluten-free/': '/hot-dog/gluten-free/',
    '/faq/vegan/': '/hot-dog/vegan/',
    '/faq/all-beef/': '/ingredients/brand/',
    '/faq/pork-content/': '/ingredients/beef-or-pork/',
    '/nutrition/calories/': '/hot-dog/calories/',
    '/nutrition/protein/': '/hot-dog/protein/',
    '/nutrition/macros/': '/hot-dog/protein-vs-calories/',
    '/nutrition/': '/hot-dog/nutrition/',
    '/price/': '/hot-dog/price/',
    '/price/price-increase/': '/hot-dog/price-history/',
    '/business/why-so-cheap/': '/hot-dog/why-so-cheap/',
    '/cooking/air-fryer/': '/tutorials/air-fryer/',
    '/cooking/at-home/': '/hot-dog/cooking-at-home/',
    '/cooking/': '/hot-dog/cooking-at-home/',
    '/ingredients/ingredients-list/': '/hot-dog/ingredients/',
    '/faq/beef/': '/ingredients/beef-or-pork/',
  }
});
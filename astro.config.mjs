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
    '/hot-dog/price-history/': '/hot-dog/price/',
    '/business/why-so-cheap/': '/hot-dog/why-so-cheap/',
    '/cooking/air-fryer/': '/tutorials/air-fryer/',
    '/cooking/at-home/': '/hot-dog/cooking-at-home/',
    '/cooking/': '/hot-dog/cooking-at-home/',
    '/ingredients/ingredients-list/': '/hot-dog/ingredients/',
    '/faq/beef/': '/ingredients/beef-or-pork/',
    // Round 2: additional duplicate content dedup
    '/hot-dog/air-fryer/': '/tutorials/air-fryer/',
    '/nutrition/calories-without-bun/': '/tutorials/calories-without-bun/',
    '/business/history/': '/hot-dog/history/',
    '/business/': '/hot-dog/history/',
    '/hot-dog/air-fryer-guide/': '/tutorials/air-fryer/',
    // Fragment consolidation: merge thin /hot-dog/ sub-pages into core hubs
    // Nutrition cluster → /hot-dog/nutrition/
    '/hot-dog/calories/': '/hot-dog/nutrition/',
    '/hot-dog/carbs/': '/hot-dog/nutrition/',
    '/hot-dog/fat/': '/hot-dog/nutrition/',
    '/hot-dog/protein/': '/hot-dog/nutrition/',
    '/hot-dog/protein-vs-calories/': '/hot-dog/nutrition/',
    '/hot-dog/comparison/': '/hot-dog/nutrition/',
    // Ingredients cluster → /hot-dog/ingredients/
    '/hot-dog/allergens/': '/hot-dog/ingredients/',
    '/hot-dog/toppings/': '/hot-dog/ingredients/',
    '/hot-dog/sauce/': '/hot-dog/ingredients/',
    '/hot-dog/cheese/': '/hot-dog/ingredients/',
    '/hot-dog/food-court/': '/hot-dog/ingredients/',
    // Health/diet cluster → /hot-dog/healthy/
    '/hot-dog/diet-tips/': '/hot-dog/healthy/',
    '/hot-dog/vegan/': '/hot-dog/healthy/',
    '/hot-dog/keto/': '/hot-dog/healthy/',
    // History cluster → /hot-dog/history/
    '/hot-dog/fun-facts/': '/hot-dog/history/',
    '/hot-dog/controversies/': '/hot-dog/history/',
    // Irrelevant content — redirect to relevant hot dog pages
    '/articles/employee-retention/': '/hot-dog/price-history/',
    '/articles/supply-chain-efficiency/': '/hot-dog/why-so-cheap/',
    '/articles/pricing-strategy/': '/hot-dog/price-history/',
    '/reviews/furniture/': '/reviews/',
    '/reviews/vitamins/': '/reviews/',
  }
});
## 1. Funnel Infrastructure

- [x] 1.1 Add `funnelStage` field (A|B|C) to all new content page frontmatter schemas
- [x] 1.2 Update `RelatedProducts` Astro component to accept `funnelStage` prop and select products from appropriate catalogs (A=trust, B=kitchen, C=high-ticket)
- [x] 1.3 Create `src/data/affiliate-high-ticket.json` with 8+ products across kitchen ($100-500), supplements ($20-60), outdoor ($50-300), home ($30-200)
- [x] 1.4 Update `src/data/affiliate.json` to include low-ticket trust-building products for stage A (recipe books, nutrition guides under $20)
- [x] 1.5 Create `src/layouts/FAQLayout.astro` with blue theme (#3B82F6), FAQPage JSON-LD Schema, and "Learn More" next-step section
- [x] 1.6 Create `src/layouts/TutorialLayout.astro` with green theme (#10B981), HowTo JSON-LD Schema, and "Recommended Gear" section
- [x] 1.7 Create `src/layouts/ReviewLayout.astro` with orange theme (#F59E0B), Product JSON-LD Schema, pros/cons, and "Related Guides" section

## 2. FAQ Traffic Layer (KD < 15)

- [x] 2.1 Create `src/content/faq/` directory and publish first 5 FAQ pages: dairy-free buns, kosher, pork content, gluten free, nitrates (300-500 words each)
- [x] 2.2 Create remaining 5 FAQ pages: MSG, all beef, halal, vegan, soy free
- [x] 2.3 Create `/faq/` index page with category grouping (Dietary Restrictions, Ingredients, Nutrition, Preparation) and search/filter
- [x] 2.4 Ensure all FAQ pages include FAQPage JSON-LD Schema with `mainEntity` markup
- [x] 2.5 Add "Learn More" next-step cards at bottom of each FAQ linking to relevant tutorials
- [x] 2.6 Verify FAQ pages do NOT display high-ticket affiliate products in RelatedProducts

## 3. Tutorial & Tool Layer (KD 15-25)

- [x] 3.1 Create `/tutorials/` directory and publish "Costco Hot Dog in Air Fryer" tutorial with HowTo steps and visual aids
- [x] 3.2 Publish "Costco Hot Dog Calories Without Bun" tutorial with macro data table
- [x] 3.3 Publish "Costco Food Court Calories — Complete Guide" tutorial
- [x] 3.4 Build `/tools/nutrition-calculator/` with interactive item selector, quantity input, real-time totals, and 300+ words SEO content
- [x] 3.5 Build `/tools/price-history/` with line chart for 5 iconic products and event annotations
- [x] 3.6 Add "Recommended Gear" section to each tutorial linking to 2-3 relevant `/reviews/` pages
- [x] 3.7 Add `/tools/` and `/tutorials/` to main navigation

## 4. Review Monetization Layer

- [x] 4.1 Create `/reviews/` with subdirectories: `kitchen/`, `supplements/`, `outdoor/`, `home/`
- [ ] 4.2 Create category index pages for each review category with price range filters
- [x] 4.3 Publish first review: "Best Air Fryer for Costco Hot Dogs" with comparison table and Amazon CTAs
- [x] 4.4 Publish second review: "Best Digital Kitchen Scale for Portion Control"
- [x] 4.5 Add FTC affiliate disclosure banner to all review pages
- [x] 4.6 Add Costco price comparison section to each review (Amazon vs Kirkland)
- [x] 4.7 Add "Related Guides" section at bottom of each review linking back to tutorials
- [ ] 4.8 Add "Reviews" dropdown to main navigation

## 5. A-B-C Funnel Integration

- [x] 5.1 Tag all FAQ pages with `funnelStage: A`, tutorials with `B`, reviews with `C`
- [x] 5.2 Implement GA4 `funnel_progression` event firing on all "Learn More" and "Recommended Gear" link clicks
- [x] 5.3 Ensure A-stage pages have no hard-sell affiliate CTAs in main content
- [x] 5.4 Ensure B-stage pages use natural language for tool recommendations
- [x] 5.5 Ensure C-stage pages have prominent "See Price on Amazon" CTAs
- [ ] 5.6 Test complete funnel path: FAQ → Tutorial → Review with GA4 events firing correctly

## 6. Strategic Internal Linking

- [ ] 6.1 Develop `scripts/generate-internal-links.js` using semantic matching (category 0.4, tags 0.3, topic 0.3, threshold >= 0.6)
- [ ] 6.2 Run script and review `reports/internal-links-review.md` for accuracy
- [x] 6.3 Create `RelatedContent` Astro component displaying styled cards with image, title, description, and "Read More" button
- [x] 6.4 Inject RelatedContent blocks into all FAQ pages (prioritizing B-stage targets)
- [x] 6.5 Inject RelatedContent blocks into all tutorial pages (prioritizing C-stage targets)
- [x] 6.6 Add contextual links from `/guide/`, `/menu/hot-dog/`, `/nutrition/calories/` to calculator and reviews

## 7. Brand Positioning & EEAT

- [x] 7.1 Update homepage hero subtitle to "The Hot Dog That Leads to Smarter Costco Shopping"
- [ ] 7.2 Update `/about/` page with expanded mission, receipt data analysis, and author credentials (EEAT signals)
- [x] 7.3 Update footer with quick links to `/faq/`, `/tutorials/`, `/tools/`, `/reviews/`
- [ ] 7.4 Update meta descriptions on new pages to include both hot dog and broader Costco terms
- [x] 7.5 Add color-coded breadcrumb indicators (blue/green/orange) showing current funnel layer

## 8. Execution Calendar & Automation

- [ ] 8.1 Create `src/content/calendar/6-month-roadmap.md` with 4 phases, weekly tasks, and monthly goals
- [ ] 8.2 Create `scripts/weekly-checklist.js` that outputs current week's 3 P0 tasks
- [ ] 8.3 Document Phase 3 repeating weekly routine: publish → GSC review → Reddit engagement → old content update
- [ ] 8.4 Add monthly "buffer week" tasks (metrics review + next month planning) to calendar

## 9. Build, Test & Deploy

- [ ] 9.1 Run `npm run validate-content` and fix any frontmatter errors
- [x] 9.2 Run `npm run build` and verify no errors
- [ ] 9.3 Validate all JSON-LD Schema (FAQPage, HowTo, Product) using Google's Rich Results Test
- [x] 9.4 Verify GA4 `funnel_progression` events fire correctly in preview
- [x] 9.5 Deploy to production and verify all new routes are accessible
- [ ] 9.6 Submit all new URLs (`/faq/*`, `/tutorials/*`, `/tools/*`, `/reviews/*`) to Google Search Console
- [ ] 9.7 Set up GA4 funnel exploration report for A→B→C progression tracking

## 10. Phase 2: Content Operations Automation (from content-ops-system)

- [ ] 10.1 Build `/tools/membership-roi/` page with spending input, breakeven calculation, and savings indicator
- [ ] 10.2 Develop `scripts/usda-nutrition.js` to query USDA FoodData Central API and save JSON to `src/content/data/usda/`
- [ ] 10.3 Develop `scripts/content-research.js` to aggregate Google related questions and Reddit threads into Markdown drafts
- [ ] 10.4 Add rate limiting to research script (1s USDA, 3s Google/Reddit, max 50 requests per run)
- [ ] 10.5 Develop `scripts/analyze-gsc.js` to parse GSC export CSV and output "priority update" report for pages ranking 10-20
- [ ] 10.6 Integrate Giscus comments on `/faq/`, `/tutorials/`, `/reviews/` pages (behind feature flag)
- [ ] 10.7 Build `<VotePoll>` component for user engagement (e.g., "What's your favorite Costco Food Court item?")
- [ ] 10.8 Create `src/content/calendar/weekly/` and `monthly/` directories for ongoing content planning
- [ ] 10.9 Create `scripts/weekly-checklist.js` that combines calendar parsing + current week's P0 tasks output

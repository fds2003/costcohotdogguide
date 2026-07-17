## 1. Content Calendar Infrastructure

- [ ] 1.1 Create `src/content/calendar/` with `weekly/` and `monthly/` subdirectories
- [ ] 1.2 Create `src/content/calendar/categories.md` with 5 content categories and example topics
- [ ] 1.3 Create first weekly plan `src/content/calendar/weekly/2026-w18.md` with frontmatter and content items checklist
- [ ] 1.4 Create first monthly review `src/content/calendar/monthly/2026-05.md` listing 2 pages for update
- [ ] 1.5 Create `scripts/content-calendar.js` to parse calendar files and output upcoming/overdue summary

## 2. Content Production Pipeline

- [ ] 2.1 Create `src/content/drafts/` directory for pipeline output
- [ ] 2.2 Create `src/content/templates/review-template.md` with standardized high-ticket review sections
- [ ] 2.3 Develop `scripts/usda-nutrition.js` to query USDA FoodData Central API and save JSON to `src/content/data/usda/`
- [ ] 2.4 Develop `scripts/content-research.js` to aggregate Google related questions and Reddit threads into Markdown drafts
- [ ] 2.5 Add rate limiting to research script (1s USDA, 3s Google/Reddit, max 50 requests per run)
- [ ] 2.6 Validate draft frontmatter includes all required fields (`title`, `targetKeyword`, `sources`, `generatedAt`, `status`, `aiAssisted`)
- [ ] 2.7 Produce 3 core articles using the pipeline (rotisserie chicken guide, Kirkland best products, Costco vs Sam's Club comparison)
- [ ] 2.8 Produce 5 high-ticket product reviews using the review template

## 3. Interactive Calculators

- [ ] 3.1 Create `src/content/data/calculators/` with nutrition JSON and price-history JSON data files
- [x] 3.2 Build `/tools/nutrition-calculator/` page with interactive meal combination form and real-time totals
- [x] 3.3 Build `/tools/membership-roi/` page with spending input, breakeven calculation, and savings indicator
  - *Note: Implemented at `/savings/membership-calculator/` instead of `/tools/membership-roi/`*
- [x] 3.4 Build `/tools/price-history/` page with line chart showing historical prices for 5 iconic products
- [x] 3.5 Add at least 300 words of SEO-optimized contextual content to each calculator page
  - *nutrition-calculator: ~300 words ✅ | price-history: ~350 words ✅ | membership-calculator: ~300 words ✅*
- [x] 3.6 Add calculators to site navigation under a "Tools" section

## 4. UGC Engagement System

- [ ] 4.1 Create `src/data/features.json` with `commentsEnabled: false` feature flag
- [ ] 4.2 Integrate Giscus comments component on `/articles/` and `/menu/` pages (controlled by feature flag)
- [ ] 4.3 Build `<VotePoll>` Astro component with localStorage-backed voting and percentage result display
- [ ] 4.4 Add a poll to at least 2 existing articles (e.g., "What's your favorite Food Court item?")
- [ ] 4.5 Verify Giscus comments render server-side for SEO indexability

## 5. GSC Content Optimization Loop

- [ ] 5.1 Create `data/gsc-exports/` directory and add it to `.gitignore`
- [ ] 5.2 Create `reports/` directory for optimization reports
- [ ] 5.3 Develop `scripts/analyze-gsc.js` to read GSC CSV exports and flag pages with impressions > 100, position 10-20, CTR < 3%
- [ ] 5.4 Generate Markdown optimization reports with 3-5 actionable checklists per flagged page
- [ ] 5.5 Perform first GSC-driven content update on 2 flagged pages and record actions in monthly calendar
- [ ] 5.6 Document the monthly optimization workflow in `doc/content-optimization-playbook.md`

## 6. Content Publication & SEO

- [ ] 6.1 Submit all new article URLs to Google Search Console
- [ ] 6.2 Submit all new calculator tool URLs to Google Search Console
- [x] 6.3 Update sitemap with new `/tools/` routes
  - *`@astrojs/sitemap` auto-generates sitemap; no manual update needed*
- [ ] 6.4 Verify all new pages pass `npm run validate-content`
- [x] 6.5 Run `npm run build` and verify no build errors
- [ ] 6.6 Deploy to production and verify all new pages are accessible

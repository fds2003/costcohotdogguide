## 1. Data Layer & Interactive Tools

- [x] 1.1 Create `src/data/prices-history.json` with 40-year Costco hot dog price data and inflation-adjusted values
- [x] 1.2 Create `src/components/NutritionCalculator.astro` — interactive nutrition calculator with bun/condiment toggles
- [x] 1.3 Create `src/components/PriceHistoryChart.astro` — visual price timeline with annotations (static SVG/CSS)
- [x] 1.4 Create `src/components/WWPointsCalculator.astro` — Weight Watchers SmartPoints calculator with modification options
- [x] 1.5 Integrate NutritionCalculator into existing `/nutrition/calories/` page
- [x] 1.6 Create `/nutrition/weight-watchers-points/` page and integrate WWPointsCalculator
- [x] 1.7 Integrate PriceHistoryChart into `/price/` page
- [x] 1.8 Integrate PriceHistoryChart into `/business/history/` page

## 2. Missing PRD Pages

- [x] 2.1 Create `/nutrition/macros/` page with macro ratio breakdown (carbs/fat/protein) visual and numerical display
- [x] 2.2 Create `/ingredients/ingredients-list/` page with complete ingredient table, purposes, and allergen warnings
- [x] 2.3 Create `/ingredients/beef-or-pork/` page with definitive answer and sourcing evidence
- [x] 2.4 Create `/ingredients/brand/` page identifying manufacturer/supplier with brand history
- [x] 2.5 Create `/cooking/at-home/` page with equipment recommendations, ingredient sourcing, and step-by-step guide
- [x] 2.6 Create `/cooking/recipe/` page with full recipe, HowTo Schema markup, ingredients, measurements, and cooking times
- [x] 2.7 Create `/business/history/` page with chronological timeline from 1985 to present
- [x] 2.8 Create `/price/price-increase/` page tracking current price, historical prices, and price change rumors
- [x] 2.9 Add proper JSON-LD Schema to all 8 new PRD pages (Article, FAQPage, or HowTo as appropriate)

## 3. Conversion Bridge Articles

- [x] 3.1 Create `/articles/supply-chain-efficiency/` with supply chain analysis and spreadsheet tool CTA
- [x] 3.2 Create `/articles/pricing-strategy/` with 7 actionable business lessons and pricing template CTA
- [x] 3.3 Create `/articles/membership-worth-it/` with cost-benefit analysis and link to `/savings/membership-calculator/`
- [x] 3.4 Create `/articles/150-miracle/` with narrative arc from 1985 to present and compelling Open Graph meta
- [x] 3.5 Create `/articles/food-court-menu/` with complete menu table, prices, calories, and fast-food comparison
- [x] 3.6 Create `/articles/employee-retention/` with wages, benefits, turnover data, and culture analysis
- [x] 3.7 Create `/articles/is-it-healthy/` with evidence-based analysis from multiple perspectives
- [x] 3.8 Add natural Affiliate CTAs to all 7 bridge articles (at least one per article)
- [x] 3.9 Add internal links (minimum 3 per article) to existing pages in all 7 bridge articles

## 4. Affiliate Product Expansion

- [x] 4.1 Add hot dog roller product to `affiliate.json` with Amazon link and `home-cooking` scenario tag
- [x] 4.2 Add pizza stone product to `affiliate.json` with `home-cooking` scenario tag
- [x] 4.3 Add BBQ sauce/condiment set to `affiliate.json` with `home-cooking` scenario tag
- [x] 4.4 Add food storage containers to `affiliate.json` with `storage` and `bulk-buy` scenario tags
- [x] 4.5 Add picnic blanket to `affiliate.json` with `picnic` scenario tag
- [x] 4.6 Add reusable utensils set to `affiliate.json` with `picnic` scenario tag
- [x] 4.7 Add chest freezer to `affiliate.json` with `storage` and `bulk-buy` scenario tags
- [x] 4.8 Add meal prep containers to `affiliate.json` with `meal-prep` scenario tag
- [x] 4.9 Verify all new products have realistic `priceRange` values reflecting actual Amazon pricing

## 5. Navigation & Internal Linking

- [x] 5.1 Update `public/sitemap.xml` to include all 19 new page URLs
- [x] 5.2 Add navigation links for new section pages (nutrition, ingredients, cooking, business, price, articles)
- [x] 5.3 Add internal links from new pages to existing high-traffic pages (FAQ, nutrition, reviews, savings)
- [x] 5.4 Add cross-links between related new pages (e.g., macros ↔ calories, recipe ↔ at-home)

## 6. Build & Validation

- [x] 6.1 Run `npm run build` and verify all 58+ pages generate without errors
- [x] 6.2 Verify all new pages contain correct JSON-LD Schema markup in page source
- [x] 6.3 Test all 3 interactive calculators on mobile viewport for touch usability
- [x] 6.4 Verify all internal links resolve correctly (no 404s)
- [x] 6.5 Verify Affiliate links render correctly with `data-affiliate-id` tracking attributes
- [x] 6.6 Confirm build output includes all new static assets and data files

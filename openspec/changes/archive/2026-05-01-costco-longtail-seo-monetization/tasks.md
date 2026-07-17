## 1. FAQ Infrastructure

- [ ] 1.1 Create `src/layouts/FAQLayout.astro` with FAQPage JSON-LD Schema, breadcrumb, and consistent Q&A styling
- [ ] 1.2 Create `src/content/faq/` directory for FAQ Markdown files
- [ ] 1.3 Create FAQ Markdown template with required frontmatter fields (`question`, `answer`, `targetKeyword`, `kd`, `searchVolume`, `relatedQuestions`, `lastUpdated`)
- [ ] 1.4 Create `/faq/` index page with category grouping (Dietary Restrictions, Ingredients, Nutrition, Preparation) and search/filter functionality
- [ ] 1.5 Create first 3 FAQ pages: "Are Costco hot dog buns dairy free?", "Does Costco hot dog have pork?", "Is Costco hot dog kosher?" (500+ words each)

## 2. Reviews Infrastructure

- [ ] 2.1 Create `src/layouts/ReviewLayout.astro` with Product Schema, comparison tables, Amazon CTA buttons, star ratings, and pros/cons sections
- [ ] 2.2 Create `src/pages/reviews/` with category subdirectories: `kitchen/`, `supplements/`, `outdoor/`, `home/`
- [ ] 2.3 Create category index pages for each review category with filter options
- [ ] 2.4 Create `src/data/affiliate-high-ticket.json` with at least 8 high-ticket products across 4 categories ($50+ price range)
- [ ] 2.5 Add FTC affiliate disclosure component for all review pages
- [ ] 2.6 Create first 2 review pages: "Best Air Fryer for Costco Hot Dogs" (kitchen) and "Best Digital Kitchen Scale for Portion Control" (kitchen)

## 3. Tutorial Content

- [ ] 3.1 Create `src/layouts/TutorialLayout.astro` with HowTo JSON-LD Schema and step-by-step styling
- [ ] 3.2 Create `src/pages/tutorials/` directory
- [ ] 3.3 Create tutorial page: "How to Cook Costco Hot Dog in Air Fryer" with HowTo steps, visual aids, and nutrition table
- [ ] 3.4 Create tutorial page: "Costco Hot Dog Calories Without Bun — Complete Breakdown" with macro data table
- [ ] 3.5 Create tutorial page: "Costco Food Court Calories — Your Complete Guide" covering all menu items
- [ ] 3.6 Add "Recommended Gear" section to each tutorial linking to relevant `/reviews/` pages

## 4. Affiliate High-Ticket Integration

- [ ] 4.1 Extend `RelatedProducts` Astro component with `mode` prop supporting `scenario` and `high-ticket`
- [ ] 4.2 Update existing hot dog detail page to display high-ticket products (air fryer, kitchen scale) before low-ticket items
- [ ] 4.3 Add affiliate tracking parameters (`ref=costcohotdogguide-faq|tutorial|review|menu`) to all Amazon links
- [ ] 4.4 Style high-ticket product cards with price range, star rating, and "Check Price on Amazon" CTA button
- [ ] 4.5 Add high-ticket product recommendations to FAQ pages (at least 1 per page)

## 5. Interactive SEO Tools

- [ ] 5.1 Create `src/content/data/calculators/nutrition.json` from existing `nutrition-data.csv`
- [ ] 5.2 Build `/tools/nutrition-calculator/` page with interactive item selector, quantity input, and real-time nutrition totals
- [ ] 5.3 Add localStorage save/load functionality for custom meal combinations
- [ ] 5.4 Write 500+ words of SEO content below the calculator with relevant keywords
- [ ] 5.5 Add FAQ section with 3+ questions and FAQPage Schema to the calculator page
- [ ] 5.6 Add `/tools/` to site navigation

## 6. Brand Positioning & Internal Linking

- [ ] 6.1 Update homepage hero section with tagline: "Your Complete Costco Shopping Guide — Starting with the Iconic $1.50 Hot Dog"
- [ ] 6.2 Add "Reviews" and "Tutorials" to main navigation with dropdown menus
- [ ] 6.3 Update `/about/` page to reflect expanded mission beyond hot dogs
- [ ] 6.4 Update footer with quick links to `/reviews/`, `/tutorials/`, `/faq/`, and `/tools/`
- [ ] 6.5 Develop `scripts/inject-internal-links.js` to automatically add contextual links from existing pages to new content
- [ ] 6.6 Run internal linking script on hot dog guide, menu/hot-dog, and nutrition/calories pages

## 7. Content Batch Production

- [ ] 7.1 Produce remaining 7 FAQ pages covering: gluten free, nitrates, MSG, all beef, halal, vegan, soy free (500+ words each)
- [ ] 7.2 Produce 3 high-ticket reviews: supplements (GLP-1 supplements), outdoor (portable grill), home (vacuum sealer)
- [ ] 7.3 Ensure all FAQ pages include "Related Questions" section with 3+ internal links
- [ ] 7.4 Ensure all new pages include meta descriptions referencing both hot dog and broader Costco terms

## 8. Build, Test & Deploy

- [ ] 8.1 Run `npm run validate-content` to check all new Markdown frontmatter
- [ ] 8.2 Run `npm run build` and verify no build errors
- [ ] 8.3 Verify all new pages have correct JSON-LD Schema (FAQPage, HowTo, Product)
- [ ] 8.4 Verify affiliate links include tracking parameters
- [ ] 8.5 Deploy to production and test all new routes
- [ ] 8.6 Submit all new URLs (`/faq/*`, `/reviews/*`, `/tutorials/*`, `/tools/*`) to Google Search Console

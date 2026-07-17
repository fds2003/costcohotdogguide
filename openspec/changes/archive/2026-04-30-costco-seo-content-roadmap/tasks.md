## 1. Content Strategy Directory Setup

- [x] 1.1 Create `doc/content-strategy/` directory
- [x] 1.2 Create `doc/content-strategy/outlines/` subdirectory
- [x] 1.3 Create `doc/content-strategy/calendar/` subdirectory
- [x] 1.4 Create `doc/content-strategy/templates/` subdirectory

## 2. SEO Keyword Strategy

- [x] 2.1 Compile 100-keyword matrix with volume, KD, intent, and target page type
- [x] 2.2 Group keywords into Stage A (KD < 15, FAQ targets), Stage B (KD 15-30, tutorial/tool targets), Stage C (KD 30+, review targets)
- [x] 2.3 Assign P0/P1/P2 priority to each keyword based on volume-to-KD ratio
- [x] 2.4 Save keyword matrix as `doc/content-strategy/keyword-matrix.md` in Markdown table format
- [x] 2.5 Add summary section showing counts per stage and priority distribution

## 3. 30-Day Content Calendar

- [x] 3.1 Design weekly rotation pattern: Week 1 FAQ → Week 2 Core Pages → Week 3 Tutorial/Tool → Week 4 Review/Optimization
- [x] 3.2 Map P0 keywords to specific calendar days with content type and estimated hours
- [x] 3.3 Add GSC submission milestones at the end of each week
- [x] 3.4 Add 1 buffer day per week for catch-up and unplanned optimizations
- [x] 3.5 Save calendar as `doc/content-strategy/calendar/30-day-roadmap.md` with weekly summary and daily detail views

## 4. Core Page Outlines

- [x] 4.1 Create outline for `/nutrition/calories/` (or `/hot-dog/calories/`): H2-H3 structure, target keyword, semantic variants, 5+ internal link anchors, 5 FAQ questions, CTA placement
- [x] 4.2 Create outline for `/nutrition/` (or `/hot-dog/nutrition-facts/`): same structure as above
- [x] 4.3 Create outline for `/ingredients/ingredients-list/` (or `/hot-dog/ingredients/`): same structure as above
- [x] 4.4 Create outline for `/price/` (or `/hot-dog/price/`): same structure as above
- [x] 4.5 Save all outlines to `doc/content-strategy/outlines/` with filenames: `hot-dog-calories.md`, `nutrition-facts.md`, `ingredients-list.md`, `price-analysis.md`

## 5. FAQ Schema Template

- [x] 5.1 Design standard FAQPage JSON-LD template with `@type: "FAQPage"` root and `mainEntity` array
- [x] 5.2 Define required fields checklist: `@context`, `@type`, `mainEntity`, `name`, `acceptedAnswer`, `text`
- [x] 5.3 Create dietary restriction FAQ example (e.g., gluten free)
- [x] 5.4 Create ingredient FAQ example (e.g., ingredients list)
- [x] 5.5 Create nutrition FAQ example (e.g., calorie count)
- [x] 5.6 Add validation instructions with link to Google Rich Results Test
- [x] 5.7 Add common errors checklist
- [x] 5.8 Save template as `doc/content-strategy/templates/faq-schema-template.md`

## 6. Internal Linking Framework

- [x] 6.1 Define page-type-to-page-type weight matrix (FAQ→Tutorial→Review→Core) with min/max link counts
- [x] 6.2 Specify anchor text strategy: exact-match ≤ 40%, partial match 40%, branded/natural 20%
- [x] 6.3 Define contextual link placement rules: body paragraph preferred, minimum 50 words of surrounding context
- [x] 6.4 Define topic tag secondary matching: minimum 2 shared tags for cross-type links
- [x] 6.5 Create at least 5 example link scenarios with before/after content snippets
- [x] 6.6 Save framework as `doc/content-strategy/internal-linking-framework.md`

## 7. URL Structure Plan

- [x] 7.1 Document Option A: enhance existing URLs (`/nutrition/calories/`, `/nutrition/`, `/ingredients/ingredients-list/`, `/price/`)
- [x] 7.2 Document Option B: create new `/hot-dog/` cluster with 301 redirect mappings
- [x] 7.3 Define decision criteria: ranking preservation, content consolidation, future scalability
- [x] 7.4 Score both options against criteria in a decision matrix
- [x] 7.5 Provide provisional recommendation with reasoning, marking final decision as pending GSC validation
- [x] 7.6 Save plan as `doc/content-strategy/url-structure-plan.md`

## 8. Validation & Archive

- [x] 8.1 Run `openspec validate --change costco-seo-content-roadmap` and fix any issues
- [x] 8.2 Verify all 6 strategy documents exist in `doc/content-strategy/` and subdirectories
- [x] 8.3 Commit all documents to version control with descriptive message
- [x] 8.4 Archive change via `openspec archive costco-seo-content-roadmap`

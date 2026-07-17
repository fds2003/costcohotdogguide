# URL Structure Plan — Decision Document

> Change: `costco-seo-content-roadmap`
> Status: **Provisional recommendation** — final decision pending GSC data validation
> Related: `/doc/content-strategy/hot-dog-cluster-conflict-report.md`

---

## Option A: Enhance Existing URLs

### Current Structure
```
/                          → Homepage
/nutrition/calories/       → Calorie page (established)
/nutrition/                → Nutrition hub (established)
/nutrition/protein/        → Protein page (established)
/nutrition/macros/         → Macros page (established)
/ingredients/ingredients-list/ → Ingredients page (established)
/price/                    → Price page (established)
/price/price-increase/     → Price increase page (established)
/faq/                      → FAQ hub (established)
/faq/gluten-free/          → Gluten-free FAQ (established)
/faq/vegan/                → Vegan FAQ (established)
/faq/halal/                → Halal FAQ (established)
/cooking/at-home/          → Cooking guide (established)
/tutorials/air-fryer/      → Air fryer tutorial (established)
/tools/nutrition-calculator/ → Calculator tool (established)
/tools/price-history/      → Price history tool (established)
/reviews/                  → Reviews hub (established)
```

### Pros
- ✅ Preserves existing SEO equity and rankings
- ✅ No 301 redirects needed (zero risk of redirect chains)
- ✅ GSC data continuity (no ranking reset)
- ✅ Canonical structure is clean and established
- ✅ URL paths are descriptive and user-friendly

### Cons
- ❌ Hot dog content is scattered across multiple URL paths
- ❌ No topical cluster signal for "hot dog" in URL
- ❌ Some URLs are verbose (`/ingredients/ingredients-list/`)
- ❌ New users may not intuit the URL → topic mapping

---

## Option B: Create New `/hot-dog/` Cluster + 301 Redirects

### Proposed Structure
```
/hot-dog/calories/          ← 301 from /nutrition/calories/
/hot-dog/nutrition/         ← 301 from /nutrition/
/hot-dog/ingredients/       ← 301 from /ingredients/ingredients-list/
/hot-dog/price/             ← 301 from /price/
/hot-dog/air-fryer/         ← 301 from /tutorials/air-fryer/
/hot-dog/cooking-at-home/   ← 301 from /cooking/at-home/
/hot-dog/gluten-free/       ← 301 from /faq/gluten-free/
/hot-dog/vegan/             ← 301 from /faq/vegan/
/hot-dog/halal/             ← 301 from /faq/halal/
/hot-dog/why-so-cheap/      ← New page
/hot-dog/healthy/           ← New page
/hot-dog/sodium/            ← New page
/hot-dog/keto/              ← New page
/hot-dog/carbs/             ← New page
/hot-dog/history/           ← New page
/hot-dog/comparison/        ← New page
```

### Pros
- ✅ Strong topical cluster signal for "hot dog" keyword
- ✅ Shorter, cleaner URLs
- ✅ Internal linking is more intuitive (all under /hot-dog/)
- ✅ Better for users searching "costco hot dog [topic]"

### Cons
- ❌ 301 redirects lose 1–5% of link equity per redirect
- ❌ GSC ranking may temporarily drop during redirect processing (2–6 weeks)
- ❌ 13 existing pages need redirects (high risk of redirect chain errors)
- ❌ Dual URLs exist during migration (canonical conflicts)
- ❌ Already-created `/hot-dog/` pages have 13 conflicts with existing pages (see conflict report)

---

## Decision Criteria & Scoring

| Criterion | Weight | Option A Score | Option B Score | Notes |
|-----------|--------|---------------|---------------|-------|
| Ranking preservation | 30% | 9 | 5 | A preserves all equity; B loses 1–5% per redirect |
| Content consolidation | 20% | 5 | 9 | B creates a unified cluster; A is fragmented |
| Future scalability | 15% | 7 | 8 | B scales better for new hot-dog topics |
| Implementation risk | 15% | 9 | 3 | A is zero-risk; B has redirect chain dangers |
| URL clarity | 10% | 6 | 9 | B is shorter and more intuitive |
| GSC data continuity | 10% | 9 | 4 | A keeps all data; B requires remapping |
| **Weighted Total** | **100%** | **7.5** | **6.3** | |

---

## Provisional Recommendation

### **Option A: Enhance Existing URLs** (Recommended)

**Rationale**:
1. The site already has 118+ indexed pages with established URL patterns
2. 13 conflict pages in `/hot-dog/` cluster have canonical tags pointing to existing pages — effectively making them duplicate content
3. GSC data shows no meaningful ranking for `/hot-dog/*` pages yet
4. The risk of redirect implementation errors outweighs the SEO benefit of URL clustering
5. The existing URL structure is already diverse enough to rank for long-tail keywords

### Implementation Actions
1. **Keep existing URLs** as primary canonical targets
2. **Remove or noindex** the 13 conflicting `/hot-dog/*` pages that duplicate existing content
3. **Keep 17 non-conflicting `/hot-dog/*` pages** as new content (why-so-cheap, healthy, sodium, keto, carbs, etc.)
4. **Strengthen internal links** from new `/hot-dog/*` pages to existing core pages
5. **Add breadcrumb Schema** to establish topical relationships without URL restructuring

### Final Decision: Pending GSC Validation
- After 60 days of GSC data collection (by June 30, 2026)
- Compare impressions/clicks for `/hot-dog/*` pages vs existing URL pages
- If `/hot-dog/*` pages outperform: reconsider Option B
- If existing URLs outperform: confirm Option A permanently

---

## Appendix: Conflict Summary

13 pages in `/hot-dog/` cluster that conflict with existing URLs:

| New URL | Existing URL | Risk | Canonical |
|---------|-------------|------|-----------|
| /hot-dog/calories/ | /nutrition/calories/ | 🔴 High | → /nutrition/calories/ |
| /hot-dog/nutrition/ | /nutrition/ | 🔴 High | → /nutrition/ |
| /hot-dog/ingredients/ | /ingredients/ingredients-list/ | 🔴 High | → /ingredients/ingredients-list/ |
| /hot-dog/price/ | /price/ | 🔴 High | → /price/ |
| /hot-dog/air-fryer/ | /tutorials/air-fryer/ | 🔴 High | → /tutorials/air-fryer/ |
| /hot-dog/cooking-at-home/ | /cooking/at-home/ | 🔴 High | → /cooking/at-home/ |
| /hot-dog/gluten-free/ | /faq/gluten-free/ | 🔴 High | → /faq/gluten-free/ |
| /hot-dog/protein/ | /nutrition/protein/ | 🟡 Medium | → /nutrition/protein/ |
| /hot-dog/vegan/ | /faq/vegan/ | 🔴 High | → /faq/vegan/ |
| /hot-dog/price-history/ | /price/price-increase/ | 🟡 Medium | → /price/price-increase/ |
| /hot-dog/air-fryer-guide/ | /tutorials/air-fryer/ | 🔴 High | → /tutorials/air-fryer/ |
| /hot-dog/faq/ | /faq/ | 🔴 High | → /faq/ |
| /hot-dog/protein-vs-calories/ | /nutrition/macros/ | 🟡 Medium | → /nutrition/macros/ |

17 non-conflicting pages in `/hot-dog/` cluster that can stay:
why-so-cheap, healthy, sodium, keto, carbs, fat, allergens, vegetarian, fun-facts, history, cheese, sauce, toppings, food-court, diet-tips, comparison, controversies

---

*This document is the authoritative reference for URL architecture decisions on costcohotdogguide.com. Final decision requires GSC data validation by June 30, 2026.*

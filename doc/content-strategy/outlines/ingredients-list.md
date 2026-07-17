# Core Page Outline: Ingredients (/ingredients/ingredients-list/)

> Target keyword: `costco hot dog ingredients` (KD 30, 2K–5K/mo)
> Semantic variants: costco hot dog ingredients list, what are costco hot dogs made of, costco hot dog filler, costco hot dog casing
> Current URL: `/ingredients/ingredients-list/`
> Word count target: 1,200–1,500 words

---

## Page Structure

### H1: Costco Hot Dog Ingredients — Complete List & Sources (2026)

### H2: Quick Answer
- Bold callout: "Costco hot dogs are made from **100% beef** — no pork, no poultry, no by-products."
- Manufactured by: Kirkland Signature (previously Hebrew National until 2009)

### H2: Full Ingredients List
- FDA-ordered ingredient list:
  - Beef
  - Water
  - Salt
  - Sodium lactate
  - Hydrolyzed corn protein
  - Dextrose
  - Sodium diacetate
  - Sodium erythorbate
  - Sodium nitrite
  - Extractives of paprika
- Table: Ingredient → Function → Safety note

### H2: The Beef Source
- Target variant: `does costco hot dog have pork` (KD 8, 500–1K/mo)
- 100% USDA-inspected beef
- No mechanically separated meat
- Internal link: `/faq/all-beef/`

### H2: What About Nitrates?
- Target variant: `does costco hot dog have nitrates` (KD 8, 300–500/mo)
- Uses sodium nitrite (a curing agent)
- "Nitrite-free" vs "no added nitrates" distinction
- Health context: nitrites in cured meats — FDA safe levels
- Internal link: `/hot-dog/sodium/`

### H2: Additive Breakdown
- Table for each additive:
  - Sodium lactate: preservative, extends shelf life, generally safe
  - Hydrolyzed corn protein: flavor enhancer (similar to MSG but not MSG)
  - Dextrose: sugar for fermentation, trace amount
  - Sodium erythorbate: speeds curing, not earthworms (common myth)
  - Sodium nitrite: curing agent, prevents botulism
- Target variant: `costco hot dog msg` (KD 8, 100–300/mo)
- Target variant: `costco hot dog filler` (KD 5, 50–200/mo)

### H2: Bun Ingredients
- Target variant: `costco hot dog bun brand` (KD 15, 300–800/mo)
- Separate bun ingredient list
- Allergen highlights: wheat, sesame, possible soy
- Internal link: `/faq/gluten-free/`

### H2: Casing
- Target variant: `costco hot dog casing` (KD 8, 100–300/mo)
- Natural lamb casing (Kosher hot dogs)
- Some locations use collagen casing

### H2: Frequently Asked Questions
- FAQPage Schema with 5 Q&A:
  1. What are Costco hot dogs made of? → 100% beef + curing agents
  2. Do Costco hot dogs have pork? → No, 100% beef
  3. Do Costco hot dogs contain nitrates? → Yes, sodium nitrite
  4. Are there fillers in Costco hot dogs? → No fillers or by-products
  5. What is the casing made of? → Natural lamb or collagen casing

---

## Internal Link Anchors (5+ required)

| Source Page | Anchor Text | Target |
|------------|-------------|--------|
| /faq/all-beef/ | "full ingredients list" | THIS PAGE |
| /hot-dog/sodium/ | "what's in the hot dog" | THIS PAGE |
| /faq/gluten-free/ | "ingredient analysis for dietary restrictions" | THIS PAGE |
| /hot-dog/allergens/ | "complete ingredient breakdown" | THIS PAGE |
| /hot-dog/healthy/ | "what's actually in it" | THIS PAGE |

---

## Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do Costco hot dogs have pork?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Costco hot dogs are made from 100% beef with no pork, poultry, or mechanically separated meat. They have been all-beef since Kirkland Signature took over production."
      }
    },
    {
      "@type": "Question",
      "name": "Do Costco hot dogs contain nitrates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Costco hot dogs contain sodium nitrite, a curing agent that prevents botulism and maintains the pink color. The amount is within FDA safe limits."
      }
    }
  ]
}
```

---

## CTA Placement

| Position | CTA | Funnel Stage |
|----------|-----|-------------|
| After Quick Answer | "See dietary guide" → /dietary/ | A→A |
| After Additive Section | "Health analysis" → /hot-dog/healthy/ | A→A |
| After FAQ | RelatedContent component | A→B→C |

---

## Meta Tags

```
<title>Costco Hot Dog Ingredients — Complete List & Sources (2026)</title>
<meta name="description" content="Full Costco hot dog ingredients list: 100% beef, no pork, no fillers. See what's in each hot dog, nitrates explained, bun ingredients, and allergen info.">
```

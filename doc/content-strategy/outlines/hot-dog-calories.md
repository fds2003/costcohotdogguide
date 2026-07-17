# Core Page Outline: Calories (/nutrition/calories/)

> Target keyword: `costco hot dog calories` (KD 35, 5K–15K/mo)
> Semantic variants: how many calories in costco hot dog, costco hot dog calories no bun, costco hot dog bun calories
> Current URL: `/nutrition/calories/`
> Word count target: 1,500–2,000 words (currently ~800, need +700–1,200)

---

## Page Structure

### H1: Costco Hot Dog Calories — Complete Breakdown (2026)

### H2: Quick Answer
- Bold callout: "A Costco hot dog combo (with bun) contains **570 calories**."
- Without bun: 370 calories
- Table: Hot dog only / Bun only / Combo

### H2: Calorie Breakdown by Component
| Component | Calories | % of Total |
|-----------|----------|-----------|
| Hot dog (meat) | 290 | 51% |
| Bun | 180 | 32% |
| Condiments (est.) | ~100 | 17% |

### H2: How Does It Compare?
- Table: Costco vs Nathan's vs McDonald's vs home-cooked
- Context: "At 570 calories, the Costco hot dog is mid-range for fast food hot dogs"
- Internal link: `/hot-dog/comparison/` → "See full comparison"

### H2: Calories Without the Bun
- Target variant: `costco hot dog calories no bun` (KD 10, 1K–3K/mo)
- Highlight: 370 calories without bun — keto-friendly
- Table: With bun vs without bun across all menu items
- Internal link: `/hot-dog/keto/` → "Keto diet guide"

### H2: Interactive Nutrition Calculator
- Embed: NutritionCalculator component (already present)
- 300+ words of SEO content below calculator
- Internal link: `/tools/nutrition-calculator/`

### H2: Weight Watchers Points
- Target variant: `costco hot dog weight watchers points` (KD 12, 200–500/mo)
- Table: WW SmartPoints per serving
- Internal link: `/nutrition/weight-watchers-points/`

### H2: Burning 570 Calories
- Fun visual: Walking (90 min), Running (45 min), Cycling (60 min)
- Light engagement content

### H2: Frequently Asked Questions
- FAQPage Schema with 5 Q&A:
  1. How many calories in a Costco hot dog without bun? → 370
  2. How many calories in just the bun? → 180
  3. Is the Costco hot dog high in calories? → Moderate for fast food
  4. How many calories in a Costco hot dog combo meal? → 570 (hot dog) + drink calories
  5. How does Costco hot dog calories compare to other fast food? → See comparison table

---

## Internal Link Anchors (5+ required)

| Source Page | Anchor Text | Target |
|------------|-------------|--------|
| /faq/gluten-free/ | "calorie count for the gluten-free version" | THIS PAGE |
| /nutrition/protein/ | "complete calorie breakdown" | THIS PAGE |
| /hot-dog/keto/ | "calories without the bun" | THIS PAGE |
| /tutorials/calories-without-bun/ | "full calorie analysis" | THIS PAGE |
| /hot-dog/healthy/ | "how many calories it contains" | THIS PAGE |

---

## Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many calories in a Costco hot dog without bun?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Costco hot dog without the bun contains approximately 370 calories, with 24g of protein and 33g of fat."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories in a Costco hot dog combo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The full Costco hot dog combo with bun contains 570 calories. Adding a soda brings the total meal to approximately 730-830 calories depending on drink size."
      }
    }
  ]
}
```

---

## CTA Placement

| Position | CTA | Funnel Stage |
|----------|-----|-------------|
| After Quick Answer | "Use our Nutrition Calculator" → /tools/nutrition-calculator/ | A→B |
| After Comparison | "Read our Air Fryer Guide" → /tutorials/air-fryer/ | A→B |
| After FAQ | "Shop Kitchen Tools" → RelatedProducts (Stage B) | B→C |
| Page bottom | RelatedContent component | A→B→C |

---

## Meta Tags

```
<title>Costco Hot Dog Calories — Complete Breakdown with and without Bun</title>
<meta name="description" content="A Costco hot dog combo has 570 calories. See the full breakdown with and without bun, Weight Watchers points, and compare to other fast food hot dogs.">
```

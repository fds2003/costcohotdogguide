# Core Page Outline: Nutrition Facts (/nutrition/)

> Target keyword: `costco hot dog nutrition` (KD 32, 3K–8K/mo)
> Semantic variants: costco hot dog nutrition facts, costco hot dog macros, costco hot dog protein
> Current URL: `/nutrition/` (hub page)
> Word count target: 1,500–2,000 words

---

## Page Structure

### H1: Costco Hot Dog Nutrition Facts — Full Macro & Micro Breakdown

### H2: Quick Nutrition Summary
- Bold callout table:

| Nutrient | With Bun | Without Bun | % Daily Value |
|----------|----------|-------------|---------------|
| Calories | 570 | 370 | 19–29% |
| Protein | 24g | 24g | 48% |
| Total Fat | 33g | 33g | 42–51% |
| Carbs | 46g | 3g | 15% |
| Sodium | 1,050mg | 810mg | 35–46% |

### H2: Complete Nutrition Label
- Full FDA-style nutrition label (already partially present)
- Add: Cholesterol, Potassium, Vitamin D, Iron, Calcium
- Source: USDA FoodData Central + Kirkland Signature packaging

### H2: Protein Content
- Target variant: `costco hot dog protein` (KD 20, 500–1.5K/mo)
- "24g of protein per serving — more than 3 eggs"
- Comparison: Costco hot dog vs chicken breast vs eggs vs protein bar
- Internal link: `/nutrition/protein/`

### H2: Fat & Cholesterol Breakdown
- Target variant: `costco hot dog fat content` (KD 8, 200–500/mo)
- Saturated vs unsaturated breakdown
- Cholesterol: 80mg (27% DV)
- "Is the fat content concerning? See our health analysis"
- Internal link: `/hot-dog/healthy/`

### H2: Sodium Content
- Target variant: `costco hot dog sodium` (KD 10, 300–800/mo)
- 1,050mg with bun = 46% of daily limit
- "One hot dog nearly hits half your daily sodium ceiling"
- Tips for reducing sodium: skip the bun, go easy on condiments
- Internal link: `/hot-dog/sodium/`

### H2: Carbohydrates & Fiber
- Target variant: `costco hot dog carbs` (KD 10, 300–800/mo)
- Without bun: only 3g carbs — excellent for keto
- With bun: 46g carbs
- Internal link: `/hot-dog/keto/`

### H2: Micronutrients
- Iron: 15% DV
- Vitamin B12: 20% DV
- Zinc: 10% DV
- Niacin: 15% DV

### H2: Frequently Asked Questions
- FAQPage Schema with 5 Q&A:
  1. What are the nutrition facts for a Costco hot dog? → Full macro table
  2. How much protein in a Costco hot dog? → 24g per serving
  3. Is Costco hot dog high in sodium? → Yes, 1,050mg (46% DV)
  4. How many carbs in a Costco hot dog without bun? → Only 3g
  5. Does Costco hot dog have any vitamins? → B12, Iron, Zinc, Niacin

---

## Internal Link Anchors (5+ required)

| Source Page | Anchor Text | Target |
|------------|-------------|--------|
| /nutrition/calories/ | "complete nutrition facts" | THIS PAGE |
| /nutrition/macros/ | "detailed macro breakdown" | THIS PAGE |
| /hot-dog/healthy/ | "full nutrition data" | THIS PAGE |
| /faq/gluten-free/ | "nutrition information for dietary restrictions" | THIS PAGE |
| /tools/nutrition-calculator/ | "see all nutrition data" | THIS PAGE |

---

## Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the nutrition facts for a Costco hot dog?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Costco hot dog with bun contains 570 calories, 24g protein, 33g fat, 46g carbs, and 1,050mg sodium. Without the bun: 370 calories, 24g protein, 33g fat, 3g carbs."
      }
    },
    {
      "@type": "Question",
      "name": "How much protein is in a Costco hot dog?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each Costco hot dog contains 24 grams of protein, which is 48% of the recommended daily value — more protein than 3 large eggs."
      }
    }
  ]
}
```

---

## CTA Placement

| Position | CTA | Funnel Stage |
|----------|-----|-------------|
| After Quick Summary | "Try Nutrition Calculator" → /tools/nutrition-calculator/ | A→B |
| After Protein Section | "Best kitchen scales for tracking macros" → RelatedProducts | B→C |
| After FAQ | RelatedContent component | A→B→C |

---

## Meta Tags

```
<title>Costco Hot Dog Nutrition Facts — Complete Macro & Micro Breakdown</title>
<meta name="description" content="Full Costco hot dog nutrition facts: 570 calories, 24g protein, 33g fat, 1,050mg sodium. See macros with and without bun, plus vitamin and mineral content.">
```

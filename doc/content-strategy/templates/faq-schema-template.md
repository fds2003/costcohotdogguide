# FAQ JSON-LD Schema Template

> Change: `costco-seo-content-roadmap`
> Standard: All FAQ pages MUST use this template for Schema markup
> Validation: Google Rich Results Test (https://search.google.com/test/rich-results)

---

## 1. Standard FAQPage Template

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "QUESTION TEXT HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER TEXT HERE"
      }
    }
  ]
}
```

---

## 2. Required Fields Checklist

| Field | Required | Description | Validation Rule |
|-------|----------|-------------|----------------|
| `@context` | ✅ | Must be `"https://schema.org"` | Exact string match |
| `@type` | ✅ | Must be `"FAQPage"` at root level | Exact string match |
| `mainEntity` | ✅ | Array of Question objects | Must be non-empty array |
| `Question.name` | ✅ | The question text | Must match visible `<h3>` or `<strong>` on page |
| `Question.acceptedAnswer` | ✅ | Answer object | Must contain `@type: "Answer"` and `text` |
| `Answer.text` | ✅ | The answer text | Must match visible answer text on page |
| `Answer.@type` | ✅ | Must be `"Answer"` | Exact string match |

---

## 3. Example: Dietary Restriction FAQ

**Use case**: `/faq/gluten-free/` — "Are Costco hot dogs gluten free?"

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are Costco hot dogs gluten free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Costco hot dog itself (meat only) is gluten free, as it contains only beef and curing agents with no wheat ingredients. However, the bun contains wheat and is NOT gluten free. If you have celiac disease or gluten sensitivity, order the hot dog without the bun and inform the food court staff about your dietary restriction."
      }
    },
    {
      "@type": "Question",
      "name": "Are Costco hot dog buns gluten free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, Costco hot dog buns are not gluten free. They contain wheat flour as a primary ingredient. For a gluten free option, order the hot dog without the bun and bring your own gluten free bun, or enjoy it wrapped in lettuce."
      }
    },
    {
      "@type": "Question",
      "name": "Does Costco sell gluten free hot dog buns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many Costco locations carry gluten free bun options in the bakery section, typically from brands like Canyon Bakehouse or Schar. These are sold in the warehouse aisles, not at the food court."
      }
    }
  ]
}
```

---

## 4. Example: Ingredient FAQ

**Use case**: `/ingredients/ingredients-list/` — "Do Costco hot dogs have pork?"

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
        "text": "No. Costco hot dogs are made from 100% beef with no pork, poultry, or mechanically separated meat. The Kirkland Signature all-beef hot dog has been pork-free since its introduction. Costco switched from Hebrew National to their own Kirkland Signature brand in 2009 to maintain quality control and ensure the product remains 100% beef."
      }
    },
    {
      "@type": "Question",
      "name": "Are Costco hot dogs all beef?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Costco food court hot dogs are 100% all beef. The Kirkland Signature beef hot dog contains no pork, chicken, turkey, or mechanically separated meat. The only animal protein source is USDA-inspected beef."
      }
    }
  ]
}
```

---

## 5. Example: Nutrition FAQ

**Use case**: `/nutrition/calories/` — "How many calories in a Costco hot dog?"

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many calories in a Costco hot dog?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Costco hot dog combo with bun contains 570 calories. Without the bun, the hot dog itself has approximately 370 calories. The full combo includes a 20oz fountain drink, which adds approximately 160-260 calories depending on the beverage chosen."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories in a Costco hot dog without the bun?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Costco hot dog without the bun contains approximately 370 calories, with 24g of protein, 33g of fat, and only 3g of carbohydrates. This makes it a popular option for keto and low-carb diets."
      }
    }
  ]
}
```

---

## 6. Validation Instructions

### Step 1: Syntax Validation
1. Copy the JSON-LD block from the page source
2. Paste into [Google Rich Results Test](https://search.google.com/test/rich-results)
3. Click "Test URL" or "Test Code"
4. Expected result: "Page is eligible for rich results" with FAQPage detected

### Step 2: Content Match
- Every `Question.name` MUST appear as visible text on the page (in an `<h3>`, `<strong>`, or similar)
- Every `Answer.text` MUST match the visible answer content
- Google may penalize pages where Schema content doesn't match visible content

### Step 3: Count Check
- Minimum: 2 Q&A pairs (Google requirement)
- Recommended: 3–5 Q&A pairs for optimal snippet coverage
- Maximum: No hard limit, but 5–8 is practical for page UX

---

## 7. Common Errors Checklist

| # | Error | Cause | Fix |
|---|-------|-------|-----|
| 1 | Rich Results Test shows "No items detected" | JSON-LD not in `<head>` or malformed | Ensure `<script type="application/ld+json">` is in the `<head>` section |
| 2 | Duplicate FAQPage entries | Multiple `<script>` blocks with `@type: FAQPage` | Merge into single JSON-LD block |
| 3 | Missing closing `}` or `]` | JSON syntax error | Validate with JSONLint before deploying |
| 4 | `Question.name` doesn't match page content | Schema and visible text out of sync | Copy exact question text from the page |
| 5 | `Answer.text` contains HTML tags | Schema text should be plain text only | Strip HTML tags from `text` field |
| 6 | FAQ not appearing in search results | Page not indexed or Google hasn't processed Schema | Submit URL to GSC; wait 3–7 days |
| 7 | Only one Q&A pair shown | Google displays 1–3 Q&A in snippet | Add more Q&A pairs; 5+ increases snippet chances |
| 8 | Escaped quotes in text | Unescaped `"` in JSON values | Use `\"` or rephrase to avoid quotes |

---

## 8. Astro Implementation Pattern

In Astro pages, embed the Schema as a raw string in the `<head>`:

```astro
---
const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are Costco hot dogs gluten free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The hot dog itself is gluten free, but the bun is not."
      }
    }
  ]
});
---

<head>
  <!-- other head elements -->
  <script type="application/ld+json" set:html={faqSchema} />
</head>
```

This pattern is already used in the project's `BaseLayout.astro` and `ReviewLayout.astro`.

---

*All FAQ pages on costcohotdogguide.com should follow this template. Deviations require explicit justification in code review.*

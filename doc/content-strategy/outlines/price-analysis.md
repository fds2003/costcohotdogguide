# Core Page Outline: Price Analysis (/price/)

> Target keyword: `costco hot dog price` (KD 30, 5K–10K/mo)
> Semantic variants: costco hot dog combo price, why is costco hot dog so cheap, costco hot dog price increase, costco hot dog price history
> Current URL: `/price/`
> Word count target: 1,500–2,000 words

---

## Page Structure

### H1: Costco Hot Dog Price — Why It's Still $1.50 After 40 Years

### H2: Quick Answer
- Bold callout: "The Costco hot dog combo has cost **$1.50** since 1985 — over 40 years without a price increase."
- Combo includes: hot dog + 20oz soda

### H2: Price History Timeline
- Embed: PriceHistoryChart component (already present)
- Timeline: 1985 ($1.50) → 2026 ($1.50) — never changed
- Inflation-adjusted: $1.50 in 1985 = ~$4.50 in 2026 dollars
- Internal link: `/tools/price-history/`

### H2: Why Is It So Cheap?
- Target variant: `why is costco hot dog so cheap` (KD 35, 1K–3K/mo)
- Business strategy analysis:
  1. **Loss leader**: Costco loses money on the hot dog to get you in the store
  2. **Vertical integration**: Kirkland Signature manufactures the hot dogs
  3. **Economies of scale**: 150M+ hot dogs sold per year
  4. **Executive mandate**: Craig Jelinek promised the board the price would stay
  5. **In-house production**: Moved from Hebrew National to Kirkland factory to control costs
- Internal link: `/hot-dog/why-so-cheap/`

### H2: Price Compared to Competitors
- Table:

| Item | Price | Price per oz |
|------|-------|-------------|
| Costco Hot Dog Combo | $1.50 | $0.19 |
| Nathan's Famous (Coney Island) | $5.00 | $0.42 |
| 7-Eleven Big Bite | $2.29 | $0.24 |
| Ballpark Stadium Hot Dog | $6.00+ | $0.50+ |
| Home-cooked (pack of 8) | ~$0.75 each | $0.06 |

- Internal link: `/hot-dog/comparison/`

### H2: Will the Price Ever Increase?
- Target variant: `costco hot dog price increase` (KD 28, 1K–3K/mo)
- Historical attempts to raise the price
- Craig Jelinek's famous quote: "If you raise the price of the hot dog, I'll kill you"
- Current signals: food court changes, menu simplifications
- Internal link: `/price/price-increase/`

### H2: What Does $1.50 Get You?
- Value breakdown:
  - 1/4 lb all-beef hot dog
  - Soft bun
  - 20 oz fountain drink (Coca-Cola products)
  - Sauerkraut and onions (at most locations)
  - Unlimited relish, mustard, ketchup

### H2: Membership Required?
- Target variant: `can you get costco hot dog without membership` (KD 10, 500–1K/mo)
- Most locations: yes, membership required
- Some locations with outdoor food courts: no membership
- Food court app ordering: still requires membership
- Internal link: `/faq/`

### H2: Frequently Asked Questions
- FAQPage Schema with 5 Q&A:
  1. How much is a hot dog at Costco? → $1.50 for the combo (hot dog + soda)
  2. Has the Costco hot dog price ever increased? → No, $1.50 since 1985
  3. Why is the Costco hot dog so cheap? → Loss leader strategy + vertical integration
  4. Can I buy a hot dog at Costco without membership? → Most locations require membership
  5. How much would the hot dog cost with inflation? → Approximately $4.50 in 2026 dollars

---

## Internal Link Anchors (5+ required)

| Source Page | Anchor Text | Target |
|------------|-------------|--------|
| /hot-dog/why-so-cheap/ | "current price details" | THIS PAGE |
| /tools/price-history/ | "why the price never changes" | THIS PAGE |
| /price/price-increase/ | "the famous $1.50 price" | THIS PAGE |
| /articles/membership-worth-it/ | "$1.50 hot dog combo" | THIS PAGE |
| /faq/ | "hot dog combo price" | THIS PAGE |

---

## Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much is a hot dog at Costco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Costco hot dog combo costs $1.50 and includes a 1/4 lb all-beef hot dog with bun and a 20 oz fountain drink. This price has remained unchanged since 1985."
      }
    },
    {
      "@type": "Question",
      "name": "Has the Costco hot dog price ever increased?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The Costco hot dog combo has cost $1.50 since it was introduced in 1985. In inflation-adjusted terms, this is equivalent to approximately $4.50 in 2026 dollars — meaning today's customers are getting a 67% discount compared to 1985 prices."
      }
    }
  ]
}
```

---

## CTA Placement

| Position | CTA | Funnel Stage |
|----------|-----|-------------|
| After Quick Answer | "See 40-year price timeline" → /tools/price-history/ | A→B |
| After Why Cheap | "Is membership worth it?" → /savings/membership-calculator/ | A→C |
| After FAQ | RelatedContent component | A→B→C |

---

## Meta Tags

```
<title>Costco Hot Dog Price — Why It's Still $1.50 After 40 Years</title>
<meta name="description" content="The Costco hot dog combo has cost $1.50 since 1985. See the 40-year price history, why it's so cheap, inflation-adjusted value, and whether the price will ever increase.">
```

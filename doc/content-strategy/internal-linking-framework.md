# Internal Linking Framework

> Change: `costco-seo-content-roadmap`
> Purpose: Define rules for strategic internal linking across A/B/C funnel pages
> Implementation: `generate-internal-links.cjs` (algorithm) + `related-content.json` (manual overrides)

---

## 1. Page-Type Weight Matrix

Internal link priority follows the A→B→C funnel direction. Forward links (A→B, B→C) carry the most SEO value.

| From \ To | FAQ (A) | Tutorial (B) | Tool (B) | Review (C) | Article (A) |
|-----------|---------|-------------|----------|------------|-------------|
| **FAQ (A)** | 0.3 | **0.9** | **0.8** | 0.6 | 0.4 |
| **Tutorial (B)** | 0.5 | 0.3 | 0.6 | **0.8** | 0.3 |
| **Tool (B)** | 0.5 | 0.6 | 0.3 | **0.9** | 0.3 |
| **Review (C)** | **0.7** | 0.4 | 0.3 | 0.3 | 0.3 |
| **Article (A)** | 0.5 | **0.8** | **0.7** | 0.5 | 0.3 |

### Link Count Rules

| Page Type | Min Outbound Links | Max Outbound Links | Min Inbound Links |
|-----------|-------------------|-------------------|------------------|
| FAQ (A) | 2 | 5 | 3+ |
| Tutorial (B) | 2 | 6 | 3+ |
| Tool (B) | 2 | 4 | 3+ |
| Review (C) | 2 | 5 | 4+ |
| Article (A) | 3 | 8 | 2+ |

**Key rule**: Every new page MUST have at least 3 inbound links from existing pages before GSC submission.

---

## 2. Anchor Text Strategy

| Type | Proportion | Description | Example |
|------|-----------|-------------|---------|
| **Exact match** | ≤ 40% | Contains the target keyword exactly | "Costco hot dog calories" |
| **Partial match** | 40% | Contains part of the target keyword | "calorie breakdown" |
| **Branded/Natural** | 20% | Natural language without keyword | "see the full details" or "learn more" |

### Anchor Text Examples by Funnel Direction

| Direction | Exact Match | Partial Match | Natural |
|-----------|-------------|---------------|---------|
| A→B | "nutrition calculator" | "calculate your macros" | "try our free tool" |
| B→C | "best air fryer" | "top-rated kitchen tools" | "what we recommend" |
| C→A | "is it gluten free" | "dietary restrictions" | "back to basics" |
| A→A | "costco hot dog protein" | "protein content" | "more nutrition info" |

---

## 3. Contextual Link Placement Rules

### Rule 1: Body Paragraph Preferred
- Internal links in body paragraphs carry more weight than sidebar/footer links
- Place at least 60% of internal links within the main content body
- RelatedContent component links count as supplemental (not body)

### Rule 2: Minimum 50 Words of Surrounding Context
- Every internal link should have at least 50 words of relevant text before and after
- No "link dump" sections — each link needs contextual justification

### Rule 3: First Link Priority
- If the same target URL appears multiple times on a page, only the first occurrence's anchor text counts for SEO
- Use descriptive anchor for the first occurrence; subsequent can use "learn more"

### Rule 4: Don't Over-Link
- Maximum 1 internal link per 150 words of content
- A 1,000-word page should have 4–6 internal links maximum

---

## 4. Topic Tag Secondary Matching

### Tag System
Each page is tagged with topic tags. Pages sharing 2+ tags are candidates for cross-linking.

| Tag Category | Example Tags |
|-------------|-------------|
| **Food item** | `hot-dog`, `pizza`, `chicken`, `food-court` |
| **Nutrition** | `calories`, `protein`, `sodium`, `carbs`, `keto` |
| **Dietary** | `gluten-free`, `vegan`, `halal`, `kosher`, `allergens` |
| **Cooking** | `air-fryer`, `oven`, `grill`, `recipe`, `at-home` |
| **Business** | `price`, `history`, `brand`, `costco-strategy` |
| **Product** | `kitchen`, `supplements`, `outdoor`, `furniture` |

### Matching Rules
- Same tag: +0.3 score
- 2+ shared tags: +0.5 score
- 3+ shared tags: +0.7 score
- Funnel forward direction (A→B or B→C): +0.1 bonus
- C→A (reverse direction): +0.05 bonus (encourages loop closure)

---

## 5. Example Link Scenarios

### Scenario 1: FAQ → Tool (A→B)
**Before** (no link):
> The Costco hot dog contains 570 calories with the bun. This includes 24g of protein and 33g of fat.

**After** (with contextual link):
> The Costco hot dog contains 570 calories with the bun. This includes 24g of protein and 33g of fat. Want to see how different menu items add up? Try our **nutrition calculator** to build your meal and see real-time totals.

### Scenario 2: Tutorial → Review (B→C)
**Before**:
> Air frying your Costco hot dog takes just 5 minutes at 375°F. It produces a crispy exterior while keeping the inside juicy.

**After**:
> Air frying your Costco hot dog takes just 5 minutes at 375°F. It produces a crispy exterior while keeping the inside juicy. We've tested over a dozen models — see our **best air fryer review** for the top picks that handle hot dogs perfectly.

### Scenario 3: Review → FAQ (C→A, reverse link)
**Before**:
> The Ninja AF101 is our top pick for cooking Costco hot dogs at home.

**After**:
> The Ninja AF101 is our top pick for cooking Costco hot dogs at home. Curious about what's actually in that hot dog? Our **ingredients breakdown** covers every additive and what it does.

### Scenario 4: Cross-topic Link via Shared Tags
Page: `/hot-dog/sodium/` (tags: `hot-dog`, `sodium`, `health`)
Target: `/hot-dog/healthy/` (tags: `hot-dog`, `health`, `nutrition`)
Shared tags: `hot-dog`, `health` → 2+ shared → candidate

**Link**: "While sodium is a concern, see our full analysis of **whether the Costco hot dog is healthy** overall."

### Scenario 5: Article → Multiple Targets (A→B→C)
Page: `/articles/membership-worth-it/` (tags: `price`, `costco-strategy`, `membership`)

**Link B**: "Calculate your exact savings with our **membership calculator**" → /savings/membership-calculator/
**Link C**: "Once you've saved on membership, check out our **kitchen appliance reviews**" → /reviews/kitchen-appliances/

---

## 6. Automation

### Script: `generate-internal-links.cjs`
- Located at: `src/scripts/generate-internal-links.cjs`
- Algorithm: category(0.4) + tags/Jaccard(0.3) + topic(0.3), threshold ≥ 0.6
- Funnel forward bonus: +0.1
- Output: `src/data/internal-links.json` (111 pages with recommendations)

### Manual Overrides: `related-content.json`
- Located at: `src/data/related-content.json`
- Curated editorial links that override algorithmic suggestions
- Updated when new pages are added

### RelatedContent Component
- Reads from `related-content.json` (primary) or `internal-links.json` (fallback)
- Renders A/B/C stage cards with GA4 `funnel_progression` events
- Automatically infers `from_stage` from URL path

---

*This framework is the authoritative reference for all internal linking decisions on costcohotdogguide.com. The algorithmic system (`generate-internal-links.cjs`) handles scale; manual overrides (`related-content.json`) handle editorial quality.*

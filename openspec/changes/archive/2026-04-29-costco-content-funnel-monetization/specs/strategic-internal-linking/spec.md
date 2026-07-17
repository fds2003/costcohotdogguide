## ADDED Requirements

### Requirement: Semantic internal linking script exists
The system SHALL include `scripts/generate-internal-links.js` that reads all content pages' frontmatter (`topic`, `category`, `tags`) and generates a `src/data/internal-links.json` mapping each page to its top 3 most semantically related other pages.

#### Scenario: Script generates link recommendations
- **WHEN** a developer runs `node scripts/generate-internal-links.js`
- **THEN** `src/data/internal-links.json` is created with entries like `{ "/faq/dairy-free/": ["/tutorials/nutrition-guide/", "/reviews/kitchen/", "/menu/hot-dog/"] }`

### Requirement: Semantic matching uses category and topic overlap
The linking algorithm SHALL score page relationships based on: shared `category` (weight 0.4), shared `tags` (weight 0.3), and keyword overlap in `topic` (weight 0.3). Pages must score >= 0.6 to be recommended.

#### Scenario: High relevance pages are linked
- **WHEN** a hot dog nutrition FAQ page is processed
- **THEN** the script recommends the nutrition calculator tool and the kitchen scale review because they share nutrition/cooking topics

### Requirement: Internal links are rendered as contextual content blocks
Internal links SHALL NOT be rendered as simple inline text links. They SHALL be displayed as styled cards with page title, brief description, and a "Read More" button in a "Related Content" section.

#### Scenario: Related content cards are visible
- **WHEN** a user views a FAQ page
- **THEN** a "Related Content" section at the bottom displays 2-3 card components with images, titles, and descriptions linking to related pages

### Requirement: Cross-layer links prioritize funnel progression
When a page has related content across multiple funnel stages, the linking script SHALL prioritize recommending the next stage in the funnel (A→B, B→C) over same-stage or reverse-stage links.

#### Scenario: FAQ recommends tutorial before review
- **WHEN** a FAQ page (stage A) has related tutorial (stage B) and review (stage C) pages
- **THEN** the "Related Content" section prioritizes showing the tutorial page first

### Requirement: Internal links are manually reviewable
The script SHALL output a Markdown report at `reports/internal-links-review.md` listing all recommended links with their semantic scores, allowing the developer to approve or reject each recommendation before build.

#### Scenario: Link report is reviewable
- **WHEN** the script completes
- **THEN** a Markdown report is generated showing each source page, recommended target pages, and relevance scores for manual verification

### Requirement: Hot dog pages link to calculator and reviews
All existing hot dog-related pages (`/guide/`, `/menu/hot-dog/`, `/nutrition/calories/`) SHALL include at least one link to `/tools/nutrition-calculator/` and one to a relevant `/reviews/` page.

#### Scenario: Hot dog page has strategic links
- **WHEN** a user reads the hot dog nutrition page
- **THEN** a contextual section links to the nutrition calculator and a kitchen scale review

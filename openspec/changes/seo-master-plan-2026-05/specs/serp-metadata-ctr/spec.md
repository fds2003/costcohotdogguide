## ADDED Requirements

### Requirement: Priority pages expose CTR-optimized title and description
The site SHALL set unique, compelling `<title>` and meta `description` on GSC-priority URLs identified in `doc/SEO-MASTER-PLAN-2026-05.md`, including at minimum: `/guide/`, `/hot-dog/calories/`, **`/tools/price-history/`**, `/hot-dog/sodium/`, `/hot-dog/price/`. Descriptions SHALL include verifiable numbers or clear value props (year, combo facts, interactive tool) without contradicting page body copy.

#### Scenario: Tool price history page emphasizes interactive value
- **WHEN** a crawler or user inspects `/tools/price-history/`
- **THEN** the title or description references the interactive chart and multi-decade $1.50 narrative where accurate

#### Scenario: Guide page SERP matches search intent
- **WHEN** the `/guide/` page appears in SERP for high-impression queries
- **THEN** the snippet reflects nutrition, price history, ingredients, and freshness signals per Master Plan

### Requirement: Price history tool path is not conflated with narrative history page
Marketing and meta copy SHALL distinguish **`/tools/price-history/`** (interactive tool) from **`/hot-dog/price-history/`** (editorial history). TD rewrite tasks SHALL target both where applicable without duplicate boilerplate.

#### Scenario: Internal docs reference correct URL for interactive chart
- **WHEN** developers implement SEO tasks from `tasks.md`
- **THEN** checklist items for interactive chart updates point to `/tools/price-history/` unless explicitly editorial

### Requirement: Optional combo-change content follows fact-checking
Any copy about 2026 combo options (e.g. water vs soda) SHALL be verified against current facts or framed as conditional/on-store; optional `/hot-dog/water-option/` route is gated by search demand and editorial approval.

#### Scenario: Unverified rumor is not stated as fact
- **WHEN** official sources conflict or are unclear
- **THEN** pages use neutral language and link to `/menu/new/` for updates

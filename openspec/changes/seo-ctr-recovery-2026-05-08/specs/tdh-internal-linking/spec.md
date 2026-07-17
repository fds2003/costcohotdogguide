## ADDED Requirements

### Requirement: Core pages must follow TDH hierarchy conventions
Core SEO pages SHALL maintain one unique H1 and intent-aligned H2/H3 sections to reduce ambiguity between SERP promise and on-page structure.

#### Scenario: H1 remains unique and page-specific
- **WHEN** a core page is audited (`/guide/`, `/hot-dog/calories/`, `/hot-dog/faq/`, `/hot-dog/price/`)
- **THEN** exactly one H1 is present
- **AND** H2/H3 headings reflect dominant query intents

### Requirement: Core pages must be reachable via meaningful internal links
The site SHALL ensure important pages are not isolated and can be reached from hub content through contextual anchor links.

#### Scenario: Guide routes users to key destinations
- **WHEN** `/guide/` is rendered
- **THEN** users can navigate to calories, ingredients, price, and faq detail pages through visible contextual links

#### Scenario: No core page is orphaned
- **WHEN** internal linking is audited
- **THEN** every core SEO page is linked by at least one other page body section
- **AND** links use descriptive anchor text rather than generic "click here"

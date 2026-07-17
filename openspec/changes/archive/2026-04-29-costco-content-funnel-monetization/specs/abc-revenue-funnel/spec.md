## ADDED Requirements

### Requirement: Content pages declare their funnel stage
All content pages (FAQ, tutorial, review) SHALL include a `funnelStage` field in their frontmatter with values: `A` (trust/awareness), `B` (kitchen/tools), or `C` (high-ticket lifestyle).

#### Scenario: Page declares funnel stage
- **WHEN** a developer inspects the frontmatter of a content page
- **THEN** the `funnelStage` field is present with value A, B, or C

### Requirement: RelatedProducts component uses funnel stage to select products
The `RelatedProducts` Astro component SHALL accept a `funnelStage` prop and automatically select products from the appropriate catalog: stage A uses trust-building products (nutrition guides), stage B uses kitchen tools ($15-100), stage C uses high-ticket lifestyle products ($50-500).

#### Scenario: Funnel stage drives product selection
- **WHEN** a FAQ page (stage A) renders RelatedProducts
- **THEN** it displays low-ticket trust items like recipe books or nutrition guides
- **WHEN** a tutorial page (stage B) renders RelatedProducts
- **THEN** it displays kitchen tools like air fryers and kitchen scales
- **WHEN** a review page (stage C) renders RelatedProducts
- **THEN** it displays high-ticket items like premium appliances and supplements

### Requirement: A-stage pages focus on trust-building without hard selling
A-stage pages (FAQ) SHALL NOT contain direct affiliate product CTAs in the main content area. Affiliate links, if any, shall be limited to the "Learn More" next-step section at the bottom.

#### Scenario: FAQ page avoids hard selling
- **WHEN** a user reads a FAQ answer
- **THEN** the answer text contains no "Buy Now" buttons or affiliate links, only informational content

### Requirement: B-stage pages naturally introduce kitchen tools
B-stage pages (tutorials) SHALL introduce kitchen tools and appliances as natural extensions of the tutorial content, using contextual language like "For best results, we recommend..." rather than direct advertising language.

#### Scenario: Tutorial recommends tools naturally
- **WHEN** a user reads an air fryer cooking tutorial
- **THEN** the tutorial mentions specific air fryer models as "the tool we used and recommend" with an optional affiliate link

### Requirement: C-stage pages directly promote high-ticket products
C-stage pages (reviews) SHALL prominently display Amazon affiliate links with clear "See Price on Amazon" or "Check Current Price" CTA buttons, as users at this stage have indicated purchase intent.

#### Scenario: Review page has prominent CTAs
- **WHEN** a user reads a product review
- **THEN** multiple prominent CTA buttons are visible throughout the page, especially after the pros/cons section

### Requirement: Funnel progression is tracked in GA4
Each funnel stage transition (A→B, B→C) SHALL fire a GA4 custom event (`funnel_progression`) with parameters `from_stage` and `to_stage` when a user clicks a next-step link.

#### Scenario: GA4 tracks funnel movement
- **WHEN** a user clicks a "Learn More" link from a FAQ page to a tutorial page
- **THEN** a GA4 event is fired with `{ event_name: "funnel_progression", from_stage: "A", to_stage: "B" }`

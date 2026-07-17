## ADDED Requirements

### Requirement: Review pages use dedicated route and layout
The system SHALL generate review pages under `/reviews/[category]/[slug]/` using a dedicated `ReviewLayout.astro` which includes product comparison tables, Amazon CTA buttons, star ratings, pros/cons lists, and Product Schema.

#### Scenario: Review page has correct layout
- **WHEN** a user visits `/reviews/kitchen/best-air-fryer-for-costco/`
- **THEN** the page displays a comparison table, "See Price on Amazon" buttons, and structured pros/cons sections

### Requirement: Review pages use orange visual theme
All review pages SHALL use a consistent orange color theme (#F59E0B based) for headers, price tags, and CTA buttons to visually signal the "monetization layer" of the content funnel.

#### Scenario: Review page has orange theme
- **WHEN** a user visits any review page
- **THEN** the page heading, price highlights, and CTA buttons use orange accent colors

### Requirement: Review categories cover high-ticket products
The reviews section SHALL include at least 4 categories: `kitchen` (appliances $100-500), `supplements` (health $20-60), `outdoor` (gear $50-300), and `home` (household $30-200).

#### Scenario: Category pages exist
- **WHEN** a user visits `/reviews/kitchen/`
- **THEN** a category landing page lists kitchen appliance reviews with price range filters

### Requirement: Review pages include "Related Guides" section
Each review page SHALL include a "Related Guides" section at the bottom with 2-3 links back to relevant `/tutorials/` or `/faq/` pages, completing the funnel loop.

#### Scenario: Review links back to tutorials
- **WHEN** a user scrolls to the bottom of an air fryer review
- **THEN** a "Related Guides" section displays cards linking to "How to Cook Costco Hot Dog in Air Fryer" and other relevant tutorials

### Requirement: Review pages include FTC affiliate disclosure
All review pages SHALL display an FTC-compliant affiliate disclosure near the top stating that the site earns commissions from qualifying Amazon purchases.

#### Scenario: Disclosure is visible
- **WHEN** a user lands on any review page
- **THEN** a clear disclosure banner is visible before the main content

### Requirement: Review pages include Costco price comparison
Each review page SHALL include a comparison showing the reviewed product's Amazon price vs. the equivalent Kirkland or similar product's price at Costco.

#### Scenario: Costco comparison aids decision
- **WHEN** a user reads a kitchen scale review
- **THEN** a sidebar compares the Amazon price with Costco's equivalent product pricing

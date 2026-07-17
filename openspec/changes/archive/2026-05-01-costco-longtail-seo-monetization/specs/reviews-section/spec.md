## ADDED Requirements

### Requirement: Reviews section uses dedicated route and layout
The system SHALL generate review pages under `/reviews/[category]/[slug]/` using `src/layouts/ReviewLayout.astro` which includes product comparison tables, Amazon CTA buttons, star ratings, and pros/cons lists.

#### Scenario: Review page uses correct layout
- **WHEN** a user visits `/reviews/kitchen/best-air-fryer-for-costco-hot-dogs/`
- **THEN** the page displays a product comparison table, "Buy on Amazon" buttons, and a structured pros/cons section

### Requirement: Review categories cover high-ticket products
The reviews section SHALL include at least 4 categories: `kitchen` (appliances $100-500), `supplements` (health products $20-60), `outdoor` (camping gear $50-300), and `home` (household items $30-200).

#### Scenario: Category index pages exist
- **WHEN** a user visits `/reviews/kitchen/`
- **THEN** a category landing page lists all kitchen appliance reviews with filter options by price range

### Requirement: Review pages include structured Product Schema
Each review page SHALL include Product JSON-LD structured data with `name`, `image`, `description`, `brand`, `offers` (price and availability), and `aggregateRating`.

#### Scenario: Product Schema is valid
- **WHEN** a search engine crawls a review page
- **THEN** rich snippets for the product (price, rating) may appear in search results

### Requirement: Review pages include affiliate disclosure
All review pages SHALL display an FTC-compliant affiliate disclosure banner at the top of the page stating that the site earns commissions from qualifying purchases.

#### Scenario: Disclosure is visible
- **WHEN** a user lands on any review page
- **THEN** a banner or text block near the top clearly states the affiliate relationship with Amazon

### Requirement: Review pages include Costco price comparison
Each review page SHALL include a comparison section showing the reviewed product's Amazon price vs. the equivalent or related product's price at Costco (if available), to maintain brand relevance.

#### Scenario: Costco comparison is present
- **WHEN** a user reads a review of a digital kitchen scale
- **THEN** a sidebar or section compares the Amazon price with Costco's Kirkland or similar product pricing

### Requirement: Review index page links from main navigation
The `/reviews/` index page SHALL be accessible from the main site navigation with a dropdown menu showing the 4 product categories.

#### Scenario: Navigation links to reviews
- **WHEN** a user hovers over "Reviews" in the main navigation
- **THEN** a dropdown appears with links to Kitchen, Supplements, Outdoor, and Home categories

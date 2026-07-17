## ADDED Requirements

### Requirement: High-ticket affiliate products are stored separately
High-ticket affiliate products ($50+ retail price) SHALL be stored in `src/data/affiliate-high-ticket.json` with fields: `id`, `name`, `category`, `priceRange`, `commissionRate`, `amazonUrl`, `imageUrl`, `description`, and `targetPages` (array of page patterns where this product should appear).

#### Scenario: High-ticket JSON is valid
- **WHEN** a developer opens `src/data/affiliate-high-ticket.json`
- **THEN** the file contains at least 8 products across kitchen, supplements, outdoor, and home categories

### Requirement: RelatedProducts component supports high-ticket mode
The existing `RelatedProducts` Astro component SHALL accept a new `mode` prop with values `scenario` (existing behavior) and `high-ticket` (shows products from `affiliate-high-ticket.json` matching the current page context).

#### Scenario: High-ticket products display on FAQ page
- **WHEN** `<RelatedProducts mode="high-ticket" category="kitchen" />` is used on a cooking FAQ page
- **THEN** the component displays air fryers, kitchen scales, and meat thermometers instead of low-ticket condiments

### Requirement: High-ticket products are prioritized on high-traffic pages
On pages with estimated monthly traffic > 100 visits (based on keyword search volume), the system SHALL display high-ticket affiliate products before low-ticket products in the RelatedProducts section.

#### Scenario: High-traffic page shows premium products first
- **WHEN** a user visits the hot dog detail page (high traffic)
- **THEN** the RelatedProducts section displays an air fryer or kitchen scale before ketchup or mustard

### Requirement: Affiliate links include tracking parameters
All Amazon Affiliate links SHALL include the site-wide tracking ID and a `ref` parameter identifying the content type (faq, tutorial, review, menu) for GA4 conversion attribution.

#### Scenario: Affiliate link has tracking
- **WHEN** a user clicks an affiliate link on a FAQ page
- **THEN** the URL contains the associate ID and a `ref=costcohotdogguide-faq` parameter

### Requirement: Affiliate product cards show price and rating
High-ticket affiliate product cards SHALL display the estimated price range, star rating placeholder, and a prominent "Check Price on Amazon" CTA button.

#### Scenario: Product card displays key info
- **WHEN** a user views a high-ticket affiliate product card
- **THEN** the card shows the product name, price range (e.g., "$89-$129"), a 4.5-star rating indicator, and a colored CTA button

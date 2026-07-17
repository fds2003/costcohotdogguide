## ADDED Requirements

### Requirement: Camping Gear review page with Review Schema
The system SHALL provide a Camping Gear review page at `/reviews/camping-gear/` that reviews 3-5 camping products available at Costco or comparable on Amazon. The page MUST include Review Schema structured data and Amazon Affiliate links.

#### Scenario: Page displays camping gear reviews
- **WHEN** user visits `/reviews/camping-gear/`
- **THEN** the page displays detailed reviews of camping products with ratings, pros/cons, and affiliate purchase links

#### Scenario: Review Schema is valid
- **WHEN** the page is crawled by Google
- **THEN** the page contains valid JSON-LD Review schema markup for each product reviewed

### Requirement: Furniture review page with Review Schema
The system SHALL provide a Furniture review page at `/reviews/furniture/` that reviews 3-5 furniture products/deals available at Costco. The page MUST include Review Schema structured data and Amazon Affiliate links.

#### Scenario: Page displays furniture reviews
- **WHEN** user visits `/reviews/furniture/`
- **THEN** the page displays detailed reviews of furniture products with ratings and affiliate purchase links

### Requirement: Bulk Foods review page with Review Schema
The system SHALL provide a Bulk Foods review page at `/reviews/bulk-foods/` that reviews 3-5 bulk food products available at Costco. The page MUST include Review Schema structured data and Amazon Affiliate links.

#### Scenario: Page displays bulk food reviews
- **WHEN** user visits `/reviews/bulk-foods/`
- **THEN** the page displays detailed reviews of bulk food products with ratings and affiliate purchase links

### Requirement: Review pages are linked from reviews index
The system SHALL update `/reviews/index.astro` to include clickable links to the new Camping Gear, Furniture, and Bulk Foods review pages.

#### Scenario: Navigation from reviews index
- **WHEN** user visits `/reviews/`
- **THEN** the page contains clickable cards/links to `/reviews/camping-gear/`, `/reviews/furniture/`, and `/reviews/bulk-foods/`

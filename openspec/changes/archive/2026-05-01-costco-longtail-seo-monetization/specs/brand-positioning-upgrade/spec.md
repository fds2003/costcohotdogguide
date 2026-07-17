## ADDED Requirements

### Requirement: Homepage reflects upgraded brand positioning
The site homepage SHALL include a tagline or subtitle explicitly positioning the site as "The Costco Shopper's Guide" while maintaining hot dog as the primary visual anchor and content focus.

#### Scenario: Homepage shows new positioning
- **WHEN** a user visits the homepage
- **THEN** the hero section displays text like "Your Complete Costco Shopping Guide — Starting with the Iconic $1.50 Hot Dog"

### Requirement: Navigation includes reviews and tutorials
The main navigation SHALL include "Reviews" and "Tutorials" as top-level menu items alongside existing "Menu" and "Data" sections, with dropdown menus for their subcategories.

#### Scenario: Navigation shows expanded scope
- **WHEN** a user views the main navigation bar
- **THEN** dropdown menus for Reviews (Kitchen, Supplements, Outdoor, Home) and Tutorials (Cooking, Nutrition, Savings) are visible

### Requirement: Existing hot dog pages include strategic cross-links
All existing hot dog-related pages (/guide/, /menu/hot-dog/, /nutrition/calories/) SHALL include at least one contextual link to a `/reviews/` page and one to a `/tutorials/` page using the internal linking script.

#### Scenario: Hot dog page links to expanded content
- **WHEN** a user reads the hot dog guide page
- **THEN** a contextual section like "Cook Costco Hot Dogs at Home" links to `/tutorials/hot-dog-in-air-fryer/` and "Best Kitchen Tools" links to `/reviews/kitchen/`

### Requirement: About page reflects new mission
The `/about/` page SHALL be updated to describe the site's mission as helping Costco shoppers make informed decisions about Food Court items, products, and savings strategies — not just hot dogs.

#### Scenario: About page shows expanded mission
- **WHEN** a user reads the about page
- **THEN** the content mentions the site's expanded scope beyond hot dogs to include product reviews, shopping guides, and Costco membership tips

### Requirement: Footer includes reviews and tutorials links
The site footer SHALL include quick links to `/reviews/`, `/tutorials/`, and `/faq/` index pages alongside existing links.

#### Scenario: Footer navigation is complete
- **WHEN** a user scrolls to the bottom of any page
- **THEN** the footer contains organized link groups including the new content sections

### Requirement: Meta descriptions reflect expanded keywords
All new and updated pages SHALL include meta descriptions that reference both hot dog and broader Costco shopping terms to capture dual-intent search traffic.

#### Scenario: Meta description is dual-focused
- **WHEN** a search engine indexes a review page
- **THEN** the meta description contains both "Costco" and relevant product keywords (e.g., "Discover the best air fryers for Costco shoppers...")

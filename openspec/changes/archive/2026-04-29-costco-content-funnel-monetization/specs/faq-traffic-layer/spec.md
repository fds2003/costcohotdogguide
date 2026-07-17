## ADDED Requirements

### Requirement: FAQ pages target KD < 15 dietary restriction keywords
The system SHALL generate FAQ pages for at least 10 keywords with KD < 15 covering dietary restrictions and ingredient queries: dairy free, kosher, gluten free, pork content, nitrates, MSG, all beef, halal, vegan, and soy free.

#### Scenario: Core dietary FAQ pages exist
- **WHEN** a user searches "are costco hot dog buns dairy free"
- **THEN** a dedicated FAQ page exists at `/faq/are-costco-hot-dog-buns-dairy-free/` with a clear answer and comprehensive explanation (300-500 words)

### Requirement: FAQ pages include FAQPage JSON-LD Schema
All FAQ pages SHALL include FAQPage structured data markup with each question as a `mainEntity` containing `name` (question) and `acceptedAnswer.text` (answer).

#### Scenario: FAQ Schema is valid
- **WHEN** a search engine crawls an FAQ page
- **THEN** the page contains valid FAQPage JSON-LD eligible for rich results and "People Also Ask" placement

### Requirement: FAQ pages use blue visual theme
All FAQ pages SHALL use a consistent blue color theme (#3B82F6 based) for headers, borders, and CTA elements to visually signal the "traffic layer" of the content funnel.

#### Scenario: FAQ page has blue theme
- **WHEN** a user visits any FAQ page
- **THEN** the page heading, question boxes, and "Learn More" CTA buttons use blue accent colors

### Requirement: FAQ pages include "Learn More" next-step section
Each FAQ page SHALL include a "Learn More" section at the bottom with at least 2 contextual links to relevant tutorial pages (e.g., dairy-free FAQ links to nutrition tutorial and ingredient analysis).

#### Scenario: FAQ guides user to next layer
- **WHEN** a user scrolls to the bottom of a FAQ page
- **THEN** a "Learn More" section displays cards linking to relevant `/tutorials/` pages with preview text

### Requirement: FAQ pages do not display high-ticket affiliate products
FAQ pages (funnel stage A) SHALL NOT display high-ticket affiliate products ($50+) in the RelatedProducts section. Only low-ticket trust-building products (nutrition guides, recipe books) or no products shall be shown.

#### Scenario: FAQ page shows no premium products
- **WHEN** a user views a FAQ page
- **THEN** the RelatedProducts section either shows low-ticket items under $20 or is hidden entirely

### Requirement: FAQ index page groups by category
The system SHALL generate `/faq/` as an index page grouping all FAQ entries by category (Dietary Restrictions, Ingredients, Nutrition Facts, Preparation) with a search/filter box.

#### Scenario: FAQ index is navigable
- **WHEN** a user visits `/faq/`
- **THEN** categorized groups of FAQ links are visible with a search input that filters questions in real-time

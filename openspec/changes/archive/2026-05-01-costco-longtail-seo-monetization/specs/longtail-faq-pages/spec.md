## ADDED Requirements

### Requirement: FAQ pages use a unified Astro layout with FAQPage Schema
All FAQ pages SHALL use `src/layouts/FAQLayout.astro` which includes FAQPage JSON-LD structured data, breadcrumb navigation, and a consistent question-answer format.

#### Scenario: FAQ page renders with Schema markup
- **WHEN** a search engine crawls `/faq/are-costco-hot-dog-buns-dairy-free/`
- **THEN** the page source contains valid FAQPage JSON-LD with the question as `name` and answer as `acceptedAnswer.text`

### Requirement: FAQ content is stored in Markdown with standardized frontmatter
Each FAQ page SHALL be a Markdown file in `src/content/faq/` with frontmatter fields: `question`, `answer`, `targetKeyword`, `kd`, `searchVolume`, `relatedQuestions` (array), and `lastUpdated`.

#### Scenario: FAQ Markdown file is valid
- **WHEN** a developer opens `src/content/faq/are-costco-hot-dog-buns-dairy-free.md`
- **THEN** the file contains all required frontmatter fields and at least 500 words of answer content with 2+ internal links

### Requirement: FAQ pages cover KD < 15 dietary restriction keywords
The system SHALL generate FAQ pages for at least 10 KD < 15 keywords covering dietary restrictions and ingredient queries, including: dairy free, kosher, gluten free, pork content, nitrates, MSG, all beef, halal, vegan, and soy free.

#### Scenario: Core dietary FAQ pages exist
- **WHEN** a user searches "does costco hot dog have pork"
- **THEN** a dedicated FAQ page exists at `/faq/does-costco-hot-dog-have-pork/` with a comprehensive answer

### Requirement: FAQ pages include "People Also Ask" section
Each FAQ page SHALL include a "Related Questions" section at the bottom listing at least 3 related questions with internal links to other FAQ pages.

#### Scenario: Related questions link to other FAQs
- **WHEN** a user finishes reading an FAQ about dairy free buns
- **THEN** the page displays 3 related questions like "Are Costco hot dogs gluten free?" with clickable links

### Requirement: FAQ pages include targeted affiliate recommendations
Each FAQ page SHALL include at least one high-ticket affiliate product recommendation in the answer context (e.g., dairy-free alternatives, kitchen scales for portion control) via the `affiliate-high-ticket.json` catalog.

#### Scenario: FAQ includes relevant product recommendation
- **WHEN** a user reads a FAQ about cooking hot dogs at home
- **THEN** the page displays an Amazon affiliate link to a recommended air fryer with a "Buy on Amazon" CTA button

### Requirement: FAQ index page lists all FAQ entries
The system SHALL generate `/faq/` as an index page listing all FAQ pages grouped by category (Dietary Restrictions, Ingredients, Nutrition, Preparation) with search functionality.

#### Scenario: FAQ index page is navigable
- **WHEN** a user visits `/faq/`
- **THEN** a categorized list of all FAQ pages is displayed with a search box and quick-filter buttons

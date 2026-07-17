## ADDED Requirements

### Requirement: Link framework defines page-type-to-page-type weight matrix
The system SHALL define a weight matrix specifying how many links each page type should contain to other page types.

#### Scenario: Weight matrix structure
- **WHEN** the weight matrix is reviewed
- **THEN** it defines minimum and maximum link counts from FAQ pages to: other FAQ pages, tutorial pages, review pages, core pages
- **AND** it defines minimum and maximum link counts from tutorial pages to: FAQ pages, other tutorials, review pages, core pages
- **AND** it defines minimum and maximum link counts from review pages to: FAQ pages, tutorial pages, other reviews, core pages

### Requirement: Anchor text strategy avoids exact-match over-optimization
The internal linking framework SHALL specify that anchor text uses partial match, branded, or natural language variants rather than exact-match keyword anchors for more than 50% of links.

#### Scenario: Anchor text distribution
- **WHEN** reviewing the anchor text guidelines
- **THEN** exact-match keyword anchors are limited to maximum 40% of all internal links
- **AND** partial match anchors are recommended for 40% of links
- **AND** branded or natural language anchors are recommended for 20% of links

### Requirement: Framework defines contextual link placement rules
The framework SHALL specify that contextual links (links within paragraph text) are preferred over navigation or footer links, and that each link must appear within relevant semantic context.

#### Scenario: Link placement rules
- **WHEN** reviewing link placement guidelines
- **THEN** contextual links within body paragraphs are weighted higher than sidebar or footer links
- **AND** each link must be surrounded by at least 50 words of relevant content
- **AND** no page shall contain a "related links" list without descriptive text

### Requirement: Framework includes topic tag secondary matching
The framework SHALL define a secondary matching mechanism using topic tags (e.g., "nutrition", "gluten-free", "cooking") to create cross-type links when the page-type weight matrix does not provide enough link opportunities.

#### Scenario: Topic tag matching
- **WHEN** a page has fewer than the minimum required internal links based on page-type matrix alone
- **THEN** topic tag matching is used to find additional link targets
- **AND** tag matches require at least 2 shared tags between source and target

### Requirement: Framework is stored in version-controlled Markdown
The internal linking framework SHALL be stored as a Markdown file at `doc/content-strategy/internal-linking-framework.md`.

#### Scenario: File delivery
- **WHEN** the framework is delivered
- **THEN** it exists at `doc/content-strategy/internal-linking-framework.md`
- **AND** it includes the weight matrix as a Markdown table
- **AND** it includes at least 5 example link scenarios with before/after content snippets

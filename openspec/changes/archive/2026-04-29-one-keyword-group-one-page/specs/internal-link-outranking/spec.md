## ADDED Requirements

### Requirement: Each new page receives at least 3 internal links from existing pages
The system SHALL ensure that every new keyword group page has at least 3 internal links pointing to it from existing pages at the time of launch.

#### Scenario: Link count validation
- **WHEN** a new page goes live
- **THEN** there are at least 3 distinct existing pages containing a link to the new page
- **AND** at least 2 of those links are contextual (within paragraph text, not navigation or footer)
- **AND** at least 1 of those links comes from a page in the same topic cluster

### Requirement: Anchor text distribution avoids over-optimization
The anchor text of internal links pointing to new pages SHALL follow a distribution: exact-match ≤ 40%, partial-match 40%, branded or natural language 20%.

#### Scenario: Anchor text audit
- **WHEN** auditing internal links to a new page
- **THEN** no more than 40% of anchor texts exactly match the target keyword
- **AND** at least 40% use partial-match variants (e.g., "hot dog calorie info" instead of "costco hot dog calories")
- **AND** at least 20% use branded or natural phrasing (e.g., "our nutrition guide", "read more here")

### Requirement: Link context requires surrounding relevant content
Each contextual internal link SHALL appear within at least 50 words of topically relevant content.

#### Scenario: Context validation
- **WHEN** inspecting a contextual internal link
- **THEN** the link is surrounded by at least 50 words
- **AND** those words are topically related to both the source page and the target page
- **AND** the link is not in a standalone "Related Links" list without descriptive text

### Requirement: Link source prioritizes same-topic pages over funnel hierarchy
When selecting pages to add internal links from, same-topic relevance SHALL take priority over funnel stage alignment.

#### Scenario: Source selection priority
- **WHEN** choosing which existing pages to add links from
- **THEN** pages in the same topic cluster are prioritized first
- **AND** only after same-topic options are exhausted are cross-topic links considered
- **AND** cross-topic links must still be semantically relevant (minimum 1 shared tag)

## ADDED Requirements

### Requirement: Four core page outlines cover Calories, Nutrition Facts, Ingredients, and Price
The system SHALL produce detailed content outlines for four core pages: Costco Hot Dog Calories, Nutrition Facts, Ingredients List, and Price History/Analysis.

#### Scenario: Outline completeness
- **WHEN** the outlines are reviewed
- **THEN** there are exactly 4 outline documents
- **AND** each outline corresponds to one of: Calories, Nutrition Facts, Ingredients, Price
- **AND** each outline includes H2/H3 heading structure, target keyword, word count target, internal link anchors, FAQ questions, and CTA placement

### Requirement: Each outline specifies target keywords and semantic variants
Each core page outline SHALL specify a primary target keyword and at least 3 semantic variant keywords (LSI) to be included naturally in the content.

#### Scenario: Keyword specification
- **WHEN** examining any core page outline
- **THEN** it lists exactly 1 primary target keyword
- **AND** it lists at least 3 semantic variant keywords
- **AND** keyword placement is specified for: H1, first paragraph, at least one H2, and conclusion

### Requirement: Each outline includes internal link anchor points
Each core page outline SHALL specify at least 5 internal link opportunities with suggested anchor text and target URLs.

#### Scenario: Internal link specification
- **WHEN** reviewing the internal link section of an outline
- **THEN** there are at least 5 link opportunities per outline
- **AND** each opportunity includes: anchor text suggestion, target page URL, link context (why this link makes sense)

### Requirement: Each outline includes FAQ questions for Schema markup
Each core page outline SHALL include at least 5 FAQ questions with concise answers, formatted for direct conversion to FAQPage JSON-LD Schema.

#### Scenario: FAQ question format
- **WHEN** reviewing the FAQ section of an outline
- **THEN** there are at least 5 question-answer pairs
- **AND** each answer is 40-80 words
- **AND** questions are phrased as natural user queries (not keyword-stuffed)

### Requirement: Outlines are stored in version-controlled Markdown
All outlines SHALL be stored as Markdown files in `doc/content-strategy/outlines/`.

#### Scenario: File organization
- **WHEN** the outlines are delivered
- **THEN** they exist in `doc/content-strategy/outlines/`
- **AND** each file is named: `hot-dog-calories.md`, `nutrition-facts.md`, `ingredients-list.md`, `price-analysis.md`

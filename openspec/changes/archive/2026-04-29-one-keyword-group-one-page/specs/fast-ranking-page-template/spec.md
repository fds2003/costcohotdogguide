## ADDED Requirements

### Requirement: Page template uses a standardized three-part opening paragraph
The system SHALL define a page content template where the opening paragraph follows a three-part structure: direct answer, context extension, and reading guidance.

#### Scenario: Opening paragraph structure
- **WHEN** reading the opening paragraph of a keyword group page
- **THEN** part 1 (direct answer) is 40-60 words and directly answers the core keyword query
- **AND** part 2 (context extension) is 1 sentence connecting the answer to a broader related topic
- **AND** part 3 (reading guidance) is 1 sentence encouraging the reader to continue
- **AND** the total opening paragraph is 80-120 words

### Requirement: Page template includes mandatory H2/H3 structure
Each keyword group page SHALL follow a mandatory heading structure: H1 (page title), at least 3 H2 sections, and at least 2 of those H2 sections contain H3 subsections.

#### Scenario: Heading structure validation
- **WHEN** inspecting the heading outline of a keyword group page
- **THEN** there is exactly one H1 containing the core keyword
- **AND** there are at least 3 H2 sections
- **AND** at least 2 H2 sections have at least 1 H3 subsection
- **AND** at least one H2 is phrased as a question (FAQ-style) matching a variant keyword

### Requirement: Page template includes FAQ Schema markup
Each keyword group page SHALL include FAQPage JSON-LD Schema markup with at least 3 question-answer pairs derived from the keyword variants.

#### Scenario: FAQ Schema presence
- **WHEN** inspecting the page source
- **THEN** there is a `<script type="application/ld+json">` containing `@type: "FAQPage"`
- **AND** the `mainEntity` array contains at least 3 questions
- **AND** each question maps to one of the keyword group's variant keywords
- **AND** each answer is 40-80 words

### Requirement: Page template includes a contextual CTA section
Each keyword group page SHALL include a contextual call-to-action section at the bottom that naturally leads the reader to the next funnel stage.

#### Scenario: CTA section validation
- **WHEN** reaching the bottom of a keyword group page
- **THEN** there is a CTA section with at least 1 link to the next funnel stage
- **AND** Stage A pages link to Stage B (tutorial or tool)
- **AND** Stage B pages link to Stage C (review or product)
- **AND** Stage C pages link back to related Stage A or B content
- **AND** the CTA uses natural language, not hard-sell copy

### Requirement: Page template is stored as a reusable Markdown document
The page content template SHALL be stored as a Markdown file that authors can copy and fill in for each new keyword group.

#### Scenario: Template storage
- **WHEN** an author needs to create a new keyword group page
- **THEN** a template exists at `doc/content-strategy/templates/keyword-page-template.md`
- **AND** the template includes placeholder comments for each section
- **AND** the template includes a word-count guidance note for each section

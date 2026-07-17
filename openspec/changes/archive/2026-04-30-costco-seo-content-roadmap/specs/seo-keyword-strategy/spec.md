## ADDED Requirements

### Requirement: Keyword matrix covers 100 keywords across A/B/C funnel stages
The system SHALL produce a keyword matrix containing exactly 100 keywords, organized into three funnel stages (A/B/C), with each keyword annotated with estimated monthly search volume, keyword difficulty (KD), search intent, and target page type.

#### Scenario: Matrix structure validation
- **WHEN** the keyword matrix document is generated
- **THEN** it contains 100 rows of keywords
- **AND** keywords are grouped into Stage A (KD < 15, informational), Stage B (KD 15-30, comparative), Stage C (KD 30+, commercial)
- **AND** each row contains: keyword, volume, KD, intent, target page type, priority (P0/P1/P2)

### Requirement: Stage A keywords target FAQ pages
All Stage A keywords with KD < 15 SHALL map to FAQ page targets, covering dietary restrictions, ingredient queries, and preparation questions.

#### Scenario: FAQ keyword coverage
- **WHEN** reviewing Stage A keywords
- **THEN** at least 40 keywords target FAQ pages
- **AND** coverage includes: dietary (gluten free, vegan, halal, kosher), ingredients (beef, pork, nitrates, MSG), nutrition (calories, protein, sodium)

### Requirement: Stage B keywords target tutorial and tool pages
Stage B keywords with KD 15-30 SHALL map to tutorial pages (how-to guides) and interactive tool pages (calculators, comparisons).

#### Scenario: Tutorial keyword coverage
- **WHEN** reviewing Stage B keywords
- **THEN** at least 30 keywords target tutorial or tool pages
- **AND** coverage includes: cooking methods (air fryer, microwave, grill), nutrition tools (calculator, macros), comparisons (vs other foods)

### Requirement: Stage C keywords target review and commercial pages
Stage C keywords with KD 30+ SHALL map to review pages (best products, comparisons) and high-commercial-intent pages.

#### Scenario: Review keyword coverage
- **WHEN** reviewing Stage C keywords
- **THEN** at least 30 keywords target review or commercial pages
- **AND** coverage includes: best products (air fryer, kitchen scale), supplements (vitamins, protein), Costco membership topics

### Requirement: Keyword matrix is stored in version-controlled Markdown
The keyword matrix SHALL be stored as a Markdown file at `doc/content-strategy/keyword-matrix.md` and committed to version control.

#### Scenario: File location and format
- **WHEN** the keyword matrix is delivered
- **THEN** it exists at `doc/content-strategy/keyword-matrix.md`
- **AND** it uses Markdown table format for readability
- **AND** it includes a summary section showing counts per stage and priority

## ADDED Requirements

### Requirement: Keyword matrix includes keyword group assignment
The keyword matrix SHALL include a `keywordGroup` column that assigns each keyword to a keyword group (core keyword + 3-5 variants).

#### Scenario: Group column presence
- **WHEN** reviewing the keyword matrix
- **THEN** each row contains a `keywordGroup` field
- **AND** the field contains the core keyword that represents the group
- **AND** all variants of the same core keyword share the same `keywordGroup` value

### Requirement: Keywords are grouped by search intent rather than exact match
Keywords SHALL be grouped together when they share the same search intent, not merely when they contain the same words.

#### Scenario: Intent-based grouping
- **WHEN" two keywords are compared
- **THEN** "costco hot dog calories" and "how many calories in costco hot dog" belong to the same group (same intent: find calorie count)
- **AND** "costco hot dog calories" and "costco hot dog nutrition" belong to different groups (different intents: specific metric vs. full nutrition profile)

### Requirement: Each keyword group maps to exactly one page URL
The keyword matrix SHALL include a `targetPage` column that maps each keyword group to exactly one page URL.

#### Scenario: Page mapping uniqueness
- **WHEN" reviewing the matrix
- **THEN** each `keywordGroup` value appears with exactly one `targetPage` value
- **AND" no two different keyword groups share the same `targetPage`

## MODIFIED Requirements

### Requirement: Keyword matrix covers 100 keywords across A/B/C funnel stages
The system SHALL produce a keyword matrix containing exactly 100 keywords, organized into three funnel stages (A/B/C) and keyword groups, with each keyword annotated with estimated monthly search volume, keyword difficulty (KD), search intent, target page type, keyword group, and target page URL.

#### Scenario: Matrix structure validation
- **WHEN** the keyword matrix document is generated
- **THEN** it contains 100 rows of keywords
- **AND** keywords are grouped into Stage A (KD < 15, informational), Stage B (KD 15-30, comparative), Stage C (KD 30+, commercial)
- **AND** each row contains: keyword, volume, KD, intent, target page type, priority (P0/P1/P2), keywordGroup, targetPage

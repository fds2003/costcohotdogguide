## ADDED Requirements

### Requirement: Priority URLs must use CTR-oriented SERP metadata
The site SHALL provide unique, intent-aligned `<title>` and meta `description` for priority URLs identified by GSC high-impression/low-click signals, including at minimum `/hot-dog/calories/` and `/tools/price-history/`.

#### Scenario: Calories page captures year-based search intent
- **WHEN** `/hot-dog/calories/` is rendered for crawl or indexing
- **THEN** title and description include 2026 recency signal and clear comparison value
- **AND** metadata wording does not contradict the page body numbers

#### Scenario: Price history tool communicates interactive value proposition
- **WHEN** `/tools/price-history/` is rendered for crawl or indexing
- **THEN** title or description explicitly communicates interactive chart/timeline utility
- **AND** avoids duplicating editorial positioning of non-tool pages

### Requirement: Metadata rollout must be executed in batches
Metadata rewrites SHALL be shipped in controlled batches to preserve attribution of impact.

#### Scenario: Batch-level attribution is preserved
- **WHEN** a metadata batch is published
- **THEN** the change log records affected URLs and publish timestamp
- **AND** post-release CTR observation window is at least 5 days before next batch

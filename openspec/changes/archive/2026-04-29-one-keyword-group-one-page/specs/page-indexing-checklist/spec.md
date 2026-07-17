## ADDED Requirements

### Requirement: New pages must pass a 12-item indexing checklist before submission
The system SHALL enforce a 12-item indexing checklist that must be fully passed before any new page is submitted to Google Search Console.

#### Scenario: Checklist categories
- **WHEN** reviewing the indexing checklist
- **THEN** it contains exactly 12 items across 3 categories
- **AND** Technical category contains 4 items: crawlable (no noindex, no robots.txt block), canonical self-referencing, mobile-friendly, load time under 3 seconds
- **AND** Content category contains 4 items: minimum 500 words, unique title and meta description, at least one H2, original content (not copied)
- **AND** Links category contains 4 items: at least 3 internal links pointing to the page from existing pages, at least 1 internal link from the page to an existing page, no broken links, breadcrumb or clear navigation path

### Requirement: Checklist failures block GSC submission
Any checklist item that is not passed SHALL prevent the page from being submitted to Google Search Console.

#### Scenario: Blocking behavior
- **WHEN** a new page has a failed checklist item
- **THEN** the page status is marked as `draft`
- **AND** the page is NOT submitted to GSC
- **AND** the failed item is recorded in a blocking log

### Requirement: Checklist is stored as a reusable Markdown document
The indexing checklist SHALL be stored as a Markdown file that can be referenced for every new page creation.

#### Scenario: Document storage
- **WHEN** the checklist is needed
- **THEN** it exists at `doc/content-strategy/page-indexing-checklist.md`
- **AND** it is formatted as a printable/copy-paste checklist with checkboxes
- **AND** each item includes a "How to verify" one-line instruction

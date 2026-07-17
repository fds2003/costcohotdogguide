## ADDED Requirements

### Requirement: Day 1 check verifies crawlability via site: query
The system SHALL perform a Day 1 validation that checks whether the new page URL returns a result in Google's `site:` search operator.

#### Scenario: Day 1 crawlability check
- **WHEN** 24 hours have passed since page submission to GSC
- **THEN** the validator runs `site:https://example.com/new-page-url`
- **AND** if the page appears in results, the check passes
- **AND** if the page does not appear, the check fails and triggers a technical audit

### Requirement: Day 3 check verifies index status via GSC Coverage report
The system SHALL perform a Day 3 validation that checks whether the new page appears in Google Search Console's Coverage report as "Valid" and indexed.

#### Scenario: Day 3 index check
- **WHEN** 72 hours have passed since page submission
- **THEN** the validator checks GSC Coverage for the exact URL
- **AND** if the status is "Valid" and "Indexed", the check passes
- **AND** if the status is "Excluded" or "Error", the check fails and triggers remediation

### Requirement: Day 7 check verifies query appearance via GSC Performance report
The system SHALL perform a Day 7 validation that checks whether the new page has appeared in Google Search Console's Performance report for any query (core keyword or variant).

#### Scenario: Day 7 query check
- **WHEN** 7 days have passed since page submission
- **THEN** the validator checks GSC Performance for the page URL
- **AND** if the page shows at least 1 impression for any query, the check passes
- **AND** if no impressions appear, the check fails and triggers the "no queries" remediation protocol

### Requirement: Failed checks trigger documented remediation protocols
Each failed validation check SHALL trigger a specific remediation protocol with clear next steps.

#### Scenario: Remediation protocols
- **WHEN** Day 1 check fails
- **THEN** the protocol is: verify noindex tag, verify robots.txt, check canonical, resubmit via GSC URL Inspection
- **AND** when Day 3 check fails
- **THEN** the protocol is: check for duplicate content, check page quality signals, verify internal links are live, request indexing again
- **AND** when Day 7 check fails
- **THEN** the protocol is: add 2 more internal links from high-traffic pages, verify title contains core keyword, verify content depth > 500 words, wait 7 more days

### Requirement: Validation process is documented as a reusable checklist
The 7-day validation process SHALL be documented as a reusable Markdown checklist.

#### Scenario: Documentation storage
- **WHEN** the validation process is needed
- **THEN** it exists at `doc/content-strategy/seven-day-validation.md`
- **AND** it includes Day 1, Day 3, and Day 7 checklists with exact verification steps
- **AND** it includes the remediation protocols for each failure case
- **AND** it includes a simple tracking table for multiple pages

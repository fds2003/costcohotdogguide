## ADDED Requirements

### Requirement: GSC analysis script processes exported CSV data
The system SHALL include `scripts/analyze-gsc.js` that reads a manually exported Google Search Console "Performance" CSV file from `data/gsc-exports/` and outputs an optimization report to `reports/gsc-optimization-YYYY-MM-DD.md`.

#### Scenario: Script generates optimization report
- **WHEN** a developer places a GSC CSV export in `data/gsc-exports/` and runs `node scripts/analyze-gsc.js`
- **THEN** a Markdown report is generated listing pages ranked 10-20 with their CTR, impressions, and specific optimization recommendations

### Requirement: Report identifies high-potential pages
The optimization report SHALL identify pages with: impressions > 100, average position between 10-20, and CTR < 3% as "high-potential" candidates for content updates.

#### Scenario: High-potential page is flagged
- **WHEN** a page has 500 impressions, position 15, and 1.5% CTR
- **THEN** the report flags it as "high-potential" with a recommendation to expand content, add FAQ section, or improve title/meta description

### Requirement: Report includes actionable optimization checklist
Each flagged page in the report SHALL include a checklist of 3-5 specific actions: add missing long-tail keywords, expand word count by 20%, add internal links from high-ranking pages, update publish date, or add structured data.

#### Scenario: Checklist is actionable
- **WHEN** a developer reads the report for a flagged page
- **THEN** the checklist contains specific, measurable actions that can be completed in 30-60 minutes

### Requirement: Content update tracking is recorded in calendar
All content updates triggered by GSC analysis SHALL be recorded in the monthly review calendar file with fields: `pageUrl`, `optimizationDate`, `actionsTaken`, and `expectedImpact`.

#### Scenario: Update is tracked
- **WHEN** a developer completes a GSC-driven content update
- **THEN** the action is recorded in `src/content/calendar/monthly/YYYY-MM.md` with all required fields

### Requirement: GSC data directory is gitignored
The `data/gsc-exports/` directory SHALL be listed in `.gitignore` to prevent sensitive search performance data from being committed to the repository.

#### Scenario: GSC data is not committed
- **WHEN** a developer runs `git status` after adding a GSC export file
- **THEN** the file appears as untracked but is not included in any git commit unless explicitly forced

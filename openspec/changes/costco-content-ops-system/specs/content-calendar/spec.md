## ADDED Requirements

### Requirement: Content calendar directory structure exists
The system SHALL establish `src/content/calendar/` with subdirectories `weekly/` and `monthly/` for content planning files.

#### Scenario: Calendar directory exists
- **WHEN** a developer lists `src/content/calendar/`
- **THEN** subdirectories `weekly/` and `monthly/` are present

### Requirement: Weekly content plans use Markdown with YAML frontmatter
Each weekly content plan SHALL be a Markdown file in `src/content/calendar/weekly/` with frontmatter fields: `week`, `startDate`, `endDate`, `status`, and an `items` array containing `type` (article|review|tool), `topic`, `targetKeyword`, `assignee`, and `status`.

#### Scenario: Weekly plan file is valid
- **WHEN** a developer opens `src/content/calendar/weekly/2026-w18.md`
- **THEN** the file contains valid YAML frontmatter with all required fields and a checklist of content items for that week

### Requirement: Monthly review plans track content updates
Each monthly review plan SHALL be a Markdown file in `src/content/calendar/monthly/` listing pages to update, with fields: `month`, `pages` array containing `url`, `reason`, and `expectedChanges`.

#### Scenario: Monthly review file tracks updates
- **WHEN** a developer opens `src/content/calendar/monthly/2026-05.md`
- **THEN** the file lists at least 2 existing pages with their update reasons and expected changes

### Requirement: Content calendar is readable by automation scripts
The content calendar files SHALL use a consistent schema that allows `scripts/content-calendar.js` to parse and output a summary of upcoming and overdue items.

#### Scenario: Script outputs calendar summary
- **WHEN** a developer runs `node scripts/content-calendar.js`
- **THEN** the script outputs a formatted list of upcoming content items, overdue items, and monthly review targets

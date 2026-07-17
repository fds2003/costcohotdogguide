## ADDED Requirements

### Requirement: Keyword group pages are stored in topic-clustered directories
The system SHALL store all keyword group pages in `src/content/keyword-pages/` organized by topic cluster subdirectories.

#### Scenario: Directory structure
- **WHEN** inspecting the keyword page library
- **THEN** the root is `src/content/keyword-pages/`
- **AND** subdirectories exist for: `nutrition/`, `ingredients/`, `dietary/`, `cooking/`, `reviews/`, `price/`
- **AND** each page file is named using the core keyword in kebab-case with `.md` extension
- **AND** no topic cluster subdirectory contains more than 20 files

### Requirement: File naming uses core keyword kebab-case
Each keyword group page file SHALL be named using the core keyword converted to kebab-case.

#### Scenario: Filename validation
- **WHEN** a page targets the core keyword "costco hot dog calories"
- **THEN** the filename is `costco-hot-dog-calories.md`
- **AND** special characters and punctuation are removed or replaced with hyphens
- **AND** the filename matches the URL slug

### Requirement: Topic clusters are extensible with sub-clusters
When a topic cluster exceeds 20 keyword group pages, it SHALL be split into sub-cluster subdirectories.

#### Scenario: Sub-cluster creation
- **WHEN** the `dietary/` directory contains 20 files
- **THEN** a new sub-cluster directory is created (e.g., `dietary/gluten-free/`)
- **AND** existing pages are NOT moved (new pages only go to sub-clusters)
- **AND** a `dietary/index.md` or README documents the sub-cluster structure

### Requirement: Library includes an index document for discoverability
The keyword page library SHALL include an index document listing all keyword groups, their status, and target URLs.

#### Scenario: Index content
- **WHEN** reviewing the library index
- **THEN** there is a file at `src/content/keyword-pages/index.md`
- **AND** it lists all keyword groups with: core keyword, topic cluster, status (draft/live), target URL, and live date
- **AND** it is updated whenever a new keyword group page is added or status changes

## ADDED Requirements

### Requirement: Content directory structure supports batch page generation
The system SHALL establish `src/content/` with subdirectories `menu-items/`, `data/`, and `articles/` for structured content storage.

#### Scenario: Directory structure exists
- **WHEN** a developer lists `src/content/`
- **THEN** subdirectories `menu-items/`, `data/`, and `articles/` are present

### Requirement: Menu item data is stored in CSV format
Menu item data SHALL be stored in `src/content/menu-items.csv` with a well-defined schema including slug, name, category, price, calories, protein, fat, sodium, description, and competitors JSON.

#### Scenario: CSV schema is valid
- **WHEN** a developer opens `menu-items.csv`
- **THEN** all required columns are present and each row has a unique slug

#### Scenario: CSV drives static generation
- **WHEN** Astro builds the site
- **THEN** each row in the CSV generates a corresponding `/menu/<slug>/` page

### Requirement: Long-form articles are stored as Markdown files
Articles and guides SHALL be stored as individual `.md` files in `src/content/articles/` with frontmatter for title, description, date, category, and tags.

#### Scenario: Markdown article renders correctly
- **WHEN** an article file exists in `src/content/articles/best-costco-food-court-deals.md`
- **THEN** the build process generates `/articles/best-costco-food-court-deals/` with proper layout and SEO

### Requirement: Content validation script runs before build
The system SHALL include a `validate-content` npm script that validates CSV schemas and Markdown frontmatter before `npm run build`.

#### Scenario: Invalid CSV fails validation
- **WHEN** `menu-items.csv` has a row with a missing required field
- **THEN** `npm run validate-content` exits with an error and descriptive message

#### Scenario: Invalid Markdown fails validation
- **WHEN** an article Markdown file is missing required frontmatter (title, description)
- **THEN** `npm run validate-content` exits with an error listing the missing fields

### Requirement: Content index file enables programmatic access
The system SHALL generate `src/content/index.json` at build time containing an index of all content (menu items, articles, data sets) for use in navigation and cross-linking.

#### Scenario: Index includes all content
- **WHEN** the build completes
- **THEN** `src/content/index.json` contains arrays of all menu items, articles, and data sets with their URLs and metadata

### Requirement: Existing pages remain unchanged during migration
All existing pages (hot dog guide, nutrition, FAQ, reviews, savings tools) SHALL maintain their current URLs, content, and SEO metadata.

#### Scenario: Existing page URLs work
- **WHEN** a user visits `/guide/` or `/nutrition/calories/`
- **THEN** the pages display exactly as before with no 404s or content changes

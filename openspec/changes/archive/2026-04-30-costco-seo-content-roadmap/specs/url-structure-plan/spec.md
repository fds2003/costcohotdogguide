## ADDED Requirements

### Requirement: URL plan documents two alternative architectures
The system SHALL produce a URL structure plan that documents two alternative architectures: Option A (enhance existing URLs) and Option B (create new `/hot-dog/` cluster with redirects).

#### Scenario: Alternative coverage
- **WHEN** the URL plan is reviewed
- **THEN** it contains a complete Option A section describing: which existing URLs to enhance, what content to add, what Schema to inject
- **AND** it contains a complete Option B section describing: new `/hot-dog/` URL patterns, 301 redirect mappings from old URLs, content requirements for new pages

### Requirement: Option A maps content to existing URL structure
Option A SHALL map the 4 core content topics (Calories, Nutrition Facts, Ingredients, Price) to existing URLs: `/nutrition/calories/`, `/nutrition/`, `/ingredients/ingredients-list/`, `/price/`.

#### Scenario: Existing URL mapping
- **WHEN** reviewing Option A
- **THEN** Calories content maps to `/nutrition/calories/`
- **AND** Nutrition Facts content maps to `/nutrition/`
- **AND** Ingredients content maps to `/ingredients/ingredients-list/`
- **AND** Price content maps to `/price/`
- **AND** each mapping includes a list of enhancements needed (content additions, Schema, internal links)

### Requirement: Option B defines new URL patterns and redirect mappings
Option B SHALL define new URL patterns under `/hot-dog/` and specify exact 301 redirect mappings from existing URLs to new URLs.

#### Scenario: New URL patterns
- **WHEN** reviewing Option B
- **THEN** it defines `/hot-dog/calories/` as the new Calories URL
- **AND** it defines `/hot-dog/nutrition-facts/` as the new Nutrition Facts URL
- **AND** it defines `/hot-dog/ingredients/` as the new Ingredients URL
- **AND** it defines `/hot-dog/price/` as the new Price URL
- **AND** each new URL has a corresponding 301 redirect from the existing URL

### Requirement: Plan includes decision criteria and recommendation
The URL plan SHALL include explicit decision criteria for choosing between Option A and Option B, and a data-driven recommendation based on current site metrics.

#### Scenario: Decision framework
- **WHEN** reviewing the decision section
- **THEN** it lists at least 3 decision criteria (e.g., existing ranking preservation, content consolidation, future scalability)
- **AND** each criterion is scored for both options
- **AND** a provisional recommendation is provided with reasoning
- **AND** the final decision is marked as pending GSC data validation

### Requirement: Plan is stored in version-controlled Markdown
The URL structure plan SHALL be stored as a Markdown file at `doc/content-strategy/url-structure-plan.md`.

#### Scenario: File delivery
- **WHEN** the plan is delivered
- **THEN** it exists at `doc/content-strategy/url-structure-plan.md`
- **AND** it includes URL mapping tables for both options
- **AND** it includes a decision matrix scoring each option against criteria

## ADDED Requirements

### Requirement: Nutrition calculator page exists with interactive form
The system SHALL generate `/tools/nutrition-calculator/` with an interactive form allowing users to select Costco Food Court items and quantities, displaying real-time totals for calories, protein, fat, carbs, and sodium.

#### Scenario: Calculator updates in real-time
- **WHEN** a user selects "Hot Dog" quantity 2 and "Ice Cream" quantity 1
- **THEN** the page instantly updates to show 1510 total calories, 54g protein, 74g fat, etc.

### Requirement: Nutrition calculator includes custom combination save
The nutrition calculator SHALL allow users to save their custom meal combinations to localStorage with a name, and reload them on subsequent visits.

#### Scenario: User saves a meal combo
- **WHEN** a user clicks "Save Combo" and names it "My Cheat Day"
- **THEN** the combo is stored in localStorage and appears in a "Saved Combos" dropdown on return visits

### Requirement: Calculator pages include 500+ words of SEO content
Each calculator page SHALL include at least 500 words of indexable text content below the tool, explaining how to use it, why it matters for Costco shoppers, and related nutritional tips with relevant keywords.

#### Scenario: Calculator page is SEO-friendly
- **WHEN** a search engine crawls `/tools/nutrition-calculator/`
- **THEN** the page contains structured headings, paragraphs, and keywords like "Costco food court nutrition calculator" and "calorie counter"

### Requirement: Calculator data is sourced from existing CSV
The calculator SHALL read nutrition data from the existing `src/content/data/nutrition-data.csv` at build time, ensuring data consistency with the nutrition comparison page.

#### Scenario: Calculator uses consistent data
- **WHEN** the calculator displays hot dog calories
- **THEN** the value matches exactly what is shown on `/data/nutrition-comparison/` (550 calories)

### Requirement: Calculator pages include FAQ Schema
Each calculator page SHALL include an FAQ section with at least 3 questions about using the calculator or interpreting the results, marked up with FAQPage JSON-LD.

#### Scenario: Calculator FAQ is structured
- **WHEN** a search engine crawls the calculator page
- **THEN** the page contains FAQPage Schema with questions like "How accurate is this calculator?" and "Does this include condiments?"

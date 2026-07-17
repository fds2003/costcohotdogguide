## ADDED Requirements

### Requirement: Tutorial pages target KD 15-25 keywords
The system SHALL generate tutorial pages for KD 15-25 keywords including: "costco hot dog calories without bun", "how to cook costco hot dog at home", "costco hot dog in air fryer", "costco hot dog nutrition facts", and "costco food court calories".

#### Scenario: Air fryer tutorial page exists
- **WHEN** a user searches "costco hot dog in air fryer"
- **THEN** a tutorial page exists at `/tutorials/hot-dog-in-air-fryer/` with step-by-step instructions

### Requirement: Tutorial pages include structured HowTo Schema
All tutorial pages SHALL include HowTo JSON-LD structured data with `HowToStep` elements for each instruction step, including `name`, `text`, and optional `image`.

#### Scenario: Tutorial has Schema markup
- **WHEN** a search engine crawls a tutorial page
- **THEN** the page source contains valid HowTo JSON-LD with numbered steps visible in search results

### Requirement: Tutorial pages include visual aids
Each tutorial page SHALL include at least one visual element: a comparison table, a numbered step diagram, or an embedded video placeholder, to increase time-on-page and engagement.

#### Scenario: Tutorial has visual content
- **WHEN** a user views the air fryer tutorial
- **THEN** a step-by-step visual guide or comparison table is visible above the fold

### Requirement: Tutorial pages link to related reviews
Each tutorial page SHALL include a "Recommended Gear" section at the bottom with links to 2-3 relevant `/reviews/` pages (e.g., air fryer tutorial links to air fryer reviews).

#### Scenario: Tutorial links to reviews
- **WHEN** a user finishes reading a cooking tutorial
- **THEN** a "Recommended Gear" section displays affiliate-linked product cards for relevant kitchen appliances

### Requirement: Tutorial pages include calorie and macro data tables
Tutorial pages involving cooking or nutrition SHALL include a data table showing calories, protein, fat, carbs, and sodium for the prepared dish, sourced from existing nutrition CSV data.

#### Scenario: Nutrition table is present
- **WHEN** a user views a tutorial about preparing a hot dog without the bun
- **THEN** a table displays the adjusted nutritional values (e.g., 340 calories without bun vs 550 with bun)

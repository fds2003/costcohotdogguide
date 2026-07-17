## ADDED Requirements

### Requirement: Nutrition calculator allows users to compute custom hot dog nutrition
The system SHALL provide an interactive nutrition calculator on `/nutrition/calories/` that lets users select options (with/without bun, with/without condiments) and see real-time nutrition updates.

#### Scenario: Calculator updates on selection change
- **WHEN** a user toggles "Include Bun" or "Add Mustard" in the calculator
- **THEN** calories, protein, fat, and carbs update in real time without page reload

#### Scenario: Calculator displays totals and daily value percentages
- **WHEN** a user views the calculator results
- **THEN** both absolute values and percentages of daily recommended intake are displayed

### Requirement: Price history tracker shows 40-year price trend
The system SHALL provide a price history visualization on `/price/` and `/business/history/` showing the Costco hot dog price from 1985 to present.

#### Scenario: Price tracker displays timeline
- **WHEN** a user views the price history section
- **THEN** a visual timeline or chart shows price points across decades with contextual annotations

#### Scenario: Price tracker includes inflation-adjusted comparison
- **WHEN** a user views the price history
- **THEN** an inflation-adjusted equivalent price is shown to demonstrate real value over time

### Requirement: Weight Watchers points calculator computes points for modifications
The system SHALL provide an interactive Weight Watchers points calculator on `/nutrition/weight-watchers-points/` that computes SmartPoints based on user selections.

#### Scenario: WW calculator computes base hot dog points
- **WHEN** a user opens the WW calculator with default settings
- **THEN** the base Costco hot dog points value is displayed

#### Scenario: WW calculator adjusts for modifications
- **WHEN** a user selects modifications (no bun, extra condiments)
- **THEN** the points value recalculates and displays the delta from the base value

### Requirement: All calculators are accessible and mobile-friendly
All interactive tools SHALL be fully functional on mobile devices with touch-friendly inputs and readable output.

#### Scenario: Calculator works on mobile
- **WHEN** a user accesses any calculator from a mobile browser
- **THEN** all inputs are usable, outputs are readable, and layout does not break

### Requirement: Calculator data is sourced from verified nutrition data
All calculator computations SHALL use data from `src/data/nutrition.json` or equivalent verified sources.

#### Scenario: Calculator uses accurate data
- **WHEN** the calculator displays nutrition values
- **THEN** the values match the official data in the project's nutrition data file

## ADDED Requirements

### Requirement: Calorie and macro calculator page exists
The system SHALL generate `/tools/nutrition-calculator/` with an interactive form where users input a Costco Food Court meal combination and receive total calories, protein, fat, carbs, and sodium.

#### Scenario: Calculator computes meal nutrition
- **WHEN** a user selects "Hot Dog + Ice Cream" on the calculator page
- **THEN** the page displays the combined nutritional values (960 calories, 30g protein, 52g fat, etc.) in real-time

### Requirement: Membership ROI calculator page exists
The system SHALL generate `/tools/membership-roi/` with an interactive form where users input their estimated annual Costco spending and the calculator displays whether the membership fee ($60-$120) pays for itself compared to non-member pricing.

#### Scenario: ROI calculator shows breakeven analysis
- **WHEN** a user enters $3000 annual spending
- **THEN** the calculator displays the breakeven point, estimated annual savings, and a visual indicator of whether membership is worth it

### Requirement: Price history tracker page exists
The system SHALL generate `/tools/price-history/` displaying historical price data for at least 5 iconic Costco products (hot dog combo, rotisserie chicken, pizza slice, churro, chicken bake) with a line chart visualization.

#### Scenario: Price history shows trends
- **WHEN** a user visits `/tools/price-history/`
- **THEN** a line chart shows price trends over time for each product, with annotations for significant events (e.g., "1985: Hot dog introduced at $1.50")

### Requirement: Calculator data is stored in static JSON files
All calculator input data (menu item nutrition, pricing history) SHALL be stored as static JSON files in `src/content/data/calculators/` and loaded at build time, not fetched from external APIs on page load.

#### Scenario: Calculator works offline
- **WHEN** a user opens the nutrition calculator with no internet connection
- **THEN** all menu item data is still available because it was embedded at build time

### Requirement: Calculator pages include SEO-optimized content
Each calculator page SHALL include at least 300 words of contextual content below the calculator tool, explaining what the calculator does, why it matters, and how to use the results — to ensure the page ranks for relevant keywords.

#### Scenario: Calculator page has indexable content
- **WHEN** a search engine crawls `/tools/nutrition-calculator/`
- **THEN** the page contains structured text content with headings, paragraphs, and relevant keywords like "Costco nutrition calculator" and "food court calories"

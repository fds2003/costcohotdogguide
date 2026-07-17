## ADDED Requirements

### Requirement: Tutorial pages target KD 15-25 keywords
The system SHALL generate tutorial pages for KD 15-25 keywords including: "costco hot dog in air fryer", "costco hot dog calories without bun", "how to cook costco hot dog at home", and "costco food court calories".

#### Scenario: Air fryer tutorial page exists
- **WHEN** a user searches "costco hot dog in air fryer"
- **THEN** a tutorial page exists at `/tutorials/hot-dog-in-air-fryer/` with step-by-step instructions and visual aids

### Requirement: Tutorial pages include HowTo JSON-LD Schema
All tutorial pages SHALL include HowTo structured data with `HowToStep` elements for each instruction step, including `name`, `text`, and `url` properties.

#### Scenario: Tutorial has HowTo markup
- **WHEN** a search engine crawls a tutorial page
- **THEN** the page contains valid HowTo JSON-LD with numbered steps eligible for rich snippets

### Requirement: Tutorial pages use green visual theme
All tutorial pages SHALL use a consistent green color theme (#10B981 based) for headers, step indicators, and CTA elements to visually signal the "tool layer" of the content funnel.

#### Scenario: Tutorial page has green theme
- **WHEN** a user visits any tutorial page
- **THEN** the page heading, step numbers, and "Recommended Gear" CTA buttons use green accent colors

### Requirement: Tutorial pages include "Recommended Gear" section
Each tutorial page SHALL include a "Recommended Gear" section at the bottom with 2-3 product cards linking to relevant `/reviews/` pages, using natural language like "We recommend using our top-rated air fryer (See Price on Amazon)".

#### Scenario: Tutorial links to reviews naturally
- **WHEN** a user scrolls to the bottom of a cooking tutorial
- **THEN** a "Recommended Gear" section displays product cards for kitchen tools with contextual affiliate links

### Requirement: Interactive nutrition calculator page exists
The system SHALL generate `/tools/nutrition-calculator/` with an interactive form allowing users to select Costco Food Court items and quantities, displaying real-time totals for calories, protein, fat, carbs, and sodium.

#### Scenario: Calculator updates in real-time
- **WHEN** a user selects "Hot Dog" quantity 2 and "Pizza Slice" quantity 1
- **THEN** the page instantly updates to show combined nutritional values

### Requirement: Interactive price history chart page exists
The system SHALL generate `/tools/price-history/` displaying a line chart of historical prices for at least 5 iconic Costco products (hot dog, rotisserie chicken, pizza, churro, chicken bake) with annotations for significant events.

#### Scenario: Price chart shows trends
- **WHEN** a user visits `/tools/price-history/`
- **THEN** an interactive line chart displays price trends with event annotations like "1985: Hot dog introduced at $1.50"

### Requirement: Tool pages include 300+ words of SEO content
Each interactive tool page SHALL include at least 300 words of indexable text content below the tool, explaining how to use it, why it matters, and related tips.

#### Scenario: Tool page is SEO-friendly
- **WHEN** a search engine crawls `/tools/nutrition-calculator/`
- **THEN** the page contains structured headings and paragraphs with keywords like "Costco food court nutrition calculator"

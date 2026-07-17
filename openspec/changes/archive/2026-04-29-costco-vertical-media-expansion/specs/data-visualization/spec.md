## ADDED Requirements

### Requirement: Price map page displays hot dog prices across US regions
The system SHALL generate `/data/price-map/` showing a visual map of Costco hot dog prices across different US states or regions.

#### Scenario: Price map loads with state data
- **WHEN** a user visits `/data/price-map/`
- **THEN** an SVG-based map shows price variations with color-coded regions and a tooltip on hover

#### Scenario: Price map includes historical trend
- **WHEN** a user views the price map
- **THEN** a sidebar or section shows the historical price trend from $1.50 to current prices where applicable

### Requirement: Nutrition comparison chart visualizes menu item nutrition
The system SHALL generate `/data/nutrition-comparison/` showing an interactive comparison of calories, protein, fat, and sodium across all Food Court items.

#### Scenario: Nutrition chart displays all items
- **WHEN** a user visits `/data/nutrition-comparison/`
- **THEN** a bar chart or table allows toggling between different nutrients for comparison

#### Scenario: Nutrition chart includes daily value percentages
- **WHEN** a user views the nutrition comparison
- **THEN** values are shown as both absolute numbers and percentages of recommended daily intake

### Requirement: Crowd prediction page shows optimal visit times
The system SHALL generate `/data/crowd-prediction/` showing predicted busy hours for the Costco Food Court by day of week.

#### Scenario: Crowd prediction displays hourly data
- **WHEN** a user visits `/data/crowd-prediction/`
- **THEN** a visual grid or heatmap shows expected crowd levels for each hour of each day

#### Scenario: Crowd prediction includes wait time estimates
- **WHEN** a user views the crowd prediction
- **THEN** estimated wait times in minutes are shown alongside crowd level indicators

### Requirement: Data visualization pages include structured data for SEO
Each data page SHALL include appropriate JSON-LD Schema markup (Dataset, FAQPage, or HowTo) to improve search visibility.

#### Scenario: Price map has Dataset schema
- **WHEN** a search engine crawls `/data/price-map/`
- **THEN** structured data describing the dataset (name, description, creator, distribution) is present in the page source

### Requirement: Visualization data is stored in static JSON/CSV files
All data for visualizations SHALL be stored in `src/content/data/` as JSON or CSV files, generated at build time.

#### Scenario: Price data is in CSV
- **WHEN** a developer checks `src/content/data/`
- **THEN** files like `hotdog-prices.csv` and `nutrition-data.csv` exist with structured data

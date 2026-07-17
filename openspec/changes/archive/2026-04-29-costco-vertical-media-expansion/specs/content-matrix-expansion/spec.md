## ADDED Requirements

### Requirement: Menu item pages exist for all major Costco Food Court items
The system SHALL generate static pages for each major Costco Food Court menu item including hot dog, pizza, rotisserie chicken, ice cream, churro, chicken bake, and acai bowl.

#### Scenario: Hot dog page exists
- **WHEN** a user visits `/menu/hot-dog/`
- **THEN** the page displays the hot dog's price, ingredients, nutrition facts, and related menu items

#### Scenario: Pizza page exists
- **WHEN** a user visits `/menu/pizza/`
- **THEN** the page displays pizza options, pricing, and a comparison with other pizza chains

#### Scenario: Rotisserie chicken page exists
- **WHEN** a user visits `/menu/rotisserie-chicken/`
- **THEN** the page displays the chicken's price history, nutrition, and popular recipes

### Requirement: New menu alerts section tracks product launches and discontinuations
The system SHALL maintain a `/menu/new/` page that lists recently added and discontinued Food Court items with dates.

#### Scenario: New item alert displayed
- **WHEN** a user visits `/menu/new/`
- **THEN** the page shows a chronological list of menu changes with "New" and "Discontinued" badges

### Requirement: Content pages include comprehensive comparison tables
Each menu item page SHALL include a comparison table against competitors or alternative options.

#### Scenario: Pizza comparison table
- **WHEN** a user views the pizza page
- **THEN** a table comparing Costco pizza price, size, and calories against Domino's, Pizza Hut, and Papa John's is visible

### Requirement: Content data is managed via CSV files
Menu item data SHALL be stored in `src/content/menu-items.csv` with columns for slug, name, price, calories, protein, category, description, and competitor comparison data.

#### Scenario: CSV data drives page generation
- **WHEN** Astro builds the site
- **THEN** pages for each row in `menu-items.csv` are generated via `getStaticPaths`

### Requirement: Navigation links to new content areas
The main navigation SHALL include a "Menu" dropdown with links to all menu item pages and the new items alert page.

#### Scenario: Menu dropdown visible
- **WHEN** a user hovers over "Menu" in the navigation
- **THEN** a dropdown appears with links to Hot Dog, Pizza, Rotisserie Chicken, Ice Cream, and New Items

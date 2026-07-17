## ADDED Requirements

### Requirement: Macros nutrition page exists at /nutrition/macros/
The system SHALL generate `/nutrition/macros/` displaying a complete macronutrient breakdown (carbs, fat, protein ratios) of the Costco hot dog with and without bun.

#### Scenario: Macros page displays ratios
- **WHEN** a user visits `/nutrition/macros/`
- **THEN** the page shows macro percentages (carbs/fat/protein) in both numerical and visual format

### Requirement: Weight Watchers points calculator page exists at /nutrition/weight-watchers-points/
The system SHALL generate `/nutrition/weight-watchers-points/` with an explanation of WW points and an interactive calculator for the Costco hot dog.

#### Scenario: WW points page has calculator
- **WHEN** a user visits `/nutrition/weight-watchers-points/`
- **THEN** an interactive calculator allows input of modifications (with/without bun, condiments) and displays the corresponding WW points

### Requirement: Ingredients list page exists at /ingredients/ingredients-list/
The system SHALL generate `/ingredients/ingredients-list/` with a comprehensive list of all ingredients in the Costco hot dog and bun, sourced from official data.

#### Scenario: Ingredients page lists all components
- **WHEN** a user visits `/ingredients/ingredients-list/`
- **THEN** a detailed table or list shows each ingredient with its purpose and any allergen warnings

### Requirement: Beef or pork clarification page exists at /ingredients/beef-or-pork/
The system SHALL generate `/ingredients/beef-or-pork/` definitively answering whether Costco hot dogs contain pork, with sourcing evidence.

#### Scenario: Beef or pork page gives clear answer
- **WHEN** a user visits `/ingredients/beef-or-pork/`
- **THEN** the page provides an unambiguous answer with evidence from Costco and supplier documentation

### Requirement: Brand sourcing page exists at /ingredients/brand/
The system SHALL generate `/ingredients/brand/` revealing the manufacturer/supplier of Costco hot dogs and buns, with brand history.

#### Scenario: Brand page reveals manufacturer
- **WHEN** a user visits `/ingredients/brand/`
- **THEN** the page identifies the hot dog and bun manufacturers with historical context

### Requirement: At-home cooking guide exists at /cooking/at-home/
The system SHALL generate `/cooking/at-home/` with step-by-step instructions for recreating the Costco hot dog experience at home.

#### Scenario: At-home page has full guide
- **WHEN** a user visits `/cooking/at-home/`
- **THEN** the page provides equipment recommendations, ingredient sourcing, and cooking instructions

### Requirement: Recipe page exists at /cooking/recipe/
The system SHALL generate `/cooking/recipe/` with a detailed recipe including ingredients, measurements, and cooking times.

#### Scenario: Recipe page has full recipe
- **WHEN** a user visits `/cooking/recipe/`
- **THEN** the page shows a complete recipe with ingredients list, step-by-step instructions, and serving suggestions

### Requirement: History page exists at /business/history/
The system SHALL generate `/business/history/` documenting the 40-year history of the Costco hot dog, including the $1.50 price commitment.

#### Scenario: History page covers timeline
- **WHEN** a user visits `/business/history/`
- **THEN** a chronological timeline shows key events from 1985 to present

### Requirement: Price increase tracking page exists at /price/price-increase/
The system SHALL generate `/price/price-increase/` tracking any price changes or rumors of changes to the $1.50 hot dog.

#### Scenario: Price increase page tracks changes
- **WHEN** a user visits `/price/price-increase/`
- **THEN** the page shows the current price, historical prices, and any news about potential increases

### Requirement: All new pages include proper SEO Schema
Each new page SHALL include the appropriate JSON-LD Schema markup (Article, FAQPage, or HowTo) matching its content type.

#### Scenario: Recipe page has HowTo schema
- **WHEN** a search engine crawls `/cooking/recipe/`
- **THEN** structured HowTo data with steps and ingredients is present in the page source

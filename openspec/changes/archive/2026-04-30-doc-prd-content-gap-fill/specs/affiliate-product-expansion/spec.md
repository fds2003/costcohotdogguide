## ADDED Requirements

### Requirement: Hot dog roller added to affiliate products
The system SHALL add a hot dog roller/grill product to `affiliate.json` with links to Amazon search results.

#### Scenario: Hot dog roller appears in cooking recommendations
- **WHEN** a user views a cooking-related page
- **THEN** a hot dog roller product card is displayed in RelatedProducts

### Requirement: Pizza stone added to affiliate products
The system SHALL add a pizza stone product to `affiliate.json` for the upcoming pizza content expansion.

#### Scenario: Pizza stone appears in kitchen recommendations
- **WHEN** a user views a kitchen-related page
- **THEN** a pizza stone product card is displayed in RelatedProducts

### Requirement: BBQ sauce set added to affiliate products
The system SHALL add a BBQ sauce/condiment set to `affiliate.json` for hot dog topping recommendations.

#### Scenario: BBQ sauce appears in food recommendations
- **WHEN** a user views a food-related page
- **THEN** a BBQ sauce set product card is displayed in RelatedProducts

### Requirement: Food storage containers added to affiliate products
The system SHALL add food storage containers to `affiliate.json` for bulk buying recommendations.

#### Scenario: Storage containers appear in storage recommendations
- **WHEN** a user views a bulk-buying or storage-related page
- **THEN** food storage container product cards are displayed in RelatedProducts

### Requirement: Picnic blanket added to affiliate products
The system SHALL add a picnic blanket to `affiliate.json` for outdoor dining recommendations.

#### Scenario: Picnic blanket appears in outdoor recommendations
- **WHEN** a user views an outdoor-related page
- **THEN** a picnic blanket product card is displayed in RelatedProducts

### Requirement: Reusable utensils set added to affiliate products
The system SHALL add reusable utensils to `affiliate.json` for eco-friendly dining recommendations.

#### Scenario: Reusable utensils appear in recommendations
- **WHEN** a user views a sustainability or outdoor-related page
- **THEN** reusable utensils product cards are displayed in RelatedProducts

### Requirement: Chest freezer added to affiliate products
The system SHALL add a chest freezer to `affiliate.json` for bulk meat storage recommendations.

#### Scenario: Chest freezer appears in storage recommendations
- **WHEN** a user views a bulk-buying or meat-related page
- **THEN** a chest freezer product card is displayed in RelatedProducts

### Requirement: Meal prep containers added to affiliate products
The system SHALL add meal prep containers to `affiliate.json` for portion control recommendations.

#### Scenario: Meal prep containers appear in health recommendations
- **WHEN** a user views a nutrition or health-related page
- **THEN** meal prep container product cards are displayed in RelatedProducts

### Requirement: All new affiliate products have scenario tags
Each new affiliate product SHALL be tagged with at least one scenario (home-cooking, picnic, storage, bulk-buy, meal-prep) for contextual display.

#### Scenario: Products filter by scenario
- **WHEN** RelatedProducts receives a `scenario` prop
- **THEN** only products matching that scenario are displayed

### Requirement: Affiliate product prices are realistic
All new affiliate products SHALL have realistic `priceRange` values reflecting actual Amazon pricing tiers.

#### Scenario: Price ranges are accurate
- **WHEN** a user views an affiliate product card
- **THEN** the displayed price range reflects real market prices for that product category

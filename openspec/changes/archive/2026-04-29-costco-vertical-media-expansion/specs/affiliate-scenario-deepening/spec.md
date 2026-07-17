## ADDED Requirements

### Requirement: Affiliate products are organized by usage scenarios
The system SHALL extend `affiliate.json` with scenario-based product groupings: home-cooking, picnic, storage, bulk-buy, and meal-prep.

#### Scenario: Home cooking scenario products
- **WHEN** a user views a cooking-related page
- **THEN** RelatedProducts displays items like air fryers, hot dog rollers, and meat thermometers

#### Scenario: Picnic scenario products
- **WHEN** a user views an outdoor/dining page
- **THEN** RelatedProducts displays items like portable coolers, picnic blankets, and reusable utensils

#### Scenario: Storage scenario products
- **WHEN** a user views a bulk-buying page
- **THEN** RelatedProducts displays items like vacuum sealers, food storage containers, and chest freezers

### Requirement: Menu item pages include contextual affiliate recommendations
Each menu item page SHALL display scenario-appropriate affiliate products based on the item's consumption context.

#### Scenario: Hot dog page shows cooking gear
- **WHEN** a user views the hot dog page
- **THEN** affiliate products for home hot dog cooking (rollers, steamers, condiments) are displayed

#### Scenario: Pizza page shows kitchen appliances
- **WHEN** a user views the pizza page
- **THEN** affiliate products for pizza making at home (pizza stones, ovens, cutters) are displayed

#### Scenario: Rotisserie chicken page shows meal prep items
- **WHEN** a user views the rotisserie chicken page
- **THEN** affiliate products for meal prep and storage are displayed

### Requirement: RelatedProducts component supports scenario-based filtering
The `RelatedProducts` component SHALL accept a new `scenario` prop that filters products by usage scenario instead of category.

#### Scenario: Scenario prop filters correctly
- **WHEN** `<RelatedProducts scenario="picnic" />` is used
- **THEN** only products tagged with the "picnic" scenario are displayed

### Requirement: New affiliate links are added for scenario-specific products
The system SHALL add affiliate links for at least 8 new scenario-specific products including hot dog roller, pizza stone, food storage containers, picnic blanket, reusable utensils, chest freezer, meal prep containers, and BBQ sauce set.

#### Scenario: All scenario products have links
- **WHEN** checking `affiliate.json`
- **THEN** entries exist for all 8 new scenario products with valid Amazon search URLs

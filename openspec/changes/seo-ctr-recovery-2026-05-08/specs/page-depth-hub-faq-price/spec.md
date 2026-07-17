## ADDED Requirements

### Requirement: Guide page must act as a hub page
`/guide/` SHALL present key facts in a hub layout instead of pure long-form narrative, with direct pathways to detail pages.

#### Scenario: Hub provides immediate core facts
- **WHEN** a user lands on `/guide/`
- **THEN** above-the-fold content includes cards for price, calories, and ingredients
- **AND** each card links to its corresponding detail page

#### Scenario: Hub includes direct-answer FAQ preview
- **WHEN** `/guide/` renders its FAQ section
- **THEN** at least 5 popular questions are shown with direct short answers
- **AND** each answer includes a "learn more" link to `/hot-dog/faq/`

### Requirement: FAQ page must use direct-answer format
`/hot-dog/faq/` SHALL answer each question with a concise first-line answer followed by explanatory detail.

#### Scenario: FAQ answer is immediately visible
- **WHEN** a user scans any FAQ item
- **THEN** the first sentence provides a direct answer in short form
- **AND** supporting context appears in a following paragraph

#### Scenario: FAQ module is optimized for user decisions, not rich-result appearance
- **WHEN** FAQ content is updated on `/hot-dog/faq/` or `/guide/`
- **THEN** edits prioritize clarity, decision support, and internal pathway guidance
- **AND** acceptance criteria do not depend on Google FAQ rich-result rendering

### Requirement: Price page must include analysis depth
`/hot-dog/price/` SHALL include historical context, category comparison, and inflation framing beyond single-fact price statements.

#### Scenario: Price content supports high-intent searchers
- **WHEN** `/hot-dog/price/` is rendered
- **THEN** it includes a historical timeline section
- **AND** contains comparison against other Costco food items or inflation context

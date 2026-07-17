## ADDED Requirements

### Requirement: Hero nutrition numbers match single source of truth
Displayed calories, sodium, and other nutrition figures repeated in `<title>`, meta description, hero blocks, and summary tables SHALL match the same values sourced from approved site data (`src/src/content` CSV / validated copy). Any intentional range SHALL be stated consistently across TD and body.

#### Scenario: Calories page title matches hero
- **WHEN** `/hot-dog/calories/` title claims a specific calorie count with bun
- **THEN** the first screen visible figures use the same numbers as the structured content below

### Requirement: Sodium messaging uses consistent mg and daily percentage
The sodium page SHALL express sodium in mg and optional % daily value using the same methodology as the nutrition section on that page.

#### Scenario: SERP snippet aligns with content
- **WHEN** meta description states sodium mg and percent daily limit
- **THEN** the H1/H2 hero section repeats those same figures without contradiction

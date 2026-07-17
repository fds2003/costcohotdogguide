## ADDED Requirements

### Requirement: Key fact pages show answer above the fold on mobile
For `/hot-dog/calories/`, `/hot-dog/sodium/`, and `/hot-dog/price/`, the primary numeric answer (calories with/without bun; sodium mg and daily share; price headline) SHALL appear **without vertical scrolling** on a standard mobile viewport (e.g. 390px width) before long-form prose.

#### Scenario: Mobile first paint contains the number
- **WHEN** a user opens `/hot-dog/calories/` on a mobile device
- **THEN** the lead calorie figures appear in the initial viewport

### Requirement: Answer block precedes narrative fluff
Hero summary blocks SHALL appear before lengthy introductory paragraphs on the above routes.

#### Scenario: Journalistic intro does not bury the lede
- **WHEN** the page loads
- **THEN** users see quantitative facts before optional storytelling sections

## ADDED Requirements

### Requirement: Article categories support horizontal topic expansion
The system SHALL define content categories beyond hot-dog: `costco-iconic-products`, `kirkland-guide`, `high-ticket-reviews`, `seasonal-guides`, and `comparisons`.

#### Scenario: Category list is documented
- **WHEN** a developer checks `src/content/calendar/categories.md`
- **THEN** the file lists all 5 categories with descriptions, example topics, and target keywords

### Requirement: High-ticket review articles follow a standardized template
High-ticket review articles (kitchen appliances $100-500, supplements, outdoor gear) SHALL use a standardized Markdown template with sections: Overview, Specifications, Costco Price vs Market, Real User Feedback, Affiliate Recommendations, and Verdict.

#### Scenario: Review article uses correct template
- **WHEN** a developer creates a review for a kitchen appliance
- **THEN** the Markdown file follows the exact template structure defined in `src/content/templates/review-template.md`

### Requirement: Seasonal guides are planned around peak search periods
Seasonal guide topics SHALL be pre-planned in the content calendar with publication dates aligned to Google Trends peak periods (e.g., BBQ guides in April-May, back-to-school in July-August, holiday guides in October-November).

#### Scenario: Seasonal guide is timed correctly
- **WHEN** a developer checks the calendar for summer BBQ content
- **THEN** the planned publish date is at least 4 weeks before the seasonal peak

### Requirement: Comparison articles include structured data
Comparison articles (e.g., Costco vs Sam's Club) SHALL include a structured comparison table with at least 5 comparison dimensions and affiliate links where applicable.

#### Scenario: Comparison table is complete
- **WHEN** a user views a comparison article
- **THEN** a table with at least 5 rows of structured comparison data is visible, with affiliate product links in relevant cells

### Requirement: Topic expansion maintains brand focus on Costco
All expanded topics SHALL explicitly connect back to Costco — either as Costco products, Costco alternatives, or shopping strategies specifically applicable to Costco shoppers.

#### Scenario: Non-hot-dog article references Costco
- **WHEN** a user reads a Kirkland product guide
- **THEN** the article contains at least 3 references to Costco shopping context, pricing, or membership benefits

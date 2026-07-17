## ADDED Requirements

### Requirement: Digital product landing page exists
The system SHALL provide a digital product landing page at `/guides/costco-shopping-guide/` that promotes and sells a "Costco Shopping Guide" PDF for $9.99. The page MUST include product benefits, testimonials placeholder, and a clear call-to-action.

#### Scenario: User visits digital product page
- **WHEN** user visits `/guides/costco-shopping-guide/`
- **THEN** the page displays the product title, description, price ($9.99), benefits list, and purchase button

### Requirement: Gumroad embed integration
The system SHALL embed a Gumroad purchase button or overlay on the digital product page. The Gumroad product URL SHALL be configurable.

#### Scenario: User clicks purchase button
- **WHEN** user clicks the purchase button
- **THEN** a Gumroad checkout modal or overlay opens for the user to complete payment

### Requirement: Digital product is promoted on high-traffic pages
The system SHALL add a promotional banner or card for the digital product on the homepage (`/`) and savings index (`/savings/`).

#### Scenario: Promotion on homepage
- **WHEN** user visits `/`
- **THEN** the page contains a visible promotional section linking to `/guides/costco-shopping-guide/`

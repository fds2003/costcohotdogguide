## ADDED Requirements

### Requirement: Newsletter signup component exists
The system SHALL provide a `NewsletterSignup.astro` component that displays an email subscription form. The component MUST be embeddable on any page.

#### Scenario: Component renders on a page
- **WHEN** a page imports and uses `<NewsletterSignup />`
- **THEN** the page displays an email input field and a subscribe button

### Requirement: Newsletter signup uses third-party embed
The system SHALL integrate with a third-party email service (ConvertKit or Mailchimp) using their provided HTML embed code. The embed code SHALL be stored in a configuration file or component prop.

#### Scenario: User submits email
- **WHEN** user enters a valid email and clicks subscribe
- **THEN** the third-party service handles the subscription and shows a success confirmation

### Requirement: Newsletter signup appears on high-traffic pages
The system SHALL include the NewsletterSignup component on the homepage (`/`) and the guide page (`/guide/`) to maximize subscription conversion.

#### Scenario: Newsletter on homepage
- **WHEN** user visits `/`
- **THEN** the page contains a visible Newsletter signup section

#### Scenario: Newsletter on guide page
- **WHEN** user visits `/guide/`
- **THEN** the page contains a visible Newsletter signup section at the bottom of the article

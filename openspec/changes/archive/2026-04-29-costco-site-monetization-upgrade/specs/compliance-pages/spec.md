## ADDED Requirements

### Requirement: Privacy Policy page exists and is accessible
The system SHALL provide a Privacy Policy page at `/privacy-policy/` that complies with Google AdSense requirements and includes sections on data collection, cookies, third-party services (Amazon Associates, Google AdSense, analytics), and user rights.

#### Scenario: User navigates to Privacy Policy
- **WHEN** user clicks "Privacy Policy" link in the footer
- **THEN** the browser navigates to `/privacy-policy/` and displays the full privacy policy content

#### Scenario: Privacy Policy is indexed by search engines
- **WHEN** a search engine crawler visits `/privacy-policy/`
- **THEN** the page returns a 200 status and contains a `noindex` meta tag OR is allowed to be indexed with canonical URL

### Requirement: About page exists and establishes site credibility
The system SHALL provide an About page at `/about/` that introduces the site, its mission, and the team/author behind the content. This page establishes E-E-A-T signals for SEO and AdSense approval.

#### Scenario: User navigates to About page
- **WHEN** user clicks "About" link in the footer or navigation
- **THEN** the browser navigates to `/about/` and displays information about the site's purpose and authorship

### Requirement: Contact page provides legitimate contact method
The system SHALL provide a Contact page at `/contact/` with a valid email address and optionally a contact form. This is required for AdSense approval and user trust.

#### Scenario: User navigates to Contact page
- **WHEN** user clicks "Contact" link in the footer
- **THEN** the browser navigates to `/contact/` and displays contact information

### Requirement: Compliance pages are linked from all pages
The system SHALL include links to Privacy Policy, About, and Contact pages in the Footer component so they are accessible from every page on the site.

#### Scenario: Footer links on any page
- **WHEN** user visits any page on the site
- **THEN** the footer contains clickable links to `/privacy-policy/`, `/about/`, and `/contact/`

## ADDED Requirements

### Requirement: GA4 tracking code is conditionally injected
The system SHALL inject the Google Analytics 4 tracking script into the `<head>` of every page when a valid GA4 Measurement ID is configured. The injection SHALL be conditional and disabled when no ID is provided.

#### Scenario: GA4 is configured
- **WHEN** the GA4 Measurement ID is set in configuration
- **THEN** every page includes the GA4 `gtag.js` script with the configured ID

#### Scenario: GA4 is not configured
- **WHEN** no GA4 Measurement ID is set
- **THEN** no GA4 script is injected and no tracking occurs

### Requirement: Affiliate link clicks are tracked as events
The system SHALL send GA4 custom events when users click on Amazon Affiliate links. The event name SHALL be `affiliate_click` and include parameters for product category and link ID.

#### Scenario: User clicks affiliate link
- **WHEN** user clicks an affiliate product link
- **THEN** a GA4 event `affiliate_click` is fired with parameters `{ category: <product_category>, link_id: <link_id> }`

### Requirement: Ad impressions are trackable
The system SHALL ensure AdSense ad impressions are automatically tracked by GA4 when both AdSense and GA4 are configured on the same site. No additional implementation is required beyond correct script placement.

#### Scenario: AdSense and GA4 both active
- **WHEN** both AdSense and GA4 are enabled
- **THEN** AdSense performance data appears in the GA4 Monetization reports

# adsterra-banner-728x90 Specification

## Purpose
TBD - created by archiving change integrate-adsterra-banner-728x90. Update Purpose after archive.
## Requirements
### Requirement: Adsterra Banner 728x90 is configurable in ads.json
The system SHALL support Adsterra Banner 728x90 slot configuration in `src/data/ads.json` with unique keys for each placement.

#### Scenario: Banner slots exist in config
- **WHEN** a developer opens `src/data/ads.json`
- **THEN** the `adsterra` section contains banner slot entries with `key`, `format`, `height`, and `width` properties

#### Scenario: Banner slot has unique key
- **WHEN** `ads.json` defines a banner slot named `leaderboard_header`
- **THEN** the slot has a unique `key` value (e.g., `430483682f9914a259756e4206a7e9e0`)

### Requirement: AdUnit component renders Banner 728x90 with atOptions
The system SHALL extend `AdUnit.astro` to render Adsterra Banner ads using the `atOptions` + `invoke.js` pattern when the active network is Adsterra and `type="banner"` with `format="leaderboard"`.

#### Scenario: Banner ad renders with correct configuration
- **WHEN** an `<AdUnit type="banner" format="leaderboard" slot="leaderboard_header" />` is placed on a page with Adsterra enabled
- **THEN** an inline script sets `atOptions` with the correct `key`, `format: 'iframe'`, `height: 90`, `width: 728` from config
- **AND** a second script tag loads the corresponding `invoke.js` URL

#### Scenario: Banner ad uses slot-specific key
- **WHEN** the `slot` prop is `"leaderboard_header"`
- **THEN** the rendered `atOptions.key` matches the key configured for that slot in `ads.json`

#### Scenario: Banner falls back to placeholder when disabled
- **WHEN** ads are disabled (`enabled: false`)
- **THEN** the gray placeholder box is displayed with dimensions appropriate for a leaderboard banner

### Requirement: Banner ads are placed in high-visibility positions
The system SHALL place Adsterra Banner 728x90 ads in positions that maximize viewability without disrupting content readability.

#### Scenario: Homepage has header banner
- **WHEN** a user visits the homepage
- **THEN** a Banner 728x90 is rendered below the hero section or in the header area

#### Scenario: Guide page has footer banner
- **WHEN** a user visits `/guide/`
- **THEN** a Banner 728x90 is rendered at the bottom of the article, above the footer

#### Scenario: Article pages have in-content banner
- **WHEN** a user visits any article page
- **THEN** a Banner 728x90 is rendered within the article body, between content sections

### Requirement: Banner ads are responsive and mobile-safe
The system SHALL ensure Banner 728x90 ads do not break page layout on viewports narrower than 728px.

#### Scenario: Banner container scales down on mobile
- **WHEN** a Banner 728x90 is rendered on a viewport narrower than 728px
- **THEN** the container uses `max-width: 100%` and `overflow: hidden` to prevent horizontal scroll

#### Scenario: Banner does not overlap content
- **WHEN** a Banner is placed within an article
- **THEN** adequate vertical spacing (margin) separates the ad from surrounding text and elements

### Requirement: Native Banner and Banner can coexist
The system SHALL allow both Adsterra Native Banner and Banner 728x90 ad units to appear on the same page when Adsterra is the active network.

#### Scenario: Page has both formats
- **WHEN** a page contains both a Native Banner `<AdUnit>` and a Banner 728x90 `<AdUnit>`
- **THEN** both ad units render independently without script conflicts
- **AND** each Banner instance uses its own `atOptions` configuration


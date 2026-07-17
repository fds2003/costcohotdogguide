# adsterra-banner-320x50 Specification

## Purpose
TBD - created by archiving change integrate-adsterra-banner-320x50. Update Purpose after archive.
## Requirements
### Requirement: Adsterra Banner 320x50 is configurable in ads.json
The system SHALL support Adsterra Banner 320x50 slot configuration in `src/data/ads.json` with unique keys for each placement.

#### Scenario: Mobile banner slots exist in config
- **WHEN** a developer opens `src/data/ads.json`
- **THEN** the `adsterra` section contains mobile-banner slot entries with `key`, `format`, `height`, and `width`

#### Scenario: Slot uses mobile dimensions
- **WHEN** `ads.json` defines a slot named `mobile_banner_sticky`
- **THEN** the slot has `width: 320`, `height: 50`, and a unique `key`

### Requirement: AdUnit component renders Banner 320x50 with atOptions
The system SHALL extend `AdUnit.astro` to render Adsterra Banner 320x50 when `type="banner"` and `format="mobile-banner"` with Adsterra as the active network.

#### Scenario: Mobile banner renders with correct config
- **WHEN** an `<AdUnit type="banner" format="mobile-banner" slot="mobile_banner_sticky" />` is placed on a page with Adsterra enabled
- **THEN** `atOptions` is set with `width: 320`, `height: 50`, `format: 'iframe'`, and the slot's unique `key`
- **AND** the corresponding `invoke.js` script loads

#### Scenario: Placeholder shows when disabled
- **WHEN** ads are disabled
- **THEN** a placeholder box sized for 320x50 is displayed

### Requirement: Mobile banner is hidden on desktop
The system SHALL ensure Banner 320x50 ads are only visible on mobile viewports.

#### Scenario: Mobile banner hidden on desktop
- **WHEN** a user visits a page containing a Banner 320x50 on a viewport wider than 768px
- **THEN** the banner container is hidden (`display: none` or equivalent)
- **AND** no ad impression is triggered

#### Scenario: Mobile banner visible on mobile
- **WHEN** a user visits the same page on a viewport 767px or narrower
- **THEN** the banner container is visible

### Requirement: Mobile banner placed in mobile-optimized positions
The system SHALL place Banner 320x50 ads in positions optimized for mobile user experience.

#### Scenario: Sticky footer banner on mobile
- **WHEN** a user scrolls through an article on mobile
- **THEN** a Banner 320x50 remains visible in a sticky footer bar

#### Scenario: In-content mobile banner
- **WHEN** a user reads an article on mobile
- **THEN** a Banner 320x50 appears between content paragraphs

### Requirement: All four Adsterra formats coexist
The system SHALL allow Native Banner, Banner 728x90, Banner 300x250, and Banner 320x50 to appear across the site.

#### Scenario: Mobile page has native + mobile banner
- **WHEN** a user visits a page on mobile
- **THEN** both Native Banner and Banner 320x50 render correctly

#### Scenario: Desktop page has native + desktop banners
- **WHEN** a user visits the same page on desktop
- **THEN** Native Banner and Banner 728x90/300x250 render, while Banner 320x50 is hidden


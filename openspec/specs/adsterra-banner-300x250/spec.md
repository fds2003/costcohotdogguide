# adsterra-banner-300x250 Specification

## Purpose
TBD - created by archiving change integrate-adsterra-banner-300x250. Update Purpose after archive.
## Requirements
### Requirement: Adsterra Banner 300x250 is configurable in ads.json
The system SHALL support Adsterra Banner 300x250 slot configuration in `src/data/ads.json` with unique keys for each placement.

#### Scenario: Medium rectangle slots exist in config
- **WHEN** a developer opens `src/data/ads.json`
- **THEN** the `adsterra` section contains medium-rectangle slot entries with `key`, `format`, `height`, and `width`

#### Scenario: Slot uses correct dimensions
- **WHEN** `ads.json` defines a slot named `medium_rectangle_content`
- **THEN** the slot has `width: 300`, `height: 250`, and a unique `key`

### Requirement: AdUnit component renders Banner 300x250 with atOptions
The system SHALL extend `AdUnit.astro` to render Adsterra Banner 300x250 when `type="banner"` and `format="medium-rectangle"` with Adsterra as the active network.

#### Scenario: Medium rectangle renders with correct config
- **WHEN** an `<AdUnit type="banner" format="medium-rectangle" slot="medium_rectangle_content" />` is placed on a page with Adsterra enabled
- **THEN** `atOptions` is set with `width: 300`, `height: 250`, `format: 'iframe'`, and the slot's unique `key`
- **AND** the corresponding `invoke.js` script loads

#### Scenario: Placeholder shows when disabled
- **WHEN** ads are disabled
- **THEN** a placeholder box sized for 300x250 is displayed

### Requirement: Banner 300x250 is placed in content-optimized positions
The system SHALL place Banner 300x250 ads in positions that leverage the format's strengths: sidebars, in-content breaks, and mobile-friendly slots.

#### Scenario: Article pages have in-content medium rectangle
- **WHEN** a user visits an article page
- **THEN** a Banner 300x250 is rendered between content sections, centered

#### Scenario: Guide page has sidebar medium rectangle
- **WHEN** a user visits `/guide/` on a desktop viewport
- **THEN** a Banner 300x250 appears in a sidebar or alongside the main content

### Requirement: Banner 300x250 is responsive and mobile-safe
The system SHALL ensure Banner 300x250 ads scale correctly on all viewport widths.

#### Scenario: Container scales on narrow viewports
- **WHEN** a Banner 300x250 is rendered on a viewport narrower than 300px
- **THEN** the container uses `max-width: 100%` to prevent overflow

### Requirement: All three Adsterra formats coexist
The system SHALL allow Native Banner, Banner 728x90, and Banner 300x250 to appear on the same page.

#### Scenario: Page contains all three formats
- **WHEN** a page includes all three AdUnit types (native, banner-leaderboard, banner-medium-rectangle)
- **THEN** all three render independently without script conflicts


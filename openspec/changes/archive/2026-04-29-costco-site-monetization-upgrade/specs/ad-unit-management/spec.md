## MODIFIED Requirements

### Requirement: Ad configuration supports production mode toggle
The existing `ads.json` configuration file SHALL support a production mode. When `enabled` is set to `true`, the system SHALL render real ad units instead of placeholders.

#### Scenario: Production mode enabled
- **WHEN** `ads.json` has `"enabled": true` and a valid AdSense client ID
- **THEN** all `AdUnit` components render actual AdSense ad units with the configured slot IDs

#### Scenario: Development mode (default)
- **WHEN** `ads.json` has `"enabled": false`
- **THEN** all `AdUnit` components render placeholder boxes showing ad slot information

### Requirement: AdSense client ID is configurable
The system SHALL read the AdSense publisher client ID from `ads.json` and inject it into the AdSense script tag loaded in `BaseLayout.astro`.

#### Scenario: AdSense script contains correct client ID
- **WHEN** the site is built with `"network": "adsense"` and a valid client ID
- **THEN** the `<head>` contains the AdSense script with the exact client ID from configuration

### Requirement: Media.net is supported as alternative network
The system SHALL support Media.net as an alternative ad network to AdSense. When `ads.json` has `"network": "medianet"`, the system SHALL load Media.net scripts and render Media.net ad units.

#### Scenario: Media.net mode
- **WHEN** `ads.json` has `"network": "medianet"` and valid Media.net credentials
- **THEN** the `<head>` loads Media.net contextual script and ad units render Media.net placements

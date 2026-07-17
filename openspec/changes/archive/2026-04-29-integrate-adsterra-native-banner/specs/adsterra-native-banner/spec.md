## ADDED Requirements

### Requirement: Adsterra network is configurable in ads.json
The system SHALL support Adsterra as a configurable ad network in `src/data/ads.json` alongside existing AdSense and Media.net configurations.

#### Scenario: Adsterra configuration exists
- **WHEN** a developer opens `src/data/ads.json`
- **THEN** an `adsterra` section exists containing native banner slot mappings

#### Scenario: Network selection activates Adsterra
- **WHEN** `ads.json` has `"network": "adsterra"` and `"enabled": true`
- **THEN** the site renders Adsterra ads instead of AdSense or Media.net ads

### Requirement: Adsterra invoke script loads in page head
The system SHALL load the Adsterra `invoke.js` script in the `<head>` of every page when Adsterra is the active network.

#### Scenario: Script loads on all pages
- **WHEN** a user visits any page on the site with Adsterra enabled
- **THEN** the Adsterra invoke script is present in `<head>` with `async` and `data-cfasync="false"` attributes

#### Scenario: Script does not load when disabled
- **WHEN** Adsterra is not the active network or ads are disabled
- **THEN** no Adsterra script is loaded in the page

### Requirement: AdUnit component renders Adsterra Native Banner containers
The system SHALL extend `AdUnit.astro` to render Adsterra Native Banner container `div` elements when the active network is Adsterra.

#### Scenario: Container div renders for each slot
- **WHEN** an `<AdUnit slot="homepage_top" />` is placed on a page with Adsterra enabled
- **THEN** a `<div id="container-<slotId>">` is rendered at that location

#### Scenario: Container uses correct slot ID from config
- **WHEN** `ads.json` maps `homepage_top` to container ID `22a26d6ed1b2ad5c819ad3d70b369826`
- **THEN** the rendered container has `id="container-22a26d6ed1b2ad5c819ad3d70b369826"`

#### Scenario: AdUnit falls back to placeholder when disabled
- **WHEN** ads are disabled (`enabled: false`)
- **THEN** the gray placeholder box is displayed instead of the Adsterra container

### Requirement: Native Banner placements follow site ad slot conventions
The system SHALL place Adsterra Native Banner ad units on high-traffic pages using the existing slot naming convention.

#### Scenario: Homepage has top placement
- **WHEN** a user visits the homepage
- **THEN** an `<AdUnit slot="homepage_top" />` is rendered in the hero section

#### Scenario: Guide page has in-content placement
- **WHEN** a user visits `/guide/`
- **THEN** an `<AdUnit slot="in_content_1" />` is rendered within the article content

#### Scenario: Article pages have in-content placement
- **WHEN** a user visits any article page (e.g., `/articles/pricing-strategy/`)
- **THEN** an `<AdUnit slot="in_content_1" />` is rendered within the article body

### Requirement: Adsterra ads are responsive and non-intrusive
The system SHALL ensure Adsterra Native Banner ads integrate cleanly with the site's Tailwind CSS layout without breaking page flow or causing layout shift.

#### Scenario: Ad container is responsive
- **WHEN** a Native Banner ad is rendered on any viewport width
- **THEN** the container respects the parent layout constraints and does not overflow

#### Scenario: Ad placement does not break content flow
- **WHEN** an in-content ad is placed within an article
- **THEN** the surrounding text and elements maintain proper spacing and readability

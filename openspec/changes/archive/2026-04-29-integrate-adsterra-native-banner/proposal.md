## Why

The site currently supports AdSense and Media.net ad networks, but the Adsterra platform has been approved and a Native Banner ad unit has been created. Native Banner ads are a core part of the monetization strategy (Native Banner + Banner combo), offering higher RPM than traditional display ads for content-heavy pages. We need to integrate this new ad unit into the existing ad system so it can be deployed alongside existing placeholders.

## What Changes

- Extend `src/data/ads.json` to support `adsterra` network configuration with Native Banner ad unit IDs
- Extend `src/components/AdUnit.astro` to render Adsterra Native Banner ads when `network: "adsterra"` is configured
- Update `src/layouts/BaseLayout.astro` to load Adsterra invoke scripts in `<head>` when enabled
- Add Native Banner placements to high-traffic pages (homepage, guide, article pages) following the site's ad slot naming convention
- Update ad placeholder logic to show Adsterra placeholders in dev mode

## Capabilities

### New Capabilities
- `adsterra-native-banner`: Adsterra Native Banner ad unit rendering, including script loading, container placement, and responsive layout integration with existing AdUnit component

### Modified Capabilities
- None (the existing ad system is configuration-driven; adding a new network is a pure extension)

## Impact

- `src/data/ads.json` — new `adsterra` section with native banner slots
- `src/components/AdUnit.astro` — new conditional block for `network === 'adsterra'`
- `src/layouts/BaseLayout.astro` — new script tag for Adsterra invoke.js
- `src/pages/index.astro`, `src/pages/guide.astro`, select article pages — new `<AdUnit>` placements
- No breaking changes; existing AdSense/Media.net configurations remain unaffected

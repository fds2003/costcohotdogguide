## Why

The site is implementing a dual-format ad monetization strategy (Native Banner + Banner combo). The Adsterra Native Banner integration is already planned. Now a Banner 728x90 (Leaderboard) ad unit has been created, which complements the Native Banner by serving display ads in header and footer positions. Leaderboard banners typically deliver strong CPM on high-traffic pages and are a standard ad format recognized by all major ad networks. Integrating this unit completes the Adsterra ad stack.

## What Changes

- Extend `src/data/ads.json` to support Adsterra Banner 728x90 slot configuration
- Extend `src/components/AdUnit.astro` to render Adsterra Banner ads using `atOptions` + `invoke.js` pattern
- Update `src/layouts/BaseLayout.astro` to load Banner invoke script alongside existing scripts
- Add Banner 728x90 placements to high-visibility positions (page header, article footer, sticky footer area)
- Ensure Banner ads render only when `enabled: true` and `network: "adsterra"`

## Capabilities

### New Capabilities
- `adsterra-banner-728x90`: Adsterra Banner 728x90 (Leaderboard) ad unit rendering with `atOptions` configuration and iframe-based display

### Modified Capabilities
- None

## Impact

- `src/data/ads.json` — new banner slot entries under `adsterra` section
- `src/components/AdUnit.astro` — new conditional block for Adsterra Banner format
- `src/layouts/BaseLayout.astro` — additional script loading for Banner invoke.js
- `src/pages/index.astro`, `src/pages/guide.astro`, article pages — new `<AdUnit type="banner" format="leaderboard">` placements
- No breaking changes; existing ads and placeholders remain unaffected

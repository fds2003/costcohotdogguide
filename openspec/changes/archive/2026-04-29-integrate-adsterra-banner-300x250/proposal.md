## Why

The Adsterra monetization stack now includes Native Banner and Banner 728x90. To complete the multi-format ad coverage, a Banner 300x250 (Medium Rectangle) unit has been created. Medium Rectangle is one of the highest-performing ad formats globally, fitting naturally within article content, sidebars, and mobile layouts. Adding this format maximizes fill rate and RPM across all page types.

## What Changes

- Extend `src/data/ads.json` to support Adsterra Banner 300x250 slot configuration
- Extend `src/components/AdUnit.astro` to render Banner 300x250 using existing `atOptions` + `invoke.js` pattern (same as Banner 728x90)
- Add Banner 300x250 placements to article sidebars, in-content areas, and mobile-friendly positions
- Ensure coexistence with Native Banner and Banner 728x90 on the same page

## Capabilities

### New Capabilities
- `adsterra-banner-300x250`: Adsterra Banner 300x250 (Medium Rectangle) ad unit rendering, sharing the same `atOptions` infrastructure as Banner 728x90

### Modified Capabilities
- None

## Impact

- `src/data/ads.json` — new medium-rectangle slot entries under `adsterra` section
- `src/components/AdUnit.astro` — `format="medium-rectangle"` handled alongside existing `leaderboard`
- Article pages and guide pages — new `<AdUnit type="banner" format="medium-rectangle">` placements
- No breaking changes

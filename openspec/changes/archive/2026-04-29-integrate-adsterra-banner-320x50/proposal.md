## Why

The Adsterra monetization stack already includes Native Banner, Banner 728x90, and Banner 300x250. The final piece for complete cross-device coverage is the Banner 320x50 (Mobile Banner). This compact format is specifically designed for mobile viewports where larger banners would disrupt the reading experience. With mobile traffic typically representing 50-70% of site visits, adding a mobile-optimized banner ensures revenue is not left on the table for the majority of users.

## What Changes

- Extend `src/data/ads.json` to support Adsterra Banner 320x50 slot configuration
- Extend `src/components/AdUnit.astro` to render Banner 320x50 using existing `atOptions` + `invoke.js` pattern
- Add Banner 320x50 placements optimized for mobile: sticky footer bar, between content sections, mobile header strip
- Ensure the mobile banner is hidden on desktop viewports to avoid wasting impressions

## Capabilities

### New Capabilities
- `adsterra-banner-320x50`: Adsterra Banner 320x50 (Mobile Banner) ad unit rendering, optimized for mobile-first layouts

### Modified Capabilities
- None

## Impact

- `src/data/ads.json` — new mobile-banner slot entries under `adsterra` section
- `src/components/AdUnit.astro` — `format="mobile-banner"` handled alongside existing banner formats
- Mobile-optimized pages — new `<AdUnit type="banner" format="mobile-banner">` placements with responsive visibility
- No breaking changes

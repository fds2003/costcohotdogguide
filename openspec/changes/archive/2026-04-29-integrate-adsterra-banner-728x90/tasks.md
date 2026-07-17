## 1. Configuration

- [x] 1.1 Add Banner 728x90 slot entries to `src/data/ads.json` under `adsterra.slots` with `key`, `format`, `height`, `width`
- [x] 1.2 Add provided ad key `430483682f9914a259756e4206a7e9e0` for slot `leaderboard_header`

## 2. Component Extension

- [x] 2.1 Extend `src/components/AdUnit.astro` to detect `type="banner"` + `format="leaderboard"` when `network === 'adsterra'`
- [x] 2.2 Render inline `atOptions` config script with slot-specific key from `ads.json`
- [x] 2.3 Render `invoke.js` script tag immediately after `atOptions`
- [x] 2.4 Wrap banner in responsive container (`max-w-full overflow-hidden`) to prevent mobile overflow
- [x] 2.5 Ensure placeholder shows appropriate leaderboard dimensions when `enabled: false`

## 3. Layout Integration

- [x] 3.1 Update `src/layouts/BaseLayout.astro` to also load Adsterra Banner invoke script when `network === 'adsterra'`
- [x] 3.2 Verify Banner scripts coexist with Native Banner scripts without conflicts

## 4. Page Placements

- [x] 4.1 Add `<AdUnit type="banner" format="leaderboard" slot="leaderboard_header" />` to `src/pages/index.astro` below hero section
- [x] 4.2 Add Banner ad to `src/pages/guide.astro` at article bottom above footer
- [x] 4.3 Add Banner ad to 3 article pages between content sections

## 5. Build & Validation

- [x] 5.1 Run `npm run build` and verify no errors
- [x] 5.2 Verify `atOptions` script appears in built HTML with correct key
- [x] 5.3 Verify Banner invoke.js script loads after `atOptions`
- [x] 5.4 Verify container is responsive at viewport widths below 728px
- [x] 5.5 Verify placeholder renders correctly when ads disabled

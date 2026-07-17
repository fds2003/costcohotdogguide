## 1. Configuration

- [x] 1.1 Add `adsterra` section to `src/data/ads.json` with native banner slot mappings (homepage_top, in_content_1)
- [x] 1.2 Add container IDs for each slot using the provided ad unit `22a26d6ed1b2ad5c819ad3d70b369826`

## 2. Component Extension

- [x] 2.1 Extend `src/components/AdUnit.astro` to render Adsterra container `<div>` when `network === 'adsterra'`
- [x] 2.2 Map the `slot` prop to the correct container ID from `ads.json` adsterra slots
- [x] 2.3 Ensure placeholder logic still works when `enabled: false`

## 3. Layout Integration

- [x] 3.1 Update `src/layouts/BaseLayout.astro` to load Adsterra `invoke.js` script in `<head>` when `network === 'adsterra'`
- [x] 3.2 Include `async` and `data-cfasync="false"` attributes on the script tag

## 4. Page Placements

- [x] 4.1 Add `<AdUnit slot="homepage_top" />` to `src/pages/index.astro` in the hero section
- [x] 4.2 Add `<AdUnit slot="in_content_1" />` to `src/pages/guide.astro` within article content
- [x] 4.3 Add `<AdUnit slot="in_content_1" />` to at least 3 article pages (e.g., pricing-strategy, 150-miracle, is-it-healthy)

## 5. Build & Validation

- [x] 5.1 Run `npm run build` and verify no errors
- [x] 5.2 Verify Adsterra script appears in `<head>` of built HTML when `enabled: true` and `network: "adsterra"`
- [x] 5.3 Verify container `<div>` elements render at correct placements
- [x] 5.4 Verify placeholder appears when `enabled: false`

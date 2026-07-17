## 1. Configuration

- [x] 1.1 Add Banner 320x50 slot entries to `src/data/ads.json` under `adsterra.slots` with `key`, `format`, `height`, `width`
- [x] 1.2 Add provided ad key `a9ed9968de08caf1998fcf7ccbc96ebd` for slot `mobile_banner_sticky`

## 2. Component Extension

- [x] 2.1 Extend `src/components/AdUnit.astro` to handle `type="banner"` + `format="mobile-banner"` when `network === 'adsterra'`
- [x] 2.2 Render inline `atOptions` config with `width: 320`, `height: 50` from slot config
- [x] 2.3 Render corresponding `invoke.js` script after `atOptions`
- [x] 2.4 Wrap in responsive container with `block md:hidden` (visible mobile, hidden desktop)

## 3. Page Placements

- [x] 3.1 Add `<AdUnit type="banner" format="mobile-banner" slot="mobile_banner_sticky" />` to `src/pages/index.astro` in a sticky footer position (mobile only)
- [x] 3.2 Add mobile banner to 3 article pages between content sections (mobile only)

## 4. Build & Validation

- [x] 4.1 Run `npm run build` and verify no errors
- [x] 4.2 Verify `atOptions` renders with correct 320x50 dimensions
- [x] 4.3 Verify mobile banner is hidden on viewports above 768px
- [x] 4.4 Verify mobile banner is visible on viewports 767px and below
- [x] 4.5 Verify placeholder renders at appropriate size when disabled

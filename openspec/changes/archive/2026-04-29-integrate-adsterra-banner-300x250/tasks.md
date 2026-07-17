## 1. Configuration

- [x] 1.1 Add Banner 300x250 slot entries to `src/data/ads.json` under `adsterra.slots` with `key`, `format`, `height`, `width`
- [x] 1.2 Add provided ad key `df7d5e6a84861562a45572bdd66dcfa1` for slot `medium_rectangle_content`

## 2. Component Extension

- [x] 2.1 Extend `src/components/AdUnit.astro` to handle `type="banner"` + `format="medium-rectangle"` when `network === 'adsterra'`
- [x] 2.2 Render inline `atOptions` config with `width: 300`, `height: 250` from slot config
- [x] 2.3 Render corresponding `invoke.js` script after `atOptions`
- [x] 2.4 Wrap in responsive container with centered alignment

## 3. Page Placements

- [x] 3.1 Add `<AdUnit type="banner" format="medium-rectangle" slot="medium_rectangle_content" />` to 3 article pages between content sections
- [x] 3.2 Add Banner 300x250 to `src/pages/guide.astro` in a sidebar-friendly position

## 4. Build & Validation

- [x] 4.1 Run `npm run build` and verify no errors
- [x] 4.2 Verify `atOptions` renders with correct 300x250 dimensions
- [x] 4.3 Verify container is responsive below 300px viewport
- [x] 4.4 Verify placeholder renders at appropriate size when disabled

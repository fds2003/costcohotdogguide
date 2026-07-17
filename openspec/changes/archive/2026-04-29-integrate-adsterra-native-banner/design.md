## Context

The site uses a configuration-driven ad system where `ads.json` controls which network is active, and `AdUnit.astro` renders the appropriate ad markup. Currently supported networks are AdSense and Media.net. Adsterra has been approved as an additional network, and a Native Banner ad unit has been created with ID `22a26d6ed1b2ad5c819ad3d70b369826`.

Adsterra Native Banner uses an external script (`invoke.js`) paired with a container `div`. The script is loaded once per page in `<head>`, and each ad unit has its own container `div` with a unique ID.

## Goals / Non-Goals

**Goals:**
- Add Adsterra as a fully supported third ad network alongside AdSense and Media.net
- Integrate the existing Native Banner ad unit into the AdUnit component
- Place Native Banner ads on high-traffic pages following existing slot conventions
- Ensure ads only render when `enabled: true` and `network: "adsterra"` in config

**Non-Goals:**
- Adding other Adsterra ad formats (popunder, social bar, direct link) — out of scope
- Replacing existing AdSense/Media.net configurations
- A/B testing ad networks
- Ad viewability tracking beyond existing GA4 events

## Decisions

**1. Single script in BaseLayout `<head>`, multiple containers via AdUnit**

Adsterra's `invoke.js` script only needs to be loaded once per page. We load it in `BaseLayout.astro` `<head>` when `network === 'adsterra'`, and each `AdUnit` instance renders its own `<div id="container-...">`. This matches the existing pattern where BaseLayout loads network-level scripts (AdSense, Media.net) and AdUnit renders slot-level markup.

*Alternative considered:* Loading the script inside each AdUnit instance. Rejected because it would cause duplicate script loads and potential race conditions.

**2. Reuse existing `slot` prop for Adsterra container IDs**

The AdUnit component already accepts a `slot` prop. For Adsterra, the `slot` value maps to a container ID suffix in `ads.json`. This keeps the component API consistent across all networks.

**3. Placeholders remain unchanged**

When ads are disabled, the existing gray placeholder box will display. No new placeholder design needed for Adsterra specifically.

**4. Slot naming convention**

Following the existing convention (`homepage_top`, `in_content_1`, `sidebar`, etc.), Adsterra slots will use the same logical names. The `ads.json` config maps these names to actual Adsterra container IDs.

## Risks / Trade-offs

- [Adsterra script may block render] → Mitigation: use `async` attribute on script tag; script is already async in the provided code
- [Ad blockers may hide Native Banner ads] → Mitigation: this is expected behavior; placeholder provides graceful fallback in dev mode
- [Multiple ad networks in config could confuse] → Mitigation: only one `network` field is active at a time; clear `_comment` in ads.json

## Migration Plan

1. Update `ads.json` with `adsterra` section and set `network: "adsterra"`, `enabled: true` when ready to deploy
2. Update `BaseLayout.astro` to load Adsterra script
3. Update `AdUnit.astro` to render Adsterra containers
4. Add `<AdUnit slot="...">` placements to target pages
5. Build and verify ads render correctly
6. Rollback: change `enabled` back to `false` or switch `network` to previous value

## Open Questions

- None at this time

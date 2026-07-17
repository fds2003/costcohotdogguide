## Context

The site's ad system already supports AdSense and Media.net. A separate change (`integrate-adsterra-native-banner`) is adding Adsterra Native Banner support. This change adds the second half of the dual-format strategy: a Banner 728x90 (Leaderboard) unit.

The Banner ad code uses a different pattern than Native Banner:
- Native Banner: `<script src=".../invoke.js">` + `<div id="container-...">`
- Banner 728x90: `atOptions = { key, format: 'iframe', height, width }` + `<script src=".../invoke.js">`

The Banner requires an `atOptions` configuration object to be set before the invoke script loads. Each banner slot has its own unique `key`.

## Goals / Non-Goals

**Goals:**
- Add Adsterra Banner 728x90 as a supported ad format within the existing AdUnit component
- Load Banner invoke scripts with correct `atOptions` configuration per slot
- Place Banner ads in high-visibility positions (header, footer, sticky areas)
- Maintain consistency with existing AdUnit API (`slot`, `type`, `format` props)

**Non-Goals:**
- Adding other Banner sizes (300x250, 160x600, etc.) — out of scope
- Modifying the Native Banner integration from the parallel change
- Custom ad refresh logic or viewability tracking

## Decisions

**1. Each Banner slot gets its own `atOptions` + `invoke.js` pair**

Unlike Native Banner where one script serves all containers, Banner ads require a separate `atOptions` config and `invoke.js` per slot. The AdUnit component will render both the config script and the invoke script inline for each slot instance.

*Alternative considered:* Loading all banner scripts in BaseLayout. Rejected because each slot needs a unique `atOptions.key`, making per-slot rendering necessary.

**2. Reuse `type="banner"` and `format="leaderboard"` props**

The AdUnit component already has `type` and `format` props. We'll use `type="banner"` and `format="leaderboard"` to identify Banner 728x90 placements. This keeps the component API consistent.

**3. Container sizing via CSS, not hardcoded dimensions**

The `atOptions` specifies `width: 728, height: 90`, but we'll wrap the ad in a responsive container using Tailwind (`max-w-full`, `overflow-hidden`) to prevent layout overflow on mobile. The actual iframe size is controlled by Adsterra's script.

**4. Coexistence with Native Banner**

Both Native Banner and Banner 728x90 can coexist on the same page when `network === 'adsterra'`. BaseLayout will load the Native Banner invoke.js (global script), and each AdUnit instance renders its own markup depending on `type` (native vs banner).

## Risks / Trade-offs

- [Multiple invoke.js scripts may conflict] → Mitigation: Native Banner and Banner use different script URLs/domains; no known conflicts
- [728px width overflows on mobile] → Mitigation: wrap in responsive container with `max-width: 100%` and `overflow: hidden`
- [atOptions global variable may collide] → Mitigation: each AdUnit instance sets `atOptions` immediately before its own invoke script, scoped by execution order

## Migration Plan

1. Add Banner slot config to `ads.json` under existing `adsterra` section
2. Extend AdUnit.astro with Banner rendering logic
3. Add Banner placements to target pages
4. Build and verify on both desktop and mobile viewports
5. Rollback: remove AdUnit placements or switch `enabled` to `false`

## Open Questions

- None at this time

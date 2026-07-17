## Context

The site already has planned integrations for Adsterra Native Banner and Banner 728x90. This change adds Banner 300x250, which uses the exact same `atOptions` + `invoke.js` rendering pattern as Banner 728x90. The only differences are the dimensions (300x250 vs 728x90) and the unique ad key.

## Goals / Non-Goals

**Goals:**
- Add Banner 300x250 as a third Adsterra ad format
- Reuse the existing Banner rendering infrastructure from the 728x90 change
- Place Medium Rectangle ads in content-rich positions (article sidebars, in-content, mobile slots)

**Non-Goals:**
- Refactoring the existing Banner 728x90 implementation
- Adding other banner sizes (160x600, 320x50, etc.)

## Decisions

**1. Reuse existing Banner rendering logic in AdUnit.astro**

Banner 300x250 uses the same `atOptions` + `invoke.js` pattern as Banner 728x90. We simply add a new `format="medium-rectangle"` condition that looks up the slot config and renders with `width: 300, height: 250`. This minimizes code duplication.

**2. Place 300x250 in sidebar and in-content positions**

Unlike the 728x90 Leaderboard which works best in header/footer, the 300x250 Medium Rectangle excels in sidebars and embedded within article content. We'll place these in:
- Article sidebar areas (on desktop)
- Between content sections (on mobile/desktop)
- Guide page callout sections

**3. Coexistence with other formats**

A single page may now contain Native Banner, Banner 728x90, and Banner 300x250 simultaneously. All three use different script URLs/domains, so there are no conflicts.

## Risks / Trade-offs

- [Too many ads on one page degrades UX] → Mitigation: limit to max 2-3 ad units per page; 300x250 placed only on longer articles
- [300px width may be too wide for narrow mobile viewports] → Mitigation: use `max-width: 100%` with centered alignment; on very narrow screens, the iframe will scale

## Migration Plan

1. Add 300x250 slot config to `ads.json`
2. Extend AdUnit.astro `format="medium-rectangle"` branch
3. Add placements to target pages
4. Build and verify
5. Rollback: remove placements or disable ads

## Open Questions

- None at this time

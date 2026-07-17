## Context

The site now has planned integrations for Native Banner, Banner 728x90, and Banner 300x250. This change adds Banner 320x50, which uses the same `atOptions` + `invoke.js` pattern as the other banner formats. The unique considerations for 320x50 are its mobile-first nature and compact size.

## Goals / Non-Goals

**Goals:**
- Add Banner 320x50 as the fourth Adsterra ad format
- Reuse existing Banner rendering infrastructure
- Place mobile banners in positions that maximize mobile viewability
- Hide mobile banners on desktop to avoid impression waste

**Non-Goals:**
- Refactoring existing banner implementations
- Adding other mobile formats (e.g., 300x50, 320x100)

## Decisions

**1. Reuse existing Banner rendering logic**

Banner 320x50 uses the same `atOptions` + `invoke.js` pattern. We add `format="mobile-banner"` to the AdUnit component, which looks up slot config and renders with `width: 320, height: 50`.

**2. Mobile-only visibility with responsive CSS**

The 320x50 banner should only render on mobile viewports (typically < 640px or < 768px). We'll wrap the AdUnit in a container with Tailwind responsive classes:
- `block md:hidden` — show on mobile, hide on medium+ screens
- This prevents desktop users from seeing a tiny banner that wastes an impression

**3. Placement in mobile-optimized positions**

Optimal placements for 320x50:
- Sticky footer bar at bottom of viewport (most visible on mobile)
- Between article paragraphs on mobile
- Below the hero section on mobile homepage

**4. Coexistence with other formats**

On mobile, a page may contain Native Banner + Banner 320x50. On desktop, the same page shows Native Banner + Banner 728x90/300x250. The mobile banner is simply hidden on desktop via CSS.

## Risks / Trade-offs

- [Sticky footer may cover content or CTA buttons] → Mitigation: use `position: sticky` with proper z-index; ensure content has enough bottom padding
- [320px width may still overflow on very small phones] → Mitigation: `max-width: 100%` with `overflow: hidden`

## Migration Plan

1. Add 320x50 slot config to `ads.json`
2. Extend AdUnit.astro with `format="mobile-banner"`
3. Add mobile-only placements to target pages
4. Build and verify on mobile viewport
5. Rollback: remove placements or disable ads

## Open Questions

- None at this time

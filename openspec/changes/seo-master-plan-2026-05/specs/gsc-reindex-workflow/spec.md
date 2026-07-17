## ADDED Requirements

### Requirement: Post-launch indexing requests for touched URLs
After P0 TD or structural updates deploy, owners SHALL request indexing in Google Search Console for all modified priority URLs listed in `tasks.md` section 1.

#### Scenario: Priority URLs submitted after deploy
- **WHEN** P0 merges to production
- **THEN** `/guide/`, `/hot-dog/calories/`, `/tools/price-history/`, `/hot-dog/sodium/`, `/hot-dog/price/` receive indexing requests within one business day

### Requirement: Four-week GSC review cadence
The team SHALL compare baseline (`doc/costcohotdogguide.com-Performance-on-Search-2026-05-05.xlsx` or newer export) with week-4 GSC metrics: total clicks, impressions, CTR, and priority URL performance.

#### Scenario: Retrospective updates Master Plan
- **WHEN** week-4 data shows new high-impression queries
- **THEN** `doc/SEO-MASTER-PLAN-2026-05.md` revision table or successor doc notes the next TD candidates

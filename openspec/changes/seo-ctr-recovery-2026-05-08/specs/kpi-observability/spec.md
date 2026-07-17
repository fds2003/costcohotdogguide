## ADDED Requirements

### Requirement: SEO change outcomes must be measured with lightweight KPI tiers
The team SHALL track SEO outcomes at three levels: site-wide, priority URL, and priority query group.

#### Scenario: Weekly KPI report is complete
- **WHEN** weekly SEO review is run
- **THEN** report includes impressions, clicks, CTR, and average position by URL and query group
- **AND** includes device split for mobile vs desktop where available

### Requirement: CTR targets must be phased for low-volume stability
CTR goals SHALL be set with phased checkpoints instead of one-step targets.

#### Scenario: Goal ladder prevents false pass/fail decisions
- **WHEN** progress is evaluated
- **THEN** checkpoints use staged targets (2-week, 4-week, 6-8-week)
- **AND** decisions use rolling windows rather than day-level volatility

### Requirement: Each release batch must preserve attribution context
Each SEO release batch SHALL preserve enough metadata for outcome attribution.

#### Scenario: Batch impact can be traced
- **WHEN** a batch is deployed
- **THEN** logs include changed URLs, change type, release time, and expected observation window
- **AND** next batch is not merged until initial observation window completes unless urgent fix is required

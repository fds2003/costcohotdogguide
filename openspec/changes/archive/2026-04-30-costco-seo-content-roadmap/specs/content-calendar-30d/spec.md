## ADDED Requirements

### Requirement: 30-day calendar defines daily and weekly content tasks
The system SHALL produce a 30-day content calendar that specifies content type, target keyword, estimated production time, and priority for each task.

#### Scenario: Calendar granularity
- **WHEN** the calendar is reviewed
- **THEN** it covers exactly 30 consecutive days
- **AND** each day has either a content task or a buffer/rest day
- **AND** each task includes: content type, target keyword, page type, priority (P0/P1/P2), estimated hours

### Requirement: Calendar uses weekly content type rotation
The calendar SHALL follow a weekly rotation pattern: Week 1 (FAQ bulk), Week 2 (core page enhancement), Week 3 (tutorial/tool), Week 4 (review + optimization).

#### Scenario: Rotation pattern validation
- **WHEN** examining the calendar by week
- **THEN** Week 1 contains only FAQ-type tasks
- **AND** Week 2 contains only core page enhancement tasks
- **AND** Week 3 contains only tutorial or tool tasks
- **AND** Week 4 contains only review or optimization tasks

### Requirement: Calendar includes GSC submission milestones
The calendar SHALL include explicit milestones for submitting new URLs to Google Search Console after each batch of content is published.

#### Scenario: GSC milestones
- **WHEN** reviewing calendar milestones
- **THEN** there are at least 4 GSC submission checkpoints (one per week)
- **AND** each checkpoint specifies which URLs to submit

### Requirement: Calendar includes weekly buffer time
Each week SHALL include at least one buffer day for catching up on delayed tasks or performing unplanned optimizations.

#### Scenario: Buffer time validation
- **WHEN** counting buffer days in the calendar
- **THEN** there are at least 4 buffer days across the 30-day period
- **AND** buffer days are distributed across all 4 weeks

### Requirement: Calendar is stored in version-controlled Markdown
The calendar SHALL be stored as a Markdown file at `doc/content-strategy/calendar/30-day-roadmap.md`.

#### Scenario: File delivery
- **WHEN** the calendar is delivered
- **THEN** it exists at `doc/content-strategy/calendar/30-day-roadmap.md`
- **AND** it includes both a weekly summary view and a daily detailed view

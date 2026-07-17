## ADDED Requirements

### Requirement: 6-month execution calendar is documented in Markdown
The system SHALL include `src/content/calendar/6-month-roadmap.md` documenting the complete 6-month execution plan with phases, weekly tasks, and monthly goals.

#### Scenario: Roadmap file exists
- **WHEN** a developer opens `src/content/calendar/6-month-roadmap.md`
- **THEN** the file contains 4 phases with specific deliverables, deadlines, and success metrics

### Requirement: Weekly task checklists are generated automatically
The system SHALL include `scripts/weekly-checklist.js` that reads the roadmap and outputs the current week's 3 priority tasks (P0 must-do items) based on the current date.

#### Scenario: Script outputs weekly priorities
- **WHEN** a developer runs `node scripts/weekly-checklist.js`
- **THEN** the terminal displays exactly 3 P0 tasks for the current week with descriptions and estimated hours

### Requirement: Phase 1 covers weeks 1-2 with FAQ batch production
Phase 1 (Weeks 1-2) SHALL deliver: 5 FAQ pages live, `/reviews/` directory created with 2 initial reviews, `funnelStage` logic implemented in RelatedProducts, and "next-step" sections added to existing pages.

#### Scenario: Phase 1 deliverables are complete
- **WHEN** Phase 1 ends
- **THEN** at least 5 FAQ pages are deployed, 2 review pages exist, and all existing hot dog pages have "next-step" sections

### Requirement: Phase 2 covers weeks 3-4 with tools and tutorials
Phase 2 (Weeks 3-4) SHALL deliver: nutrition calculator and price history chart live, 2-3 cooking/nutrition tutorials published, semantic internal linking script deployed, homepage brand positioning updated.

#### Scenario: Phase 2 deliverables are complete
- **WHEN** Phase 2 ends
- **THEN** both interactive tools are live, tutorials are indexed by Google, and internal links are injected across all pages

### Requirement: Phase 3 covers months 2-3 with monetization acceleration
Phase 3 (Months 2-3) SHALL deliver: weekly 1 new content piece (rotating FAQ/tutorial/review), GSC data reviewed weekly for CTR optimization, 2 old articles updated per month, Reddit r/Costco community engagement started.

#### Scenario: Phase 3 routine is established
- **WHEN** Phase 3 is active
- **THEN** the developer has a repeating weekly checklist: publish content → check GSC → engage on Reddit → update old content

### Requirement: Phase 4 covers months 4-6 with brand deepening
Phase 4 (Months 4-6) SHALL deliver: UGC campaign launched (reader polls/votes), funnel weakest layer identified and optimized via GA4, review categories expanded to outdoor and home, Giscus comments evaluated for introduction.

#### Scenario: Phase 4 deepens engagement
- **WHEN** Phase 4 is active
- **THEN** the site features user-generated voting content and the lowest-converting funnel layer has been A/B tested and improved

### Requirement: Calendar includes monthly buffer week
Each month in the calendar SHALL designate the last week as a "buffer week" for catching up on delayed tasks, analyzing metrics, and planning the next month — with no new content production scheduled.

#### Scenario: Buffer week provides breathing room
- **WHEN** the last week of any month arrives
- **THEN** the calendar shows only 2 tasks: review monthly metrics and plan next month's content calendar

## ADDED Requirements

### Requirement: Giscus comments component renders on article pages
The system SHALL include a `GiscusComments.astro` component that renders a Giscus comment thread on `/articles/` and `/menu/` pages, controlled by the `commentsEnabled` feature flag.

#### Scenario: Comments enabled and visible
- **WHEN** `features.json` has `commentsEnabled: true` and a user visits an article page
- **THEN** the Giscus comment section renders at the bottom of the article content with a fixed-height placeholder to prevent CLS

#### Scenario: Comments disabled and hidden
- **WHEN** `features.json` has `commentsEnabled: false` and a user visits an article page
- **THEN** no comment section is rendered and no Giscus scripts are loaded

### Requirement: Giscus configuration uses GitHub Discussions
The Giscus component SHALL be configured with a GitHub repository, category, and mapping strategy stored in the component props.

#### Scenario: Configuration is passed via props
- **WHEN** the GiscusComments component is rendered
- **THEN** it receives `repo`, `repoId`, `category`, `categoryId`, and `mapping` props that configure the GitHub Discussions backend

### Requirement: Comments are SEO-indexable
Giscus comments SHALL be rendered in a way that allows search engines to discover and index user comments.

#### Scenario: Google can crawl comment content
- **WHEN** Google crawls a page with enabled Giscus comments
- **THEN** the comment thread content is discoverable via the Giscus iframe or noscript fallback

### Requirement: Comment section does not impact Core Web Vitals
The Giscus script SHALL be loaded with `defer` attribute and the comment container SHALL have a fixed minimum height to prevent Cumulative Layout Shift.

#### Scenario: No layout shift when comments load
- **WHEN** the Giscus iframe loads after the page is visible
- **THEN** no layout shift occurs because the container has a preset `min-height` of 200px

#### Scenario: Giscus script does not block rendering
- **WHEN** the page HTML is parsed
- **THEN** the Giscus script is loaded asynchronously and does not block initial page render

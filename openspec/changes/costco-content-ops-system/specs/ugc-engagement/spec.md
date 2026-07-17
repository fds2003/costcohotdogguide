## ADDED Requirements

### Requirement: Giscus comments integration on article pages
The system SHALL integrate Giscus (GitHub Discussions-powered comments) on all article pages under `/articles/` and menu item pages under `/menu/`, using a configured GitHub repository for discussions.

#### Scenario: Comments load on article page
- **WHEN** a user scrolls to the bottom of an article page
- **THEN** a Giscus comment thread loads, allowing the user to post a comment via GitHub authentication

### Requirement: Comments are disabled during launch phase
Giscus comments SHALL be controlled by a feature flag in `src/data/features.json` with a `commentsEnabled` field defaulting to `false` until the site reaches a traffic threshold (e.g., 1000 monthly sessions).

#### Scenario: Comments are initially hidden
- **WHEN** the site first launches the UGC feature
- **THEN** `features.json` has `commentsEnabled: false` and no comment section is rendered on any page

### Requirement: Voting component supports user polls
The system SHALL include a lightweight voting component (`<VotePoll>`) that can be embedded in articles to ask users questions like "What's your favorite Costco Food Court item?" with clickable options and real-time result display.

#### Scenario: Poll displays results
- **WHEN** a user clicks an option in a poll
- **THEN** the vote is recorded in localStorage and the results update to show the percentage distribution across all options

### Requirement: UGC content is indexable by search engines
Giscus comments and poll results SHALL be rendered in the server-side HTML output (not loaded via client-side JavaScript only) so that search engines can index the user-generated text content.

#### Scenario: Comment text appears in page source
- **WHEN** a search engine crawler fetches an article page with comments
- **THEN** the HTML source contains the comment text content, not just a placeholder div

### Requirement: UGC moderation uses GitHub-native tools
Comment moderation SHALL be handled through the GitHub repository's native discussion moderation features (locking, deleting, reporting), with no custom moderation UI required.

#### Scenario: Spam comment is removed
- **WHEN** a moderator deletes a spam comment from the GitHub Discussion
- **THEN** the comment disappears from the website within 5 minutes due to Giscus caching

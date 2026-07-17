## ADDED Requirements

### Requirement: Features configuration file exists
The system SHALL include a `src/data/features.json` file that manages all feature flags for the site.

#### Scenario: File exists with default values
- **WHEN** the project is built
- **THEN** `src/data/features.json` exists and contains at minimum a `commentsEnabled` field set to `false`

### Requirement: Feature flags control component rendering
Components SHALL read from `features.json` and conditionally render based on flag values.

#### Scenario: Giscus respects commentsEnabled flag
- **WHEN** `commentsEnabled` is `false` in features.json
- **THEN** GiscusComments component renders nothing and loads no external scripts

#### Scenario: Giscus renders when flag is true
- **WHEN** `commentsEnabled` is `true` in features.json
- **THEN** GiscusComments component renders the full comment thread

### Requirement: Feature flags are extensible
The `features.json` file SHALL support adding new feature flags without modifying component code structure.

#### Scenario: Adding a new flag
- **WHEN** a developer adds `"newFeature": false` to features.json
- **THEN** the file is valid JSON and other components continue to work without changes

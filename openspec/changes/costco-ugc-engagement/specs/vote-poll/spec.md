## ADDED Requirements

### Requirement: VotePoll component renders interactive poll
The system SHALL include a `VotePoll.astro` component that displays a question with multiple clickable options, allowing users to vote and see real-time percentage results.

#### Scenario: User sees poll options
- **WHEN** a VotePoll component is rendered on a page
- **THEN** it displays the poll question as a heading and all options as clickable buttons or cards

#### Scenario: User votes and sees results
- **WHEN** a user clicks an option
- **THEN** the option is recorded in localStorage, the poll switches to results view, and each option shows its percentage with a visual progress bar

#### Scenario: User has already voted
- **WHEN** a user who has already voted visits the page again
- **THEN** the poll immediately shows the results view with their previous selection highlighted

### Requirement: VotePoll uses localStorage for persistence
Each VotePoll instance SHALL store the user's vote choice in localStorage using a unique key derived from the poll ID.

#### Scenario: Vote is persisted across sessions
- **WHEN** a user votes on a poll and later returns to the same page
- **THEN** their previous vote is recalled from localStorage and the results view is shown

#### Scenario: Each poll has independent storage
- **WHEN** a user votes on two different VotePoll instances on different pages
- **THEN** each vote is stored under a separate localStorage key (e.g., `costco-poll-{pollId}`)

### Requirement: VotePoll supports custom questions and options
The VotePoll component SHALL accept `question` and `options` props to customize each poll instance.

#### Scenario: Custom poll configuration
- **WHEN** a VotePoll is rendered with `question="What's your favorite?"` and `options=["Hot Dog", "Pizza", "Chicken Bake"]`
- **THEN** the poll displays exactly those options with the specified question text

### Requirement: VotePoll is embeddable in any article page
The VotePoll component SHALL be importable and renderable in any Astro page layout (BaseLayout, ReviewLayout) without additional dependencies.

#### Scenario: Embed in BaseLayout page
- **WHEN** a VotePoll is added to an article using BaseLayout
- **THEN** it renders correctly with the site's styling and does not conflict with existing components

## ADDED Requirements

### Requirement: FAQ Schema template defines valid JSON-LD markup
The system SHALL produce a standardized FAQPage JSON-LD Schema template that validates against Google's Rich Results Test requirements.

#### Scenario: Template structure validation
- **WHEN** the Schema template is reviewed
- **THEN** it uses `@type: "FAQPage"` as the root type
- **AND** it contains a `mainEntity` array with `@type: "Question"` items
- **AND** each Question contains `name` (the question text) and `acceptedAnswer` with `@type: "Answer"` and `text` property

### Requirement: Template includes all required fields
The FAQ Schema template SHALL include all fields required by Google for FAQ rich results, with no optional fields marked as required.

#### Scenario: Required fields check
- **WHEN** inspecting the template specification
- **THEN** the following fields are marked as required: `@context`, `@type`, `mainEntity`, `name`, `acceptedAnswer`, `text`
- **AND** no prohibited content types are included (no advertising, no violent content, no hate speech)

### Requirement: Template provides copy-paste examples for common FAQ types
The template document SHALL provide at least 3 complete copy-paste examples: dietary restriction FAQ, ingredient FAQ, and nutrition FAQ.

#### Scenario: Example coverage
- **WHEN** reviewing template examples
- **THEN** there is a dietary restriction example (e.g., "Is Costco hot dog gluten free?")
- **AND** there is an ingredient example (e.g., "What are the ingredients in a Costco hot dog?")
- **AND** there is a nutrition example (e.g., "How many calories in a Costco hot dog?")
- **AND** each example contains valid JSON-LD that can be directly pasted into an Astro page

### Requirement: Template is stored with validation instructions
The FAQ Schema template SHALL be stored with accompanying instructions on how to validate the markup using Google's Rich Results Test.

#### Scenario: Documentation completeness
- **WHEN** the template is delivered
- **THEN** it exists at `doc/content-strategy/templates/faq-schema-template.md`
- **AND** it includes a "Validation" section with a link to Google's Rich Results Test
- **AND** it includes a checklist of common errors to avoid

### Requirement: FAQ pages embed Schema as inline JSON-LD
All FAQ pages that use this template SHALL embed the Schema markup as an inline `<script type="application/ld+json">` tag in the page `<head>`, not as an external file or dynamically injected script.

#### Scenario: Embedding method
- **WHEN** an FAQ page is inspected in the browser
- **THEN** the JSON-LD script tag is present in the HTML source
- **AND** it is not loaded via JavaScript fetch or DOM manipulation
- **AND** it appears before the closing `</head>` tag

## ADDED Requirements

### Requirement: Keyword group contains one core keyword and 3-5 intent variants
A keyword group SHALL consist of exactly one core keyword and three to five search-intent variants that answer the same underlying question in different phrasing.

#### Scenario: Valid keyword group structure
- **WHEN** a keyword group is defined
- **THEN** it contains exactly one `core` keyword
- **AND** it contains 3 to 5 `variant` keywords
- **AND** all variants share the same search intent as the core keyword
- **AND** no variant is a mere synonym swap (e.g., "calories" → "kcal" is invalid; "how many calories" is valid)

### Requirement: Each keyword group maps to exactly one page
Each keyword group SHALL map to exactly one independent page. No page shall target more than one keyword group.

#### Scenario: One-to-one mapping validation
- **WHEN** a new page is created
- **THEN** it targets exactly one keyword group
- **AND** no other page targets the same keyword group
- **AND** the page URL slug is derived from the core keyword in kebab-case

### Requirement: Keyword groups are clustered by topic
Keyword groups SHALL be organized into topic clusters. All groups within a cluster share a broad topical theme.

#### Scenario: Topic cluster organization
- **WHEN** keyword groups are organized
- **THEN** each group belongs to exactly one topic cluster
- **AND** topic clusters include: nutrition, ingredients, dietary, cooking, reviews, price
- **AND** a cluster shall not exceed 20 keyword groups without being split into sub-clusters

### Requirement: Keyword group metadata is recorded in frontmatter
Each keyword group page SHALL include the keyword group metadata in its frontmatter: core keyword, variant keywords, topic cluster, target funnel stage.

#### Scenario: Frontmatter structure
- **WHEN** inspecting a keyword group page's frontmatter
- **THEN** it contains `keywordCore` with the core keyword
- **AND** it contains `keywordVariants` as an array of variant strings
- **AND** it contains `topicCluster` with the cluster name
- **AND** it contains `funnelStage` with A, B, or C

## ADDED Requirements

### Requirement: Representative pages pass Rich Results validation
For each page type sample (at least one FAQ route under `/faq/`, `/cooking/recipe/`, one `/tools/*` calculator or tracker, one `/reviews/*` layout), developers SHALL run Google's Rich Results Test and record **pass** or document **allowed limitations** (e.g. review snippet policies).

#### Scenario: FAQ page emits valid FAQPage when applicable
- **WHEN** a `/faq/*` page uses FAQ layout intended for rich results
- **THEN** JSON-LD validates without critical errors in Rich Results Test

### Requirement: Review pages comply with snippet policies
Product review content SHALL NOT rely on invalid standalone `Review` types at site root that violate Google guidelines documented in `SEO.astro` comments; Article/Product patterns SHALL remain compliant.

#### Scenario: No misleading aggregate rating in SERP
- **WHEN** review pages ship structured data
- **THEN** markup matches visible content and Google policy for that page type

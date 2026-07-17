## ADDED Requirements

### Requirement: Home and guide hub link to cluster anchors
The pages `/` (index) and `/guide/` SHALL include prominent links (sections or navigation blocks) to priority cluster URLs: `/hot-dog/calories/`, **`/tools/price-history/`**, `/ingredients/` or `/hot-dog/ingredients/`, `/faq/`, `/hot-dog/price/`, and related core `/hot-dog/*` pages per Master Plan.

#### Scenario: Three-click discovery
- **WHEN** a user lands on `/guide/`
- **THEN** they can reach `/tools/price-history/` within one click from that page

### Requirement: Cluster cross-links exist on editorial pages
Editorial pages in the calories, price, ingredients, and sodium clusters SHALL include at least **two** contextual internal links to sibling pages in the same cluster where relevant (e.g. calories → carbs/sodium; ingredients → allergens/beef-or-pork).

#### Scenario: Calories links to sodium for diet-conscious intent
- **WHEN** `/hot-dog/calories/` discusses macros or health trade-offs
- **THEN** it links to `/hot-dog/sodium/` or `/hot-dog/nutrition/` with descriptive anchor text

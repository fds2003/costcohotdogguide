## 1. Directory and Document Setup

- [ ] 1.1 Create `src/content/keyword-pages/` directory with subdirectories: `nutrition/`, `ingredients/`, `dietary/`, `cooking/`, `reviews/`, `price/`
- [ ] 1.2 Create `doc/content-strategy/one-keyword-group-one-page/` directory for strategy documents
- [ ] 1.3 Create `doc/content-strategy/templates/` directory for reusable templates

## 2. Keyword Group Mapping

- [ ] 2.1 Define keyword group structure: 1 core keyword + 3-5 intent variants per group
- [ ] 2.2 Update existing keyword matrix at `doc/content-strategy/keyword-matrix.md` with `keywordGroup` and `targetPage` columns
- [ ] 2.3 Group all 100 keywords into intent-based keyword groups
- [ ] 2.4 Verify no two groups share the same target page URL
- [ ] 2.5 Assign each group to a topic cluster (nutrition/ingredients/dietary/cooking/reviews/price)

## 3. Page Indexing Checklist

- [ ] 3.1 Define Technical category (4 items): crawlable, canonical, mobile-friendly, load time < 3s
- [ ] 3.2 Define Content category (4 items): 500+ words, unique title/meta, at least 1 H2, original content
- [ ] 3.3 Define Links category (4 items): 3+ inbound internal links, 1+ outbound internal link, no broken links, clear navigation
- [ ] 3.4 Create `doc/content-strategy/page-indexing-checklist.md` as a printable checklist with verification instructions
- [ ] 3.5 Add "blocking logic" note: any failed item prevents GSC submission

## 4. Internal Link Outranking Standard

- [ ] 4.1 Define minimum link requirement: 3 internal links to new page (2 contextual, 1 same-topic)
- [ ] 4.2 Define anchor text distribution: exact-match ≤ 40%, partial-match 40%, branded/natural 20%
- [ ] 4.3 Define contextual link standard: minimum 50 words of surrounding relevant content
- [ ] 4.4 Define source priority: same-topic pages first, funnel hierarchy second
- [ ] 4.5 Document internal linking standard in `doc/content-strategy/internal-linking-standard.md`

## 5. Fast Ranking Page Template

- [ ] 5.1 Design three-part opening paragraph template: direct answer (40-60w), context extension (1 sentence), reading guidance (1 sentence)
- [ ] 5.2 Define mandatory H2/H3 structure: 1 H1, 3+ H2, 2+ H2 with H3 subsections, 1 FAQ-style H2
- [ ] 5.3 Define FAQ Schema requirement: 3+ Q&A pairs per page, mapped to keyword variants
- [ ] 5.4 Define CTA section: natural language link to next funnel stage
- [ ] 5.5 Create `doc/content-strategy/templates/keyword-page-template.md` with placeholders and word-count guidance

## 6. Keyword Page Library

- [ ] 6.1 Create `src/content/keyword-pages/index.md` as library index with columns: core keyword, topic cluster, status, target URL, live date
- [ ] 6.2 Define file naming convention: core keyword in kebab-case
- [ ] 6.3 Define sub-cluster rule: split when topic cluster exceeds 20 files
- [ ] 6.4 Add frontmatter schema to template: `keywordCore`, `keywordVariants`, `topicCluster`, `funnelStage`

## 7. Seven-Day Validation Process

- [ ] 7.1 Define Day 1 check: `site:url` query for crawlability
- [ ] 7.2 Define Day 3 check: GSC Coverage report for index status
- [ ] 7.3 Define Day 7 check: GSC Performance report for query impressions
- [ ] 7.4 Document Day 1 failure remediation: noindex/robots/canonical audit + resubmit
- [ ] 7.5 Document Day 3 failure remediation: duplicate content check + quality signals + relink + reindex
- [ ] 7.6 Document Day 7 failure remediation: add 2 more links + verify title/depth + wait 7 days
- [ ] 7.7 Create `doc/content-strategy/seven-day-validation.md` with checklists and tracking table

## 8. Pilot Page Execution

- [ ] 8.1 Select 1-2 high-potential keyword groups from Stage A (KD < 15) as pilot
- [ ] 8.2 Create pilot pages following the full workflow: group mapping → template → checklist → links → validation
- [ ] 8.3 Execute 7-day validation on pilot pages and record results
- [ ] 8.4 If pilot succeeds (indexed + queries within 7 days), batch expand to 5 more keyword groups
- [ ] 8.5 If pilot fails, analyze root cause and refine template/checklist before scaling

## 9. Validation & Archive

- [ ] 9.1 Run `openspec validate --change one-keyword-group-one-page` and fix any issues
- [ ] 9.2 Verify all strategy documents exist in `doc/content-strategy/one-keyword-group-one-page/`
- [ ] 9.3 Verify `src/content/keyword-pages/` directory structure is created
- [ ] 9.4 Commit all documents to version control
- [ ] 9.5 Archive change via `openspec archive one-keyword-group-one-page`

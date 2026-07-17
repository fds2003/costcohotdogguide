## Why

`doc/SEO-MASTER-PLAN-2026-05.md` 综合了 GSC 导出（`doc/costcohotdogguide.com-Performance-on-Search-2026-05-05.xlsx`）与站点结构诊断：**架构合理，但 CTR 极低、大量查询 0 点击**；高展示 URL（如 `/guide/`）与优质排名查询（如 `costco hot dog calories 2026`）未在 SERP 上转化为点击。需要将 Master Plan 落实为 **OpenSpec 变更**：可验收的需求增量 + 工程任务清单，便于 `openspec validate` / apply 工作流跟踪。

## What Changes

- **P0**：按 GSC 优先级重写核心页面的 `<title>` / meta description；区分 **`/tools/price-history/`**（交互工具）与 **`/hot-dog/price-history/`**（叙事）；可选更新 2026 套餐选项相关文案模块。
- **技术**：HTTP→HTTPS 301、全站 **https** 内链与 canonical、关键营养数字与正文单一数据源对齐。
- **P1**：核心页唯一 H1、H2/H3 对齐 GSC 长尾；首页与 `/guide/` 指向集群代表页，消除孤岛；calories/sodium/price 等 **移动首屏答案块**。
- **P2**：在现有 `SEO.astro` 上 **Rich Results** 抽检（FAQ / Recipe / WebApplication 等），评测页遵守 Google Review 摘要规则；`/guide/` 导航化后再按需加厚正文。
- **P3**：每周 GSC 复盘节奏、工具页导向的自然外链策略（文档化，非本变更必选代码）。

## Capabilities

### New Capabilities (delta specs)

- `serp-metadata-ctr`: SERP 元数据（title/description）改写规范与优先 URL 列表，绑定 GSC 高展示/低点击页面。
- `https-canonical-consistency`: HTTPS 强制、canonical、内链协议一致性。
- `nutrition-copy-consistency`: 全站展示性营养数字（热量、钠等）与数据源对齐。
- `internal-linking-hub`: 首页与 `/guide/` 枢纽内链及集群互链规则。
- `mobile-above-fold-answers`: 核心事实页首屏 3 秒内呈现关键数字与结论。
- `schema-rich-results-audit`: 结构化数据查漏补缺与 Rich Results Test 验证流程。
- `gsc-reindex-workflow`: 关键 URL 改版后在 Search Console 请求编入索引及 4 周复盘指标。

### Modified Capabilities

- 无强制合并主 specs；本变更为 **执行 Master Plan 的专项增量**，与 `costco-content-ops-system` 中的 `gsc-content-optimization` 互补（后者偏脚本与日历，本变更偏页面级 TD 与首屏）。

## Impact

- **主要改动文件**：`src/src/pages/**`（各页 front/BaseLayout props）、`src/src/components/SEO.astro`（若扩展 Schema）、`astro.config.mjs`（若需 redirect/host）、`src/src/content/**` 或页面内嵌数字来源。
- **风险**：title/description 过度承诺导致跳出上升——需与正文数字一致。
- **依赖**：部署环境与 GSC 财产访问权；套餐新闻事实需运营核对。

## References

- `doc/SEO-MASTER-PLAN-2026-05.md`（文首 **OpenSpec 变更** 已回链至本目录 `openspec/changes/seo-master-plan-2026-05/`）
- `doc/costcohotdogguide.com-Performance-on-Search-2026-05-05.xlsx`
- `SITE-FRAMEWORK-CONTENT-DIRECTORY.md`（仓库根或 `doc/`）

## Why

`costcohotdogguide.com` 在最近 7 天已获得稳定展示（约 1006），但点击仅 5 次、CTR 约 0.50%。  
GSC 数据显示多个高展示页面与高排名查询长期 0 点击，属于典型的 SERP 呈现与落地承接不匹配问题。

当前目标不是新增页面规模，而是基于现有 URL 快速提升点击转化效率，并建立可归因的优化节奏。

## What Changes

- 将优化拆分为三阶段：P0（TD 急救）、P1（核心薄页升级）、P2（结构与 Schema 强化）。
- 优先改造 `/hot-dog/calories/`、`/tools/price-history/`、`/guide/`、`/hot-dog/faq/`、`/hot-dog/price/`。
- 为核心页面建立 TDH 与内链规范，减少高展示页“零点击”与页面孤岛问题。
- 补齐 Nutrition / Dataset 的结构化数据策略与验证流程；FAQPage 仅做低风险保留，不作为 Google CTR 提升手段。
- 引入轻量 KPI 与分批上线机制，避免“一次改太多无法归因”。

## Capabilities

### New Capabilities

- `serp-ctr-recovery`: 高展示低点击 URL 的标题/描述改写规范与优先级执行要求。
- `page-depth-hub-faq-price`: guide hub 化、faq 直答化、price 深度化的页面改造规范。
- `tdh-internal-linking`: 核心页面 H1-H3 与正文互链标准，保证 3 次点击可达核心页。
- `schema-reindex-workflow`: Schema 补充、Rich Results 抽检、GSC 重新抓取流程。
- `kpi-observability`: 个人站轻量 KPI、分阶段目标与周级复盘机制。

### Modified Capabilities

- 无。该变更作为独立执行包，不替代历史 change。

## Impact

- 主要影响 `src/src/pages/**` 的页面内容与 `title/description` 注入值。
- 可能影响 `src/src/components/SEO.astro` 的 JSON-LD 输出策略。
- 运营流程新增：上线批次记录、GSC 提交重抓取、周报式 KPI 复盘。
- 风险：文案承诺与正文数据不一致会引发跳出上升，需强制事实一致性校验。

## References

- `doc/costcohotdogguide.com SEO优化需求文档.md`
- `doc/costcohotdogguide.com-SEO-solution-v4-final.md`（v4.0 整合方案，与 v2 执行准则并列）
- `/Users/fengdashuang/Downloads/costcohotdogguide.com-Performance-on-Search-2026-05-08.xlsx`
- 代码实现目录：`src/`（Astro 站点根；commits 见该仓库）

## Why

`costcohotdogguide.com` 当前已上线 39 个页面，但 `doc/` 目录下的 PRD、关键词分析报告、10篇文章选题清单、流量策略和变现策略中规划的大量高价值内容尚未落地。具体包括：PRD 中规划的 9 个缺失内容页面（macros、weight-watchers-points、ingredients-list、beef-or-pork、brand、at-home、recipe、history、price-increase）、10篇精选文章中的 7 篇转化桥梁内容、以及 3 个交互式数据工具（营养计算器、价格历史追踪器、Weight Watchers 积分计算器）。补齐这些缺口是兑现文档投资、提升搜索覆盖面和变现能力的关键一步。

## What Changes

- **补齐 PRD 规划的 9 个缺失页面**：覆盖 KD 12-28 的中高价值关键词，完善内容矩阵
- **创建 3 个交互式数据工具**：营养计算器、价格历史追踪器、Weight Watchers 积分计算器
- **落地 10 篇文章选题中的 7 篇转化桥梁内容**：供应链效率、定价策略、会员成本分析等深度文章
- **扩展 Affiliate 场景化产品**：新增热狗机、烧烤工具、调味料等 8 个高客单价产品
- **完善内部链接网络**：从新页面向现有高流量页面导流，建立内容集群权重传递

## Capabilities

### New Capabilities
- `missing-prd-pages`: 补齐 PRD 和关键词分析报告中规划但未实现的 9 个核心内容页面
- `interactive-data-tools`: 创建 3 个客户端交互工具（营养计算器、价格历史追踪器、Weight Watchers 积分计算器）
- `conversion-bridge-articles`: 落地 10 篇文章选题清单中的 7 篇深度转化桥梁文章
- `affiliate-product-expansion`: 扩展 Affiliate 产品库，新增 8 个场景化高客单价产品链接

### Modified Capabilities
- `seo-authority`: 扩展 SEO Schema 支持以覆盖新页面类型（Dataset 用于价格追踪、HowTo 用于教程页）

## Impact

- **新增页面**：约 19 个（9 个 PRD 缺失页 + 7 篇桥梁文章 + 3 个工具页）
- **新增组件**：3 个交互式工具组件（Calculator、PriceTracker、WWPointsCalc）
- **数据层扩展**：新增 `src/data/prices-history.json` 和工具状态数据
- **Affiliate 扩展**：`affiliate.json` 新增 8 个产品条目
- **SEO 影响**：JSON-LD Schema 新增 Dataset 和 HowTo 类型支持

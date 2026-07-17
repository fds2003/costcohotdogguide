## Why

当前站点已完成从单一热狗主题向 Costco Food Court 全品类垂直媒体的架构升级（68 个页面上线），但缺乏系统化的内容持续更新机制。纯热狗内容的 SEO 天花板有限（约 10-15 篇深度内容），必须通过横向扩展选题、建立高效生产管道、引入 UGC 和数据驱动优化，才能维持长期流量增长和变现能力。

## What Changes

- 建立内容日历体系：定义铺量期（首月）和稳定期（第 2-3 个月）的发布节奏，涵盖文章、评测、工具页三种内容类型
- 扩展选题矩阵：从热狗横向延伸至烤鸡、Kirkland 产品、高客单价商品评测（厨房电器、保健品、户外装备）、季节性导购清单
- 搭建技术生产管道：开发 USDA API 数据聚合、Reddit/Quora 问题抓取、AI 辅助排版等低成本生产工具
- 新增交互式工具页：热量/宏量营养素计算器、Costco 会员回本计算器、价格历史追踪页
- 引入 UGC 机制：集成 Giscus 评论区、用户投票组件，利用用户留言自然补充长尾关键词内容
- 建立 GSC 数据反馈闭环：每周分析 Search Console 排名数据，对排名 10-20 位的页面进行"二次更新"优化

## Capabilities

### New Capabilities

- `content-calendar`: 内容日历和发布节奏管理，支持按周/月规划文章、评测、工具页的发布排期
- `content-topic-expansion`: 选题扩展体系，涵盖爆款产品延伸、高变现评测矩阵、季节性导购清单
- `content-production-pipeline`: 技术驱动的内容生产管道，包括 USDA API 聚合、社交数据抓取、AI 辅助生成工作流
- `interactive-calculators`: 交互式计算器工具页（热量计算器、会员回本计算器、价格历史页），与现有数据可视化页面形成互补
- `ugc-engagement`: 用户生成内容与互动机制，包括 Giscus 评论区集成和投票组件
- `gsc-content-optimization`: 基于 Google Search Console 数据的内容优化闭环，识别低排名高潜力页面并定向更新

### Modified Capabilities

<!-- 现有 specs 无需行为变更，所有内容运营能力均为新增 -->

## Impact

- **新增页面**：约 15-25 篇新文章/评测 + 3 个交互式工具页
- **内容源扩展**：从手工撰写转为数据聚合 + AI 辅助 + UGC 混合生产模式
- **SEO 策略**：从一次性内容发布转向"发布-监测-优化"的持续迭代模式
- **依赖**：Google Search Console API（用于自动化数据分析）、USDA FoodData Central API、Giscus/GitHub Discussions
- **现有系统**：不影响现有页面 URL 结构和广告变现架构

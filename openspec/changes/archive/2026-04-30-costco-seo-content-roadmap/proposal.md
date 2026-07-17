## Why

`costco-content-funnel-monetization` 已建立三层漏斗基础设施（FAQ / 教程 / 评测），但站点仍缺少系统化的 SEO 内容策略蓝图。当前关键词覆盖随机、内容发布无日历驱动、核心页面缺少标准化大纲和 Schema 模板。需要将之前讨论的 100 关键词策略、30 天内容计划、URL 架构、4 篇核心页面大纲、FAQ Schema 模板和内部链接框架整理为可执行的 OpenSpec 变更，使后续内容生产有章可循。

## What Changes

- 建立 **100 关键词分层矩阵**（A/B/C 漏斗对应），明确每类关键词的搜索意图、KD 和目标页面类型
- 制定 **30 天内容发布日历**，包含每日/每周任务、内容类型轮换、GSC 提交节奏
- 设计 **URL 结构规划**，明确新页面是复用现有 URL 还是新建 `/hot-dog/` 集群（决策点待确认）
- 输出 **4 篇核心页面详细大纲**（Calories / Nutrition Facts / Ingredients / Price），每篇含 H2-H3 结构、目标关键词、内链锚点、FAQ Schema 问题清单
- 制定 **FAQ JSON-LD Schema 模板规范**，标准化所有 FAQ 页面的 `mainEntity`  markup 格式
- 建立 **内部链接框架**，定义页面类型之间的链接权重、锚文本策略和自动化规则

## Capabilities

### New Capabilities

- `seo-keyword-strategy`: 100 关键词分层矩阵，按 A/B/C 漏斗阶段分类，附搜索量、KD、意图标注
- `content-calendar-30d`: 30 天可执行内容发布日历，包含任务优先级和交付物清单
- `core-page-outlines`: 4 篇核心页面的详细内容大纲（H2-H3 结构、关键词布局、内链锚点）
- `faq-schema-templates`: FAQ JSON-LD Schema 模板规范，含 `mainEntity` 必填字段和验证规则
- `internal-linking-framework`: 战略性内部链接框架，定义页面类型间链接权重和锚文本策略
- `url-structure-plan`: URL 站点架构规划，明确现有页面复用 vs 新建集群的决策方案

### Modified Capabilities

- `faq-traffic-layer`: 扩展 FAQ 页面规范，增加 Schema 模板引用和标准化 FAQ 问题格式
- `strategic-internal-linking`: 补充内链框架的权重规则和锚文本策略（非行为变更，仅增加设计约束）

## Impact

- **新增文档**：关键词矩阵表、30 天日历 Markdown、4 篇页面大纲 Markdown、Schema 模板 JSON、内链规则文档
- **现有页面**：4 篇核心页面（Calories / Nutrition / Ingredients / Price）需要按新大纲进行内容增强或重写
- **SEO 收益**：标准化 Schema 提升富媒体摘要获取率；系统化内链提升 PageRank 分配效率
- **依赖**：现有 Astro SSG 架构、已部署的 FAQ/教程/评测页面、`costco-content-funnel-monetization` 的三层漏斗基础设施
- **无破坏性变更**：全部为策略文档和内容增强，不涉及 URL 重定向或架构重构（URL 决策待确认）

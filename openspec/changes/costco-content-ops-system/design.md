## Context

当前 costcohotdogguide.com 已完成垂直媒体架构升级：68 个静态页面、CSV+Markdown 双轨内容管理、Astro SSG 构建、Cloudflare Pages 部署。站点变现架构包含 Adsterra Banner、Amazon Affiliate、ConvertKit Newsletter 和 GA4 分析。

站点当前面临的核心问题：内容更新缺乏系统规划，纯热狗主题 SEO 天花板有限，手工撰写效率低，无法形成持续流量增长闭环。

**约束条件：**
- 单人运营，时间有限
- 技术背景强，可利用自动化工具
- 预算有限，优先免费/低成本方案
- 广告变现依赖页面浏览量（PV），需要持续内容供给

## Goals / Non-Goals

**Goals：**
- 建立可执行的内容日历，明确首月铺量期和后续稳定期的发布节奏
- 横向扩展选题至整个 Costco 消费者生活指南，突破热狗主题天花板
- 搭建半自动化的内容生产管道，将单篇文章生产时间从 4-6 小时压缩至 1-2 小时
- 新增 3 个交互式工具页，提升用户粘性和自然外链获取能力
- 建立基于 GSC 数据的内容优化反馈闭环，每月定向优化 2 篇老文章

**Non-Goals：**
- 不开发完整 CMS 后端（保持 Astro SSG 静态架构）
- 不引入付费内容写作服务（保持低成本运营）
- 不改变现有广告变现架构和页面布局
- 不在首月引入 UGC 机制（需等流量基础建立后）

## Decisions

**1. 内容日历使用 Markdown + YAML frontmatter 管理**
- *决策*：在 `src/content/calendar/` 下用 Markdown 文件记录每期内容计划
- *理由*：与现有 Markdown 文章工作流一致，无需引入额外工具；frontmatter 可存储发布日期、状态、关键词等元数据；可用脚本批量读取生成待办清单
- *替代方案*：Notion/Airtable 管理 → 否决，增加工具依赖和上下文切换成本

**2. 数据聚合脚本使用 Node.js 编写，独立运行**
- *决策*：开发 `scripts/content-research.js` 脚本，调用 USDA API、Google Related Questions scraping、Reddit/Quora 抓取
- *理由*：与现有 Astro/Node.js 技术栈一致；脚本输出 Markdown 草稿到 `src/content/drafts/`，人工审校后发布
- *替代方案*：Python 脚本 → 否决，引入新语言增加维护成本

**3. 交互式计算器使用纯客户端 JavaScript（无后端）**
- *决策*：计算器工具页使用原生 JS 在浏览器端运行计算逻辑
- *理由*：Astro SSG 架构无后端；纯前端计算降低复杂度；可完全托管在 Cloudflare Pages
- *替代方案*：引入 serverless function → 否决，增加不必要的架构复杂度

**4. UGC 使用 Giscus（GitHub Discussions 驱动）**
- *决策*：集成 Giscus 评论区，基于 GitHub Discussions
- *理由*：完全免费；无需自建数据库；评论内容可被搜索引擎索引（SEO 增益）；与开发者身份契合
- *替代方案*：Disqus → 否决，有广告且可能影响页面性能；自建评论系统 → 否决，需要数据库

**5. GSC 数据分析使用手动脚本而非自动化**
- *决策*：开发 `scripts/analyze-gsc.js` 脚本读取导出的 GSC CSV 数据，输出优化建议报告
- *理由*：GSC API 需要 OAuth 认证和配额管理，手动导出 CSV 更简单；脚本分析 CSV 后即可输出可执行的优化清单
- *替代方案*：GSC API 自动化 → 否决，OAuth 配置复杂，且数据变化不快（周粒度即可）

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|---------|
| 数据聚合脚本可能违反 Reddit/Quora 的 ToS | 使用公开 API（PRAW）或限制抓取频率；将脚本标记为内部工具，不对外暴露 |
| AI 辅助生成的内容可能质量不稳定 | 脚本输出为"草稿"状态，必须经过人工事实核查和编辑后才能发布；设置质量标准清单 |
| 内容扩展可能稀释热狗主题的品牌聚焦 | 所有扩展内容必须与 Costco 强相关；导航结构保持热狗为核心，扩展内容作为子栏目 |
| 交互式工具页的开发和维护成本 | 首批只开发 3 个核心工具；工具逻辑尽量简单（公式计算为主），降低维护负担 |
| UGC 评论可能产生垃圾内容 | Giscus 支持 GitHub 内容审核；可设置关键词过滤；初期关闭评论直到有基础流量 |

## Migration Plan

**Phase 1（第 1-2 周）：基础设施**
1. 创建内容日历目录结构和首月计划
2. 开发 content-research.js 数据聚合脚本（USDA API + Google Questions）
3. 开发 GSC 分析脚本框架

**Phase 2（第 3-4 周）：内容铺量**
1. 使用生产管道产出 3 篇核心文章 + 5 篇评测
2. 上线首个交互式工具页（热量计算器）
3. 提交所有新 URL 到 GSC

**Phase 3（第 5-8 周）：稳定运营**
1. 每周发布 1 篇新内容
2. 每月运行 GSC 分析，优化 2 篇老文章
3. 根据流量数据决定是否引入 Giscus 评论区

**Rollback：** 所有变更均为新增内容/页面，不影响现有系统。如任何工具页表现不佳，可直接从导航中移除。

## Open Questions

1. USDA API 的数据覆盖范围是否足够支撑营养相关内容生产？（需在 Phase 1 验证）
2. Amazon Affiliate 链接在高客单价评测中的转化率预期是多少？（需 GA4 追踪验证）
3. 季节性导购清单的最佳发布时间窗口（需结合 Google Trends 数据确定）

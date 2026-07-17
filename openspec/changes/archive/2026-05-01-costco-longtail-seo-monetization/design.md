## Context

costcohotdogguide.com 当前有 68 个静态页面，覆盖 Costco Food Court 全品类菜单、数据可视化和联盟营销产品推荐。站点采用 Astro SSG + Cloudflare Pages 架构，已集成 Adsterra Banner 广告、Amazon Affiliate、ConvertKit Newsletter 和 GA4 分析。

**当前 SEO 困境：**
- 主词 "costco hot dog"（KD > 40, 10万+ 月搜索量）被 BBC、Wikipedia、Costco 官网霸屏
- 新站 Domain Authority 低，短期内无法竞争高 KD 主词
- 现有内容以信息型为主，缺乏低竞争长尾词覆盖

**当前变现困境：**
- 热狗周边产品（面包、芥末酱）客单价过低，Amazon Affiliate 单笔佣金仅 $0.05
- 站点月流量不足以支撑可观的 AdSense 收入
- 缺乏高客单价产品的内容载体和内部导流机制

**约束条件：**
- 单人运营，每周可投入 5-10 小时
- 预算有限，优先免费/低成本 SEO 工具
- 技术背景强，可开发自动化内容生产工具
- Google AdSense 审核中，需准备合规内容

## Goals / Non-Goals

**Goals：**
- 在 2-4 周内让 10-15 个 KD < 15 的 FAQ 长尾词页面进入 Google 首页
- 在 1-2 个月内让 3-5 个 KD 15-25 的教程/工具页进入首页前 5 位
- 新增 `/reviews/` 栏目，覆盖至少 8 个高客单价商品品类
- 将 Amazon Affiliate 平均佣金从 $0.05 提升至 $5-15/笔
- 通过内链策略将热狗页面的流量导向高价值 `/reviews/` 和教程页
- 6-12 个月内将站点月收入从 $80-$350 提升至 $680-$2000

**Non-Goals：**
- 不追逐 KD > 30 的高竞争主词（资源有限，ROI 低）
- 不引入付费外链或黑帽 SEO 手段
- 不改变现有 68 个页面的 URL 结构和核心内容
- 不开发后端数据库或用户系统（保持静态站点架构）
- 不在首月引入复杂的交互式工具（优先快速产出文字内容获取流量）

## Decisions

**1. FAQ 页面使用统一模板 + 批量 Markdown 生成**
- *决策*：所有 FAQ 页面使用相同的 Astro 模板 `src/layouts/FAQLayout.astro`，内容通过 Markdown frontmatter 驱动
- *理由*：统一模板确保一致的 Schema 标记（FAQPage JSON-LD）、内链布局和广告位；批量生成可在 1 天内产出 10-15 个页面
- *替代方案*：每个 FAQ 手写独立页面 → 否决，效率太低，无法快速铺量

**2. `/reviews/` 使用独立路由和专用布局**
- *决策*：评测文章放在 `src/pages/reviews/[category]/[slug].astro`，使用 `ReviewLayout.astro` 模板
- *理由*：独立路由便于 GA4 单独追踪评测页流量和转化率；专用布局支持对比表格、Amazon 购买按钮、评分组件等评测专属元素
- *替代方案*：评测混在 `/articles/` 中 → 否决，无法单独追踪变现数据

**3. 高客单价 Affiliate 产品单独配置在 `affiliate-high-ticket.json`**
- *决策*：新建 `src/data/affiliate-high-ticket.json` 存储高客单价商品（$50+），与现有 `affiliate.json` 中的低客单价商品分离
- *理由*：便于 A/B 测试不同价格带产品的转化率；支持在热狗页面智能展示高客单价推荐（而非低佣金的调料）
- *替代方案*：直接修改现有 affiliate.json → 否决，需要保留原有低客单价产品的场景化推荐逻辑

**4. 交互式工具页使用纯客户端 JS + 静态数据**
- *决策*：热量计算器等工具使用浏览器端 JS 计算，数据来自构建时嵌入的 JSON
- *理由*：无需后端，可完全托管在 Cloudflare Pages；Google 可索引工具页周围的文字内容
- *替代方案*：引入 serverless function 动态计算 → 否决，增加不必要的复杂度和成本

**5. 现有页面自动内链使用脚本批量注入**
- *决策*：开发 `scripts/inject-internal-links.js` 读取内容索引，在相关页面自动插入指向 `/reviews/` 和教程页的战略性链接
- *理由*：手动在 68 个页面中添加内链工作量太大；脚本可基于关键词匹配自动推荐最合适的内链目标
- *替代方案*：手动逐页添加 → 否决，效率低且容易遗漏

**6. FAQ 内容优先覆盖饮食限制和成分查询**
- *决策*：首批 FAQ 聚焦 "dairy free"、"kosher"、"gluten free"、"pork"、"calories" 等饮食相关长尾词
- *理由*：这类词 KD 最低（5-12），用户意图明确（信息查询），最容易快速排名；且天然适合 FAQ Schema 获取富媒体摘要
- *替代方案*：覆盖价格比较类长尾词 → 否决，价格类内容变化快，维护成本高

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|---------|
| 批量生成的 FAQ 页面可能被 Google 判定为 thin content | 每个 FAQ 页至少 500 字，包含详细解释、相关上下文和至少 2 个内链；添加 FAQPage Schema |
| 高客单价评测缺乏真实使用体验 | 聚焦 Costco 自有产品（Kirkland）和店内可见商品，结合公开评测数据；明确标注 "基于公开信息整理" |
| Amazon Affiliate 链接过多影响用户体验和 AdSense 审核 | 每页最多 3 个 affiliate 链接；使用明确的 "Buy on Amazon" CTA 按钮而非内嵌文本链接 |
| 内链脚本可能添加不相关的链接 | 设置相关性阈值（关键词匹配度 > 0.6），人工审核首批内链结果后再批量应用 |
| 品牌定位升级可能稀释原有热狗主题 SEO 权重 | 保留热狗相关内容的核心地位；扩展内容通过子目录（/reviews/、/tutorials/）隔离，主域名仍聚焦热狗 |

## Migration Plan

**Phase 1（第 1 周）：基础设施 + FAQ 铺量**
1. 创建 FAQ 统一模板和 3 个首批 FAQ 页面（dairy free、kosher、pork）
2. 创建 `/reviews/` 目录结构和评测模板
3. 创建 `affiliate-high-ticket.json` 并填充 8 个高客单价商品
4. 开发内链注入脚本并测试

**Phase 2（第 2-3 周）：内容扩展**
1. 批量产出 10-12 个 FAQ 页面覆盖核心饮食长尾词
2. 发布 3-5 篇高客单价评测（空气炸锅、厨房秤、保健品）
3. 发布 2-3 篇实操教程（空气炸锅热狗、营养成分查询）
4. 在现有热狗页面注入指向新内容的内链

**Phase 3（第 4-6 周）：优化与变现**
1. 上线热量计算器工具页
2. 监控 GSC 数据，对已进入前 20 位的页面进行内容扩展
3. 优化 Amazon Affiliate CTA 位置和文案，提升点击率
4. 根据 GA4 数据调整内链策略，将流量最高效地导向高转化页面

**Rollback：** 所有变更均为新增页面/内容。如 FAQ 页面效果不佳，可直接从导航中移除。如 `/reviews/` 栏目表现差，可暂停新增评测。

## Open Questions

1. Google AdSense 审核通过后，食品类内容的实际 CPM 是多少？（影响收入预测准确性）
2. 空气炸锅等厨房电器的 Amazon Affiliate 转化率预期是多少？（需 GA4 事件追踪验证）
3. FAQ 页面批量产出后，Google 是否会给予 "People Also Ask" 位置？（需观察 2-4 周）

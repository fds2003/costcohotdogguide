## Context

`costcohotdogguide.com` 当前是一个以热狗为核心的 39 页静态站点，基于 Astro SSG + Tailwind CSS v4 构建。已有基础设施包括：AdUnit 广告组件、RelatedProducts 联盟组件、SEO 组件（JSON-LD Schema）、NewsletterSignup 组件、Gumroad 数字产品销售页。

本次变更的目标是将站点从"热狗指南"升级为"Costco 餐饮情报局"，覆盖 Food Court 全品类内容，建立 Google 搜索权威。

## Goals / Non-Goals

**Goals:**
- 建立覆盖 Costco Food Court 全菜单的内容矩阵（热狗、披萨、烤鸡、冰淇淋、新菜单动态）
- 创建 3 个数据可视化页面（价格地图、营养对比、排队预测）以获取外链和停留时长
- 将 Affiliate 推荐从通用厨房/户外升级为场景化餐饮周边
- 建立基于 CSV/Markdown 的批量内容管理机制
- 保持构建为纯静态输出，零运行时依赖

**Non-Goals:**
- 不引入 CMS（WordPress/Strapi 等）——保持 Astro SSG 的简洁性
- 不添加用户登录/评论系统——降低复杂度
- 不更改现有热狗相关页面的 URL 结构——保持 SEO 资产
- 不引入后端 API 服务——排队预测数据通过静态 JSON 预生成

## Decisions

### 1. 内容数据管理：CSV + Markdown 双轨制
- **选择**：新建 `src/content/` 目录，用 CSV 管理结构化数据（菜单单品、价格、营养成分），用 Markdown 管理长文内容
- **理由**：CSV 适合表格型数据批量编辑，Markdown 适合长文写作；两者都可被 Astro 的 `getStaticPaths` 和 `import` 读取
- **替代方案**：YAML/JSON 前端事务数据——YAML 对非技术人员不友好，JSON 不支持多行文本

### 2. 数据可视化：静态 SVG + 轻量交互
- **选择**：价格地图和营养对比图使用预生成的 SVG（Astro 构建时渲染），排队预测使用纯客户端 JS（无框架）
- **理由**：保持零运行时依赖，SVG 文件可被 Google 图片搜索索引；轻量 JS 不增加 bundle 体积
- **替代方案**：D3.js/Chart.js——引入大体积依赖，与 Astro 静态理念冲突

### 3. 内容页面路由结构
- **选择**：`/menu/<item-slug>/` 作为单品页面，`/data/<dataset-slug>/` 作为数据可视化页面
- **理由**：清晰的 URL 层级，`/menu/` 暗示 Food Court 菜单，`/data/` 暗示数据内容
- **替代方案**：`/reviews/<item>/`——与现有产品评测页面冲突，不利于内容区分

### 4. Affiliate 场景化：基于内容类型的动态推荐
- **选择**：在 `affiliate.json` 中新增 `scenarios` 字段，按内容场景（home-cooking、picnic、storage、bulk-buy）分组推荐
- **理由**：保持现有 `RelatedProducts` 组件架构不变，通过数据层扩展实现场景化
- **替代方案**：新建组件——过度工程化，现有组件已支持 category 过滤

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|----------|
| 内容扩张导致构建时间显著增加 | 使用 `getStaticPaths` 批量生成，监控构建时长；如超过 30s 考虑分页 |
| 数据可视化页面缺少交互性导致跳出率高 | SVG 支持基础 hover tooltip；排队预测页面加入简单交互 |
| 新页面初期无流量，影响整体站点权重 | 通过内部链接（导航、面包屑、相关文章）传递权重；从热狗高流量页面向新页面导流 |
| CSV 数据格式错误导致构建失败 | 添加 JSON Schema 验证脚本在构建前运行 |
| 过多广告位影响品牌体验 | 沿用现有广告三级布局原则，新页面每页最多 2 个广告位 |

## Migration Plan

1. **Phase 1**：创建内容数据层（`src/content/` CSV + Markdown）
2. **Phase 2**：创建单品页面模板和数据可视化页面
3. **Phase 3**：更新导航和内部链接结构
4. **Phase 4**：扩展 Affiliate 场景化数据
5. **Phase 5**：构建验证、sitemap 更新、部署

## Open Questions

- 排队预测数据是静态模拟数据还是计划未来接入真实数据源？
- 价格地图覆盖全美 50 州还是主要城市？数据维护频率？

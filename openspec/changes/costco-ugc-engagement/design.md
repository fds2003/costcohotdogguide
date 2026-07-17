## Context

costcohotdogguide.com 是一个 Astro SSG 静态站点，部署在 Cloudflare Pages 上，当前 118 个页面，无后端服务。站点已完成三层漏斗（FAQ→教程→评测）基础设施搭建，但缺少用户互动组件。站点变现依赖 Adsterra 广告 + Amazon Affiliate，页面停留时间和跳出率直接影响广告收入。

**约束条件：**
- Astro SSG 架构无后端，所有交互必须是纯客户端
- 单人运营，评论区需要零审核成本
- 月流量 < 1,000 sessions，不适合立即开放评论区
- 广告变现架构不能被 UGC 组件影响（CLS、LCP）

## Goals / Non-Goals

**Goals：**
- 搭建 feature flag 控制的 Giscus 评论区框架，默认关闭，待流量达标一键开启
- 开发轻量级 VotePoll 投票组件，提升用户参与度和页面停留时间
- 建立功能开关配置文件，为后续功能（如用户评分、收藏）预留扩展点
- 不引入任何后端服务或数据库

**Non-Goals：**
- 不自建评论系统或数据库
- 不开发用户注册/登录功能
- 不做 A/B 测试框架（VotePoll 结果仅本地展示）
- 不引入付费第三方评论服务（如 Disqus、Commento）
- 不在本变更中开发其他 UGC 形式（用户投稿、评分等）

## Decisions

**1. Giscus 选型（基于 GitHub Discussions）**
- *决策*：使用 Giscus 作为评论系统，基于 GitHub Discussions
- *理由*：完全免费；无需自建数据库；评论内容可被 Google 索引（SEO 正向）；与开发者身份契合；支持 GitHub 内容审核
- *替代方案*：Disqus → 否决（有广告、影响性能、隐私问题）；Utterances → 否决（只支持 Issues 不支持回复线程）；自建 → 否决（需要数据库和后端）

**2. Feature Flag 使用 JSON 配置文件**
- *决策*：创建 `src/data/features.json` 管理所有功能开关
- *理由*：与现有 Astro 数据文件模式一致（如 affiliate.json、related-content.json）；Astro 构建时可读取；无需环境变量或远程配置
- *替代方案*：环境变量 → 否决（需要重新构建才能切换）；远程配置 → 否决（增加复杂度）

**3. VotePoll 使用 localStorage 而非后端**
- *决策*：投票数据存储在 localStorage，每个浏览器只能投一次
- *理由*：无后端架构；简单实现；防止重复投票；结果在当前浏览器实时展示
- *替代方案*：后端投票 → 否决（需要 API）；Cookie → 否决（容量限制，用户可清除）

**4. 评论区默认关闭**
- *决策*：`commentsEnabled` 默认 `false`，在 GA4 月流量达到 1,000 sessions 后手动切换
- *理由*：低流量时评论区空白影响品牌形象；需要先建立基础流量再开启互动；Giscus 配置需要在 GitHub 仓库中启用 Discussions 功能
- *替代方案*：立即开启 → 否决（空评论区降低信任度）

**5. Giscus 组件使用 `<script>` 标签加载**
- *决策*：通过 Astro 组件输出 Giscus 的 `<script>` 标签，使用 `data-` 属性传递配置
- *理由*：Giscus 官方推荐方式；支持 SSG 页面；无需 React/Vue wrapper
- *替代方案*：@giscus/react → 否决（增加 React 运行时依赖）

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|---------|
| Giscus CDN 加载影响 LCP | 评论区在页面底部，使用 `defer` 加载；CLS 为 0（评论区有固定高度占位） |
| 评论区可能产生垃圾内容 | Giscus 基于 GitHub 认证，需 GitHub 账号才能评论；可设置关键词过滤；默认关闭 |
| VotePoll localStorage 数据不跨设备 | 明确标注"投票结果来自本浏览器"；不显示全局统计数据避免误导 |
| Feature flag 切换需重新构建部署 | Astro SSG 本来就需要重新构建；Cloudflare Pages 自动部署耗时 < 2 分钟 |
| Giscus 需要 GitHub 仓库配置 | 在 README 中记录仓库配置步骤；只需一次性设置 |

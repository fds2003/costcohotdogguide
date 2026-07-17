## Why

costcohotdogguide.com 已完成三层漏斗基础设施（FAQ / 教程 / 评测）和 118 个静态页面上线，但站点完全缺少用户互动机制。纯静态内容无法产生用户生成内容（UGC），而 UGC 是补充长尾关键词内容、提升页面停留时间和降低跳出率的关键手段。当前月流量尚未达到 1,000 sessions，不适合立即开放评论区，但需要提前搭建 feature flag 控制的互动组件框架，待流量达标后一键开启。

## What Changes

- 集成 **Giscus 评论区**（基于 GitHub Discussions），通过 feature flag 控制开关，默认 `commentsEnabled: false`
- 开发 **VotePoll 投票组件**（`<VotePoll>`），使用 localStorage 持久化投票数据，实时展示投票百分比
- 创建 **features.json** 功能开关配置文件，作为 UGC 和后续功能的总控
- 在 `/articles/` 和 `/menu/` 页面注入 Giscus 评论区（受 feature flag 控制）
- 在至少 2 篇现有文章中嵌入投票组件（如"What's your favorite Food Court item?"）

## Capabilities

### New Capabilities

- `giscus-comments`: Giscus 评论区集成，基于 GitHub Discussions，支持 feature flag 控制开关，默认关闭，待月流量达到 1,000 sessions 后启用
- `vote-poll`: 用户投票组件，使用 localStorage 持久化投票选择，实时百分比结果展示，可嵌入任意文章页面
- `feature-flags`: 功能开关配置系统，`src/data/features.json` 管理所有功能开关（commentsEnabled 等），组件根据开关条件渲染

### Modified Capabilities

## Impact

- **新增文件**：`src/data/features.json`、`src/components/GiscusComments.astro`、`src/components/VotePoll.astro`
- **修改页面**：`/articles/` 和 `/menu/` 相关页面需注入 Giscus 组件；2+ 文章页需嵌入 VotePoll
- **外部依赖**：Giscus 脚本（从 giscus.app CDN 加载）、GitHub Discussions 仓库配置
- **现有系统**：不影响广告变现架构、导航结构或页面 URL
- **SEO 影响**：Giscus 评论区内容可被搜索引擎索引（SEO 正向）；VotePoll 为纯客户端渲染，不产生可索引内容

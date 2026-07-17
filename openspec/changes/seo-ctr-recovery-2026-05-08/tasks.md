# Tasks: seo-ctr-recovery-2026-05-08（本周执行版）

> 来源：`doc/costcohotdogguide.com SEO优化需求文档.md` + `doc/costcohotdogguide.com-SEO-solution-v4-final.md` + 2026-05-08 GSC 导出  
> 页面改动落地目录：**`src/`**（本站 Astro 仓库）。OpenSpec 文档位于仓库上层工作区，与 `src` 分离时请分别提交。

## 代码落地快照（与 `src/` 仓库同步）

| 范围 | 状态 |
|------|------|
| P0 `/hot-dog/calories/` TD + 2024–2026 对比块 | 已合并 |
| P0 `/tools/price-history/` TD + 首屏工具定位 | 已合并 |
| P1 `/guide/` Hub 区块（卡片区 + 价格预览 + FAQ 预览） | 已合并 |
| P1 `/hot-dog/faq/` 首行直答 + `faqData` / FAQPage（保留但非 CTR 杠杆） | 已合并 |
| v4 补充 `/guide/`、`/hot-dog/price/` TD（与叙事/工具分工一致） | 已合并 |
| P1-B2 `/guide/` 深度增强（TOC + 竞品对比 + 扩展 FAQ + 来源方法） | 已合并（`e173b82`） |
| P1-B2 `calories`/`nutrition` 意图分工重构（精确答案页 vs 总览页） | 已合并（`e173b82`） |

## 执行准则（v2）

- [ ] CTR 优先：先解决“有展示无点击”，再做扩张型工作。
- [ ] 不粗暴合并营养页面：保留 `calories`、`sodium`、`carbs` 等长尾入口，使用集群协作而非一页吞并。
- [ ] 程序化页面可持续优化：`/tools/price-history/` 继续强化工具价值，不因“程序化”标签被降级。
- [ ] EEAT 必须可见：逐步补作者信息、来源引用、更新痕迹与原创证据。
- [ ] 本轮保持“不新增页面”：`/guide/` 先承担 hub 职责，新页面决策在本轮复盘后再评估。
- [ ] 301 重定向需证据：只有在 GSC 显示稳定冲突且优化无效时才执行 301。
- [ ] 延后主题扩张：先稳定 hot-dog 集群，再扩展到其他 food court 主题。
- [ ] 批次发布与归因：每批发布后观察 5-7 天，再进入下一批（紧急修复除外）。

## 0. 本周目标（只做 P0 + P1 先导）

- [x] 本周完成 P0 全量：`/hot-dog/calories/`、`/tools/price-history/` 元标签和关键内容更新
- [x] 启动并完成 P1 先导：`/guide/` Hub 骨架与 `/hot-dog/faq/` 直答结构
- [x] 建立 KPI 基线与变更日志（`doc/seo-ops/baseline-week-2026-05-08.md`、`doc/seo-ops/change-log-template.md`）
- [ ] 形成首周 KPI 复盘（Day 7）

## 1. 每天执行清单（按顺序）

### Day 1（数据与基线）

- [x] 导出并固化基线（URL/查询词/设备：展示、点击、CTR、排名）
- [x] 确认本周改动 URL 列表与负责人
- [x] 建立变更日志模板（字段：URL、改动类型、发布时间、预期观察窗口）

**验收标准**
- [x] 有一份可追溯基线表（至少覆盖 5 个目标 URL）
- [x] 目标 URL 与本周改动范围冻结，不临时扩项

### Day 2（P0-1：calories）

- [x] 更新 `/hot-dog/calories/` 的 Title/Description（覆盖 2026 年份词和比较价值）
- [x] 新增“2024-2026 对比”段落（首屏后可见）
- [x] 新增或更新对比表（热量、脂肪、钠；与正文口径一致）

**验收标准**
- [x] 页面仅有 1 个 H1，元标签与正文数字无冲突
- [ ] 移动端首屏可读，不出现明显标题截断误导

### Day 3（P0-2：price-history 工具页）

- [x] 更新 `/tools/price-history/` 的 Title/Description（突出 interactive chart 和时间跨度）
- [x] 补一句明确工具价值的首屏说明（用户无需滚动即可理解用途）
- [x] 校对与 `/hot-dog/price-history/` 的定位，避免文案同质化

**验收标准**
- [x] 工具页 SERP 文案和叙事页文案可区分
- [x] 页面 value proposition 在首屏 3 秒内可理解

### Day 4（发布与重抓取）

- [ ] 发布 Day2-Day3 的改动
- [x] 对 `/hot-dog/calories/`、`/tools/price-history/` 提交 GSC 请求编入索引
- [x] 在变更日志记录提交时间与观察窗口（建议 5-7 天）
- [x] 本地构建 smoke 检查通过（`npm run build`）

**验收标准**
- [x] 两个 URL 均完成重抓取提交并留痕
- [ ] 发布后无明显渲染错误、无结构破坏

### Day 5（P1 先导：guide Hub）

- [x] `/guide/` 增加核心信息卡（Price/Calories/Ingredients）
- [x] 增加价格历史预览入口（指向 `/tools/price-history/`）
- [x] 增加 FAQ 直答预览区（至少 5 个问题，附“了解更多”到 `/hot-dog/faq/`）
- [x] v4：重写 `/guide/` Title/Description（Ultimate Guide 方向，`modifiedAt` 2026-05-08）

**验收标准**
- [x] `/guide/` 到关键详情页路径清晰
- [x] 所有新增链接可访问且锚文本语义清楚

### Day 5b（v4 补充：`/hot-dog/price/` TD）

- [x] 重写 `/hot-dog/price/` Title/Description（强调历史/地区/通胀；description 引导至 `/tools/price-history/` 交互图，避免与工具页主标题同质化）
- [x] 设置 `modifiedAt="2026-05-08"`

### Day 6（P1 先导：faq 结构）

- [x] `/hot-dog/faq/` 调整为“首行直答 + 二段解释”
- [x] 覆盖核心问题：kosher、sodium、bun dairy、cooking、ingredients source
- [x] FAQPage JSON-LD 随 `faqData` 输出（与可见答案文本一致，HTML 已剥离；仅保留，不作为 Google CTR 优化项）

**验收标准**
- [x] 每个 FAQ 首句可独立回答问题
- [x] 问题覆盖与 GSC 高频查询一致

### Day 6b（P1-B2：内容深度与意图分工）

- [x] `/guide/` 增加深度模块：TOC、竞品对比表、扩展 FAQ、来源与方法说明
- [x] `/hot-dog/calories/` 收敛为“精确热量答案页”（with/without bun + drink FAQ + 关联 nutrition 摘要）
- [x] `/hot-dog/nutrition/` 强化为“完整营养画像页”（snapshot 表、macro/sodium/cholesterol 语境、到 calories 明确引导）
- [x] 本批次代码提交并推送到 `main`：`e173b82`

**验收标准**
- [x] `calories` 与 `nutrition` 的标题/段落主意图不再重叠（互链但不互抄）
- [x] 三个页面本地构建通过（`npm run build`）

### Day 7（周复盘与下周计划）

- [ ] 更新 KPI 周报（全站 + 目标 URL + 目标查询 + 设备）
- [ ] 输出复盘结论：有效动作 / 无效动作 / 风险点 / 下周动作
- [ ] 冻结下周实施顺序（`/hot-dog/price/` -> TDH -> Schema）
- [ ] 使用单页模板填写并归档：`doc/seo-ops/week-review-day7-template.md`（复制为 `week-review-<周期>.md`）

**验收标准**
- [ ] 有一份单页复盘（可被复用；模板见上）
- [ ] 下周计划与负责人明确，避免任务漂移

## 2. 本周完成定义（Definition of Done）

- [ ] P0/P1 相关改动 **生产环境已部署** 并对优先 URL 完成 GSC 重抓取（代码已在 `src/` 合并）
- [x] P0/P1/B2 代码已推送远端 `main`（`e173b82`），待平台部署状态确认
- [x] KPI 基线与变更日志模板已就绪，可按 URL / 查询词追踪
- [x] `guide` 与 `hot-dog/faq` 先导结构已完成（后续可继续加厚正文）
- [x] 本地 `npm run build` 通过；待上线后确认无渲染回归

## 3. 下周预置（P1/P2 延续）

- [ ] `/hot-dog/price/` **正文**深度升级（历史区块、对比、通胀分析）；TD 已与 v4 对齐
- [ ] 核心页 H1-H3 规范化与内链孤岛修复
- [ ] Nutrition / Dataset 等 Schema 抽检（`/hot-dog/faq/` FAQPage 已保留输出，但不计入 CTR 目标）

## 4. OpenSpec 验证与收尾

- [x] 运行 `openspec validate --changes seo-ctr-recovery-2026-05-08`
- [ ] 修复校验问题后发起评审（若 CI/流程有要求）
- [ ] 变更完成并验证后按流程 archive

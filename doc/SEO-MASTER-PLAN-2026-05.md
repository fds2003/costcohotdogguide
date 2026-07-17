# costcohotdogguide.com 综合 SEO 执行方案（Master Plan）

**版本:** 1.0  
**日期:** 2026-05-05  
**站点:** https://costcohotdogguide.com  
**依据:** GSC 类访问数据、站点结构（`SITE-FRAMEWORK-CONTENT-DIRECTORY.md`）、多份内部方案（Claude / v1–v2 / MD 版 / DeepSeek 节选）对比综合  
**OpenSpec 变更:** [`seo-master-plan-2026-05`](../openspec/changes/seo-master-plan-2026-05/)（`proposal.md` / `design.md` / `tasks.md` / `specs/`，可执行 `openspec validate seo-master-plan-2026-05 --type change`）

---

## 1. 文档来源与取舍说明

| 来源 | 采用 | 不采用或需修正 |
|------|------|-----------------|
| `costco_seo_plan_claude.md` | 逐页 GSC 信号、2026 套餐变化窗口、店內移动首屏、HTTP/HTTPS、工具页差异化 | 文内营养数字需与全站正文统一后使用 |
| `SEO 优化执行方案（基于数据诊断）.md` / v2.0 / v1.0 | 阶段化清单：TD → TDH → 内链 → Schema → 薄页加厚 | **路径**：「交互价格史」应以 **`/tools/price-history/`** 为主战场；叙事页为 **`/hot-dog/price-history/`**。v2 文末 Gantt 代码块格式有误，本文件不照搬 |
| `SEO 优化执行方案（MD 版）.md` | 3 日速效清单精神 | 「全站无 Schema」与工程现状不符：已有 `SEO.astro` 与结构化数据，改为「查漏补缺」 |
| DeepSeek 节选 | 仅作附录参考 | 信息不完整，不单列为执行依据 |
| Performance xlsx（若后续上传） | 建议用于校准查询–页面矩阵 | 入库后以表格为准更新 §5 优先 URL 清单 |

---

## 2. 核心诊断（共识）

1. **信息架构 / Silo 合理**，当前主要矛盾是 **CTR 与承接**，而非缺栏目。  
2. 新站 **评估窗口期** 内，**高展示、低点击** 的 **Title / Description 改写** ROI 最高。  
3. **工具与数据页**（价格史图表、营养计算器、数据看板）是差异化与外链的**最佳锚点**。  
4. **`/guide/`** 高展示、低点击：宜先做 **导航枢纽 + 强摘要 TD**，长文深化的节奏见 §4.2。  
5. **内链不足** 会导致大量 URL 成为爬取/权重上的「孤岛」。

---

## 3. 执行优先级总览

| 阶段 | 时间 | 重点 |
|------|------|------|
| P0 | 24–72h | TD rewrite、2026 套餐相关更新、HTTPS/规范 URL、关键数字一致、GSC 请求收录 |
| P1 | 第 1–2 周 | H1–H3、集群内链、移动首屏核心答案 |
| P2 | 第 2–3 周 | Schema 验证与补全、/guide/ 深化与薄页加厚 |
| P3 | 持续 | GSC 周更、自然外链（工具向） |

---

## 4. P0：24–72 小时内必须完成

### 4.1 Title / Meta Description（按 GSC「查询数」「网页」排序动态调整）

**优先 URL（若数据变化则以 GSC 为准替换）：**

- `/guide/` — 摘要中体现：营养数字、价格史、成分、**2026 套餐选项（若仍适用）**、更新频率。  
- `/hot-dog/calories/` — 标题含 **2026**、**含面包/不含面包热量** 等可验证数字。  
- **`/tools/price-history/`** — 强调 **Interactive chart**、时间跨度、$1.50 叙事；勿仅改 `/hot-dog/price-history/`。  
- `/hot-dog/sodium/` — 标题/描述含 **具体钠含量 mg + 占每日比例**。  
- `/hot-dog/price/` — 与价格工具页叙事互补，并承接时效段落。  
- 其余高展示 URL：`/menu/`、`/hot-dog/nutrition/` 等按需类推。

### 4.2 2026 热狗套餐变化（水 / 苏打）

- 更新 **`/menu/new/`**、**`/hot-dog/price/`**、**`/tools/price-history/`**（及必要时 **`/hot-dog/calories/`**）：说明变化性质（选项扩展 vs 涨价）、对热量的影响。  
- 若搜索仍有利基且内容可独立成篇，再新增 **`/hot-dog/water-option/`**（可选）。

### 4.3 技术与一致性

- **全站 301：HTTP → HTTPS**；内链、canonical、sitemap 一致使用 `https://costcohotdogguide.com`。  
- **全站统一关键营养数字**（热量、钠等），与正文、表格、TD 一致。  
- 改版后对上述重点 URL 在 GSC **请求编入索引**。

---

## 5. P1：第 1–2 周

### 5.1 TDH（Title / Description / Headings）

- 每页 **唯一 H1**，与 title 主题一致。  
- **H2/H3** 覆盖 GSC 中出现的**长尾问句**（如 bun ingredients、cholesterol 等），便于摘录与理解。

### 5.2 内链（孤岛拯救）

- 从 **`/`** 与 **`/guide/`** 系统指向：calories、price、**`/tools/price-history/`**、ingredients、FAQ、核心 `/hot-dog/*`。  
- 集群内互链：calories ↔ sodium / carbs / protein；price ↔ price-history / why-so-cheap；ingredients ↔ allergens / beef-or-pork / faq。

### 5.3 移动首屏

- 对 calories、sodium、price 等：**首屏 3 秒内**给出核心数字与一句结论，再展开深度段落。

---

## 6. P2：第 2–3 周

### 6.1 结构化数据（在现有 `SEO.astro` 上查漏补缺）

- FAQ 类：FAQPage（与页面类型一致）。  
- `/cooking/recipe/`：Recipe（字段完整）。  
- 工具页：WebApplication 等（按 Rich Results 指南）。  
- 评测页：**遵守** Google 对 Review 摘要的规则（避免无效顶层 Review；可与当前 Article 策略一致）。  
- 使用 [Rich Results Test](https://search.google.com/test/rich-results) 抽检。

### 6.2 `/guide/` 与薄页

- **先做**：分区导航、TOC、指向各集群代表 URL。  
- **CTR 有起色后**再强化 **1500+ 字** 深度与外部引用，避免「无流量真空写长文」。  
- **`/ingredients/`、`/hot-dog/ingredients/`**：成分清单与术语解释，并内链至相关 FAQ。

---

## 7. P3：持续执行

- **每周 GSC**：总展示、总点击、CTR；按 **URL** 与 **查询** 各圈定下一批 TD 优化。  
- **外链**：优先推送 **工具页、数据页**；社区（如 Reddit）以「工具/数据有用」角度分享，减少硬广感。  
- 可选：TAAFT 等导航站提交（与既有心得一致）。

---

## 8. 成功标准（建议 4 周为一复盘周期）

| 指标 | 方向性目标（需按实际上线日对齐基线） |
|------|--------------------------------------|
| 整体 CTR | 较基线明显提升（例如向 **2%+** 区间靠拢，以 GSC 为准） |
| 点击次数 | 月度环比上升 |
| 首位/前十 URL 数 | 逐步增加 |
| 核心 URL 排名 | 如 `/hot-dog/calories/` 等有展示的主力页，排名区间上移 |

---

## 9. P0 执行清单（可勾选）

- [x] `/guide/` TD 已优化（含具体卖点与年份/更新信号）  
- [x] `/hot-dog/calories/` TD 已优化（2026 + 含/不含面包数字）  
- [x] **`/tools/price-history/`** TD 已优化 + 页内 2026 说明模块  
- [x] `/hot-dog/sodium/` TD 已优化（数字 + 每日占比）  
- [x] `/menu/new/`、`/hot-dog/price/` 已更新套餐相关段落  
- [ ] HTTP→HTTPS、内链无裸 `http://`（代码库无裸内链；**生产主机「始终 HTTPS」待你确认**）  
- [x] 关键营养数字全站一致（`guide` 与 `/hot-dog/sodium/` 钠口径对齐）  
- [ ] GSC 已对优先 URL 请求收录（**部署后操作**）  

---

## 10. 修订记录

| 日期 | 变更 |
|------|------|
| 2026-05-05 | 初版：合并内部多方案并修正路径与 Schema 表述 |
| 2026-05-05 | 建立 OpenSpec 变更 `seo-master-plan-2026-05`，与本 Master Plan 双向引用 |

---

*本文档随 GSC 数据与站内改版迭代更新。*

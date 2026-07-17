# Tasks: seo-master-plan-2026-05

> 来源：`doc/SEO-MASTER-PLAN-2026-05.md`（P0–P3 对齐）

## 1. P0 — SERP 元数据（72h）

- [x] 1.1 按 GSC 更新 `/guide/` 的 `title` 与 `description`（具体数字、2026、更新信号、套餐选项若可核实）
- [x] 1.2 更新 `/hot-dog/calories/` TD：含 `2026`、含/不含面包可验证热量
- [x] 1.3 更新 **`/tools/price-history/`** TD：强调 interactive chart、时间跨度、$1.50；页内增加「非涨价类变更」等 2026 说明段（与 Master Plan 一致）
- [x] 1.4 更新 `/hot-dog/price-history/` TD（叙事定位，与工具页互补不重复）
- [x] 1.5 更新 `/hot-dog/sodium/` TD：钠 mg + 占每日摄入比例
- [x] 1.6 更新 `/hot-dog/price/` TD 与首段时效内容
- [x] 1.7 更新 `/menu/new/`、`/hot-dog/price/`、`/tools/price-history/` 关于套餐选项（水/饮）的说明（需事实核对）
- [ ] 1.8 可选：新建 `/hot-dog/water-option.astro`（仅当 GSC/搜索仍有明确需求时）

## 2. P0 — 技术与数据一致

- [ ] 2.1 确认生产环境 **HTTP → HTTPS 301**；全站无裸 `http://` 内链（代码库内无 `http://` 内链；**需在主机/Cloudflare 确认「始终 HTTPS」**）
- [x] 2.2 审计 `Navigation.astro` / `Footer.astro` / 正文：外链与 canonical 使用 `https://costcohotdogguide.com`（`guide` 内链已改为规范路径，见下）
- [x] 2.3 统一热量、钠等展示数字与 `src/src/content` 及正文表格一致（`guide` 表内钠与 `/hot-dog/sodium/` 对齐为 ~1,700mg）
- [ ] 2.4 改版后对 §1 中优先 URL 在 GSC **请求编入索引**（**待部署后人工操作**）

## 3. P1 — TDH 与内链（第 1–2 周）

- [ ] 3.1 核心页（calories、nutrition、ingredients、faq、sodium、price、carbs）唯一 **H1**，并与 title 主题对齐
- [ ] 3.2 为 `/hot-dog/calories/`、`/ingredients/`、`/hot-dog/sodium/` 增加覆盖 GSC 长尾的 **H2/H3**（bun ingredients、cholesterol、kosher 等指向对应 FAQ/集群页）
- [x] 3.3 **`/`** 与 **`/guide/`**：分区链接至 `/hot-dog/calories/`、`/tools/price-history/`、`/ingredients/`、`/faq/`、`/hot-dog/price/` 等（**首页 TD 已加强**；**guide 已加 Jump 导航块**；`index` 模块链待后续与 P1 统一）
- [ ] 3.4 集群互链：calories ↔ sodium/carbs/protein；price ↔ `/tools/price-history/`、`/hot-dog/why-so-cheap/`；ingredients ↔ allergens、beef-or-pork、相关 faq

## 4. P1 — 移动首屏

- [x] 4.1 `/hot-dog/calories/`、`/hot-dog/sodium/`、`/hot-dog/price/`：首屏（无需滚动）展示核心数字 + 一句结论（已加统计卡 / 提示条）

## 5. P2 — Schema 与深化（第 2–3 周）

- [ ] 5.1 对 FAQ、recipe、cooking、tutorials、tools 中选代表 URL 运行 **Rich Results Test**，修复报错项
- [ ] 5.2 按需补 **FAQPage** / **Recipe** / **WebApplication** JSON-LD（在 `SEO.astro` 或页面级）
- [ ] 5.3 `/guide/`：导航/TOC 模块到位后，再按需扩展正文至 Master Plan 字数建议

## 6. P3 — 监测与外链（持续）

- [ ] 6.1 建立每周一次 GSC 导出习惯（查询 + 网页），更新下一批 TD 候选
- [ ] 6.2 文档化工具页分享话术（Reddit / 导航站），不阻断发布流程

## 7. OpenSpec 收尾

- [ ] 7.1 运行 `openspec validate --change seo-master-plan-2026-05` 并修复全部问题
- [ ] 7.2 合并或部署后按需 `openspec archive seo-master-plan-2026-05`

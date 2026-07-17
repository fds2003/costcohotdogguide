## Context

站点为 Astro SSG，SEO 通过 `src/src/components/SEO.astro` 与各页 `BaseLayout` 的 `title`/`description` 注入。GSC 数据表明：**上线初期已有展示，但整体 CTR 低于 1%**；设备上移动有点击、桌面尚弱；存在 `http://` 与 `https://` 并列展示。

## Goals / Non-Goals

**Goals**

- 在 **72 小时内**完成 P0：优先 URL 的 TD 改写与技术一致性，目标 **CTR 与点击**可测提升（以 GSC 下一窗口为准）。
- **14 天内**完成 P1：枢纽内链 + 核心页 TDH + 移动首屏答案块。
- **21 天内**完成 P2：Schema 抽检与 `/guide/` 导航化深化（长文加厚在 CTR 改善后迭代）。

**Non-Goals**

- 不引入新 CMS；不为本变更批量新建栏目（可选单独页 `/hot-dog/water-option/` 仅标记为可选）。
- 不更改核心 URL 架构（沿用现有 `astro.config.mjs` redirects）。
- 不保证排名位置——仅优化可影响的呈现与内容承接。

## Decisions

1. **价格史双路径分工**  
   - **交互图表卖点**放在 **`/tools/price-history/`**（GSC 已显示较高 CTR 潜力）。  
   - **`/hot-dog/price-history/`** 保留叙事与历史段落；TD 不与工具页重复同一句话。

2. **营养数字单一来源**  
   - 以 `src/src/content/` 下 CSV 及页面统一口径为准；TD 中数字必须与首屏正文一致。

3. **2026 套餐选项文案**  
   - 仅在有可核对来源时写入；否则改为中性表述「套餐组成以门店为准」并链向 `/menu/new/`。

4. **Schema**  
   - 在现有 JSON-LD 上扩展或修补；评测页继续避免触发无效 Review 摘要（与 `SEO.astro` 注释一致）。

## Risks / Trade-offs

| 风险 | 缓解 |
|------|------|
| 热点新闻过时 | 定期复查 `/menu/new/` 与价格工具页注释日期 |
| TD 堆砌关键词 | 优先可读性与数字真实性 |
| 内链过多像农场 | 每段 1 条自然锚文本，优先枢纽页出发 |

## Success Metrics (4 周)

- GSC：总点击、整体 CTR、优先 URL 的点击与 CTR。  
- 定性：Rich Results Test 对抽检页面通过；无新增 soft-404/redirect 链。

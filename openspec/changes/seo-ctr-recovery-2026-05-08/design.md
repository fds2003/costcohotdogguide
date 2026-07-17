## Context

本次变更基于 2026-05-08 的 GSC 导出数据：展示增长明显，但点击转化严重不足。  
问题焦点不在“索引缺失”，而在“SERP 点击动机不足 + 关键页面承接弱 + 结构化与复盘机制缺失”。

补充蓝图见 `doc/costcohotdogguide.com-SEO-solution-v4-final.md`；执行时仍以本文 **Decision Addendum (v2)** 为准，避免与集群策略冲突（例如不对非重复页滥用 canonical）。

## Goals / Non-Goals

**Goals**

- 在不新增页面前提下，优先提升高展示 URL 的 CTR 与点击数。
- 以分批上线方式完成页面改造，确保每批改动可观测、可归因。
- 建立个人站可持续执行的 KPI 与复盘机制（轻量、低维护成本）。

**Non-Goals**

- 不承诺短期排名绝对提升（排名受外部竞争与算法影响）。
- 不引入新的 CMS、数据仓库或复杂自动化平台。
- 不改变既有 URL 结构与信息架构主干。

## Decisions

1. **目标采用分层 KPI，不单押全站 CTR**  
   同时追踪全站、页面、查询词三个层级，避免小样本失真。

2. **按批次上线，控制变量**  
   P0 仅改 TD 与关键首屏段落；P1 再改结构；P2 再做 Schema 与内链全量补齐。

3. **Schema 走“可验证优先”策略**  
   仅在页面事实与模板支持完整时启用对应类型，避免无效或误导标记。

4. **FAQPage 不再作为 Google CTR 杠杆**  
   基于 2026-05 的搜索结果变化，FAQPage 对本项目不再设定为 Google 富媒体或 CTR 提升手段；若已存在则低风险保留，FAQ 模块价值回归用户答疑与内容生态支撑。

5. **移动优先验收**  
   现阶段点击几乎全部来自移动端，发布验收先看手机 SERP 可读性与首屏承接。

## Risks / Trade-offs

| 风险 | 缓解 |
|------|------|
| 目标设定过激导致团队误判 | 使用 2/4/6-8 周阶梯目标 |
| 同时改动过多无法归因 | 强制批次发布与变更日志 |
| 标题过长移动端截断 | 设定字符上限并做 SERP 预览检查 |
| Schema 与事实不一致 | 发布前做 Rich Results Test 与人工抽查 |

## Success Metrics

- 全站 CTR：`0.50% -> 1.2% (2周) -> 1.8% (4周) -> 2.0%+ (6-8周)`  
- 目标页面 CTR：`/guide/`、`/hot-dog/faq/`、`/hot-dog/calories/`、`/hot-dog/price/` 分别达标。  
- 查询词 CTR：以 `calories 2026` 等目标词组为优先，跟踪点击净增长。  
- 质量门槛：无索引异常、无明显性能回退、结构化数据可通过验证。

## Decision Addendum (v2)

### What We Keep

1. **CTR-first is still the primary objective**  
   当前阶段的核心矛盾是“有展示无点击”，优先顺序保持为 SERP 吸引力提升 > 页面深度补齐 > 结构化增强。

2. **Do not merge all nutrition pages into one long page**  
   保留 `calories`、`sodium`、`carbs` 等细分页面以承接长尾词，避免“一页吃全词”导致的精确匹配损失。

3. **Programmatic pages are valid if they solve user tasks**  
   `/tools/price-history/` 这类页面继续强化工具属性与可用性，不因“程序化”标签而被错误削弱。

4. **EEAT must be visible in-page, not only implied**  
   通过作者信息、来源引用、更新痕迹、原创证据（如实拍）逐步降低“低可信内容”风险。

### What We Adjust

1. **Hold new page creation for now**  
   当前 change 保持“不新增页面”原则，先由 `/guide/` 承担 hub 职责。是否新增“总览主页面”在本轮 CTR 结果后再决策。

2. **Use 301 only after proven keyword conflict**  
   仅当 GSC 的查询词-URL 映射确认冲突且长期无改善时才做 301，避免过早重定向造成流量误伤。

3. **Delay topic expansion until hot-dog cluster stabilizes**  
   先把 Costco hot dog 集群做透，再扩展到 pizza/chicken-bake 等主题，避免站点主题权重分散。

### Execution Priority Update

- Week 1: P0 CTR emergency actions (`calories` + `tools/price-history` + publishing/logging)
- Week 2: P1 structure work (`guide` hub + `faq` direct answers + `price` depth)
- Week 3: P2 authority signals (schema checks + internal linking + EEAT enhancements)
- FAQ policy addendum: keep `/hot-dog/faq/` answer quality as KPI focus; treat FAQPage as optional machine-readable layer for non-Google consumers

# /hot-dog/ 集群冲突报告

> 生成日期：2026-04-29
> 变更：`one-keyword-group-one-page`
> 执行选择：A（按原样创建，附风险标记）

## 执行摘要

- **新增页面**：30 个 `/hot-dog/` 集群页面
- **冲突页面**：13 个（与已有页面内容重叠）
- **无冲突页面**：17 个
- **构建状态**：✅ 成功（117 pages total）

---

## 冲突页面清单（13个）

| # | 新页面 | 已有页面 | 冲突类型 | 风险等级 | Canonical 指向 |
|---|--------|---------|---------|---------|---------------|
| 1 | `/hot-dog/calories/` | `/nutrition/calories/` | 完全重复 | 🔴 高 | `/nutrition/calories/` |
| 2 | `/hot-dog/nutrition/` | `/nutrition/index.html` | 完全重复 | 🔴 高 | `/nutrition/` |
| 3 | `/hot-dog/ingredients/` | `/ingredients/ingredients-list/` | 完全重复 | 🔴 高 | `/ingredients/ingredients-list/` |
| 4 | `/hot-dog/price/` | `/price/index.html` | 完全重复 | 🔴 高 | `/price/` |
| 5 | `/hot-dog/air-fryer/` | `/tutorials/air-fryer/` | 完全重复 | 🔴 高 | `/tutorials/air-fryer/` |
| 6 | `/hot-dog/cooking-at-home/` | `/cooking/at-home/` | 完全重复 | 🔴 高 | `/cooking/at-home/` |
| 7 | `/hot-dog/gluten-free/` | `/faq/gluten-free/` + `/dietary/gluten-free/` | 完全重复 | 🔴 高 | `/faq/gluten-free/` |
| 8 | `/hot-dog/protein/` | `/nutrition/protein/` | 完全重复 | 🟡 中 | `/nutrition/protein/` |
| 9 | `/hot-dog/vegan/` | `/faq/vegan/` + `/dietary/vegan/` | 完全重复 | 🔴 高 | `/faq/vegan/` |
| 10 | `/hot-dog/price-history/` | `/price/price-increase/` | 内容重叠 | 🟡 中 | `/price/price-increase/` |
| 11 | `/hot-dog/air-fryer-guide/` | `/tutorials/air-fryer/` | 几乎相同 | 🔴 高 | `/tutorials/air-fryer/` |
| 12 | `/hot-dog/faq/` | `/faq/index.html` | Hub页重复 | 🔴 高 | `/faq/` |
| 13 | `/hot-dog/protein-vs-calories/` | `/nutrition/macros/` + `/nutrition/calories/` | 内容重叠 | 🟡 中 | `/nutrition/macros/` |

### 风险说明

- **🔴 高**：相同主题、相同关键词意图，谷歌几乎必然判定 cannibalization
- **🟡 中**：主题相关但角度不同，仍可能分流权重
- **🟢 低**：无冲突

---

## 无冲突页面清单（17个）

| # | 页面 URL | 核心关键词 | 漏斗阶段 |
|---|---------|-----------|---------|
| 1 | `/hot-dog/why-so-cheap/` | why is costco hot dog so cheap | A |
| 2 | `/hot-dog/healthy/` | costco hot dog healthy | A |
| 3 | `/hot-dog/sodium/` | costco hot dog sodium | A |
| 4 | `/hot-dog/keto/` | costco hot dog keto | A |
| 5 | `/hot-dog/carbs/` | costco hot dog carbs | A |
| 6 | `/hot-dog/fat/` | costco hot dog fat content | A |
| 7 | `/hot-dog/allergens/` | costco hot dog allergen | A |
| 8 | `/hot-dog/vegetarian/` | costco hot dog vegetarian | A |
| 9 | `/hot-dog/fun-facts/` | costco hot dog fun facts | A |
| 10 | `/hot-dog/history/` | costco hot dog history | A |
| 11 | `/hot-dog/cheese/` | costco hot dog cheese | B |
| 12 | `/hot-dog/sauce/` | costco hot dog sauce | B |
| 13 | `/hot-dog/toppings/` | best costco hot dog toppings | B |
| 14 | `/hot-dog/food-court/` | costco hot dog food court facts | A |
| 15 | `/hot-dog/diet-tips/` | costco hot dog diet tips | A |
| 16 | `/hot-dog/comparison/` | costco hot dog vs other hotdogs | A |
| 17 | `/hot-dog/controversies/` | costco hot dog controversial claims | A |

---

## 已采取的缓解措施

1. **Canonical 标签**：所有13个冲突页面已添加 `<link rel="canonical">` 指向原有页面
2. **冲突注释**：每个冲突页面源码中包含 `<!-- CONFLICT WARNING -->` 注释
3. **FAQ Schema**：所有30个页面均已嵌入 FAQPage JSON-LD Schema
4. **内链结构**：每个页面包含指向相关页面的内链区块

---

## 建议后续行动

### 短期（1-2周）

- [ ] 为17个无冲突页面填充实际内容（当前为占位符）
- [ ] 提交 `/hot-dog/*` URL 到 Google Search Console
- [ ] 监控冲突页面的 canonical 是否被谷歌正确识别

### 中期（1个月内）

- [ ] 对13个冲突页面做决策：
  - **方案1**：删除冲突页面，将内容合并到原有页面增强
  - **方案2**：保留但设为 `noindex`，仅作为内部参考
  - **方案3**：重写冲突页面，差异化角度（如 `/hot-dog/calories/` 专注"快速答案"，原有 `/nutrition/calories/` 专注"深度分析"）

### 长期（2-3个月）

- [ ] 根据 GSC 数据评估 `/hot-dog/` 集群的表现
- [ ] 如果新集群表现不如原有页面，执行 301 重定向合并
- [ ] 如果新集群表现更好，将原有页面 301 重定向到新集群

---

## 技术备注

- 所有页面使用 `BaseLayout` + `RelatedProducts` 组件
- 冲突页面已设置 `funnelStage` frontmatter（A/B/C）
- 构建通过，无错误
- 文件位置：`src/pages/hot-dog/*.astro`

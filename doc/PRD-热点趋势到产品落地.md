# 产品需求文档：从热点趋势到产品落地

> 版本：v1.0 | 日期：2026-04-29 | 作者：高级 SEO 分析 | 目标市场：海外英文市场

---

## 目录

1. [文档概述](#1-文档概述)
2. [市场研究与数据来源](#2-市场研究与数据来源)
3. [候选产品评估](#3-候选产品评估)
4. [选定产品：GLP-1 Supplement Guide](#4-选定产品glp-1-supplement-guide)
5. [产品成本与时间估算](#5-产品成本与时间估算)
6. [用户获取策略](#6-用户获取策略)
7. [盈利模型](#7-盈利模型)
8. [实施路线图](#8-实施路线图)
9. [风险与缓解](#9-风险与缓解)
10. [附录](#10-附录)

---

## 1. 文档概述

### 1.1 背景

本项目的核心问题是：**如何基于 Google Trends 等公开数据发现热点趋势，将其转化为 SEO 关键词，最终落地为可盈利的 Web 产品。**

目标用户画像：
- **单人 IT 工程师**，具备全栈开发能力
- 不依赖内容团队，利用技术优势弥补内容短板
- 目标是月收入 $1000+ 的副业项目

### 1.2 核心方法论

```
趋势信号 → 关键词发现 → 竞争验证 → 产品设计 → MVP 开发 → 流量获取 → 商业化

数据源层级：
  L1: Google Trends / Exploding Topics     ← 发现信号
  L2: Google Autocomplete / People Also Ask ← 扩展长尾词
  L3: SEOQuake / Ahrefs / Semrush           ← 竞争验证
  L4: Google SERP 手动分析                   ← 意图确认
```

### 1.3 关键决策记录

| 决策ID | 内容 | 状态 | 轮次 |
|--------|------|------|------|
| D01 | Costco Hot Dog、数字梗站、OPEC 追踪站推荐 | 已确认(后修正) | R6 |
| D02 | 否决 Inflation Calculator 和 Oil Price | 已否决 | R6 |
| D03 | Costco Hot Dog 降级为 SEO 练手/流量钩子 | 已确认 | R8 |
| D04 | GLP-1 Supplement Guide 确认为首选产品方向 | 已确认 | R8 |

---

## 2. 市场研究与数据来源

### 2.1 数据采集概览

| 来源 | 工具/方式 | 覆盖范围 | 数据量 | 采集时间 |
|------|----------|----------|--------|----------|
| Google Trends | Playwright 浏览器抓取 | US/UK/AU 三市场 | 1015条趋势 | 2026-04-29 |
| Exploding Topics | 浏览器抓取 | 全球英文 | 首页TOP趋势 | 2026-04-29 |
| Ahrefs Keyword Gen | 免费工具 | US | 短语匹配 | 2026-04-29 |
| Google Autocomplete | API 调用(16前缀) | US | 150+ 长尾词 | 2026-04-29 |
| Google SERP | 浏览器手动分析 | US | 关键词首页 | 2026-04-29 |
| SEOQuake | Chrome 插件 | US | SERP DA/外链 | 2026-04-29 |
| Google People Also Ask | SERP 抓取 | US | 用户真实问题 | 2026-04-29 |

### 2.2 跨市场热词（2+市场）

| 热词 | US | UK | AU | 类型 | 产品化潜力 |
|------|-----|-----|-----|------|------------|
| OPEC / UAE leaving OPEC | 100K+ | 20K+ | 10K+ | 能源政策 | 高 |
| Financial Crisis | - | 5K+ | 1K+ | 金融 | 高 |
| PSG vs Bayern | 500K+ | 200K+ | 50K+ | 体育事件 | 低 |
| King Charles / HMS Trump | 50K+ | 20K+ | 5K+ | 新闻 | 低 |

### 2.3 Exploding Topics 新兴趋势

| 热词 | 月搜索量 | 增长率(2年) | 商业价值 |
|------|----------|-------------|----------|
| **GLP-1 Supplement** | 49.5K | +900% | **极高** |
| **PDRN Cream** | 40.5K | +99X+ | **极高** |
| **Podcast Microphone** | 60.5K | +900% | 高 |
| Cat Toothpaste | 14.8K | +669% | 中 |
| PDRN Toner | 2.4K | +99X+ | 中 |

---

## 3. 候选产品评估

### 3.1 评分矩阵

| 评估维度 | 权重 | 1分 | 2分 | 3分 |
|----------|------|-----|-----|-----|
| 搜索量 | 30% | < 500/月 | 500-5000/月 | > 5000/月 |
| 增长趋势 | 25% | 下降 | 平稳 | 上升 |
| 竞争度 | 25% | 红海(大站霸屏) | 中等 | 蓝海(无垂直站) |
| 变现潜力 | 20% | 难变现 | 可变现 | 容易变现 |

### 3.2 评分结果

| 产品 | 搜索量 | 增长 | 竞争 | 变现 | **总分** | 推荐 |
|------|--------|------|------|------|----------|------|
| **GLP-1 Supplement Guide** | 3 | 3 | 3 | 3 | **3.00** | P0 首选 |
| **PDRN Skincare Guide** | 3 | 3 | 3 | 3 | **3.00** | P1 备选 |
| Podcast Microphone Guide | 3 | 3 | 2 | 3 | **2.75** | P2 |
| Costco Hot Dog Guide | 2 | 2 | 2 | 1 | **1.75** | 不推荐独立项目 |

### 3.3 已否决项目

| 项目 | 否决原因 |
|------|----------|
| Inflation Calculator | 政府机构霸榜（bls.gov 21.3M外链）、央行系统参与，无法突围 |
| Oil Price / OPEC Tracker | 顶级媒体(Bloomberg/Reuters) + 政府机构(EIA.gov) 霸屏 |
| Costco Hot Dog 独立创业 | 商业天花板 $80-350/月，无法商业闭环，仅适合作为 SEO 练手或流量钩子 |

---

## 4. 选定产品：GLP-1 Supplement Guide

### 4.1 产品定位

**一句话描述**：一个中立的、深度的 GLP-1 补充剂信息站，帮助正在使用 Ozempic/Wegovy/Mounjaro 等 GLP-1 药物的用户找到最合适的营养补充方案。

**差异化**：目前 Google 首页没有任何中立垂直站，全部是品牌博客（不客观）或医院网站（不实用）。

### 4.2 目标用户

| 用户画像 | 典型搜索词 | 痛点 |
|----------|-----------|------|
| GLP-1 药物使用者 | "best supplements to take while on GLP-1" | 肌肉流失、脱发、便秘等副作用 |
| 减肥调研者 | "natural GLP-1 supplement for weight loss" | 不想用药，想找天然替代品 |
| 保健品购买者 | "top rated GLP-1 supplement" | 海量产品不知如何选 |
| Tirzepatide 用户 | "best supplements to take with tirzepatide" | 精准品类需求 |

### 4.3 产品形态

```
GLP1SupplementGuide.com

┌─────────────────────────────────────────────────┐
│                   Web 内容站                       │
├─────────────────────────────────────────────────┤
│                                                  │
│  核心内容（Pillar + Cluster 架构）                  │
│  ├─ /guide/         完整指南 (Pillar Page)         │
│  ├─ /reviews/       品牌深度评测 (10-20篇)          │
│  ├─ /natural/       天然 GLP-1 激活方法            │
│  ├─ /diet/          GLP-1 饮食营养方案             │
│  ├─ /compare/       产品对比表 (交互工具)            │
│  └─ /faq/           FAQ 聚合                     │
│                                                  │
│  交互工具                                          │
│  ├─ Supplement Interaction Checker               │
│  └─ Product Comparison Table (可排序/筛选)         │
│                                                  │
│  技术栈                                           │
│  ├─ 框架：Astro (SSG)                             │
│  ├─ 样式：Tailwind CSS                            │
│  ├─ 部署：Cloudflare Pages (免费)                  │
│  ├─ 数据：Markdown + JSON                         │
│  └─ SEO：JSON-LD Schema (Article + Review + FAQ)  │
└─────────────────────────────────────────────────┘
```

### 4.4 核心内容矩阵

**Phase 1 — 上线必备（15篇）**

| # | 标题 | 类型 | 目标关键词 |
|---|------|------|-----------|
| 1 | The Ultimate GLP-1 Supplement Guide (2026) | Pillar | GLP-1 supplement guide |
| 2 | Best Supplements to Take While on GLP-1 Medications | Listicle | best supplements while on GLP-1 |
| 3 | 7 Best Natural GLP-1 Supplements That Actually Work | Listicle | best natural GLP-1 supplement |
| 4 | GLP-1 Supplement Comparison: Brand vs Brand | Comparison | GLP-1 supplement comparison |
| 5 | Berberine for GLP-1: Does It Really Work? | Deep Dive | berberine GLP-1 supplement |
| 6 | GLP-1 Diet Plan: What to Eat for Maximum Results | Guide | GLP-1 diet |
| 7 | Preventing Muscle Loss on GLP-1: Protein Guide | Guide | protein supplements GLP-1 |
| 8 | GLP-1 and Hair Loss: Which Supplements Help | Deep Dive | GLP-1 hair loss supplements |
| 9 | Electrolytes on GLP-1: Why You Need Them | Deep Dive | electrolytes GLP-1 |
| 10 | Brand Review: Celebrate Vitamins GLP-1 Support | Review | celebrate vitamins GLP-1 review |
| 11 | Brand Review: Nature Made GLP-1 Bundle | Review | nature made GLP-1 |
| 12 | Supplements to Take with Tirzepatide (Mounjaro/Zepbound) | Guide | supplements with tirzepatide |
| 13 | GLP-1 Supplement Side Effects: What to Watch For | Guide | GLP-1 supplement side effects |
| 14 | Over-the-Counter GLP-1 Supplements: Complete List | Listicle | OTC GLP-1 supplements |
| 15 | How to Choose the Right GLP-1 Supplement for You | Guide | how to choose GLP-1 supplement |

**Phase 2 — 扩展内容（15篇，Week 3-4）**
- 逐品牌深度评测 × 10
- 特定人群专题（糖尿病/PCOS/甲状腺）× 3
- 预算版本对比 × 2

### 4.5 SERP 竞争格局

搜索 `GLP-1 supplement guide` 首页分析：

| 排名 | 网站 | 类型 | 内容质量 | 可超越性 |
|------|------|------|----------|----------|
| 1 | GoodRx | 药品比价 | 中 | ✅ 做药品非补充剂 |
| 2 | Geisinger Health | 医院 | 浅 | ✅ 只讲原理 |
| 3 | CookUnity | 餐食博客 | 低 | ✅ 一篇泛泛博文 |
| 4 | Myprotein | 品牌博客 | 低 | ✅ 只推自家 |
| 5 | PubMed Central | 学术(.gov) | 极深 | ✅ 普通用户读不懂 |
| 6 | Ohio State Health | 大学 | 中 | ✅ 不涉及产品 |
| 7 | Weight Watchers | 减肥品牌 | 浅 | ✅ 一篇列表文 |
| 8-10 | 电商/个人博客 | 电商 | 低 | ✅ 纯卖货/个人视角 |

**结论：蓝海市场，无中立垂直竞争者。**

---

## 5. 产品成本与时间估算

### 5.1 开发成本

| 阶段 | 任务 | 时间 |
|------|------|------|
| 环境搭建 | Astro 初始化 + Tailwind + Cloudflare 配置 | 4h |
| 框架开发 | 页面模板、导航、SEO 组件 | 4h |
| 内容创作 | Phase 1 (15篇 × 1.5h) | 22h |
| 工具开发 | 产品对比表 + 交互计算器 | 4h |
| SEO 优化 | JSON-LD、Sitemap、Meta、速度优化 | 3h |
| 部署测试 | 上线 + GSC 提交 | 2h |
| **总计** | | **约 39 小时** |

### 5.2 运营成本

| 项目 | 月成本 |
|------|--------|
| 域名 (GLP1SupplementGuide.com) | ~$1/月 ($12/年) |
| Cloudflare Pages | $0 (免费额度内) |
| 内容工具 (AI 辅助) | $20/月 |
| **总计** | **~$21/月** |

---

## 6. 用户获取策略

### 6.1 主渠道：SEO 自然搜索（目标占比 90%+）

**Phase 1 目标关键词（前3个月）**

| 关键词 | 预估月搜索量 | 预估 KD | 优先级 |
|--------|------------|---------|--------|
| GLP-1 supplement guide | 5000+ | 25 | P0 |
| best supplements while on GLP-1 | 3000+ | 22 | P0 |
| best natural GLP-1 supplement | 2000+ | 20 | P0 |
| supplements to take with tirzepatide | 1000+ | 18 | P1 |
| GLP-1 supplement reviews | 1500+ | 15 | P1 |

**内容策略**：
- Pillar Page 覆盖核心词，深度 3000+ 字
- Cluster Pages 覆盖长尾词，每篇 1000-2000 字
- 所有页面 FAQPage Schema 标记
- 内链策略：Cluster → Pillar，Pillar → Cluster

### 6.2 辅助渠道（目标占比 <10%）

| 渠道 | 策略 | 预期效果 |
|------|------|----------|
| Reddit (r/GLP1, r/Ozempic, r/tirzepatidecompound) | 回答补充剂相关问题，签名放链接 | 精准流量 + 外链 |
| Pinterest | 补充剂对比信息图 | 长尾图片搜索 |
| Quora | 搜索 GLP-1 问题，写深度回答 | 引荐流量 |
| YouTube | 补充剂开箱/对比视频 | 视频搜索流量 |

### 6.3 不使用的渠道

| 渠道 | 原因 |
|------|------|
| Google Ads / Facebook Ads | 单次点击成本高，补充剂 Affiliate 佣金无法覆盖 |
| TikTok / Instagram | YMYL 内容不适合短视频形式 |

---

## 7. 盈利模型

### 7.1 收入来源

| 收入源 | 方式 | 佣金率 | 触发条件 |
|--------|------|--------|----------|
| Amazon Associates | 推荐 Amazon 上的补充剂产品 | 1-5% | 用户点击后 24h 内购买 |
| iHerb Affiliate | 保健品垂直电商 | 5-10% | 用户通过链接购买 |
| Vitacost Affiliate | 保健品垂直电商 | 4-8% | 用户通过链接购买 |
| Media.net / AdSense | 展示广告 | CPM | 页面展示 |
| 品牌赞助 | 补充剂品牌付费评测 | 固定费用 | 流量 > 5000 UV/月 |

### 7.2 收入预估

| 阶段 | 月均 UV | 预估月收入 | 时间 |
|------|---------|-----------|------|
| 收录期 | 100-500 | $10-50 | 第1-3月 |
| 增长期 | 500-3000 | $100-500 | 第3-6月 |
| 稳定期 | 3000-10000 | $500-2000 | 第6-12月 |
| 成熟期 | 10000-30000 | $2000-5000 | 第12-18月 |

### 7.3 关键变现指标

- 目标 RPM：$15-30（健康类内容中等偏高）
- Affiliate 转化率：2-5%（精准流量）
- 客单价：$30-80（补充剂平均）

---

## 8. 实施路线图

### Phase 0：验证（Week 0，已完成）

- [x] Google Trends 多市场热词采集
- [x] Exploding Topics 新兴趋势验证
- [x] SERP 竞争手动分析
- [x] 产品评分与方向确认

### Phase 1：MVP（Week 1-2）

| 日期 | 任务 | 交付物 |
|------|------|--------|
| Day 1 | 注册域名 + Cloudflare 配置 | Domain active |
| Day 2 | Astro 项目初始化 + Tailwind + 基础模板 | Local dev running |
| Day 3-5 | Pillar 文章 "Ultimate GLP-1 Supplement Guide" | Pillar page live |
| Day 6-8 | Brand Reviews × 5 + 对比表页面 | 5 review pages |
| Day 9-10 | SEO 优化 + JSON-LD Schema | Lighthouse 90+ |
| Day 11 | 部署到 Cloudflare Pages | Site live |
| Day 12 | Google Search Console 提交 | Indexed |
| Day 13-14 | Reddit/Quora 初始推广 | 首批外链 |

### Phase 2：增长（Week 3-8）

| 周 | 任务 |
|----|------|
| Week 3-4 | 内容扩展到 25 篇 + 交互工具上线 |
| Week 5-6 | 品牌评测扩展到 15 篇 + 申请 Affiliate |
| Week 7-8 | 内容优化 + 外链建设 + 收入初现 |

### Phase 3：优化（Month 3-6）

- 基于 GSC 数据优化低排名内容
- 更新过时信息，保持内容新鲜度
- 扩展新品类（PDRN Skincare、Podcast Microphone）
- A/B 测试 Affiliate 链接位置和 CTA

---

## 9. 风险与缓解

| 风险 | 等级 | 影响 | 缓解措施 |
|------|------|------|----------|
| **YMYL 合规** | 高 | Google 可能不给排名 | 引用 PubMed 论文、添加医学审核署名、添加医疗免责声明 |
| **FDA 监管变化** | 中 | 产品/补充剂可能被禁 | 持续跟踪 FDA 公告、内容及时更新 |
| **大站入场** | 中 | Healthline/WebMD 等可能跟进 | 先发优势、深度内容护城河 |
| **Google 算法更新** | 中 | 排名波动 | 白帽 SEO、不过度优化、内容质量第一 |
| **内容产出瓶颈** | 低 | 单人无法持续产出 | AI 辅助创作 + 人工审核、复用内容模板 |

### YMYL 专项缓解

1. 每篇文章署名并添加作者资质说明
2. 核心文章引用 3+ PubMed/PMC 论文
3. 页面底部固定医疗免责声明
4. About 页面展示编辑标准和审核流程

---

## 10. 附录

### 10.1 数据源清单

| 工具 | URL | 用途 | 成本 |
|------|-----|------|------|
| Google Trends | trends.google.com | 趋势发现 | 免费 |
| Exploding Topics | explodingtopics.com | 新兴趋势 | 免费 |
| Ahrefs Keyword Generator | ahrefs.com/keyword-generator | 关键词扩展 | 免费 |
| SEOQuake | Chrome 插件 | SERP 竞争分析 | 免费 |
| Google Autocomplete API | suggestqueries.google.com | 长尾词采集 | 免费 |
| Google Search Console | search.google.com | 收录监控 | 免费 |

### 10.2 长尾关键词采集方法

```
Google Autocomplete API：
curl "suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=US&q=SEED_KEYWORD"

前缀扩展（16个字母组合）：
a, b, c, h, i, w, n, p, r, cal, pri, ing, heal, rec, hom, bran

问题格式扩展（8个疑问词）：
are, is, how, what, why, can, does, do
```

### 10.3 评分公式

```
加权总分 = 搜索量评分 × 0.30 + 增长趋势评分 × 0.25 + 竞争度评分 × 0.25 + 变现潜力评分 × 0.20
推荐阈值：总分 ≥ 2.5
```

### 10.4 技术栈参考

| 层级 | 选型 | 备选 |
|------|------|------|
| 框架 | Astro | Next.js (SSG) |
| 样式 | Tailwind CSS | - |
| 部署 | Cloudflare Pages | Vercel |
| 内容管理 | Markdown + Git | 无头 CMS |
| 分析 | Google Analytics + GSC | Plausible |

### 10.5 关联文档索引

| 文档 | 内容 |
|------|------|
| notes/updated-trending-data-2026-04-29.md | 实时热词数据（US/UK/AU + Exploding Topics） |
| notes/costco-hotdog-longtail-kd-analysis.md | Costco Hot Dog 44 个长尾词 KD 分析 |
| notes/glp1-supplement-product-opportunity.md | GLP-1 补充剂 SERP 竞争详细分析 |
| notes/product-opportunity-final-ranking.md | 4 个候选产品评分对比 |
| notes/keyword-competition-analysis.md | SEOQuake 三个热词竞争数据 |
| notes/data-validation-report.md | Google Trends 12 个月常青性验证 |
| notes/implementation-guide-for-engineers.md | IT 工程师落地实施指南 |
| decisions/D01-recommended-keywords-for-solopreneur.md | 早期热词推荐决策 |

---

*本文档基于 2026-04-29 讨论中采集的全部数据和分析结论编写。*
*所有数据来源已在附录中标明，可追溯验证。*

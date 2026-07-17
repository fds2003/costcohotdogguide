# Costco Hot Dog Guide — 站点框架与内容目录

面向域名 **https://costcohotdogguide.com** 与 Astro 工程 **`src/`**（构建根目录为 `src/`，页面源码在 `src/src/`）。本文档汇总信息架构、`src` 目录职能，以及**每个公开路径**对应的源文件、SEO 标题、描述与关键词集群。

---

## 1. 站点定位与技术骨架

| 项目 | 说明 |
|------|------|
| **品牌名** | Costco Hot Dog Guide |
| **主题** | Costco 餐饮部（Food Court）热狗组合（$1.50）、营养/成分/价格史、工具、数据可视化、会员与购物指南、周边产品评测 |
| **主站 URL** | `https://costcohotdogguide.com`（`astro.config.mjs` 中 `site`） |
| **框架** | Astro + Tailwind CSS；`@astrojs/sitemap` 生成站点地图 |
| **SEO 组件** | `src/src/components/SEO.astro`：canonical、Open Graph、Twitter、JSON-LD（含面包屑 `segmentLabels`） |
| **布局** | `BaseLayout`（全站）、`ReviewLayout`（评测）、`TutorialLayout`、`FAQLayout` |

---

## 2. 信息架构（树形 URL）

以下路径均带尾部斜杠（Astro 静态站常见约定；canonical 以 `SEO.astro` 实际计算为准）。

```
/                                    首页
/guide/                              终极指南（长文落地页）
/about/ /contact/ /privacy-policy/  关于、联系、隐私
/menu/                               食品部菜单总览
/menu/new/                           新品与停售
/menu/{slug}/                        单品详情（见 §7 动态菜单）
/hot-dog/                            热狗专题「目录页」+ 大量子页
/faq/                                FAQ 总览 + 子问题页
/ingredients/                        成分专题
/cooking/recipe/                     家庭做法食谱
/tutorials/                          教程中心
/nutrition/weight-watchers-points/   WW 积分
/tools/                              工具中心
/data/                               数据与洞察
/business/                           ※ 见 §5 重定向
/articles/                           ※ 当前无 `index` 源文件，见 §8
/reviews/                            评测中心
/guides/                             购物指南
/savings/                            省钱与计算器
```

---

## 3. `src` 目录内容目录（工程视角）

根路径指仓库内 **`src/`** 子项目（含 `package.json`）。

| 路径 | 职责 |
|------|------|
| `src/src/pages/**` | 文件即路由；唯一动态段 `menu/[slug].astro` |
| `src/src/layouts/**` | 页面壳与 SEO/页脚/导航组合 |
| `src/src/components/**` | 导航、页脚、广告、图表、计算器、内链与推荐商品等 |
| `src/src/content/**` | **内容数据**：`menu-items.csv`、数据 CSV/JSON、文章 Markdown、构建索引 `index.json` |
| `src/src/lib/csv-loader.js` | 运行时/构建时加载 CSV（菜单、营养等） |
| `src/src/data/**` | 广告、联盟、内链、价格史 JSON 等**站点配置/辅助数据** |
| `src/src/styles/global.css` | 全局样式 |
| `src/scripts/build-content-index.js` | 生成 `content/index.json`（菜单/文章/数据集统计） |
| `astro.config.mjs` | `site`、Vite、**URL 重定向**（去重/规范 URL） |

---

## 4. 全站页面路径清单（含关键词）

**说明：**

- **主关键词**：从页面 `title`、部分 FAQ 的 `targetKeyword`、及主题归纳。
- **扩展/长尾词**：从 `description` 与页面主题拆出，用于内容集群与内链规划。
- 评测页中 `title` 为变量的，已写为实际产品名（与源码一致）。

### 4.1 基础与政策

| 公开 URL | 源文件 | SEO 标题（约） | Meta 描述（约） | 主关键词 & 扩展词 |
|----------|--------|----------------|-----------------|-------------------|
| `/` | `src/src/pages/index.astro` | Costco Hot Dog Guide | 终极指南：$1.50 热狗、营养、成分、做法 | 主：Costco hot dog guide, $1.50 hot dog；扩展：nutrition facts, ingredients, cooking tips |
| `/guide/` | `src/src/pages/guide.astro` | Costco Hot Dog: The Ultimate Guide (2026) | 营养、成分、历史等全面介绍 | 主：ultimate guide Costco hot dog 2026；扩展：nutrition, ingredients, history |
| `/about/` | `src/src/pages/about.astro` | About Us | 独立资源站：评测、技巧、$1.50 热狗 | 主：about Costco Hot Dog Guide；扩展：independent reviews, shopping tips |
| `/contact/` | `src/src/pages/contact.astro` | Contact Us | 问题、反馈、合作 | 主：contact；扩展：feedback, partnership |
| `/privacy-policy/` | `src/src/pages/privacy-policy.astro` | Privacy Policy | 数据收集与使用说明 | 主：privacy policy；扩展：data protection |

### 4.2 菜单与食品部

| 公开 URL | 源文件 | SEO 标题（约） | Meta 描述（约） | 主关键词 & 扩展词 |
|----------|--------|----------------|-----------------|-------------------|
| `/menu/` | `src/src/pages/menu/index.astro` | Costco Food Court Menu \| Complete Guide & Prices | 全菜单价格、营养、竞对比较 | 主：Costco food court menu, prices；扩展：nutrition, competitor comparison, hot dog, pizza |
| `/menu/new/` | `src/src/pages/menu/new.astro` | New & Discontinued Costco Food Court Items | 新品与停售追踪 | 主：new Costco food court items, discontinued；扩展：menu changes, seasonal |
| `/menu/hot-dog/` … | `src/src/pages/menu/[slug].astro` + `content/menu-items.csv` | `{Name} \| Costco Food Court` | 各品 `description` 字段 | 见 **§7 动态菜单表** |

### 4.3 热狗专题 `/hot-dog/`

| 公开 URL | 源文件 | 主关键词 & 扩展词（摘要） |
|----------|--------|---------------------------|
| `/hot-dog/` | `pages/hot-dog/index.astro` | 主：complete directory, Costco hot dog guide；扩展：nutrition, calories, price history, $1.50 |
| `/hot-dog/nutrition/` | `nutrition.astro` | nutrition facts, macros, calories protein sodium |
| `/hot-dog/calories/` | `calories.astro` | calories with/without bun, 570 vs 360, comparison Nathan's McDonald's |
| `/hot-dog/protein/` | `protein.astro` | protein per serving 24g, RDA, fitness |
| `/hot-dog/protein-vs-calories/` | `protein-vs-calories.astro` | protein per calorie, macros, keto-friendly macro |
| `/hot-dog/carbs/` | `carbs.astro` | total/net carbs, bun carbs, low-carb |
| `/hot-dog/fat/` | `fat.astro` | saturated fat, total fat 33g, fast food comparison |
| `/hot-dog/sodium/` | `sodium.astro` | sodium mg, daily limit, salt reduction |
| `/hot-dog/keto/` | `keto.astro` | keto friendly, no bun carbs, low carb |
| `/hot-dog/ingredients/` | `ingredients.astro` | ingredients list, beef frank, bun, allergens |
| `/hot-dog/allergens/` | `allergens.astro` | dairy soy gluten, cross-contamination |
| `/hot-dog/gluten-free/` | `gluten-free.astro` | gluten free hot dog, bun not GF |
| `/hot-dog/vegan/` | `vegan.astro` | vegan options, plant-based alternatives Field Roast |
| `/hot-dog/vegetarian/` | `vegetarian.astro` | vegetarian, meatless alternatives |
| `/hot-dog/healthy/` | `healthy.astro` | is it healthy, dietitian, sodium calories |
| `/hot-dog/diet-tips/` | `diet-tips.astro` | diet tips, bun-less, soda calories |
| `/hot-dog/toppings/` | `toppings.astro` | best toppings, relish mustard, sauerkraut |
| `/hot-dog/sauce/` | `sauce.astro` | sauces condiments, Chicago style |
| `/hot-dog/cheese/` | `cheese.astro` | cheese toppings, cheese sauce |
| `/hot-dog/food-court/` | `food-court.astro` | food court combo, popularity stats |
| `/hot-dog/comparison/` | `comparison.astro` | vs Nathan's, vs McDonald's, price comparison |
| `/hot-dog/price/` | `price.astro` | $1.50 price, unchanged since 1985 |
| `/hot-dog/price-history/` | `price-history.astro` | price history inflation, never raised |
| `/hot-dog/why-so-cheap/` | `why-so-cheap.astro` | loss leader, vertical integration |
| `/hot-dog/history/` | `history.astro` | Hebrew National Kirkland, timeline 1985 |
| `/hot-dog/fun-facts/` | `fun-facts.astro` | trivia records myths |
| `/hot-dog/controversies/` | `controversies.astro` | myths media rumors |
| `/hot-dog/cooking-at-home/` | `cooking-at-home.astro` | oven pan boil reheat |
| `/hot-dog/faq/` | `faq.astro` | FAQ hub $1.50 combo |
| | | |
| **※** `/business/` | `pages/business/index.astro` | 站内配置 **302/301 重定向至 `/hot-dog/history/`**（见 §5）；若线上启用 redirect，用户不一定看到此页的 Business Story 标题 |

### 4.4 成分 `/ingredients/`

| 公开 URL | 源文件 | 主关键词 & 扩展词 |
|----------|--------|-------------------|
| `/ingredients/` | `ingredients/index.astro` | Costco hot dog ingredients, allergen |
| `/ingredients/beef-or-pork/` | `beef-or-pork.astro` | beef or pork, 100% beef, no pork |
| `/ingredients/brand/` | `brand.astro` | who makes Kirkland, manufacturer supplier |

### 4.5 烹饪 `/cooking/`

| 公开 URL | 源文件 | 主关键词 & 扩展词 |
|----------|--------|-------------------|
| `/cooking/recipe/` | `cooking/recipe.astro` | copycat recipe, make at home, step by step |

### 4.6 教程 `/tutorials/`

| 公开 URL | 源文件 | 主关键词 & 扩展词 |
|----------|--------|-------------------|
| `/tutorials/` | `tutorials/index.astro` | tutorials, food court, cooking |
| `/tutorials/air-fryer/` | `air-fryer.astro` | air fryer hot dog, temperature time |
| `/tutorials/calories-without-bun/` | `calories-without-bun.astro` | calories without bun, keto low carb |
| `/tutorials/food-court-calories/` | `food-court-calories.astro` | full menu calories sodium protein |

### 4.7 营养扩展 `/nutrition/`

| 公开 URL | 源文件 | 主关键词 & 扩展词 |
|----------|--------|-------------------|
| `/nutrition/weight-watchers-points/` | `nutrition/weight-watchers-points.astro` | Weight Watchers SmartPoints, WW calculator |

### 4.8 工具 `/tools/` 与省钱 `/savings/`

| 公开 URL | 源文件 | 主关键词 & 扩展词 |
|----------|--------|-------------------|
| `/tools/` | `tools/index.astro` | tools nutrition calculator price tracker |
| `/tools/nutrition-calculator/` | `nutrition-calculator.astro` | interactive nutrition calculator food court |
| `/tools/price-history/` | `price-history.astro` | price history tracker hot dog rotisserie gas |
| `/savings/` | `savings/index.astro` | savings tools membership ROI |
| `/savings/membership-calculator/` | `membership-calculator.astro` | break even membership fee |

### 4.9 数据 `/data/`

| 公开 URL | 源文件 | 主关键词 & 扩展词 |
|----------|--------|-------------------|
| `/data/` | `data/index.astro` | data insights price map nutrition crowd |
| `/data/price-map/` | `price-map.astro` | hot dog price by state US Canada international |
| `/data/nutrition-comparison/` | `nutrition-comparison.astro` | compare menu items calories sodium |
| `/data/crowd-prediction/` | `crowd-prediction.astro` | best time visit crowd heatmap wait |

### 4.10 深度文章 `/articles/`（独立 Astro，非 Markdown 集合）

| 公开 URL | 源文件 | 主关键词 & 扩展词 |
|----------|--------|-------------------|
| `/articles/food-court-menu/` | `articles/food-court-menu.astro` | full menu prices calories 2026 |
| `/articles/is-it-healthy/` | `is-it-healthy.astro` | evidence-based healthy analysis |
| `/articles/pricing-strategy/` | `pricing-strategy.astro` | pricing lessons SMB anchoring loss leader |
| `/articles/150-miracle/` | `150-miracle.astro` | $1.50 miracle story 41 years |
| `/articles/membership-worth-it/` | `membership-worth-it.astro` | membership worth it Executive vs Gold Star |
| `/articles/employee-retention/` | `employee-retention.astro` | Costco employee retention wages culture |
| `/articles/supply-chain-efficiency/` | `supply-chain-efficiency.astro` | supply chain vertical integration $1.50 |

### 4.11 评测 `/reviews/`

| 公开 URL | 源文件 | SEO 标题 / 主关键词 |
|----------|--------|---------------------|
| `/reviews/` | `reviews/index.astro` | Costco product reviews；扩展：air fryer vitamins camping |
| `/reviews/kitchen-appliances/` | `kitchen-appliances.astro` | best kitchen appliances Costco |
| `/reviews/kitchen/best-air-fryer/` | `kitchen/best-air-fryer.astro` | **Best Air Fryer for Costco Hot Dogs**；扩展：reheat pizza chicken bake |
| `/reviews/kitchen/best-kitchen-scale/` | `kitchen/best-kitchen-scale.astro` | **Best Digital Kitchen Scale for Portion Control**；扩展：macros portions |
| `/reviews/vitamins/` | `vitamins.astro` | best vitamins Kirkland |
| `/reviews/bulk-foods/` | `bulk-foods.astro` | bulk foods quinoa rice |
| `/reviews/camping-gear/` | `camping-gear.astro` | camping gear tents coolers |
| `/reviews/furniture/` | `furniture.astro` | furniture sofas desks |

### 4.12 指南 `/guides/`

| 公开 URL | 源文件 | 主关键词 & 扩展词 |
|----------|--------|-------------------|
| `/guides/` | `guides/index.astro` | shopping guides maximize savings |
| `/guides/costco-shopping-guide/` | `costco-shopping-guide.astro` | shopping guide PDF strategies |
| `/guides/maximize-membership/` | `maximize-membership.astro` | maximize membership value |

### 4.13 FAQ `/faq/`（含结构化 targetKeyword）

| 公开 URL | 源文件 | 目标关键词（targetKeyword）| 扩展 |
|----------|--------|------------------------------|------|
| `/faq/` | `faq/index.astro` | FAQ hub | gluten free, dairy free, kosher, halal, nitrates |
| `/faq/halal/` | `halal.astro` | are costco hot dogs halal | certification, beef no pork |
| `/faq/kosher/` | `kosher.astro` | is costco hot dog kosher | certification |
| `/faq/nitrates/` | `nitrates.astro` | do costco hot dogs have nitrates | cured meat |
| `/faq/msg/` | `msg.astro` | do costco hot dogs have MSG | additives |
| `/faq/soy-free/` | `soy-free.astro` | are costco hot dogs soy free | soy bun |
| `/faq/dairy-free-buns/` | `dairy-free-buns.astro` | are costco hot dog buns dairy free | milk ingredients |
| `/faq/with-drink/` | `with-drink.astro` | (title) Does combo include drink | 20 oz soda refills |
| `/faq/how-big/` | `how-big.astro` | how big is Costco hot dog | quarter pound 4 oz |
| `/faq/without-membership/` | `without-membership.astro` | food court without membership | policy by location |

---

## 5. 规范 URL 与重定向（`astro.config.mjs`）

以下旧路径/重复路径会重定向到**主内容页**，做 SEO 时以**目标 URL** 为规范：

| 重定向源 | 目标 |
|----------|------|
| `/dietary/` 及 `/dietary/*` 多条 | 对应 `hot-dog/healthy`、`hot-dog/vegan`、`faq/*`、`ingredients/*` 等 |
| `/nutrition/`、`/nutrition/calories/` 等 | `/hot-dog/nutrition/`、`/hot-dog/calories/` 等 |
| `/price/`、`/price/price-increase/` | `/hot-dog/price/`、`/hot-dog/price-history/` |
| `/cooking/`、`/cooking/air-fryer/`、`/cooking/at-home/` | `/hot-dog/cooking-at-home/` 或 `/tutorials/air-fryer/` |
| `/business/`、`/business/why-so-cheap/`、`/business/history/` | `/hot-dog/history/` 或 `/hot-dog/why-so-cheap/` |
| `/faq/gluten-free/` 等 | `hot-dog` 或 `ingredients` 对应页 |
| `/hot-dog/air-fryer/` | `/tutorials/air-fryer/` |

完整列表以仓库内 `astro.config.mjs` 的 `redirects` 为准。

---

## 6. 动态菜单页：`/menu/[slug]/`

数据源：`src/src/content/menu-items.csv`（构建时 `getStaticPaths`）。

| Slug | 公开 URL | SEO 标题 | 简述关键词 |
|------|-----------|----------|------------|
| `hot-dog` | `/menu/hot-dog/` | Hot Dog \| Costco Food Court | $1.50 combo, all-beef, 20 oz drink |
| `pizza` | `/menu/pizza/` | Pizza \| Costco Food Court | 18-inch cheese pepperoni, pizza deal |
| `rotisserie-chicken` | `/menu/rotisserie-chicken/` | Rotisserie Chicken \| Costco Food Court | $4.99 chicken warehouse favorite |
| `ice-cream` | `/menu/ice-cream/` | Ice Cream \| Costco Food Court | vanilla waffle cone portion |
| `churro` | `/menu/churro/` | Churro \| Costco Food Court | cinnamon sugar |
| `chicken-bake` | `/menu/chicken-bake/` | Chicken Bake \| Costco Food Court | chicken bacon pizza dough |
| `acai-bowl` | `/menu/acai-bowl/` | Acai Bowl \| Costco Food Court | new item granola berries |

---

## 7. 内容资产补充

| 文件 | 用途 |
|------|------|
| `content/data/hotdog-prices.csv` | 价格地图等数据页 |
| `content/data/nutrition-data.csv` | 全店营养对比 |
| `content/data/crowd-prediction.json` | 人流预测 |
| `content/articles/best-costco-food-court-deals.md` | Markdown 内容（若未挂路由，可能供未来集合或内部使用；当前主要文章为 `pages/articles/*.astro`） |

---

## 8. 建设性说明（与导航一致）

1. **Articles 列表页**：主导航有「Articles → `/articles/`」，但 `src/src/pages/articles/` 下**无** `index.astro`。若线需文章索引，应新增该页或把导航改为指向首篇/分类页。  
2. **首页模块链接**：`index.astro` 中部分卡片指向 `/nutrition/`、`/dietary/`、`/cooking/` 等，这些路径多已由 **redirect** 归并到 `/hot-dog/*` 或 `/tutorials/*`；对站外分享建议直接用**重定向目标 URL**。  
3. **`/business/`** 与部分 `business` 子路径重定向到历史/战略页，与 `pages/business/index.astro` 的「Business Story」文案可能不一致，以**线上 redirect 行为**为最终用户体验。

---

*文档由仓库结构与生成的 `title`/`description`/`targetKeyword` 字段整理，随代码变更请同步更新本文件。*

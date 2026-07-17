## Context

`costcohotdogguide.com` 当前是一个基于 Astro 4 + Tailwind CSS 4 的静态站点，部署在 Cloudflare Pages。MVP 已完成 32 个页面，覆盖热狗 SEO 内容和基础变现栏目（`/reviews/`、`/guides/`、`/savings/`）。站点使用 JSON 数据文件管理 Affiliate 链接和广告配置，组件化架构支持快速扩展。

当前缺口：
- 缺少 AdSense 申请必需的合规页面（Privacy Policy、About、Contact）
- 产品评测仅覆盖 Vitamins 和 Kitchen Appliances，未覆盖 Camping Gear、Furniture、Bulk Foods
- 无用户留存机制（Newsletter）和数字产品收入流
- 无数据分析能力（未集成 GA4）
- 广告组件处于占位符模式，未接入真实广告网络

技术约束：
- 保持纯静态站点（SSG），不引入服务端渲染或数据库
- 所有第三方集成通过 embed/script 方式实现
- 保持构建产物在 Cloudflare Pages 免费额度内

## Goals / Non-Goals

**Goals:**
- 在 6 周内补齐 PRD 要求的完整变现体系
- 使站点满足 Google AdSense 申请条件
- 建立用户留存渠道（Newsletter）和数字产品收入流
- 建立可量化的数据监控基线

**Non-Goals:**
- 不引入后端服务或数据库（保持静态站点）
- 不实现用户认证/会员系统
- 不做多语言支持
- 不迁移到 Next.js 或其他框架

## Decisions

**1. 第三方服务选择**
- **Newsletter**: ConvertKit（推荐）或 Mailchimp。选择依据：ConvertKit 对内容创作者更友好，免费额度足够初期使用；Mailchimp 作为备选。
- **数字产品销售**: Gumroad。选择依据：零代码嵌入，支持 PDF 销售，与静态站点完美兼容。LemonSqueezy 作为备选但 Gumroad 更成熟。
- **Analytics**: Google Analytics 4。选择依据：免费、与 AdSense 生态打通、Search Console 集成。

**2. 页面生成策略**
- 合规页面和评测页面使用 `.astro` 静态页面，不引入 CMS。
- 理由：内容量可控（约 10 个新页面），Astro 组件化足够支撑，避免 CMS 带来的复杂性和成本。

**3. 广告配置切换机制**
- `ads.json` 保持单文件配置，通过 `enabled` 字段控制生产/开发模式。
- 理由：简单直观，无需环境变量或构建时注入，适合静态站点。

**4. Newsletter 嵌入方式**
- 使用第三方提供的 HTML embed form，而非自建表单。
- 理由：避免需要后端处理表单提交，保持纯静态架构。

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| Gumroad/ConvertKit 在国内访问受限 | 目标用户为美国 Costco 消费者，服务主要面向北美市场，不影响核心用户 |
| AdSense 申请被拒 | 确保 Privacy Policy 符合 GDPR/CCPA 要求，内容原创度充足 |
| 评测内容缺乏真实产品体验 | 基于公开资料和市场调研撰写，明确标注"基于研究"，避免虚假声明 |
| 广告过多影响用户体验 | 每页最多 3 个广告位，使用响应式格式避免布局偏移 |

## Migration Plan

1. **Phase 1（Week 1-2）**: 合规页面 + GA4 + Newsletter 组件
2. **Phase 2（Week 3-4）**: 产品评测扩展 + Gumroad 嵌入
3. **Phase 3（Week 5-6）**: 广告配置切换 + 全面测试 + 提交 AdSense 申请

Rollback: 所有变更是新增页面和组件，删除即可回滚，无数据迁移风险。

## Open Questions

- 用户是否已有 ConvertKit/Mailchimp 账号？（如没有，需指导注册）
- 用户是否已有 Gumroad 账号？（如没有，需指导注册）
- 用户是否已有 Google Analytics 4 属性？（如没有，需指导创建）

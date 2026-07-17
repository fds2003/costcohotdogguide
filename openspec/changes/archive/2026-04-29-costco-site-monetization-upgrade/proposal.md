## Why

`costcohotdogguide.com` MVP 已上线 32 个页面，但 PRD 要求的完整变现体系尚未完成。当前站点缺少 AdSense 合规页面、高客单价评测内容深度不足、没有用户留存机制（Newsletter）和数字产品收入流。需在 6 周内补齐这些缺口，使站点达到 PRD 设定的 6 个月目标基准线。

## What Changes

- 新增 3 个合规页面（Privacy Policy / About / Contact），满足 AdSense 申请硬性要求
- 扩展产品评测栏目：新增 Camping Gear、Furniture、Bulk Foods 3 个深度评测页，每页含 Review Schema 和 Amazon Affiliate 链接
- 集成 Newsletter 邮件订阅系统（ConvertKit/Mailchimp），建立用户留存渠道
- 上线数字产品：Costco 购物攻略 PDF（$9.99），通过 Gumroad 嵌入销售
- 集成 Google Analytics 4 追踪代码，建立数据监控基线
- 优化广告配置：将 `ads.json` 从占位符模式切换为生产模式，支持真实 AdSense ID 注入

## Capabilities

### New Capabilities
- `compliance-pages`: Privacy Policy、About、Contact 三个合规页面的内容生成与路由
- `product-review-expansion`: Camping Gear、Furniture、Bulk Foods 评测页面（Review Schema + Affiliate）
- `newsletter-subscription`: 邮件订阅组件集成（ConvertKit/Mailchimp embed）
- `digital-product-sales`: Gumroad 嵌入的购物攻略 PDF 销售页面
- `analytics-integration`: GA4 追踪代码的条件注入与事件埋点

### Modified Capabilities
- `ad-unit-management`: 现有 `AdUnit` 组件和 `ads.json` 需支持生产环境切换（enabled + 真实 ID）

## Impact

- 受影响文件：`src/pages/*`（新增页面）、`src/components/*`（Newsletter/GA4）、`src/data/ads.json`（配置变更）
- 外部依赖：Amazon Associates 账号、Gumroad 账号、ConvertKit/Mailchimp 账号、Google Analytics 4 属性
- 部署影响：静态页面增加，构建时间略微增加，无 breaking change

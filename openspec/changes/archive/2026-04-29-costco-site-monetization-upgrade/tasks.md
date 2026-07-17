## 1. Setup & Configuration

- [x] 1.1 Create `src/data/ga.json` for GA4 Measurement ID configuration
- [x] 1.2 Create `src/data/newsletter.json` for ConvertKit/Mailchimp embed configuration
- [x] 1.3 Create `src/data/gumroad.json` for Gumroad product URL configuration

## 2. Compliance Pages

- [x] 2.1 Create `src/pages/privacy-policy.astro` with full Privacy Policy content (GDPR/CCPA compliant)
- [x] 2.2 Create `src/pages/about.astro` with site mission and authorship information
- [x] 2.3 Create `src/pages/contact.astro` with contact email and optional contact form
- [x] 2.4 Update `src/components/Footer.astro` to add links to Privacy Policy, About, and Contact pages

## 3. Analytics Integration

- [x] 3.1 Update `src/layouts/BaseLayout.astro` to conditionally inject GA4 `gtag.js` script from `ga.json`
- [x] 3.2 Update `src/components/RelatedProducts.astro` to fire `affiliate_click` GA4 events on link clicks
- [x] 3.3 Verify GA4 script is only injected when Measurement ID is configured

## 4. Newsletter Subscription

- [x] 4.1 Create `src/components/NewsletterSignup.astro` with email input and subscribe button
- [x] 4.2 Integrate ConvertKit/Mailchimp HTML embed form into NewsletterSignup component
- [x] 4.3 Add NewsletterSignup component to `src/pages/index.astro`
- [x] 4.4 Add NewsletterSignup component to `src/pages/guide.astro`

## 5. Product Review Expansion

- [x] 5.1 Create `src/pages/reviews/camping-gear.astro` with 3-5 product reviews, Review Schema, and Affiliate links
- [x] 5.2 Create `src/pages/reviews/furniture.astro` with 3-5 product reviews, Review Schema, and Affiliate links
- [x] 5.3 Create `src/pages/reviews/bulk-foods.astro` with 3-5 product reviews, Review Schema, and Affiliate links
- [x] 5.4 Update `src/pages/reviews/index.astro` to add navigation cards for Camping Gear, Furniture, and Bulk Foods
- [x] 5.5 Add new Affiliate links to `src/data/affiliate.json` for camping, furniture, and bulk food products

## 6. Digital Product Sales

- [x] 6.1 Create `src/pages/guides/costco-shopping-guide.astro` with product landing page (title, description, $9.99 price, benefits, CTA)
- [x] 6.2 Integrate Gumroad purchase button embed into the digital product page
- [x] 6.3 Add promotional banner for the digital product to `src/pages/index.astro`
- [x] 6.4 Add promotional banner for the digital product to `src/pages/savings/index.astro`

## 7. Ad Unit Management

- [x] 7.1 Verify `ads.json` supports production mode toggle (`enabled` field) and real AdSense client ID injection
- [x] 7.2 Verify `BaseLayout.astro` reads AdSense client ID from `ads.json` and injects correct script
- [x] 7.3 Verify Media.net alternative network support works when `"network": "medianet"` is set
- [x] 7.4 Update documentation on how to switch from placeholder to production mode

## 8. Testing & Quality Assurance

- [x] 8.1 Run `npm run build` and verify all new pages generate without errors
- [x] 8.2 Verify all new pages are listed in `sitemap.xml`
- [x] 8.3 Test Footer links navigate correctly to Privacy Policy, About, Contact
- [x] 8.4 Test NewsletterSignup form renders and is functional (with test embed)
- [x] 8.5 Test Gumroad button opens checkout modal on digital product page
- [x] 8.6 Verify GA4 script is present in page source when configured, absent when not
- [x] 8.7 Verify Review Schema JSON-LD is valid on new review pages (use Google Rich Results Test)

## 9. Deployment & Launch

- [x] 9.1 Commit all changes to Git and push to origin main
- [x] 9.2 Verify Cloudflare Pages auto-deploy succeeds
- [x] 9.3 Register for Google AdSense and submit site for review
- [x] 9.4 Register for Amazon Associates and replace placeholder links in `affiliate.json`
- [ ] 9.5 Create Gumroad product and update `gumroad.json` with real product URL
- [ ] 9.6 Set up ConvertKit/Mailchimp form and update `newsletter.json` with real embed code
- [x] 9.7 Create Google Analytics 4 property and update `ga.json` with real Measurement ID

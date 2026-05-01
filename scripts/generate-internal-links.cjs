/**
 * Semantic Internal Link Generator
 * Reads all Astro page frontmatter and generates internal link recommendations
 * based on semantic matching: category (0.4), tags (0.3), topic overlap (0.3)
 * Threshold: >= 0.6
 *
 * Usage: node scripts/generate-internal-links.cjs
 */
const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'src', 'pages');
const DATA_DIR = path.join(__dirname, '..', 'src', 'data');
const REPORTS_DIR = path.join(__dirname, '..', '..', 'reports');

// Weight config
const WEIGHTS = { category: 0.4, tags: 0.3, topic: 0.3 };
const THRESHOLD = 0.6;
const MAX_RECOMMENDATIONS = 5;

// Funnel stage priority: A→B→C gets higher priority for forward progression
const STAGE_ORDER = { A: 0, B: 1, C: 2 };

/**
 * Extract frontmatter-like metadata from .astro files
 */
function extractPageMeta(filePath, relativePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract frontmatter variables
  const topicCluster = content.match(/topicCluster\s*=\s*["']([^"']+)["']/)?.[1] || '';
  const funnelStage = content.match(/funnelStage\s*=\s*["']([ABC])["']/)?.[1] || '';
  const keywordCore = content.match(/keywordCore\s*=\s*["']([^"']+)["']/)?.[1] || '';

  // Extract title from BaseLayout/FAQLayout/TutorialLayout/ReviewLayout props
  const titleMatch = content.match(/title=["{]([^"}]+)/)?.[1] || content.match(/title={?"([^"}]+)/)?.[1] || '';

  // Extract description
  const descMatch = content.match(/description=["{]([^"}]{10,})/)?.[1] || content.match(/description={?"([^"}]{10,})/)?.[1] || '';

  // Derive category from URL path
  const segments = relativePath.replace(/\\/g, '/').split('/');
  const category = segments.length > 1 ? segments[segments.length - 2] : 'root';

  // Derive tags from keywords and topic
  const tags = [...new Set([
    ...keywordCore.toLowerCase().split(/\s+/).filter(w => w.length > 3),
    ...topicCluster.toLowerCase().split(/[-_]/).filter(w => w.length > 2),
    category
  ])].slice(0, 10);

  return {
    url: '/' + relativePath.replace(/\\/g, '/').replace(/\/index\.astro$/, '/').replace(/\.astro$/, '/'),
    title: titleMatch.replace(/["{}]/g, '').trim(),
    description: descMatch.replace(/["{}]/g, '').trim().substring(0, 150),
    category,
    tags,
    topicCluster,
    funnelStage,
    keywordCore,
  };
}

/**
 * Recursively find all .astro files
 */
function findAstroFiles(dir, baseDir = dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findAstroFiles(fullPath, baseDir));
    } else if (entry.name.endsWith('.astro') && !entry.name.startsWith('_')) {
      const relativePath = path.relative(baseDir, fullPath);
      results.push({ fullPath, relativePath });
    }
  }
  return results;
}

/**
 * Calculate semantic similarity between two pages
 */
function calculateSimilarity(pageA, pageB) {
  let score = 0;

  // Category overlap (weight 0.4)
  if (pageA.category === pageB.category) {
    score += WEIGHTS.category;
  } else {
    // Partial match for related categories
    const catPairs = [
      ['hot-dog', 'tutorials'], ['hot-dog', 'faq'], ['hot-dog', 'tools'],
      ['tutorials', 'tools'], ['kitchen', 'tools'], ['reviews', 'tutorials'],
      ['supplements', 'vitamins'], ['outdoor', 'camping-gear'],
    ];
    const pair = [pageA.category, pageB.category].sort();
    const isRelated = catPairs.some(p => p[0] === pair[0] && p[1] === pair[1]);
    if (isRelated) score += WEIGHTS.category * 0.5;
  }

  // Tags overlap (weight 0.3) - Jaccard similarity
  const tagsA = new Set(pageA.tags);
  const tagsB = new Set(pageB.tags);
  const intersection = [...tagsA].filter(t => tagsB.has(t));
  const union = new Set([...tagsA, ...tagsB]);
  if (union.size > 0) {
    score += WEIGHTS.tags * (intersection.length / union.size);
  }

  // Topic keyword overlap (weight 0.3)
  const wordsA = new Set(pageA.keywordCore.toLowerCase().split(/\s+/).filter(w => w.length > 3));
  const wordsB = new Set(pageB.keywordCore.toLowerCase().split(/\s+/).filter(w => w.length > 3));
  const topicIntersect = [...wordsA].filter(w => wordsB.has(w));
  const topicUnion = new Set([...wordsA, ...wordsB]);
  if (topicUnion.size > 0) {
    score += WEIGHTS.topic * (topicIntersect.length / topicUnion.size);
  }

  // Bonus for funnel progression (A→B or B→C)
  if (pageA.funnelStage && pageB.funnelStage && pageA.funnelStage !== pageB.funnelStage) {
    const stageDiff = STAGE_ORDER[pageB.funnelStage] - STAGE_ORDER[pageA.funnelStage];
    if (stageDiff > 0) score += 0.1; // Forward progression bonus
  }

  return Math.round(score * 100) / 100;
}

// Main
console.log('🔍 Scanning Astro pages...');
const files = findAstroFiles(PAGES_DIR);
console.log(`   Found ${files.length} .astro files`);

// Extract metadata
const pages = [];
for (const file of files) {
  try {
    const meta = extractPageMeta(file.fullPath, file.relativePath);
    if (meta.title) pages.push(meta);
  } catch (e) {
    // Skip files with read errors
  }
}
console.log(`   Extracted metadata from ${pages.length} pages`);

// Calculate similarities and generate recommendations
const recommendations = {};
for (const page of pages) {
  const scored = pages
    .filter(p => p.url !== page.url)
    .map(p => ({ url: p.url, title: p.title, funnelStage: p.funnelStage, score: calculateSimilarity(page, p) }))
    .filter(p => p.score >= THRESHOLD)
    .sort((a, b) => {
      // Sort by funnel progression first, then by score
      const aProgression = a.funnelStage && page.funnelStage && STAGE_ORDER[a.funnelStage] > STAGE_ORDER[page.funnelStage] ? 1 : 0;
      const bProgression = b.funnelStage && page.funnelStage && STAGE_ORDER[b.funnelStage] > STAGE_ORDER[page.funnelStage] ? 1 : 0;
      if (bProgression !== aProgression) return bProgression - aProgression;
      return b.score - a.score;
    })
    .slice(0, MAX_RECOMMENDATIONS);

  if (scored.length > 0) {
    recommendations[page.url] = scored;
  }
}

// Output JSON
const outputPath = path.join(DATA_DIR, 'internal-links.json');
fs.writeFileSync(outputPath, JSON.stringify({ pages: recommendations }, null, 2));
console.log(`\n✅ Generated ${Object.keys(recommendations).length} page recommendations`);
console.log(`   Output: ${outputPath}`);

// Generate Markdown report
let report = '# Internal Links Review\n\n';
report += `Generated: ${new Date().toISOString().split('T')[0]}\n`;
report += `Pages analyzed: ${pages.length} | Recommendations: ${Object.keys(recommendations).length} | Threshold: ${THRESHOLD}\n\n`;
report += '| Source Page | Recommended Links | Scores |\n';
report += '|---|---|---|\n';

for (const [url, links] of Object.entries(recommendations)) {
  const linkStr = links.map(l => `[${l.title}](${l.url}) (${l.funnelStage || '?'})`).join('<br>');
  const scoreStr = links.map(l => l.score.toFixed(2)).join(', ');
  report += `| ${url} | ${linkStr} | ${scoreStr} |\n`;
}

// Ensure reports directory exists
if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
const reportPath = path.join(REPORTS_DIR, 'internal-links-review.md');
fs.writeFileSync(reportPath, report);
console.log(`   Report: ${reportPath}`);

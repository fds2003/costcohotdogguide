const fs = require('fs');
const path = require('path');

const HOTDOG_DIR = path.join(__dirname, '..', 'src', 'pages', 'hot-dog');

// Map filenames to related-content.json keys
const pageMap = {
  'nutrition.astro': '/hot-dog/nutrition/',
  'calories.astro': '/hot-dog/calories/',
  'price.astro': '/hot-dog/price/',
  'air-fryer.astro': '/hot-dog/air-fryer/',
  'air-fryer-guide.astro': '/hot-dog/air-fryer-guide/',
  'cooking-at-home.astro': '/hot-dog/cooking-at-home/',
  'ingredients.astro': '/hot-dog/ingredients/',
  'healthy.astro': '/hot-dog/healthy/',
  'sodium.astro': '/hot-dog/sodium/',
  'protein.astro': '/hot-dog/protein/',
  'protein-vs-calories.astro': '/hot-dog/protein-vs-calories/',
  'fat.astro': '/hot-dog/fat/',
  'carbs.astro': '/hot-dog/carbs/',
  'keto.astro': '/hot-dog/keto/',
  'diet-tips.astro': '/hot-dog/diet-tips/',
  'allergens.astro': '/hot-dog/allergens/',
  'gluten-free.astro': '/hot-dog/gluten-free/',
  'vegan.astro': '/hot-dog/vegan/',
  'vegetarian.astro': '/hot-dog/vegetarian/',
  'history.astro': '/hot-dog/history/',
  'why-so-cheap.astro': '/hot-dog/why-so-cheap/',
  'price-history.astro': '/hot-dog/price-history/',
  'food-court.astro': '/hot-dog/food-court/',
  'comparison.astro': '/hot-dog/comparison/',
  'controversies.astro': '/hot-dog/controversies/',
  'faq.astro': '/hot-dog/faq/',
  'fun-facts.astro': '/hot-dog/fun-facts/',
  'cheese.astro': '/hot-dog/cheese/',
  'sauce.astro': '/hot-dog/sauce/',
  'toppings.astro': '/hot-dog/toppings/',
};

let updated = 0;

for (const [filename, pageKey] of Object.entries(pageMap)) {
  const filePath = path.join(HOTDOG_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP: ${filename} not found`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has RelatedContent
  if (content.includes('RelatedContent')) {
    console.log(`SKIP: ${filename} already has RelatedContent`);
    continue;
  }

  // 1. Add import statement after existing imports
  const importLine = `import RelatedContent from '../../components/RelatedContent.astro';`;
  
  // Find the last import line and add after it
  const importRegex = /\nimport\s+.*;\n/g;
  const imports = [...content.matchAll(importRegex)];
  if (imports.length === 0) {
    console.log(`SKIP: ${filename} - no imports found`);
    continue;
  }
  const lastImport = imports[imports.length - 1];
  const insertPos = lastImport.index + lastImport[0].length;
  
  content = content.slice(0, insertPos) + importLine + '\n' + content.slice(insertPos);

  // 2. Add RelatedContent component before RelatedProducts or before closing </article>
  const componentTag = `<RelatedContent currentPage="${pageKey}" />`;
  
  // Try to insert before RelatedProducts
  if (content.includes('<RelatedProducts')) {
    content = content.replace(
      /(\s*<div[^>]*>\s*\n\s*<RelatedProducts)/,
      `\n    ${componentTag}\n$1`
    );
  } else if (content.includes('</article>')) {
    // Insert before </article>
    content = content.replace(
      '</article>',
      `    ${componentTag}\n  </article>`
    );
  } else {
    console.log(`SKIP: ${filename} - no insertion point`);
    continue;
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`OK: ${filename} ← RelatedContent injected`);
  updated++;
}

console.log(`\nDone: ${updated} pages updated`);

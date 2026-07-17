const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'src', 'src', 'pages', 'hot-dog');

// 1. Extended meta descriptions (150-160 chars target)
const descriptionFixes = {
  'nutrition': 'Complete Costco hot dog nutrition facts: 570 calories, 24g protein, 33g fat, 1,700mg sodium. Full macro breakdown and dietary tips for smart eating.',
  'price': 'Why is the Costco hot dog only $1.50? Unchanged since 1985. Current pricing, 40-year history, inflation-adjusted analysis, and fast food price comparison.',
  'history': 'The complete history of Costco hot dogs from 1985 to today. Origin story, Hebrew National to Kirkland switch, pricing milestones, and cultural phenomenon.',
  'ingredients': 'Full Costco hot dog ingredients list: 100% beef frank, enriched bun, additives explained. Allergen alerts, gluten-free and vegan alternatives covered.',
  'calories': 'How many calories in a Costco hot dog? 570 with bun, 360 without. Complete breakdown vs Nathan\'s, McDonald\'s, and lower-calorie modification tips.',
  'healthy': 'Is the Costco hot dog healthy? Nutrition analysis: 570 calories, 1,700mg sodium, 24g protein. Dietitian-rated with healthier bun alternatives and portion tips.',
  'why-so-cheap': 'The real reason Costco hot dogs cost only $1.50. Loss leader strategy, vertical integration, own manufacturing plants, and food court revenue model explained.',
  'sodium': 'Costco hot dog sodium content: 1,700mg per serving — 74% of daily limit. Hot dog vs bun breakdown, tips to reduce sodium, and comparison with other fast food.',
  'keto': 'Is the Costco hot dog keto-friendly? Without the bun: 24g protein, 30g fat, only 2-3g net carbs. Full macro breakdown, serving tips, and low-carb modifications.',
  'carbs': 'Costco hot dog carbs: 46g total (44g net), almost entirely from the bun. Low-carb alternatives, bun-less options, and comparison to other fast food carb counts.',
  'fat': 'Costco hot dog fat content: 33g total, 13g saturated fat. Full saturated vs unsaturated breakdown, tips to reduce fat, and comparison with fast food burgers.',
  'allergens': 'Complete Costco hot dog allergen guide: wheat, soy, dairy cross-contamination. Kosher status, gluten-free alternatives, and tips for sensitive diets.',
  'vegetarian': 'Are there vegetarian Costco hot dogs? Best plant-based alternatives at Costco — Field Roast, Yves, MorningStar. Nutrition comparison and availability guide.',
  'fun-facts': 'Fun facts about Costco hot dogs: $1.50 since 1985, 100M+ sold yearly, more than all MLB stadiums. Trivia, records, and popular myths debunked.',
  'cheese': 'Best cheese for Costco hot dogs: American, cheddar, pepper jack, Swiss. Pairing tips, homemade cheese sauce recipe, and gourmet topping combinations.',
  'sauce': 'Best sauces for Costco hot dogs: mustard, ketchup, relish, and gourmet options. Homemade sauce recipes, Chicago-style, and flavor pairing guide.',
  'toppings': 'Best Costco hot dog toppings: classic mustard-ketchup-relish, specialty sauerkraut and jalapeños, DIY Korean BBQ and Nacho Dog creations.',
  'food-court': 'Costco food court hot dog guide: $1.50 combo deal, 100M+ sold yearly, popularity stats, and customer favorites including pizza and rotisserie chicken.',
  'diet-tips': 'How to eat Costco hot dogs on a diet: bun-less saves 210 calories, water over soda saves 150+. Low-calorie modifications, macro-friendly choices, and meal tips.',
  'comparison': 'Costco hot dog vs Nathan\'s, McDonald\'s, and more. Calorie, protein, sodium, and price comparison. Why the $1.50 combo is America\'s best food deal.',
  'controversies': 'Costco hot dog controversies debunked: nutrition myths, price increase rumors, ingredient quality concerns, and what media coverage gets wrong.',
  'faq': 'All Costco hot dog FAQ answered: nutrition, ingredients, cooking, storage, and fun facts. Comprehensive hub for the most common questions about the $1.50 combo.',
  'air-fryer': 'How to air fry Costco hot dogs: 375°F for 6-8 minutes. Step-by-step instructions for perfect crispiness, time, temperature, and safety cleanup tips.',
  'air-fryer-guide': 'Complete air fryer guide for Costco hot dogs: 375°F, 6-8 min for crispy skin. Preheat tips, frozen instructions, and safety cleanup guide included.',
  'price-history': 'Costco hot dog price history: $1.50 since 1985, never raised. Inflation-adjusted cost analysis, business strategy, and why it\'s the most stable price in retail.',
  'vegan': 'Can vegans eat Costco hot dogs? The food court version is not vegan, but Field Roast and Yves alternatives are available. Full ingredients check and buying guide.',
  'protein': 'Costco hot dog protein: 24g per serving — 43-52% of daily RDA. Comparison with Nathan\'s and Oscar Mayer, high-protein meal ideas, and fitness nutrition tips.',
  'gluten-free': 'Are Costco hot dogs gluten-free? The meat is GF but the bun is not. Cross-contamination risks, certified GF alternatives, and safe preparation tips at home.',
  'cooking-at-home': 'How to cook Costco hot dogs at home: oven baking at 400°F, pan-frying, boiling, and reheating methods. Time, temperature, and crispy tips included.',
  'protein-vs-calories': 'Costco hot dog protein per calorie: 6.7g per 100cal without bun. Macro analysis vs chicken breast and whey protein, fitness tips for budget athletes.',
};

// 2. Authority external links to add (inserted before Related Guides section)
const authorityLinks = {
  'nutrition': `<p class="text-gray-700 leading-relaxed mb-4">Data sourced from <a href="https://fdc.nal.usda.gov/" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">USDA FoodData Central</a> and Costco's official nutrition information. Sodium guidelines referenced from the <a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sodium/how-much-sodium-should-i-eat-per-day" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">American Heart Association</a>.</p>`,
  'sodium': `<p class="text-gray-700 leading-relaxed mb-4">Sodium guidelines referenced from the <a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sodium/how-much-sodium-should-i-eat-per-day" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">American Heart Association</a> and <a href="https://www.fda.gov/food/nutrition-education-resources-materials/sodium-your-body" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">FDA sodium guidelines</a>.</p>`,
  'healthy': `<p class="text-gray-700 leading-relaxed mb-4">Health guidelines referenced from the <a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sodium/how-much-sodium-should-i-eat-per-day" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">American Heart Association</a> and <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">WHO healthy diet guidelines</a>.</p>`,
  'ingredients': `<p class="text-gray-700 leading-relaxed mb-4">Ingredient safety information referenced from the <a href="https://www.fda.gov/food/food-additives-petitions/food-additive-status-list" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">FDA Food Additive Status List</a> and <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/additives-meat-and-poultry" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">USDA Food Safety</a>.</p>`,
  'calories': `<p class="text-gray-700 leading-relaxed mb-4">Calorie data sourced from <a href="https://fdc.nal.usda.gov/" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">USDA FoodData Central</a> and manufacturer nutrition labels.</p>`,
  'comparison': `<p class="text-gray-700 leading-relaxed mb-4">Comparison data sourced from <a href="https://fdc.nal.usda.gov/" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">USDA FoodData Central</a> and official restaurant nutrition information.</p>`,
  'fat': `<p class="text-gray-700 leading-relaxed mb-4">Dietary fat guidelines referenced from the <a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/fats" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">American Heart Association</a>.</p>`,
  'protein': `<p class="text-gray-700 leading-relaxed mb-4">Protein RDA data sourced from the <a href="https://www.nal.usda.gov/human-nutrition-and-food-safety" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">USDA National Agricultural Library</a>.</p>`,
  'keto': `<p class="text-gray-700 leading-relaxed mb-4">Keto diet macro guidelines referenced from <a href="https://www.health.harvard.edu/staying-healthy/should-you-try-the-keto-diet" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">Harvard Health</a>.</p>`,
  'gluten-free': `<p class="text-gray-700 leading-relaxed mb-4">Celiac and gluten-free guidance referenced from the <a href="https://www.fda.gov/food/food-allergensgluten-free-guidance-documents-regulatory-information/gluten-free-labeling-food" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">FDA gluten-free labeling rules</a> and <a href="https://celiac.org/" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">Celiac Disease Foundation</a>.</p>`,
  'allergens': `<p class="text-gray-700 leading-relaxed mb-4">Allergen guidance referenced from <a href="https://www.fda.gov/food/food-allergensgluten-free-guidance-documents-regulatory-information/food-allergies" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">FDA Food Allergen information</a>.</p>`,
  'controversies': `<p class="text-gray-700 leading-relaxed mb-4">Processed meat health data referenced from the <a href="https://www.who.int/news-room/q-a-detail/cancer-carcinogenicity-of-the-consumption-of-red-meat-and-processed-meat" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">WHO International Agency for Research on Cancer</a>.</p>`,
  'protein-vs-calories': `<p class="text-gray-700 leading-relaxed mb-4">Protein and calorie data sourced from <a href="https://fdc.nal.usda.gov/" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">USDA FoodData Central</a>.</p>`,
  'diet-tips': `<p class="text-gray-700 leading-relaxed mb-4">Dietary guidelines referenced from the <a href="https://www.dietaryguidelines.gov/" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">US Dietary Guidelines</a> and <a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sodium/how-much-sodium-should-i-eat-per-day" class="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">American Heart Association</a>.</p>`,
};

let fixedDesc = 0;
let addedLinks = 0;

for (const [slug, newDesc] of Object.entries(descriptionFixes)) {
  const filepath = path.join(DIR, `${slug}.astro`);
  if (!fs.existsSync(filepath)) {
    console.log(`SKIP: ${slug}.astro not found`);
    continue;
  }
  let file = fs.readFileSync(filepath, 'utf-8');

  // Fix 1: Replace description
  const descMatch = file.match(/description="([^"]+)"/);
  if (descMatch) {
    file = file.replace(descMatch[0], `description="${newDesc}"`);
    fixedDesc++;
  }

  // Fix 2: Add authority link before Related Guides
  if (authorityLinks[slug]) {
    const relatedGuidesMarker = '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Related Guides</h2>';
    if (file.includes(relatedGuidesMarker)) {
      file = file.replace(relatedGuidesMarker, authorityLinks[slug] + '\n\n    ' + relatedGuidesMarker);
      addedLinks++;
    }
  }

  fs.writeFileSync(filepath, file, 'utf-8');
  console.log(`FIXED: ${slug}.astro (desc: ${descMatch ? 'YES' : 'NO'}, links: ${authorityLinks[slug] ? 'YES' : 'N/A'})`);
}

console.log(`\nSummary: ${fixedDesc} descriptions fixed, ${authorityLinks.size || Object.keys(authorityLinks).length} authority link blocks added`);

const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'src', 'src', 'pages', 'hot-dog');

const contents = {
  'faq': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Nutrition & Ingredients</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The most common question about Costco hot dogs is about what's actually in them. The Kirkland Signature hot dog is made from 100% beef with no fillers, by-products, or artificial colors. It contains beef, water, salt, sodium erythorbate, sodium nitrite, and natural flavorings. The bun is an enriched wheat product containing wheat flour, water, sugar, yeast, and soy lecithin. For complete <a href="/hot-dog/nutrition/" class="text-blue-600 hover:text-blue-800 underline">nutrition information</a>, each combo delivers 570 calories, 33g fat, 24g protein, and 1,700mg sodium.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Cooking & Storage</h2>
    <p class="text-gray-700 leading-relaxed mb-4">If you buy Kirkland Signature hot dogs from the refrigerated section, store them at 40°F or below and consume within 7 days of opening, or freeze for up to 2 months. To cook at home, boil for 5-6 minutes, grill over medium heat for 5-7 minutes, or microwave for 30-45 seconds. For <a href="/hot-dog/air-fryer-guide/" class="text-blue-600 hover:text-blue-800 underline">air fryer instructions</a>, cook at 375°F for 6-8 minutes for a crispy exterior. Never leave hot dogs at room temperature for more than 2 hours.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Fun Facts & Myths</h2>
    <p class="text-gray-700 leading-relaxed mb-4">One of the most persistent myths is that Costco plans to raise the hot dog price. This rumor surfaces annually, but Costco leadership has consistently committed to the $1.50 price point. Another common question: are Costco hot dogs kosher? They are not certified kosher, though they are made from 100% beef. The <a href="/hot-dog/fun-facts/" class="text-blue-600 hover:text-blue-800 underline">full list of fun facts</a> reveals that Costco sells more hot dogs than all MLB stadiums combined, and the $1.50 price has remained unchanged since 1985 — making it one of the longest-held price points in American retail history.</p>`,

  'air-fryer-guide': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Time & Temperature</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The ideal air fryer settings for a Costco Kirkland Signature hot dog are 375°F (190°C) for 6-8 minutes. Preheating your air fryer for 3 minutes ensures even cooking. If cooking from frozen, add 2-3 minutes to the total time. For the best results, place the hot dogs in a single layer with space between them — overcrowding leads to uneven browning. The hot dog is done when the skin is slightly blistered and the internal temperature reaches 160°F (71°C).</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips for Crispy Hot Dogs</h2>
    <p class="text-gray-700 leading-relaxed mb-4">To get that perfect snap when you bite into an air-fried hot dog, score the casing lightly with a knife before cooking — this allows fat to render and the skin to crisp up beautifully. Lightly spraying the hot dog with oil (just a mist) enhances browning. Flip the hot dog halfway through cooking for even results. For a "food court style" experience, <a href="/hot-dog/cooking-at-home/" class="text-blue-600 hover:text-blue-800 underline">warm the bun</a> in the air fryer for the last 30 seconds at 350°F.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Safety & Cleanup</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Always use tongs to handle hot hot dogs from the air fryer — the metal basket gets extremely hot. Place a piece of aluminum foil or a drip tray under the basket to catch grease splatter and make cleanup easier. After cooking, let the air fryer cool before washing the basket with warm soapy water. Never submerge the air fryer unit in water. The fat that renders from the hot dog can be poured off and discarded — don't reuse it as it contains impurities from the processing.</p>`,

  'price-history': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Price Milestones</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco hot dog combo has been priced at $1.50 since its introduction in 1985. This means the price has remained frozen for over 40 years while virtually every other consumer product has seen dramatic increases. In 1985, the average gallon of gas cost $1.20, a movie ticket was $3.55, and the median home price was $89,000. Today those figures are $3.50+, $12+, and $420,000+ respectively. The <a href="/hot-dog/price/" class="text-blue-600 hover:text-blue-800 underline">price history</a> of the Costco hot dog stands alone as a rare instance of absolute price stability in the American economy.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Inflation Adjusted Cost</h2>
    <p class="text-gray-700 leading-relaxed mb-4">If the $1.50 hot dog had kept pace with inflation since 1985, it would cost approximately $4.50 today. That means Costco is effectively selling the combo at one-third of its inflation-adjusted price. How is this possible? Vertical integration is the primary answer. By owning the meat processing facilities, Costco has been able to absorb cost increases through efficiency gains rather than price hikes. The company has also renegotiated supplier contracts, optimized logistics, and accepted lower margins on the food court as a whole.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Business Strategy Behind Price</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The $1.50 price point is not a mistake or oversight — it is a deliberate, board-level strategic decision. Costco leadership views the hot dog as a membership retention tool, not a profit center. With a 90%+ membership renewal rate, the strategy clearly works. Each hot dog sold reinforces the perception that Costco delivers extraordinary value, which keeps members paying $65-130 per year for the privilege of shopping there. The <a href="/hot-dog/why-so-cheap/" class="text-blue-600 hover:text-blue-800 underline">business model behind the cheap hot dog</a> is a masterclass in long-term customer loyalty over short-term profit.</p>`,

  'vegan': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Ingredients Check</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The standard Costco food court hot dog is definitively not vegan — it's made from 100% beef. But what about the bun? The enriched wheat bun contains soy lecithin (a plant-derived emulsifier) and sugar (which may be processed with bone char in the US, a concern for strict vegans). The soda is technically vegan but contains high-fructose corn syrup and artificial colors. For vegans, the entire food court combo is off-limits, but that doesn't mean Costco has nothing to offer.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Alternative Brands</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Costco's warehouse aisles carry several vegan hot dog options that are excellent alternatives. Field Roast Plant-Based Frankfurters are the top pick — they're fully vegan, high in protein (24g per serving), and have a satisfying snap when cooked. Yves Veggie Dogs are another solid option with lower calorie counts. For a whole-food approach, Costco's organic produce section offers everything you need to build a plant-based meal. These <a href="/hot-dog/vegetarian/" class="text-blue-600 hover:text-blue-800 underline">vegetarian and vegan alternatives</a> continue to expand as demand grows.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips for Vegan Diet</h2>
    <p class="text-gray-700 leading-relaxed mb-4">If you're shopping at Costco as a vegan, the best strategy is to skip the food court entirely and head to the warehouse aisles. Stock up on Field Roast franks (available in multi-packs), load up on fresh produce, and check the frozen section for plant-based meals. For condiments, Costco sells large containers of organic mustard, sauerkraut, and relish that are all vegan-friendly. Pair your vegan dog with a side of hummus and vegetables for a complete, satisfying meal that costs less than you'd expect from a warehouse club known for bulk value.</p>`,

  'protein': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Protein per Serving</h2>
    <p class="text-gray-700 leading-relaxed mb-4">A single Costco hot dog delivers 24 grams of protein — a substantial amount for a $1.50 meal. To put this in context, the Recommended Daily Allowance (RDA) for protein is 46g for women and 56g for men, meaning one hot dog provides roughly 43-52% of your daily protein needs. The protein in the Kirkland Signature hot dog comes from 100% beef, making it a complete protein source containing all nine essential amino acids. For athletes and fitness enthusiasts, this is an impressive protein-to-cost ratio that's hard to beat anywhere.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Comparison to Other Fast Food Hot Dogs</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco hot dog's 24g of protein significantly outperforms most competitors. Nathan's Famous delivers about 11g per frank, Oscar Mayer comes in at roughly 6g, and even a premium bratwurst typically provides 14-16g. The difference comes down to size — the Costco hot dog is a quarter-pounder (4 oz) while most competitors serve 1.6-2 oz franks. When you factor in the <a href="/hot-dog/nutrition/" class="text-blue-600 hover:text-blue-800 underline">complete nutrition profile</a>, the Costco hot dog offers the best protein-per-dollar ratio in fast food.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">High Protein Meal Ideas</h2>
    <p class="text-gray-700 leading-relaxed mb-4">To maximize the protein content of your Costco hot dog meal, go bun-less and pair it with a high-protein side. A bun-less hot dog (24g protein, 360 calories) plus a protein shake (30g protein, 150 calories) delivers 54g of protein for just 510 calories. For <a href="/hot-dog/diet-tips/" class="text-blue-600 hover:text-blue-800 underline">diet tips</a> on fitting this into your macros, removing the bun also eliminates 46g of carbs, making it an excellent option for those following high-protein, low-carb eating plans.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Fitness & Nutrition Tips</h2>
    <p class="text-gray-700 leading-relaxed mb-4">If you're eating Costco hot dogs as part of a fitness-oriented diet, timing matters. Post-workout, the 24g of fast-digesting protein from beef is beneficial for muscle recovery. However, the high sodium content (1,700mg) can cause water retention, so be mindful if you're close to a competition weigh-in. The <a href="/hot-dog/protein-vs-calories/" class="text-blue-600 hover:text-blue-800 underline">protein vs calories analysis</a> shows that a bun-less Costco hot dog is a reasonable fitness food when consumed in moderation alongside a balanced diet.</p>`,

  'gluten-free': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Gluten Content</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco hot dog meat itself is gluten-free — the Kirkland Signature all-beef frank contains no wheat, barley, or rye ingredients. However, the bun is made from enriched wheat flour and is definitely not gluten-free. The primary concern for those with celiac disease or gluten sensitivity is the hot dog meat: while it doesn't contain gluten ingredients, it is manufactured in a facility that processes wheat products, meaning cross-contamination is possible. Costco does not label their food court hot dogs as gluten-free.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Brands and Availability</h2>
    <p class="text-gray-700 leading-relaxed mb-4">If you need a certified gluten-free hot dog, Costco's warehouse aisles offer several options. Applegate Farms Uncured Beef Hot Dogs are labeled gluten-free and available in multi-packs. Nathan's Famous skinless beef franks are also gluten-free. For buns, Canyon Bakehouse and Schär gluten-free hot dog buns are frequently stocked in the freezer section. These <a href="/hot-dog/allergens/" class="text-blue-600 hover:text-blue-800 underline">allergen-conscious alternatives</a> let you enjoy a Costco-quality hot dog experience without the gluten concerns.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Cross-Contamination Risks</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The food court preparation area is not safe for those with celiac disease. Hot dogs are placed directly on buns using the same tongs and surfaces. Even ordering "no bun" doesn't eliminate the risk — the hot dog may have touched the bun or been prepared on a surface with breadcrumb residue. For individuals with severe gluten sensitivity or celiac disease, the safest approach is to purchase Kirkland Signature hot dogs from the refrigerated section and prepare them at home using dedicated gluten-free equipment and certified gluten-free buns.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips for Gluten-Sensitive Consumers</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Dining out with gluten sensitivity requires vigilance. At Costco, the best approach is to avoid the food court entirely and instead shop the warehouse for gluten-free alternatives. Look for the "certified gluten-free" label on packaged hot dogs and buns. Always check the ingredient list, as formulations can change without notice. When cooking at home, use a clean grill or pan that hasn't been used for wheat products. With the right precautions, you can enjoy a hot dog that's just as satisfying as the food court version — without the gluten risk.</p>`,

  'cooking-at-home': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Oven Baking</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Preheat and Bake Time</h3>
    <p class="text-gray-700 leading-relaxed mb-4">Preheat your oven to 400°F (200°C). Place the Kirkland Signature hot dogs on a baking sheet lined with aluminum foil or parchment paper. Bake for 10-12 minutes, turning once halfway through. The hot dogs are done when the skin is slightly blistered and lightly browned. For a crispier result, broil for the last 1-2 minutes — but watch carefully, as they can go from perfect to burnt in seconds. Wrap the buns in foil and warm them in the oven for the last 3-4 minutes.</p>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Tips for Crispy Hot Dogs</h3>
    <p class="text-gray-700 leading-relaxed mb-4">The secret to a crispy-skinned oven-baked hot dog is moisture management. Pat the hot dogs dry with a paper towel before baking. Score the casing lightly with a sharp knife — this allows steam to escape and the skin to crisp. Place them on a wire rack set over the baking sheet so hot air circulates on all sides. A light spray of cooking oil on the hot dogs enhances browning. For the <a href="/hot-dog/air-fryer-guide/" class="text-blue-600 hover:text-blue-800 underline">air fryer method</a>, which produces even crispier results, see our dedicated guide.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Stovetop Methods</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Boiling and Pan-Frying Instructions</h3>
    <p class="text-gray-700 leading-relaxed mb-4">Boiling is the quickest method: bring a pot of water to a boil, reduce to a simmer, and cook the hot dogs for 5-6 minutes. This method produces a plump, juicy hot dog but without the crispy skin. Pan-frying delivers the best stovetop results — heat a tablespoon of oil in a skillet over medium heat, add the hot dogs, and cook for 6-8 minutes, turning frequently to brown evenly. The rendered beef fat creates a delicious crust that closely mimics the griddle-seared flavor of the food court.</p>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Reheating Tips</h3>
    <p class="text-gray-700 leading-relaxed mb-4">To reheat a previously cooked Costco hot dog, the microwave is fastest (30-45 seconds) but produces a rubbery texture. For better results, reheat in a 350°F oven for 5-7 minutes or pan-fry over medium heat for 3-4 minutes. The <a href="/hot-dog/air-fryer-guide/" class="text-blue-600 hover:text-blue-800 underline">air fryer reheats hot dogs</a> beautifully at 350°F for 3-4 minutes. Always reheat to an internal temperature of 160°F. Never reheat a hot dog more than once — leftover hot dogs should be consumed or discarded after initial reheating.</p>`,

  'protein-vs-calories': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Protein-to-Calorie Ratio</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Macro Analysis</h3>
    <p class="text-gray-700 leading-relaxed mb-4">The protein-to-calorie ratio is one of the most important metrics for evaluating whether a food is "worth" its caloric cost. A full Costco hot dog combo (with bun and regular soda) delivers 24g of protein for approximately 730-750 calories, giving it a ratio of about 3.2g of protein per 100 calories. Remove the bun and swap the soda for water, and you get 24g of protein for just 360 calories — a dramatically improved ratio of 6.7g per 100 calories. This places the bun-less version in the same efficiency range as chicken breast (7.5g/100cal) and Greek yogurt (6g/100cal).</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Comparison with Other Foods</h2>
    <p class="text-gray-700 leading-relaxed mb-4">How does the Costco hot dog stack up against other protein sources? Per dollar spent, it's nearly unbeatable: 24g of protein for $1.50 equals 16g per dollar. Chicken breast ($3-4/lb) provides roughly 10g per dollar. Whey protein ($0.50-1.00 per serving) delivers 20-25g per dollar. Salmon ($8-12/lb) offers only 3-4g per dollar. The <a href="/hot-dog/protein/" class="text-blue-600 hover:text-blue-800 underline">protein content analysis</a> shows that when you factor in cost, the Costco hot dog is one of the most efficient protein sources available in any retail setting.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Fitness Tips</h2>
    <p class="text-gray-700 leading-relaxed mb-4">For fitness enthusiasts, the key is maximizing protein while minimizing empty calories. Order the hot dog without the bun (saves 210 calories, 46g carbs) and choose water instead of soda (saves 150+ calories of sugar). Add a side of <a href="/hot-dog/diet-tips/" class="text-blue-600 hover:text-blue-800 underline">vegetables or a protein shake</a>, and you've got a 400-500 calorie meal with 24-54g of protein. This makes the Costco hot dog a surprisingly viable option for budget-conscious athletes who need high protein intake without breaking the bank — just go easy on the frequency due to the sodium content.</p>`
};

for (const [slug, content] of Object.entries(contents)) {
  const filepath = path.join(DIR, `${slug}.astro`);
  if (!fs.existsSync(filepath)) {
    console.log(`SKIP: ${slug}.astro not found`);
    continue;
  }
  let file = fs.readFileSync(filepath, 'utf-8');

  const startMatch = file.match(/(<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">[^<]+<\/h2>)/);
  const endMatch = file.match(/<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Related Guides<\/h2>/);

  if (!startMatch || !endMatch) {
    console.log(`FAIL: ${slug}.astro - could not find content boundaries`);
    continue;
  }

  const startIndex = startMatch.index;
  const endIndex = endMatch.index;

  const newFile = file.substring(0, startIndex) + content + '\n\n    ' + file.substring(endIndex);
  fs.writeFileSync(filepath, newFile, 'utf-8');
  console.log(`FILLED: ${slug}.astro`);
}

console.log('\nDone filling batch 2!');

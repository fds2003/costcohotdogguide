const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'src', 'src', 'pages', 'hot-dog');

const contents = {
  'calories': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Calorie Breakdown</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Calories per Serving</h3>
    <p class="text-gray-700 leading-relaxed mb-4">A complete Costco hot dog combo — the Kirkland Signature quarter-pound beef frank on an enriched wheat bun with a 20 oz fountain drink — contains approximately 570-750 calories total. The hot dog meat alone accounts for about 360 calories, the bun adds roughly 210 calories, and a regular Coca-Cola contributes approximately 150-200 more calories depending on ice and fill level. Without the drink, the hot dog and bun alone are 570 calories — comparable to a McDonald's Big Mac (550 calories) but with significantly more protein.</p>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Calories in Bun vs Sausage</h3>
    <p class="text-gray-700 leading-relaxed mb-4">Breaking down the calorie sources reveals that the hot dog itself contributes approximately 63% of the total calories (360 of 570), while the bun accounts for the remaining 37% (210 calories). The hot dog's calories come primarily from fat (30g × 9cal/g = 270 calories from fat, 75% of the meat calories). The bun's calories are almost entirely from carbohydrates (46g × 4cal/g = 184 calories from carbs, 88% of the bun calories). This breakdown shows that simply removing the bun reduces total calories by 37% while preserving all the protein content.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Comparisons</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Calories Compared to Other Fast Food Hot Dogs</h3>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco hot dog is significantly higher in calories than most other hot dogs — but that's because it's significantly larger. A Nathan's Famous beef frank with bun contains about 310 calories (roughly half), but the Nathan's dog is only 1.8 oz versus Costco's 4 oz quarter-pounder. Per ounce, the Costco hot dog delivers about 90 calories compared to Nathan's 86 — nearly identical calorie density. Other fast food comparisons: a Wendy's junior hamburger (280 calories), a Taco Bell crunchy taco (170 calories), or a Chick-fil-A original sandwich (420 calories). The Costco hot dog beats all of them on calories-per-dollar by a wide margin.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Lower-Calorie Options</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Lower-Calorie Modifications</h3>
    <p class="text-gray-700 leading-relaxed mb-4">The most effective calorie reduction is removing the bun (saves 210 calories). Skip the soda for water (saves 150-200 calories). These two changes alone bring the meal from 730+ calories down to just 360 calories while keeping all 24g of protein. Other modifications: eat half the bun (saves 105 calories), use mustard instead of ketchup (saves 17 calories per tablespoon), and choose Diet Coke instead of regular (saves 150+ calories). For more <a href="/hot-dog/diet-tips/" class="text-blue-600 hover:text-blue-800 underline">diet-friendly strategies</a>, see our comprehensive guide.</p>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Meal Pairing Suggestions</h3>
    <p class="text-gray-700 leading-relaxed mb-4">Balance your Costco hot dog with low-calorie sides from the warehouse. A large garden salad with oil and vinegar dressing adds only 80-120 calories but provides fiber, vitamins, and satiety. Fresh fruit from the produce section (an apple or banana) adds 80-100 calories of natural energy. The <a href="/hot-dog/healthy/" class="text-blue-600 hover:text-blue-800 underline">healthiest approach</a> is to treat the hot dog as the protein centerpiece of a meal that includes fresh vegetables and whole foods — not as a standalone meal consumed multiple times per week.</p>`,

  'air-fryer': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Recommended Settings</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Preheat Temperature</h3>
    <p class="text-gray-700 leading-relaxed mb-4">For the best results with Kirkland Signature hot dogs, preheat your air fryer to 375°F (190°C) for 3 minutes before adding the hot dogs. This preheating step ensures the cooking chamber reaches a consistent temperature, which leads to even browning and a satisfying skin snap. If your air fryer doesn't have a preheat function, simply run it at 375°F for 3 minutes empty. For frozen hot dogs, you can skip preheating and add 2-3 minutes to the cooking time.</p>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Cooking Time</h3>
    <p class="text-gray-700 leading-relaxed mb-4">Cook at 375°F for 6-8 minutes for refrigerated hot dogs, or 8-11 minutes for frozen. Flip the hot dogs halfway through cooking using tongs. The hot dogs are done when the skin is lightly blistered and the internal temperature reaches 160°F (71°C). Overcooking will make them tough and dry — check at the 6-minute mark and adjust. For a detailed <a href="/hot-dog/air-fryer-guide/" class="text-blue-600 hover:text-blue-800 underline">step-by-step guide</a>, see our dedicated air fryer page.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips for Best Results</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Avoiding Dryness</h3>
    <p class="text-gray-700 leading-relaxed mb-4">The key to avoiding dry air-fried hot dogs is to not overcook them. The Kirkland Signature hot dog has a relatively high fat content (30g per serving), which helps keep it moist, but prolonged high-heat cooking will render out too much fat. Score the casing lightly before cooking — this allows some fat to render (creating a crispy skin) while keeping the interior juicy. If you prefer a softer texture, cook at 350°F for 8-10 minutes instead of 375°F for 6-8 minutes. The lower temperature renders fat more gently.</p>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Safety and Cleanup</h3>
    <p class="text-gray-700 leading-relaxed mb-4">Always use tongs to handle hot food from the air fryer — the basket and the hot dogs themselves can cause burns. Line the bottom tray with aluminum foil for easier cleanup, but never block the air vents. After cooking, pour off any rendered fat and wash the basket with warm soapy water. For more <a href="/hot-dog/cooking-at-home/" class="text-blue-600 hover:text-blue-800 underline">cooking methods and tips</a>, including oven and stovetop options, see our comprehensive cooking guide.</p>`,

  'price': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Current Price</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Price in Different Locations</h3>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco hot dog combo is $1.50 at all US warehouse locations — no regional variation, no tax added in most states (food items are often tax-exempt). In Canada, the price is CAD $1.50. In the UK, it's approximately £1.50. In Australia, it's around AUD $2.00. In Mexico, roughly MXN $30. In Japan, approximately ¥200. These prices have remained remarkably stable over the years, and Costco has consistently maintained the principle that the hot dog combo should be the most affordable item in the food court regardless of the country.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Price History</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">The $1.50 Story</h3>
    <p class="text-gray-700 leading-relaxed mb-4">The $1.50 price was established in 1985 when the hot dog combo was first introduced at Costco (then Price Club). It has never been raised — not once in over 40 years. This is perhaps the most famous fixed price point in American retail. When former CEO Craig Jelinek suggested raising the price, co-founder Jim Sinegal famously said: <em>"If you raise the effing hot dog, I will kill you. Figure it out."</em> The <a href="/hot-dog/price-history/" class="text-blue-600 hover:text-blue-800 underline">complete price history timeline</a> reveals how Costco has absorbed decades of cost increases through vertical integration and operational efficiency.</p>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Inflation Adjusted Price</h3>
    <p class="text-gray-700 leading-relaxed mb-4">If the hot dog combo had kept pace with cumulative US inflation since 1985, it would cost approximately $4.50 today — three times the current price. This means Costco is effectively selling the combo at a 66% discount compared to inflation-adjusted pricing. The gap between the actual price and inflation-adjusted price has widened every single year for 40 years, making the <a href="/hot-dog/why-so-cheap/" class="text-blue-600 hover:text-blue-800 underline">cheap hot dog strategy</a> increasingly impressive over time.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Value Analysis</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Cost Per Serving</h3>
    <p class="text-gray-700 leading-relaxed mb-4">At $1.50 for a quarter-pound hot dog plus a 20 oz drink, the cost per ounce of food is approximately $0.38 — far below any fast food competitor. A McDonald's dollar menu item costs roughly $0.50-0.80 per ounce. A Subway $5 footlong costs about $0.42 per ounce. Even cooking at home with grocery store hot dogs, buns, and soda would cost $2-3 per serving. The Costco combo is not just the best deal in hot dogs — it may be the best deal in all of American fast food.</p>`,

  'ingredients': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Hot Dog Ingredients</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Hot Dog Meat Type</h3>
    <p class="text-gray-700 leading-relaxed mb-4">The Kirkland Signature food court hot dog is made from 100% beef — no pork, chicken, or turkey. It contains no fillers, no by-products, no artificial colors, and no corn syrup. The full ingredient list is: beef, water, salt, sodium erythorbate (a curing accelerator that maintains color), sodium nitrite (a preservative that prevents botulism), and natural flavorings. The beef used is USDA-inspected, and Costco processes it in their own facilities in Tracy, California and Manteno, Illinois. This vertical integration ensures quality control from raw material to finished product.</p>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Bun Ingredients</h3>
    <p class="text-gray-700 leading-relaxed mb-4">The enriched wheat bun contains: enriched wheat flour (wheat flour, niacin, reduced iron, thiamine mononitrate, riboflavin, folic acid), water, sugar, yeast, soy lecithin (emulsifier), and may contain traces of dairy and sesame. The bun is not gluten-free and is produced in a facility that processes multiple allergens. If you have wheat, soy, or dairy allergies, the <a href="/hot-dog/allergens/" class="text-blue-600 hover:text-blue-800 underline">allergen information page</a> provides detailed guidance.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Additives & Allergens</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Common Additives Explained</h3>
    <p class="text-gray-700 leading-relaxed mb-4">Sodium erythorbate and sodium nitrite are the two additives most commonly questioned by consumers. Sodium erythorbate is a form of vitamin C that helps maintain the hot dog's pink color and acts as an antioxidant — it is completely safe and not, as the urban myth claims, made from earthworms. Sodium nitrite is a salt that prevents the growth of Clostridium botulinum (the bacteria that causes botulism) and also contributes to the hot dog's characteristic flavor and pink color. While nitrites have been linked to health concerns when consumed in large quantities, the amount in a single Costco hot dog is within FDA safety limits.</p>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Allergens to Note</h3>
    <p class="text-gray-700 leading-relaxed mb-4">The primary allergens are wheat (in the bun), soy (soy lecithin in the bun), and potential cross-contamination with dairy in the food court. The hot dog itself does not contain dairy, nuts, eggs, fish, or shellfish as ingredients. However, Costco does not guarantee a completely allergen-free preparation environment. For those with severe allergies, see our <a href="/hot-dog/gluten-free/" class="text-blue-600 hover:text-blue-800 underline">gluten-free guide</a> for safe preparation alternatives at home.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Dietary Options</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Gluten-Free & Vegan Options</h3>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco food court does not offer gluten-free or vegan hot dog options. However, the Kirkland Signature hot dogs sold in the refrigerated section can be prepared at home with gluten-free buns (Canyon Bakehouse or Schär, available at Costco) for a safe gluten-free experience. For <a href="/hot-dog/vegan/" class="text-blue-600 hover:text-blue-800 underline">vegan alternatives</a>, Costco carries Field Roast Plant-Based Frankfurters and Yves Veggie Dogs — both are fully plant-based and available in bulk packaging.</p>`,

  'nutrition': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Macronutrients</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Protein Content</h3>
    <p class="text-gray-700 leading-relaxed mb-4">A single Costco hot dog delivers 24 grams of complete protein from 100% beef. This represents approximately 43-52% of the Recommended Daily Allowance (46g for women, 56g for men). The protein quality is high — beef provides all nine essential amino acids in bioavailable forms. For the <a href="/hot-dog/protein/" class="text-blue-600 hover:text-blue-800 underline">detailed protein analysis</a> and how it compares to other protein sources per dollar, see our dedicated protein page.</p>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Carbs & Fiber</h3>
    <p class="text-gray-700 leading-relaxed mb-4">Total carbohydrates are approximately 46g, almost entirely from the bun (the hot dog itself has only 2-3g of carbs). Dietary fiber is minimal at about 2g per serving, leaving 44g of net carbs. The bun is made from enriched wheat flour with added B vitamins and iron, but it provides little nutritional value beyond carbohydrates. Removing the bun drops total carbs to just 2-3g, making the hot dog alone suitable for <a href="/hot-dog/keto/" class="text-blue-600 hover:text-blue-800 underline">keto and low-carb diets</a>.</p>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Fat Breakdown</h3>
    <p class="text-gray-700 leading-relaxed mb-4">Total fat content is 33g per serving, consisting of approximately 13g saturated fat, 14g monounsaturated fat, and 6g polyunsaturated fat. The saturated fat content equals one full day's recommended limit for a 2,000-calorie diet. However, the presence of heart-healthier monounsaturated and polyunsaturated fats provides some balance. For the <a href="/hot-dog/fat/" class="text-blue-600 hover:text-blue-800 underline">complete fat analysis</a> and tips to reduce fat intake, see our fat content guide.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Micronutrients & Sodium</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Sodium Levels</h3>
    <p class="text-gray-700 leading-relaxed mb-4">At approximately 1,700mg per serving, the sodium content is the most significant health concern. This represents 74% of the 2,300mg daily limit for healthy adults and exceeds the 1,500mg threshold recommended for people with hypertension. The hot dog contributes about 1,100mg and the bun adds 400-600mg. For practical strategies to reduce sodium intake while still enjoying a Costco hot dog, visit our <a href="/hot-dog/sodium/" class="text-blue-600 hover:text-blue-800 underline">sodium content guide</a>.</p>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Calcium, Iron, and Other Micronutrients</h3>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco hot dog provides a modest but meaningful micronutrient profile. Iron content is approximately 10-15% of the daily value — beef is a good source of heme iron, which is more bioavailable than plant-based iron. B vitamins (particularly B12 at 20%+ DV and B6 at 15%+ DV) support energy metabolism and red blood cell production. Zinc (15%+ DV) supports immune function. Calcium is minimal (2-4% DV) since the hot dog contains no dairy. The enriched bun adds small amounts of additional B vitamins and iron from fortification.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Dietary Considerations</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Including Hot Dog in Balanced Diet</h3>
    <p class="text-gray-700 leading-relaxed mb-4">Can a Costco hot dog fit into a healthy diet? Yes — with caveats. Occasional consumption (once every 1-2 weeks) is perfectly compatible with a balanced diet for most healthy adults. The key is what you eat the rest of the day: if your other meals are low in sodium and saturated fat, one high-sodium hot dog won't exceed your daily limits. Pair it with <a href="/hot-dog/diet-tips/" class="text-blue-600 hover:text-blue-800 underline">vegetables and whole foods</a>, skip the bun if you're watching carbs, and choose water over soda. The 24g of protein and iron content offer genuine nutritional benefits that shouldn't be dismissed.</p>`
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

console.log('\nDone filling batch 3!');

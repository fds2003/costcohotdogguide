const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'src', 'src', 'pages', 'hot-dog');

const contents = {
  'sodium': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Sodium per Serving</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Hot Dog vs Bun</h3>
    <p class="text-gray-700 leading-relaxed mb-4">A single Costco hot dog combo contains approximately 1,700mg of sodium. The hot dog itself contributes about 1,100mg, while the bun adds another 400-600mg depending on the specific recipe. To put this in perspective, the American Heart Association recommends no more than 2,300mg of sodium per day for healthy adults, and ideally under 1,500mg for those with high blood pressure. One Costco hot dog combo essentially delivers three-quarters of your daily sodium allowance in a single meal.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Daily Intake Considerations</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Tips to Reduce Sodium</h3>
    <p class="text-gray-700 leading-relaxed mb-4">If you're watching your <a href="/hot-dog/nutrition/" class="text-blue-600 hover:text-blue-800 underline">sodium intake</a>, there are several ways to enjoy a Costco hot dog more responsibly. Skip the bun to cut roughly 500mg of sodium. Avoid adding extra salt, ketchup (which contains 150mg per tablespoon), or processed cheese. Use mustard instead — it has only about 55mg per teaspoon. Drinking plenty of water alongside your meal can also help your body process the sodium more effectively.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Comparison with Other Foods</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco hot dog's sodium content is high but not unusual for processed meat. A single slice of pepperoni pizza from Pizza Hut contains about 1,100mg. A Burger King Whopper packs roughly 1,370mg. Even a seemingly healthy restaurant Caesar salad can contain over 1,500mg of sodium. The key difference is portion size — the Costco hot dog is a complete meal at $1.50, while many of these other options cost significantly more. For a <a href="/hot-dog/healthy/" class="text-blue-600 hover:text-blue-800 underline">healthier approach</a>, treat the Costco hot dog as an occasional meal rather than a daily habit.</p>`,

  'keto': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Macro Breakdown for Keto Diet</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Protein, Fat, Carbs</h3>
    <p class="text-gray-700 leading-relaxed mb-4">A Costco hot dog without the bun is surprisingly keto-friendly. The hot dog meat alone contains approximately 24g of protein, 30g of fat, and only 2-3g of net carbs. This translates to a macro ratio of roughly 35% protein, 62% fat, and 3% carbs — well within the typical keto range of 70-80% fat, 20-25% protein, and 5-10% carbs. The problem is the bun, which adds a massive 46g of carbohydrates, instantly kicking you out of ketosis.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Keto-Friendly Serving Suggestions</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Order the hot dog and simply remove the bun, or ask the food court staff if they can serve it without one (many locations will accommodate this). Wrap it in a lettuce leaf for added crunch without the carbs. Top with mustard (0g carbs), mayonnaise (0g carbs), cheese (about 1g carb per slice), or sauerkraut (about 2g net carbs per serving). Avoid ketchup, BBQ sauce, and sweet relish — these are loaded with sugar.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips for Low-Carb Modifications</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The biggest trap at the Costco food court for keto dieters isn't the hot dog — it's the 20 oz soda that comes with it. A regular Coca-Cola contains 65g of sugar (all carbs). Swap it for water, unsweetened iced tea, or Diet Coke. With the bun removed and a zero-calorie drink, your entire meal comes in at around 360 calories with only 2-3g net carbs. Pair it with a side of <a href="/hot-dog/nutrition/" class="text-blue-600 hover:text-blue-800 underline">macronutrient-aware</a> snacks from the Costco aisles like cheese sticks or almonds for a complete keto meal under 600 calories.</p>`,

  'carbs': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Total Carbs per Serving</h2>
    <p class="text-gray-700 leading-relaxed mb-4">A complete Costco hot dog with bun contains approximately 46 grams of total carbohydrates. The vast majority of these carbs come from the bun itself — an enriched wheat bun typically contains 40-46g of carbohydrates. The hot dog meat contributes only about 2-3g of carbs, primarily from the corn syrup and dextrose used in curing. Of the 46 total carbs, about 2g are dietary fiber, leaving roughly 44g of net carbs per serving.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Low-Carb Alternatives</h2>
    <p class="text-gray-700 leading-relaxed mb-4">For those watching their carb intake, the simplest solution is to remove the bun entirely. A bun-less Costco hot dog contains just 2-3g of net carbs, making it suitable for <a href="/hot-dog/keto/" class="text-blue-600 hover:text-blue-800 underline">keto and low-carb diets</a>. You can also ask for the hot dog to be wrapped in lettuce, bring your own low-carb tortilla, or eat it with a fork alongside a side salad. The food court soda is another major carb source — a 20 oz regular soda adds 65g of sugar carbs.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Comparison to Other Fast Food Options</h2>
    <p class="text-gray-700 leading-relaxed mb-4">At 46g of carbs, the Costco hot dog sits in the middle range for fast food items. A McDonald's Big Mac has about 44g of carbs, a Burger King Whopper has 49g, and a Subway 6-inch meatball marinara sub packs 55g. Where the Costco hot dog differs is value — at $1.50 with a drink, it delivers more food per dollar than any competitor. The key takeaway: if you're counting carbs, skip the bun and the soda, and you've got a very low-carb meal on your hands.</p>`,

  'fat': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Total Fat per Serving</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Saturated Fat</h3>
    <p class="text-gray-700 leading-relaxed mb-4">A Costco hot dog with bun contains approximately 33 grams of total fat, of which about 13 grams are saturated fat. The American Heart Association recommends limiting saturated fat to 5-6% of total daily calories — for a 2,000-calorie diet, that's about 13 grams per day. One Costco hot dog hits that limit exactly. The remaining 20 grams are a mix of monounsaturated and polyunsaturated fats, which are less concerning from a cardiovascular perspective.</p>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Unsaturated Fat</h3>
    <p class="text-gray-700 leading-relaxed mb-4">Not all the fat in a Costco hot dog is bad news. Approximately 14 grams come from monounsaturated fats and 6 grams from polyunsaturated fats. These healthier fats can help lower LDL cholesterol when they replace saturated fats in your diet. The beef used in Kirkland Signature hot dogs contains a mix of fat types, and while the overall fat content is high, it's the saturated fat portion that deserves the most attention for <a href="/hot-dog/healthy/" class="text-blue-600 hover:text-blue-800 underline">health-conscious eaters</a>.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips to Reduce Fat Intake</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Removing the bun won't significantly reduce fat content (the bun is mostly carbs), but you can trim the fat by blotting the hot dog with a napkin to remove surface grease, which can eliminate 1-2 grams. Choosing mustard over cheese or mayo as a topping saves another 5-10 grams of fat. The most effective strategy is portion control — eating half the hot dog and saving the rest for later cuts your fat intake in half while still letting you enjoy the Costco experience.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Comparison with Other Fast Food</h2>
    <p class="text-gray-700 leading-relaxed mb-4">At 33g of total fat, the Costco hot dog is comparable to a McDonald's Quarter Pounder with Cheese (40g), a Wendy's Double Stack (33g), or a Burger King Whopper without mayo (34g). Where it stands out is value — no other fast food option delivers 24g of protein and 33g of fat for just $1.50. For the <a href="/hot-dog/nutrition/" class="text-blue-600 hover:text-blue-800 underline">full nutrition picture</a>, consider the trade-off between fat content and the exceptional protein-to-price ratio.</p>`,

  'allergens': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Allergens</h2>
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Dairy, Soy, Gluten</h3>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco hot dog contains several common allergens. The most significant is wheat (gluten), found in the bun. The hot dog itself may contain traces of soy from the soy lecithin used as an emulsifier. Dairy cross-contamination is possible in the food court preparation area, as the same surfaces and utensils are used to prepare pizza and other dairy-containing items. Costco does not publish a comprehensive allergen chart for food court items, so individuals with severe allergies should exercise caution.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Kosher & Dietary Info</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Costco hot dogs are not certified kosher. While they are made from 100% beef (not pork), the production facility is not supervised by a kosher certification agency, and the hot dogs are cooked on shared equipment. For <a href="/hot-dog/ingredients/" class="text-blue-600 hover:text-blue-800 underline">specific ingredient questions</a>, the Kirkland Signature packaging lists all components, and Costco's member services can provide additional information upon request. The hot dogs do not contain pork, shellfish, or nuts as intentional ingredients.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips for Sensitive Diets</h2>
    <p class="text-gray-700 leading-relaxed mb-4">If you have a wheat allergy or celiac disease, ask for the hot dog without the bun and ensure it doesn't touch the bun preparation area. For soy allergies, the trace amounts in the hot dog may or may not trigger a reaction — consult your allergist. Those with dairy sensitivities should be aware of potential cross-contamination. The safest approach for severe allergies is to purchase the Kirkland Signature hot dogs from the refrigerated section and prepare them at home in a controlled environment, using allergen-free buns and condiments.</p>`,

  'vegetarian': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Meatless Alternatives</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Costco food courts do not currently offer vegetarian hot dogs. However, Costco warehouses carry several excellent plant-based alternatives in their refrigerated and frozen sections. Popular options include Field Roast Plant-Based Frankfurters (available in bulk packs), Yves Veggie Dogs, and MorningStar Farms Veggie Dogs. These products are designed to mimic the texture and flavor of traditional hot dogs while being entirely meat-free.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Nutrition Comparison</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Compared to the Kirkland Signature beef hot dog, vegetarian alternatives typically contain less saturated fat and zero cholesterol. Field Roast franks provide about 24g of protein (comparable to the beef version) with significantly less fat. However, vegetarian hot dogs often have similar or higher sodium levels — typically 500-700mg per serving. The <a href="/hot-dog/nutrition/" class="text-blue-600 hover:text-blue-800 underline">nutrition trade-off</a> is less saturated fat and no cholesterol in exchange for slightly more processing and comparable sodium.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Where to Buy & Availability</h2>
    <p class="text-gray-700 leading-relaxed mb-4">You'll find vegetarian hot dog options in the refrigerated section near the traditional hot dogs, or in the frozen aisle near other plant-based products. Availability varies by location and region — urban Costco locations tend to carry more plant-based options. You can also check <a href="/hot-dog/vegan/" class="text-blue-600 hover:text-blue-800 underline">vegan alternatives</a> at Costco, as the product selection continues to expand with growing demand for plant-based foods.</p>`,

  'fun-facts': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Historical Facts</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco hot dog has been priced at $1.50 since 1985 — that's over 40 years without a single price increase. During that same period, the average new car price went from $9,000 to over $48,000, and a movie ticket rose from $3.55 to over $12. The hot dog combo has remained a stubborn anomaly in an era of inflation, becoming one of the most reliable price points in American retail. Costco sells over 100 million hot dogs annually across its global operations, which is more than all Major League Baseball stadiums combined sell in a season.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Trivia & Records</h2>
    <p class="text-gray-700 leading-relaxed mb-4">In 2009, Costco made the bold decision to switch from Hebrew National hot dogs to their own Kirkland Signature brand. This wasn't a cost-cutting move — it was a quality and supply chain decision. By building their own meat processing plants, Costco gained complete control over the recipe and production. The Kirkland Signature hot dog is a quarter-pound (4 oz) all-beef frank with no fillers, by-products, or artificial colors, making it larger than most competitors' offerings. The <a href="/hot-dog/history/" class="text-blue-600 hover:text-blue-800 underline">full history</a> reveals a fascinating story of business strategy disguised as a simple food court item.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Popular Myths</h2>
    <p class="text-gray-700 leading-relaxed mb-4">One persistent myth is that Costco uses "mystery meat" or low-quality ingredients to keep the price at $1.50. In reality, the Kirkland Signature hot dog uses 100% USDA-inspected beef with no fillers or by-products. Another myth claims that the price increase is "coming soon" — this rumor surfaces every few years, but Costco's leadership has consistently reaffirmed their commitment to the $1.50 price point. Perhaps the most amusing myth is that the hot dog is a mind-control device to make you buy more; while the food court does increase spending, it's simple retail psychology, not science fiction.</p>`,

  'history': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Origin & Evolution</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco hot dog's story begins in the early 1980s when Price Club (which later merged with Costco) started selling hot dogs as a convenience for shoppers. The concept was simple: keep hungry members in the warehouse longer by offering affordable food. In 1985, the $1.50 combo price was established — a quarter-pound hot dog plus a 20-ounce drink — and it has remained unchanged ever since. This price has survived recessions, inflation spikes, and dramatic increases in beef and labor costs.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Pricing Milestones</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The most significant milestone in Costco hot dog <a href="/hot-dog/price/" class="text-blue-600 hover:text-blue-800 underline">pricing history</a> came in 2009 when the company transitioned from Hebrew National to Kirkland Signature. Many industry watchers assumed this was when the price would finally increase, but Costco doubled down instead. They invested millions in their own meat processing facilities, cutting costs vertically rather than raising prices horizontally. When former CEO Craig Jelinek became CEO in 2012, he reportedly tested the idea of a price increase. Jim Sinegal's response — "I know it sounds crazy, but the hot dog is important" — became retail legend.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Cultural Impact</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco hot dog has transcended its status as a food item to become a cultural icon. It has been featured in The New York Times, Wall Street Journal, and countless food blogs. Social media is filled with Costco hot dog appreciation posts, memes, and even tattoos. The combo has become a litmus test for Costco membership value — if the hot dog price ever increases, members view it as a betrayal of the Costco promise. It's one of the few products in history where the price has become more famous than the product itself, and a key reason why <a href="/hot-dog/why-so-cheap/" class="text-blue-600 hover:text-blue-800 underline">Costco can maintain</a> its membership renewal rate above 90%.</p>`,

  'cheese': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Cheese Types</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco food court doesn't offer cheese as a standard topping, but that doesn't mean you can't add it at home. The best cheeses for a Costco hot dog balance meltability with flavor intensity. American cheese is the classic choice — it melts smoothly and has a mild flavor that complements the beef without overwhelming it. Sharp cheddar adds a tangy bite that pairs beautifully with mustard. Pepper jack brings a spicy kick that elevates the entire experience. Swiss cheese offers a nutty, slightly sweet profile that works surprisingly well with sauerkraut.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Pairing Tips</h2>
    <p class="text-gray-700 leading-relaxed mb-4">For the best cheese-on-hot-dog experience, add the cheese while the hot dog is still hot so it melts naturally. A single slice is usually enough — the Kirkland Signature hot dog is already rich in flavor. Pair cheddar with spicy brown mustard and caramelized onions. Pair pepper jack with jalapeños and a drizzle of hot sauce. Pair Swiss with <a href="/hot-dog/sauce/" class="text-blue-600 hover:text-blue-800 underline">mustard and sauerkraut</a> for a classic deli-style experience. For a gourmet twist, try crumbled blue cheese with a drizzle of honey.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Homemade Options</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Making your own cheese sauce is easier than you think and far superior to processed cheese product. Combine 1 cup shredded sharp cheddar, 2 tablespoons milk, 1 teaspoon Dijon mustard, and a pinch of garlic powder in a saucepan over low heat. Stir until smooth and pour over your hot dog. This homemade sauce takes 5 minutes and elevates a $1.50 Costco hot dog into something that tastes like it came from a gourmet <a href="/hot-dog/toppings/" class="text-blue-600 hover:text-blue-800 underline">toppings bar</a>. You can also experiment with cream cheese, brie, or smoked gouda for unique flavor profiles.</p>`,

  'sauce': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Popular Options</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco food court offers yellow mustard and ketchup as standard condiments, but the sauce world extends far beyond these basics. Classic pairings include yellow mustard (the traditional choice), spicy brown mustard (for more kick), Dijon mustard (for sophistication), sweet relish (Costco's standard topping), and ketchup (controversial among hot dog purists but widely loved). Beyond the basics, sriracha mayo, chipotle sauce, and honey mustard have gained popularity as gourmet alternatives.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Homemade Sauces</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Creating your own signature sauce is one of the best ways to elevate a Costco hot dog. Try a simple "Costco Special Sauce" by mixing 2 tablespoons mayonnaise, 1 tablespoon yellow mustard, 1 tablespoon sweet relish, and a pinch of smoked paprika. For a spicy version, add sriracha to taste. A "Chicago-style" sauce combination includes yellow mustard, neon green relish, tomato wedges, pickle spear, sport peppers, and celery salt — no ketchup allowed. These <a href="/hot-dog/toppings/" class="text-blue-600 hover:text-blue-800 underline">toppings combinations</a> transform a basic hot dog into a regional specialty.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Pairing Tips</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The key to great sauce pairing is balance — the Kirkland Signature hot dog has a robust beef flavor that can stand up to bold condiments. Mustard-based sauces cut through the richness. Sweet sauces (relish, honey mustard) provide contrast to the savory meat. Spicy sauces (sriracha, jalapeño mustard) add excitement. The one rule: avoid using so much sauce that you can't taste the hot dog. A thin line of mustard and a spoonful of relish is the <a href="/hot-dog/cheese/" class="text-blue-600 hover:text-blue-800 underline">classic cheese-and-sauce</a>-free sweet spot that has satisfied millions of Costco shoppers for decades.</p>`,

  'toppings': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Classic Toppings</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The classic Costco hot dog comes with a simple but effective lineup: yellow mustard, ketchup, and sweet relish. This trio has been the standard for decades and remains the most popular combination at the food court. Onions (diced white onions) are available at many locations. These four toppings represent the American hot dog tradition at its most iconic — no fuss, no pretension, just simple flavors that complement the beef without overwhelming it.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Specialty Toppings</h2>
    <p class="text-gray-700 leading-relaxed mb-4">If you're taking your Costco hot dog home, the topping possibilities expand dramatically. Sauerkraut is a natural pairing — its tangy fermentation cuts through the richness of the beef. Caramelized onions add a sweet depth that elevates the entire experience. Jalapeños bring heat, bacon bits add smoky crunch, and avocado provides creamy richness. For a regional twist, try Chicago-style (mustard, relish, onion, tomato, pickle, sport peppers, celery salt) or New York-style (mustard and sauerkraut only). <a href="/hot-dog/sauce/" class="text-blue-600 hover:text-blue-800 underline">Gourmet sauces</a> can further customize your creation.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">DIY Ideas</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco hot dog is essentially a blank canvas for creativity. Try a "Korean BBQ Dog" with kimchi, gochujang mayo, and sesame seeds. Build a "Nacho Dog" with cheese sauce, jalapeños, and sour cream. Create a "Breakfast Dog" with a fried egg, <a href="/hot-dog/cheese/" class="text-blue-600 hover:text-blue-800 underline">cheese</a>, and hot sauce. The mild, beefy flavor of the Kirkland Signature hot dog pairs well with bold, assertive toppings — don't be afraid to experiment. The worst that can happen is you're out $1.50 and need to try again.</p>`,

  'food-court': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Combo Deals</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco food court is famous for offering the hot dog and 20 oz drink combo for $1.50 — a deal that has remained unchanged since 1985. This combo includes a quarter-pound Kirkland Signature all-beef hot dog on an enriched wheat bun, plus a fountain drink with free refills in many locations. The value proposition is unmatched anywhere in the fast food industry, where a comparable meal would cost $5-8 at minimum. The combo is available at all US Costco locations and requires a membership card to enter the warehouse.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Popularity Stats</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Costco sells over 100 million hot dogs annually across its warehouse clubs. That's roughly 270,000 hot dogs per day, or about 450 hot dogs per warehouse per operating day. The hot dog combo consistently ranks as the #1 food court item by volume, followed by the $9.95 pizza and the $3.99 rotisserie chicken. According to industry estimates, the food court generates approximately $1-2 billion in annual revenue for Costco, with the hot dog serving as the primary traffic driver despite operating at a loss. For more <a href="/hot-dog/fun-facts/" class="text-blue-600 hover:text-blue-800 underline">fun facts and trivia</a>, check our dedicated page.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Customer Favorites</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Beyond the hot dog, Costco food court favorites include the 18-inch pizza ($9.95 whole, $1.99 per slice), the rotisserie chicken ($4.99), the chicken bakes ($3.99), and the very berry acai bowl ($4.99). Many members plan their shopping trips around food court visits, making it an integral part of the Costco experience. The <a href="/hot-dog/history/" class="text-blue-600 hover:text-blue-800 underline">history of the food court</a> reveals how Costco strategically uses affordable food to keep members coming back year after year.</p>`,

  'diet-tips': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Low-Calorie Modifications</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The single most effective calorie-cutting modification is to remove the bun. Without the bun, a Costco hot dog drops from 570 calories to approximately 360 calories — a 37% reduction. Skip the soda and choose water instead to save another 150-200 calories of sugar. If you love the bun experience, try eating just half of it, which cuts about 105 calories while still giving you the traditional hot dog texture. Replacing ketchup (20 calories per tablespoon) with mustard (3 calories per teaspoon) saves a few more calories per serving.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Macro-Friendly Choices</h2>
    <p class="text-gray-700 leading-relaxed mb-4">For those tracking macronutrients, a bun-less Costco hot dog delivers an impressive ratio: 24g protein, 30g fat, and only 2-3g carbs per serving. This makes it naturally suited for high-protein, <a href="/hot-dog/keto/" class="text-blue-600 hover:text-blue-800 underline">low-carb</a>, or moderate-fat eating plans. To improve the protein-to-calorie ratio further, pair the hot dog with a protein shake (30g protein, 150 calories) from your car or bag, creating a 54g protein meal for under 600 calories total.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Meal Pairing Tips</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Turn your Costco hot dog into a balanced meal by pairing it with nutrient-dense sides from the warehouse. Grab a bag of Costco's organic mixed greens and make a quick salad with olive oil and lemon juice. Add a piece of fruit from the produce section (apples, bananas, or berries are always available). The <a href="/hot-dog/healthy/" class="text-blue-600 hover:text-blue-800 underline">key to healthy eating</a> at Costco isn't avoiding the hot dog — it's building a complete meal around it that includes fiber, vitamins, and micronutrients that the hot dog alone doesn't provide.</p>`,

  'comparison': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Calorie Comparison</h2>
    <p class="text-gray-700 leading-relaxed mb-4">At 570 calories with bun, the Costco hot dog is one of the largest fast food hot dogs available. Nathan's Famous (the Coney Island icon) comes in at about 310 calories. A standard Oscar Mayer hot dog with bun is roughly 280 calories. The key difference is size — the Costco hot dog is a quarter-pounder (4 oz), while most competitors serve 1.6-2 oz franks. Per ounce, the Costco hot dog is actually lower in calories than many competitors, making it a better value per calorie when you account for the sheer amount of food you're getting for $1.50.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Nutrition Comparison</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Protein content is where the Costco hot dog shines. With 24g of protein, it outperforms Nathan's Famous (11g), a standard Oscar Mayer frank (6g), and even most fast food burgers per dollar. The <a href="/hot-dog/sodium/" class="text-blue-600 hover:text-blue-800 underline">sodium content</a> (1,700mg) is higher than Nathan's (1,350mg) and Oscar Mayer (570mg), but again, you're getting 2-3 times more food. The saturated fat (13g) is comparable to a McDonald's Quarter Pounder and lower than many fast food chicken sandwiches.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Price Comparison</h2>
    <p class="text-gray-700 leading-relaxed mb-4">This is where the Costco hot dog absolutely dominates. At $1.50 for a hot dog and 20 oz drink, it costs roughly $0.38 per ounce of food. Nathan's Famous at their Coney Island location charges about $5-6 for a single hot dog with no drink. A hot dog at a baseball stadium costs $6-8. Even grocery store hot dogs, when you factor in buns, condiments, and a drink, cost more per serving than the Costco combo. The <a href="/hot-dog/price/" class="text-blue-600 hover:text-blue-800 underline">price comparison</a> is so extreme that it's almost unfair to other options — nothing in America delivers this much food for this little money.</p>`,

  'controversies': `<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Nutrition Myths</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The most persistent controversy surrounding Costco hot dogs is whether they are "healthy" or "unhealthy." The truth is nuanced: at 570 calories and 1,700mg of sodium, they are a high-sodium processed meat that should be consumed in moderation. However, the 24g of protein, absence of fillers and by-products, and 100% beef composition make them a higher quality option than many assume. The World Health Organization's classification of processed meats as "Group 1 carcinogens" has been widely misinterpreted — this classification indicates certainty of evidence, not degree of risk. The actual increased risk from occasional processed meat consumption is small.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Price Myths</h2>
    <p class="text-gray-700 leading-relaxed mb-4">Rumors of an imminent <a href="/hot-dog/price/" class="text-blue-600 hover:text-blue-800 underline">price increase</a> surface every year, and every year they prove false. Costco's leadership has repeatedly stated that the $1.50 price point is non-negotiable. Another myth claims that Costco uses inferior ingredients to maintain the low price — in fact, the 2009 switch to Kirkland Signature improved quality while reducing costs through vertical integration. Some critics argue the low price exploits workers, but Costco is widely recognized as paying above-industry wages with comprehensive benefits for food court staff.</p>

  <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Media Coverage</h2>
    <p class="text-gray-700 leading-relaxed mb-4">The Costco hot dog has received extensive media attention, from The New York Times calling it "America's best food deal" to The Wall Street Journal analyzing its role in Costco's business model. Social media debates rage about the correct way to eat one (mustard-only vs. ketchup-and-mustard vs. loaded). Food bloggers have made careers reviewing and rating it. The <a href="/hot-dog/fun-facts/" class="text-blue-600 hover:text-blue-800 underline">cultural significance</a> of this humble $1.50 meal continues to grow, making it one of the most discussed food items in American retail history — not bad for a hot dog that hasn't changed its price in 40 years.</p>`
};

for (const [slug, content] of Object.entries(contents)) {
  const filepath = path.join(DIR, `${slug}.astro`);
  if (!fs.existsSync(filepath)) {
    console.log(`SKIP: ${slug}.astro not found`);
    continue;
  }
  let file = fs.readFileSync(filepath, 'utf-8');

  // Find the content region between the first H2 and the "Related Guides" H2
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

console.log('\nDone filling content!');

# SEO canonical redirect conflicts that need fixing
# The _redirects file redirects these pages TO other pages, but they are high-value content pages
# We should either:
# A) Keep them as standalone pages and remove the redirect
# B) Merge content and keep redirect (only if truly thin)

# CRITICAL: These are high-impression pages being redirected AWAY from:
# /hot-dog/calories/ → /hot-dog/nutrition/  (581 impressions!)
# /hot-dog/carbs/ → /hot-dog/nutrition/      (21 impressions)
# /hot-dog/fat/ → /hot-dog/nutrition/
# /hot-dog/protein/ → /hot-dog/nutrition/    (6 impressions)
# /hot-dog/protein-vs-calories/ → /hot-dog/nutrition/
# /hot-dog/comparison/ → /hot-dog/nutrition/ (16 impressions)

# /hot-dog/allergens/ → /hot-dog/ingredients/
# /hot-dog/toppings/ → /hot-dog/ingredients/
# /hot-dog/sauce/ → /hot-dog/ingredients/
# /hot-dog/cheese/ → /hot-dog/ingredients/
# /hot-dog/food-court/ → /hot-dog/ingredients/

# /hot-dog/diet-tips/ → /hot-dog/healthy/
# /hot-dog/vegan/ → /hot-dog/healthy/
# /hot-dog/keto/ → /hot-dog/healthy/

# /hot-dog/fun-facts/ → /hot-dog/history/
# /hot-dog/controversies/ → /hot-dog/history/

# PROBLEM: Redirecting high-impression pages loses all ranking signal
# SOLUTION: Keep these as standalone pages, remove redirects

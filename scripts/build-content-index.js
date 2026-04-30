import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import csv from 'csv-parser';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const contentDir = path.join(rootDir, 'src', 'content');
const outputPath = path.join(contentDir, 'index.json');

async function loadMenuItems() {
  const csvPath = path.join(contentDir, 'menu-items.csv');
  if (!fs.existsSync(csvPath)) return [];

  const rows = [];
  await new Promise((resolve, reject) => {
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (row) => rows.push({
        slug: row.slug,
        name: row.name,
        category: row.category,
        price: parseFloat(row.price) || 0,
        calories: parseInt(row.calories, 10) || 0,
        url: `/menu/${row.slug}/`
      }))
      .on('end', resolve)
      .on('error', reject);
  });
  return rows;
}

function loadArticles() {
  const articlesDir = path.join(contentDir, 'articles');
  if (!fs.existsSync(articlesDir)) return [];

  return fs.readdirSync(articlesDir)
    .filter(f => f.endsWith('.md'))
    .map(file => {
      const content = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
      const parsed = matter(content);
      const slug = file.replace('.md', '');
      return {
        slug,
        title: parsed.data.title || slug,
        description: parsed.data.description || '',
        date: parsed.data.date || '',
        category: parsed.data.category || '',
        tags: parsed.data.tags || [],
        url: `/articles/${slug}/`
      };
    });
}

function loadDataSets() {
  const dataDir = path.join(contentDir, 'data');
  if (!fs.existsSync(dataDir)) return [];

  const datasets = [];

  if (fs.existsSync(path.join(dataDir, 'hotdog-prices.csv'))) {
    datasets.push({
      slug: 'price-map',
      name: 'Hot Dog Price Map',
      description: 'Prices across US states and international locations',
      url: '/data/price-map/'
    });
  }

  if (fs.existsSync(path.join(dataDir, 'nutrition-data.csv'))) {
    datasets.push({
      slug: 'nutrition-comparison',
      name: 'Nutrition Comparison',
      description: 'Nutritional content across all menu items',
      url: '/data/nutrition-comparison/'
    });
  }

  if (fs.existsSync(path.join(dataDir, 'crowd-prediction.json'))) {
    datasets.push({
      slug: 'crowd-prediction',
      name: 'Crowd Prediction',
      description: 'Predicted busy hours by day of week',
      url: '/data/crowd-prediction/'
    });
  }

  return datasets;
}

async function main() {
  console.log('🔨 Building content index...\n');

  const [menuItems, articles, datasets] = await Promise.all([
    loadMenuItems(),
    Promise.resolve(loadArticles()),
    Promise.resolve(loadDataSets())
  ]);

  const index = {
    generatedAt: new Date().toISOString(),
    stats: {
      menuItems: menuItems.length,
      articles: articles.length,
      datasets: datasets.length
    },
    menuItems,
    articles,
    datasets
  };

  fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));

  console.log(`✅ Content index generated at ${outputPath}`);
  console.log(`   Menu items: ${menuItems.length}`);
  console.log(`   Articles: ${articles.length}`);
  console.log(`   Datasets: ${datasets.length}`);
}

main().catch(err => {
  console.error('❌ Failed to build content index:', err.message);
  process.exit(1);
});

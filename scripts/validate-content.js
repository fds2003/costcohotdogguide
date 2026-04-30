import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import csv from 'csv-parser';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const errors = [];
const warnings = [];

function error(msg) {
  errors.push(msg);
  console.error(`❌ ${msg}`);
}

function warn(msg) {
  warnings.push(msg);
  console.warn(`⚠️  ${msg}`);
}

function info(msg) {
  console.log(`ℹ️  ${msg}`);
}

// ─── Validate menu-items.csv ───
async function validateMenuItems() {
  const csvPath = path.join(rootDir, 'src', 'content', 'menu-items.csv');
  if (!fs.existsSync(csvPath)) {
    warn('menu-items.csv not found — skipping CSV validation');
    return;
  }

  const requiredColumns = ['slug', 'name', 'category', 'price', 'calories', 'protein', 'fat', 'sodium', 'carbs', 'description'];
  const rows = [];

  await new Promise((resolve, reject) => {
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (row) => rows.push(row))
      .on('end', resolve)
      .on('error', reject);
  });

  if (rows.length === 0) {
    error('menu-items.csv is empty');
    return;
  }

  const columns = Object.keys(rows[0]);
  const missing = requiredColumns.filter((c) => !columns.includes(c));
  if (missing.length > 0) {
    error(`menu-items.csv missing required columns: ${missing.join(', ')}`);
  }

  const slugs = new Set();
  rows.forEach((row, idx) => {
    const line = idx + 2;
    if (!row.slug || row.slug.trim() === '') {
      error(`menu-items.csv row ${line}: missing slug`);
    } else {
      if (slugs.has(row.slug)) {
        error(`menu-items.csv row ${line}: duplicate slug "${row.slug}"`);
      }
      slugs.add(row.slug);
    }
    if (!row.name || row.name.trim() === '') {
      error(`menu-items.csv row ${line}: missing name`);
    }
    if (!row.price || row.price.trim() === '') {
      error(`menu-items.csv row ${line}: missing price`);
    }
  });

  info(`Validated ${rows.length} menu item(s)`);
}

// ─── Validate Markdown articles ───
async function validateArticles() {
  const articlesDir = path.join(rootDir, 'src', 'content', 'articles');
  if (!fs.existsSync(articlesDir)) {
    warn('articles directory not found — skipping article validation');
    return;
  }

  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith('.md'));
  if (files.length === 0) {
    warn('No .md files found in articles directory');
    return;
  }

  const requiredFrontmatter = ['title', 'description'];

  files.forEach((file) => {
    const filePath = path.join(articlesDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(content);

    requiredFrontmatter.forEach((field) => {
      if (!parsed.data[field] || String(parsed.data[field]).trim() === '') {
        error(`articles/${file}: missing frontmatter field "${field}"`);
      }
    });
  });

  info(`Validated ${files.length} article(s)`);
}

// ─── Validate data files ───
async function validateDataFiles() {
  const dataDir = path.join(rootDir, 'src', 'content', 'data');
  if (!fs.existsSync(dataDir)) {
    warn('data directory not found — skipping data validation');
    return;
  }

  // Validate crowd-prediction.json if present
  const crowdPath = path.join(dataDir, 'crowd-prediction.json');
  if (fs.existsSync(crowdPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(crowdPath, 'utf-8'));
      if (!Array.isArray(data)) {
        error('crowd-prediction.json must be an array');
      } else {
        info(`Validated crowd-prediction.json (${data.length} day entries)`);
      }
    } catch (e) {
      error(`crowd-prediction.json is invalid JSON: ${e.message}`);
    }
  }

  // Validate hotdog-prices.csv if present
  const pricesPath = path.join(dataDir, 'hotdog-prices.csv');
  if (fs.existsSync(pricesPath)) {
    const rows = [];
    await new Promise((resolve, reject) => {
      fs.createReadStream(pricesPath)
        .pipe(csv())
        .on('data', (row) => rows.push(row))
        .on('end', resolve)
        .on('error', reject);
    });
    if (rows.length === 0) {
      error('hotdog-prices.csv is empty');
    } else {
      info(`Validated hotdog-prices.csv (${rows.length} entries)`);
    }
  }

  // Validate nutrition-data.csv if present
  const nutritionPath = path.join(dataDir, 'nutrition-data.csv');
  if (fs.existsSync(nutritionPath)) {
    const rows = [];
    await new Promise((resolve, reject) => {
      fs.createReadStream(nutritionPath)
        .pipe(csv())
        .on('data', (row) => rows.push(row))
        .on('end', resolve)
        .on('error', reject);
    });
    if (rows.length === 0) {
      error('nutrition-data.csv is empty');
    } else {
      info(`Validated nutrition-data.csv (${rows.length} entries)`);
    }
  }
}

// ─── Main ───
async function main() {
  console.log('🔍 Validating content...\n');

  await validateMenuItems();
  await validateArticles();
  await validateDataFiles();

  console.log('\n─────────────────────────');
  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ All content validation passed!');
    process.exit(0);
  } else if (errors.length === 0) {
    console.log(`⚠️  ${warnings.length} warning(s), no errors.`);
    process.exit(0);
  } else {
    console.log(`❌ ${errors.length} error(s), ${warnings.length} warning(s).`);
    process.exit(1);
  }
}

main();

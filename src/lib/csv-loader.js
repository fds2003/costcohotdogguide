import fs from 'node:fs';
import path from 'node:path';
import csv from 'csv-parser';

const rootDir = process.cwd();

export function loadMenuItems() {
  const filePath = path.join(rootDir, 'src', 'content', 'menu-items.csv');
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        // Parse competitor_data JSON if present
        if (row.competitor_data) {
          try {
            row.competitorData = JSON.parse(row.competitor_data);
          } catch {
            row.competitorData = {};
          }
        }
        // Parse numeric fields
        row.price = parseFloat(row.price) || 0;
        row.calories = parseInt(row.calories, 10) || 0;
        row.protein = parseInt(row.protein, 10) || 0;
        row.fat = parseInt(row.fat, 10) || 0;
        row.sodium = parseInt(row.sodium, 10) || 0;
        row.carbs = parseInt(row.carbs, 10) || 0;
        results.push(row);
      })
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}

export function loadNutritionData() {
  const filePath = path.join(rootDir, 'src', 'content', 'data', 'nutrition-data.csv');
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        row.calories = parseInt(row.calories, 10) || 0;
        row.total_fat = parseFloat(row.total_fat) || 0;
        row.saturated_fat = parseFloat(row.saturated_fat) || 0;
        row.trans_fat = parseFloat(row.trans_fat) || 0;
        row.cholesterol = parseInt(row.cholesterol, 10) || 0;
        row.sodium = parseInt(row.sodium, 10) || 0;
        row.total_carbs = parseInt(row.total_carbs, 10) || 0;
        row.dietary_fiber = parseInt(row.dietary_fiber, 10) || 0;
        row.sugars = parseInt(row.sugars, 10) || 0;
        row.protein = parseInt(row.protein, 10) || 0;
        results.push(row);
      })
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}

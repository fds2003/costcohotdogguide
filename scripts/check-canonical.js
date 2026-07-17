import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(__filename);
const PAGES_DIR = path.join(SCRIPT_DIR, '..', 'src', 'src', 'pages');

const issues = [];

function scanDir(dir, depth = 0) {
  if (depth > 5) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath, depth + 1);
    } else if (entry.name.endsWith('.astro')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const manualCanonicals = content.match(/<link rel="canonical" href="([^"]+)"/g);
      if (manualCanonicals) {
        issues.push({
          file: fullPath.replace(PAGES_DIR, ''),
          canonicals: manualCanonicals.map(c => c.match(/href="([^"]+)"/)[1]),
        });
      }
      const baseLayoutProps = content.match(/<BaseLayout[\s\S]*?canonical="([^"]+)"/);
      if (baseLayoutProps) {
        issues.push({
          file: fullPath.replace(PAGES_DIR, ''),
          type: 'BaseLayout canonical prop',
          value: baseLayoutProps[1],
        });
      }
    }
  }
}

scanDir(PAGES_DIR);

if (issues.length === 0) {
  console.log('OK: No manual canonical conflicts found.');
} else {
  console.log(`Found ${issues.length} potential canonical issues:\n`);
  for (const issue of issues) {
    console.log(`  ${issue.file}`);
    if (issue.canonicals) {
      for (const c of issue.canonicals) {
        console.log(`    - Manual canonical: ${c}`);
      }
    }
    if (issue.type) {
      console.log(`    - ${issue.type}: ${issue.value}`);
    }
  }
}

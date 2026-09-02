import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = 'costcohotdogguide.com';
const API_KEY = 'df217e4604f54630a90fa9eaf93a6411';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap-0.xml`;
const LOCAL_SITEMAP = path.join(__dirname, '..', 'dist', 'sitemap-0.xml');

async function getUrls() {
  let xmlContent = '';
  
  // 1. Try local sitemap in dist first if available
  if (fs.existsSync(LOCAL_SITEMAP)) {
    console.log(`[IndexNow] Reading local sitemap: ${LOCAL_SITEMAP}`);
    xmlContent = fs.readFileSync(LOCAL_SITEMAP, 'utf-8');
  } else {
    // 2. Fetch from live sitemap
    console.log(`[IndexNow] Fetching online sitemap: ${SITEMAP_URL}`);
    try {
      const res = await fetch(SITEMAP_URL);
      if (res.ok) {
        xmlContent = await res.text();
      } else {
        console.warn(`[IndexNow] Failed to fetch online sitemap: HTTP ${res.status}`);
      }
    } catch (err) {
      console.warn(`[IndexNow] Network error fetching online sitemap: ${err.message}`);
    }
  }

  const urls = [];
  if (xmlContent) {
    const matches = xmlContent.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g);
    for (const match of matches) {
      urls.push(match[1].trim());
    }
  }

  // Fallback: at least submit the home page
  if (urls.length === 0) {
    console.log('[IndexNow] No URLs parsed from sitemap, using homepage fallback.');
    urls.push(`https://${HOST}/`);
  }

  return Array.from(new Set(urls));
}

async function submitToIndexNow(urls) {
  console.log(`[IndexNow] Submitting ${urls.length} URLs for host: ${HOST}...`);

  const payload = {
    host: HOST,
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow'
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`[IndexNow] Sending request to ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      if (response.status === 200 || response.status === 202) {
        console.log(`[IndexNow] Successfully submitted to ${endpoint} (HTTP ${response.status})`);
      } else {
        const text = await response.text();
        console.error(`[IndexNow] Error from ${endpoint} (HTTP ${response.status}): ${text}`);
      }
    } catch (err) {
      console.error(`[IndexNow] Failed to reach ${endpoint}: ${err.message}`);
    }
  }
}

async function main() {
  try {
    const urls = await getUrls();
    console.log(`[IndexNow] Discovered ${urls.length} distinct URL(s).`);
    await submitToIndexNow(urls);
    console.log('[IndexNow] Submission process finished.');
  } catch (error) {
    console.error('[IndexNow] Fatal error during submission:', error);
    process.exit(1);
  }
}

main();

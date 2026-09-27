import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const keys = (await readdir(root)).filter(name => /^[a-f0-9]{32}\.txt$/.test(name));
if (keys.length !== 1) throw new Error('Expected one public IndexNow ownership file');
const key = (await readFile(join(root, keys[0]), 'utf8')).trim();
if (keys[0] !== `${key}.txt`) throw new Error('Key filename/content mismatch');
const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
const allowed = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
const args = process.argv.slice(2);
if (args.some(arg => arg.startsWith('--') && !['--submit', '--all'].includes(arg))) throw new Error('Unknown option');
const supplied = args.filter(arg => !arg.startsWith('--'));
const urls = [...new Set(args.includes('--all') ? allowed : supplied)];
if (!urls.length) throw new Error('Specify changed canonical URLs, or --all for initial setup. Default is dry-run; --submit sends.');
for (const url of urls) {
  if (!allowed.includes(url) || new URL(url).origin !== 'https://haloled.in' || new URL(url).hash) {
    throw new Error(`URL is not an indexable canonical sitemap entry: ${url}`);
  }
}
const payload = { host: 'haloled.in', key, keyLocation: `https://haloled.in/${keys[0]}`, urlList: urls };
if (!args.includes('--submit')) {
  console.log('DRY RUN — no network requests. Public ownership key; not an account credential.');
  console.log(JSON.stringify(payload, null, 2));
} else {
  // Never notify search engines before the key and matching canonical pages are live.
  const options = { redirect: 'error', signal: AbortSignal.timeout(20000) };
  const response = await fetch(payload.keyLocation, options);
  if (response.status !== 200 || (await response.text()).trim() !== key) throw new Error('Live key is unavailable or incorrect');
  for (const url of urls) {
    const page = await fetch(url, { ...options, signal: AbortSignal.timeout(20000) });
    const html = await page.text();
    if (page.status !== 200 || /noindex/i.test(page.headers.get('x-robots-tag') || '') ||
        /<meta\b(?=[^>]*name=["']robots["'])(?=[^>]*content=["'][^"']*noindex)[^>]*>/i.test(html) ||
        !html.includes(`rel="canonical" href="${url}"`)) throw new Error(`Live canonical/indexability check failed: ${url}`);
  }
  const result = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload), signal: AbortSignal.timeout(20000)
  });
  if (![200, 202].includes(result.status)) throw new Error(`IndexNow HTTP ${result.status}: ${await result.text()}`);
  console.log(`IndexNow HTTP ${result.status}: received${result.status === 202 ? '; key validation pending' : ''}. This does not guarantee indexing.`);
}

import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { parseHTML } from 'linkedom';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = resolve(root, 'dist');
// Only this dedicated generated directory may be cleared.
if (output !== join(resolve(root), 'dist')) throw new Error('Unexpected build directory');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

// Explicit public allowlist: docs, scripts, dependencies and repository metadata stay private.
const publicFiles = ['index.html', '404.html', 'led-video-wall-kattappana.html',
  'cctv-installation-kattappana.html', 'robots.txt', 'sitemap.xml', '_redirects',
  'assets', 'css', 'js', 'blog', 'connect'];
const keyFiles = (await readdir(root)).filter(name => /^[a-f0-9]{32}\.txt$/.test(name));
for (const name of [...publicFiles, ...keyFiles]) {
  await cp(join(root, name), join(output, name), { recursive: true });
}

const data = await readFile(join(root, 'blog/data/articles.js'), 'utf8');
const renderer = await readFile(join(root, 'blog/blog.js'), 'utf8');
async function renderBlog(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) { await renderBlog(file); continue; }
    if (entry.name !== 'index.html') continue;
    const { document, window } = parseHTML(await readFile(file, 'utf8'));
    // Execute only the two local blog scripts, never analytics or remote scripts.
    // The same templates supply static HTML and the existing browser interactions.
    const context = vm.createContext({ document, window, location: { pathname: '/blog/' }, Intl, Date });
    vm.runInContext(data, context, { timeout: 1000 });
    vm.runInContext(renderer, context, { timeout: 1000 });
    if (document.querySelectorAll('h1').length !== 1) throw new Error(`Missing blog content: ${file}`);
    // LinkeDOM serializes title as raw text; encode bare ampersands for HTML validators.
    const html = document.toString().replace(/(<title>)(.*?)(<\/title>)/s,
      (_, start, title, end) => start + title.replace(/&(?!(?:#\d+|#x[\da-f]+|\w+);)/gi, '&amp;') + end);
    await writeFile(file, html);
  }
}
await renderBlog(join(output, 'blog'));
console.log('Built dist/: static blog HTML plus public assets; docs and tooling excluded.');

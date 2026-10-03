import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';
import vm from 'node:vm';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');
const origin = 'https://haloled.in';
function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]);
}
const pages = files(dist).filter(file => file.endsWith('.html')).map(file => {
  let path = '/' + file.slice(dist.length + 1).replaceAll('\\', '/');
  path = path.replace(/index\.html$/, '').replace(/\.html$/, '');
  return { file, path, document: parseHTML(readFileSync(file, 'utf8')).document };
});
const byPath = new Map(pages.map(page => [page.path, page]));
const normalize = path => path.replace(/index\.html$/, '').replace(/\.html$/, '');
const sitemap = [...readFileSync(join(dist, 'sitemap.xml'), 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

test('blog browser rerender preserves prerendered entity identities without duplicates', () => {
  const data = readFileSync(join(root, 'blog/data/articles.js'), 'utf8');
  const renderer = readFileSync(join(root, 'blog/blog.js'), 'utf8');
  for (const page of pages.filter(page => page.path.startsWith('/blog/'))) {
    const { document, window } = parseHTML(readFileSync(page.file, 'utf8'));
    const graphs = () => [...document.querySelectorAll('script[type="application/ld+json"]')]
      .flatMap(script => JSON.parse(script.textContent)['@graph'] || []);
    const before = JSON.stringify(graphs());
    const context = vm.createContext({ document, window, location: { pathname: page.path }, Intl, Date });
    vm.runInContext(data, context, { timeout: 1000 });
    vm.runInContext(renderer, context, { timeout: 1000 });
    assert.equal(JSON.stringify(graphs()), before, page.path);
    assert.equal(document.querySelectorAll('h1').length, 1, page.path);
  }
});

test('deployment excludes internal files and dependencies', () => {
  for (const name of ['docs', 'scripts', 'node_modules', '.git', 'README.md', 'package.json']) assert.equal(existsSync(join(dist, name)), false, name);
  assert.ok(existsSync(join(dist, '404.html')));
});
test('all useful pages have unique titles, descriptions, H1s and self canonicals without JS', () => {
  const titles = new Set(), descriptions = new Set();
  for (const { path, document } of pages) {
    assert.equal(document.querySelectorAll('h1').length, 1, path);
    const ids = [...document.querySelectorAll('[id]')].map(el => el.id);
    assert.equal(new Set(ids).size, ids.length, `duplicate IDs: ${path}`);
    assert.ok(document.title.includes('Halo Technologies'), path);
    if (/noindex/.test(document.querySelector('meta[name="robots"]')?.content || '')) continue;
    assert.equal(document.querySelectorAll('link[rel="canonical"]').length, 1, path);
    assert.equal(document.querySelector('link[rel="canonical"]').getAttribute('href'), origin + path, path);
    assert.ok(!titles.has(document.title), path); titles.add(document.title);
    const description = document.querySelector('meta[name="description"]')?.content;
    assert.ok(description && !descriptions.has(description), path); descriptions.add(description);
    assert.ok(sitemap.includes(origin + path), `missing sitemap: ${path}`);
  }
  assert.equal(titles.size, 13);
});
test('sitemap only lists unique indexable canonical pages', () => {
  assert.equal(new Set(sitemap).size, sitemap.length);
  assert.equal(sitemap.length, 13);
  for (const url of sitemap) {
    const target = new URL(url); assert.equal(target.origin, origin); assert.equal(target.hash, '');
    const page = byPath.get(target.pathname); assert.ok(page, url);
    assert.doesNotMatch(page.document.querySelector('meta[name="robots"]')?.content || '', /noindex/);
  }
});
test('internal link graph and fragment destinations resolve', () => {
  for (const { path, document } of pages) {
    for (const a of document.querySelectorAll('a[href]')) {
      const url = new URL(a.getAttribute('href'), origin + path);
      if (url.origin !== origin) continue;
      const target = byPath.get(normalize(url.pathname));
      if (!target) { assert.ok(existsSync(join(dist, decodeURIComponent(url.pathname))), `${path} -> ${url}`); continue; }
      if (url.hash) assert.ok(target.document.getElementById(decodeURIComponent(url.hash.slice(1))), `${path} -> ${url}`);
    }
    for (const image of document.querySelectorAll('img')) {
      assert.ok(image.hasAttribute('alt'), `missing alt: ${path}`);
      if (image.id === 'lbImg') continue;
      assert.ok(image.getAttribute('width') && image.getAttribute('height'), `image dimensions: ${path}`);
    }
    for (const resource of document.querySelectorAll('img[src],script[src],link[href]')) {
      const value = resource.getAttribute('src') || resource.getAttribute('href');
      if (resource.getAttribute('rel') === 'canonical') continue;
      const url = new URL(value, origin + path);
      if (url.origin === origin) assert.ok(existsSync(join(dist, decodeURIComponent(url.pathname))), `${path}: missing resource ${value}`);
    }
  }
});
test('JSON-LD has one business definition and consistent provider/publisher references', () => {
  let businesses = 0, websites = 0, articles = 0;
  function visit(value) {
    if (!value || typeof value !== 'object') return;
    if (value['@type'] === 'LocalBusiness') { businesses++; assert.equal(value['@id'], origin + '/#business'); assert.equal(value.name, 'Halo Technologies'); }
    if (value['@type'] === 'WebSite') { websites++; assert.equal(value.publisher['@id'], origin + '/#business'); }
    if (value['@type'] === 'Article') articles++;
    for (const role of ['provider', 'publisher', 'author']) if (value[role]) assert.equal(value[role]['@id'], origin + '/#business');
    Object.values(value).forEach(visit);
  }
  for (const { document } of pages) for (const script of document.querySelectorAll('script[type="application/ld+json"]')) visit(JSON.parse(script.textContent));
  assert.equal(businesses, 1); assert.equal(websites, 1); assert.equal(articles, 6);
});
test('analytics retained on every page that previously included it; public robots allowed', () => {
  for (const { file, document } of pages) {
    const source = join(root, file.slice(dist.length + 1));
    if (readFileSync(source, 'utf8').includes('G-9Q00K5GDLY')) assert.ok(document.toString().includes('G-9Q00K5GDLY'));
  }
  const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
  assert.match(robots, /User-agent: \*\s+Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/haloled\.in\/sitemap.xml/);
  assert.doesNotMatch(robots, /Disallow:\s*\//);
});

test('page and service identities form a connected graph without dangling references', () => {
  const definitions = new Map();
  const references = new Set();
  for (const { path, document } of pages) {
    const graph = [...document.querySelectorAll('script[type="application/ld+json"]')]
      .flatMap(script => JSON.parse(script.textContent)['@graph'] || []);
    const noindex = /noindex/.test(document.querySelector('meta[name="robots"]')?.content || '');
    const pageNodes = graph.filter(node => ['WebPage', 'CollectionPage'].includes(node['@type']));
    assert.equal(pageNodes.length, noindex ? 0 : 1, path);
    if (!noindex) {
      const node = pageNodes[0];
      assert.equal(node['@id'], origin + path + '#webpage');
      assert.equal(node.url, origin + path);
      assert.equal(node.isPartOf['@id'], origin + '/#website');
      assert.equal(node.name, document.title);
    }
    function visit(value) {
      if (!value || typeof value !== 'object') return;
      if (value['@id']) {
        if (value['@type']) {
          assert.ok(!definitions.has(value['@id']), `duplicate definition: ${value['@id']}`);
          definitions.set(value['@id'], value);
        } else references.add(value['@id']);
      }
      Object.values(value).forEach(visit);
    }
    graph.forEach(visit);
  }
  for (const id of references) assert.ok(definitions.has(id), `unresolved entity: ${id}`);
  for (const path of ['/led-video-wall-kattappana', '/cctv-installation-kattappana']) {
    const service = definitions.get(origin + path + '#service');
    assert.equal(service['@type'], 'Service');
    assert.equal(service.provider['@id'], origin + '/#business');
    assert.equal(service.mainEntityOfPage['@id'], origin + path + '#webpage');
    assert.equal(definitions.get(origin + path + '#webpage').mainEntity['@id'], service['@id']);
    assert.ok(service.areaServed.some(area => area.name === 'Kattappana'));
    assert.ok(service.areaServed.some(area => area.name === 'Idukki'));
    const breadcrumb = definitions.get(origin + path + '#breadcrumb');
    const visible = byPath.get(path).document.querySelector('[aria-label="Breadcrumb"]');
    assert.ok(visible);
    assert.equal(visible.querySelector('[aria-current="page"]').textContent,
      breadcrumb.itemListElement.at(-1).name);
  }
  const offers = definitions.get(origin + '/#business').makesOffer;
  for (const path of ['/led-video-wall-kattappana', '/cctv-installation-kattappana']) {
    assert.equal(offers.filter(offer => offer.itemOffered['@id'] === origin + path + '#service').length, 1);
  }
});

test('P10 case study exposes real media and content in static HTML with lightweight playback', () => {
  const path = '/blog/article/p10-led-scrolling-board-installation-kattappana/';
  const document = byPath.get(path).document;
  const text = document.querySelector('article').textContent;
  for (const detail of ['New Bus Stand', '192 cm', '96 cm', 'HUIDU', 'since 2018', 'local Wi-Fi']) assert.ok(text.includes(detail), detail);
  assert.equal(document.querySelectorAll('video').length, 3);
  for (const video of document.querySelectorAll('video')) {
    assert.ok(video.hasAttribute('controls'));
    assert.ok(!video.hasAttribute('autoplay'));
    assert.equal(video.getAttribute('preload'), 'none');
    assert.ok(video.getAttribute('width') && video.getAttribute('height'));
    assert.ok(document.getElementById(video.getAttribute('aria-describedby')));
    const source = video.querySelector('source');
    assert.equal(source.getAttribute('type'), 'video/mp4');
    for (const mediaPath of [source.getAttribute('src'), video.getAttribute('poster')]) {
      assert.ok(mediaPath.startsWith('/assets/blog/p10-'));
      assert.ok(existsSync(join(dist, mediaPath)), mediaPath);
    }
    const bytes = readFileSync(join(dist, source.getAttribute('src')));
    assert.ok(bytes.indexOf('moov') > 0 && bytes.indexOf('moov') < bytes.indexOf('mdat'), 'MP4 fast-start metadata');
  }
  const graph = JSON.parse(document.getElementById('structuredData').textContent)['@graph'];
  const article = graph.find(node => node['@type'] === 'Article');
  assert.equal(article.datePublished, '2026-10-03');
  assert.equal(article.about['@id'], origin + '/led-video-wall-kattappana#service');
  assert.equal(article.image, document.querySelector('meta[property="og:image"]').content);
  assert.ok(article.image.includes('/assets/blog/p10-'));
  assert.ok(!graph.some(node => ['FAQPage', 'Review', 'AggregateRating', 'VideoObject'].includes(node['@type'])));
  for (const sourcePath of ['/', '/led-video-wall-kattappana', '/blog/', '/blog/category/led-displays/', '/blog/article/led-display-vs-lcd-retail/']) {
    assert.ok([...byPath.get(sourcePath).document.querySelectorAll('a[href]')].some(a => new URL(a.getAttribute('href'), origin + sourcePath).pathname === path), sourcePath);
  }
});

test('plantation case study is static, connected and uses supplied lightweight media', () => {
  const path = '/blog/article/cctv-cardamom-plantation-kumily/';
  const document = byPath.get(path).document;
  for (const detail of ['Vellaramkunnu', '8-channel Hikvision', 'Four 3K', '2MP ColorVu', 'CAT6', 'SIM-based', 'does not guarantee']) assert.ok(document.querySelector('article').textContent.includes(detail), detail);
  const graph = JSON.parse(document.getElementById('structuredData').textContent)['@graph'];
  const article = graph.find(node => node['@type'] === 'Article');
  assert.equal(article.dateModified, '2026-10-03');
  assert.equal(article.about['@id'], origin + '/cctv-installation-kattappana#service');
  assert.equal(article.image, document.querySelector('meta[property="og:image"]').content);
  const breadcrumb = graph.find(node => node['@type'] === 'BreadcrumbList');
  assert.deepEqual(breadcrumb.itemListElement.map(item => item.name), ['Home', 'Blog', 'CCTV for a Cardamom Plantation near Kumily']);
  assert.equal(document.querySelector('[aria-current="page"]').textContent, breadcrumb.itemListElement.at(-1).name);
  const video = document.querySelector('video');
  assert.equal(video.getAttribute('preload'), 'none');
  assert.ok(video.hasAttribute('controls') && !video.hasAttribute('autoplay'));
  for (const media of [video.getAttribute('poster'), video.querySelector('source').getAttribute('src')]) assert.ok(existsSync(join(dist, media)));
  const bytes = readFileSync(join(dist, video.querySelector('source').getAttribute('src')));
  assert.ok(bytes.indexOf('moov') < bytes.indexOf('mdat'));
  for (const source of ['/blog/', '/blog/category/cctv/']) assert.ok([...byPath.get(source).document.querySelectorAll('a[href]')].some(a => a.getAttribute('href') === path));
});

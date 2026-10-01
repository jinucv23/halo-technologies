# GEO Day 2: local entity and service authority

Audit and implementation: 1 October 2026. This internal document is excluded from the public build.

## Day 1 close-out and production baseline

- Day 1 commit: `e9586ad17b1d3dbb2811f2f4eb6cabd1f4b3151d`. Cloudflare deployment: `56937783-4932-4213-8ede-ab631a39aae1`.
- Production configuration was checked through the Cloudflare API: main branch, `npm run build`, output `dist`, root directory empty, `NODE_VERSION=22`. The Day 1 build log records Node 22.22.0 and npm 10.9.2. No hosting configuration changes are needed.
- Fresh pre-change requests checked all 22 HTML pages and all 11 sitemap URLs. Indexable URLs returned 200, self-referencing canonicals, one static H1 and valid JSON-LD. Blog article content was present in returned HTML.
- `robots.txt` returned 200 text/plain; `sitemap.xml` returned 200 application/xml with 11 valid canonical URLs. Identified audit and Googlebot-user-agent requests, including no-cache requests, returned XML rather than an HTML fallback. A spoofed user agent is not proof of genuine Googlebot access.
- `https://www.haloled.in/` now returns 301 to the apex. Nested paths and query strings are preserved. Service URLs with a trailing slash normalize via 308 to the established extensionless, no-slash canonical. HTTP upgrades work; HTTP www can take two valid hops. No loop was found.
- The user reports a verified Search Console domain property, a successful homepage Live Test (available to Google/can be indexed), indexing requests for the homepage and service slash variants, and sitemap submission. These are user-supplied account results, not independently inspected account data or evidence of indexing.
- The reported “Sitemap is HTML” entry was last read on 24 November 2023. Current headers, body and routing do not reproduce it. Stale historical reporting is the likely explanation; the historical cause cannot be proven from today's requests. Leave the working sitemap and security configuration intact and check the next Search Console read.
- Earlier open items in `geo-day-01-audit.md` about build-output deployment and www redirects are historical and are superseded by these checks. No broad firewall/security relaxation is justified.

## Entity and content audit

The homepage already identifies Halo Technologies as a technology integration company in Kattappana, Idukki, Kerala. Its About section explains the Halo LED rebrand. Contact details, title, description, one H1, analytics, logo dimensions/alt text and crawlable service content were already present. There is no standalone About page; retain the existing homepage section.

The existing business ID is `https://haloled.in/#business`. It is a LocalBusiness, which is already an Organization subtype; adding a second Organization would duplicate the business. WebSite already uses `https://haloled.in/#website`. Service and article nodes previously referenced the business but lacked stable identities and page relationships. Service breadcrumb schema lacked corresponding visible service breadcrumbs. The LED homepage card lacked a direct heading link to its service page.

The two existing service pages provide enough distinct content to strengthen today. LED video walls, digital signage, scrolling boards and price displays belong together on the existing LED page for now. Vehicle/bus CCTV, GPS/dash cams, IoT and gate automation are supported as existing homepage offerings, but the repository does not supply enough verified project-specific detail for separate useful pages.

## Implemented changes and files

| File | Change and reason | Risk/mitigation |
| --- | --- | --- |
| `index.html` | Link LED card to existing service page; clarify vehicle CCTV, GPS/dash cam and automation summaries; add district to footer; connect homepage WebPage and existing business offers to stable service IDs. Merge two overlapping LED offer summaries. | Existing hero, design, company/contact facts and remaining offerings retained. |
| `led-video-wall-kattappana.html` | Explicit local provider/service introduction; explain display formats, viewing distance, content management, power/mounting/service access; visible breadcrumb and related CCTV link; Service/WebPage/Breadcrumb IDs. | Existing sections, H1, URL, area coverage and conversion routes retained; no specifications or guarantees invented. |
| `cctv-installation-kattappana.html` | Clarify local provider, coverage goals, lighting/recording/remote viewing considerations and equipment-dependent detection; visible breadcrumb and related display link; connected schema IDs. | Existing service scope, contact routes and H1 retained. |
| `css/style.css` | Small breadcrumb text treatment using existing colors. | Responsive wrapping; no theme, navigation or logo changes. |
| `blog/data/articles.js` | Map CCTV and display categories to actual existing service IDs. | No new articles, dates, service pages or unsupported entities. |
| `blog/blog.js` | Connect indexable library/category CollectionPages and Article/WebPage/Breadcrumb identities; article topic references; consistent OG site name/URL and article image. Replace rather than duplicate prerendered page nodes on browser execution. | Static and browser graph parity covered by regression test; existing search/filter/navigation retained. |
| `scripts/site.test.mjs` | Validate graph references, unique IDs, reciprocal service/page links, visible service breadcrumbs and renderer parity. | Tests exercise built HTML and the existing renderer. |
| `docs/geo-day-02-audit.md` | Audit, decisions, validation, rollout and next steps. | Internal only. |

The graph has one LocalBusiness, one WebSite, seven WebPages, four CollectionPages, two identified detailed Services, four Articles and six BreadcrumbLists. Six existing nested service summaries remain within business offers; no mass schema expansion. Service provider and Article author/publisher references continue to use `#business`. Existing FAQs remain unchanged. No `knowsAbout` keyword list was added.

Schema design references: [LocalBusiness](https://schema.org/LocalBusiness), [Service](https://schema.org/Service), and [Google organization guidance](https://developers.google.com/search/docs/appearance/structured-data/organization). Valid markup and connected identities do not establish rich-result eligibility, indexing, rankings or AI citations.

## Preserved facts and missing evidence

- The official logo artwork, responsive logo CSS, hero headlines, brand palette, animations, navigation structure, phone `+91 75949 92523`, email, canonical paths, domain and analytics remain unchanged.
- `Halo LED` is retained only in the existing About history and business alternateName. No public-facing `HaloTech` name is retained. The existing Instagram URL containing `halo_tech` is an intentional technical URL, not a company-name label.
- Existing address, founder/proprietor information, service areas, Google Maps and Instagram links are retained from first-party site content. This audit does not independently verify profile ownership or legal business records. No new social profiles, coordinates, hours, prices, ratings, dates, statistics or certifications are asserted.
- Future evidence needed: permission to publish project photos/details, exact hardware and supported MDVR/GPS/dash-cam capabilities, installation process and constraints, supported automation protocols/gate types, maintenance/warranty terms, actual service coverage and any certification model documentation. Existing model-specific STQC wording should be reviewed editorially against current supplied products before expansion.

## Validation and deployment

Clean `npm.cmd ci`: 33 packages installed, zero reported vulnerabilities. Local Node is 24.12.0; Cloudflare uses configured Node 22. `npm.cmd run build`, `npm.cmd run check`, `npm.cmd test` (8/8), `npm.cmd run validate:html` and `git diff --check` passed. Generated links, fragments and resources resolve; graph references resolve across the site; no duplicate entity definitions or browser-rerender graph changes were found.

Headless Edge checked all 22 pages at 320, 390, 768, 901, 1024 and 1440 pixels: no horizontal overflow or uncaught JavaScript errors. Logo aspect ratios/bounds and mobile menu open/close/Escape behavior passed; existing blog search/filter and gallery lightbox passed. Screenshots of desktop and small-mobile layouts were inspected. All nonempty titles, descriptions and canonicals are unique across the 22 rendered pages. A generated-public-HTML brand scan found no HaloTech references. Baseline comparisons confirm unchanged homepage/service H1s, header markup and canonical tags. Source diff confirms logo assets, phone, analytics, robots and sitemap are unchanged.

Deployment is authorized after these checks; the exact production commit/deployment and post-deployment results will be reported in the completion message. This committed audit records the pre-deployment verification, rather than claiming a future deployment succeeded.

Initial rollout: `c210994ebdcb3eca44870f0facfaf15513aa5081`, Cloudflare production deployment `d11a91d4-081f-4d4c-8559-a9d46552f6b4`, succeeded using Node 22.22.0. Live checks confirmed the new graph matched the build, all 22 pages remained valid, all 11 sitemap URLs returned direct canonical 200 responses, XML and redirect behavior remained correct, and unknown routes returned 404. The live web font exposed a 13px overflow at 320px in the new CCTV related-service button; the local offline-font test had not caught it. The label was shortened to “LED displays and signage”. Rechecking the corrected page with the real web font at all six widths passed; build, all eight tests and HTML validation passed again. The follow-up deployment and final live results are reported in the completion message.

No changes to `robots.txt`, `sitemap.xml`, `_redirects`, package dependencies or deployment configuration. Sitemap membership remains 11 canonical URLs. Nine empty categories remain noindex; Connect and the 404 page retain their existing robots behavior.

## Search Console follow-up

Use Live Test, then request indexing for the changed canonical pages below as quota permits. Prioritize the first three. Requests are optional discovery signals, not proof or a guarantee of indexing. Use the established service URLs without a trailing slash.

1. https://haloled.in/
2. https://haloled.in/led-video-wall-kattappana
3. https://haloled.in/cctv-installation-kattappana
4. https://haloled.in/blog/article/cctv-camera-placement-guide/
5. https://haloled.in/blog/article/poe-vs-wifi-cctv/
6. https://haloled.in/blog/article/led-display-vs-lcd-retail/
7. https://haloled.in/blog/article/network-cabling-new-office/
8. https://haloled.in/blog/
9. https://haloled.in/blog/category/cctv/
10. https://haloled.in/blog/category/led-displays/
11. https://haloled.in/blog/category/networking/

The sitemap is already submitted and unchanged; routine resubmission is not required for this content/schema update. Check the latest read/status for `https://haloled.in/sitemap.xml`. If a fresh read still reports HTML, investigate that fresh response and account evidence before changing working routing or security. Do not repeatedly resubmit based solely on the 2023 message.

## Day 3 priorities

- P0: No reproduced production crawl blocker. Review the next Search Console sitemap read and indexing/crawl reports; distinguish Live Test accessibility from actual indexing. Record baseline impressions/clicks/indexed-page counts using account evidence.
- P1: Collect and confirm first-party business/project evidence and current service/product facts. Review certification wording and publication dates with the owner before editorial expansion. Relevant files: `blog/data/articles.js`, existing service pages; risk is unsupported claims.
- P2: Develop one useful, evidence-backed LED/digital-signage project or planning article and link it to the existing LED page. Expand existing service information only where the owner can substantiate details. Avoid a separate Kattappana/Idukki clone; risk is duplicated intent and thin content.
- P3: Prepare outlines before adding pages: vehicle/bus CCTV together initially (MDVR only when capabilities confirmed); GPS/dash cams initially together unless distinct useful buying guidance warrants separation; home/office IoT automation and gate automation may justify distinct pages once supported systems, installation considerations and examples exist. Do not publish placeholder/location pages.
- Measure real mobile performance before considering image variants or changing the existing client rerender. Keep functionality and artwork intact; no unmeasured performance/ranking claims.

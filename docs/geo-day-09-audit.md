# GEO Day 9: LED scrolling-display service authority

Date: 2026-10-06, Asia/Calcutta. Baseline: 8269a0fe9c4585f7406befdc6fa0870d4676692a. Day 8 is retained, not repeated.

## Audit findings and terminology

Before edits, production contained 16 indexable URLs. All 26 public HTML destinations were checked for HTTP status, canonical/indexability, JSON-LD parity and retained analytics. Sitemap XML, robots, service redirects, the legacy project-category redirect, private-path guards and real missing-page 404 behavior were verified.

No dedicated scrolling-display service authority exists. Homepage advertises LED Scrolling & Advertising Boards; the LED Video Wall page has a short scrolling-board card and #signage section. Digital Signage identifies LED scrolling displays as one format, with a P10 evidence link. Projects and Service Areas explain capabilities and link the completed P10 job. The P10 article is a detailed real-project narrative, not a general service resource. No older equivalent service URL or redirect was found. Navigation/footer discovery, blog categories, metadata, structured data and sitemap were inspected; no business-entity restructuring is needed.

Existing vocabulary is mainly “LED scrolling board”, “scrolling LED board”, “LED scrolling display” and “P10 LED scrolling board”. “LED display board” is broader customer vocabulary; a P10 designation describes pitch, not every board or a separate service. Use LED Scrolling Display as the primary service term and explain scrolling board/message display/electronic LED display board naturally on the same page. Keep all existing article/service slugs and IDs.

Canonical decision: create only https://haloled.in/led-scrolling-display/. No /led-scrolling-board/, /led-display-board/, /p10-led-board/ or location variants; no redirects of established authoritative pages.

## Service resource and evidence separation

Created led-scrolling-display/index.html as static service/selection guidance. It covers definition/terminology, controller/module/power architecture, local versus remote updates, P10 pitch, colour/content capabilities, size/orientation, readability, indoor/outdoor selection, application options, comparison with video walls, assembly/installation/support and cost factors. H1, direct answer, descriptive headings, a focusable mobile comparison table and enquiry paths are crawlable without JavaScript. Existing css/digital-signage.css and js/script.js are reused without modification; no new stylesheets, dependencies or browser JavaScript.

P10 is explained as nominal approximately 10 mm spacing between adjacent pixel centres, with fewer pixels across the same physical area than finer pitch. Readability depends on characters, contrast, message duration, size and viewing position. No universal minimum viewing distance is given. Not every scrolling display is P10; P10 does not establish colour, controller, weather protection or an outdoor rating.

Single-colour boards are evidenced by Halo's separate red and yellow displays. Multicolour/full-colour differences are explained conceptually, with richer visual requirements referred to the existing LED Video Wall service. No new inventory or universal video/graphics capability is asserted. Controller features are conditional; the actual P10 project used local Wi-Fi/mobile-app updating, not cloud or internet remote management.

The video-wall comparison has five factors: content, objective, resolution, control and selection. Supported graphics are acknowledged; a scrolling board is not universally incapable of graphics, and video-wall configurations are not treated as identical. Digital Signage remains the parent application concept, explicitly stated in the introduction and reflected in the Home → Digital Signage → LED Scrolling Display breadcrumb.

Primary technical references checked:

- https://www.myddisplay.com/productdetail/single-color-dip-led-module.html — manufacturer's 10 mm pitch example and colour/configuration distinction; already cited by the original P10 article.
- https://solutions.lg.com/us/what-is-direct-view-led — modular LED display principles, pixel pitch and audience/environment considerations.

Those two general references appear in the P10 section. No manufacturer's module-specific IP rating, product availability, partnership or viewing-distance formula is applied to Halo's completed board.

The new page provides only a short introduction to the actual Kattappana P10 installation and one existing, uncropped red-board WebP (464 × 250, lazy loaded). Full specifications, original media and narrative remain exclusively in the original article. New page contains no videos. The article receives one contextual service-guide link in its existing technical-explanation section; factual narrative, publication dates, media, customer details, supplier wording, category, Article ID and existing LED Service relationship are retained.

## Files, URLs and internal links

Created: led-scrolling-display/index.html and this audit.

Modified: index.html; digital-signage/index.html; led-video-wall-kattappana.html; projects/index.html; service-areas/index.html; blog/data/articles.js; scripts/build.mjs; scripts/site.test.mjs; sitemap.xml.

Public content changes:

- / — existing scrolling-board capability bullet links to the new guide; LocalBusiness gains one new Service offer reference.
- /digital-signage/ — existing scrolling-display heading links to its authority resource; WebPage mentions the new Service.
- /led-video-wall-kattappana — existing scrolling-board card links to the guide; canonical/content scope preserved.
- /projects/ — relevant P10 card adds a size/readability guide link.
- /service-areas/ — existing scrolling-board capability text links to the guide.
- /blog/article/p10-led-scrolling-board-installation-kattappana/ — one contextual service-guide link.
- /led-scrolling-display/ — new canonical service resource.

New page links to Digital Signage, LED Video Wall, the canonical P10 case study, Projects, Service Areas and homepage Contact. Phone/WhatsApp use the unchanged +91 75949 92523 number. Primary navigation and footer are not expanded sitewide; discovery comes through relevant existing capabilities/evidence. No unrelated article or CCTV links are inserted.

## Schema and sitemap

New https://haloled.in/led-scrolling-display/#service references the established https://haloled.in/#business provider. WebPage/mainEntity and Service/mainEntityOfPage are reciprocal. AreaServed is Kattappana and Idukki with existing district/state/country containment convention; description states project-dependent Idukki/surrounding coverage. WebPage refers to #website/#business and mentions Digital Signage, LED Video Wall and the existing P10 Article. BreadcrumbList matches visible parent/child hierarchy.

The existing Digital Signage WebPage gains a mention of the scrolling Service, and homepage makesOffer gains exactly one reference. No second LocalBusiness, competing business ID, new Article, FAQPage, rating/review or unsupported schema property. Prior business fields, offers, Service IDs, Article IDs and geographic structures remain intact.

Build allowlist adds led-scrolling-display. Sitemap adds exactly https://haloled.in/led-scrolling-display/ with lastmod 2026-10-06; all previous entries and dates are preserved. Tests expect 17 indexable canonical pages and check parent linkage, all relevant incoming/outgoing links, service/provider/breadcrumb consistency, pitch/environment boundaries and genuine evidence availability.

## AI-answer test

| Question | Static answer source |
| --- | --- |
| 1. What is an LED scrolling display? | Hero defines LED-module electronic message board with changing text/numbers/supported content. |
| 2. Is scrolling board the same concept? | Intro explains natural customer terminology on one resource. |
| 3. What does P10 mean? | P10 section: nominal approximately 10 mm between adjacent pixel centres. |
| 4. Is every scrolling display P10? | Explicitly no; pitch is selected for the application. |
| 5. How does a board work? | Message/controller/module workflow and separate power/enclosure/mounting explanation. |
| 6. Can content be updated? | Supported local or remote methods vary; real P10 local Wi-Fi example. |
| 7. Can it be outdoors? | Yes with suitable modules/enclosure/installation; P10 is not an outdoor/IP rating. |
| 8. How to choose size? | Viewing distance, content length, language/characters, lines, character size, orientation, space and access. |
| 9. What affects price? | Dimensions, modules/pitch/colour, environment, controller, enclosure, mounting, power, update needs and site work. |
| 10. Difference from video wall? | Five-factor table and link to existing visual-display authority. |
| 11. Is it digital signage? | Explicit parent concept in intro, link and breadcrumb. |
| 12. Does Halo install it? | Supported assembly/installation/configuration/handover statements plus genuine project evidence. |
| 13. Is there a real project? | Prominent original P10 case-study link, short factual introduction and existing project thumbnail. |
| 14. Where is Halo based? | Hero: Kattappana, Idukki, Kerala. |
| 15. Where does Halo serve? | Qualified Idukki/surrounding coverage, Service Areas link and matching Service description. |
| 16. How to contact Halo? | Contact section, homepage address/contact link, existing phone and WhatsApp. |

No separate FAQ is necessary: the main content answers the requested questions. No FAQ structured data is added. Unsupported universal features are explicitly distinguished where needed; no ranking, indexing or AI citation outcome is claimed.

## Preservation, exclusions and validation

Preserve verified NAP, name/alternateName/history, official logo, TECHNOLOGY • INTEGRATION • SOLUTION, existing analytics, robot rules, redirects, service/article canonicals and IDs, case-study facts/media/dates, Day 6 geography and Day 8 authority content. No Day 10–14 pages, keyword/location clones, separate P10 service page, fixed prices/old quotations, invented customers/projects/certifications, warranties, SLAs, automatic cloud/Wi-Fi/app assumptions, universal viewing distance or unsupported IP rating. Installation guidance stays at customer-decision level without DIY mains-wiring instructions.

Validation before release covers build, syntax checks, automated tests, HTML validation, JSON-LD parsing/reference graph, sitemap XML and prior-date preservation, internal links/fragments/assets, canonicals, static content, existing media/tracking and deployment exclusions. Edge checks cover public HTML at 320, 390, 768, 901 and 1440 pixels with fonts loaded, menu/Escape, blog search/filter, gallery and keyboard scrolling of the comparison table. New page and relevant changed cards receive visual inspection. Exact final counts/results are reported after checks finish.

Release uses the existing main-branch Cloudflare Pages workflow. Completion requires Cloudflare success, live new URL HTTP 200/self canonical, matching schema/static answers, all 17 sitemap URLs, new clean-URL redirect, preserved prior redirects/private-path guards/404, tracking, mobile menu/table behavior and relevant incoming links. Commit/deployment identifiers and live results are supplied in the completion report after verification; this audit does not pre-claim deployment success.

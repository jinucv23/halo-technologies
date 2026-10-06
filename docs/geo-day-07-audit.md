# GEO Day 7: consolidate business entity architecture

Audit and implementation date: 2026-10-06, Asia/Calcutta. Baseline commit: ec68157dc9584fcda36ea74d6712195480055d7f. Day 6 was already live and was not repeated.

## Baseline audit

All 14 production sitemap URLs returned HTTP 200 with self canonicals and parseable JSON-LD before changes. The public build contains static homepage/services/service-area HTML and prerendered blog content; browser rendering preserves entity identities. The root is not the deployment output. Robots allows crawling and references the sitemap. Private docs/scripts redirect to the existing 404 route.

Homepage provides company identity, eight solution cards, About, service-area guidance, two genuine project cards, Contact, map, telephone, email and WhatsApp. The service cards establish display/signage, CCTV/security, vehicle/bus CCTV, GPS/dash cam, IoT/gate automation and power capabilities. Two authoritative service pages cover LED displays/digital signage/scrolling boards and CCTV installation. Six articles include two actual installation case studies. General guides and marketing collateral are not treated as completed project evidence.

Stable graph: one LocalBusiness at https://haloled.in/#business (already an Organization subtype), one WebSite at /#website, page #webpage identities, two authoritative Service #service identities, six Article #article identities and matching BreadcrumbList nodes. Service provider and article author/publisher refer to #business. Pages refer to #website. Day 6 areaServed containment links Kattappana to Idukki, Kerala and India. No conflicting business IDs or coordinates were found.

NAP: Halo Technologies, formerly Halo LED; +91-75949-92523; info@haloled.in; https://haloled.in/; 1st Floor, Kuzhinjaliyil Building, Near Head Post Office, Idukki Kavala, Kattappana, Kerala 685508, IN. Visible district context does not conflict with PostalAddress. Official logo/image references, Google Maps CID, Instagram sameAs and proprietor Jinu C V are coherent. No NAP correction was needed. README's older instruction claiming the map/address were unconfirmed was stale and was corrected to match the established repository data.

## Material gaps and page decisions

- About stated “Formerly Halo LED” but did not explicitly explain the display-focused history and expansion of the same business. Clarified this using existing first-party history without adding dates, counts, awards or partnerships.
- The official tagline was represented in artwork and on Service Areas, but was not explicit crawlable homepage text. Added the exact unchanged tagline to the homepage footer and business slogan.
- The noindex /blog/category/case-studies/ placeholder and Case Studies filter still appeared empty despite two real case studies in their technology categories. Consolidated project discovery into /projects/ and fixed the filter to include only the two explicitly marked real case studies.
- Footer GPS/IoT links went to the general solutions section. Updated them to the existing Day 6 card fragments; added Projects and Service Areas discovery links. Primary navigation remains unchanged.

Decisions: no /about/ or /contact/ because the existing static sections give adequate company/contact content and new pages would repeat it. No /services/ because the homepage's eight capability cards and two authoritative pages already form a useful service overview; today's scope does not add the upcoming service landing pages. Create /projects/ because two distinct, well-documented jobs support a useful curated hub: site context, installation decisions, original media links and service/planning paths. The former empty case-study category redirects permanently to the hub rather than becoming a duplicate collection. /service-areas/ remains the established geography page.

## Implementation

Created projects/index.html with original project thumbnails, distinct summaries of site requirements and documented methods, links to both full case studies and their existing service pages, Service Areas, planning guides, company story and Contact. It uses existing visual identity, shared layout classes, analytics and interaction script. No new images, dependencies, client-side hub renderer, testimonials or project claims were introduced.

Homepage adds the history clarification, crawlable exact tagline, Projects contextual/footer links, Service Areas footer link and precise existing capability fragment links. Both service evidence sections and Service Areas add a contextual project-hub link. Shared blog footer links to Projects and Service Areas. The two case-study objects gain isCaseStudy flags; original article text, dates, categories, media and schema identities remain unchanged. The existing Case Studies filter now returns those two articles and still combines correctly with search.

The obsolete noindex category source is removed. _redirects adds 301 rules for /blog/category/case-studies/ and /blog/category/case-studies to /projects/. Its category metadata points to the canonical hub for future category-card use. No existing authoritative service or article URL was renamed.

Schema changes: homepage LocalBusiness gains the supported exact slogan. Projects gains CollectionPage and BreadcrumbList identities; CollectionPage isPartOf points to #website, about points to #business, and mainEntity references the two existing Article IDs. No duplicate business, new Service definitions, reviews, FAQ, claims of certification or invented geographic coordinates.

Sitemap adds only https://haloled.in/projects/ with lastmod 2026-10-06. All previous locations and dates are preserved. Build allowlist includes projects. Tests expect 15 indexable pages and cover the real collection, incoming links, absence/redirect of the placeholder and actual Case Studies filter behavior.

## Crawlable entity-comprehension results

| Question | Answer and static evidence |
| --- | --- |
| Who operates haloled.in? | Halo Technologies; homepage About/footer and LocalBusiness name/url. |
| Is Halo LED related? | Former name of the same business, whose display work expanded into integrated solutions; homepage About and unchanged alternateName. |
| Where is it based? | Kattappana, Idukki, Kerala; homepage About/Contact and Service Areas. |
| What area is served? | Idukki and surrounding areas subject to project requirements; homepage and Service Areas. |
| Main categories? | Displays/signage, CCTV/security, vehicle/bus CCTV, GPS/dash cam, IoT/automation, solar, inverters/backup and lithium batteries; homepage solution cards. |
| Dedicated LED expertise? | Existing LED Video Wall service, digital-signage/scrolling-board section and P10 installation evidence. |
| CCTV installation? | Existing CCTV service and plantation case study. |
| Other capabilities? | Vehicle/bus CCTV, GPS, dash cam, IoT, gate automation and power; existing cards and Service Areas. MDVR remains unclaimed. |
| Real installations? | Projects links exactly two first-party case studies with original photographs and footage. |
| Contact route? | Homepage Contact with phone, email, WhatsApp and established address/map. |
| Logical traversal? | Homepage/footer → service or Projects → guide/case study → service/Service Areas → Contact; ordinary static links exist throughout. |

No material ambiguity remains in these supported entity relationships. Unspecified project availability must still be confirmed through Contact; the site does not imply offices in every service location, a guaranteed outcome, or universal coverage. Field indexing, AI citations and ranking outcomes are not claimed.

## Preservation and validation

Compared the baseline and current LocalBusiness fields: name, alternateName, @id, URL, phone, email, address, logo, image, sameAs, hasMap, areaServed and makesOffer are unchanged. Day 6 containment is retained. Official artwork, branding, established tagline, verified history, service/article URLs, genuine media, existing article content/dates, analytics G-9Q00K5GDLY, robots and prior redirects are preserved. No Days 8–14 expansion, thin About/Contact/Services copies, location doorway pages or generic blog content.

Build, syntax checks, automated tests, HTML validation, JSON-LD parsing/graph/reference checks, sitemap XML parsing, internal links/fragments/assets, unique canonicals and deployment exclusions are checked before commit. Responsive Edge checks include all public HTML at 320, 390, 768, 901 and 1440 pixels with fonts loaded, menu/Escape, blog search/filter and gallery behavior. New Projects and homepage About/footer screenshots receive visual inspection. Final test counts and live deployment checks are recorded in the completion report only after those checks finish.

Commit/push uses the existing main-branch Cloudflare Pages workflow. Completion requires a successful Cloudflare check, live Projects HTTP 200, live schema/content/canonicals/tracking, all sitemap URLs, new legacy category redirects, prior service redirects, private-path guards and 404 behavior. This audit does not pre-claim deployment success.

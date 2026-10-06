# GEO Day 8: Digital Signage service authority

Date: 2026-10-06, Asia/Calcutta. Baseline: 6bd1133012bfb6c6fbf8ca6b7b4dd34b7e2b7cdc. Days 1–7 architecture and the existing deployment workflow are preserved.

## Audit and URL decision

Before edits, production had 15 indexable sitemap URLs. All 25 public HTML destinations, self canonicals, JSON-LD and previously present analytics were checked against the repository. Sitemap XML, robots, legacy project-category redirects, service clean-URL redirects, private-path guards and missing-page HTTP 404 behavior were verified.

No dedicated Digital Signage service page exists. Homepage has a combined LED Displays & Digital Signage card and geographic/company context. The LED Video Wall service includes a brief #signage section for scrolling/price boards and remote/multi-branch updates, but concentrates on LED video-wall selection and installation. Its existing canonical and service identity are established and retained. The noindex Digital Signage blog category has no articles and is not an authoritative service page. Projects and Service Areas already link to the LED page and the genuine P10 case study. Footer/navigation and existing knowledge links remain useful.

Create /digital-signage/ as a distinct application/operation/selection resource. It does not replace the LED technical service page, the #signage fragment or the installation case study. The new page explains signage formats and content workflow, printed-sign comparisons, environment, selection, cost factors, installation and maintenance. It points to the original pages for fuller LED-specific technical and project information. No location URL clone is created.

## Verified capability boundaries

Repository evidence supports supply, installation, configuration, commissioning and local support for LED video walls, scrolling boards and digital price displays. The LED page supports remote/multi-branch updates with suitable control systems. P10 evidence documents two single-colour boards, rear sealing, testing, installation, HUIDU local Wi-Fi content updating and customer handover. New copy uses those facts without extrapolating cloud management, waterproof guarantees or fixed service terms.

The existing LED/LCD guide explains LCD as a comparison technology. It does not establish a Halo TV-based signage offering, specific commercial-screen product or software platform. The new page mentions LCD only as selection guidance and links that guide; it does not advertise an unverified TV/LCD service. No fixed prices, warranties, free services, response-time commitments, partnerships or unsupported specifications are added.

Technical background was checked against primary manufacturer resources, not retailer/AI articles:

- https://solutions.lg.com/us/what-is-direct-view-led — modular LED construction, audience/pitch relationship, brightness and environmental considerations.
- https://insights.samsung.com/2025/07/30/what-is-resolution-and-what-does-it-mean-for-my-led-display-2/ — pitch, resolution, viewing distance and content alignment.
- https://www.samsung.com/us/business/displays/outdoor-and-window/explore/ — daylight/window and outdoor environment distinction.

Two explanatory references appear in the selection section. They are general technology references, not claims that Halo supplies those brands or has a commercial relationship. No manufacturer's model-specific rating or viewing-distance formula is applied to Halo equipment.

## Files and internal relationships

Created digital-signage/index.html and css/digital-signage.css, plus this audit. The public page is static HTML with one H1, visible breadcrumbs, descriptive headings, an accessible comparison table, content workflow and enquiry paths. It reuses the official logo, fonts, design variables, original P10 WebP and existing js/script.js. No new JavaScript, generated/stock media or browser dependencies.

Modified index.html, led-video-wall-kattappana.html, projects/index.html and service-areas/index.html with contextual incoming links. Homepage footer adds Digital Signage; the primary navigation is not expanded. The Projects link appears only in the relevant P10 card. The Digital Signage blog category's existing related-service destination and serviceId now point to the new authority page; its noindex status, unrelated categories and all article text/dates/identities remain unchanged.

New page links to /led-video-wall-kattappana and its #signage section, the existing P10 case study, /projects/, /service-areas/, the LED/LCD guide and /#contact. WhatsApp and phone use the existing business number. New geographic copy states Kattappana, Idukki, Kerala and Idukki/surrounding coverage subject to project requirements.

Build allowlist adds digital-signage; shared css is already public. Sitemap adds exactly https://haloled.in/digital-signage/ with lastmod 2026-10-06. Every earlier URL/date is unchanged. Tests expect 16 indexable canonical pages and exercise the new resource and its entity/internal-link relationships.

## Schema and preservation

New Service https://haloled.in/digital-signage/#service uses existing provider https://haloled.in/#business and reciprocal mainEntityOfPage/WebPage mainEntity references. Its areaServed is Kattappana and Idukki; containedInPlace establishes district/state/country context rather than asserting coverage throughout Kerala. Description keeps project-dependent coverage. WebPage references #website, #business, the established LED #service and original P10 #article. BreadcrumbList matches the visible Home → Digital Signage trail.

Homepage's existing LocalBusiness makesOffer gains one reference to the new Service. No second business or competing ID is introduced. All previously established business fields/IDs, original service IDs and offers, entity history, official logo, tagline and Day 6 geography remain. No new Article, FAQPage, reviews or ratings. Existing service/article canonicals, case studies, media, analytics, robots and redirects are unchanged apart from the intentional related-service pointer/link additions described above.

## AI-answer quality

| Intent | Crawlable answer location |
| --- | --- |
| What is digital signage? | Direct definition in the hero; electronically updated information/advertising/prices/announcements. |
| How does it work? | Four-step content → player/controller → display → update workflow. |
| What types does Halo cover? | LED video walls, scrolling displays and digital price displays, with their applications and limits. |
| Is a video wall digital signage? | Explicitly answered in the LED video-wall card; links to the preserved LED authority page. |
| What is a scrolling display? | Short text and single-colour explanation, with actual red/yellow P10 evidence. |
| Digital vs printed? | Six-factor comparison table and nuanced use-case introduction. |
| Indoor/outdoor selection? | Ambient light, pitch/distance, weather/enclosure, mounting, power and maintenance access sections. |
| How to choose? | Practical location, audience, size, content, control, installation and budget questions; LCD comparison guide. |
| How to update content? | Local Wi-Fi P10 example and conditional remote/scheduling/network requirements; no universal cloud claim. |
| What affects cost? | Hardware, size/pitch, environment, control, structure, power/network, site work and ongoing operational factors; no fabricated quote. |
| What is installation? | Requirements, assessment/system selection, preparation/installation, testing and handover based on existing service/project evidence. |
| What support is needed? | Content/playback checks, service access and installation-specific maintenance/support discussion. |
| Where does Halo provide it? | Kattappana base and qualified Idukki/surrounding service area, with Service Areas and Contact links. |
| Is there real evidence? | Original P10 project thumbnail and contextual case-study/Projects links. |

Answers are available without JavaScript; no mechanically generated FAQ or ranking/indexing/AI-citation claim. Project availability and exact system/support specifications still require a customer enquiry.

## Validation and release

Before release: production build, JavaScript syntax checks, automated tests, HTML validation, JSON-LD parsing/graph/reference checks, sitemap XML and preservation of prior dates, internal links/fragments/assets, self canonicals, unique metadata, tracking and deployment exclusions. HTML validation prompted use of a native labelled section for the keyboard-focusable comparison-table region; the rule was not disabled.

Edge checks cover all 26 HTML pages at 320, 390, 768, 901 and 1440 pixels with fonts loaded. They exercise mobile menu/Escape, blog search/filter, gallery and the table's keyboard horizontal scrolling. New page and changed homepage card receive mobile/desktop visual inspection. Final counts and successful results are recorded in the completion report after checks finish.

Commit and push use the existing main-branch Cloudflare Pages workflow. Production completion requires the Cloudflare success check, new page HTTP 200, correct canonical/metadata/schema/static content, all 16 sitemap destinations, mobile navigation and table behavior, original article/service availability, analytics/robots, clean URL redirects, private-file guards and a real missing-page 404. This document does not pre-claim deployment success.

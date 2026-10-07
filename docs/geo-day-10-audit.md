# GEO Day 10 - CCTV service authority

Date: 2026-10-07. New competing CCTV service page created: NO.

## Audit

The complete public file inventory, build, blog data/renderer, sitemap, robots, redirects, existing tests and earlier Day 9 audit were reviewed. The working tree was clean. Existing authority is cctv-installation-kattappana.html at https://haloled.in/cctv-installation-kattappana (no trailing slash). Cloudflare uses extensionless service URLs; preserve this canonical rather than introducing the requested slash variant as another page.

Existing discovery includes homepage solution/footer links, service areas, projects, LED Video Wall, CCTV category and two CCTV guides. Main navigation exposes Solutions and Knowledge Center. No sitewide keyword links were needed. The real plantation article at /blog/article/cctv-cardamom-plantation-kumily/ already has a contextual backlink and Article/about relationship to the existing CCTV Service. Its supplied facts, media, dates and narrative are unchanged.

Schema already defines Service, WebPage and BreadcrumbList with provider https://haloled.in/#business; the sole LocalBusiness definition lives on the homepage. Existing geographic scope, IDs and reciprocal page/service connections are preserved. No new business, offer, rating, certification or FAQ schema was added.

## Changes

Modified: cctv-installation-kattappana.html and sitemap.xml. Created: this internal audit only; no public page or asset.

The service page explains analog HD versus IP/network cameras, DVR versus NVR, conditional PoE, dome/bullet/turret housings, indoor/outdoor exposure, recording workflow, storage/retention variables, low-light/infrared considerations and compatible remote viewing. A practical checklist covers coverage, positioning, blind spots, lighting, recording, storage, network/internet, cable routes, power and expansion. Existing supported home/shop/office/commercial applications remain. Unsupported STQC promotion was removed because no exact-model certification evidence was found.

Title retained: CCTV Installation in Kattappana | Halo Technologies. One H1 now explicitly says CCTV installation for homes, shops and workplaces. Meta/OG/WebPage descriptions align with planning, selection, installation, configuration and support.

Case-study anchor is more descriptive; the existing reciprocal backlink is verified without rewriting the article. New contextual links go to /connect/ and the existing homepage vehicle/bus CCTV section, explicitly distinguishing mobile from premises requirements. Two guide links now use root-relative paths. Existing incoming links were sufficient and retained.

Service gains an accurate description; WebPage mentions the established plantation Article ID. Sitemap retains all 17 canonical URLs and prior dates; only CCTV lastmod is added as 2026-10-07. Canonical, robots, analytics, business identity, address, navigation and previous display/signage authority remain intact. Existing CSS/components are reused with a local button-wrap fix; no dependencies added.

## Validation

Build and JavaScript syntax checks pass. All 14 existing tests pass: static HTML, unique metadata/H1, self canonicals, sitemap, links/fragments/assets, JSON-LD syntax and connected identities, sole LocalBusiness, analytics, genuine media and prior service authority. HTML Validate and git diff --check pass.

Headless Edge checks at 320, 390, 768, 901 and 1440 px confirm one H1 and no horizontal overflow after fixing a long button. Mobile menu opens and FAQ expands. Full-page screenshots generated for visual inspection. No unrelated public files changed.

Technical references checked for general guidance (no Halo partnership or inventory inferred):
- https://newsroom.axis.com/blog/dome-vs-bullet-cameras
- https://whitepapers.axis.com/en-us/ir-reflections-in-dome-cameras
- https://enpinfo.hikvision.com/hkwsen/unzip/20230410194813_20373_doc/GUID-784D17BC-AEA5-4AB1-A257-F1C3FD4C1B53.html

## Release

Use existing main-branch Cloudflare Pages deployment. Live status and commit/deployment confirmation are reported after release; this document does not preclaim success.

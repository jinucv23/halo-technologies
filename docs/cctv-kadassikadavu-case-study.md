# Kadassikadavu home and shop CCTV case study

Additional case study, outside the numbered 30-day GEO plan. Publication date: 2026-10-09 (Asia/Calcutta); installation date is not asserted.

## Implementation

Reviewed README, shared article data/renderer, prior case studies, service project section, Projects hub, sitemap, schema graph, automated tests and main-branch Cloudflare Pages workflow. No applicable AGENTS.md found in repository or parent paths. Existing working tree was clean except the unpublished draft from the earlier task turn.

New canonical: https://haloled.in/blog/article/cctv-home-shop-two-screens-kadassikadavu/

The shared blog renderer produces crawlable HTML, blog/CCTV/category/filter discovery, Article and BreadcrumbList connected to the existing business and CCTV Service, canonical and social metadata. Added reciprocal service-page project link and a third Projects hub card/entity. The canonical sitemap gains one URL (18 total); only affected service and Projects lastmod dates changed. Existing article text, canonicals, analytics and deployment settings preserved.

Facts retain six cameras, the 2 MP/5 MP resolution mix, all-camera audio support, one compatible Hikvision DVR upstairs and mirrored home/shop displays. The Cat6 HDMI link is distinguished from the IP camera network. No camera model, analogue 5 MP identity, recording settings, audio activation/test result, installation date, mobile access or performance result is inferred.

## Media

User supplied five replacement-named JPEGs in Downloads after the initial named photographs were unavailable. All five were inspected from the attachments. Three show mounted cameras; the other two show a labelled four-port HDMI splitter and HDMI connection accessories. No mapping to the five earlier numerical filenames is asserted. No unreadable equipment label was used to identify specifications.

Original Downloads JPEGs are unchanged. Ten WebP derivatives preserve the whole image and source proportions, with maximum widths of 480 and 960 pixels and maximum height 1600. Files are approximately 9–45 KB each, metadata stripped, with intrinsic dimensions, lazy loading and gallery srcset/sizes. No generated, replacement or retouched equipment. Captions and source/derivative inventory are in cctv-kadassikadavu-media.json (internal and excluded from public deployment).

## Validation

Production build, JS syntax checks, 15 tests, HTML Validate and git diff --check pass. Tests cover the static page, connected schema, metadata, canonical sitemap uniqueness, internal links/resources and preservation of previous case studies, as well as the new article's five photo pairs and critical factual boundaries.

Automated headless Edge checks at 320, 390, 768, 901 and 1440 pixels confirm no page-width overflow, five decoded gallery photos, one H1, no JS errors and a working mobile menu. Full article and table screenshots inspected; a narrow table label was given more width. Browser connector preview was unavailable, so QA used the installed Python Playwright with headless Edge. Production checks and exact deployment/commit identifiers follow release and are reported only after verification.

## Release

Authorized production workflow: commit and push to main; Cloudflare Pages builds npm run build and publishes dist. No source-root upload or hosting configuration changes. This audit does not preclaim deployment success or Google indexing.

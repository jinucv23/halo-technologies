# GEO Day 4 — internal authority and project evidence

## Audit before modification

Repository and production checked on 3 October 2026. All six HTML destinations returned HTTP 200. Existing architecture: homepage index.html; CCTV service cctv-installation-kattappana.html canonical /cctv-installation-kattappana; LED service led-video-wall-kattappana.html canonical /led-video-wall-kattappana, with scrolling-board/digital-signage section #signage; blog/data/articles.js and blog/blog.js supply static blog output through scripts/build.mjs. Both supplied case studies are live.

Stable entities: https://haloled.in/#business (one LocalBusiness), /#website (one WebSite), /#webpage; each service canonical has #service, #webpage and #breadcrumb; each article canonical has #article, #webpage and #breadcrumb. Service provider and article author/publisher use #business; pages reference #website. Existing breadcrumbs and canonicals are valid and retained.

Homepage already links to both services and to P10 inside its LED solution card. Its brochure gallery is marketing collateral, not a case-study section. No Real Projects section existed. CCTV service had planning-guide links but no plantation project evidence. LED service linked to P10 from planning links without explanatory project copy. CCTV article already has a good contextual service backlink; preserved. P10 had a service CTA, but no contextual signage backlink in its body. Both articles already appear in the blog's featured and all-article lists, once per distinct list; this intentional layout is preserved.

## Smallest implementation

Added one homepage Real Projects section containing exactly two cards. Reused genuine P10 red-board WebP and close plantation-camera WebP, with intrinsic dimensions, lazy loading and contain fitting to preserve source proportions. No new media copies, dependencies or homepage video. Combined thumbnail payload is about 140 KB; no measured Core Web Vitals score is claimed.

Added short Recent CCTV Project and Recent LED Scrolling Board Project sections using each service's existing layout classes. Moved the existing P10 service link from planning links into its evidence section to avoid a redundant CTA. Added one natural P10 body link to /led-video-wall-kattappana#signage. Existing CCTV contextual backlink and local coverage copy remain unchanged.

No structured-data changes. No modifications to canonical URLs, robots, sitemap, article slugs, analytics, verification files, navigation, contact details, official logo, existing media or deployment configuration. Both case-study content and all previous GEO entities remain intact apart from the single requested P10 contextual link.

Modified: index.html, css/style.css (three scoped project layout rules), cctv-installation-kattappana.html, led-video-wall-kattappana.html, blog/data/articles.js. Created this internal audit only; no new public pages.

Build, JavaScript syntax checks, all 10 existing tests and HTML validation passed. Responsive/browser and production checks are reported on completion, without pre-claiming deployment success.
Headless Edge: all 24 HTML pages checked at 320, 375, 768, 1024 and 1440 pixels. No overflow or uncaught JS errors. Mobile menu, search/filter, gallery and video playback passed. New homepage and service sections visually inspected at mobile and desktop widths; genuine reused images decode correctly.

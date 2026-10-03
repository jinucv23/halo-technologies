# GEO Day 3 — real P10 scrolling-board case study

Implementation date: 3 October 2026. Internal documentation, excluded from the public build.

## Baseline and scope

Reviewed Day 1/2 documentation, article data/templates, static prerender build, tests and history before editing. Baseline was `17026eb69c53a2843fea01bbb499b576fb5fd7ea` (Day 2 mobile correction), following `c210994` and Day 1 `e9586ad`. Fresh production requests returned 200 for homepage, LED service page, representative article, robots and XML sitemap. Cloudflare API confirmed the existing successful Day 2 deployment, main branch, Node 22, `npm run build`, output `dist`.

This adds one case study in the existing LED Displays category. No new service/category/location pages, framework, SEO dependency, hosting configuration or business entity. Empty categories retain their existing noindex behavior. Sitemap is maintained explicitly in source, not generated; its count changes from 11 to 12.

## Article and metadata

- Title: **P10 LED Scrolling Board Assembly & Installation in Kattappana: A Real-World Project**
- Canonical: https://haloled.in/blog/article/p10-led-scrolling-board-installation-kattappana/
- Meta title: **P10 LED Scrolling Board Installation in Kattappana | Halo Technologies**
- Meta description (147 characters): **See how Halo Technologies assembled, weather-protected, tested and installed two P10 LED scrolling boards for a real outdoor project in Kattappana.**
- Publication: 2026-10-03, the publication day of this implementation, not an inferred installation date. No project date or historical modification date is invented.
- OG image: https://haloled.in/assets/blog/p10-red-scrolling-board-kattappana.webp — genuine frame, not stock/generated imagery. Source video resolution limits this image to 464 × 250; no artificial upscaling or enhancement.

Sections: project at a glance; requirement; P10 module/display configuration; workshop frame/module assembly; rear wiring/controller; weather protection; testing before closure; HUIDU local Wi-Fi updating; final installation; project lessons; existing practical tips/mistakes components; factual scrolling-board service CTA and first-party author note.

## Evidence and factual boundaries

The owner's brief supplies the location near New Bus Stand, Kattappana, two displays, colours, approximate sizes, frame/GI rear cover, HUIDU controller, load-based SMPS selection, assembly/testing/handover workflow and sealing practice since 2018. These are recorded as first-party project details, distinct from what the media directly shows and from general explanations.

Horizontal: red, approximately 192 × 32 cm, nominal 6 × 1 ft. Vertical: yellow, approximately 96 cm high × 32 cm wide, nominal 3 × 1 ft. The article explicitly notes that the nominal feet descriptions are not exact metric conversions. Modules are approximately 32 × 16 cm. Frame is approximately 1 × 1.5 inch aluminium, black powder coated, with a GI sheet/coil rear cover.

P10's general 10 mm pitch and module format were checked against [Meiyad's manufacturer specification](https://www.myddisplay.com/productdetail/single-color-dip-led-module.html), linked in the explanatory paragraph. This does not establish exact model/specifications of every installed module. Colorstar, Meiyad and Qiangli are described only as sourcing options, not a combined bill of materials for this project.

Weather protection describes silicone at vulnerable rear module areas, additional sealing/taping where needed, inspection/testing and rear closure. No waterproof guarantee, IP rating, lifespan, numerical brightness, power-supply quantity, electrical rating, certification or performance result is asserted. Electrical work remains descriptive. HUIDU updating is local Wi-Fi/mobile-app control; no cloud/remote internet capability is claimed. Single-color text boards are distinguished from full-color video walls.

## Media processing and privacy

Originals remain untouched in the user's Downloads directory:

- `IMG-20260927-WA0011.jpg`: assembly/sealing photograph, 3120 × 4160, no EXIF orientation tag. Rotated 90 degrees counterclockwise for a natural workbench view, resized to 1600 × 1200 WebP. No scene elements changed.
- `VID-20260927-WA0012.mp4`: approximately 13.27-second workshop source, stored 1280 × 720 with rotation metadata. Auto-orient, then crop the lower assembly area to exclude the worker's face; resize to 576 × 608. Published duration 13.23 seconds.
- `VID-20260926-WA0055.mp4`: approximately 23.16-second portrait installation source, 464 × 832. Published as two chronological excerpts: red board, 0–8.7 seconds, crop 464 × 250; yellow board, 12–23.1 seconds, crop 136 × 340. The street pan and unrelated surrounding people/signage are omitted. Captions disclose cropping and that both excerpts come from one original video.

The user explicitly approved the customer business name remaining visible in project media. No customer name was added to prose. Crops exclude visible incidental faces and the storefront phone number. No synthetic imagery, retouching, overlays, fabricated equipment or changed display colours. Audio is removed from web copies to avoid unnecessary background speech/sound; visible text explains the footage. Unnecessary source metadata is stripped; generated WebP files have no EXIF. Original source files are not deployed.

Video encoding: H.264, yuv420p, square pixels, 30 fps, CRF 23, fast-start MP4 with `moov` before `mdat`, no audio. Posters are actual frames from the corresponding cropped videos (workshop/yellow at 1 second, red at 4 seconds). All videos use native controls, `playsinline`, `preload="none"`, explicit dimensions, accessible labels and associated descriptive captions. No autoplay. The assembly image is lazy-loaded below the fold; responsive media retains aspect ratio.

| Published media under `assets/blog/` | Dimensions | Bytes |
| --- | --- | ---: |
| `p10-scrolling-board-assembly-kattappana.webp` | 1600 × 1200 | 465294 |
| `p10-led-module-silicone-sealing-kattappana.mp4` | 576 × 608 | 1414256 |
| `p10-led-module-silicone-sealing-kattappana.webp` | 576 × 608 | 49084 |
| `p10-red-scrolling-board-kattappana.mp4` | 464 × 250 | 536000 |
| `p10-red-scrolling-board-kattappana.webp` | 464 × 250 | 18934 |
| `p10-yellow-vertical-scrolling-board-kattappana.mp4` | 136 × 340 | 295864 |
| `p10-yellow-vertical-scrolling-board-kattappana.webp` | 136 × 340 | 5684 |

Image alt text:

- Feature/card: “Red horizontal P10 LED scrolling board operating above a shop entrance in Kattappana”.
- Assembly: “Rear of P10 LED modules with power wires, ribbon cables and silicone sealing during assembly at Halo Technologies”.
- Video posters belong to labelled video elements, not standalone images; captions describe rear-side silicone application, the horizontal red board and the vertical yellow board. No inappropriate image alt attributes on video elements.

## Entities and links

The existing Article renderer supplies Article `#article`, WebPage `#webpage` and BreadcrumbList `#breadcrumb` at the new canonical. Article author/publisher reuse `https://haloled.in/#business`; WebPage is part of `https://haloled.in/#website`. Article/topic references the existing LED service `https://haloled.in/led-video-wall-kattappana#service`. Hero/OG/Article image references the real red-board frame. Day 2's duplicate-node prevention remains unchanged; static/browser graph parity passes.

VideoObject was evaluated against [Google's video structured-data requirements](https://developers.google.com/search/docs/appearance/structured-data/video). No independently verified first-publication/upload date for the supplied videos was provided; WhatsApp filenames are not proof. The article's publication date is not substituted for an unknown original video upload date. Videos are embedded normally without VideoObject; no claim of video rich-result eligibility. No new FAQ, Review, Product or AggregateRating schema.

Crawlable links to the article: homepage LED card; LED service page's planning links; blog featured/all listings; LED Displays category; existing LED/LCD article's related list. Article links to the LED/LCD comparison, existing LED service page, homepage/contact routes and WhatsApp. The new article appears in search and the LED Displays filter. No unrelated CCTV content was rewritten or linked from the case-study body.

## Complete file inventory

Added:

- `blog/article/p10-led-scrolling-board-installation-kattappana/index.html`
- The seven media files listed above.
- `docs/geo-day-03-audit.md`

Modified:

- `blog/data/articles.js`: one article object and reciprocal related-article ID on LED/LCD guide.
- `blog/blog.js`: optional real-image dimensions/caption, project-specific CTA and first-party author note; existing article defaults preserved.
- `blog/blog.css`: narrowly scoped project figure/video/caption/fact-list styles using existing theme.
- `index.html`: one project link within existing LED card.
- `led-video-wall-kattappana.html`: one project link within existing planning links.
- `sitemap.xml`: new canonical once, no media page entries.
- `scripts/site.test.mjs`: expected counts (12 indexable pages, 5 Articles), new case-study media/content/link/schema/fast-start regression coverage.

No changes to official logo/assets, main shared CSS, navigation, homepage hero, business schema identity, phone, existing canonical paths, robots, analytics, hosting configuration or dependencies. Temporary media tools were installed outside the repository; no runtime SEO/media library was added.

## Validation before deployment

- `npm.cmd ci`: passed, zero reported vulnerabilities.
- `npm.cmd run build`, `npm.cmd run check`, `npm.cmd test`: passed, 9/9 tests.
- `npm.cmd run validate:html`, `git diff --check`: passed.
- Static HTML has complete article text, one H1, self-canonical, no noindex, unique metadata and connected valid JSON-LD. All internal links/fragments and new source/poster resources resolve. Sitemap lists 12 unique canonical pages; robots continues allowing crawling.
- Headless Edge: all 23 HTML pages at 320, 390, 768, 901, 1024 and 1440 pixels, with web fonts loaded. No horizontal overflow or uncaught JS errors. Logo proportions, menu open/close/Escape, blog search/filter and gallery still work. Screenshots inspected at mobile and desktop.
- All three videos play, seek and reach the end in Edge without media errors. No MP4 requests occur before interaction. Full FFmpeg decode succeeded for each output; no audio streams; expected H.264/yuv420p/dimensions verified.
- New article is discoverable through blog search for P10; LED Displays filter includes both related articles. No duplicate schema after client rendering.

Commit/push and Cloudflare live checks follow successful validation. Exact commit/deployment identifiers and final live results are supplied in the completion report; this audit does not pre-claim a deployment result.

## Search Console follow-up

Inspect https://haloled.in/blog/article/p10-led-scrolling-board-installation-kattappana/ → run **Test Live URL** → **Request Indexing** if available to Google. A request is not evidence that indexing succeeded.

The sitemap is already submitted. Do **not** routinely resubmit it solely because one URL was added; Google can fetch the updated file at the same submitted URL. Check its latest read and confirm the new URL is discovered. If the property no longer has a submitted sitemap, submit https://haloled.in/sitemap.xml once. No Search Console or IndexNow submission is performed automatically in this task.

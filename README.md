# Halo Technologies — haloled.in

Static marketing site for Halo Technologies, Kattappana, Idukki, Kerala.

LED video walls & digital signage · CCTV & security · vehicle and bus CCTV ·
GPS & dash cam · IoT & automation · solar · inverters · lithium batteries.

## Stack

Plain HTML, CSS and vanilla JS; no frontend framework. The Node build uses LinkeDOM
only at build time to render the existing blog templates as crawlable static HTML.
Browser interactions still use the same templates and data. HTML Validate is a
development-only validation tool. Neither dependency is sent to visitors.

```
index.html          single page, all sections
css/style.css       design system + layout
js/script.js        nav, scroll reveal, lightbox, WhatsApp enquiry
assets/             logo, brochure, photos, favicon
robots.txt
sitemap.xml
```

## Local preview

Node 22+ is required. Install and build the public output:

```sh
npm ci
npm run build
npm run check
npm test
npm run validate:html
python3 -m http.server 8000 --directory dist
# http://localhost:8000
```

## Deployment

Cloudflare Pages, connected to this repo's `main` branch. The Day 1 build settings
below were confirmed by the project owner. **Do not deploy the repository root.**
The build explicitly includes public assets and excludes `docs/`, `scripts/`,
dependencies and repository files. `dist/` is generated and Git-ignored.

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 22 or newer |

Custom domains: `haloled.in` and `www.haloled.in`.

Pages already redirects service `.html` URLs to extensionless URLs. Canonicals,
sitemap and internal links use those live destinations; source filenames stay the same.
For local clean-URL navigation, use a static server that resolves extensionless paths
to `.html` (Python's basic server does not). Existing `.html` source previews still work.
The `_redirects` file guards internal paths as defense in depth; it is not a
substitute for deploying only `dist/`. Canonicalizing the `www` hostname requires
a Cloudflare zone Redirect Rule (see the audit), not a Pages `_redirects` rule.

After deployment and crawler-access checks, use `npm run indexnow -- --all` for a
dry run, then `npm run indexnow -- --all --submit` for the initial notification.
Later pass only changed sitemap URLs. The script checks the live public ownership
file and canonical/indexability before sending. No account credential is needed or
embedded in browser code. Submission does not guarantee indexing.

Internal Day 1 findings and manual account steps are in `docs/geo-day-01-audit.md`.

## Editing common things

**Phone / WhatsApp number** — it appears in four places, all of which must be
changed together:

- `js/script.js` → the `WHATSAPP` constant (digits only, e.g. `917594992523`)
- `index.html` → the `.wa-fab` floating button `href`
- `index.html` → every `tel:` link (hero button, contact list, footer)
- `index.html` → the `telephone` field in the JSON-LD block

**Contact email** — `mailto:` links in the contact section and footer, plus the
JSON-LD `email` field.

**Adding project photos** — drop them in `assets/`, then add a `.shot` button to
the `#brochure` section following the existing pattern:

```html
<button class="shot reveal" data-full="assets/your-photo.jpg" aria-label="View ... full size">
  <img src="assets/your-photo.jpg" alt="Describe the photo" loading="lazy">
</button>
```

Compress anything large before committing — aim for under ~300 KB per image.

**Business location** — the homepage Contact section, map and LocalBusiness
schema already use the established address at 1st Floor, Kuzhinjaliyil Building,
Near Head Post Office, Idukki Kavala, Kattappana, Kerala 685508. Preserve these
details unless the business confirms a change. The schema's `hasMap` and `sameAs`
share the established Google Maps CID; no geographic coordinates are asserted.

## Notes

- The enquiry form has no backend. It opens WhatsApp with the fields pre-filled,
  which is the standard pattern for this kind of site and needs no server.
- The logo (`assets/logo.png`) was extracted from the business card artwork. If a
  vector original (SVG/AI/EPS) turns up, swap it in — it will render sharper.

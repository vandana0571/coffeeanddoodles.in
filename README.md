# coffeeanddoodles.in

Minimal portfolio website for Vandana Sharma, ready for Cloudflare Pages.

## Structure

```text
.
├── assets/
│   ├── favicon.svg
│   ├── logo-placeholder.svg
│   ├── profile-placeholder.svg
│   ├── vandana_sharma_dp.jpeg
│   └── resume-placeholder.txt
├── src/
│   ├── scripts/main.js
│   └── styles/styles.css
├── index.html
├── _headers
├── robots.txt
└── sitemap.xml
```

## Local Preview

Because this is a static site, any simple static server will work:

```sh
python3 -m http.server 8788
```

Then open `http://localhost:8788`.

## Cloudflare Pages

- Build command: leave empty
- Build output directory: `/`
- Root directory: repository root

## Replacing Placeholders

Add the real logo, profile image, and resume under `assets/`, then update the matching paths in `index.html` if the filenames change.

`robots.txt` blocks common AI crawlers on a best-effort basis while keeping regular search indexing enabled. `_headers` adds an additional Cloudflare Pages `X-Robots-Tag` signal.

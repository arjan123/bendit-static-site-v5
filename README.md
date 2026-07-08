# Bendit static website

Static marketing site optimized for Google Search and Hacker News.

## What is included

- `index.html` — SEO-focused homepage
- `show-hn.html` — plain technical Hacker News launch page
- `download.html` — direct Windows download page with install instructions, self-hosted zip
- `releases.html` — release history and self-hosted download landing page
- `support.html` — email-only support
- `examples.html` — practical SQL examples
- `use-cases/` — long-tail SEO pages
- `blog/` — article-style SEO pages
- `site.config.js` — update download URL, support email, PayPal URL and version
- `robots.txt` and `sitemap.xml`
- `staticwebapp.config.json` — Azure Static Web Apps config

## Before going live

1. Build Bendit and place the zip at `downloads/Bendit-Windows-x64.zip` in this repo (keep the filename identical across releases).
2. Update `windowsVersion`, `supportEmail`, `paypalUrl` and `siteUrl` in `site.config.js`.
3. Replace `https://bend-it.net` in `sitemap.xml`, `robots.txt` and canonical URLs if the domain is different.
4. Add the site to Google Search Console.
5. Submit `/show-hn.html` to Hacker News with this title:

`Show HN: Bendit – a local DuckDB workbench for messy Excel/CSV/Parquet files`

## Local preview

From this folder:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.


## Self-hosted download setup

- Place the built zip at `downloads/Bendit-Windows-x64.zip` in this repo — it will be served directly from `bend-it.net/downloads/Bendit-Windows-x64.zip`.
- Keep the filename identical across releases so the download link never needs to change; just replace the file and bump `windowsVersion` in `site.config.js`.
- The `downloads/` folder isn't created yet — add it and commit the zip before pushing live, or the download button will 404.


## Brand assets

The uploaded Bendit blue/purple logo is included in `assets/bendit-logo.png`. The site styling, favicon, web manifest icons and social sharing image are tuned to the same blue/purple visual style.

## Cache busting

Static assets are referenced with `?v=20260712`. When you change CSS, JavaScript, logo or screenshots, bump this version in the HTML files and `site.config.js`.

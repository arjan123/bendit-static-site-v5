# Bendit static website

Static marketing site optimized for Google Search and Hacker News.

## What is included

- `index.html` — SEO-focused homepage
- `show-hn.html` — plain technical Hacker News launch page
- `download.html` — direct Windows download page wired to GitHub Releases
- `releases.html` — GitHub Releases landing page
- `support.html` — support via GitHub Issues, with email fallback
- `examples.html` — practical SQL examples
- `use-cases/` — long-tail SEO pages
- `blog/` — article-style SEO pages
- `site.config.js` — update GitHub repo/releases/issues links, download URL, support email, PayPal URL and version
- `robots.txt` and `sitemap.xml`
- `staticwebapp.config.json` — Azure Static Web Apps config

## Before going live

1. Create a GitHub release and upload `Bendit-Windows-x64.zip` as a release asset.
2. Replace `YOUR_GITHUB_USER_OR_ORG` in `site.config.js` with your real GitHub user or organization.
3. Update `windowsVersion`, `supportEmail`, `paypalUrl` and `siteUrl` in `site.config.js`.
4. Replace `https://bend-it.net` in `sitemap.xml`, `robots.txt` and canonical URLs if the domain is different.
5. Add the site to Google Search Console.
6. Submit `/show-hn.html` to Hacker News with this title:

`Show HN: Bendit – a local DuckDB workbench for messy Excel/CSV/Parquet files`

## Local preview

From this folder:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.


## GitHub setup

Recommended repository settings:

- Enable GitHub Issues.
- Add issue templates for bug reports and feature requests.
- Use GitHub Releases for all public builds.
- Keep the Windows release asset name stable: `Bendit-Windows-x64.zip`.
- Then the direct download URL can stay: `https://github.com/arjan123/bendit-static-site-v5/releases/latest/download/Bendit-Windows-x64.zip`.


## Brand assets

The uploaded Bendit blue/purple logo is included in `assets/bendit-logo.png`. The site styling, favicon, web manifest icons and social sharing image are tuned to the same blue/purple visual style.

## Cache busting

Static assets are referenced with `?v=20260710`. When you change CSS, JavaScript, logo or screenshots, bump this version in the HTML files and `site.config.js`.

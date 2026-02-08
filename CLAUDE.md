# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal landing page for kenziy (security researcher / pentester), hosted via GitHub Pages at `kenziy.github.io`. No build system, no package manager, no bundler — just plain HTML/CSS/JS served directly.

## Architecture

- **`index.html`** — Single-page site. Uses Bootstrap 5.2.3 (CDN), Font Awesome 6.2.1 (CDN), Google Fonts ("Covered By Your Grace"), and jQuery 3.6.1 (CDN).
- **`css/style.css`** — Custom styles. Dark theme (`#111927` background, `#9fef00` accent for title, `#ffc107` hover).
- **`js/script.js`** — Initializes Owl Carousel 2 on `.owl-carousel` (autoplay, 4 items, looping).
- **`js/owl.carousel.min.js`** — Vendored Owl Carousel library (not from CDN).
- **`css/assets/`** — Owl Carousel CSS assets (vendored).
- **`img/`** — Company logo images displayed in the carousel.

## Development

No build or install step. Open `index.html` in a browser or use any local HTTP server:

```
python3 -m http.server 8000
```

## Key Details

- jQuery is loaded as `slim` build (no AJAX/effects) — Owl Carousel is compatible with it.
- All external dependencies are CDN-linked except Owl Carousel (vendored locally in `js/` and `css/assets/`).
- No test suite, linter, or CI pipeline.

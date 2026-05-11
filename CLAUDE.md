# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal landing page for kenziy (security researcher / pentester), hosted via GitHub Pages at `kenziy.github.io`. No build system, no package manager, no bundler — just plain HTML/CSS/JS served directly.

## Architecture

**Main site** (`index.html` + `css/style.css` + `js/script.js`):
- Single-page layout using Bootstrap 5.2.3, Font Awesome 6.2.1, Google Fonts ("Covered By Your Grace" + "Fira Code"), jQuery 3.6.1 slim — all CDN except Owl Carousel (vendored in `js/` and `css/assets/`).
- `js/script.js` runs inside `$(document).ready()` and does three things: matrix rain canvas animation (`#matrix-bg`), character-by-character typing effect (`#typed-text`), IntersectionObserver scroll-reveal (`.reveal` → `.active`), and Owl Carousel init.
- Dark theme: `#111927` background, `#9fef00` accent, `#ffc107` hover, `#0d1117` alt sections.

**OWASP checklist pages** (`android.html`, `ios.html`, `api.html`, `network.html`, `webapp.html`, `wifi.html`):
- Fully self-contained — all CSS and JS are inlined (no shared stylesheet). Each uses "Share Tech Mono" font and a separate `#000` dark theme with `--green: #00ff41` accent.
- Interactive checklists with localStorage persistence, progress tracking, and collapsible sections. These pages share a common design language but are independent files with no shared code.

## Development

No build or install step. Open `index.html` in a browser or use any local HTTP server:

```
python3 -m http.server 8000
```

## Key Details

- jQuery slim build (no AJAX/effects) — Owl Carousel is compatible with it.
- All external dependencies are CDN-linked except Owl Carousel (vendored locally).
- Checklist pages are standalone — editing one does not affect others. When adding a new checklist, copy an existing one and update content.
- No test suite, linter, or CI pipeline.

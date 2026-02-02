# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jekyll-based academic portfolio and blog for a PhD student at DTU. Uses the `moonwalk` remote theme with customizations. Deployed to GitHub Pages at `lassepsh.github.io/portfolio`.

## Commands

- **Install dependencies:** `./bin/bootstrap` (runs `bundle install`)
- **Start dev server:** `./bin/start` (runs `bundle exec jekyll serve`)
- **Build site:** `bundle exec jekyll build` (output goes to `_site/`)

There are no test or lint commands configured.

## Architecture

**Static site generator:** Jekyll with Liquid templates, SCSS stylesheets, and Markdown content.

**Layouts** (`_layouts/`):
- `default.html` — base layout wrapping all pages (head, header, main, footer)
- `home.html` — homepage with particles.js animated background and project cards
- `post.html` — blog post with metadata, tags, and social sharing
- `scrollytelling.html` — scroll-triggered interactive stories using scrollama.js

**Data-driven content:** Project cards and footer links are defined in `_data/home.yml`, not hardcoded in templates. Visibility of sections (projects, blog, navbar, footer) is controlled by boolean flags in `_config.yml` under `theme_config`.

**Theming:** Light/dark mode via CSS variables on a `data-theme` attribute. Theme preference persists in `localStorage`. Variables defined in `_sass/moonwalk.scss` with `light-appearance` and `dark-appearance` mixins.

**Frontend libraries:**
- `particles.js` — animated background on homepage (`assets/particles.js/`)
- `scrollama` — scroll-triggered animations loaded via CDN
- `MathJax` — LaTeX equation rendering in blog posts

**Blog posts** live in `_posts/` using standard Jekyll naming (`YYYY-MM-DD-title.md`) with YAML front matter (layout, title, author, tags).

## Key Conventions

- Permalink structure is `/:slug` (configured in `_config.yml`)
- SCSS entry point is `assets/css/main.scss`; theme styles in `_sass/moonwalk.scss`
- Reusable Liquid components live in `_includes/` and receive data via `include` parameters
- Images for projects go in `images/<project-name>/`
- The site uses Roboto Mono as its primary font (monospace aesthetic)

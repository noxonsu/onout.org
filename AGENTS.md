# Repository Guidelines

## Project Structure & Module Organization
- Root contains static site sources: `index.html`, `css/`, `js/`, `images/`.
- Product folders live at the root (e.g., `launchpad/`, `wallet/`, `dex/`, `lottery/`, `nft/`).
- Documentation and assets: `docs/`, `sitemap.xml`, `.github/` (workflows), misc product prototypes.
- See `product-template/` for adding new product pages/sections.

## Build, Deploy, and Local Preview
- Static site — no build step. Cloudflare Pages deploys on push to `main`.
- Crypto/landing updates: edit `index.html`; commit and push.
- AI/new product pages are generated outside this repo (see README): after generation writes files here, run:
  - `git add . && git commit -m "Update <area>" && git push`
- Local preview (optional): `python3 -m http.server 8080` then open `http://localhost:8080`.

## Coding Style & Naming Conventions
- HTML5, CSS, JS; 2-space indentation; UTF-8.
- Filenames: kebab-case (e.g., `product-overview.html`).
- CSS classes/ids: kebab-case; avoid inline styles; prefer semantic HTML.
- Keep links relative where possible; centralize repeated content.

## Testing Guidelines
- Manual checks per change:
  - Page renders without console errors; links/images work.
  - Navigation to/from `index.html` intact; language variants (if any) render.
  - Update `sitemap.xml` when adding/removing pages.
- No framework tests; keep changes small and verify in browser or local server.

## Commit & Pull Request Guidelines
- Commit messages: concise, capitalized, imperative (e.g., "Add …", "Update …", "Fix …").
- Scope commits to a single concern (page, section, or product folder).
- PRs should include:
  - Clear description of changes and rationale.
  - Affected paths (e.g., `index.html`, `wallet/`), and screenshots/links to previews.
  - Reference related issues/tasks if applicable.

## Security & Configuration Tips
- Do not commit secrets or server-side scripts; this repo is public static content.
- Large binaries are discouraged — prefer optimized web formats.
- Follow README for external generation (Google Sheets + `generate.php`) workflow.

## Agent-Specific Instructions
- Read the root `README.md` before changes.
- Touch only relevant folders; avoid mass refactors.
- When adding a product, start from `product-template/` and keep structure consistent.

## Product Setup Guides (Claude Version)

Each product has a `.claude/setup.md` with configuration parameters and deployment steps for AI-assisted setup:

- [dao/.claude/setup.md](dao/.claude/setup.md) — DAO governance (token voting, proposals)
- [wallet/.claude/setup.md](wallet/.claude/setup.md) — Multi-currency crypto wallet (WordPress)
- [farming/.claude/setup.md](farming/.claude/setup.md) — Staking & yield farming
- [dex/.claude/setup.md](dex/.claude/setup.md) — DEX / Uniswap-like exchange
- [launchpad/.claude/setup.md](launchpad/.claude/setup.md) — IDO crypto launchpad
- [nft/.claude/setup.md](nft/.claude/setup.md) — NFT marketplace (lazy minting)
- [lenda/.claude/setup.md](lenda/.claude/setup.md) — Lending & borrowing (Aave-like)
- [lottery/.claude/setup.md](lottery/.claude/setup.md) — On-chain crypto lottery
- [predictionmarket/.claude/setup.md](predictionmarket/.claude/setup.md) — Prediction market (Polymarket-like)

When adding a new product, create `.claude/setup.md` from `product-template/.claude/setup.md`.

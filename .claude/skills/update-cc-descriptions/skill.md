# Skill: update-cc-descriptions

Update CodeCanyon product descriptions: check links, regenerate banners, prepare upload page.

Use when: "обнови описания на кодканьоне", "проверь ссылки в envato-descriptions",
"создай баннер для продукта", "добавь changelog", "обнови html описание",
"update codecanyon descriptions", "check cc descriptions"

---

## What this skill does

1. **Audits** all links and images in `envato-descriptions/*.html` for broken URLs
2. **Regenerates** PNG banners via Puppeteer (590px @2x) when content changes
3. **Updates** HTML description files with new banners, changelogs, or fixed links
4. **Syncs** `upload-agent.html` so browser agent can copy-paste to CodeCanyon

## Files

```
/var/www/onout.org/envato-descriptions/
├── README.md             ← Full pipeline docs
├── wallet.html           ← MCW Wallet (CC item 23532064)
├── farming.html          ← FarmFactory (CC item 29987071)
├── definance.html        ← DeFinance (CC item 29099232)
├── dao-factory.html      ← DAO Factory WP (CC item 35608699)
├── dao-widget.html       ← DAO Widget JS (CC item 35358807)
├── launchpad.html        ← IDOFactory (CC item 39882380)
├── upload-agent.html     ← Agent task board (public URL)
└── banners/              ← PNG banners (590px @2x)
```

Public URL base: `https://onout.org/envato-descriptions/`

## Steps

### 1. Check broken links

```bash
for url in \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-1.1.png" \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-2.1.png" \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-3.1.png" \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-4.1.png" \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-5.1.png" \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-6.1.png" \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-7.1.png" \
  "https://wallet.wpmix.net/screenshots/mcwallet-description-8.1.png" \
  "https://nointernal.wpmix.net/" \
  "https://definance.wpmix.net/" \
  "https://farm.wpmix.net/" \
  "https://farm.wpmix.net/daofactory/" \
  "https://launchpad.onout.org/" \
  "https://dao.onout.org/" \
  "https://support.onout.org/hc/1331700057/" \
  "https://dash.onout.org/"; do
  echo "$(curl -s -o /dev/null -w '%{http_code}' --max-time 8 -L "$url") $url"
done
```

Expected: all `200`. Fix any `404` or `000` in the corresponding HTML file.

### 2. Edit HTML description

Each `*.html` file is plain HTML without `<html>`/`<body>` tags (CodeCanyon format).

Standard structure:
```html
[Support line — email, telegram, knowledge base]
[Community line — discord, mailing list, twitter]

<p><img src="https://onout.org/envato-descriptions/banners/PRODUCT-update-YEAR.png" width="590" alt="..."></p>

<h2>Product Name — Tagline</h2>
<p>Brief description + Live Demo link</p>

<h2>Key Features</h2>
- Feature 1<br>
...

<h2>How it works</h2>
<h2>Supported Networks</h2>

SEE also: cross-links to other products

<h2>Changelog vX.Y.DATE</h2>  ← add when releasing update
<ul><li><strong>New:</strong> description</li></ul>
```

### 3. Regenerate banner (when needed)

Banners are generated with Puppeteer. Template script:

```javascript
// /tmp/gen_banners.mjs
import puppeteer from '/root/.nvm/versions/node/v22.21.1/lib/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  headless: 'new',
});
const page = await browser.newPage();
await page.setViewport({ width: 590, height: 186, deviceScaleFactor: 2 });
await page.setContent(BANNER_HTML);
await page.screenshot({
  path: '/var/www/onout.org/envato-descriptions/banners/PRODUCT-update-YEAR.png',
  clip: { x: 0, y: 0, width: 590, height: 186 }
});
await browser.close();
```

Run: `node /tmp/gen_banners.mjs`

Banner design params:
- Size: 590×186px logical, 1180×372px physical (@2x)
- Dark background: `#0B0F1A` with subtle grid
- Left accent bar + glow blob in product color
- Large year stamp (semi-transparent) on the right
- 3 bullet update points at bottom

Product accent colors:
- wallet: `#F7931A` (Bitcoin orange)
- farming: `#00D395` (DeFi green)
- definance: `#FF007A` (Uniswap pink)
- dao-factory / dao-widget: `#7B3FE4` (purple)
- launchpad: `#F59E0B` (amber)

### 4. Sync upload-agent.html

After editing HTML files, update the corresponding `html:` string inside
`upload-agent.html` → `tasks` array → matching `id` entry.

The page is used by the browser agent to upload descriptions to CodeCanyon.
URL: `https://onout.org/envato-descriptions/upload-agent.html`

### 5. Deploy

Files are served directly by nginx from `/var/www/onout.org/`.
No build step needed — just save the file.

If nginx needs reload after config changes:
```bash
sudo systemctl reload nginx
```

## CodeCanyon Item IDs

| Product | Item ID | Edit URL |
|---------|---------|----------|
| MCW Wallet | 23532064 | https://codecanyon.net/item/edit/23532064 |
| FarmFactory | 29987071 | https://codecanyon.net/item/edit/29987071 |
| DeFinance | 29099232 | https://codecanyon.net/item/edit/29099232 |
| DAO Factory WP | 35608699 | https://codecanyon.net/item/edit/35608699 |
| DAO Widget JS | 35358807 | https://codecanyon.net/item/edit/35358807 |
| IDOFactory | 39882380 | https://codecanyon.net/item/edit/39882380 |

## Browser Agent Instructions

Give this to the browser agent verbatim:

> Go to **https://onout.org/envato-descriptions/upload-agent.html**
>
> For each card:
> 1. Click **Copy HTML to Clipboard**
> 2. Open the **Edit URL** from the card
> 3. Find the **Description** field → switch to **HTML / Source** mode
> 4. Select all text, paste the copied HTML
> 5. Click **Save**
> 6. Return to the task page, mark the card as **Done**
>
> Repeat for all 6 cards. Progress is saved in browser localStorage.

## Envato API (for auditing items)

Token stored in: `/var/www/onout.org/.claude/skills/envato-upload/scripts/.env`

```bash
TOKEN=$(grep ENVATO_PERSONAL_TOKEN /var/www/onout.org/.claude/skills/envato-upload/scripts/.env | cut -d= -f2)

# List all items
curl -s "https://api.envato.com/v1/discovery/search/search/item?username=NoxonThemes&site=codecanyon.net" \
  -H "Authorization: Bearer $TOKEN" | python3 -m json.tool

# Get item info
curl -s "https://api.envato.com/v1/market/item:ITEM_ID.json" \
  -H "Authorization: Bearer $TOKEN"
```

Note: Envato API does NOT return HTML descriptions — must be fetched from CodeCanyon page or edited via author dashboard.

## Related Skills

- `envato-upload` — uploads ZIP files (plugin packages) to CodeCanyon
- This skill — updates item descriptions and banners

## Last Updated

2026-03-05 — Initial version. Banners: Update 2026 theme.

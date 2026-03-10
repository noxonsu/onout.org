# Envato Upload Skill

**Type:** Automation Tool
**Purpose:** Upload plugin updates to Envato CodeCanyon via FTP

## Description

Uploads WordPress plugin ZIP to Envato CodeCanyon marketplace via FTP:
1. Gets pre-built ZIP from CI/CD pipeline CDN (DO NOT build locally)
2. Uploads ZIP to Envato FTP (`ftp.marketplace.envato.com`)
3. After FTP upload, author selects the file in Envato web UI to attach to product

## When to Use

Use this skill when:
- "загрузи на envato", "upload to codecanyon", "залей на envato"
- "обнови плагин на envato", "update plugin on envato"
- After CI/CD pipeline completes and ZIP is available on CDN

## Requirements

- curl (for FTP upload)
- Envato Personal Token (stored in `.env`)
- ZIP already built by CI/CD pipeline (on CDN)

## Quick Usage (One-liner)

```bash
# 1. Get version from CDN
VERSION=$(curl -s https://farm.wpmix.net/updates/mcw-info.json | python3 -c "import sys,json; print(json.load(sys.stdin)['version'])")

# 2. Download ZIP from CDN
curl -L -o /tmp/mcw-v${VERSION}.zip "https://farm.wpmix.net/updates/mcw-v${VERSION}.zip"

# 3. Upload to Envato FTP
curl --ftp-ssl \
  --user "$ENVATO_USERNAME:$(grep ENVATO_PERSONAL_TOKEN /var/www/onout.org/.claude/skills/envato-upload/scripts/.env | cut -d= -f2)" \
  -T /tmp/mcw-v${VERSION}.zip \
  ftp://ftp.marketplace.envato.com/mcw-v${VERSION}.zip

# 4. Go to Envato web UI to attach the file to the product
echo "Now go to: https://codecanyon.net/item/multicurrency-crypto-wallet-and-exchange-widgets-for-wordpress/23532064/edit"
```

## Process Flow

### Step 1: Get ZIP from CI/CD Pipeline (DO NOT build locally!)

ZIP files are built automatically by GitHub Actions (`deploy.yml`) on push to main/master.
The pipeline builds mainnet+testnet widgets, packages WordPress plugin, and uploads ZIP to CDN.

**Where to get the ZIP:**
```bash
# Check latest version
curl -s https://farm.wpmix.net/updates/mcw-info.json | python3 -m json.tool

# Download ZIP (version from info.json)
curl -L -o /tmp/mcw-v2.26.0227.zip https://farm.wpmix.net/updates/mcw-v2.26.0227.zip
```

**CDN URLs by product:**
| Product | Info JSON | ZIP Pattern |
|---------|-----------|-------------|
| MCW | `https://farm.wpmix.net/updates/mcw-info.json` | `mcw-v{VERSION}.zip` |
| FarmFactory | `https://farm.wpmix.net/updates/farmfactory-info.json` | `farmfactory-v{VERSION}.zip` |

**DO NOT** run `npm run build:mainnet-widget` etc. locally — this is done by the pipeline.

### Step 2: Upload to Envato FTP

```bash
curl --ftp-ssl \
  --user "$ENVATO_USERNAME:ENVATO_PERSONAL_TOKEN" \
  -T /path/to/mcw-v2.26.0227.zip \
  ftp://ftp.marketplace.envato.com/mcw-v2.26.0227.zip
```

Successful response: `226-File successfully transferred`

### Step 3: Attach in Envato Web UI

After FTP upload, go to the product edit page and select the uploaded file:
- MCW: https://codecanyon.net/item/multicurrency-crypto-wallet-and-exchange-widgets-for-wordpress/edit/23532064
- FarmFactory: https://codecanyon.net/item/farmfactory-ethereum-assets-staking-yield-farming/edit/29987071
- DeFinance: https://codecanyon.net/item/definance-ethereum-defi-plugin-for-wordpress/edit/29099232

## Configuration

### Environment Variables

Stored in `scripts/.env` (gitignored):

```env
ENVATO_USERNAME=NoxonThemes
ENVATO_PERSONAL_TOKEN=your_token_here
```

Token created at: https://build.envato.com/create-token/
Required permissions: "Upload files to Envato Market" + "View and search Envato sites"

### Plugin Config

`scripts/plugin-config.json` maps plugin names to Envato item IDs and CDN URLs.

## Product Edit URLs

| Product | Item ID | Edit URL |
|---------|---------|----------|
| MCW (Wallets) | 23532064 | https://codecanyon.net/item/.../edit/23532064 |
| FarmFactory | 29987071 | https://codecanyon.net/item/.../edit/29987071 |
| DeFinance | 29099232 | https://codecanyon.net/item/.../edit/29099232 |
| DAO Factory | 35608699 | https://codecanyon.net/item/.../edit/35608699 |
| DAO Widget | 35358807 | https://codecanyon.net/item/.../edit/35358807 |
| IDOFactory | 39882380 | https://codecanyon.net/item/.../edit/39882380 |

## FTP Details

- **Host:** `ftp.marketplace.envato.com`
- **Protocol:** FTP over TLS (FTPS)
- **Username:** Envato author username
- **Password:** Envato Personal Token (NOT account password)
- **Upload directory:** root (/)

## Verify Upload

```bash
# List files on Envato FTP
curl --ftp-ssl \
  --user "$ENVATO_USERNAME:TOKEN" \
  ftp://ftp.marketplace.envato.com/ --list-only
```

## GitHub Action Alternative

For automated uploads from CI/CD:

```yaml
- name: Deploy to Envato FTP
  uses: nk-o/action-envato-ftp-deploy@master
  with:
    ENVATO_USERNAME: ${{ secrets.ENVATO_USERNAME }}
    ENVATO_PERSONAL_TOKEN: ${{ secrets.ENVATO_PERSONAL_TOKEN }}
    ZIP_FILES: |
      ./mcw-v${{ env.VERSION }}.zip
```

## Legacy: Puppeteer Upload (Deprecated)

The old `upload-to-envato.js` Puppeteer script is still available but NOT recommended:
- Requires interactive terminal (2FA prompts, confirmations)
- Fragile — breaks when Envato changes UI
- Needs headless Chrome installed

Use FTP method instead.

## Files

- `skill.md` - This documentation
- `scripts/.env` - Credentials (gitignored)
- `scripts/plugin-config.json` - Plugin → Envato item mapping
- `scripts/upload-to-envato.js` - Legacy Puppeteer script (deprecated)
- `scripts/generate-changelog.sh` - Git changelog generator

## What to Update When Releasing

When pushing a new version to Envato, update these resources:

1. **ZIP to Envato FTP** — upload via `curl --ftp-ssl` (see Quick Usage)
2. **Envato Description** — copy from `/var/www/onout.org/envato-descriptions/{product}.html` into Envato edit page
3. **CI Status Dashboard** — `/var/www/onout.org/ci-status.html` (auto-updates changelogs from GitHub API)
4. **Landing page** — update version/features if needed at `/var/www/onout.org/{product}/index.html`

### Description files location
```
/var/www/onout.org/envato-descriptions/
  wallet.html      — MCW (item 23532064)
  farming.html     — FarmFactory (item 29987071)     [TODO]
  dex.html         — DeFinance (item 29099232)       [TODO]
  dao-wp.html      — DAO Factory WP (item 35608699)  [TODO]
  dao-js.html      — DAO Widget JS (item 35358807)   [TODO]
  launchpad.html   — IDOFactory (item 39882380)      [TODO]
```

### CI Status Dashboard
- URL: https://onout.org/ci-status.html
- Shows: build badges, demo links, changelogs, Envato edit links, landing page links
- Changelogs load automatically from GitHub API (last 5 commits per repo)

### WordPress plugin folder naming
The ZIP from pipeline creates `multi-currency-wallet-pro/` folder inside.
On server `95.217.227.162` the plugin MUST be at:
```
/home/walletwpmixnet/web/wallet.wpmix.net/public_html/wp-content/plugins/multi-currency-wallet-pro/
```
NOT `multi-currency-wallet-pro-master/` — WordPress won't find it!

---

**Updated:** 2026-02-27
**Version:** 2.0.0 (switched from Puppeteer to FTP)

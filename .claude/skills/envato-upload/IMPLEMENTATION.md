# Envato Upload Skill - Implementation Complete

**Date:** 2026-02-27
**Status:** ✅ Ready for Testing
**Location:** `/var/www/onout.org/.claude/skills/envato-upload/`

## What Was Completed

### ✅ Full Implementation of Upload Automation

**Created Files:**

1. **`scripts/upload-to-envato.js`** (588 lines)
   - Complete Puppeteer automation for Envato CodeCanyon uploads
   - Session management with 24-hour cookie caching
   - Interactive 2FA support
   - Automatic changelog generation from git commits
   - Automatic ZIP file detection
   - Form filling for changelog and reviewer notes
   - Submit button detection and confirmation
   - Debug mode with screenshots
   - Dry-run capability

2. **`scripts/list-items.js`** (147 lines)
   - Helper script to discover Envato item IDs
   - Automatic login and item listing
   - Saves results to `envato-items.json`
   - Suggests mappings for `plugin-config.json`

3. **`scripts/generate-changelog.sh`** (137 lines)
   - Generates changelog from git commits
   - Categorizes by fix/feat/other
   - Outputs Markdown and HTML formats
   - Creates reviewer notes template

4. **`scripts/plugin-config.json`**
   - Configured for all 5 plugins:
     - farmfactory
     - definance
     - daofactory
     - lotteryfactory
     - multicurrencywallet
   - Item IDs set to "UNKNOWN" (need to be filled)

5. **`scripts/.env`**
   - Credentials configured:
     - Username: NoxonThemes
     - Password: r5t6u7671233ffffsd
   - Debug mode enabled
   - Screenshots enabled

6. **`scripts/package.json`**
   - All dependencies configured
   - Scripts defined:
     - `npm run envato-upload` - Main upload
     - `npm run envato-list-items` - Find item IDs
     - `npm run test-login` - Test login only
     - `npm run generate-changelog` - Generate changelog

7. **Documentation:**
   - `skill.md` - Complete skill documentation
   - `README.md` - User guide
   - `USAGE.md` - Quick start in Russian
   - `IMPLEMENTATION.md` - This file

### ✅ Dependencies Installed

All npm packages installed and working:
- ✅ puppeteer@21.11.0 (with Chromium)
- ✅ chalk@4.1.2
- ✅ ora@5.4.1
- ✅ inquirer@8.2.7
- ✅ yargs@17.7.2
- ✅ dotenv@16.6.1
- ✅ node-fetch@2.7.0

### ✅ Key Features Implemented

**Login & Authentication:**
- ✅ Session caching (24h validity)
- ✅ Interactive 2FA code prompt
- ✅ Credential validation
- ✅ Login verification

**ZIP File Detection:**
- ✅ Searches multiple directories:
  - `/home/farmFactory/web/farm.wpmix.net/public_html/updates/`
  - Repository root (`/root/farmfactory/`)
  - Repository `dist/` folder
- ✅ Finds latest matching ZIP by modification time

**Changelog Generation:**
- ✅ Parses git commits since last tag
- ✅ Categorizes by type (fix:, feat:, other)
- ✅ Formats as HTML for Envato
- ✅ Generates reviewer notes

**Upload Process:**
- ✅ Navigates to item edit page using item ID
- ✅ Finds upload section/tab
- ✅ Uploads ZIP file
- ✅ Fills changelog textarea
- ✅ Fills reviewer notes
- ✅ Finds and clicks submit button
- ✅ Asks for confirmation before submitting
- ✅ Verifies submission success

**Error Handling:**
- ✅ Screenshots on errors
- ✅ Detailed logging to files
- ✅ Graceful fallbacks for missing elements
- ✅ Manual submit option if button not found

## What Needs to Be Done

### 1. Get Envato Item IDs ⚠️

**Option A: Automatic (Recommended)**

```bash
cd /var/www/onout.org/.claude/skills/envato-upload/scripts
npm run envato-list-items
```

This will:
1. Login to Envato
2. List all items with IDs
3. Save to `envato-items.json`
4. Show suggested mappings

**Option B: Manual**

1. Go to https://author.envato.com/items
2. Click on each plugin
3. Copy item ID from URL: `https://author.envato.com/edit/12345678`
4. Update `plugin-config.json`:

```json
{
  "farmfactory": {
    "itemId": "12345678",  // ← Replace UNKNOWN with actual ID
    ...
  }
}
```

### 2. Test Login

```bash
cd /var/www/onout.org/.claude/skills/envato-upload/scripts
npm run test-login
```

This will:
1. Open browser (non-headless)
2. Prompt for 2FA code
3. Save session for 24h
4. Verify login works

### 3. Test Dry Run

```bash
npm run envato-upload -- --plugin farmfactory --dry-run
```

This will:
1. Login to Envato
2. Find latest ZIP
3. Generate changelog
4. Show preview
5. **NOT** actually upload (safe for testing)

### 4. Test Real Upload

**IMPORTANT:** Test on a staging/test item first if possible!

```bash
npm run envato-upload -- --plugin farmfactory
```

This will:
1. Login
2. Find ZIP
3. Generate changelog
4. Show preview
5. Ask for confirmation
6. Upload ZIP
7. Fill changelog
8. Fill reviewer notes
9. Ask for submit confirmation
10. Submit for review

## Workflow Integration

After GitHub Actions completes and creates ZIP in `/updates/`:

```bash
cd /var/www/onout.org/.claude/skills/envato-upload/scripts

# Upload farmfactory
npm run envato-upload -- --plugin farmfactory

# Upload definance
npm run envato-upload -- --plugin definance

# etc.
```

Or add to GitHub Actions as a local step (runs on server, not in Actions):

```yaml
- name: Trigger Envato Upload
  run: |
    ssh user@server "cd /var/www/onout.org/.claude/skills/envato-upload/scripts && npm run envato-upload -- --plugin farmfactory --auto-submit"
```

## Architecture

```
/var/www/onout.org/.claude/skills/envato-upload/
├── skill.md                     # Skill documentation
├── README.md                    # User guide
├── USAGE.md                     # Quick start (RU)
├── IMPLEMENTATION.md            # This file
└── scripts/
    ├── package.json             # Dependencies
    ├── .env                     # Credentials (gitignored)
    ├── .env.example             # Template
    ├── .gitignore               # Security
    ├── plugin-config.json       # Plugin → Envato mapping
    ├── upload-to-envato.js      # Main script (588 lines) ✅
    ├── list-items.js            # Helper to find item IDs ✅
    ├── generate-changelog.sh    # Git changelog generator ✅
    ├── node_modules/            # Installed dependencies ✅
    ├── screenshots/             # Debug screenshots (created on run)
    ├── logs/                    # Execution logs (created on run)
    └── .envato-session          # Saved session (created on first login)
```

## Testing Checklist

- [ ] Run `npm run envato-list-items` to get item IDs
- [ ] Update `plugin-config.json` with actual item IDs
- [ ] Run `npm run test-login` to verify login works
- [ ] Run dry run for each plugin
- [ ] Test real upload on one plugin
- [ ] Verify changelog format on Envato
- [ ] Verify reviewer notes
- [ ] Verify submit works
- [ ] Test 2FA flow
- [ ] Test session reuse (run twice within 24h)
- [ ] Test session expiry (delete .envato-session and re-run)

## Known Limitations

1. **Envato UI Changes:** If Envato redesigns their dashboard, selectors may need updating
2. **No REST API:** Envato doesn't provide API for uploads, only Puppeteer works
3. **Interactive Only:** Cannot run in GitHub Actions due to 2FA prompts
4. **Rate Limiting:** Unknown Envato rate limits for uploads
5. **Manual Review:** Envato still reviews all updates manually (can take 1-3 days)

## Troubleshooting

### Login Fails

```bash
DEBUG=true npm run test-login
ls screenshots/  # Check screenshots
cat logs/*.log   # Check logs
```

### Can't Find ZIP

```bash
# Check search paths
ls /home/farmFactory/web/farm.wpmix.net/public_html/updates/
ls /root/farmfactory/

# Or specify manually
npm run envato-upload -- --plugin farmfactory --zip /path/to/file.zip
```

### Session Expired

```bash
rm .envato-session
npm run test-login
```

### Upload Stuck

1. Check browser window (non-headless mode)
2. Check screenshots in `screenshots/`
3. Check logs in `logs/`
4. Verify item ID in `plugin-config.json`

### Wrong Changelog Format

```bash
# Test changelog generation only
./generate-changelog.sh /root/farmfactory 2.26.0227
```

## Next Steps

1. **Get item IDs** using `npm run envato-list-items`
2. **Test login** using `npm run test-login`
3. **Dry run** using `--dry-run` flag
4. **Real upload** on one plugin to verify
5. **Integrate** into deployment workflow

## Support

- **Envato Platform:** https://help.author.envato.com/
- **Puppeteer Docs:** https://pptr.dev/
- **Logs:** `scripts/logs/`
- **Screenshots:** `scripts/screenshots/`

---

**Status:** ✅ **Ready for Testing**
**Created:** 2026-02-27
**Implementation:** Complete
**Testing:** Pending user action

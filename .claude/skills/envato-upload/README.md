# Envato Upload Automation

Automate uploading WordPress plugin updates to Envato CodeCanyon marketplace.

## Quick Start

```bash
cd /var/www/onout.org/.claude/skills/envato-upload/scripts

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Edit credentials
nano .env

# Run upload
npm run envato-upload -- --plugin farmfactory
```

## Features

- ✅ Automated login with 2FA support (prompts for code)
- ✅ Session management (24h validity)
- ✅ Auto-detects latest ZIP file from workflows
- ✅ Generates changelog from git commits
- ✅ Interactive prompts for safety
- ✅ Dry-run mode for testing
- ✅ Screenshots and logging

## Setup

### 1. Install Dependencies

```bash
cd scripts/
npm install
```

### 2. Configure Environment

Create `.env` file:

```env
ENVATO_USERNAME=your_username
ENVATO_PASSWORD=your_password

# Optional
HEADLESS=false
DEBUG=true
SAVE_SCREENSHOTS=true
```

### 3. Get Envato Item IDs

Run the helper script to automatically find your item IDs:

```bash
npm run envato-list-items
```

This will:
1. Login to Envato (prompts for 2FA if enabled)
2. List all your items with IDs
3. Save results to `envato-items.json`
4. Show suggested mappings for plugin-config.json

**Or manually find item IDs:**
- Go to https://author.envato.com/items
- Click on your item
- URL will be: `https://author.envato.com/edit/12345678`
- The number (12345678) is your item ID

### 4. Update Plugin Config

Edit `plugin-config.json` and add the item IDs:

```json
{
  "farmfactory": {
    "itemId": "12345678",
    ...
  }
}
```

## Usage

### Upload Plugin

```bash
# Interactive mode
npm run envato-upload

# Specific plugin
npm run envato-upload -- --plugin farmfactory

# Dry run (test without upload)
npm run envato-upload -- --plugin definance --dry-run

# Custom ZIP file
npm run envato-upload -- --plugin farmfactory --zip /path/to/plugin.zip
```

### Test Login

```bash
npm run test-login
```

This will:
1. Open browser (non-headless)
2. Prompt for 2FA code if needed
3. Save session for future use

### Generate Changelog Only

```bash
cd /root/farmfactory
../../../var/www/onout.org/.claude/skills/envato-upload/scripts/generate-changelog.sh . 2.26.0227
```

## How It Works

### 1. Login Process

```
1. Check for saved session (24h validity)
2. If expired or missing:
   - Open Envato login page
   - Enter credentials from .env
   - If 2FA enabled → prompt for code
   - Save session cookies
```

### 2. ZIP Detection

Searches in order:
1. `/home/farmFactory/web/farm.wpmix.net/public_html/updates/`
2. Repository root (e.g., `/root/farmfactory/`)
3. Repository `dist/` folder

Uses latest modified file matching pattern.

### 3. Changelog Generation

```
1. Get git commits since last tag (or 30 days)
2. Categorize by type (fix:, feat:, etc.)
3. Format as HTML for Envato
4. Generate reviewer notes
```

### 4. Upload (placeholder)

Current implementation shows login + changelog generation.

**To complete upload functionality:**
- Add Envato item ID to `plugin-config.json`
- Implement upload steps in `upload-to-envato.js`
- Test on staging item first

## 2FA Support

The script **prompts for 2FA code** during login:

```
? Enter 2FA code: 123456
```

Just enter the 6-digit code from your authenticator app.

## Session Management

- Sessions are saved to `.envato-session`
- Valid for 24 hours (configurable)
- Automatically reused on next run
- Delete file to force fresh login

```bash
rm scripts/.envato-session
```

## Troubleshooting

### Login Fails

```bash
# Enable debug mode
DEBUG=true npm run test-login

# Check screenshots
ls screenshots/
```

### Can't Find ZIP

```bash
# Specify manually
npm run envato-upload -- --plugin farmfactory --zip /path/to/file.zip

# Check search paths
ls /home/farmFactory/web/farm.wpmix.net/public_html/updates/
```

### Session Expired

```bash
# Clear session
rm scripts/.envato-session

# Re-login
npm run test-login
```

## File Structure

```
envato-upload/
├── skill.md                  # Skill documentation
├── README.md                 # This file
└── scripts/
    ├── package.json          # Node.js dependencies
    ├── .env.example          # Environment template
    ├── .env                  # Your credentials (gitignored)
    ├── plugin-config.json    # Plugin to Envato mapping
    ├── upload-to-envato.js   # Main Puppeteer script
    ├── generate-changelog.sh # Git changelog generator
    ├── screenshots/          # Debug screenshots
    ├── logs/                 # Execution logs
    └── .envato-session       # Saved session (gitignored)
```

## Security

- `.env` is gitignored
- `.envato-session` is gitignored
- Passwords never logged
- 2FA code entered interactively (not stored)

## Workflow Integration

After GitHub Actions workflow completes:

```bash
# farmfactory workflow finished → ZIP in /updates/

# Upload to Envato
cd /var/www/onout.org/.claude/skills/envato-upload/scripts
npm run envato-upload -- --plugin farmfactory
```

The script will:
1. Find latest `farmfactory-v*.zip`
2. Generate changelog from recent commits
3. Login to Envato (prompts for 2FA)
4. Show preview and ask confirmation
5. Upload and submit for review

## Next Steps

1. **Test login:**
   ```bash
   npm run test-login
   ```

2. **Test changelog:**
   ```bash
   ./generate-changelog.sh /root/farmfactory 2.26.0227
   ```

3. **Dry run:**
   ```bash
   npm run envato-upload -- --plugin farmfactory --dry-run
   ```

4. **Complete upload implementation:**
   - Get actual Envato item IDs
   - Add upload logic to `upload-to-envato.js`
   - Test with real upload

## Links

- **Envato Author Dashboard:** https://author.envato.com/
- **Envato Help:** https://help.author.envato.com/
- **Puppeteer Docs:** https://pptr.dev/

---

**Created:** 2026-02-27
**Status:** Login + Changelog ✅ | Upload 🚧 (needs completion)

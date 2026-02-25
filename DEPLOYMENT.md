# onout.org Deployment Documentation

## Overview

This is a static site repository served directly by nginx. It contains legacy pages for onout.org domain (dao, wallet, farming, dex, lottery, nft, lenda, launchpad, etc.).

## Architecture

```
User → https://onout.org/dao
  ↓
Cloudflare CDN
  ↓
nginx (78.47.125.10:80)
  ↓ (matches location ^~ /dao/)
Serves files from /var/www/onout.org/dao/
```

## Directory Structure

```
/var/www/onout.org/
├── dao/
│   ├── index.html
│   ├── js/
│   │   └── f.js          # Section-specific JavaScript (no Swiper)
│   ├── css/
│   └── images/
├── wallet/
│   ├── index.html
│   └── js/f.js
├── farming/
├── dex/
├── lottery/
├── nft/
├── lenda/
├── launchpad/
└── js/
    └── f.js              # Root JavaScript (has Swiper)
```

## Important Note: Relative Paths

HTML files in subdirectories (e.g., `/dao/index.html`) use **relative paths** like:

```html
<script src="js/f.js"></script>
<link rel="stylesheet" href="css/style.css">
```

When browser loads `/dao/index.html`, it requests:
- `/js/f.js` (NOT `/dao/js/f.js`)

nginx configuration handles this by:
1. Creating explicit location blocks for each section (`location ^~ /dao/`)
2. Files within `/dao/` directory are served from `/var/www/onout.org/dao/`
3. Browser gets correct section-specific files

## nginx Configuration

**File**: `/etc/nginx/sites-available/onout.org`

Key features:
- Section-specific location blocks with `^~` prefix (stops regex matching)
- 301 redirects for URLs without trailing slash (`/dao` → `/dao/`)
- Fallback to Flask backend for dynamic pages

Example:
```nginx
location = /dao { return 301 /dao/; }

location ^~ /dao/ {
    try_files $uri $uri/ /dao/index.html =404;
}
```

## Deployment Process

### 1. Clone/Update Repository

```bash
cd /var/www/onout.org
sudo git pull origin main
```

### 2. Set Correct Permissions

```bash
sudo chown -R www-data:www-data /var/www/onout.org
```

### 3. Reload nginx

```bash
sudo systemctl reload nginx
```

### 4. Clear Cloudflare Cache (if needed)

Via Cloudflare dashboard → Caching → Purge Everything

## Testing

### Local Testing

```bash
# Test main page
curl -I http://127.0.0.1/dao/

# Test section-specific JavaScript
curl -s http://127.0.0.1/dao/js/f.js | head -5

# Test root JavaScript
curl -s http://127.0.0.1/js/f.js | head -5
```

### Production Testing

```bash
# Test live site
curl -I https://onout.org/dao/

# Verify correct JS files
curl -s https://onout.org/dao/js/f.js | grep -c "Swiper"  # Should be 0
curl -s https://onout.org/js/f.js | grep -c "Swiper"      # Should be 1
```

### Puppeteer E2E Test

Located in `/root/space2/test_onout_dao.js`:

```bash
node /root/space2/test_onout_dao.js
```

Expected output:
```
✅ Page loaded successfully
Total requests: 25
Failed requests: 0
📷 Images found: 11
✅ All images loaded successfully
```

## Troubleshooting

### 404 Errors in Browser Console

**Symptom**: Files return 404 in DevTools but curl shows 200

**Cause**: Browser cache or Cloudflare cache

**Solution**:
```bash
# Hard refresh in browser
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)

# Or use incognito mode
```

### Wrong JavaScript File Loaded

**Symptom**: "Swiper is not defined" error in /dao page

**Cause**: Browser loading root `/js/f.js` instead of `/dao/js/f.js`

**Solution**: Verify nginx location blocks are in correct order and using `^~` prefix

### Permissions Issues

**Symptom**: nginx shows 403 Forbidden

**Solution**:
```bash
# Check permissions
namei -l /var/www/onout.org/dao/index.html

# Fix ownership
sudo chown -R www-data:www-data /var/www/onout.org

# Fix permissions
sudo chmod 755 /var/www/onout.org
sudo find /var/www/onout.org -type d -exec chmod 755 {} \;
sudo find /var/www/onout.org -type f -exec chmod 644 {} \;
```

## Integration with habab.ru Backend

For dynamic pages (products, SEO articles), requests are proxied to Flask backend:

```
User → https://onout.org/products/example
  ↓
nginx (no static file match)
  ↓ @habab_backend
Flask backend (127.0.0.1:5001)
  ↓
Returns dynamic HTML with English translation
```

Backend repository: `/root/space2/hababru/`

## Maintenance

### Update Static Content

```bash
cd /var/www/onout.org
sudo git pull origin main
sudo chown -R www-data:www-data .
sudo systemctl reload nginx
```

### Add New Static Section

1. Create directory in repository (e.g., `/newsection/`)
2. Add to nginx config:
```nginx
location = /newsection { return 301 /newsection/; }
location ^~ /newsection/ {
    try_files $uri $uri/ /newsection/index.html =404;
}
```
3. Reload nginx: `sudo systemctl reload nginx`

## Files Modified

- `/etc/nginx/sites-available/onout.org` - nginx configuration
- `/etc/nginx/sites-enabled/onout.org` - symlink to above
- `/var/www/onout.org/` - static files repository

## Contact

- Repository: https://github.com/noxonsu/onout.org
- Backend: https://github.com/noxonsu/habab.ru
- Server: 78.47.125.10 (95.217.227.164)
- Telegram: @onoutnoxon

## Changelog

### 2026-02-25
- Migrated from Flask 404 handler to nginx static serving
- Moved repository from `/root/space2/static_onout_org/` to `/var/www/onout.org/`
- Configured section-specific location blocks for proper asset routing
- Added 301 redirects for URLs without trailing slash
- Improved performance: 0 failed requests, all assets load correctly

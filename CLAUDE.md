# CLAUDE.md - onout.org Product Documentation

## Overview

This repository contains landing pages and demos for NoxonThemes products sold on CodeCanyon (Envato Market). All products are cryptocurrency/blockchain related tools and plugins.

**Total Products**: 6 active products (excluding City App)
**Total Sales**: 441 purchases
**Total Revenue**: ~$202,853

## Products Portfolio

### 1. Bitcoin/Ethereum/ERC20 Wallets with Exchange ⭐ BESTSELLER
- **Price**: $993
- **Sales**: 288 purchases (4.25/month)
- **Revenue**: $113,416 + $5,553 support
- **Rating**: 4.04 stars (17 ratings)
- **Category**: WordPress / Widgets
- **Description**: Multi-currency cryptocurrency wallet and exchange widgets for WordPress
- **Repository**: Unknown (needs investigation)
- **Demo**: Check `/wallet/` directory in this repo
- **Live Preview**: https://codecanyon.net/item/bitcoin-ethereum-erc20-crypto-wallets-with-exchange/

### 2. FarmFactory - Staking & Yield Farming
- **Price**: $899
- **Sales**: 74 purchases (1.43/month)
- **Revenue**: $45,468 + $208 support
- **Category**: WordPress / Forms
- **Description**: Asset staking and yield farming on Ethereum, BSC, and Polygon
- **Repository**: Possibly https://github.com/noxonsu/FarmFactory
- **Demo**: Check `/farming/` directory in this repo
- **Live Preview**: https://codecanyon.net/item/farmfactory-assets-staking-yield-farming/

### 3. DeFinance - Ethereum DeFi Plugin
- **Price**: $935
- **Sales**: 53 purchases (1.03/month)
- **Revenue**: $27,132 + $256 support
- **Category**: WordPress / Widgets
- **Description**: Decentralized finance plugin for Ethereum integration on WordPress
- **Repository**: https://github.com/noxonsu/definance
- **Demo**: Check `/dex/` directory in this repo
- **Live Preview**: https://codecanyon.net/item/definance-ethereum-defi-plugin-for-wordpress/

### 4. DAO Factory - WordPress Plugin
- **Price**: $600
- **Sales**: 15 purchases (0.37/month)
- **Revenue**: $8,748 + $259 support
- **Category**: WordPress / Widgets
- **Description**: Governance and proposals plugin for cryptocurrency tokens
- **Repository**: Unknown
- **Demo**: Check `/dao/` directory in this repo (WordPress version)
- **Live Preview**: https://codecanyon.net/item/dao-factory-governance-and-proposals-plugin/

### 5. Dao Widget - JavaScript Version
- **Price**: $699
- **Sales**: 8 purchases (0.22/month)
- **Revenue**: $4,138
- **Category**: JavaScript / Miscellaneous
- **Description**: Widget enabling governance and proposal functionality (standalone JS)
- **Repository**: https://github.com/noxonsu/DAOwidget
- **Demo**: Check `/dao/` directory in this repo (JavaScript version)
- **Live Preview**: https://codecanyon.net/item/dao-widget-governance-and-proposals/

### 6. IDOFactory - Crypto Launchpad
- **Price**: $952
- **Sales**: 3 purchases (0.13/month)
- **Revenue**: $3,367
- **Category**: JavaScript
- **Description**: Crypto launchpad platform for creating IDO pools with token lockers
- **Repository**: https://github.com/noxonsu/launchpad
- **Demo**: Check `/launchpad/` directory in this repo
- **Live Preview**: https://codecanyon.net/item/idofactory-crypto-launchpad/

## Related GitHub Repositories

### Active Repositories
- **onout.org** - This repository (landing pages)
- **launchpad** - IDO launchpad platform for EVM chains
- **definance** - DeFi plugin source
- **DAOwidget** - DAO governance widget
- **LotteryFactory** - Lottery system (possibly related product)
- **NFTsy** - NFT marketplace plugin for WordPress
- **SensoricaBackend** - Telegram ChatGPT bot on Cloudflare Workers

### Other Projects
- **eeat** - Expert content crawler and publisher
- **ChatGPT-Telegram-Bot** - TeleChat AI bot
- **smartTokenlist** - Blockchain scanner with Telegram integration
- **OpenGpt** - Create ChatGPT apps in seconds
- **CrossChain-Router** - Cross-chain routing

## Demo Sites Structure

This repository (`/var/www/onout.org/`) contains static HTML landing pages for products:

```
/dao/          - DAO Widget demo (JavaScript version)
/wallet/       - Crypto Wallets demo
/farming/      - FarmFactory demo
/dex/          - DeFinance demo
/lottery/      - Lottery demo
/nft/          - NFTsy demo
/lenda/        - Lenda demo
/launchpad/    - IDOFactory demo
```

Each directory contains:
- `index.html` - Landing page
- `js/`, `css/`, `images/` - Assets

## Known Issues

⚠️ **Need Investigation**:
1. Some product repositories are not linked to GitHub (wallets, DAO Factory WordPress)
2. Need to verify which demos correspond to which CodeCanyon products
3. Check for broken links in demo pages
4. Investigate how extensions are packaged for download (zip structure)
5. WordPress versions might be on separate server (167.235.145.60 - connection refused)

## Architecture

### Static Demos (This Repo)
- **Location**: `/var/www/onout.org/`
- **Served by**: nginx directly
- **Purpose**: Product landing pages and demos

### Dynamic Backend
- **Location**: `/root/space2/hababru/`
- **Served by**: Flask (127.0.0.1:5001)
- **Purpose**: Product pages, SEO articles, English translation

## Deployment

### Update Landing Pages
```bash
cd /var/www/onout.org
sudo git pull origin main
sudo chown -R www-data:www-data .
sudo systemctl reload nginx
```

See `DEPLOYMENT.md` for full deployment guide.

## Contact

- **CodeCanyon Profile**: https://codecanyon.net/user/noxonthemes/portfolio
- **GitHub**: https://github.com/noxonsu
- **Telegram**: @onoutnoxon
- **Total Earnings**: $605,154 (as of 2026-02-25)

## TODO

- [ ] Verify all product repositories on GitHub
- [ ] Check for broken links in landing pages
- [ ] Document extension packaging process
- [ ] Add screenshots/videos to README
- [ ] Create product comparison table
- [ ] Add installation guides
- [ ] Document WordPress plugin versions separately

---

**Last Updated**: 2026-02-25
**Maintained By**: NoxonThemes

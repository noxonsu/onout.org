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
- **Landing Page**: https://onout.org/wallet/
- **Live Demo**: https://wallet.wpmix.net/
- **CodeCanyon**: https://codecanyon.net/item/bitcoin-ethereum-erc20-crypto-wallets-with-exchange/

### 2. FarmFactory - Staking & Yield Farming
- **Price**: $899
- **Sales**: 74 purchases (1.43/month)
- **Revenue**: $45,468 + $208 support
- **Category**: WordPress / Forms
- **Description**: Asset staking and yield farming on Ethereum, BSC, and Polygon
- **Repository**: Possibly https://github.com/noxonsu/FarmFactory
- **Landing Page**: https://onout.org/farming/
- **Live Demo**: https://farm.wpmix.net/
- **Video Demo**: https://www.youtube.com/watch?v=fU9RoMXWPjk
- **Documentation**: https://support.onout.org/hc/1331700057/category/3
- **CodeCanyon**: https://codecanyon.net/item/farmfactory-assets-staking-yield-farming/

### 3. DeFinance - Ethereum DeFi Plugin
- **Price**: $935
- **Sales**: 53 purchases (1.03/month)
- **Revenue**: $27,132 + $256 support
- **Category**: WordPress / Widgets
- **Description**: Decentralized finance plugin for Ethereum integration on WordPress (Uniswap-like DEX)
- **Repository**: https://github.com/noxonsu/definance
- **Landing Page**: https://onout.org/dex/
- **Live Demo**: https://dex.onout.org/
- **CodeCanyon**: https://codecanyon.net/item/definance-ethereum-defi-plugin-for-wordpress/

### 4. DAO Factory - WordPress Plugin
- **Price**: $600
- **Sales**: 15 purchases (0.37/month)
- **Revenue**: $8,748 + $259 support
- **Category**: WordPress / Widgets
- **Description**: Governance and proposals plugin for cryptocurrency tokens (Snapshot-like)
- **Repository**: Unknown (needs investigation)
- **Landing Page**: https://onout.org/dao/
- **Live Demo**: https://farm.wpmix.net/daofactory/
- **CodeCanyon**: https://codecanyon.net/item/dao-factory-governance-and-proposals-plugin/

### 5. Dao Widget - JavaScript Version
- **Price**: $699
- **Sales**: 8 purchases (0.22/month)
- **Revenue**: $4,138
- **Category**: JavaScript / Miscellaneous
- **Description**: Widget enabling governance and proposal functionality (standalone JS, non-WordPress)
- **Repository**: https://github.com/noxonsu/DAOwidget
- **Landing Page**: https://onout.org/dao/
- **Live Demo**: https://farm.wpmix.net/daofactory/ (same as DAO Factory)
- **CodeCanyon**: https://codecanyon.net/item/dao-widget-governance-and-proposals/

### 6. IDOFactory - Crypto Launchpad
- **Price**: $952
- **Sales**: 3 purchases (0.13/month)
- **Revenue**: $3,367
- **Category**: JavaScript
- **Description**: Crypto launchpad platform for creating IDO pools with token lockers
- **Repository**: https://github.com/noxonsu/launchpad
- **Landing Page**: https://onout.org/launchpad/
- **Live Demo**: https://launchpad.onout.org/
- **CodeCanyon**: https://codecanyon.net/item/idofactory-crypto-launchpad/

## Additional Products (Not on Main Portfolio)

### 7. NFTsy - NFT Marketplace
- **Category**: WordPress / Widgets
- **Description**: NFT marketplace plugin for WordPress with lazy minting (Rarible SDK)
- **Repository**: https://github.com/noxonsu/NFTsy
- **Landing Page**: https://onout.org/nft/
- **Live Demo**: https://nft.wpmix.net/
- **Status**: Available but not prominently listed

### 8. Lenda - Lending/Borrowing Platform
- **Category**: DeFi / JavaScript
- **Description**: Aave-like lending and borrowing platform for Ethereum
- **Repository**: Unknown
- **Landing Page**: https://onout.org/lenda/
- **Live Demo**: https://borrowlend.onout.org/ or https://lenda.onout.xyz/
- **Status**: Available but not prominently listed

### 9. Crypto Lottery
- **Category**: WordPress / JavaScript
- **Description**: Cryptocurrency lottery system
- **Repository**: https://github.com/noxonsu/LotteryFactory
- **Landing Page**: https://onout.org/lottery/
- **Live Demo**: ⚠️ Not working (links to #)
- **Status**: Demo needs fixing

## Related GitHub Repositories

### Active Repositories
- **onout.org** - This repository (landing pages)
- **launchpad** - IDO launchpad platform for EVM chains
- **definance** - DeFi plugin source
- **DAOwidget** - DAO governance widget
- **LotteryFactory** - Lottery system
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
/dao/          - DAO Widget/Factory → https://farm.wpmix.net/daofactory/
/wallet/       - Crypto Wallets → https://wallet.wpmix.net/
/farming/      - FarmFactory → https://farm.wpmix.net/
/dex/          - DeFinance → https://dex.onout.org/
/lottery/      - Lottery → ⚠️ Demo not working
/nft/          - NFTsy → https://nft.wpmix.net/
/lenda/        - Lenda → https://borrowlend.onout.org/
/launchpad/    - IDOFactory → https://launchpad.onout.org/
```

Each directory contains:
- `index.html` - Landing page
- `js/`, `css/`, `images/` - Assets
- Links to live working demos on `*.wpmix.net` or `*.onout.org`

### Working Demo Sites
- **wallet.wpmix.net** - Crypto wallets demo
- **farm.wpmix.net** - Staking/farming demo
- **farm.wpmix.net/daofactory/** - DAO governance demo
- **dex.onout.org** - DEX (Uniswap clone) demo
- **nft.wpmix.net** - NFT marketplace demo
- **launchpad.onout.org** - IDO launchpad demo
- **borrowlend.onout.org** - Lending platform demo
- **dash.onout.org** - Admin dashboard (mentioned in multiple pages)

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

## Repository & Server Mapping

### Confirmed Repositories

| Product | GitHub | Demo | Server | Type |
|---------|--------|------|--------|------|
| FarmFactory | [farmfactory](https://github.com/noxonsu/farmfactory) | farm.wpmix.net | ?167.235.145.60 | WordPress |
| DeFinance | [definance](https://github.com/noxonsu/definance) | dex.onout.org | Behind CF | WordPress |
| DAO Widget | [DAOwidget](https://github.com/noxonsu/DAOwidget) | farm.wpmix.net/daofactory/ | ?167.235.145.60 | JS Widget |
| IDOFactory | [launchpad](https://github.com/noxonsu/launchpad) | launchpad.onout.org | Behind CF | React |
| Lenda | [Lenda](https://github.com/noxonsu/Lenda) | borrowlend.onout.org | Behind CF | React/Aave |
| NFTsy | [NFTsy](https://github.com/noxonsu/NFTsy) | nft.wpmix.net | ?167.235.145.60 | WordPress |
| Lottery | [LotteryFactory](https://github.com/noxonsu/LotteryFactory) | ⚠️ Broken | - | Unknown |

### Missing Repositories (Need Investigation)

- **Multi Currency Wallet Pro** (wallet.wpmix.net) - ⚠️ NO REPO FOUND
  - Revenue: $113,416 (BESTSELLER)
  - Plugin path: `/wp-content/plugins/multi-currency-wallet-pro/`
  - Needs urgent documentation
  
- **DAO Factory WordPress** - ⚠️ Might be DAOwidget adapted for WP

### Server Infrastructure

**Current Server (95.217.227.164):**
- Role: habab.ru + onout.org landing pages
- Path: `/var/www/onout.org/` (static HTML only)
- Has: dao/, wallet/, farming/, dex/, launchpad/, nft/, lenda/, lottery/

**Reverse Proxy (62.109.14.209):**
- Role: Proxy for *.wpmix.net
- Has: simpledashboard.wpmix.net, simplesite.wpmix.net
- Missing: wallet/farm/nft.wpmix.net configs

**WordPress Server (167.235.145.60):**
- Status: ⚠️ SSH connection refused
- Likely hosts: wallet.wpmix.net, farm.wpmix.net, nft.wpmix.net
- All WordPress demos probably here

**Cloudflare:**
- wpmix.net → 104.21.79.232, 172.67.149.79
- onout.org → 188.114.96.3, 188.114.97.3

### Tech Stack Details

| Product | Framework | Key Dependencies |
|---------|-----------|------------------|
| Wallets | WordPress + React | LocalStorage, 0x Protocol, Transak |
| FarmFactory | WordPress | Astra theme, ERC20 staking contracts |
| DeFinance | WordPress | unifactory base, Uniswap clone |
| DAO Widget | React | Embeddable, Snapshot-like governance |
| IDOFactory | React | yarn build → /build |
| Lenda | React | Aave fork, IPFS deploy |
| NFTsy | WordPress | Rarible SDK, lazy minting |

### Additional Repositories

- **unifactory** - Base for DeFinance DEX
- **lotterybuild**, **StaticLotteryFactory** - Lottery variants  
- **nft-staking-app**, **nftstakedemo** - NFT staking demos
- **index** - DEX list database

### Packaging Process (From READMEs)

**React Apps (Launchpad, Lenda):**
```bash
yarn install
yarn build  # → /build directory
```

**WordPress Plugins (DeFinance):**
```bash
cd unifactory
nvm use 16
npm i --legacy-peer-deps
npm run build_clean  # → copy to vendor_source
```

**DAO Widget:**
```bash
npm run build  # → /build/static/js/main.js
# Embed via <script> tag
```

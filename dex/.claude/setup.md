# DeFinance DEX — Setup Guide

> AI-agent setup guide. Read this to deploy your own Uniswap-like DEX.

## What it does

Decentralized exchange (DEX) for any EVM chain — swap tokens, add liquidity, earn fees. Based on Uniswap V2 protocol. Available as WordPress plugin and standalone React app.

## What you need before starting

- [ ] Chain ID and RPC URL for your target network
- [ ] Factory contract address (deploy new or use existing Uniswap V2 factory)
- [ ] Router contract address
- [ ] List of tokens to support
- [ ] Your branding: logo, title, fee %

## Quick deploy — no npm install (recommended)

Fork the pre-built static repo — no compilation needed:

```
1. Fork https://github.com/appsource/dex on GitHub
2. Edit config.js directly in the GitHub web editor
3. Settings → Pages → Source: Deploy from branch (main)
4. Your DEX is live at https://{username}.github.io/dex/
```

Edit `config.js` in the repo root (GitHub web editor, no local setup):

```js
export const config = {
  chainId: 56,                              // your chain
  factoryAddress: "0xYOUR_FACTORY",        // Uniswap V2 factory
  routerAddress: "0xYOUR_ROUTER",          // Uniswap V2 router
  initCodeHash: "0x...",                   // factory init code hash
  appName: "MyDEX",
  logoUrl: "/images/logo.png",
  primaryColor: "#6366f1",
  feePercent: 0.3
}
```

## Developer deploy (with npm, for customization)

```bash
git clone https://github.com/noxonsu/unifactory
cd unifactory
nvm use 16
npm i --legacy-peer-deps
# Edit src/config/index.ts, then:
npm run build_clean
# Deploy /build to server or GitHub Pages
```

## WordPress Plugin (DeFinance)

1. Purchase: https://codecanyon.net/item/29099232
2. Upload ZIP → Activate
3. Configure in WP Admin → DeFinance Settings
4. Add shortcode: `[definance chain="56"]`

## Quick check

1. Open app, connect MetaMask
2. Select token pair (e.g. BNB → USDT)
3. Enter amount → check price impact
4. Approve + Swap
5. Verify transaction on block explorer

## Troubleshooting

**"No liquidity"** → Liquidity pool doesn't exist yet; add it first via Liquidity tab

**Wrong price** → `initCodeHash` mismatch; recalculate from factory bytecode

**Build fails** → Use `nvm use 16`; run `npm i --legacy-peer-deps`

## Source

- DEX base: https://github.com/noxonsu/unifactory
- WordPress plugin: https://github.com/noxonsu/definance
- White-label: https://github.com/appsource/dex
- CodeCanyon: https://codecanyon.net/item/29099232 (item 29099232)
- Demo: https://dex.onout.org/
- Landing: https://onout.org/dex/

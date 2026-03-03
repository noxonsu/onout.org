# DAO Factory / DAO Widget — Setup Guide

> AI-agent setup guide. Read this to configure and deploy the DAO governance product.

## What it does

Governance and proposals system for your token holders — like Snapshot but self-hosted. Users holding your ERC-20/BEP-20 token create proposals and vote on-chain.

Two versions:
- **DAO Widget JS** — standalone React app, GitHub Pages deploy
- **DAO Factory WP** — WordPress plugin with shortcode

## What you need before starting

- [ ] Your governance token address (ERC-20/BEP-20)
- [ ] Chain ID (56=BSC, 1=ETH)
- [ ] RPC URL for your chain
- [ ] Minimum token balance required to vote (e.g. 100)

## Configuration

### JS Widget — no npm install (recommended)

Fork pre-built repo, edit config in GitHub web editor — no local setup needed:

```
1. Fork https://github.com/appsource/dao
2. Open src/config.js → click pencil icon (Edit) in GitHub
3. Settings → Pages → Source: Deploy from branch (main)
4. Live at https://{username}.github.io/dao/
```

Edit `src/config.js` (in GitHub web editor or locally):

```js
export default {
  tokenAddress: "0xYOUR_TOKEN",      // your governance token
  chainId: 56,                        // 56=BSC, 1=ETH
  rpcUrl: "https://bsc-dataseed.binance.org",
  minVotingPower: 100,               // min tokens to create proposal
  title: "MyDAO",
  primaryColor: "#4f46e5"
}
```

### WordPress Plugin (DAO Factory)

Add shortcode to any page:
```html
[daofactory_app
  token="0xYOUR_TOKEN_ADDRESS"
  chain="56"
  rpc="https://bsc-dataseed.binance.org"
  template="light_template"
]
```

## WordPress Install

1. Purchase: https://codecanyon.net/item/35608699
2. WP Admin → Plugins → Upload Plugin → upload ZIP
3. Activate → add shortcode to page

## Quick check

1. Open the app, connect wallet with your token
2. Try creating a proposal
3. Vote from a second wallet with tokens

## Troubleshooting

**Votes not counting** → Check `tokenAddress` matches your deployed token

**Can't create proposal** → Wallet has fewer tokens than `minVotingPower`

**WP plugin not showing** → Check shortcode params, confirm chain ID

## Source

- JS Widget: https://github.com/noxonsu/DAOwidget
- White-label (pre-built): https://github.com/appsource/dao
- Demo: https://farm.wpmix.net/daofactory/
- Landing: https://onout.org/dao/

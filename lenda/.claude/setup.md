# Lenda — Setup Guide

> AI-agent setup guide. Read this to deploy a lending and borrowing platform.

## What it does

Aave-like lending/borrowing platform for EVM chains. Users deposit tokens to earn interest, or borrow against collateral. Self-hosted, white-label.

## What you need before starting

- [ ] Chain ID and RPC URL
- [ ] Lending pool contract address (deploy new or use testnet)
- [ ] Supported assets list (tokens for lending/borrowing)
- [ ] Liquidation parameters (LTV ratios, liquidation thresholds)

## Configuration

```bash
git clone https://github.com/noxonsu/Lenda
cd Lenda
yarn install
```

Edit `src/config.ts`:

```ts
export const config = {
  chainId: 1,                              // 1=ETH, 56=BSC
  rpc: "https://eth.llamarpc.com",
  lendingPoolAddress: "0xYOUR_POOL",      // deployed lending pool
  assets: [
    { symbol: "USDT", address: "0x...", ltv: 80 },
    { symbol: "ETH",  address: "0x...", ltv: 75 }
  ],
  appName: "MyLenda",
  primaryColor: "#06b6d4"
}
```

## Build and deploy

```bash
yarn build
# Upload /build to server or GitHub Pages
```

## Quick check

1. Open app, connect wallet
2. Deposit some USDT (supply)
3. Use USDT as collateral → borrow ETH
4. Check health factor > 1.0
5. Repay loan → withdraw collateral

## Troubleshooting

**Can't deposit** → Token not approved; click Approve first

**Borrow fails** → Insufficient collateral for requested amount

**Health factor drops below 1** → Position can be liquidated; repay or add collateral

## Source

- GitHub: https://github.com/noxonsu/Lenda
- Demo: https://borrowlend.onout.org/
- Landing: https://onout.org/lenda/

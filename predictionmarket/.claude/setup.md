# PredictionMarket — Setup Guide

> AI-agent setup guide. Read this to deploy your own Polymarket-like prediction market.

## What it does

CLOB (Central Limit Order Book) prediction market platform for any EVM chain. Binary YES/NO markets, limit orders, real-time price charts. Fully on-chain matching engine with 112 unit tests.

## What you need before starting

- [ ] Chain ID and RPC URL (BSC recommended for low fees)
- [ ] PolyFactory contracts deployed (or use existing on BSC)
- [ ] ERC-20 token for betting (USDT/USDC recommended)
- [ ] Admin wallet address (for creating/resolving markets)
- [ ] Your platform fee %

## Configuration

```bash
git clone https://github.com/marsiandeployer/PolyFactory
cd PolyFactory
npm install
```

Edit `src/config.ts`:

```ts
export const config = {
  chainId: 56,
  rpc: "https://bsc-dataseed.binance.org",
  factoryAddress: "0xYOUR_FACTORY",      // deployed PolyFactory
  collateralToken: "0xUSDT",             // USDT/USDC for betting
  adminWallet: "0xYOUR_ADMIN",           // can create and resolve markets
  feePercent: 1,                         // platform fee on winnings
  appName: "MyPredictions",
  logo: "/images/logo.png",
  primaryColor: "#8b5cf6"
}
```

## Deploy contracts

```bash
cd contracts
npm install
# Set your admin address and fee recipient in deploy script
npx hardhat deploy --network bsc
# Save: FactoryAddress, MarketAddress → use in config
```

## Build and deploy frontend

```bash
npm run build
# Upload /build to server or GitHub Pages
```

## Quick check

1. Open app (connect admin wallet)
2. Admin: Create a new YES/NO market (e.g. "Will BTC reach $100k by Dec 2025?")
3. Place a YES order (1 USDT)
4. From another wallet, place NO order at same price → orders match
5. Admin: Resolve market → winner claims payout

## Admin actions

The admin wallet can:
- Create new markets
- Resolve market outcomes (YES or NO)
- Pause/unpause markets
- Adjust platform fees

## Troubleshooting

**Orders not matching** → CLOB requires matching price from both sides

**Can't create market** → Not using admin wallet, or wrong contract address

**Claim fails** → Market not resolved yet; wait for admin to resolve

## Source

- GitHub: https://github.com/marsiandeployer/PolyFactory
- Buy: https://dash.onout.org/ ($899)
- Demo: https://predictionmarket.wpmix.net/
- Landing: https://onout.org/predictionmarket/

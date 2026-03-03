# IDOFactory — Setup Guide

> AI-agent setup guide. Read this to deploy your own crypto launchpad (IDO platform).

## What it does

Crypto launchpad for token sales (IDO pools). Project owners create fundraising pools, investors buy allocations. Includes token locker and vesting. Works on any EVM chain.

## What you need before starting

- [ ] Chain ID and RPC URL
- [ ] IDOFactory contract address (or deploy new)
- [ ] Your platform fee % and fee recipient address
- [ ] Accepted payment token address (e.g. USDT/USDC)

## Configuration

```bash
git clone https://github.com/noxonsu/launchpad
cd launchpad
yarn install
```

Edit `src/config/index.ts`:

```ts
export const config = {
  chainId: 56,
  rpc: "https://bsc-dataseed.binance.org",
  factoryAddress: "0xYOUR_FACTORY",      // deployed IDOFactory contract
  paymentToken: "0xUSDT_ADDRESS",        // USDT or your payment token
  feeRecipient: "0xYOUR_WALLET",        // where fees go
  feePercent: 2,                         // platform fee %
  appName: "MyLaunchpad",
  logo: "/images/logo.png",
  primaryColor: "#f59e0b"
}
```

## Build and deploy

```bash
yarn build   # builds to /build
# Upload /build to server or enable GitHub Pages
```

## Deploy IDOFactory contract

```bash
# From launchpad repo
cd contracts
npm install
npx hardhat deploy --network bsc
# Save deployed address → set in config as factoryAddress
```

## Quick check

1. Open launchpad, connect wallet
2. Create test IDO pool (small raise, short duration)
3. Invest from second wallet
4. Finalize pool and claim tokens

## Troubleshooting

**Pool creation fails** → Wallet doesn't have enough BNB/ETH for gas

**Can't invest** → Pool not started yet, or whitelist not set

**Tokens not claimable** → Pool not finalized by creator

## Source

- GitHub: https://github.com/noxonsu/launchpad
- White-label: https://github.com/appsource/launchpad
- CodeCanyon: https://codecanyon.net/item/39882380 (item 39882380)
- Demo: https://launchpad.onout.org/
- Landing: https://onout.org/launchpad/

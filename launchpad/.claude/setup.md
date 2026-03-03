# IDOFactory — Setup Guide

> AI-agent setup guide. Read this to deploy your own crypto launchpad (IDO platform).

## What it does

Crypto launchpad for token sales (IDO pools). Project owners create fundraising pools, investors buy allocations. Includes token locker and vesting. Works on any EVM chain.

## What you need before starting

- [ ] Chain ID and RPC URL
- [ ] IDOFactory contract address (or use testnet demo contracts)
- [ ] Accepted payment token address (e.g. USDT/USDC)
- [ ] Your platform fee % and fee recipient address

## Quick deploy — no npm install (recommended)

Fork the pre-built static repo:

```
1. Fork https://github.com/appsource/launchpad
2. Open src/config.ts → Edit in GitHub web editor
3. Settings → Pages → Source: Deploy from branch (main)
4. Live at https://{username}.github.io/launchpad/
```

Edit `src/config.ts` (GitHub web editor, no local setup):

```ts
export const config = {
  chainId: 56,
  rpc: "https://bsc-dataseed.binance.org",
  factoryAddress: "0xYOUR_FACTORY",    // deployed IDOFactory contract
  paymentToken: "0xUSDT_ADDRESS",      // USDT or your payment token
  feeRecipient: "0xYOUR_WALLET",       // where fees go
  feePercent: 2,                        // platform fee %
  appName: "MyLaunchpad",
  logo: "/images/logo.png",
  primaryColor: "#f59e0b"
}
```

## Developer deploy (with npm, for customization)

```bash
git clone https://github.com/noxonsu/launchpad
cd launchpad
yarn install
# Edit src/config.ts, then:
yarn build
# Deploy /build to server
```

## Deploy IDOFactory contract (optional)

```bash
cd contracts && npm install
npx hardhat deploy --network bsc
# Save deployed address → use as factoryAddress above
```

## Quick check

1. Open launchpad, connect wallet
2. Create test IDO pool (small raise, short duration)
3. Invest from second wallet
4. Finalize pool and claim tokens

## Troubleshooting

**Pool creation fails** → Not enough BNB/ETH for gas

**Can't invest** → Pool not started, or whitelist not set

**Tokens not claimable** → Pool not finalized by creator

## Source

- GitHub: https://github.com/noxonsu/launchpad
- White-label (pre-built): https://github.com/appsource/launchpad
- CodeCanyon: https://codecanyon.net/item/39882380 (item 39882380)
- Demo: https://launchpad.onout.org/
- Landing: https://onout.org/launchpad/

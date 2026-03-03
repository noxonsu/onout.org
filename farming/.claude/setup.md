# FarmFactory — Setup Guide

> AI-agent setup guide. Read this to deploy staking and yield farming for your token.

## What it does

Staking and yield farming platform for your ERC-20/BEP-20 token. Users stake tokens and earn rewards. Supports Ethereum, BSC, and Polygon. WordPress plugin.

## What you need before starting

- [ ] Your staking token contract address
- [ ] Your reward token contract address (can be same)
- [ ] Staking contract deployed (or use demo contracts to test)
- [ ] Chain ID (56=BSC, 1=ETH, 137=Polygon)
- [ ] WordPress 5.0+ site with Astra theme (recommended)

## Install

1. Purchase: https://codecanyon.net/item/29987071
2. WP Admin → Plugins → Upload Plugin → upload ZIP
3. Activate
4. Add shortcode to your staking page

## Shortcode

```html
[farmfactory
  staking_token="0xYOUR_STAKING_TOKEN"
  reward_token="0xYOUR_REWARD_TOKEN"
  contract="0xYOUR_STAKING_CONTRACT"
  chain="56"
]
```

## Key configuration

| Parameter | What to set | Example |
|-----------|------------|---------|
| `staking_token` | Token users will stake | `0xabc...` |
| `reward_token` | Token paid as reward | `0xdef...` |
| `contract` | Staking contract address | `0x123...` |
| `chain` | Network chain ID | `56` |
| `apy` | Annual % yield (display only) | `120` |

## Quick check

1. Open staking page
2. Connect MetaMask with staking tokens
3. Approve token → Stake amount → Confirm
4. Wait (or advance time in testnet) → Harvest rewards

## Deploy staking contract

> This requires a funded wallet and Hardhat/Truffle.

```bash
git clone https://github.com/noxonsu/farmfactory
cd farmfactory
npm install
# Edit contracts/StakingRewards.sol with your token addresses
npx hardhat deploy --network bsc
# Copy deployed address → use in shortcode
```

## Troubleshooting

**Approve button greyed out** → Wallet not connected or wrong network

**Stake fails** → Check contract address matches chain

**No rewards** → Reward pool may be empty — fund the staking contract

## Source

- GitHub: https://github.com/noxonsu/farmfactory
- CodeCanyon: https://codecanyon.net/item/29987071 (item 29987071)
- Demo: https://farm.wpmix.net/
- Landing: https://onout.org/farming/

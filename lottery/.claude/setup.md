# Crypto Lottery — Setup Guide

> AI-agent setup guide. Read this to deploy a cryptocurrency lottery.

## What it does

On-chain crypto lottery for EVM chains. Users buy tickets with ERC-20 tokens, smart contract picks winners randomly, prizes distributed automatically.

## What you need before starting

- [ ] Chain ID and RPC URL
- [ ] Lottery contract deployed (or use testnet)
- [ ] Ticket price and token address
- [ ] VRF (randomness) source — Chainlink VRF recommended
- [ ] Ticket sales period and prize distribution rules

## Configuration

```bash
git clone https://github.com/noxonsu/LotteryFactory
cd LotteryFactory
npm install
```

Edit `src/config.js`:

```js
export default {
  chainId: 56,
  rpc: "https://bsc-dataseed.binance.org",
  lotteryContract: "0xYOUR_LOTTERY",     // deployed lottery contract
  ticketToken: "0xUSDT",                 // token for buying tickets
  ticketPrice: "1",                      // price per ticket (in token units)
  appName: "MyLottery",
  primaryColor: "#f59e0b"
}
```

## White-label deploy (GitHub Pages)

```bash
# 1. Fork https://github.com/appsource/lottery
# 2. Edit src/config.js
# 3. Settings → Pages → Source: GitHub Actions
# 4. Push → auto-deploy
```

## Deploy lottery contract

```bash
cd contracts
npm install
# Edit deploy.js: set ticket token, VRF coordinator address
npx hardhat deploy --network bsc
# Save deployed address → use in config
```

## Quick check

1. Open lottery, connect wallet
2. Buy 1 ticket with your token
3. Wait for lottery draw (or test with admin end-draw)
4. Check if prizes distributed correctly

## Troubleshooting

**Can't buy tickets** → Approve token first; check lottery is in "active" state

**Draw not happening** → Chainlink VRF needs LINK tokens funded in contract

**Prize not received** → Manual claim may be required; check contract for `claim()` function

## Note on live demo

Current live demo at onout.org/lottery is linked to a YouTube tutorial video (no hosted demo available). Use the GitHub repo to self-host.

## Source

- GitHub: https://github.com/noxonsu/LotteryFactory
- White-label: https://github.com/appsource/lottery
- Video demo: https://www.youtube.com/watch?v=fU9RoMXWPjk
- Landing: https://onout.org/lottery/

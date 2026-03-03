# Crypto Lottery — Setup Guide

> AI-agent setup guide. Read this to deploy a cryptocurrency lottery.

## What it does

On-chain crypto lottery for EVM chains. Users buy tickets with ERC-20 tokens, smart contract picks winners randomly, prizes distributed automatically.

## What you need before starting

- [ ] Chain ID and RPC URL
- [ ] Lottery contract deployed (or use testnet demo)
- [ ] Ticket price and ERC-20 token address
- [ ] VRF (randomness) source — Chainlink VRF recommended

## Quick deploy — no npm install (recommended)

Fork the pre-built static repo:

```
1. Fork https://github.com/appsource/lottery
2. Open src/config.js → Edit in GitHub web editor
3. Settings → Pages → Source: Deploy from branch (main)
4. Live at https://{username}.github.io/lottery/
```

Edit `src/config.js` (GitHub web editor, no local setup):

```js
export default {
  chainId: 56,
  rpc: "https://bsc-dataseed.binance.org",
  lotteryContract: "0xYOUR_LOTTERY",   // deployed lottery contract
  ticketToken: "0xUSDT",               // token for buying tickets
  ticketPrice: "1",                    // price per ticket (in token units)
  appName: "MyLottery",
  primaryColor: "#f59e0b"
}
```

## Developer deploy (with npm)

```bash
git clone https://github.com/noxonsu/LotteryFactory
cd LotteryFactory
npm install
# Edit src/config.js, then:
npm run build
```

## Deploy lottery contract (optional)

```bash
cd contracts && npm install
# Edit deploy.js: set ticket token, VRF coordinator address
npx hardhat deploy --network bsc
```

## Quick check

1. Open lottery, connect wallet
2. Buy 1 ticket with your token
3. Wait for lottery draw (or trigger manually as admin)
4. Check if prizes distributed correctly

## Troubleshooting

**Can't buy tickets** → Approve token first; check lottery is in "active" state

**Draw not happening** → Chainlink VRF needs LINK tokens funded in contract

**Prize not received** → Manual claim may be required; call `claim()` function

## Note on live demo

Current live demo at onout.org/lottery links to a YouTube tutorial video (no hosted demo). Use GitHub repo to self-host.

## Source

- GitHub: https://github.com/noxonsu/LotteryFactory
- White-label (pre-built): https://github.com/appsource/lottery
- Video demo: https://www.youtube.com/watch?v=fU9RoMXWPjk
- Landing: https://onout.org/lottery/

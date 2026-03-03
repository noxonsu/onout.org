# {Product Name} — Setup Guide

> AI-agent setup guide. Read this to configure and deploy the product for your use case.

## What it does

{1–2 sentences. What does this product do and for whom.}

## What you need before starting

- [ ] Your smart contract address (or use defaults from the demo)
- [ ] Chain ID (e.g. 56 for BSC, 1 for Ethereum)
- [ ] Your branding: logo URL, primary color, project title
- [ ] GitHub account (for GitHub Pages deploy)

## Configuration

All settings are in `src/config.js` (or `.env`):

```js
// src/config.js
export default {
  contractAddress: "0xYOUR_CONTRACT",  // ← your deployed contract
  chainId: 56,                          // ← 56=BSC, 1=ETH, 137=Polygon
  title: "My App",                      // ← shown in browser tab
  logo: "/images/logo.png",            // ← your logo
  primaryColor: "#6366f1",             // ← brand color
  feePercent: 0.3,                     // ← your platform fee (%)
  supportEmail: "you@example.com"
}
```

## Deploy to GitHub Pages (5 min)

```bash
# 1. Fork the repo on GitHub
# 2. Edit src/config.js with your settings
# 3. In repo Settings → Pages → Source: GitHub Actions
# 4. Push any change → build starts automatically
# 5. Your app is live at https://{your-username}.github.io/{repo}/
```

## Quick check after deploy

1. Open your URL
2. Connect MetaMask / wallet
3. Run through the main user flow
4. Check that your contract address is correct in the UI

## Troubleshooting

**Build fails** → Check Node version (`nvm use 16`)

**Wrong network** → Confirm `chainId` in config matches your wallet

**Contract not responding** → Verify address and ABI match your deployed version

## Source

- GitHub: `https://github.com/{org}/{repo}`
- Demo: `https://{product}.onout.org`
- Docs: `https://onout.org/{product}/`

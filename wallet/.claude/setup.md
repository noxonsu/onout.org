# Multi Currency Wallet — Setup Guide

> AI-agent setup guide. Read this to install and configure the crypto wallet on your WordPress site.

## What it does

Multi-currency crypto wallet and exchange widget for WordPress. Users can send, receive and swap BTC, ETH, ERC-20 tokens directly on your site. Non-custodial — users hold their own keys.

## What you need before starting

- [ ] WordPress 5.0+ site
- [ ] Plugin ZIP from CodeCanyon (item 23532064)
- [ ] List of currencies to support (BTC, ETH, USDT, etc.)
- [ ] Optional: Transak API key (for fiat on-ramp)
- [ ] Optional: 0x API key (for exchange feature)

## Install

1. WP Admin → Plugins → Add New → Upload Plugin
2. Upload the ZIP file → Install → Activate
3. Go to Settings → Multi Currency Wallet
4. Set supported currencies and options
5. Add shortcode to any page

## Shortcode

```html
<!-- Basic wallet -->
[multi-currency-wallet]

<!-- With options -->
[multi-currency-wallet
  currencies="BTC,ETH,USDT,BNB"
  theme="dark"
  exchange="true"
]
```

## Settings (WP Admin)

| Setting | What to set |
|---------|------------|
| Currencies | Comma-separated: `BTC,ETH,USDT` |
| Exchange | Enable/disable swap feature |
| Transak Key | Paste your Transak API key for fiat buy |
| Default theme | `light` or `dark` |

## Supported networks

- Ethereum (ETH + all ERC-20)
- BSC / BNB Chain (BEP-20)
- Polygon (MATIC + tokens)
- Bitcoin (native BTC)

## Quick check

1. Open the page with shortcode
2. Create a new wallet or import with seed phrase
3. Check that your currencies appear
4. Test send to an address (small amount)

## Troubleshooting

**Shortcode shows blank** → Plugin not activated, or PHP < 7.4

**Exchange not working** → 0x Protocol liquidity issue; try different token pair

**Fiat buy button missing** → Set Transak API key in plugin settings

## Source

- Based on: https://github.com/swaponline/MultiCurrencyWallet
- CodeCanyon: https://codecanyon.net/item/23532064 (item 23532064)
- Demo: https://wallet.wpmix.net/
- Landing: https://onout.org/wallet/

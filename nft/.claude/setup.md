# NFTsy — Setup Guide

> AI-agent setup guide. Read this to deploy an NFT marketplace on your WordPress site.

## What it does

NFT marketplace WordPress plugin with lazy minting (Rarible SDK). Users can create, buy, and sell NFTs without paying upfront gas — fees collected at sale time.

## What you need before starting

- [ ] WordPress 5.0+ site
- [ ] Plugin ZIP from CodeCanyon
- [ ] Your marketplace fee % and wallet address
- [ ] Target chain: Ethereum or Polygon (Rarible SDK supported chains)
- [ ] Optional: custom NFT collection contract address

## Install

1. Purchase: https://codecanyon.net/item/NFTsy (or contact support@onout.org)
2. WP Admin → Plugins → Upload Plugin → upload ZIP
3. Activate
4. Go to Settings → NFTsy
5. Set fee %, fee recipient wallet, chain

## Settings

| Setting | What to set |
|---------|------------|
| Chain | `ethereum` or `polygon` |
| Marketplace fee % | Your cut from each sale (e.g. `2.5`) |
| Fee recipient | Your wallet address |
| Collection contract | Leave blank for lazy minting default |

## Shortcode

```html
<!-- Full marketplace page -->
[nftsy_marketplace]

<!-- Single item view -->
[nftsy_item id="TOKEN_ID"]
```

## Quick check

1. Open marketplace page
2. Connect MetaMask (Ethereum or Polygon)
3. Click "Create NFT" → upload image → set price → List
4. Switch to another wallet → Buy the NFT
5. Check royalties/fees went to correct wallets

## Troubleshooting

**Minting fails** → Wrong chain in MetaMask; switch to configured chain

**Images not loading** → IPFS gateway issue; try refreshing after 1–2 min

**Sale not processing** → Rarible SDK may be down; check status.rarible.com

## Source

- GitHub: https://github.com/noxonsu/NFTsy
- Demo: https://nft.wpmix.net/
- Landing: https://onout.org/nft/

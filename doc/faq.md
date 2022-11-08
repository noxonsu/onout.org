# Frequently asked questions

## What repositories can I work with?

Only fork projects under [open source licenses](https://opensource.org/licenses/category) that allow **copying**, such as **MIT**, **GPL**.

## What do I look for in documentation?

- Primary functions the product delivers to the end-user.
- Means of income generation for the project administrator.
- Whether it is possible for the frontend to work with blockchain directly.
- Arguments in favor of the project.
- A link to the primary repository (frontend).
- Links to any possible secondary repositories (smart contracts, utilities, helpers).

## How do I locate the primary repository?

A link to the primary repository is usually included in the project main page footer. It can also be found in project documentation.<br/>
**Important**: [Repositories to work with](#what-repositories-can-i-work-with)

## How do I locate secondary repositories?

Secondary repositories are usually mentioned in project documentation. They can also be found as dependencies in **packages.json** file of the primary repository.<br/>
**Important**: [Repositories to work with](#what-repositories-can-i-work-with)

## How do I come up with a product name?

Try to reflect the main function the product delivers to the end users... or use this [name generator](https://namelix.com).

## How do I fork a repository?

- Go to repository page on Github and click **Fork**.
- Open **Settings** of the forked repository and make sure **Issues** are enabled.
- For frontend repositories add **redirect** following [this example](https://github.com/noxonsu/unifactory/pull/85/files#diff-c2cc24bc9001b11b6add48a4cd8f893d5d6c6e4d1bd254158bd14ab997f552cdR13).
- Connect **Cloudflare pages** for auto-deploy.

## How do I build, deploy and set up smart contracts?

### Build

See `README.md` of the smart contract repository for build instructions.

### Deployment

There are two ways to deploy a project:

- following the instructions of the smart contract repository `README.md`
- manually

### Manual deployment

In order to deploy a project manually:

- Compile smart contracts using **Remix**, **Truffle**, or **Hardhat**.
- Acquire **ABI** and **bytecode** for the smart contract in JSON format.
- If smart contract constructor requires any arguments, acquire them as well.
- Send a transaction through one of these providers:
  - [Deploy through **Web3js**](https://web3js.readthedocs.io/en/v1.7.3/web3-eth-contract.html#deploy)
  - [Deploy through **Ethers**](https://docs.ethers.io/v5/api/contract/contract-factory/)

Here's an example of deployment through **Web3js**:

- [Primary method of deployment](https://github.com/noxonsu/unifactory/blob/bb85d3c974948213a4f0e383f1dfbefd5f8bfd2a/src/utils/contract.ts#L18)
- Uniswap fork: [factory deployment](https://github.com/noxonsu/unifactory/blob/bb85d3c974948213a4f0e383f1dfbefd5f8bfd2a/src/utils/contract.ts#L51)
- Anyswap fork: [token deployment](https://github.com/noxonsu/anyswap-crosschain/blob/ad18ce3925b5e69fbaed04caba646df48da21424/src/utils/contract.ts#L78)

### Setup

Smart contract setup is unique for each contract. See smart contract documentation for setup details.

Smart contract setup examples:
- [aave v2 (soon)](#)  

## Where do I get a logo to replace the original one?

Use our generic [logo](https://github.com/noxonsu/Lenda/blob/main/public/aaveLogo.png).

## How do I record a pre-release video?

See our instructions on [recording a video](#how-do-i-record-a-video).

The pre-release **goal** is to demonstrate the capability of a fork on example of user interaction with the product.<br/>
The **objective** is to record a video highlighting product functionality.<br/>
Follow this pattern to **name your video**: `{ project name } user interface. What user can do.`

Feel free to check out our [pre-release video example](https://www.youtube.com/watch?v=rqA7NEvgV5Q).

[Publish the video](#how-do-i-upload-a-video-to-youtube) on team channel.

## How do I provide technical support?

- Use more emojis 😍
- Be responsive 😇
- Do not make promises on exact dates 🤔
- Never promise to integrate features without doing your research first (are they at all possible?) 🐤
- Use even more emojis 😱
- Ask for your client's opinion 🙌

### Sample answers

**Q:** When will this feature be available? Will it be available for BSC? Is it standalone or wp plugin?<br/>
**A:** I guess 😅 the testnet version will be available in a few days 🧑‍🔧. I am not sure about BSC support now, but it may be available in the future if we find a sponsor 😇. It will be standalone until then 🙌

**Q:** Nice is it ready?<br/>
**A:** It's not ready yet 😅, but I will keep u updated 🙌

**Q:** Hello dev. This product will function just like aave with a governance token all smart contracts owned by the platform?<br/>
**A:** It's not quite right 😇, it will function like aave protocol only without a governance token.

### Survey

**A:** Any information about your preferred way of earning 🤑 can help me make more useful project settings 🧑‍🔧

### Pre-release announcement

**A:** Hello! We're excited to announce that we have completed 50% of development progress on { forked project name } fork. Check out our videos on user interaction { link } and admin interaction { link }. This product is available for presale on dash.onout.org. Presale price is $666. Estimated release date is in around 1 month. Cheers!

### Release announcement

**A:** Hello! 🤩 We got it! 🥳 The final version of { project name } is now available! 🔥 Check it out in our catalog 🛒 - https://tools.onout.org/{ project name }!

## Admin panel integration

See our guide to [Blockchain storage](./storage.md#blockchain-storage) for instructions on creating an admin panel and managing the data stored on blockchain.

## How do I add a project to presale?

0. Use [name generator](https://namelix.com) to generate a logo
0. Create a cover image sized **744 х 460 px**
0. Add a new object to associative array `PRODUCTS` ([here]([here](https://github.com/noxonsu/dash.onout.org/blob/0b4a964ac91ae7d19670cbe6953dbb796e3b666a/src/constants/index.ts#L171))) with **product id** for a `key`. 
0. Add your product to presale section on dash.onout.org, set product `status` to `development` (or `ready` if the product is finished).
0. Append a string `new` to array `labels` to display **“NEW”** badge for this product.

## How do I make a landing page for the release?

Make a pull request [example](https://github.com/noxonsu/tools.onout.org/pull/56):

0. Use the existing [landing page](https://github.com/noxonsu/tools.onout.org/tree/main/lenda).
0. Check out our notes on [SEO optimization](#how-do-i-optimize-landing-page-seo).
0. Make sure all the data is up-to-date.

## How do I optimize landing page SEO?

Make sure the `head` element contains the following:

0. Keywords: `<meta name="keywords" content="...">`. Add main keywords associated with your product. Common keywords include `web3, no-code, white label, clone, fork, copy, tool, evm`. The right keywords make creating a good product description easier and simplify making page content.
0. Title: `<title>Project name - build your own * like * <title/>`. The `<title>` tag should include product name and brief description of its functions.
0. Description: `<meta name="description" content="...">`. Description should contain a detailed description of the product functionality and the administrator options. Don't forget to mention that the app is a fork of a certain project. Make the description brief enough to fit a search result.
0. Include Site favicon for use by browsers and certain search engines.

The `body` element must contain `h1` and `h2` headers, each `img` element must have an `alt` attribute with a fitting text description.

## How do I add a product to the catalog?

0. Use a pre-made [example](https://github.com/noxonsu/tools.onout.org/pull/56/commits/5c79f3ca5f35a1bfd3158e2865714467b3b1c505).
0. Use presale cover.
0. Details should containt a link to [release landing page](#how-do-i-make-a-landing-page-for-the-release).
0. Preview should containt a link to project demo.

## How do I add a product to the Codecanyon?

0. Use as [example product](https://codecanyon.net/item/farmfactory-ethereum-assets-staking-yield-farming/29987071);
0. Prepare and provide us following items:
0. Name & Description;
0. Thumbnail (JPEG or PNG 80x80px);
0. Inline Preview Image (590x300 JPEG);
0. Main File(s) (ZIP - All files for buyers, not including preview images) - provide project sources and build in a zip file;
0. Preview Screenshots (ZIP file of images (png/jpg) w/ optional text descriptions for display on the site);
0. Demo URL (Link to a live preview on your own hosting (i.e. https://my-site.com/demo/));
0. Tags (Maximum of 15 keywords covering features, options and styling. Keywords should all be in lowercase and separated by commas. e.g. slider, gallery, newsletter, wordpress menu);

## How do I record a release video?

See our instructions on [recording a video](#how-do-i-record-a-video).

The release **goal** is to demonstrate the capability of admin interface on example of admin interaction with the product.<br/>
The **objective** is to record a video highlighting admin functionality and forms of income generation.<br/>
Follow this pattern to **name your video**: `How to create a DEX on your own domain without coding skills. { project name } fork (copy) tutorial.`

Feel free to check out our [release video example](https://www.youtube.com/watch?v=NBhfaBb3EKE&feature=youtu.be).

[Publish the video](#how-do-i-upload-a-video-to-youtube) on team channel.

---

## How do I record a video?

Video can be recorded with basic screen capture software of your choice.<br/>
**Important**: Make sure there are no **watermarks** on your video.

**It is crucial to vocally describe every action seen in the video.**
Videos must be voiced in **English**.<br/>
Use **your own voice** if you are fluent in English, or apply an online [speech synthesizer](#how-do-i-use-voicemaker-speech-synthesizer).<br/>
Make sure to run [grammar check](https://languagetool.org) on your script before recording.<br/>
**Important**: Avoid filler words and long pauses.

We recommend [Shortcut](https://shotcut.org/download/) for video editing.

Use the following video quality settings: **1080p, 30fps**

## How do I use Voicemaker speech synthesizer?

[Voicemaker](https://voicemaker.in) is a service that provides realistic synthesized speech.

Use the following settings:

0. AI Engine -> Neural TTS
0. Voices -> Matthew (or any other voice of your choice)
0. Voice Settings -> Voice Speed -> -5%

In order to get the most from the service for free:

0. Exhaust **no registration** limit (est. 20 downloads)
0. Register and exhaust **free subscription** limit (est. 100 downloads)
0. Turn on VPN and start over (might not work without registration).

**Important**: Use commas to insert pauses and separate phrases.  

## How do I upload a video to Youtube?

Videos must be uploaded to the team's [youtube channel](https://www.youtube.com/channel/UCEu5-QDPFCxKm9z4BAYQSJw). 

0. You need a **gmail** account with **channel admin** rights. Contact the team to gain access.
0. Create a new **project playlist** if there isn't one.
0. Add the following **video description**:

```
https://{ link to the project in pre-sale (dash.onout.org) or catalog (tools.onout.org) }  - Get started!
https://{ link to project demo } - Try live demo right now!

{timecodes}

We are a blockchain developers team.
We build no-code tools for creating DEX, DAO, Wallet, Farming, Lottery and NFT marketplace at your own domain. 
View catalog https://tools.onout.org

Ask questions!
support@onout.org - Email 
https://t.me/onoutsupportbot - Telegram Bot Chat
https://support.onout.org/hc/1331700057 - Knowledge Base

Join the community! 
https://discord.gg/VwKEmHEgVN  - Join Discord
https://dash.onout.org/ - Join mailing list
https://twitter.com/onout_org - Follow us on Twitter
```
Replace {timecodes} with timecodes of the following form: 
```
0:25 connect wallet and switch to correct network
0:30 and attach new domain
```

Act like a professional support agent in the IT area. I need a concise and understandable answer that solves the user's question or problem. You will analyze a request, diagnose and summarize the main issues or questions, find the solution among the CSV data provided and answer. If you can't find it there, then make an answer based on your understanding. Please do not make very long answers or answers that are too general, in which case ask clarifying questions. Input the final result in a plain text.

Your answer should be structured and informative containing information that only answers the question or problem. Respond without additional text or introductions. If you don't understand a problem, product, or user question, ask clarifying questions before the main analysis and response.

In front of you is a database of frequently asked product questions. Use it as your primary source of answers:

START DATABASE (csv)

Name of Product,Question,Answer

crosschain,Also any eta on the bridge you have coming? How will that work will it be able to bridge things like a token we make for the bridge?,We have forked https://app.multichain.org/ - you can check their docs to understand how the bridge works https://docs.multichain.org/ 
crosschain,Where i can download wordpress version?,We have only a static version and had not any plans to implement it with wp plugin version. 
crosschain,Also when i can expect answer regarding lottery?,Which network did you use? 
crosschain,also in regards to the multichain.xyz fork you guys offer am I able to add more than just my own tokens? like other projects tokens?,"Yes, you can add any erc20-like tokens to the cross-chain app. "
crosschain,How do I create a cross-chain bridge for another token like two different tokens?,Just use the same Token Group id to bridge tokens with different symbols. If you have any 
crosschain,Like do we need to run our own node for the bridge and such other costs?,"For the crosschain app firstly you need to add your network there, then deploy the front-end app and set up it with the crosschain-bridge backend (it is Amazon Machine Images - AMI). "
crosschain,How cross chain dapp work?,"It is the Multichain app fork, you can check how it works by following this link - https://docs.multichain.org/getting-started/how-it-works/cross-chain-router "
crosschain,How many chains it’s supported ?,"There are about 20+ supported EVM-like chains, but we can add any other EVM-like chain that you want, you can check the re"
crosschain,Once I will pay I will receive the source code ?,"You will receive the react app static build that you need to deploy on your domain and then set up, but if you want the source code, we can provide it by re"
crosschain,Does the source code in wp theme ?,"No, it is the react app static build. "
crosschain,How do traders access the bridge to process their transactions?,You need to deploy crosschain token using exists ERC20 token address and save it to the BSC network store (we use this store for each of our projects) for your users or you can add li
crosschain,is have you a solution for a swap for a custom network using its own native token that is not bep20 or erc20?,"Sure, it is the Crosschain app - https://onout.org/crosschain/ "
dao,When you said that ERC-20 users can vote without paying gas fees did they need to switch networks in their metamask from ETH mainnet to BSC or polygon (Like in your demo) or it will work with the original ETH mainnet? ,"For voting, users should use the token network. "
dao,Also I saw that you are using your domain onout.eth what if I want to use my own eth domain ?,"Yes, you can use your own domain, check the additional data-ens property in this article . "
dao,Will I need to setup as you did “ https://snapshothub.onout.org/graphql ” ? ,"No, you will also use this api. "
dao, Will you provide help and guide to do it? ,You can check our knowledge base or write us here 
dao, Also can I create my own space in snapshot and use it instead of yours?,If you set the additional data-ens property you will be using your own space... 
dao,finally can I use my own Alchemy api key and app.ankr.com ? ,"At this moment no, 'cause it is static data, but if you have some dev skills you can change it in source code and build app again. "
dao,At the end I would like to be 100% independent and not use your space and API.,"We also want to be independent of snapshot API, but at the moment it is impossible, 'cause we should have a lot of servers and resources to support it. "
dao,Can you help with this issue? ,"It is not an issue, there is a 1-hour delay between the creation and start proposal. "
dao," Furthermore, I need to implement a Veto right for admin. ","You can use admin features only if you owner of the space or your address is added as an admin to the space. Unfortunately, we can't add our clients to our space as admins... But if you want admin rights, you should use your own space. There is a launching DAO guides articles in our knowledge base, you need to change ens_space on your own - https://support.onout.org/hc/1331700057/category/4  "
dao,Would you be so kind as for to send me further documentation on the javascript code so I can implement changes?,"Where did you buy it? Please, provide the license code or transaction hash of purchases. "
dao, Also we would be happy if you could provide a customer website that uses the Voting DAO in production so we can see how they set it up.,We can't provide our clients' personal data... 
dao,It seems we just keep hitting the wall of death when trying to connect to wallet on mobile . . . Is it mobile compatible or does it only work with browser plugin wallets? ,"It should work with mobile wallets, we will check and fix it... "
dao,Is it possible to put a MAX vote balance so whales can’t veto everything?,"We don't control the blockchain and the vote server, we only can disable the possibility of voting to your whales... "
dao,If I put that the votes can be done from 1 token in the wallet the person who has 1 billion token will have more impact on the vote than the person who has only one?,"Yes, sure. "
dao,"on your DAO plugin I do not understand why the proposals remain all in pending, can you tell me quickly how to fix it?",There is a delay of 1 hour between creating a proposal and voting starting with the proposal. 
dao,Did you have a chance to test our viton DAO for responsiveness?,"Sorry, all our devs are busy and we can't check it "
dex,"I want to install the software for a decentralized exchange on my website and have the option that my clients can farm or stake with my own token, is this possible with you right?","You can use our DEX product that provides a swap function and you or your users can create LP and earn with it. With our Farming product, you can create a farm smart contract with your token and provide to your users a way to staked your tokens and get a reward as your tokens or as any other ERC20/BEP20 tokens (depending on a network). "
dex,does your DEX have the same features as panckswap?,This plugin has only swap and Liquidity
dex,can i charge % per transaction?,"Yes, with this plugin you create a new dex with new Liquidity"
dex,Our fee will be higher than uniswap or pancake?,"It depends on your needs, if you want you can set 0 fees for each swap... "
dex,Why? It's useless like so,Because you are first our client who uses this browser... 
dex,"Okay..i created pair, added Liquidity but the pool.and also the trades arent showing anywhere. This was the swap. Poo does not show, no price movement.","Do you need more info about your dex? Like this https://v2.info.uniswap.org/home ? If so, we do not have and do not provide these Analytics tools... "
dex,Also the fee recipient disappears every time.,Did you save this setting to the blockchain store? 
dex,They say the router should be what uniswap v2 using,"Yes, we use Uniswap v2 contracts for DEX plugin "
dex,So what we can do in this case? It's not really usefull like a uniswap or Pancakeswap clone because nobody see the trades,As I answered we do not have and do not provide https://v2.info.uniswap.org/home Analytics tools. In our FA
dex,The cross chain dapp. Do i have to add liqudity also to every single pair or it using source?,"Yes, you or your community need to add li"
dex,do I need to add liquidity?,yes 
dex,why does walletconnect not work?,Can you provide more details? Which wallet did you use for testing? 
dex,How do I make my coin to be the first on the list?,You need to create your own tokens list in the admin panel of dex and add there your token/coin. 
dex,can my currency be listed without needing the user to add the list?,"Yes, if you create your own tokens list in the dex admin panel. "
dex,the tokens do not come automatically? Do I have to go putting 1x1?,"Don't get it, please clarify your "
dex,also is there a way you can help me set up the DEX for the WordPress plugin to allow for all of the different chains offered?,"Yes, we can send you a modified plugin with this functionality. - 100 USD "
dex,"Also can we have Celo, Optimism, Arbitrum, and Metis added to the DEX? How much would that cost","We can get you a discount and add these 4 Networks for 600 USD, but also we need some amount of native coins to deploy the re"
dex,"I want to install the software for a decentralized exchange on my website and have the option that my clients can farm or stake with my own token, is this possible with you right?","You can use our DEX product that provides a swap function and you or your users can create LP and earn with it. With our Farming product, you can create a farm smart contract with your token and provide to your users a way to staked your tokens and get a reward as your tokens or as any other ERC20/BEP20 tokens (depending on a network). "
dex,does your DEX have the same features as panckswap?,This plugin has only swap and Liquidity
dex,can i charge % per transaction?,"Yes, with this plugin you create a new dex with new Liquidity"
dex,Our fee will be higher than uniswap or pancake?,"It depends on your needs, if you want you can set 0 fees for each transaction... "
dex,Why? It's useless like so,Because you are first our client who uses this browser... 
dex,"Okay..i created pair, added Liquidity but the pool.and also the trades arent showing anywhere. This was the swap. Poo does not show, no price movement.","Do you need more info about your dex? Like this https://v2.info.uniswap.org/home ? If so, we do not have and do not provide these Analytics tools... "
dex,Also the fee recipient disappears every time.,Did you save this setting to the blockchain store? 
dex,"I want to install the software for a decentralized exchange on my website and have the option that my clients can farm or stake with my own token, is this possible with you right?","You can use our DEX product that provides a swap function and you or your users can create LP and earn with it. With our Farming product, you can create a farm smart contract with your token and provide to your users a way to staked your tokens and get a reward as your tokens or as any other ERC20/BEP20 tokens (depending on a network). "
dex,"I have set the token lists to https://tokens.pancakeswap.finance/coingecko.json and confirmed the txn, but the token list is not loading whenever i open my website.",Did you read our knowledge base articles? - https://support.onout.org/hc/1331700057/23/howtoaddtokens?category_id=2 
dex,Can i know how to change the router contract to our custom address?,"If it Uniswap Router v2 contract, then yes, you need to set it in the manage panel and save it to the network storage. "
dex,Can you tell us how to use the migration option in the dex? ,"If you have successfully set up the domain, you can follow the Migration section in the manage panel on this domain and use a new domain to migrate all settings there. "
dex,The wallet link comes first on the Home Screen. Is it possible to start directly with the swap page?,"As far as I know, this is not possible at the moment... But I think we can implement this feature. "
dex,You say that you are applying Proxy in contracts. It looks like this can cause a lot of contract exploits. What are you authorized to change?,"Don't get it fully, please clarify your "
dex,Is the product we will buy licensed for only one site? Can we install it on other sites?,"Yes, you can use one license on other sites at the moment. "
dex,"We are a technology company and we would like to make a sales partnership regarding this product, is it possible?","I think it is possible, I can connect you with our founder to you can discuss this... 
 "
dex,"can I get a dex that supports BSC, ERC20 AND OTHER NETWORK?","Sure, you can create your own uniswap-like dex on any supported network with this app. Also, we can add any EVM-like network you want - https://support.onout.org/hc/1331700057/32/addnewnetwork?category_id=8 "
dex,Can I also add auto slippage function just like poocoin?,"We need to check it, maybe there is possible to make it with uniswap v2 contracts... "
dex,Is that AMM available in v2?,"Yes, you or any of your users can create any li"
dex,"Is this dex , shall we create the poygon and other networks also?",You can use only polygon network. 
dex,Our token is Erc20 polygon mainnet. What we do?,The dex is support polygon network and its erc20-like tokens 
dex,We can create a liquidity pool too. But only thing is we need to pull the real-time price from uniswap V3. Can your team help us in this?,"Not sure about that, I don't know any WebSocket services to get real-time prices from uniswap contracts... "
dex,We need to swap our own tokens only.,"Yes, you can set your tokens list with multiple pairs and it will show to your users. "
dex,can you help me with the api endpoint for swap?,"Yes, I think we can help you with it. "
dex,Can 3rd party applications like Sanity.io or Moralis be integrated into DEX,"No, we don't provide a custom development of our products, we can add features that are re"
dex,Can user transactions be confirmed and stored using a 3rd party?,"No at the moment, but we are working on subgraph implementation that could provide our clients the Graph"
dex,So just another question. If we decided to use the contracts we have deployed at a later date on our own DEX would you still get your percentage?,"Idk it at the moment, I will ask our team about it. "
dex,Confirm this If i don't set fees all fees go to Liquidity providers?,"Yes. You can set the total fee in the manage panel, it is charged at each swap and accumulates in the li"
dex,If yes then how do you get a revenue share?,"I need more time to understand it, I will ask team and will back with answer. "
dex,If yes then how do you get a revenue share?,"If the admin not earning, it is normal that we also don't earn. "
dex,they mentioned Bridge contract and relayers,You can check how the Crosschain work in this docs - https://docs.multichain.org/getting-started/how-it-works/cross-chain-router 
dex,Is it possible to Integrate Edgeware to this. Including DEX.,"Sure, we can add your dex contracts as the dex source in the swap section. "
dex,Do you know any template or a service provider to support such initiatives? ,"No, and we have only decentralized solutions... "
dex,D o you have a DEX solution for a new EVM-based chain?,"Yes, but the adding evm-like chain is the service with an additional fee. You can check the prices in this article - https://support.onout.org/hc/1331700057/32/addnewnetwork?category_id=8 "
dex,H ow much would be the cost for a simple DEX (just swap and liquidity features)?,The app cost is 899 USD and adding your evm-like chain is 200 USD. Total: ~1100 USD. 
dex,Does your platform support backend and analytics of swaps similar to https://pancakeswap.finance/info ,"We can set the graph node (https://thegraph.com/docs/en/about/), start a subgraph with the graph"
dex,Does your DEX support graph nodes similar to UniSwap?,"Yes, it is a full clone of the Uniswap v2. "
dex,would it make sense to use the DEX as well as its connected nodes and APIs for getting listed on CoinGecko and CoinMarketCap?,"Yes, for instance you can check the CMC document - C2: Subgraph Sample - https://docs.google.com/document/d/1S4urpzUnO2t7DmS_1dc4EL4tgnnbTObPYXvDeBnukCg/edit#bookmark=kix.5p33g7oj0og8 "
dex,how should we connect the chain,We can add the Cryto chain for 200 USD if it an EVM-like network. 
dex,how to receive the full DEX for automated market making and liquidity offerings?,"With this possibility ( https://onout.org/dex > click get free version ) you will get all feature of uniswap v2 dex, but as I said before, if you need the info app, we can provide it for an additional fee. "
dex,How much would be the total cost to deploy the platform on Cryto chain?,"200 USD for adding an EVM-like chain and when you will set it we can start to set the graph node, starting re"
dex,We previously deployed a DEX connected to Cryto : https://defi.cryto.exchange but it doesn't supply nodes and analytical tools. Can you provide it? It's currently supporting both swap and liquidity features as the main points of view. ,We need to check your contracts' code and if it is a uniswapv2-like we can provide it. 
dex,"And furthermore, it would be great if we can pay the retainers in Cryto native asset: https://nomics.com/assets/cryto3-cryto","No, we accept only ETH, BNB, USDT, BUSD, and USDC. "
dex,Can we assign (add) the Cryto DEX APIs using this link? https://www.crytoscan.com/graphiql ,"No, there are no re"
dex,can the Pancakeswap router be added? So it tracks the allready existing pairs correct?,"No, there are only internal li"
dex,Is there a mode where is wallet connect not necessary before accessing the app?,If you use a desktop browser with installed Metamask it should show the Metamask connection. 
dex,Is it work as a static page and possible to fully publish to GitHub or VPS is required?,"Sure, after purchase you can download a static build of the react app on dash https://dash.onout.org/ "
dex,Is an admin panel allows connect contracts already deployed ? (to setup everything on local host and then publish) ,"It is not possible at the moment, but we can add the feature of the migration settings to another domain if you need. You can check docs about the crosschain app on our: knowledge base - https://support.onout.org/hc/1331700057/category/7 youtube playlist - https://www.youtube.com/playlist?list=PLLtijyRvdwnY"
dex,can you even copy liquidity contracts from uniswap?,"No, with the DEX app you need to create your own uniswap-like contracts in the admin panel, check articles on our knowledge base - https://support.onout.org/hc/1331700057/31/swapcontracts?category_id=2 "
dex,i have a token list but even when saved none show in the drop down and its a json file with a list of all contract addresses?,Did you check this article? https://support.onout.org/hc/1331700057/23/howtoaddtokens?category_id=2 
dex,how you take your % ? Is it sent to you automatically ? Like do you have a control over the code remotely ?,"We will set % manually by dex smart contracts, our dev address has access only to set dev % in each DEXes contracts "
dex,Is payment transferred monthly?,Admin and dev fees can be received only when users add/remove li
dex,What is the best price you can give the paid version for?,"We can't give a discount because the current price is normal to cover the costs of the support, improvements, and implementation of the new features and new products. Why do you need the paid version? "
dex,Can I add a new block chain ( network ) not listed in pre-installed networks?,"You can't add a custom network to the free version manually, only in the paid version or we can add it by ourselves for an additional fee. "
dex,Can I also pay off if I have money in the future?,Why? You will get the free dex to start and when you will start earning above 1000 USD/month we will set the dev fee. 
dex,And have full access to my dex?,"Yes, you will be the owner of your dex's contracts and manage these and the app only by yourself with your admin wallet. "
dex,And it seems this free version will not come with a user interface. So I still need to do some jobs,"Unfortunately, we provide the free version of dex only as the static build of the react application. You can still make modifications to a significant number of application styles despite this. "
dex,Or is there how you can reduce the fee for the paid version of dex to 500$ I'm ready to pay at once 🥺🥺,"We are unable to offer a discount as the current price is necessary to cover the costs of support, improvements, and the implementation of new features and products. 
 "
dex,Is it there any special server requirements,"No, you can even set up it on GitHub pages... "
dex,"We need dex uniswap v3 with polygon mainnet, Is this possible?","We can't fork it, 'cause there is the Business Source License in their Uniswap V3 Core repository with main contracts at the moment - https://docs.uniswap.org/contracts/v3/guides/governance/liscense-modifications "
dex,any other charges 0x aggregator take for adding liquidity?,"0x and direct sources swaps are external services, we don't have any access to their contracts, we can only interact... You need to create li"
dex,What is best and easy way to add liquidity in low cost? I want sell my 1 token at cost $0.5 and i want to add in liquidity pool total 10k token so which is best and low cost liquidity option for me?,If you want that your token price will $0.5 at the start of trading and add 10K tokens to the Li
dex,looking for UNI v2 on a diffrent chain ID ,
farm,can v create multiple pools using your template,You can create multiple staking/farms contracts (shortcode). 2) 
farm,we need to use word press to develop our website. Can this be done??,"Yes, this plugin is developed for WordPress. 3) "
farm,who’ll be the smart contract owner of staking once we purchased.,"In the WP admin panel, when creating and deploying a farm, you will use a Metamask account - this will be the owner of the contract. 4) "
farm,will there be any renewal fees after first purchase.,"No, you can buy it with crypto and constantly receive updates in our dashboard on https://dash.onout.org/ 5) "
farm,will there be a third party control over our revenue generation?,"No, only users who staking define tokens can earn reward tokens with this plugin. 6) "
farm,will we have a complete control over this software once we purchase for our staking plan,"Yes, you can change always the plugin code after purchasing it, but we don't recommend it 'cause after each update, you must change it again and again... You also can check our knowledge base - https://support.onout.org/hc/1331700057/category/3 "
farm,"Also I messed up some how, which theme should I be using with the plug-in for it to work Changed it and can’t get it to work again",I use the theme as in the attached screenshot. 
farm,Have you beer thought of having the plug-in display the total Value locked in the farm? It shouldn’t be a hard addition but very helpful to users,"Yes, you can sponsor it, also we can add % of the total tokens that users stake. - 200 USD "
farm,"In the settings, it’s always set to one network, is that the only network a farm can work on at a time?","Yes, at the moment plugin can use only one network to initialize farms. "
farm,"if any users deposits the token, it'll sent to which wallet address...???",Users can deposit only on the deployed farm address. 
farm,what should be my rewarding wallet address,Can you clarify your 
farm,"Deployed farming address - which you meant is the address which is automatically created, is that..??",This is the main smart contract that the frontend connects to. 
farm,"if my users/investors deposits our token, where it’ll get deposited, to which address.??",To the deployed farming address. 
farm,and how can our company withdraw that token,"You can't withdraw rewards tokens after their transfer to the farm contract, these can only earn by users. Also you can check this article - https://support.onout.org/hc/1331700057/25/what-happens-to-the-remaining-tokens-at-contract-after-staking-period-ends?category_id=3 "
farm,we will be giving rewards to our users/investors who stakes. In that case in which address we have to have our rewarding tokens stored from the company’s side..??,You should transfer rewards tokens to the farm address before starting the farm period. 
farm,can I keep a time bound for my investors to withdraw the token. That’s a withdrawal time condition or withdrawal disable.,"No, users can deposit/withdraw their assets to/from the farm address anytime they want. "
farm,"Can this be internally calculated with your plug in, And have it in the website..??","No, you can also check article how to calculate APY with example - https://support.onout.org/hc/1331700057/21/how-to-calculate-the-apy?category_id=3 "
farm,it is BEP20 compatible?,"Yes, it supports any erc20/bep20-like token. "
farm,are you offering a support service to install the template if help is needed?,"We have the knowledge base, you can check it, and if you will meet any trouble just write us - https://support.onout.org/hc/1331700057/category/3 "
farm,What are the additional gas fees to set it up?,"There are Deploy farm contract, deposit rewarding tokens to farm contract, and start farm period as the additional gas fees. "
farm,by going on the live net?,You can check our live demo of this plugin - https://farm.wpmix.net/ . You also should test this plugin with your test tokens with any supported testnet. 
farm,"is there a possibility to set up diffrent staking/farming periods? Like 6 months, 12 months etc?","Yes, you need to create 2 farm contracts and use them as 2 shortcodes in your WordPress site. "
farm,"we want to config, early withdrawal fees and calculations for earning?","With the farm factory plugin, you don't earn, only your users can earn. For instance: You have distributed your tokens to users and you want them not to sell tokens on the market at a reduced token price. Staking will help you do this, users stake (block) your tokens and can earn either additional your tokens or tokens (any ERC20 or BEP20 depending on the network) that you can provide to users... "
farm,how much bridge cost?,At the moment it is $1000 and it is a beta version 
farm,will you make some dao like tomb or other?,We have the DAOfactory plugin which is based on snaphot.org API. 
farm,can you give me list of chains what dex is support?,"BSC, Polygon, Avalanche, Fantom, Cronos, Fuse, Moonriver, Harmony, Aurora "
farm,Can I stake two tokens that I am not a developer with with this plugin?,You can use AToken for staking and BToken for rewarding. (For instance: SWAP token to stake and USDT token to reward) 
farm,I got one more question regarding farming plugin Can i just add additional tokens into existing pool? Or i have to create a new pool?,You can add reward tokens to the farm contract only between farm periods. You can't add to the active farm period. 
farm,Can u tell me from whrer i can change the backgroud color the file?,"No way at the moment to change it by settings, 'cause it is static script from pancake ui-kit, but you can try to change some styles in building CSS files. "
farm,And decompress the farming plugin to change the colors of the buttons for example?,"Yes, you can change it in ./assets/css/farmfactory.css CSS files. "
farm,Even if I were to whitelist the farm contract?,"You can try using it, but when users will withdraw their funds, they won't get all the tokens the app displays. And you need to create a new farm contract, the old one was broken. "
farm,Need delete old version?,"No, just upload a new one and replace the old one on new "
farm,what will this past for the old farms?,They are stored in the wp database... Nothing will happen. 
farm,how can I use the factory to be able to stake multiple chains?,"Which factory? If you tell about farm plugin, there is only one chain possible to use... "
farm,or would I need to start a new website on wordpress?,"Unfortunately, yes, for this you need to use another WordPress... "
farm,would i need to purchase another plugin?,You can purchase all our plugins)) 
farm,about the farm factory what does scrip purchase offer?,"The plugin files, its updates, and our support. "
farm,so we can change it to our platform name?,"Not sure about that, it is a widget with a shortcode, and as far as I know you can use shortcodes on any WP page with your branding. "
farm,Firstly what final price is?,$899 is the final price. 
farm," I’ve found it on codecanyon and there it costs $935(+VAT of course), on dashboard site I could buy for $899 but only with ETH right ?","Yes, you can buy it for ETH or BNB (using the BSC network) for $899. "
farm,Is it possible to buy with other wallet than the main one which will be connected with software? To keep main address transaction history clear for start.,"Yes, but we need to add all your purchases manually to your main address. "
farm,"Secondly, just to make sure. Is that work with subdomains ? I’d like to setup script on app.example.com to keep example.com for landing page. ",If your WordPress server started on your subdomain then yes. 
farm,"And finally, could you tell me what are the costs now (approx.) to create smart contracts on Polygon, BSC, Ethereum (in separate) I’d like to make sure how much I’ll need to start with this three networks. (without liquidity, only setting up). ",It depends on the gas price... 
farm, And I guess I could enable/disable every supported network on wordpress side at anytime right? To add more in the future.,Sure. 
farm,does the farmfactory script come with an admin panel?,"Yes, it is provided with the WordPress admin panel. "
farm, I want to what do that company will be benifited from my staking?,"We don't know what this company does, please, provide a link to their site, we will research it and if we will understand that we will tell you... "
farm,"If I use Farmfactory and allow the users to do staking, Do I will be binefited with 4 % daily? so that I can share 3% with user and keep 1% from myself?","You do not earn revenue from the Farmfactory application. Only your users are able to earn revenue. The APY earned by the user depends on your deposit to the farm contract, the number of users, and the amount of tokens they have staked. "
farm,So i need fixed the % user get,"Unfortunately, we don't provide and don't have any products with this feature at the moment... "
farm,What is the tokenomics behind the protocol.,"The primary feature of the Farmfactory application is to provide incentives for users who hold your token. Users purchase and stake your token, earning rewards in return. This process does not cause a decrease in the value of your token. You do not earn revenue directly from the application, but rather it is your users who earn revenue through the rewards they receive. The APY earned by users depends on the number of deposits, the number of users, and the amount of tokens they have staked. "
farm,Are there any opposed staking limits,No 
farm,How do the fees work,There is not any fee. 
farm,"When will the rewards be paid out? (Daily, weekly, monthly, or only whenever compounding / taking action)",Users can withdraw their tokens whenever they want. 
farm,Will there be any time lock option?,Users can withdraw their tokens whenever they want. 
farm,Also would it be possible for a user to stake there tokens. And get something other then tokens in return?,No. 
general,Do you install the software?,"Yes, 1 product - 100 USD. "
general,Could I carry out the development of my token and that this in turn be the native token of my exchange?,"Yes, you can add only your token to our Wallet and DEX products, but users can add another manually, with other our products you can set only one token that you want. "
general,How long would it take for it to be ready on my website? ,It depends on how busy our developers are. 
general,How much to set up wallet on my domain ? ,Installation service - 100 USD 
general,"If I wanted to change the image that display on the button, for example change it from that rectangle box into a sword image, what would I change in the CSS?","Yes, you need to use CSS to change styles of buttons. "
general,If my token has a tax will that effect the farming process?,"This can lead to errors, first test your token on the testnet, and then deploy the farm contract to the main... "
general,can i put my own token?,"Yes, you can set as default token any erc20 or bep20 tokens (depending on the network). "
general,"If possible, can I get the same update process?",If you have a license key you will get all updates automatically. 
general,Do I need to request a license from you after purchasing from Envato?," You get a license after purchasing a plugin with a license. If you do have not a license, just download the latest version of the MCWallet plugin from Code Canyon. "
general,Another contact support way for me?,You can also use support@onout.org email to contact us. 
general,What do you mean deploy new contracts?,"When you start managing the DEX plugin, firstly steps are deploying new contracts of your dex that your users will be interacting with actions like creating li"
general, what the benefit of buying it over codecanyon ir should I buy it from your website please let me know,It is your choice if you want to buy plugins by cryptocurrency - use https://dash.onout.org/ or by fiat - use the Codecanyon. 
general,"Hello, is it possible to get more EVM networks added? Optimism and arbitrum","Yes, you can sponsor it. 150 USD for each EVM network. "
general,Also what's your time frame of telegram availability,Monday-Saturday 10 AM - 6 PM (sometimes 10 PM) 
general,Are you giving full source code?,"Yes, there is also front-end source code in the zip file. "
general,can we remove your branding?,"If you have devs, who can change code in react - yes... But after each new our release of this application, you will need to delete ours and put your branding again "
general,how can i buy using crypto?,Our marketplace - https://dash.onout.org/ 
general,update is automatic. or manual?,Manual 
general,can you use custom token?,"Yes, you can use any erc20/bep20-like token. "
general,could you assist in installation?,"We have the knowledge base, you can check it, and if you will meet any trouble just write us - https://support.onout.org/hc/1331700057/category/6 "
general,2 t imes. .I try to provide liquidation but failed.. just lost gas fee..,Can you provide these 2 transactions? 
general,I need some customizations added and would be willing to pay for them for my own use if you guys are interested.,"Please, provide what will you want to customize, we check it and will back with an answer about the possibility of adding. "
general,I'm actually also looking for developers for my mobile app do you guys have experience with this to help me add more features? and/or blockchain developers for our blockchain?,We do not have any developers with experience in mobile development. What kind of work do you need with your blockchain? 
general,Is there a way a specific project can do a link to a specific token?,No 
general,How much gas is needed for the entire bridge to set up the contracts?,It depends on the network that you use for deployment and its load. 
general,Do you have any ui/ux developers u can recommend,No... 
general,Is it possible to add shortcodes in the menu?,Can you clarify your 
general,Is there a discount if we want to buy all the products u have for sale ?,"Yes, you can use the BSC or Polygon networks to get 50 SWAP tokens as a bonus (use SWAP to earn BNB rewards at farm.onout.org ) and also use my EVM address 0x01F69aEfdb0AdE89BC8f8dD9712c4CC4899621E2 as a referral code to get a discount in 50 USD. "
general,Is the source code for smart contracts available when purchasing ur products to give sc auditors to complete audit,"Yes, sure. "
general,Can we add custom tokens to our system?,"Yes, you can add any ERC20-like for all supported EVM-like chains in the plugin. "
general,And also have a lock in period for the token?,There is no that functionality. 
general,I will also pay to add the ethereum chain as well.,200 USD - https://support.onout.org/hc/1331700057/32/addnewnetwork?category_id=8 
general,is it possible to use the plugin on 2 different WordPress servers?,yes 
general,also ifound this now https://vittominacori.github.io/erc20-generator/ is this your product?,"This is not our product, but we are thinking about fork it... "
general,how much would dev cost be to fund this fork?,"Not sure about the estimated time and price, we didn't research it yet... I will answer other "
general,does that come with install support or DIY?,"Installation is an additional service... But yes, we can help you with your "
general,Is it possible for us to order development and adjustments through You to the code?,What kind of development and adjustments do you need? 
general,I would like to know if I can also list BEP 20 Tokens on Binance Smart Chain,"yes, sure, BEP 20 is ERC-20, but just in bsc network. "
general,What kind of skills needed?,React js to add it in the front-end (there are between 3-5 files for changing) and some terminal commands skills to change some config files on the back end in the AWS instance. 
general,how do i make the purchase?,You send payment to the company Ethereum address then we will add products that you purchased to your address on our marketplace and you can download them from there. 
general,do you support adding chain when i buy it from code canyon?,Adding new networks is additional service... You can check prices there - https://support.onout.org/hc/1331700057/32/addnewnetwork?category_id=8 
general,Also i see price difference between dashboard and codecanyon,"Oh, we didn't reduce the price on the dashboard... We will do that asap. "
general,"do you have a solution for api endpoints, to list cmc and cg","No, we don't provide any info and analytics service for dex plugin, but in the soon future if we find the investor for that functionality we can provide it as a separate service. "
general,API Do you have support for api endpoints for dex,"For this, we need to start the server with a subgraph, we don't know yet how to start the graph server with any other EVM-like chain... "
general,how much do you make dex e api endpoints for me,I think we can start learning how to use the graph tools with a new EVM-like chain for $200 USD and if it will work with some other test subgraph we can start to integrate your dex. As I know the first re
general,Ooh okay so they can be hosted on a netlify instance or vercel,"I think yes, these are the ReactJS apps... You also can host these on GitHub pages. "
general,also server requirements,"You can use the GitHub pages, the application is not very costly in terms of power. "
general,It's possible to add a Max button?,you can sponsor it. 
general,You will install it and deploy?,"No, installation is an additional fee service... But you can use our installation guide - https://support.onout.org/hc/1331700057/1/how-to-build-cryptocurrency-wallet-on-own-domain-from-scratch-without-coding-skills?category_id=1 "
general,I have offer for you. We need someone to develop bridge for us connecting Ethereum + Meter + Everscale networks with each other and being able to transfer NFTs as well. Please let me know if it is possible and how much it would cost?,"No, we don't have full-time developers at the moment. The minimum budget amount is 5000$ (to find a new developer). "
general,The 6 month extension is still valid if I make a video for YouTube?,I will ask the manager and get back with a response. 
general,"and I also wanted to comment that my bitcoin wallet address changed... something unheard of with the same private key, is there any explanation about it?",It is strange... We didn't make any changes to the generating addresses... Can you provide more details? 
general,"We will buy the product on Codecanyon, can you give us a special discount? Or will there be a discount on Cyber Monday?","I think Cyber Monday will not be and we can't provide any discount because the current prices for products are normal to cover the costs of the support, improvements, and implementation of the new features and new products. But I'll talk to the team about Cyber Monday... "
general,can't you make a fixed api page like i sent you,"no, it will be a custom API development. "
general,I am still looking for someone to clone this open source project https://app.cennz.net/bridge,"Please, provide its source code. "
general,I used GitHub source code with revenue share model https://swap.edgeverse.exchange ,"Yes, I know it, 'cause of this, I have offered you the info app. "
general,How many hours are you needed?any estimation?,"Idk really do, but I can calculate the approximate costs after the initial research (3-6 hours). "
general,If I buy in codecayon does it work?,"yes, it works. "
general,may you give me the payed version with installment ? As a kind support for you,"We have only 3 ways to provide this product - paid (by cryptocurrencies - https://dash.onout.org/, by card - https://codecanyon.net/item/definance-ethereum-defi-plugin-for-wordpress/29099232) , and free (As you know). We don't plan to add other ways at the moment... "
general,8- how much it cost to add a new network ?,"$200, you can check prices to add any custom EVM-like chain to our products in this article - https://support.onout.org/hc/1331700057/32/addnewnetwork "
general,"I search for an Solution for my upcoming Project, like yours, for example! Let me ask as upfront, do you also guarantee an after-service?","Yes, we offer support, bug fixing, and other related services, as well as additional options such as incorporating custom EVM-like chains into our products or their installation. "
general,...I will check your services at dash.onout.org ...i saw different nice solutions for Dapps! Can we speak about it?,"Absolutely, we are available to answer any "
general,Do I need to pay an extra fee for the testnet AND the mainnet or is it a one time fee? ," If we add your networks simultaneously, the cost will be e"
general,Here are the testnet details. Could you already check if the chain is suitable? ,"That's fine, it appears to be an EVM-compatible blockchain. "
general,I m stuck now I don't know what to do,can you provide your site link? 
launchpad,Is it an advanced version of the launchpad or how should i understand this?,You can show a demo version of the product and also videos to understand it and how it works. Demo - https://launchpad.onout.org/#/launchpad YouTube Playlist - https://www.youtube.com/watch?v=jiJBoMpr5t
launchpad,Is is like for example gempad?,"Yes, it is like gempad, but may differ in functionality. We didn't research that because it has not open source... "
launchpad,When launch Ido plugin?,"In general, the product is ready, but there is no admin panel for the convenient deployment of contracts and changing the main points of the interface. You can buy it at the moment, after that we can provide you with the source code, and if you have some dev skills you can set up it on any EVM-like chain, deploy the re"
launchpad,Also in regards to IDO is it like buying a repository with an installation guide?,"Yes at the moment, but I think we will add the admin panel page to the IDO app in about 1 month. "
launchpad,Thank you also we would love to go forward with DEX and intergration plan if that's okay,"Yes, sure "
launchpad,The IDO also needs Intergration Right?,You can use any DEX (uniswap-like) contracts with the IDO contracts. 
launchpad,So the Dev has to recompile the tocken sol contracts and then deploy them right?,"Yes, to start with own contracts you need to deploy your own contracts for tests with the npx truffle migrate --network goerli command. "
launchpad,Would want to have the intergration also,I will write you the guide on how to integrate dex contracts into the IDO app. 
launchpad,Question from the dev once the IDO ends there's an option to lock Liquidity how can we set that to lock on our Swap,When you create the IDO on launchpad you need to choose the Unlock date it is the date that will provide in the locker contract. 
launchpad,So essentially the DEX has to be deployed first before IDO right?,"Yes, but you can use any popular dex contracts (uniswap for eth, pancake for bsc, and more) to get started "
launchpad,is it possible to capture new liquidity pairs being created and snap new launches being added on the IDO?,Can you give an example? 
launchpad,Just see the Ido plugin in code canyon... Is already ready?,"It is ready, but without an admin page. "
launchpad,Ok so for the moment it's not possible to change logo link ect..?,"we will provide you a source code, where you can change whatever you want. "
launchpad,we seem to be having a problem with the IDO launchpad in terms of connecting it.,Did you choose your network in the metamask wallet? 
launchpad,how can i set that anyone can run an ido?,it is by default 
launchpad,Is there an option to add a token generator and other similar stuff to this existing launchpad?,"No, we don't have full-time developers and can't do a small custom job at the moment. The minimum budget amount is 5000$ (to find a new developer). "
launchpad,"I have a question about the launchpad, does it work with the BSC network?",You can use any EVM-like chain with this app if you have some dev skills. Or we can provide an installation service (200 USD) to set up the launchpad app with network that you want. 
launchpad,"After purchasing, does Onout collect any commissions made from transactions?","No, we don't collect any commissions. "
launchpad,Can IDO token rate be set to another token besides Ethereum?,Only native coins like Ethereum (depending on the network) can be set. 
launchpad,Now i am confused which one should I buy next IDO launchpad or Farming plugin with a limited budget.,You can buy the Farmfactory plugin because the IDOFactory is not fully ready and there is not implemented the manage panel to easy deploy re
launchpad,"I couldn't get the ido plugin from the inventory, it's over the card limit, how can I get it?",I didn't get it. Can you clarify the 
launchpad,also do you need to add btcix network to it ??,"Currently there is no manage panel, I am working on it. There is a react and truffle app where you need to do it yourself... If you buy it, the development of the admin panel will speed up... "
launchpad,I want to know the status of IDO launchpad,"I didn't spend my time on it, 'cause I was busy with other additional fee tasks. "
launchpad,? Demo is also not available,"Yes, we need to redeploy it. In general, the application is ready to use, if you have experience in react and truffle you can set it up with your network without any problem. "
launchpad,Is the admin panel ready for launchpad?,"No mate, I'm not a robot, I didn't spend my time on it, 'cause I was busy with other additional fee tasks, like yours))) "
launchpad,Can we get the backend code for the multichain dapp not the public file or build file?,"Sure, please provide your purchase transaction hash. "
launchpad,If we purchase the lending/borrowing and Launchpad dApps can we get their code as well and not just the public/build files so we can modify them to our needs?,"Yes, we can provide you with the source code of purchased applications. The lending/borrowing app is not ready for use and at the moment does not ETA... "
launchpad,How much would it cost to integrate our blockchain?,"The IDOFactory app provides only React and Truffle source code of the app at the moment and you can manually add your EVM network, but if you can't do it we can provide installation service with your network for 300 USD. I'm also working on the admin panel of this app to our customers can easily deploy all contracts and set up the app by themselves, and ASAP it will be released. "
launchpad,what is the demo link for the IDO factory again?,https://launchpad.onout.org/ 
launchpad,Also for the multichain dApp are we able to add our EVM-compatible chain as well?,"Yes, it will cost 300 USD. You also can check prices to add a custom EVM-like in this article https://support.onout.org/hc/1331700057/32/addnewnetwork?category_id=8 "
launchpad,I can’t find the specific payment code where would it be?,try to check it on etherscan or bscscan depending on your used network 
launchpad,And this one isn’t ready to use yet? https://onout.org/lenda/,"Unfortunately, yes, and it does not ETA at the moment... "
launchpad,Can the logo and name be change?,You need to change these and set up the app with the source code of React and Truffle to start the app at the moment... 
launchpad,Also the apperance of it.,"It will not be available in the first version of the admin panel, but I will add the re"
launchpad,Does the product in codecanyon includes the smart contracts used in the launchpad?,"Yes, sure, you need to compile and deploy your own IDOFactory contracts and they are included in the source code. "
launchpad,This one?,"Please send the message again, I can't see replied messages in the support system that we use... "
launchpad,is the whitelabel come with source code and solidity code?,"Yes, you can re"
launchpad,"I am looking to buy and try on it, but the price tag at $652 is a bit high, can give us a discount?","Unfortunately, we are unable to offer a discount as the current price is necessary to cover expenses related to supporting, upgrades, and the incorporation of new features and products. 
launchpad,does it not approve the token automaticly?,"Yes, we know this issue, we will fix it. We have changed the connection way and the approval is broken... "
launchpad,Locker I withdrew but it still say withdraw also the amount lock didn't switch to 0,I have opened issue 
lottery,Can we use our token as payment?,"Yes, you can deploy a lottery contract with any ERC20/BEP20-like token. "
lottery,WordPress is not safe and we may face regular attacks?,You can read this fresh article about WordPress security - https://kinsta.com/blog/is-wordpress-secure/ 
lottery,Front end is in wordpress or react?,React. 
lottery,Can we change look branding?,"If you have devs, who can change code in react - yes... "
lottery,instead of buy ticket can we ask user to connect and use token. is their any limit on win?,You can set the ticket price to 1 of your token. 
lottery,branding is done using css or its hard coded,App use pancake uikit 
lottery, Have you tested it...and it is working?,"Sure, you can check our live demo - https://lottery.wpmix.net/ "
lottery, How do i get it setup please?,Follow t he knowledge base - https://support.onout.org/hc/1331700057/category/6 
lottery,I got one more question regarding lottery Can i just additional tokens into existing pool?,"Yes, you can add some amount of tokens to a bank (smart contract) of the current lottery round. "
lottery,"Do you experience any problems using your widgets with WP? Including tx fails, gas issues, general problems...","No, basically everything was solved. "
lottery,are your lotto smart contract(s) while labelled or do they have reference to a person / brand / company?,"Yes, a farm contract supports any ERC20-like tokens, but there are no UI customizations in the lottery plugin, and you can change some images in static files... "
lottery,can a lotto have more than one erc20 token allowed to be betted and the game is probably fair on the blockchain ?,"No, for one token you should create one lottery... One user can buy 100 tickets to participate in a lottery round. "
lottery,Can I run multiple lotto’s at the same time? One for each $token ?,"Yes, for this you need to create the defined amount of lotteries in the wp-admin panel. "
lottery,Any additional security setting or plugins recommend?,"You can follow basic security recommendations for WordPress, just google it. "
lottery,I visited your discord and was concerned to read about risks of users loosing their crypto - is this safe??,"Yes, we have fixed the callback issue in the latest version of the lottery plugin... You can download it only on https://dash.onout.org/ "
lottery,is it possible to hold a lottery for bnb but people buy lottery tickets with Rainbow shiba?,"No, the same token should be in a bank and reward. "
lottery,"I'm not sure how to load a prize in the lottery, how can I deposit a prize into the lottery for people to purchase tickets for?",Follow the WP admin panel > Lottery > All Lotteries > Choose the one you need > click Re
lottery,is there anyway to check which version of the lottery I have?,"Follow the WP admin panel > Plugins > Installed Plugins > find Lottery Factory, the latest version of the lottery plugin is 1.0.37. "
lottery,and has this been audited to assure customers of its safety?,"You can check the technical details of this issue here - https://tools.onout.org/doc/incidents/lottery2022.md We do not use external audits (AND PLACE THIS INFORMATION ON EVERY PAGE at dash.onout.org). In the description of the product, you can't see any guarantees users funds will be safe. "
lottery,is it possible to decompress the lottery plugin for add the cronos network?,"Yes, we can add it, but you will also need to send some native coins of the EVM chain to deploy some re"
lottery,As I understand it is a form of Wordpress plugging - what crucial information is being held on the serve (or none)?,"The main application use ReactJS. It is a full fork of the pancake lottery app. We use WordPress only for creating, editing, storing, and managing Farms information. "
lottery,Can we see a contract example that “dapp” will be creating every time?,"Yes, there is a contracts folder with the Lottery.sol smart contract in the plugin directory. "
lottery,Can we create like 5-6 draws every 24 But running at the same time?,"Yes, but you need to manage each manually in the WP admin panel, the managing process is not automatic. "
lottery,Is there any referral system that can be used for marketing etc?,No. 
lottery,Is there always a winner?,No. All rewards tokens migrate to the next round. 
lottery,"every draw is being done in the same, deployed contract - not new contract for every draw - right?",Yes. 
lottery,What buying method of this dapp you are recommending - envato?,"There is no the lottery plugin in our portfolio on Envato, you can buy it only on our marketplace by crypto - https://dash.onout.org/ "
lottery,So actually “on withdrawals” if can use a Mining vocabulary?,"Didn't get it, can you clarify the "
lottery,i think i got it when % of rewards goes to the dev - at the moment of slosing a round right?,Yes. Admin will receive a treasure fee when a transaction of drawing Final Number And Make Lottery Claimable is sent. 
lottery,if there is no winner users tickets are vailid for he next round?,"No, users can purchase tickets only for one round. "
lottery,bw is it a fork of PancakeSwaps v2 or v1?,As I know Lottery does not have different versions. 
lottery,do you have any discounts for this dapp maybe? :),"No, there is no discount... "
lottery,"can we have different tokens for different, parallel draws? or only oone token which is in the contract deployed on configuration?",You can create a lot of lotteries in the admin panel and these will be displayed by your.wp.domain/lottery/lottery-id. 
lottery,a draw pool counts after deduction of devs fees?,These are counting in one method... 
lottery,the summ of the prize pool - is it counted without setted fees?,"I'm not entirely sure at the moment, but I think it counts with the treasure fee. "
lottery,and what is happening when i will set a prize level for 2 numbers lets say and there is 5 people - how their prizes would be counted?,Rewards will separate by winners in e
lottery,Please clarify about the buy token link.,It is just an external link to any site... 
lottery,The payment gateway was in fact to purchase our custom BEP20 token,"If you have the payment gateway, then just set it to tokenbuy_link in WP admin panel. "
lottery,"Also, so you have other games but lottery?",no 
lottery,Can we add games from other providers?,At the moment we don't provide custom app services. 
lottery,So that means I could set Paypal or stripe to purchase token and then use them for lottery?,It can work only if you set those on your external service and put link of this service to lottery tokenbuy_link (Just a button that follows an external link). 
lottery,Can the payout also be converted back to fiat and sent through the same gateway?,"It depends on your external service possibilities, we don't provide those functionalities... "
lottery,Match one number only. I mean lottery between no 1 and 2.,"No, you can set a minimum 2 Number of balls... "
lottery,"If pool un-won, can we do following","All rest funds move to the next round if the pool is unwon, also when you calculate the winning combination you are calculating the Burn Pool (treasure fee that you are earning). "
lottery,If you have any news from Dev lottery plugin for special token?,I will ask the lottery developer to process your re
lottery,"also, can your Lottery's source code launch on EthereumPoW?","yes, sure, we can add any EVM-like networks to our products, check prices and re"
lottery,We need a more complete interface sir,We don't provide any custom development services... 
lottery,"also, can your Lottery's source code launch on EthereumPoW?","yes, sure, we can add any EVM-like networks to our products, check prices and re"
lottery,"I have some doubts about lottery game, can I change the background colours in lottery game?","No, there is no dynamically property, you need to change the source code to do this. "
lottery,I read in your website earn commission what does it mean?,There is a treasure fee (a burning pool) that is a possibility to earn admin with each round of the lottery. 
lottery,Can the lottery has 6 numbers like pancake does?,"Yes, you can set up 2-6 numbers of balls in the lottery. "
lottery,bought the lottery app wanted intergration with kekchain,"The total cost for adding a new EVM-like network to the lottery plugin is 200 USD, but with your network, it can be more (depends how many hours our dev will spend)... "
lottery,alright we would love to go ahead with the lottery app we can facilitate that first?,"Yes, sure, we can start adding your network to the lottery plugin tomorrow morning if you pay the main fee (200 USD) today. "
lottery,"using base BNB or ETH seems to be a problem reading wallet balance in metamask when purchasing a ticket. If i use a ERC20 token it works . is this suppose to work like this or can i use the native toke of the chain i.e. MATIC ,ETH,BNB or is it only working with WMATIC,WETH,WBNB","Yes, the lottery app works only with ERC20-like tokens, you need to wrap your native currency to use it as ERC20. "
lottery,how am I able to see the solidity contract that has been created for the lottery.,Check the lottery contract in the ./contracts/Lottery.sol file in the root directory of the Lottery zip file that you downloaded at https://dash.onout.org/ 
lottery,can i manually move funds out of the lottery contract?,You can add some amount of tokens to the bank of the current lottery round 
wallet,can I put a wallet to receive the % of transactions different from the token?,I don't get this 
wallet,I want to use my api key (infura) for wallet plugin. ,There is no way to add a custom Infura API key via the WP admin panel at the moment... 
wallet,Does it include stacking?,"No, but we have the Farmfactory plugin for it - https://tools.onout.org/farming/ "
wallet,Does it include trading and can I swap to my currency?,"Yes, the wallet plugin has the Exchange page, and there you can swap any ERC20-like tokens with the "
wallet,is your multichin plugin also include these features or it will be different plugin from this one let me know?,"These plugins are definitely different, the cross-chain exchange plugin is fork of the multichain app you can check their site - https://app.multichain.org/#/ "
wallet,When I add liquidity through my website https://elizaswap.io/ liquidity can’t add and shows error message saying is not working...,Can you provide this error message? Did you pay the gas fee? 
wallet,"At the time of exchange swap admin commission set is not working.. here is the site we set 2% but here when swap happens, admin address could not see any commission received.","This is because you use direct swap, commission works only with 0x (aggregator) swap. "
wallet,If I set up with 1000 BEP20 coins liquidity and if any users try to buy 1500 coins what will happen?,The application will ask to add li
wallet,If I set up with 1000 BEP20 coins liquidity and if any users try to buy 1500 coins what will happen?,"I double-checked this, the application will not ask to add more li"
wallet,Incorrect rates on some pancakeswap and polygon tokens.,"As I can see it looks fine, maybe there is no li"
wallet,Avax tokens don't show when added via admin panel,"We have opened the issue, and asap will fix it. "
wallet,how do I enable the mandatory authorization?,"To enable it to follow WP admin panel > MCWallet > Options > checked Users must be registered and logged for access wallet. and Save private information (keys, etc..) in user's profile (Custodial mode) "
wallet,"Please, I activated floating support on my site but seems not displaying on the wallet page why?",What is Floating support? Can you clarify it? 
wallet,Is the plugin free forever,Also can you clarify this 
wallet,Does that region IP address banned in Aggregator ?,"I don't know, but it probably is... Because I have checked it on my side and everything works fine... "
wallet,"Is it possible to add BCH, LTC and dash to the bitcoin wallet ?",At the moment we don't have a free developer to add not an EVM-like chain... 
wallet,Also how to get the upgrade version ? I bought the script on Codecanyon . Support is expired,"If you buy it on Codecanyon, then you have a license key, just add it to the plugin. We update the plugin on Codecanyon in a timely manner, but with a license key, you will be able to receive it permanently as something changes in the plugin. "
wallet,So can BSC chains be supported?,Go to the WP admin page > MCWallet > Options > Disable BNB wallet option should be turned off. 
wallet,Cross network transactions are available within the MCW wallet application.,It is a depricated function in MCWallet. There is only BTC-to-(ERC20/ETH) and vice versa atomic swaps. 
wallet, Is the plugin can only accommodate erc20?,"Yes, this plugin can only accommodate erc20-like tokens. "
wallet,Can I add my new custom bep20 token?,"Sure, bep20 is erc20 in the BCS network. "
wallet,Can I set my own price for my token?,"Yes, you can set a custom price for each admin-added token, but it displays ONLY in the wallet, and not as the exchange rate in the "
wallet,Can I sell my token to my site users?,If you want you can create a li
wallet,As Admin I want to add my custom bep20 token to the platform (system) and set my own token price to sell it to my website users. What are the best ways to do that?,"As I wrote before, you can create a li"
wallet,"Is there any way that the price I set for may token in the wallet system platform to be available in other wallet like trust, metamask, etc and in coin listing websites? ","The app uses a coinmarketcap API to fetch Coin prices by symbol, if your token has been listed there the app can display it. "
wallet,"Does my bep20 token price will be also available in other wallet like trust, metamask, etc. and in coin listing websites?","We are not providing an aggregator of pricing for these projects... Maybe, if these use Panckace swap analytics for fetching price it will possible, but we didn't research that and are not sure. "
wallet,What I want is that my bep20 token and price will also available in other crypto wallets and crypto exchanges via swapping or trading and will also be seen in coin listing websites.,Usually all projects have some kind of listing re
wallet,I need more information and guide on how to materialise my requirements.,We don't provide any listing services... 
wallet,"if I do my token Liquidity Pair with BUSD in your platform wallet system does my token and token price will Only available in your platform? Or it will also available in metamask, trust wallet, etc?",The app uses the PancakeSwap contracts to create li
wallet,"If I do my token Liquidity Pool at PanCakeSwap and set my token price, does your platform will fetch my token and price from pancakeswap?","No, your users can see the dynamic token price only using your pair tokens (YOURTOKEN/BUSD) in the "
wallet,"If your system fetch my token and price from pancakeswap, no need to set my token price at your platform?","It is not working on the wallet page, because the price depends on the amount of tokens you want to swap and etc... "
wallet,how can i disable the custodial mode,MCWallet > Options > And turn off the Users must be registered and logged for access wallet. field. 
wallet,are there any shortcodes for the plugin,No 
wallet,What is the best thing to do so that I can sell my bep20 token to users in App?,"You can use swaps, but it is not selling it is a swap (the price can be different)... "
wallet,Do I paste https://buy.ramp.network/ with quotation marks? And do I retain the parameters previously used for itez? ,"No, you need to paste it without "
wallet,"Also, where exactly does it show up when using the app?","When you use deposit a native coin like ETH, BNB, and more. "
wallet,Which scenario is the best to implement that favors for me?,"I can't decide for you, it's up to you)) "
wallet,Did data-network change from “1” after ETH upgrade? ,Which update? 
wallet,The only problem is the option for paying with debit/card is disabled. Irrespective of the country I choose. Is it an issue on ramp platform or misconfiguration on my side please? ,"Maybe it is an issue on Ramp platform, but I'm not sure... Try using it with a VPN. "
wallet,to transfer the token to the User wallet in your App...,Your users also can interact with the app with metamask or walletconnect providers connecting... 
wallet,Then User can swap their token to any token in your App,Users can use the swap feature with internal and external wallets. Do you already have a WordPress payment gateway? 
wallet,"Always shows card payments disabled, though when you go to main site, https://ramp.network/buy , it works well. RAMP support team said its issue with your integration.. see attached screenshots","Okay, we will check this issue. "
wallet,No parameter values for amount are passed to ramp,We will also check this issue. 
wallet,Only BTC and Eth work. . But still ends at proceed to payment since pay by card on ramp shows disabled as mention on issue No. 1,Got it. 
wallet,"When you add wrapped Eth from Binance, it affects all other currencies. They stop picking exchange rates",Please provide WETH address from BSC that you have used to check it. 
wallet,Aurora and Moonriver coins added via admin panel only show on wallets but not on exchange,These should be in the 
wallet,Is the multi currency wallet with exchange a non custodian wallet?,"Yes, but you also can enable the custodial mode. "
wallet,Is it a WordPress plugin?,It is a react js application wrapped in WordPress plugin with the possibility to customize the app in the wp admin panel. 
wallet,"can I add other Fiat currency and process the exchange manually? E.g, let's say Ghana cedis to Skrill, Ghana cedis to PayPal, Ghana cedis to Payeer, etc., Payment will be process and send to my preferred online wallet (not crypto currency) and I then send the exchange manually to the buyer.","Unfortunately no, this is not possible with this app, you need to create another service for this... "
wallet,Is it necessary to create a smart contract before using the wallet extension? Or is there nothing to do? Can you explain more?,"No, we use externally deployed contracts to interact with the blockchain in the MWC plugin, for instance, to swap ERC20-like tokens we use contracts from Uniswap v2 app. "
wallet,Is it necessary to do something before use?,"You will need to start the WordPress server, and install and set up the MCW plugin for your needs (maybe disable some optional networks, etc.) "
wallet,How admin earn money by wallet?,You can set up fees only for sending transactions with internal wallets and to the aggregator swap module (Maximum aggregator Fee is 1%) 
wallet,If someone exchanges any crypto using our site then still admin earn?,Only with the aggregator swap module. 
wallet,Is it necessary to create a smart contract before using the wallet extension? Or is there nothing to do? Can you explain more?,"No, we use externally deployed contracts to interact with the blockchain in the MWC plugin, for instance, to swap ERC20-like tokens we use contracts from Uniswap v2 app. "
wallet,Is it necessary to do something before use?,"You will need to start the WordPress server, and install and set up the MCW plugin for your needs (maybe disable some optional networks, etc.) "
wallet,Is there a way to completely set it back to fabric settings?,"I didn't get it, please clarify the "
wallet,You guys are the developers of it right?,Yes. 
wallet,"After connecting to wallet, the pages are not auto refreshing. That's the problem i'm facing atm😅 it appeared after i made some adjustments in the css","How to check it, please provide more info about this issue. "
wallet,What amount I should put in 0x swap fee and who collecting the fees? ,You can fill any number between 0% to 1% into the 0x swap fee field. You need to set the EVM compatible Address where to collect fees. 
wallet, Enable Invoices = what is this and what happen if I ticked on it ? ,"It is only for Atomic Swap orders, and it is deprecated... "
wallet," Exchange mode = What type of swap to choose that I can earn fee? Only quick swap, Only atomic swap, Default is quick swap or Default is atomic swap ? Quick swap mode = What type to choose Default is 0x.org aggregator, Default is source, Only 0x.org aggregator or Only source ?","- Atomic swap is a technology that allows for the safe exchange of cryptocurrency, in which either both parties will receive coins or the deal will not be made. - "
wallet,"Is it possible to use our own token to pay for gasfees / usagefees on the dex, lending/borrowing protocol and the dao? I think i'm going to buy them all.","You can only set EVM-like coin (eg ETH for Ethereum, BNB for bsc network) to pay for gas fees... "
wallet,Imo we need our own blockchain to make that happen or do you guys have a work arround that?,"No, we don't provide the set up new EVM-like chain service yet... "
"wallet, dex",is the wallet system and dex system completely decentralized?,"Only you can access your wallet app and can change settings on your server. About Dex, you can also change the admin address to access to manage panel on the dex app page... "
"wallet, dex",you dont have any access into wallet or dex?,we have not any access to your wallet or dex... 


Product name,Question,Answer
farm,q: i mean i see on you frontend it indicate how much reward tokens are in farm contract, can that be remove from the frontend a: Yes, its can be removed
launchpad,q: i mean can the marketplace be ready soon like tomorrow or ? a: the marketplace will not work with you blockchain. it uses the ripple api, and only works with the networks it supports We can develop a separate application that will use not the Ripple API, but a separate contract Development cost - 500$ Lead time - one week
unifactory,q: So I can use Uniswap Base factory and router for LP in Unifactory? a: Unifactory cannot use any external contract other than one's own. You need your personal contracts for each network. If you don't have one on Ethereum, you have to deploy it first from the admin panel. If you don't have it for Base, you have to deploy it on Base first and then you can use it.
launchpad,q: If we buy IDO factory, we need to Infura.io Ipfs for setting? A: yes you need infura-ipfs.io and RPC node with wss for example p2pify.com
general,q: Not possible to link activation key with new address? a: have you lost your last address? it's not possible to link activation key to new address
general,q: When trying to connect with old wallet I have access denied q: Domain linked to your current wallet as owner
unifactory,q: Can I use Unifactory and Farm for optimism network? a: You can't do it right now. We can integrate this network in both products. Current integration prices are here: https://support.onout.org/hc/1331700057/32/addnewnetwork?category_id=8 q: Can I run Unifactory and Farm on same WordPress install? a: Let me clarify this info from devs q: Any deal of we buy 2 plugins? a: Not at the moment q: Are you available for custom work? How much would it cost if we wanted to update the design on the farming. a: Yes, but it depends on amount and type of work. The longer the job takes the less likely we are to take it on.
unifactory,q: Can I run Unifactory and Farm on same WordPress install? a: It's not possible to lounch it at the same time. Working and reliable solution is to lounch each app on your own subdomain. For example your site site.com and you louch it under farm.site.com and dex.farm.com. There can be some kind of Multi Plugin plugins, but you need to be careful and keep in mind the security of third-party plugins if you want to use it.
unifactory,q: In Unifactory if we set the factory and router from the Uniswap V2 will it work? Or we need own router and factory? a: It's not possible. You need to deploy your personal contracts. q: In Unifactory is it possible to use push-button connection rather than forced automatic connection? a: Not right not, but we can make it.
unifactory,q: Is Unifactory this white label? a: Please, clarify what you mean by white label. q: Is Unifactory has any ongoing support or updates? a: Yes. If problems arise, we'll fix them. For any individual work (for example, you want some changes for yourself personally), we do it for a separate fee. And it should be understood we have many clients, so the solution sometimes may not be so fast. q: Can you tell me a final price with Optimism integration? a: It's $1200. $1000 for the application + $200 for network integration. Also you can see active integration prices here: https://support.onout.org/hc/1331700057/32/addnewnetwork?category_id=8 q: Can we use any external liquidity in Unifactory? a: Not possible, because liquidity are located inside the contracts. So you have to deploy you own contracts. There's also an option for long and serious recycling so you can use third-party liquidity right away. But in this case you will only use the interface. There will be no possibility to add your commission (contracts are someone else's). q: How secure is MCW which displays private keys in a browser? a: It's only as safe as your system is safe (OS, browser, extensions). By default we don't send any private info outside of the application. And we use in-app crypto libraries to generate wallet related data (all happens inside your browser). q: Is it possible integrate safe.global in the MCW? a: I cannot tell you right now. It takes our sources to learn that service and make a decision.
general,q: hi! is everething okey with ETH network? We are going to improove UX for clarify how to deploy dex to network another than BSC. Q: I am deploying the exchange to a network other than BSC, but the app is requesting a switch to BSC. Why is that? A: We are utilizing the BSC network as a database since the app does not have a backend database. After deploying the contracts, it is necessary to save the new settings to storage, which is why you need to use both networks.
general,q: I mean the ido factory adress and the token locker factory adress. a: just put erc20 to fee token (in future at this week you can you this) - and click deploy - after save deployed contracts to storage
general,q: But i can't deploy your contracts directly because they are giving errors and warnings in remix a: So it’s logical - you weren’t able to put together a contract from the source, in a remix - is that the problem?
general,q: here are the updated versions, i updated. a: at this week will be update with Contract section at flat source of contracts q: so should i just wait for the update so i can deploy on remix myself? Think that's the quickest way to go? a: Yes - in folder with contracts will be flatten versions, with you can withou promble compile in remix
general,q: what chain is used to exchange polygon tokens on the product a: used polygon blockchain - chainid 137(0x89) q: in other words will my gas be massive if this is done on ETH a: if you use polygon - you pay native polygon coins - MATIC q: doesnt work: https://screenshots.wpmix.net/chrome_flURjFcp6AeS8A6TVaePogI32uV61jPT.png a: - its image in banner in our MCW procuct - you can manage baners items via admin panel q: Does this comment mean all polygon/MATIC tokens a: Its means token via ERC20 standart deployed on polygon network q: Also I found this doesnt have polygon contracts that work a: its a demo - we are not deploy contracts for polygon only testnet network of bnb and eth - admin can deploy contracts for each network in list, and be owner, and recive fee from txs of swaps q: o smaller payments count toward the overall total t o buy the product a: no, the price includes developers’ time for support and adaptation of the product to your needs q: can it be cheaper? a: no - see answer above. you can find our products from scammers and buy them cheaper, but you will not have support - you will be alone with yourself and with the scammer Any other questions?
general,q: it support MetaMask and Trust Wallet in a mobile environment? What other wallets are supported? a: Yes, support, also support WalletConnect v2 (Last version on https://dash.onout.org/) q: Is it possible to fix the APY a: No, but we are can develop an application for your specific tasks

END DATABASE

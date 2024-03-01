# Create Your Own Blockchain and earn mining fees

Creating your own blockchain can be an ambitious and rewarding project, especially if you are looking to earn mining fees, eliminate transaction fees. Here is a guide on creating a private blockchain network with a public RPC on a VPS server. You will also learn how to set up a BlockScout explorer and a crosschain bridge.

We will also cover the deployment of decentralized applications (dApps) like DEX (Decentralized Exchange), DAO (Decentralized Autonomous Organization), and others, using no-code tools such as those found on onout.org.

## Understanding Blockchain Types

Before we begin developing a blockchain, it's essential to recognize that there are three main types of blockchain networks: Bitcoin, Ethereum, and all others. In this article, we'll focus on creating a cryptocurrency based on a fork of Ethereum, which involves using the Ethereum client software to launch our own cryptocurrency. This approach simplifies the technical aspects, allowing us to concentrate on utilizing various tools to create a profitable cryptocurrency.

## Earning Through Cryptocurrency

The primary ways to profit from your cryptocurrency include listing your token on exchanges such as Uniswap and PancakeSwap, and engaging in mining. By creating and listing wrapped versions of your cryptocurrency, you allow others to purchase it, thereby increasing its value and liquidity. Additionally, mining plays a crucial role in earning revenue, as transactions within your blockchain will generate fees similar to Bitcoin's transaction fees.

## Step 1: Set Up a Private EVM Network

Two popular blockchains for over the time is Bitcoin and Ethereum. We will use Ethereum codebase sinse it's has a good ecosystem and most developer friendly. The foundation of your blockchain project is setting up a private EVM network. You can do this by deploying a public RPC (Remote Procedure Call) server using Geth, Ethereum's most popular client software. Geth allows you to run Ethereum nodes on your hardware, enabling you to create your own blockchain network that is separate from the main Ethereum network.

-VPS Server: Choose a reliable VPS (Virtual Private Server) provider like DigitalOcean, AWS, Google Cloud, or Microsoft Azure. that offers good uptime and support for Linux distributions, as Geth runs on Linux.

-Installing Geth: Follow a detailed guide to install Geth on your server. The Ethereum official website provides a comprehensive tutorial on setting up a private network (https://geth.ethereum.org/docs/fundamentals/private-network).

How to start the blockchain? Use this comand:

```geth --networkid 12345

```

You have build blockchain network with chainid 12345 . Please check on chainlist.com you don't have a dublicate of existing networkid .

## Step 2: Deploy BlockScout Explorer

Explorer is important part if you want to build your own blockchain. Once your private network is up and running, the next step is to deploy a BlockScout instance. BlockScout is an open-source blockchain explorer that allows you to view transaction details, wallet addresses, and smart contracts on your blockchain.

Installation: Follow the BlockScout documentation to install and configure your instance. This will require some technical knowledge, including setting up a PostgreSQL database and configuring the BlockScout application to connect to your private network.

## Step 3: Implement a Crosschain Bridge

A crosschain bridge is essential for transferring your native coins to other blockchains, such as Ethereum. This enables users to sell your tokens on platforms like Uniswap.

Bridge Software: There are several crosschain bridge solutions available. Research to find one that supports your blockchain and meets your security and functionality requirements.
Deployment: Follow the documentation provided by the bridge software to deploy and configure the bridge. This may involve smart contract deployment and setting up nodes on both your blockchain and the blockchain you wish to bridge to.

## Step 4: Deploy dApps Using No-Code Tools

Finally, to add utility and value to your blockchain, you'll want to deploy various dApps. Using no-code platforms like onout.org can significantly simplify this process.

- DEX: Deploy a decentralized exchange to enable trading of your native tokens and other cryptocurrencies without the need for a central authority. https://onout.org/dex
- DAO: Set up a decentralized autonomous organization to allow your community to vote on key decisions regarding the future of the blockchain. https://onout.org/dao
- Other dApps: Consider other dApps that could provide value to your users, such as lending platforms, NFT marketplaces, or gaming applications. https://onout.org/

Creating your own blockchain is a complex but achievable goal. By following the steps outlined above, you can set up a private EVM network complete with a public RPC server, a BlockScout explorer, a crosschain bridge, and various dApps. This endeavor requires a significant investment of time and resources but offers the potential for substantial rewards, including earning mining fees and establishing a new ecosystem for decentralized applications.

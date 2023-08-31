# Blockchain-enabled loyalty and rewards program for E-commerce platforms

### Flipkart Grid 5.0 Software Development Challenge 2023

<div align="center">
<img align="center" src="https://i.postimg.cc/YCLwbWZQ/page1.png" width="700">
<br/><br/>
<img align="center" src="https://i.postimg.cc/jjqmBnk8/grid5.png" width="700">
</div>
<br>
The objective is to develop a blockchain-enabled loyalty and rewards program for E-commerce
platforms, leveraging the advantages of blockchain technology to enhance security,
transparency, and user engagement.

### Objectives :

1. Develop a blockchain-based project to generate loyalty points as fungible tokens on the
   blockchain.
2. Define the tokenomics for the fungible tokens such as the value of tokens, and the
   number of tokens to be issued. Rules and regulations for the governance of treasury to be
   managed on a day-to-day basis should be also clearly defined.
3. The account settlement/reconciliation process of fungible tokens should be made more
   effective between Brands and E-commerce platforms, meaning settlements of fungible
   tokens should be simple and instant and should be recorded on-chain.
4. Define rules for earning fungible tokens based on user actions such as purchases,
   referrals, or social media interactions and distribute these fungible tokens to customers'
   digital wallets securely and transparently using blockchain transactions.
5. Platform partners or sellers should also be able to issue these fungible tokens to loyal
   customers.
6. Customers can then use their fungible tokens to earn rewards from sellers or partners,
   each being recorded on the blockchain for transparency and to prevent double-spending.
7. All the transactions revolving around fungible tokens should be recorded on-chain.
8. Build a user-friendly interface for users to manage their loyalty points, view available
   rewards, and track their progress. The interface should provide a clear overview of
   earned loyalty points, past transactions, and available redemption options.
9. You can use the Polygon blockchain to deploy your solution and demo the final product
   as a web prototype.

### Videos :

1. Working Demo : https://streamable.com/kzt1eh
<div align="center">
<a href="https://streamable.com/kzt1eh"><img align="center" src="https://i.postimg.cc/nz8X2mkW/workingdemo.png" width="700"></a>
</div>
<br>
<br>

2. Discussion : https://streamable.com/e5m5jn
<div align="center">
<a href="https://streamable.com/e5m5jn"><img align="center" src="https://i.postimg.cc/rmSKPpZw/discussion.png" width="700"></a>
</div>

### Proposed Solution

In essence, our proposed solution leverages the ERC20-based standard to create a
decentralized loyalty program. Users connect their wallets once, making rewards accessible
across various platforms. Purchases earn them Super Coins, which can be redeemed for
discounts during checkout. This approach offers an engaging and user-friendly loyalty
experience within your E-Commerce ecosystem.
<br>

1. User Wallet Integration: Users utilize their MetaMask wallet accounts to engage with the
loyalty program. Upon connecting to our Polygon network where the Super Coins smart
contract resides, their wallet displays their Super Coins balance.
2.  One-Time Wallet Connection: To enable seamless rewards synchronization across
various platforms (Web, Mobile - Android/iOS), users only need to connect their
MetaMask or compatible wallet account once. This public address is saved in our
database, facilitating consistent rewards across platforms.
3. Earn Rewards through Purchases: Users can accrue rewards by purchasing products on
our E-Commerce platform. Upon each purchase, we generate new Super Coins and
update the user's wallet balance accordingly.
4. Utilize Super Coins for Benefits: At the point of purchase, users can choose to redeem
their earned Super Coins for benefits. Depending on the quantity of Super Coins held,
users can enjoy discounts such as 10% or 20% off on products.

## Tech Stack 💻

---

### WEB 3.0 :

- Solidity <img width="15px" src = "https://raw.githubusercontent.com/Spyware007/FlipVerse/main/readme_assets/solidity.png">
  </div>
- Ethereum <img width="25px" src = "https://raw.githubusercontent.com/Spyware007/FlipVerse/main/readme_assets/ethereum.png">
  </div>

### Frontend :

<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">

### Backend :

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

### Designed On:

![Figma](https://img.shields.io/badge/Figma-FbbE99?style=for-the-badge&logo=figma&logoColor=white)

<!-- ### Retailers/Sellers Fucntions

The retailer address is recorded as a part of the smart contract's storage. An retailer has the right to create a new peoduct,issue a new warranty NFT with its respective metadata such as the product's serial number, the warranty's duration, etc. The administrator can also transfer their privileges to another administrator address.

### User Functions

A user of this smart contract can query the blockchain for the warranty NFTs under their possession. Additionally, a user may transfer any of their warranties that are not yet expired and still have remaining allowed transfers. A user can also delegate custody of a specified warranty NFT to another address. The delegate may then operate on the NFT as if they were the user with the original ownership.

### Brownie Points

- Polygon Blockchain is used to deploy our final solution
- NFTs are decaying in nature
- Geneative NFT are created as a way to ease the function of retailers to generate NFT everytime a warranty is issued to customer
- Usage of SoulBound NFT
- Adding any engagement/gamification construct to the loyalty program
- Warranty card is sent to user's mobile via SMS (twilio) and Email Address (Nodemailer)

### Setup the Metamask and Polygon RPC

##### The Smart Contracts are deployed on Polygon Matic

1. Install metamask extension from <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"> here</a>
2. Setup your RPC Network

<img src="https://i.postimg.cc/N0CPS74v/Whats-App-Image-2022-10-03-at-22-51-55.jpg" width="40%"/>
3. Add this RPC URL to your network - https://polygon-mumbai.g.alchemy.com/v2/Lya1zODZhjVryus4ZdFvXo2nxNee-4eq

### Installation Steps:

##### You need to clone the code file using github or download the zip folder from github desktop -->

## 1. Getting Started with Frontend

First, install the dependencies :

```bash
cd frontend
npm install
```

Then run it locally for development :

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 1. Getting Started with Backend

First, install the dependencies :

```bash
cd backend
npm install
```

Then run the server :

```bash
nodemon index.js
```

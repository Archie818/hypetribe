
# Intro 
HypeTribe is a collaborative social platform for the creation of digital art and user-generated content. Powered by Web3, it allows the integration of royalties, monetisation of raw data for AI training, and data ownership into the flows of SMM and digital co-creation.

## Key features
- Monetisation of raw data for AI training through Data DAOs
- AI-Proof of IP ownership through verification & NFT
- Inherent and editable Royalty feature right at creation
- Performance-based retrospective rewards for creators (to benefit proportionally from viral content)
- Fair copyright model 
- Art gets minted to NFT right at creation, making it uniquely identifiable and associated with the Creator
- Advanced and cross-platform social features, social graph for collaborations and recommendation services

HypeTribe is designed as a transformative ecosystem for digital content, leveraging cutting-edge technologies to address the pressing needs of the modern creators' community. It's a comprehensive solution with a marketplace for digital art and UGC and tools to create the art on the platform. It provides a collaborative space for artists and micro-influencers to forge connections and create together. By integrating blockchain technology for secure transactions, ownership rights, and a better reward system, HypeTribe aims to democratize digital content creation and management, making it more accessible and engaging. 



## Data DAO for creators & mirco-influencers to monetize raw data for AI training

Data DAOs emerge as a groundbreaking monetisation model, especially within the realms of influencers and user-generated content (UGC). It allows the community of content creators, influencers, and brands fans to manage, curate, and monetize datasets of raw data in a way that is fair, transparent, and directly beneficial to all stakeholders involved. This innovative approach fosters a more sustainable ecosystem for content creation and distribution, empowering creators and providing brands with access to rich, diverse datasets tailored for AI-driven analytics and personalized marketing strategies.

Smart contracts deployed on Calibration testnet
- DAO Deal address: "0xE28303aB1DDfAA05caad98f0197A20ebB82BF4d7",
- Governor Contract address: "0xA38282f67527F9e10262F7F9A85ec83d17219900",
- HypeTribeTKN address: "0xD596081aBa4D708AD1182911834764B72fc80195",
- TimeLock address: "0x741452c631B718074fC2B1398EbF78cA962B2030",

See repo for Filecoin details : [https://github.com/mrpejker/HypetribeDataDAO/blob/main/README.md
](https://github.com/mrpejker/HypetribeDataDAO)

![image](https://github.com/Archie818/hypetribe/assets/8280427/8837bb29-37e4-4497-8581-f10f14adf55b)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Techstack

- Next.js, T3 app
- Blockchain for Transactions (Arbitrum): Uses Arbitrum's efficient and low-cost transaction capabilities to facilitate easy minting, buying, and selling of NFTs, ensuring creators can focus on art without worrying about high fees.
  -Smart contracts:
  1) Bulk reward distribution based on activity and success 0x54555bc93926bD8EAF7cECE69542107B351A8550
  2) NFT minting using user input 0xb90fbA8CE772e896150d5d12E445bdDc301805641
     
-Circle (USDC payments) for more user-friendly system for small monetary rewards
- Digital Identity Verification (Worldcoin, IDKit): Implements Worldcoin's identity verification system to build a trustworthy community of verified human artists and collectors, enhancing platform security and integrity.
- Decentralized Profiles and Social Graph (Lens):  user-friendly, human-readable blockchain addresses for artist profiles, improving platform navigability and collaboration. 
- Decentralized Storage (IPFS/Filecoin):
    - NFT.Storage for IP-defended final content images
    - Data DAO on Filecoin for training data market

### Notable Implementation: 
One innovative aspect of HypeTribe is its use of smart contracts for transparent and automatic retroactive royalty distribution. This feature ensures that artists and creators receive their due royalties seamlessly from secondary sales, showcasing the platform's commitment to fair compensation for creators.

HypeTribe reimagines the digital art world as a more inclusive, secure, and collaborative space. It's not just a platform but a movement toward democratizing digital art creation and ownership, inviting artists and creators to join a vibrant, global community where art meets technology for mutual empowerment.


## Deployed on Vercel

Find the prototype here:  https://hypetribe.vercel.app/

Test repo with intermediate results https://github.com/mrpejker/hypetribe_tests

<img width="1425" alt="Screenshot 2024-03-16 at 16 47 03" src="https://github.com/Archie818/hypetribe/assets/8280427/7cf552f7-977e-4b92-add7-5882baca2865">
<img width="1330" alt="Screenshot 2024-03-17 at 00 40 30" src="https://github.com/Archie818/hypetribe/assets/8280427/5b82a9f3-ede1-4844-aef3-01e5153264e1">



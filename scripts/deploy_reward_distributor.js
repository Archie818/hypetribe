// scripts/deploy_reward_distributor.js

const { ethers } = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account:', deployer.address);

    const usdcAddress = '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d'; // The USDC contract address on the specified network
    const initialOwnerAddress = deployer.address; // The address that should be the initial owner

    const RewardDistributor = await ethers.getContractFactory('RewardDistributor');
    const rewardDistributor = await RewardDistributor.deploy(usdcAddress, initialOwnerAddress);

    console.log('RewardDistributor deployed to:', rewardDistributor.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

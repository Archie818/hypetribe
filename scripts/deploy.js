// scripts/deploy.js

async function main() {
    // Use the exact case as declared in your Solidity file for the contract
    const hypeTribeFactory = await ethers.getContractFactory("HypeTribe");

    // Deploy the contract
    const hypeTribe = await hypeTribeFactory.deploy();

    await hypeTribe.deployed();

    console.log("HypeTribe deployed to:", hypeTribe.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
});

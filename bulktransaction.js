// Import ethers library
const ethers = require('ethers');

// Define network and provider
const arbitrumTestnetRPC = "https://sepolia-rollup.arbitrum.io/rpc"
const provider = new ethers.JsonRpcProvider(arbitrumTestnetRPC);

// Wallet setup
const senderPrivateKey = "270c426ff7283af96b76a6d3b0e193eeb5f33d2dbba2df14e1161ee6960c6008"; // Use environment variables in production
const wallet = new ethers.Wallet(senderPrivateKey, provider);

// USDC contract setup on Arbitrum (this address should be for Arbitrum's network)
const usdcAddress = "0xaf88d065e77c8cC2239327C5EDb3A432268e5831";
const usdcAbi = ["function transfer(address to, uint amount) returns (bool)"];
const usdcContract = new ethers.Contract(usdcAddress, usdcAbi, wallet);

async function bulkTransfer(recipients) {
    for (const recipient of recipients) {
        const tx = await usdcContract.transfer(recipient.address, recipient.amount);
        console.log(`Transfer to ${recipient.address} submitted, TXID: ${tx.hash}`);
        // Wait for the transaction to be mined
        await tx.wait();
        console.log(`Transfer to ${recipient.address} completed.`);
    }
}

// Example recipients array
const recipients = [
    {address: "0x9AFB879CF36fA85C0c93EA7829Ef383c2832E2d0", amount: ethers.parseEther("10", 6)  },
    { address: "0x210109aD166f45aE6f005081DEF1AAb1bEEf5954", amount: ethers.parseEther("10", 6) },
    { address: "0xBe9000742CAd5bB3AdA2bcDFDDc3C501ce3a6111", amount: ethers.parseEther("10", 6) },
    { address: "0x1d3F0E06371792651b294da87173E0EdEEC39b4d", amount: ethers.parseEther("10", 6) },
    { address: "0x5dA941E95AA9eA450F7096b970e32c49e1426985", amount: ethers.parseEther("10", 6) },
    { address: "0xB31869602Ec923a8B0385EC39e8A26819B43D841", amount: ethers.parseEther("10", 6) },
    { address: "0xC2843Eb870FF8f9fcd417213c7dd29eF794863E8", amount: ethers.parseEther("10", 6) },
    { address: "0x5F83E9579E037EB5E93754B6f6026bb7143B2A98", amount: ethers.parseEther("10", 6) },
    { address: "00xe9010685eaceF77A8814Cc6E2148c24F3793aF38", amount: ethers.parseEther("10", 6) },
    { address: "0xa57b7053b23CEa577A7f43f57FA06818AaDA53e9", amount: ethers.parseEther("10", 6) }
  ];
  

bulkTransfer(recipients)
    .then(() => console.log("Bulk transfer completed."))
    .catch((error) => console.error("Error during bulk transfer:", error));
const ethers = require('ethers');

const arbitrumTestnetRPC = "https://sepolia-rollup.arbitrum.io/rpc";
const provider = new ethers.providers.JsonRpcProvider(arbitrumTestnetRPC);

async function checkNetwork() {
  const network = await provider.getNetwork();
  console.log(network); // Check if the network is recognized correctly
}

checkNetwork().catch(console.error);

// Wallet setup
const senderPrivateKey = "270c426ff7283af96b76a6d3b0e193eeb5f33d2dbba2df14e1161ee6960c6008"; // Use environment variables in production
const wallet = new ethers.Wallet(senderPrivateKey, provider);

// RewardDistributor contract setup
const rewardDistributorAddress = "0x54555bc93926bd8eaf7cece69542107b351a8550"; // Replace with your actual deployed contract address
const rewardDistributorAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "usdcAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "recipients",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "ratings",
          "type": "uint256[]"
        }
      ],
      "name": "distributeRewards",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "usdc",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
const rewardDistributorContract = new ethers.Contract(rewardDistributorAddress, rewardDistributorAbi, wallet);

async function distributeRewards(recipients) {
    const recipientAddresses = recipients.map(recipient => recipient.address);
    const ratings = recipients.map(recipient => ethers.utils.parseUnits(recipient.amount.toString(), 6)); // Assuming amount represents the rating
    
    const tx = await rewardDistributorContract.distributeRewards(recipientAddresses, ratings);
    console.log(`Distribution submitted, TXID: ${tx.hash}`);
    
    // Wait for the transaction to be mined
    await tx.wait();
    console.log("Rewards distribution completed.");
}

// Example recipients array
const recipients = [
    {address: "0x9AFB879CF36fA85C0c93EA7829Ef383c2832E2d0", amount: ethers.utils.parseUnits("10", 6)  },
    { address: "0x210109aD166f45aE6f005081DEF1AAb1bEEf5954", amount: ethers.utils.parseUnits("10", 6) },
    { address: "0xBe9000742CAd5bB3AdA2bcDFDDc3C501ce3a6111", amount: ethers.utils.parseUnits("10", 6) },
    { address: "0x1d3F0E06371792651b294da87173E0EdEEC39b4d", amount: ethers.utils.parseUnits("10", 6) },
    { address: "0x5dA941E95AA9eA450F7096b970e32c49e1426985", amount: ethers.utils.parseUnits("10", 6) },
    { address: "0xB31869602Ec923a8B0385EC39e8A26819B43D841", amount: ethers.utils.parseUnits("10", 6) },
    { address: "0xC2843Eb870FF8f9fcd417213c7dd29eF794863E8", amount: ethers.utils.parseUnits("10", 6) },
    { address: "0x5F83E9579E037EB5E93754B6f6026bb7143B2A98", amount: ethers.utils.parseUnits("10", 6) },
    { address: "00xe9010685eaceF77A8814Cc6E2148c24F3793aF38", amount: ethers.utils.parseUnits("10", 6) },
    { address: "0xa57b7053b23CEa577A7f43f57FA06818AaDA53e9", amount: ethers.utils.parseUnits("10", 6) }
  ];

distributeRewards(recipients)
    .then(() => console.log("Bulk distribution completed."))
    .catch((error) => console.error("Error during bulk distribution:", error));

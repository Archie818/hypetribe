const { ethers } = require('ethers');

function generateRandomAddresses(count) {
    let addresses = [];

    for (let i = 0; i < count; i++) {
        const wallet = ethers.Wallet.createRandom();
        addresses.push({ address: wallet.address, privateKey: wallet.privateKey });
    }

    return addresses;
}

const randomAddresses = generateRandomAddresses(10); // Generate 10 random addresses
console.log(randomAddresses);

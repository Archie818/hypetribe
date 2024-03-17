// MintNFT.js
import React from "react";
import { ethers } from "ethers";
import abi from "/contracts/HypeTribe.json";

const MintNFT = ({ fileURL }) => {
  const mintNFT = async () => {
    if (!window.ethereum) return alert("Please install MetaMask.");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []); // Request access to the user's ETH account
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      abi,
      signer
    );

    try {
      // Call the mint function of your smart contract
      const transaction = await contract.mint(
        fileURL /*, other necessary arguments */
      );
      await transaction.wait();
      alert("NFT minted successfully!");
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  return (
    <button
      onClick={mintNFT}
      className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
    >
      Create NFT
    </button>
  );
};

export default MintNFT;

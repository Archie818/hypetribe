require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0", // or whatever version you are using
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};


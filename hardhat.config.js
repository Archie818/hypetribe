require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20", 
  networks: {
    arbitrumSepolia: {
      url: process.env.L2_RPC, 
      accounts: [process.env.PRIVKEY]
    
}
  }
}

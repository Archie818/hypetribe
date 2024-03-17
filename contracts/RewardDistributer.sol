
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract RewardDistributor is Ownable {
    IERC20 public usdc;

    constructor(address usdcAddress, address initialOwner) Ownable(initialOwner) {
        usdc = IERC20(usdcAddress);
    }
 function distributeRewards(address[] calldata recipients, uint256[] calldata ratings) external onlyOwner {
        require(recipients.length == ratings.length, "Mismatch between recipients and ratings");

        uint256 totalRatings = 0;
        for (uint256 i = 0; i < ratings.length; i++) {
            totalRatings += ratings[i];
        } 
         uint256 rewardPool = usdc.balanceOf(address(this));
        require(rewardPool > 0, "Reward pool is empty");

        for (uint256 i = 0; i < recipients.length; i++) {
            uint256 reward = (rewardPool * ratings[i]) / totalRatings;
            usdc.transfer(recipients[i], reward);
        }
    }
}
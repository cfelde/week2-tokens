// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyERC20 is ERC20 {
    constructor() ERC20("My ERC-20", "ME20") {
        uint256 supply = 100 * 10 ** decimals();
        _mint(msg.sender, supply);
        console.log("Deployed My ERC-20 to", address(this), "with supply", supply);
    }

    function mint(uint256 supply) external {
        // TODO Implement this so that only the the account that originally deployed
        //      this contract can mint more tokens later by calling this function.
    }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyERC721 is ERC721 {
    uint private nextTokenId;

    constructor() ERC721("My NFT", "ME721") {
        _mint(msg.sender, nextTokenId++);
        console.log("Deployed My NFT to", address(this));
    }

    function mint() external {
        // TODO Implement this so that only the the account that originally deployed
        //      this contract can mint more tokens later by calling this function.
    }
}

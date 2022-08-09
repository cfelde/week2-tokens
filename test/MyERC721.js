const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("MyERC721", function () {
    describe("Deployment", function () {
        async function deployTokenFixture() {
            const MyERC721 = await ethers.getContractFactory("MyERC721");
            const myERC721 = await MyERC721.deploy();

            await myERC721.deployed();

            return myERC721;
        }

        it("Should deploy with default supply", async function() {
            const myERC721 = await loadFixture(deployTokenFixture);
            const [owner] = await ethers.getSigners();

            // Because NFTs are not divisible, we don't have any decimals to handle here
            expect(await myERC721.balanceOf(owner.address)).to.be.equal("1");
        });

        it("Should allow for increasing supply", async function() {
            const myERC721 = await loadFixture(deployTokenFixture);
            const [owner] = await ethers.getSigners();

            await myERC721.mint();

            expect(await myERC721.balanceOf(owner.address)).to.be.equal("2");
        });

        it("Should only allow owner to increase supply", async function() {
            const myERC721 = await loadFixture(deployTokenFixture);
            const [, otherAccount] = await ethers.getSigners();

            await expect(myERC721.connect(otherAccount).mint()).to.be.reverted;
        });
    });
});
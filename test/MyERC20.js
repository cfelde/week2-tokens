const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("MyERC20", function () {
    describe("Deployment", function () {
        async function deployTokenFixture() {
            const MyERC20 = await ethers.getContractFactory("MyERC20");
            const myERC20 = await MyERC20.deploy();

            await myERC20.deployed();

            return myERC20;
        }

        it("Should deploy with default supply", async function() {
            const myERC20 = await loadFixture(deployTokenFixture);

            // Because most ERC20 contracts use 18 decimal places, we expect the totalSupply()
            // function to return 100000000000000000000, which is comparable to 100.000000000000000000
            // if we operated with floating point numbers. But to ensure accuracy, we store token
            // amounts using integers, instead relying on fixed-point representation.
            expect(await myERC20.totalSupply()).to.be.equal("100000000000000000000");
        });

        it("Should allow for increasing supply", async function() {
            const myERC20 = await loadFixture(deployTokenFixture);

            await myERC20.mint("150000000000000000000");

            expect(await myERC20.totalSupply()).to.be.equal("250000000000000000000");
        });

        it("Should only allow owner to increase supply", async function() {
            const myERC20 = await loadFixture(deployTokenFixture);
            const [, otherAccount] = await ethers.getSigners();

            // TODO Implement test below

            // Hint: You can call a function from a different account by using connect:
            // await myERC20.connect(otherAccount).mint("150000000000000000000");
            // Hint: It's possible to test that something reverts by using:
            // expect(..).to.be.reverted;

            expect(false, "TODO").to.be.true;
        });
    });
});
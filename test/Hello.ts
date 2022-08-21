import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hello", function() {
    it("should say hello", async function() {
        // 1. setup
        // Hardhat compiled our contract
        const Hello = await ethers.getContractFactory("Hello")
        // 2. deploy contract
        const hello = await Hello.deploy();
        // 3. call functions to test
        await hello.deployed();
        const msg = await hello.hello()
        console.log(msg)
        expect(msg).to.equal("Hello, world!");
    })
})
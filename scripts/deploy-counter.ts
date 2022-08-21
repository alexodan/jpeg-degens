import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

export async function deploy() {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.deployed();
  return counter;
}

// @ts-ignore
async function count(counter) {
  await counter.increment();
  console.log("Count: " + (await counter.getCount()));
}

deploy().then(count);

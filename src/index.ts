import { ethers } from "ethers";
import CounterContract from "../artifacts/contracts/Counter.sol/Counter.json";

function getEth() {
  // @ts-ignore
  const eth = window.ethereum;
  if (!eth) {
    throw new Error("No Ethereum provider found");
  }
  return eth;
}

// connect with metamask
async function hasAccounts() {
  const eth = getEth();
  const accounts = (await eth.request({ method: "eth_accounts" })) as string[];
  return accounts && accounts.length > 0;
}

async function requestAccounts() {
  const eth = getEth();
  const accounts = (await eth.request({
    method: "eth_requestAccounts",
  })) as string[];
  return accounts;
}

async function run() {
  if (!(await hasAccounts()) && !(await requestAccounts())) {
    throw new Error("No accounts found");
  }
  const counter = new ethers.Contract(
    process.env.CONTRACT_ADDRESS, // where the contract is at
    CounterContract.abi, // the functions we want to call
    new ethers.providers.Web3Provider(getEth()).getSigner() // the provider we want to use
  );

  const countDOM = document.getElementById("count");
  const button = document.createElement("button");
  const body = document.querySelector("body");

  countDOM.innerHTML = await counter.getCount();

  button.textContent = "Increment";
  button.addEventListener("click", async function () {
    const tx = await counter.increment();
  });
  body.appendChild(button);

  // @ts-ignore
  counter.on(counter.filters.CounterIncreased(), function (count) {
    countDOM.innerHTML = count;
  });
}

run();

import { ethers } from "ethers";

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
    ["function getCount() public view returns (uint256)"], // the functions we want to call
    new ethers.providers.Web3Provider(getEth()) // the provider we want to use
  );
  console.log("COUNTER:", await counter.getCount());
  console.log("Done...");
}

run();

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint256 counter;

    // you can't get data from a writer function
    function increment() public {
        counter++;
        console.log("Counter is now: ", counter);
    }

    function getCount() public view returns (uint256) {
        return counter;
    }
}

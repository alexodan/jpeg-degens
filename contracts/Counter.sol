// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint32 counter;
    event CounterIncreased(uint32 counter);

    // you can't get data from a writer function
    function increment() public {
        counter++;
        emit CounterIncreased(counter);
    }

    function getCount() public view returns (uint32) {
        return counter;
    }
}

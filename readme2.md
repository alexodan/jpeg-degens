> git init

> yarn init -y

> yarn add -D hardhat

> npx hardhat

Choose the option _create an empty hardhat.config.js_

## Project structure

```yml
project
  - contracts
    - YourContracts.sol
    ...
  - scripts
    - deploy.ts
    ...
  - test
    - some-test.js
    ...
```

- Run `yarn add -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai`

- Change hardhat to ts file.

- Add `import "@nomiclabs/hardhat-waffle";` to hardhat.config.ts.

- Create a test under `test/Hello.ts` to test the contract.

- Add `scripts/deploy.ts` 

- Config metamask, grab private key from `npx hardhat node` list and import account.

- Add `webpack.config.js` (https://github.com/ThePrimeagen/jpegdegens/blob/master/webpack.config.js)

- Add more dependencies `yarn add -D webpack webpack-cli ts-loader html-webpack-plugin dotenv`

- 

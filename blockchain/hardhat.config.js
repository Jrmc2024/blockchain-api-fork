require("dotenv").config()

console.log('MAINNET_RPC => ', process.env.MAINNET_RPC);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 500,
      },
    },
    defaultNetwork: "hardhat",
    networks: {
      hardhat: {
        forking: {
          url: process.env.MAINNET_RPC,
          blockNumber: process.env.BLOCK_NUMBER
        },
      },
    },
  },
};

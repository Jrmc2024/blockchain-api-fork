require("dotenv").config()

console.log('MAINNET_RPC_FORK => ', process.env.MAINNET_RPC_FORK);

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
          url: process.env.MAINNET_RPC_FORK,
          blockNumber: process.env.BLOCK_NUMBER
        },
        chainId: 31337
      },
    },
  },
};

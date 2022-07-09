require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const privateKey =
  fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

const projectId = "z5WeBvw5Ax27nMIMxJJPr0NJULAz_oAc";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2//${projectId}`,
      accounts: [privateKey],
    },
    // mainnet: {
    //   url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
    //   accounts: [privateKey],
    // },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

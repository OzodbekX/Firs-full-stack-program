// require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/6QYTEebG4lNQ78lojkjUtyGXFjxT5PLB",
      accounts:["64909cb3742b2ba150337d806a4c6bf0b1e4e7e88b49edd636639692ac25d9ff"],
    }
  }
};
/*require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
}; */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

console.log("Loaded Private Key:", process.env.PRIVATE_KEY ? "✅ Exists" : "❌ MISSING");

if (!process.env.PRIVATE_KEY) {
  throw new Error("❌ PRIVATE_KEY is missing from .env file");
}

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY.trim()],
    },
  },
};

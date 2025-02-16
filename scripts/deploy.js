/*const hre = require("hardhat");

async function main() {
  const EventChain = await hre.ethers.getContractFactory("EventChain");
  const eventChain = await EventChain.deploy();

  await eventChain.deployed();
  console.log("EventChain deployed to:", eventChain.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); */

const hre = require("hardhat");

async function main() {
  const EventChain = await hre.ethers.getContractFactory("contracts/EventChain.sol:EventChain");
  const eventChain = await EventChain.deploy();
  
  await eventChain.deployed();
  console.log("EventChain deployed to:", eventChain.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

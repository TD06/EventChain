const fs = require("fs");
const path = require("path");

const metadataDir = path.join(__dirname, "../ipfs");

if (!fs.existsSync(metadataDir)) {
  fs.mkdirSync(metadataDir);
}

const metadata = {
  name: "EventChain Ticket #1",
  description: "Access to EventChain Event",
  image: "ipfs://QmXYZ...", // Change this with actual IPFS image CID
  attributes: [{ trait_type: "VIP", value: "true" }],
};

fs.writeFileSync(
  path.join(metadataDir, "ticket1.json"),
  JSON.stringify(metadata, null, 2)
);

console.log("✅ Metadata file generated: ipfs/ticket1.json");

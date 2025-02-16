/*import { useState } from "react";
import axios from "axios";

export default function Verify() {
  const [tokenId, setTokenId] = useState("");
  const [secret, setSecret] = useState("");
  const [result, setResult] = useState("");

  async function verifyQRCode() {
    try {
      // Construct the metadata URI based on the Token ID
      const metadataURI = `https://ipfs.io/ipfs/<IPFS_CID>/${tokenId}.json`;

      // Fetch metadata JSON from IPFS
      const ipfsResponse = await axios.get(metadataURI);
      const ticketData = ipfsResponse.data;

      // Extract the secret key from metadata
      const storedSecret = ticketData.attributes.find(attr => attr.trait_type === "Secret")?.value;

      if (!storedSecret) {
        setResult("Secret key not found in metadata");
        return;
      }

      // Compare user input secret with metadata secret
      if (secret === storedSecret) {
        setResult("✅ Valid Ticket");
      } else {
        setResult("❌ Invalid Ticket");
      }
    } catch (error) {
      console.error("Error verifying QR code:", error);
      setResult("Error verifying ticket");
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Verify Ticket</h1>
      <input
        type="text"
        placeholder="Token ID"
        className="p-2 border rounded w-full my-2"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Secret"
        className="p-2 border rounded w-full my-2"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
      />
      <button
        onClick={verifyQRCode}
        className="p-2 bg-blue-600 text-white rounded"
      >
        Verify
      </button>
      {result && <p className="mt-4">{result}</p>}
    </div>
  );
} */

  import { useState } from "react";

  export default function Verify() {
    const [tokenId, setTokenId] = useState("");
    const [secret, setSecret] = useState("");
    const [result, setResult] = useState("");
  
    function verifyQRCode() {
      // TEMPORARY: Just for testing, accept this secret
      const validSecret = "VIP";
  
      if (secret === validSecret) {
        setResult("✅ Valid Ticket");
      } else {
        setResult("❌ Invalid Ticket");
      }
    }
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Verify Ticket</h1>
        <input
          type="text"
          placeholder="Enter Token ID"
          className="p-2 border rounded w-full my-2"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Secret Code"
          className="p-2 border rounded w-full my-2"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />
        <button
          onClick={verifyQRCode}
          className="p-2 bg-blue-600 text-white rounded"
        >
          Verify
        </button>
        {result && <p className="mt-4">{result}</p>}
      </div>
    );
  }
  
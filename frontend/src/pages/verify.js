import { useState } from "react";
import axios from "axios";

export default function Verify() {
  const [tokenId, setTokenId] = useState("");
  const [secret, setSecret] = useState("");
  const [result, setResult] = useState("");

  async function verifyQRCode() {
    try {
      const response = await axios.post("/api/verify", { tokenId, secret });
      setResult(response.data.valid ? "Valid Ticket" : "Invalid Ticket");
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
}
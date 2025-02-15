import axios from "axios";

export async function verifyQRCode(tokenId, secret) {
  const response = await axios.post("/api/verify", { tokenId, secret });
  return response.data.valid;
}
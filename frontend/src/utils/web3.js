import { ethers } from "ethers";

export async function connectToMetaMask() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    return provider.getSigner();
  } else {
    throw new Error("MetaMask is not installed");
  }
}
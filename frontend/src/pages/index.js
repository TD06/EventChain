import { useState,useEffect } from "react";
import { ethers } from "ethers";
//import EventChain from "../artifacts/contracts/EventChain.sol/EventChain.json";
import EventChain from "E:/EventChain/artifacts/contracts/EventChain.sol/EventChain.json";
//import EventChain from "../constants/EventChain.json";


export default function Home() {
  const [ticketURI, setTicketURI] = useState("");
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  /*const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, EventChainABI, signer);
  async function mintTicket() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, EventChain.abi, signer);

      try {
        await contract.mintTicket(await signer.getAddress(), ticketURI);
        alert("Ticket minted successfully!");
      } catch (error) {
        console.error("Error minting ticket:", error);
      }
    }
  } */

    


    async function mintTicket() {
      if (typeof window.ethereum !== "undefined") {
        try {
          //const provider = new ethers.providers.Web3Provider(window.ethereum);
          const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, EventChain.abi, signer);
    
          console.log("Minting ticket...");
          const tx = await contract.mintTicket(await signer.getAddress(), ticketURI);
          await tx.wait();  // Wait for transaction to be confirmed
          console.log("✅ Ticket minted!", tx);
          alert("Ticket minted successfully!");
          
        } catch (error) {
          console.error("🚨 Error minting ticket:", error);
        }
      }
    }

      
    
    
    

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Mint Your Ticket</h1>
      <input
        type="text"
        placeholder="Enter Ticket Metadata URI"
        className="p-2 border rounded w-full my-2"
        value={ticketURI}
        onChange={(e) => setTicketURI(e.target.value)}
      />
      <button
        onClick={mintTicket}
        className="p-2 bg-blue-600 text-white rounded"
      >
        Mint Ticket
      </button>
    </div>
  );
}


/* import { useEffect, useState } from "react";
import { ethers } from "ethers";
//import EventChain from "../artifacts/contracts/EventChain.sol/EventChain.json";
import EventChain from "E:/EventChain/artifacts/contracts/EventChain.sol/EventChain.json";

export default function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  async function fetchTickets() {
    if (typeof window.ethereum !== "undefined") {
      //const provider = new ethers.providers.Web3Provider(window.ethereum);
      const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, EventChain.abi, signer);

      const ticketIds = await contract.balanceOf(await signer.getAddress());
      const ticketData = await Promise.all(
        Array.from({ length: ticketIds.toNumber() }).map(async (_, i) => {
          const tokenId = await contract.tokenOfOwnerByIndex(await signer.getAddress(), i);
          return contract.getTicket(tokenId);
        })
      );

      setTickets(ticketData);
    }
  }

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">My Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {tickets.map((ticket) => (
          <div key={ticket.tokenId} className="border p-4 rounded">
            <h2 className="text-xl">Ticket #{ticket.tokenId}</h2>
            <p>{ticket.isVIP ? "VIP Ticket" : "Standard Ticket"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}  */

  import { useEffect, useState } from "react";
  import { ethers } from "ethers";
  import EventChain from "E:/EventChain/artifacts/contracts/EventChain.sol/EventChain.json";
  
  export default function MyTickets() {
    const [tickets, setTickets] = useState([]);
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  
    async function fetchTickets() {
      if (typeof window.ethereum !== "undefined") {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          const userAddress = await signer.getAddress();
          const contract = new ethers.Contract(contractAddress, EventChain.abi, signer);
  
          // ✅ Fetch all owned tickets using new function
          const tokenIds = await contract.getTicketsByOwner(userAddress);
          if (tokenIds.length === 0) {
            console.log("No tickets found.");
            setTickets([]);
            return;
          }
  
          // ✅ Fetch metadata URIs for each ticket
          const ticketData = await Promise.all(
            tokenIds.map(async (tokenId) => {
              const metadataURI = await contract.tokenURI(tokenId);
              return { tokenId: tokenId.toNumber(), metadataURI };
            })
          );
  
          setTickets(ticketData);
        } catch (error) {
          console.error("Error fetching tickets:", error);
        }
      }
    }
  
    useEffect(() => {
      fetchTickets();
    }, []);
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">My Tickets</h1>
        {tickets.length === 0 ? (
          <p>No tickets found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {tickets.map((ticket) => (
              <div key={ticket.tokenId} className="border p-4 rounded">
                <h2 className="text-xl">Ticket #{ticket.tokenId}</h2>
                <p>Metadata URI: {ticket.metadataURI}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
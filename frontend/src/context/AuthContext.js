import { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setUser({ address, signer });
    } else {
      alert("Please install MetaMask!");
    }
  }

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setUser({ address: accounts[0] });
        } else {
          setUser(null);
        }
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, connectWallet }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
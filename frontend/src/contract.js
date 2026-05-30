import { ethers } from "ethers";
import abi from "./abi/SupplyChain.json";

const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;

export async function getContract() {
  if (!window.ethereum) throw new Error("MetaMask not found");

  await window.ethereum.request({ method: "eth_requestAccounts" });

  const provider = new ethers.BrowserProvider(window.ethereum);

  return new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
}
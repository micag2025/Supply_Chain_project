import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./abi/SupplyChain.json";

const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;

// =========================
// ROLE ADDRESSES
// =========================
const FARMER = process.env.REACT_APP_FARMER;
const DISTRIBUTOR = process.env.REACT_APP_DISTRIBUTOR;
const RETAILER = process.env.REACT_APP_RETAILER;

function App() {
  const [contract, setContract] = useState(null);

  const [wallet, setWallet] = useState("");
  const [role, setRole] = useState("");

  const [batchId, setBatchId] = useState(1);

  const [batch, setBatch] = useState(null);
  const [allBatches, setAllBatches] = useState([]);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [distributor, setDistributor] = useState("");
  const [retailer, setRetailer] = useState("");

  // =========================
  // SHORT ADDRESS
  // =========================
  function shorten(addr) {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  }

  // =========================
  // ROLE DETECTION
  // =========================
  function detectRole(address) {
    if (!address) return "";

    const addr = address.toLowerCase();

    if (addr === FARMER.toLowerCase()) return "FARMER";
    if (addr === DISTRIBUTOR.toLowerCase()) return "DISTRIBUTOR";
    if (addr === RETAILER.toLowerCase()) return "RETAILER";

    return "UNKNOWN";
  }

  // =========================
  // HANDLE ACCOUNT SWITCH
  // =========================
  useEffect(() => {
    if (!window.ethereum) return;

    async function handleAccountsChanged(accounts) {
      if (accounts.length === 0) return;

      const provider = new ethers.BrowserProvider(window.ethereum);

      const signer = await provider.getSigner();

      const address = accounts[0];

      const contractInstance = new ethers.Contract(
        CONTRACT_ADDRESS,
        abi,
        signer
      );

      setWallet(address);
      setRole(detectRole(address));
      setContract(contractInstance);

      await loadAllBatches(contractInstance);
    }

    window.ethereum.on("accountsChanged", handleAccountsChanged);

    return () => {
      window.ethereum.removeListener(
        "accountsChanged",
        handleAccountsChanged
      );
    };
  }, []);

  // =========================
  // CONNECT WALLET
  // =========================
  async function connectWallet() {
    try {
      if (!window.ethereum) {
        return alert("Install MetaMask");
      }

      const provider = new ethers.BrowserProvider(window.ethereum);

      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();

      const address = await signer.getAddress();

      const contractInstance = new ethers.Contract(
        CONTRACT_ADDRESS,
        abi,
        signer
      );

      setWallet(address);
      setRole(detectRole(address));
      setContract(contractInstance);

      await loadAllBatches(contractInstance);

    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  // =========================
  // LOAD ALL BATCHES
  // =========================
  async function loadAllBatches(instance) {
    if (!instance) return;

    const result = [];

    for (let id = 1; id <= 200; id++) {
      try {
        const data = await instance.getBatchReadable(id);

        result.push({
          id,
          name: data[0],
          quantity: data[1].toString(),
          state: data[2],
          farmer: data[3],
          distributor: data[4],
          retailer: data[5],
        });

      } catch {
        continue;
      }
    }

    setAllBatches(result);
  }

  // =========================
  // READ BATCH
  // =========================
  async function readBatch() {
    try {
      if (!contract) {
        return alert("Connect wallet first");
      }

      const data = await contract.getBatchReadable(Number(batchId));

      setBatch({
        name: data[0],
        quantity: data[1].toString(),
        state: data[2],
        farmer: data[3],
        distributor: data[4],
        retailer: data[5],
      });

    } catch (err) {
      console.error(err);
      alert("Batch not found");
    }
  }

  // =========================
  // CREATE BATCH (AUTO-ID)
  // =========================
  async function createBatch() {
    try {
      if (!contract) {
        return alert("Connect wallet first");
      }

      if (role !== "FARMER") {
        return alert("Only FARMER can create batch");
      }

      // =========================
      // FIND NEXT FREE ID
      // =========================
      let nextId = 1;

      while (true) {
        try {
          await contract.getBatchReadable(nextId);
          nextId++;
        } catch {
          break;
        }
      }

      // =========================
      // CLEAN ADDRESSES
      // =========================
      const cleanDistributor = ethers.getAddress(
        distributor.trim()
      );

      const cleanRetailer = ethers.getAddress(
        retailer.trim()
      );

      // =========================
      // CREATE
      // =========================
      const tx = await contract.createBatch(
        nextId,
        name,
        Number(quantity),
        cleanDistributor,
        cleanRetailer
      );

      await tx.wait();

      alert(`Batch created with ID ${nextId}`);

      // optional UI update
      setBatchId(nextId + 1);

      // reload table
      await loadAllBatches(contract);

      // clear form
      setName("");
      setQuantity("");
      setDistributor("");
      setRetailer("");

    } catch (err) {
      console.error(err);
      alert(err.reason || err.message);
    }
  }

  // =========================
  // SHIP BATCH
  // =========================
  async function shipBatch(id) {
    try {
      if (role !== "DISTRIBUTOR") {
        return alert("Only DISTRIBUTOR can ship");
      }

      const tx = await contract.shipBatch(id);

      await tx.wait();

      alert("Batch shipped");

      await loadAllBatches(contract);

    } catch (err) {
      console.error(err);
      alert(err.reason || err.message);
    }
  }

  // =========================
  // DELIVER BATCH
  // =========================
  async function deliverBatch(id) {
    try {
      if (role !== "RETAILER") {
        return alert("Only RETAILER can deliver");
      }

      const tx = await contract.deliverBatch(id);

      await tx.wait();

      alert("Batch delivered");

      await loadAllBatches(contract);

    } catch (err) {
      console.error(err);
      alert(err.reason || err.message);
    }
  }

  // =========================
  // UI
  // =========================
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🚀 Supply Chain Dashboard</h1>

      {/* CONNECT */}
      <button onClick={connectWallet}>
        Connect Wallet
      </button>

      {wallet && (
        <div>
          <p>
            <strong>Wallet:</strong> {shorten(wallet)}
          </p>

          <p>
            <strong>Role:</strong> {role}
          </p>
        </div>
      )}

      <hr />

      {/* READ */}
      <h2>📦 Read Batch</h2>

      <input
        value={batchId}
        onChange={(e) => setBatchId(e.target.value)}
        placeholder="Batch ID"
      />

      <button onClick={readBatch}>
        Read Batch
      </button>

      {batch && (
        <div>
          <h3>Batch Info</h3>

          <p><strong>Name:</strong> {batch.name}</p>
          <p><strong>Quantity:</strong> {batch.quantity}</p>
          <p><strong>State:</strong> {batch.state}</p>

          <p>
            <strong>Farmer:</strong> {shorten(batch.farmer)}
          </p>

          <p>
            <strong>Distributor:</strong> {shorten(batch.distributor)}
          </p>

          <p>
            <strong>Retailer:</strong> {shorten(batch.retailer)}
          </p>
        </div>
      )}

      <hr />

      {/* CREATE */}
      <h2>👨‍🌾 Create Batch</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <input
        placeholder="Distributor Address"
        value={distributor}
        onChange={(e) => setDistributor(e.target.value)}
      />

      <input
        placeholder="Retailer Address"
        value={retailer}
        onChange={(e) => setRetailer(e.target.value)}
      />

      <button
        onClick={createBatch}
        disabled={role !== "FARMER"}
      >
        Create Batch
      </button>

      <hr />

      {/* TABLE */}
      <h2>📊 Batch Overview</h2>

      <button onClick={() => loadAllBatches(contract)}>
        Refresh
      </button>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Qty</th>
            <th>State</th>
            <th>Farmer</th>
            <th>Distributor</th>
            <th>Retailer</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {allBatches.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.name}</td>
              <td>{b.quantity}</td>
              <td>{b.state}</td>

              <td>{shorten(b.farmer)}</td>
              <td>{shorten(b.distributor)}</td>
              <td>{shorten(b.retailer)}</td>

              <td>
                <button
                  onClick={() => shipBatch(b.id)}
                  disabled={
                    role !== "DISTRIBUTOR" ||
                    b.state !== "Created"
                  }
                >
                  🚚 Ship
                </button>

                <button
                  onClick={() => deliverBatch(b.id)}
                  disabled={
                    role !== "RETAILER" ||
                    b.state !== "Shipped"
                  }
                >
                  📦 Deliver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
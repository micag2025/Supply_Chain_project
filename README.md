# Option title  

Blockchain-Based Supply Chain Tracking System  
**Blockchain Supply Chain Monitoring and Tracking System** 
**Design and Implementation of a Decentralized Supply Chain dApp**  
**SupplyChain Dashboard: Smart Contract-Based Logistics Tracking**  
**Decentralized Supply Chain Management System Using Solidity and React**  
CoffeeChain: Farm-to-Retail Product Traceability dApp  
**Blockchain Supply Chain Tracker with React, Solidity, and MetaMask**  

---

## Overview  

The blockchain-based supply chain tracking project built with Solidity, MetaMask, React, Ethers.js, and Sepolia.

---

## Key Highlights   

- REAL production architecture  
- no scanning loop  
- event-driven UI (BatchCreated listener)  
- instant table updates  
- scalable indexing system  
- New batch ALWAYS appears  
- ReadBatch works immediately
- Table updates correctly

---

## Workflows  

In the full **Decentralized Application (DApp)** there are actually two different workflows:

### 1. Deployment workflow (Remix)

```
Solidity contract
   ↓
Remix deploy
   ↓
Ethereum blockchain
```

### 2. Runtime user workflow (the dApp)  / Application flow   

```
React UI
   ↓
ethers.js
   ↓
MetaMask
   ↓
Smart Contract
   ↓
Blockchain
```
---

## Architecture  

The system is a decentralized supply chain system where each role interacts with a smart contract through MetaMask, and all state changes are permanently recorded on the Ethereum blockchain.

```
                    ┌──────────────────────────┐
                    │        USER (UI)         │
                    │  React Dashboard (Web)   │
                    │                          │
                    │  - Connect Wallet        │
                    │  - Create Batch          │
                    │  - Read Batch            │
                    │  - Ship / Deliver        │
                    └─────────────┬────────────┘
                                  │
                                  │ ethers.js
                                  ▼
                    ┌──────────────────────────┐
                    │       MetaMask Wallet    │
                    │                          │
                    │ - Account 1 (Farmer)     │
                    │ - Account 2 (Distributor)│
                    │ - Account 3 (Retailer)   │
                    └─────────────┬────────────┘
                                  │
                                  │ JSON-RPC
                                  ▼
                    ┌──────────────────────────┐
                    │     Ethereum Network     │
                    │     (Sepolia Testnet)    │
                    └─────────────┬────────────┘
                                  │
                                  │ Smart Contract Calls
                                  ▼
        ┌──────────────────────────────────────────────┐
        │         SupplyChainBatch Smart Contract      │
        │                                              │
        │  - createBatch()                             │
        │  - shipBatch()                               │
        │  - deliverBatch()                            │
        │  - getBatchReadable()                        │
        │                                              │
        │  Storage:                                    │
        │  mapping(batchId → Batch struct)             │
        └───────────────┬──────────────────────────────┘
                        │
                        ▼
        ┌──────────────────────────────────────────────┐
        │               Blockchain State               │
        │                                              │
        │  Batch #1 → Created → Shipped → Delivered    │
        │  Batch #2 → Created → ...                    │
        └──────────────────────────────────────────────┘
```

### Why this architecture is good  
✔ Shows Web3 flow (UI → Wallet → Blockchain)  
✔ Demonstrates real decentralized architecture  

---

## Project Structure

```
supply-chain-dapp/
│
├── smart-contract/
│   │
│   ├── SupplyChainBatch.sol
│   │
│   ├── deployment/
│   │   ├── contract-address.txt
│   │   └── deployed-contract-info.md
│   │
│   └── abi/
│       └── SupplyChain.json
│
├── frontend/
│   │
│   ├── public/
│   │   ├── favicon.ico
│   │   └── index.html
│   │
│   ├── src/
│   │   │
│   │   ├── abi/
│   │   │   └── SupplyChain.json
│   │   │
│   │   ├── services/
│   │   │   └── contract.js
│   │   │
│   │   ├── utils/
│   │   │   └── address.js
│   │   │
│   │   ├── components/
│   │   │   ├── WalletSection.jsx
│   │   │   ├── ReadBatchSection.jsx
│   │   │   ├── CreateBatchSection.jsx
│   │   │   ├── BatchTable.jsx
│   │   │   └── RoleBadge.jsx
│   │   │
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── README.md
├── .gitignore
└── LICENSE
``` 

```
project/
│
├── contracts/
│   └── SupplyChainBatch.sol
│
├── frontend/
│   └── SupplyChainDashboard.jsx
│
├── package.json
└── README.md
```


✅ blockchain backend (.sol)
✅ frontend dashboard (React UI)

Together they form a **Decentralized Application (DApp)**  

Remix = smart contract development + quick testing
React/Web3 frontend = user interface that talks to the deployed contract

---

## Getting Started

### Prerequisites
Install:
- Node.js (>= 18)
- MetaMask browser extension
- Remix IDE (to deploy contract) ? 


**Remix** : smart contract development + quick testing
**React/Web3 frontend** : user interface that talks to the deployed contract

> _Note_: Remix and React/Web3 frontend work together  

### How Remix + React work together

Even if you deploy from Remix, your React frontend can still connect.

Step-by-step:  

#### 1. Deploy from Remix  

- Go to Deploy & Run Transactions    
- Select:    
  Environment: Injected Provider - MetaMask    
  Deploy contract    
  Copy the contract address    

#### 2. Copy ABI from Remix

In Remix:  
- Go to Compilation Details
- Copy `ABI`  
- Paste into:  

```bash
src/abi/SupplyChainBatch.json
```

#### 3. Use that address in React  

``` javascript
const CONTRACT_ADDRESS = "0xYourRemixDeployedAddress";
```

#### 🧱 STEP 1 — Deploy in Remix   

1. Open [Remix](https://remix.ethereum.org)  

2. Compile the (smart?) contract     
   - Paste `SupplyChainBatch.sol`    
   - Go to `Solidity Compiler`  
   - Click Compile  

3. Deploy  
  - Go to `Deploy & Run Transactions`  
  - Set `Environment: Injected Provider - MetaMask`

_Note_: Make sure MetaMask is on the correct network (e.g. `Sepolia` or local)

  - Click: Deploy

4. Copy  
📍 `Contract address`
Example: 0xA1b2C3... 
📦 `ABI`  
    - Go to Compilation Details → ABI → copy JSON  

#### STEP 2 — Create React App  

```bash
npm create vite@latest supplychain-ui -- --template react
cd supplychain-ui
npm install
npm install ethers
npm run dev
```



---

## Use Cases and Example

---

## UI Walkthrough & Example Runs  

### UI Web DApp

 ![Interface UI](Screenshots_UI/Screenshot_UI_interface.jpeg)


```
 [ CONNECT WALLET ]
        ↓
[ CONTRACT INITIALIZED ]
        ↓
────────────────────────
| READ | CREATE | TABLE |
────────────────────────
        ↓
[ SHIP / DELIVER FLOW ]
        ↓
[ LIVE DASHBOARD UPDATE ]
```




---

## Limitations & Workarounds

- ### Add More Supply Chain States

A current limitation of the application is that only 3 states exist (created, shipped, delivered, respectively). Adding more supply
chain states could allow a more granular traking and a better si,mulation of the real supply chains. 

```solidity
enum State {
    Created,
    Processed,
    Packaged,
    InTransit,
    Shipped,
    Delivered,
    Rejected
}
```
  
- ### QR Code / Traceability Integration  

Store QR hash, metadata link, and IPFS CID could allow several benefits such as consumers can scan products, real-world traceability    
and connection blockchain + frontend  

```solidity
string public ipfsHash;
```
---

## Contributing

Contributions are welcomed to improve the Supply_Chain! Suggested workflow:  

1. Fork the GitHub repository
2. Create a feature branch:
```bash
git checkout -b feat/your-feature
```
3. Commit and push your changes  
4. Submit a Pull Request and describe your contribution.  

Please follow the repository code style and add tests for major features.

---

## Future Implementations

Feel free to suggest more ideas by opening an issue or starting a discussion! For bug reports or feature requests, 
 [open an issue](https://github.com/micag2025/Supply_Chain_project/issues).  

-  ### Add Batch Expiration   

Benefits  
✔ Practical business value  
✔ Better inventory management  

 ---

## References 
- [Remix IDE](https://remix.live/)
- [Web3 Faucet](https://cloud.google.com/application/web3/faucet)
- [MetaMask](https://metamask.io/)
- [React](https://react.dev/)

---

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/micag2025/Supply_Chain_project/blob/main/LICENSE) file for details.

---

## Contact

If you encounter bugs, have questions, or want to request a new feature, please [open an issue](https://github.com/micag2025/Supply_Chain_project/issues) on this repository.  


---

## Acknowledgements


--- 
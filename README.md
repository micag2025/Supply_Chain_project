# Supply_Chain_project 

## Option titles  
Blockchain-Based Supply Chain Tracking System  
Decentralized Supply Chain Management Using Ethereum  
Smart Contract-Based Product Traceability Platform  
**Blockchain Supply Chain Monitoring and Tracking System**  
Ethereum-Powered Supply Chain Traceability Solution  
**Design and Implementation of a Decentralized Supply Chain dApp**  
ChainTrack: Blockchain-Based Supply Chain Traceability Platform  
TraceChain: Ethereum-Powered Product Tracking System  
**SupplyChain Dashboard: Smart Contract-Based Logistics Tracking**  
**Decentralized Supply Chain Management System Using Solidity and React**  
CoffeeChain: Farm-to-Retail Product Traceability dApp  
**Blockchain Supply Chain Tracker with React, Solidity, and MetaMask**  
End-to-End Product Tracking Platform on Ethereum  
Smart Contract Supply Chain Management Dashboard  


## Tags   
`Blockchain`, `Supply Chain Management`, `Solidity`, `Smart Contract`, `Sepolia`, `React`, `MetaMask`, `Ethereum` 



## Overview
The blockchain-based supply chain tracking project built with Solidity, MetaMask, React, Ethers.js, and Sepolia.

---

## Key Highlights   

---

## Workflows  

There are actually two different workflows:

### 1️⃣ Deployment workflow (Remix)

```
Solidity contract
   ↓
Remix deploy
   ↓
Ethereum blockchain
```

## 2️⃣ Runtime user workflow (the dApp)  / Application flow   

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
The full **Decentralized Application (DApp)** has been built up following the follow workflow: 

The full system architecture is shown in the following workflow diagram. Briefly, the system is a decentralized supply chain system where each role interacts with a smart contract through MetaMask, and all state changes are permanently recorded on the Ethereum blockchain

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
✔ Clear separation of layers  
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

---

## Use Cases and Example

---

## UI Walkthrough & Example Runs  

The  full UI becomes:

🧭 DASHBOARD  
- Wallet connection  
- Role detection  
📦 CREATE SECTION
- Farmer only  
📊 OVERVIEW TABLE
- all batches live  
🔍 READ BATCH
- search by ID  
🚚 ACTIONS (inside table)
- Ship (Distributor only)  
- Deliver (Retailer only)  


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
Current limitation Only 3 states exist.

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
Benefits  
✔ More granular tracking    
✔ Better simulation of real supply chains    

- ### QR Code / Traceability Integration
Upgrade idea

Store: QR hash, metadata link, IPFS CID

```solidity
string public ipfsHash;
```

Benefits  
✔ Consumers can scan products    
✔ Real-world traceability    
✔ Connects blockchain + frontend    


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



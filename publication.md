# Option title   

Blockchain-Based Supply Chain Tracking System    
**Blockchain Supply Chain Monitoring and Tracking System**   
**Design and Implementation of a Decentralized Supply Chain dApp**    
**SupplyChain Dashboard: Smart Contract-Based Logistics Tracking**    
**Decentralized Supply Chain Management System Using Solidity and React**    
CoffeeChain: Farm-to-Retail Product Traceability dApp    
**Blockchain Supply Chain Tracker with React, Solidity, and MetaMask**    

---

## Tags 

`Blockchain`, `Supply Chain Management`, `Solidity`, `Smart Contract`, `Sepolia`, `React`, `MetaMask`, `Ethereum` ,  `*Decentralized Application (DApp)`

---

## TL;DR

A step-by-step guide to build a simple React + Web3 frontend for a SupplyChainBatch smart contract will be given.  

---

## Key Highlights    

A simple **Decentralized Application (DApp)**  is built up that can:

- Connect MetaMask  
- Read batch data (`getBatchReadable`)  
- Create a batch (`createBatch`)  
- Ship batch (`shipBatch`)  
- Deliver batch (`deliverBatch`)  
- Show batch state in UI  


step-by-step guide to build a simple React + Web3 frontend for your SupplyChainBatch smart contract. The path `Remix → React Web3 frontend` has been used for the SupplyChainBatch smart contract. 

- **Remix** : smart contract development + quick testing
- **React/Web3 frontend** : user interface that talks to the deployed contract

> _Note_ : Remix and React/Web3 frontend work together. 

Briefly, the objective is to:  
- Deploy contract in Remix  
- Copy ABI + address  
- Paste into React app  
- Read/write blockchain from UI    

```
Remix (deploy)
     ↓
Ethereum contract
     ↓
ethers.js
     ↓
React UI
     ↓
MetaMask wallet  
```

🟦 Remix IDE

Remix can be considered as a `Smart Contract Laboratory`  and is used for:    
- writing Solidity    
- compiling contracts    
- deploying contracts    
- testing blockchain logic  

⚛️ React

React can be considered as `Website / App Interface` and is used for:  
- frontend UI  
- buttons/forms/tables  
- user interaction  
- MetaMask connection  


**How they connect**

```
Remix
   ↓ deploys contract
Ethereum / Sepolia blockchain
   ↑
React frontend connects here  
```  

To sum up, React never runs inside Remix. Instead:
- Remix deploys contract  
- Blockchain stores contract  
- React connects to that contract using:  
  - ABI   
  - contract address  

**The actual workflow** is: 

STEP 1 — Remix
The user do:  
- Write Solidity
- Compile
- Deploy
- Copy ABI
- Copy contract address  


STEP 2 — React
The user do:  
- Create React app  
- Install ethers.js  
- Paste ABI  
- Paste contract address  
- Connect MetaMask  
  
**Visual architecture** 

```
┌─────────────────┐
│     Remix IDE   │
│ Solidity Deploy │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Sepolia Network │
│ Smart Contract  │
└────────┬────────┘
         ▲
         │ ethers.js
┌────────┴────────┐
│   React App     │
│ Frontend UI     │
└─────────────────┘
```




---

## Core Capabilities  

Testing demonstrates that the following features have been verified:  
- Contract logic
- Role permissions
- State transitions 
- Dashboard rendering 
- Batch History Table updates 
- Blockchain-to-UI synchronization   

---

## Target Users & Use Cases  

TO BE DRAFTED 

---

## Architecture (High-Level)  

TO BE DRAFTED 

---

## Architecture Diagram (Deployment workflow and Application flow)

### Deployment workflow  

TO BE DRAFTED   

###  Runtime user workflow (the dApp)  / Application flow  

TO BE DRAFTED  

---

## Design Principles  

TO BE DRAFTED  

---

## Installation Instructions

This publication has a [GitHub code repository](https://github.com/micag2025/Supply_Chain_project.git) that is attached also under the Code section.  

### Prerequisites  

Install:
- Node.js (>= 18)
- MetaMask browser extension
- Remix IDE (to deploy contract) ?   

### Clone and install  

```bash   
git clone https://github.com/micag2025/Supply_Chain_project.git
cd Supply_Chain_project
```

### Environment variables  

Set environment variables (keys) in .env or your environment. See example `.env.example`.  

```bash  
REACT_APP_CONTRACT= YOUR_DEPLOYED_CONTRACT_ADDRESS  
```  
---

## Running the Application  

Launch the `UI Web Decentralized Application (DApp)`  / Get the app URL  
Start the UI Web DAapp  

```bash  
npm start
```

### Open in browser  

DApp will provide a local URL. Open it in your browser. The user can now interact with the Supply Chain Dashboard, from the UI Web DApp.  

### Understanding Advanced Instructions  

The dashboard is characterised by (This enhanced instruction pattern includes)    

✔ 1. **Dashboard (Selection role account?)**         
   - `Wallet connection`      
   - `Role detection`           

✔ 2. **Read Batch (manual lookup)**     
   - user enters an `ID (of the batch?)`      
   - fetches one batch directly from blockchain  
   - useful for `verification/debugging`  

✔ 3. **Overview Table (batch history)**    
   - `shows ALL batches`    
   - comes from scanning or events  
   - displays: `id`, `name`, `quantity`, `state`, `addresses`  

✔ 4. **Create Batch (Farmer)**  
   - creates `new batch on-chain`  
   - triggers `BatchCreated` event  
   - automatically updates table  

✔ 5. **Ship Batch (Distributor)**    
   - visible only if `wallet = distributor` and  `state = Created`  

✔ 6. **Deliver Batch (Retailer)**    
   - visible only if `wallet = retailer` and  `state = Shipped`  

> IMP Other option to describe the dashboard The  full UI becomes:

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
 

### Testing Instructions  

The application was tested on the Sepolia Ethereum Testnet using three MetaMask accounts (account1, account2, and account 3, respectively) representing the different supply chain participants/roles (Farmer, Distributor, and Retailer, respectively).

The smart contract and React frontend were successfully tested for:

✓ Batch creation
✓ Batch shipment
✓ Batch delivery
✓ Role-based access control
✓ Wallet-based authentication
✓ Duplicate ID prevention
✓ Invalid state transition rejection
✓ Unauthorized user rejection
✓ Read operations
✓ Blockchain state persistence

All tests were executed on the Sepolia Ethereum Test Network using MetaMask and Ethers.js. A full set of reproducible `Valid Tests Cases`
and `Invalid Tests Cases` is provided in the accompanying [GitHub repository](https://github.com/micag2025/Supply_Chain_project.git)   


---

## Examples Usage UI  

### UI Web DApp  

 ![Interface UI](https://github.com/micag2025/Supply_Chain_project/blob/c5307e39eb7c51ea98d939242a2308f948819f76/Screenshots_UI/Screenshot_UI_interface.jpeg)  

 ---

### Example 1: Valid Test Case: Read Batch and Create Batch (Farmer only)    

 ![Create_Read_Batch](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot_Create_and_ReadBatch.jpeg)  

 ---  

### Example 2: Valid Test Case: Action inside the overview table : Ship (Distributor only)       

![Distributor](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot3_Distributor.jpeg)  

---  

### Example 3: Valid Test Case: Action inside the overview table : Deliver (Retailer only)       

![Retailer](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot1_Retailer.jpeg)    

---  

### Example 4: Invalid Test Case: Unauthorized Shipment

Scenario

Farmer attempts to ship a batch.

Expected Result

Transaction reverted with role validation error.

Result ✓ Passed




## Limitations & Workarounds  

### Limitation of Remix

Remix is mainly for “Write → Deploy → Test quickly” and is not ideal for:  
- Full project structure
- Frontend integration testing
- Automated deployment pipelines
- Event indexing workflows


###  Limitation CRA

Nerverless CRA is fine for this project (Web3 dApp), it slower than `Vite` and older architecture.
Upgraded  Node.js and use : 

```bash
npm create vite@latest supplychain-ui -- --template react
cd supplychain-ui
npm install
npm install ethers
npm run dev
```  

### UI Web dApp Restrictions  

TO BE DRAFTED   

---  

## Contributing  

Contributions are welcomed to improve the UI Web dApp. Suggested workflow:  

1. Fork the GitHub repository  
2. Create a feature branch:    

```bash
git checkout -b feat/your-feature
```
3. Commit and push your changes  
4. Submit a Pull Request and describe your contribution  
5. Please follow the repository code style and add tests for major features

---  

## Future Implementations  

Contributors are welcomed to elp extend the system without compromising its architectural guarantees. The following items represent suggested and validated directions for future work.  

### Overcome the limitation of Remix: 
🧱 Production setup
Hardhat migration> Switch to `Hardhat`. The dApp can build up following the workflow: 

🔹 Phase 1 (use Remix)
Write contract
Test functions manually
Debug logic
🔹 Phase 2 (switch to Hardhat)
Deploy scripts
Local blockchain testing
Repeatable deployments
🔹 Phase 3 (React frontend)
Connect MetaMask
Build UI
Call contract functions

### Overcome the limitiation of CRA   
Upgraded  Node.js and use : 

```bash
npm create vite@latest supplychain-ui -- --template react
cd supplychain-ui
npm install
npm install ethers
npm run dev
```  

---  

## References  

- [Remix IDE](https://remix.live/)
- [Web3 Faucet](https://cloud.google.com/application/web3/faucet)
- [MetaMask](https://metamask.io/)
- [React](https://react.dev/)
- [Hardhat](https://hardhat.org/)  

---

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/micag2025/Supply_Chain_project/blob/main/LICENSE) file for details.

---

## Contact

michelaagostini73@gmail.com

---

## Acknowledgements  

TO BE DRAFTED


--- 

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

- Real production architecture  
- No scanning loop  
- Event-driven UI (BatchCreated listener)  
- Instant table updates  
- Scalable indexing system  
- New batch always appears  
- ReadBatch works immediately

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
- Remix IDE (to deploy contract)  


**Remix** : smart contract development + quick testing
**React/Web3 frontend** : user interface that talks to the deployed contract

> _Note_: Remix and React/Web3 frontend work together  

### How Remix + React work together

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

#### 3. Use that address (address of the compiled contract) in React  

``` javascript
const CONTRACT_ADDRESS = "YOUR_REMIX_DEPLOYED_CONTRACT_ADDRESS";
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
  - Click: Deploy  

_Note_: Make sure MetaMask is on the correct network (e.g. `Sepolia` or local)  
`Browser Extension (MetaMask)` is the option that works cleanly with the React frontend setup. Briefly:
- Remix connects directly to the MetaMask wallet  
- The user deploy to Ethereum testnet (Sepolia, etc.) or local network (if MetaMask is set up that way)  
- The contract address the user get is real and usable in React  

`Browser Extension`:
- Uses MetaMask  
- Best for real dApp development  
- Works with React + ethers.js  
- Deploys to real networks (Sepolia, Polygon, etc.)  

Since you're doing:  
```
Remix → React frontend → ethers.js
```

👉 Use: `Browser Extension`:

After selecting Browser Extension make sure MetaMask is set to `Sepolia testnet` 

```
Remix (Browser Extension)
        ↓
MetaMask signs deployment
        ↓
Contract deployed on blockchain
        ↓
React app uses contract address + ABI
```  

The `SupplyChainBatch contract` is deployed to `Sepolia testnet` (Ethereum test network)

4. Copy  
  - `Contract (deployed) address` : Example: 0xA1b2C3...   
  - `ABI` : Go to Compilation Details → ABI → copy JSON  

#### STEP 2 — Create React App (CRA)

Run:
```bash  
 npx create-react-app supplychain-ui  
 ```  

Go into project  
 ```bash  
 cd supplychain-ui  
 ```  

 Step 3 — Start app  
 ```bash  
 npm start  
 ```  

> _Note_ : The user will get 'http://localhost:3000`

Step 4 — Install ethers.js (Web3)  
```bash  
npm install ethers  
```  

```bash
npx create-react-app supplychain-ui  
cd supplychain-ui
npm install
npm install ethers
npm start
```  

#### STEP 3 — Add ABI  

- Create `src/abi/SupplyChain.json` (`frontend/src/abi/SupplyChain.json`)    
- Paste:  
```json  
{
  "abi": [ ...PASTE FROM REMIX... ]
}  
```  

The **ABI** is basically a translation sheet between JavaScript and the Solidity contract. It tells `ethers.js`:  
- what functions exist  
- what inputs they take  
- what outputs they return  
- whether they cost gas or are read-only  


#### STEP 4 — Connect contract 

Create `src/contract.js`  (`frontend/src/contract.js`)

#### STEP 5 — Minimal UI  

Replace `src/App.jsx` (`frontend/src/App.jsx`)


#### STEP 6 — Connect MetaMask

Open MetaMask, making sure that:
- MetaMask installed  
- MetaMask unlocked  
- Network = Sepolia  

> _Note_ : See [MetaMask Setup Guide](https://github.com/micag2025/Supply_Chain_project/blob/d97a5d881c09de6ddc8196ada4bce28e5219fa33/docs/metamask-setup.md)) for more details how to: 
          >- install MetaMask  
          >- Add the Sepolia Test Network  
          >- Create multiple accounts  
          >- How to Get Your MetaMask Address  
          >- Fund Accounts with Sepolia ETH  
          >- Switching Roles 


The browser console will automatically prompt when:
- The user click `Create Batch`    
- The user click `Read Batch` (read needs provider access)  
- The user click  `Ship` button within the table overview  
- The user click `Deliver` button within the table overview  

The above step by step guide can be diplayed as follow: 

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

You now have:

✔ Contract deployed via Remix
✔ React frontend connected to blockchain
✔ Create batch function working
✔ Read batch function working
✔ MetaMask integration


#### STEP 7 — Test it / Testing Instructions

You can test the enhanced multi-agent system using both valid and invalid prompts. A full set of reproducible test prompts and expected behaviors is provided in the accompanying 
GitHub repository





(without Create Batch button, Ship button and Deliver button)  

- Open `http://localhost:3000` or launch the application using `npm start`    
- Enter a batch ID that exists  
- Click `Read Batch`  
- MetaMask asks to connect wallet  
- Approve  

You should now see blockchain data in React.

You now have:

✔ Remix deployed smart contract
✔ React frontend
✔ ethers.js connection
✔ MetaMask integration
✔ Real blockchain interaction on Sepolia

```
React UI
   ↓
ethers.js
   ↓
MetaMask
   ↓
Sepolia blockchain
   ↓
Your Remix deployed contract
```

---

## Use Cases and Example  

#### Example 0 : (UI Web DApp)
Test it
- Open `http://localhost:3000` or launch the application using `npm start`    
- Enter a batch ID that exists  
- Click `Read Batch`  
- MetaMask asks to connect wallet  
- Approve  

You should now see blockchain data in React

### Example 1: Read Batch and Create Batch (Farmer only)  

In browser console or add button MetaMask will automatically prompt when:
- The user click `Create Batch`  
- The user click `Read Batch` (read needs provider access)  






---

## UI Walkthrough & Examples Usage UI  

### UI Web DApp  

  ![Interface UI](https://github.com/micag2025/Supply_Chain_project/blob/c5307e39eb7c51ea98d939242a2308f948819f76/Screenshots_UI/Screenshot_UI_interface.jpeg)   

 ---

### Example 1: Read Batch and Create Batch (Farmer only)    

 ![Create_Read_Batch](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot_Create_and_ReadBatch.jpeg)  

 ---  

### Example 2: Action inside the overview table : Ship (Distributor only)       

![Distributor](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot3_Distributor.jpeg)  

---  

### Example 3: Action inside the overview table : Deliver (Retailer only)       

![Retailer](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot1_Retailer.jpeg)      

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
- [Hardhat](https://hardhat.org/)    

---

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/micag2025/Supply_Chain_project/blob/main/LICENSE) file for details.

---

## Contact

If you encounter bugs, have questions, or want to request a new feature, please [open an issue](https://github.com/micag2025/Supply_Chain_project/issues) on this repository.  


---

## Acknowledgements


--- 

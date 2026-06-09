# Blockchain-Based Supply Chain Tracking System  

**Design and Implementation of a Decentralized Supply Chain dApp**

---  

## Overview

This repository contains the full implementation for the [publication **Blockchain-Based Supply Chain Tracking System: Design and Implementation of a Decentralized Supply Chain dApp**](https://github.com/micag2025/Supply_Chain_project/blob/82ee14f3f60f2c903befe6c108a32edf3032f0e6/publication.md), (TO BE CHANGED WITH READY TENSOR LINK) published on the [Ready Tensor](https://www.readytensor.ai/) platform.

This repository contains a full-stack implementation of a **blockchain-based supply chain tracking system** built with **Solidity**, **MetaMask**, **React**, **Ethers.js**, and the **Sepolia Testnet**.


A blockchain-based supply chain tracking system is built with **Solidity**, **MetaMask**, **React**, **Ethers.js**, and **Sepolia Testnet**. This **decentralized application (dApp)** enables transparent, immutable tracking of products from creation to delivery (from the point of origin to the final destination, and to verify the authenticity of products), leveraging **smart contracts** to enforce role-based access control and maintain a permanent audit trail on the Ethereum blockchain.  

A practical implementation of a full workflow, representing a **Complete Coffee Supply Chain Tracking System**, has been used as 
Test Scenario to build up the  **CoffeeChain: Farm-to-Retail Product Traceability dApp** that can be used to track batches from farm to retail and further to demonstrate real-world supply chain use cases.  


### Key Technologies

- **Smart Contract:** Solidity 0.8.x on Ethereum
- **Wallet Integration:** MetaMask
- **Frontend:** React + Ethers.js
- **Network:** Sepolia Testnet
- **Test Scenario:** Coffee Supply Chain (Farm-to-Retail)

### System Overview

The **CoffeeChain dApp** demonstrates a complete, real-world supply chain use case with three primary actors:

1. **Farmer** - Creates and originates batches
2. **Distributor** - Ships batches to retailers
3. **Retailer** - Delivers batches to end customers

All state changes are permanently recorded on the Ethereum blockchain, ensuring transparency and immutability.

---

## Key Highlights

- **Real production architecture** - Enterprise-ready dApp structure
- **Event-driven UI** - BatchCreated event listeners for real-time updates
- **Instant table updates** - Blockchain events trigger UI changes
- **Scalable indexing system** - Efficient batch retrieval and state management
- **Role-based access control** - 3 roles with enforced permissions
- **Gas-optimized** - Efficient smart contract design for cost reduction
- **Real-time operations** - Immediate batch visibility and contract interactions
- **Comprehensive validation** - Frontend and on-chain security layers

---

## Architecture  

### System Architecture Diagram

The system is a **decentralized supply chain system, (dApp)** where each role interacts with a **smart contract** through **MetaMask**, and all state changes are permanently recorded on the **Ethereum blockchain**.  

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

### Data Flow

```
React UI Validation
        ↓
MetaMask (User Approval)
        ↓
ethers.js (Web3 Library)
        ↓
Smart Contract (Role-Based Enforcement)
        ↓
Blockchain (State Persistence)
```
---

## Project Structure

```
supply-chain-dapp/
│
├── contracts/                  # Solidity smart contract project
│   │
│   ├── SupplyChainBatch.sol         # Main supply chain smart contract
│   │
│   ├── deployment/
│   │   ├── contract-address.txt     # Deployed contract address (Sepolia)
│   │   └── deployed-contract-info.md # Deployment details and metadata
│   │
│   └── abi/
│       └── SupplyChain.json         # Contract ABI generated from compilation
│
├── frontend/                        # React Web3 frontend
│   │
│   ├── public/
│   │   ├── favicon.ico              # Application icon
│   │   └── index.html               # Root HTML page
│   │
│   ├── src/
│   │   │
│   │   ├── abi/
│   │   │   └── SupplyChain.json     # ABI used by React frontend
│   │   │
│   │   ├── contract.js              # Blockchain connection utilities
│   │   │
│   │   ├── App.js                   # Main dashboard component
│   │   ├── App.css                  # Dashboard styling
│   │   ├── index.js                 # React application entry point
│   │   └── index.css                # Global CSS styles
│   │
│   ├── .env_example                 # Environment variables template
│   ├── package.json                 # Project dependencies and scripts
│   └── package-lock.json            # Locked dependency versions
│
├── README.md                        # Project documentation
├── .gitignore                       # Git ignored files and folders
│
├── Screenshots_UI/                  # Application screenshots
│   ├── Screenshot_Create_and_ReadBatch.jpeg
│   ├── Screenshot_invalid_wallet_role.jpeg
│   ├── Screenshot_read_non_existing_batch.jpg
│   ├── Screenshot_UI_interface.jpeg
│   ├── Screenshot1_Retailer.jpeg
│   └── Screenshot3_Distributor.jpeg
│
├── docs/                            # Additional documentation
│   └── metamask-setup.md            # MetaMask setup guide
│
└── LICENSE                          # Project license
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

**Components:**
- **Blockchain backend** - Solidity smart contract (`SupplyChainBatch.sol`)
- **Frontend dashboard** - React UI with Web3 integration
- **Together** - Form a complete Decentralized Application (DApp)

**Development Tools:**
- **Remix** - Smart contract development and quick testing
- **React/Web3 frontend** - User interface that communicates with the deployed contract via ethers.js

### Core Components

| Component | Purpose |
|-----------|---------|
| **SupplyChainBatch.sol** | Solidity smart contract with batch lifecycle management |
| **React Dashboard** | Web3-integrated UI for all supply chain operations |
| **contract.js** | Ethers.js utilities for blockchain interaction |
| **MetaMask Integration** | Wallet connection and transaction signing |

---

## Getting Started

### Prerequisites  

Ensure the following are installed:  

- **Node.js** : version >=18 [nodejs.org](https://nodejs.org/) |
- **MetaMask** : browser extension [metamask.io](https://metamask.io/)
- **Remix IDE** : online at [https://remix.ethereum.org](https://remix.ethereum.org))

### Environment Setup

| Component | Configuration |
|-----------|---------|
| **Blockchain Network** | Sepolia Testnet |
| **Wallet** | MetaMask |
| **Frontend Framework** | React + Ethers.js |
| **Smart Contract** | Solidity 0.8.x |
| **Deployment Tool** | Remix IDE |

---

## Step-by-Step Setup 

### STEP 1 — Deploy Smart Contract via Remix

1. **Open Remix IDE**
   - Navigate to [https://remix.ethereum.org](https://remix.ethereum.org)

2. **Create and Compile Contract**
   - Create a new file named `SupplyChainBatch.sol`
   - Paste your smart contract code
   - Go to **Solidity Compiler** tab
   - Select compiler version **0.8.x**
   - Click **Compile SupplyChainBatch.sol**

3. **Deploy to Sepolia Testnet**
   - Switch to **Deploy & Run Transactions** tab
   - Select **Environment**: `Injected Provider - MetaMask`
   - Ensure MetaMask is:
     - Unlocked  
     - Connected to **Sepolia Testnet**  
   - Click **Deploy** button
   - Approve the transaction in MetaMask

4. **Save Deployment Details**
   - Copy the **Deployed Contract Address** (e.g., `0xA1b2C3...`)
   - Go to **Compilation Details**
   - Copy the entire **ABI** (JSON format)
   - Save both for the React frontend setup

> **Why Injected Provider - MetaMask?**
> - Direct connection to your MetaMask wallet
> - Deploys to live networks (Sepolia, Polygon, etc.)
> - Generates real, usable contract addresses
> - Industry best practice for dApp development

**About the ABI:** The ABI (Application Binary Interface) is a JSON specification that defines:
- All available smart contract functions
- Function inputs and outputs
- Gas requirements (state-changing vs. read-only)
- Enables ethers.js to encode/decode contract calls
  
---

### STEP 2 — Create React App (CRA)

Run the following commands:

```bash
npx create-react-app supplychain-ui  
cd supplychain-ui
npm install
npm install ethers
npm start
```
---  

### STEP 3 — Add Contract ABI  

**Create file:** `src/abi/SupplyChain.json`

```json
{
  "abi": [ ...PASTE_ABI_FROM_REMIX_HERE... ]
}
```

---

###  STEP 4 — Create Contract Service   

**Create file** `src/contract.js` to handle contract interactions

```javascript
import { ethers } from "ethers";
import abi from "./abi/SupplyChain.json";

const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;

export async function getContract() {
  if (!window.ethereum) throw new Error("MetaMask not found");

  await window.ethereum.request({ method: "eth_requestAccounts" });

  const provider = new ethers.BrowserProvider(window.ethereum);

  return new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
}
```
---  

### STEP 5: Build UI Components  

Replace `src/App.jsx` with your React components. Key components:

- **WalletSection** - Connect/disconnect MetaMask  
- **CreateBatchSection** - Form for batch creation (Farmer only)  
- **ReadBatchSection** - Query batch details  
- **BatchTable** - Display all batches with (Ship/Deliver) action buttom  
- **RoleBadge** - Show connected user's role  

TO BE ENCLOSED  
``` javascript
const CONTRACT_ADDRESS = "YOUR_REMIX_DEPLOYED_CONTRACT_ADDRESS";
```
---

### STEP 6: Connect MetaMask  

1. Install [MetaMask browser extension](https://metamask.io/)
2. Create or import wallet
3. Switch network to **Sepolia Testnet**
4. See [MetaMask Setup Guide](https://github.com/micag2025/Supply_Chain_project/blob/d97a5d881c09de6ddc8196ada4bce28e5219fa33/docs/metamask-setup.md) for detailed step

### MetaMask Prompt

MetaMask will automatically prompt when:  

- ✓ Clicking "Connect Wallet"  
- ✓ Clicking "Create Batch" (state-changing transaction)  
- ✓ Clicking "Read Batch" (if provider access is needed)  
- ✓ Clicking "Ship" button in table  
- ✓ Clicking "Deliver" button in table  

---  

### Setup Summary  

```
Step 1: Deploy Contract via Remix
         ↓
Step 2: Create React App
         ↓
Step 3: Add Contract ABI
         ↓
Step 4: Create Contract Service (ethers.js)
         ↓
Step 5: Build UI Components
         ↓
Step 6: Configure MetaMask & Connect
         ↓
✅ Ready to Test!
```

**Success Checklist**

- ✓ Contract deployed via Remix on Sepolia  
- ✓ React frontend created and running locally  
- ✓ ethers.js properly configured with contract address and ABI  
- ✓ MetaMask connected to React application  
- ✓ Create batch function working end-to-end  
- ✓ Read batch function retrieving data  
- ✓ Ship and Deliver functions updating state  

---

## Testing & Evaluation  

### Test Accounts Setup

Three MetaMask accounts simulate the supply chain actors:

| Role | Account | Permissions | Required ETH | Purpose |
|------|---------|-------------|--------------|---------|
| **Farmer** | Account 1 | Create batches | 0.05 | Deploy + Create batches |
| **Distributor** | Account 2 | Ship batches | 0.01 | Execute shipment transactions |
| **Retailer** | Account 3 | Deliver batches | 0.01 | Execute delivery transactions |

> Get free Sepolia ETH from [Google Cloud Web3 Faucet](https://cloud.google.com/application/web3/faucet)

>_Note_ See [MetaMask Setup Guide](https://github.com/micag2025/Supply_Chain_project/blob/d97a5d881c09de6ddc8196ada4bce28e5219fa33/docs/metamask-setup.md) for more details. 

### Comprehensive Test Coverage  

The smart contract and React frontend have been tested for:  

#### Core Functionality  

- ✓ **Batch creation** - Farmer can create new batches  
- ✓ **Batch shipment** - Distributor can ship created batches  
- ✓ **Batch delivery** - Retailer can deliver shipped batches
- to be added  
-  ✓ **Event emission** - All contract events properly emitted     
- ✓ **Read- only operations** - All view functions return correct data

 ####  Security & Validation    

- ✓ **Role-based access control** - Only authorized roles can perform actions  
- ✓ **Wallet-based authentication** - Connected MetaMask account determines role  
- ✓ **Duplicate ID prevention** - Cannot create batch with existing ID  
- ✓ **Invalid state transition rejection** - Cannot skip states (e.g., deliver without shipping)  
- ✓ **Unauthorized user rejection** - Wrong role cannot perform action
- ✓ **Form validation** - Missing fields prevented at UI layer
- ✓ **Network validation** - Wrong network prevented before transaction  

#### Data & Persistence

- ✓ **Blockchain state persistence** - Data remains after page refresh
- ✓ **Dashboard data integrity** - UI reflects blockchain state accurately
- ✓ **Transaction handling** - UI waits for confirmation before updating
- ✓ **Gas optimization** - Transactions execute efficiently 

---  

TO BE ENCLOSED? All (valid and invalid) tests were executed on the **Sepolia Ethereum Test Network** using **MetaMask** and **Ethers.js**.


### Valid Test Cases (Executed)

| Test ID | Test Case                      | Description                                 | Expected Result                                        | Status |
| ------- | ------------------------------ | ------------------------------------------- | ------------------------------------------------------ | ------ |
| TC-001  | MetaMask Connection            | Connect wallet through MetaMask             | Wallet connected and displayed in dashboard            | ✅ Pass |
| TC-002  | Batch Creation                 | Farmer creates a new batch                  | Batch created successfully with state = Created        | ✅ Pass |
| TC-003  | Read Batch                     | Retrieve an existing batch                  | Batch details returned correctly                       | ✅ Pass |
| TC-004  | Batch Shipment                 | Distributor ships a created batch           | State changes from Created to Shipped                  | ✅ Pass |
| TC-005  | Batch Delivery                 | Retailer delivers a shipped batch           | State changes from Shipped to Delivered                | ✅ Pass |
| TC-006  | Batch History Table Loading    | Load existing batches from blockchain       | All batches displayed in overview table                | ✅ Pass |
| TC-007  | Batch History Refresh          | Refresh dashboard after transaction         | Table updated with latest blockchain state             | ✅ Pass |
| TC-008  | Newly Created Batch Visibility | Create a new batch from dashboard           | New batch appears in table                             | ✅ Pass |
| TC-009  | Shipment Status Update         | Ship an existing batch                      | Table reflects Shipped status                          | ✅ Pass |
| TC-010  | Delivery Status Update         | Deliver a shipped batch                     | Table reflects Delivered status                        | ✅ Pass |
| TC-011  | Batch Lookup                   | Search using batch ID                       | Full batch details displayed                           | ✅ Pass |
| TC-012  | Role Detection                 | Connect different MetaMask accounts         | Correct role displayed (Farmer, Distributor, Retailer) | ✅ Pass |
| TC-013  | Role-Based Visibility          | Login using different roles                 | Only authorized actions available                      | ✅ Pass |
| TC-014  | Blockchain State Persistence   | Refresh browser after transactions          | Data remains available on-chain                        | ✅ Pass |
| TC-015  | Address Masking                | Display participant addresses               | Addresses shown in shortened format                    | ✅ Pass |
| TC-016  | Event Emission                 | Execute contract actions                    | Corresponding blockchain event emitted                 | ✅ Pass |
| TC-017  | Read-Only Access               | Read batch information using view functions | Data retrieved without gas fee or transaction          | ✅ Pass |

---

### Validation and Error Handling Tests (Executed)  

TO BE EXCLUDED > This reflects that many invalid actions are prevented by the React UI before a blockchain transaction is attempted.

| Test ID | Test Case                              | Description                                                    | Expected Result                                                                    | Status |
| ------- | -------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------ |
| TC-018  | Automatic Batch ID Generation          | User creates multiple batches from the dashboard               | System automatically assigns the next available batch ID and prevents duplicates   | ✅ Pass |
| TC-019  | Unauthorized Shipment Prevention       | Farmer views a batch in Created state                          | Ship button remains disabled and shipment cannot be initiated                      | ✅ Pass |
| TC-020  | Unauthorized Delivery Prevention       | Distributor views a batch in Shipped state                     | Deliver button remains disabled and delivery cannot be initiated                   | ✅ Pass |
| TC-021  | Unauthorized Batch Creation Prevention | Retailer or Distributor accesses the dashboard                 | Create Batch functionality unavailable for unauthorized roles                      | ✅ Pass |
| TC-022  | Invalid State Transition Prevention    | Retailer attempts to deliver a batch still in Created state    | Deliver action unavailable until batch reaches Shipped state                       | ✅ Pass |
| TC-023  | Read Non-Existing Batch                | User searches for a batch ID that does not exist               | Error message displayed and no batch data returned                                 | ✅ Pass |
| TC-024  | Empty Batch Table Entries              | Dashboard scans unused batch IDs during table loading          | Invalid entries ignored and not displayed in the overview table                    | ✅ Pass |
| TC-025  | Invalid Wallet Role Detection          | Wallet address does not match Farmer, Distributor, or Retailer | Role displayed as UNKNOWN and restricted actions unavailable                       | ✅ Pass |
| TC-026  | Empty Input Validation                 | User submits Create Batch form with missing required fields    | Form validation prevents submission and displays an error message                  | ✅ Pass |
| TC-027  | MetaMask Connection Loss               | User disconnects MetaMask while using the dashboard            | Dashboard displays "Not Connected" status and disables actions                     | ✅ Pass |
| TC-028  | Network Validation                     | User switches from Sepolia to an unsupported network           | Warning displayed and transaction buttons disabled                                 | ✅ Pass |
| TC-029  | Transaction Confirmation Handling      | User initiates a blockchain transaction                        | Application waits for confirmation and updates the UI only after successful mining | ✅ Pass |
| TC-030  | Read-Only Access Without Transaction   | User reads batch information from blockchain                   | Data retrieved successfully without requiring gas fees or transaction submission   | ✅ Pass |

---  

### Validation Coverage Summary  

| Feature                     | Covered |
| --------------------------- | ------- |
| Automatic ID Management     | ✅       |
| Frontend Role Enforcement   | ✅       |
| State Transition Validation | ✅       |
| Form Validation             | ✅       |
| Wallet Validation           | ✅       |
| Network Validation          | ✅       |
| Batch Lookup Validation     | ✅       |
| Dashboard Data Integrity    | ✅       |
| Transaction Handling        | ✅       |
| Read-Only Blockchain Access | ✅       |


> _Note_ Many invalid actions are stopped at the React UI layer, which is preferable to letting them reach the blockchain and revert. This demonstrates a better user experience and avoids unnecessary gas consumption.

```  
React UI Validation
        ↓
MetaMask
        ↓
ethers.js
        ↓
Smart Contract  
```  
---  

### End-to-End Scenario: Coffee Supply Chain  

This scenario simulates a complete lifecycle of a batch across the supply chain, demonstrating role-based actions and blockchain state transitions.  
This scenario demonstrates a complete batch lifecycle:

#### Day 1 - Farmer Creates Batch  

- **Actor:** Farmer logs in Account 1  
- **Action:** Creates batch
- **Details:**: ID=1, Name="Coff", Quantity=1000kg  
- **Result:** Batch state = **Created**  
- **Timestamp:** 2026-06-04 10:00 UTC

#### Day 2 - Distributor Ships Batch  

- **Actor:** Distributor logs in Account 2
- **Action:** Clicks Ship buttom
- **Result** Batch state = **Shipped**
-- **Result:** Distributor address recorded on-chain
- **Timestamp:** 2026-06-05 14:30 UTC

#### Day 5 - Retailer Delivers Batch  

- **Actor:** Retailer logs in Account 3
- **Action:** Clicks Deliver buttom
- **Result** Batch state recorded as **Delivered**
- **Recorded** Retailer address recorded on-chain
- **Timestamp:** 2026-06-08 09:15 UTC  

**(Batch Lookup) Verification**  
- **Lookup** Any user can search batch ID=1
- **Full lifecycle** Created by Farmer → Shipped by Distributor → Delivered by Retailer
- **Total Duration:** 8 days
- **Transparency:** Complete traceability via blockchain immutability

---

## UI Walkthrough (& Examples Usage UI)  

### Application Interface Overview

  ![Interface UI](https://github.com/micag2025/Supply_Chain_project/blob/c5307e39eb7c51ea98d939242a2308f948819f76/Screenshots_UI/Screenshot_UI_interface.jpeg)   

**Dashboard Components:**  

- **Wallet Connection Panel** - Shows connected account and detected role
- **Create Batch Section** - Form for creating new batches (Farmer only)
- **Read Batch Section** - Query existing batch details by ID
- **Batch History Table** - Complete batch list with status and action buttons
- **Status Indicators** - Real-time batch state display

 ---

### Example 1: Create and Read Batch (Farmer Only)

 ![Create_Read_Batch](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot_Create_and_ReadBatch.jpeg)  

**Steps to Test:**  

1. Open http://localhost:3000 (or run npm start)  
2.  Ensure MetaMask is connected with **Farmer** account  
3. In the **Create Batch Section**:  
   - Batch ID auto-generates (e.g.:"3") 
   - Enter Product Name (e.g., "cof_batch")
   - Enter quantity
   - Enter Distributor account address
   - Enter Retailer account address
   - Click **Create Batch**    
4. Approve transaction in MetaMask  
5. Wait for confirmation  
6. New batch appears in Batch History Table

  **Read Batch:**

1. Go to **Read Batch Section**
2. Enter Batch ID you just created
3. Click **Read Batch**
4. Batch details display below

**Expected Outcome:**  

- Batch created with state "Created"
- Batch readable immediately after creation
- All fields display correctly (ID, name, farmer, state)
- Creation timestamp recorded on blockchain 

 ---  

### Example 2: Ship Batch (Distributor only)      

![Distributor](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot3_Distributor.jpeg) 

![Table_overview_distributor](https://github.com/micag2025/Supply_Chain_project/blob/f8c24ec757ba11fd7fa719b683bdf777bb1651d6/Screenshots_UI/Table_overview_distributor.jpeg)

**How to Test:**  

1. Switch MetaMask to **Distributor** account  
2. In **Batch History Table**, locate a batch with state "Created"  (e.g.Batch ID = 3) 
3. Click **Ship** button next to the batch  
4. Approve transaction  in MetaMask  
5. Wait for confirmation  
6. Table updates automatically  (see above updated table overview)
7. Batch state changes from "Created" → "Shipped"  

**Expected Outcome:**  

- ✓ Only Distributor can ship batches  
- ✓ State transitions correctly     
- ✓ Distributor address recorded on chain
- ✓ Table updates in real-time    
- ✓ Farmer account cannot ship (buttom disabled)    

---  

### Example 3: Deliver Batch (Retailer only)   

![Retailer](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot1_Retailer.jpeg)  

![Updated_table2](https://github.com/micag2025/Supply_Chain_project/blob/1c2af8767725888cff953dfe8555bf92185d9e0d/Screenshots_UI/Updated_table2_retailer.jpeg)

**How to Test:**  

1. Switch MetaMask to **Retailer** account    
2. In **Batch History Table**, find batch with state "Shipped"  (e.g.Batch ID = 3) 
3. Click **Deliver** button     
4. Approve transaction in MetaMask
5. Wait for confirmation
6. Table updates automatically
7. Batch state changes: "Shipped" → "Delivered"   

**Expected Outcome:**  

- ✓ Only Retailer can deliver batches  
- ✓ State transitions correctly from "Shipped" to "Delivered"   
- ✓ Retailer address recorded on-chain  
- ✓ Table reflects state change instantly  
- ✓ Distributor account cannot deliver (buttom disabled)  

---  

###  Example 4: Invalid Wallet Role Error

![Invalid Wallet Role](https://github.com/micag2025/Supply_Chain_project/blob/01155a7bb9d825bc91c683d5670fc76d14fa4bff/Screenshots_UI/Screenshot_invalid_wallet_role.jpeg)  

**Scenario:** Distributor attempts to create a batch  

**Steps to Test:**   

1. Connect with **Distributor** account
2. In **Create Batch Section**, attempt to create batch
3. Observe: **Create Batch button is disabled**  
  
**Expected Result:**  

- ✓ "Create Batch" action unavailable for non-Farmers
- ✓ UI prevents unauthorized action (no transaction sent)  
- ✓  No state change occurs (Clear role indication in interface)
- ✓  No gas consumed (prevented at UI layer)  

---  

###  Example 5: Read Non-Existing Batch Error   
  
![Read Non-Existing Batch](https://github.com/micag2025/Supply_Chain_project/blob/01155a7bb9d825bc91c683d5670fc76d14fa4bff/Screenshots_UI/Screenshot_read_non_existing_batch.jpg) 

**Scenario:** User searches for non-Existing batch

**How to Test:**  

1. Go to **Read Batch Section**
2. Enter non-existent batch ID (e.g., ID = 999)
3. Click **Read Batch**

**Expected Result:**

- ✓ Error message displayed (e.g., "Batch not found")
- ✓ No invalid data returned
- ✓ User-friendly error formatting
- ✓ No gas consumed (read-only call)

---  

## Limitations & Future Improvements  

### Limitation 1: Remix IDE Constraints

**Current Limitation**:  

Remix is designed for quick development and testing but has limitations for production:  

- Limited project management capabilities  
- No integrated frontend testing  
- Manual deployment workflows  
- Difficult for complex development workflows  
    
**Recommendation:** Migrate to Hardhat for production environments

```bash
npm install --save-dev hardhat
npx hardhat init
```

**Hardhat Benefit:** 

- ✓ Local development network  
- ✓ Automated testing framework  
- ✓ Gas optimization analysis  
- ✓ Network deployment scripting  
- ✓ Contract verification on block explorers  

---

### Limitation 2: Create React App Performance  

**Current Limitation:** 
- Slower build times
- Larger bundle size
- Older tooling architecture  

**Recommendation:** Upgrade to Vite  

```bash
npm create vite@latest supplychain-ui -- --template react
cd supplychain-ui
npm install
npm install ethers
npm run dev
```
  
**Vite Advantages:**  

- ✓ 10-100x faster build times  
- ✓ Instant HMR (Hot Module Replacement)  
- ✓ Smaller bundle size  
- ✓ Modern ES modules by default    
 
---  

### Future Enhancement 1: Expanded Supply Chain States  

**Current:** Only 3 states exist (Created → Shipped → Delivered)  

**Proposed Enhancement:**     

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
**Benefits:**  

- ✓ More realistic supply chain modeling  
- ✓ Better inventory management  
- ✓ Enhanced traceability  
- ✓ Quality control workflows  
- ✓ Support for returns/rejections  

**Implementation Steps:**   

1 Update the `enum State` in Solidity contract
2 Add role permissions for each state  
3 Update React UI for new states  
4 Add action buttons for quality checks    
5 Extend test cases     

---

### Future Enhancement 2: QR Code & IPFS Integration  

**Current Limitation:** Blockchain stores only metadata

**Proposed Enhancement:** QR codes + IPFS for complete traceability

```solidity
struct Batch {
    uint256 batchId;
    string productName;
    address farmer;
    string ipfsHash;          // NEW: IPFS hash for product data
    string qrCodeHash;        // NEW: QR code metadata
    uint256 createdAt;
    State state;
}
```
**Benefits:**  

- ✓ Consumers can scan QR to verify authenticity    
- ✓ Immutable documentation on IPFS    
- ✓ Real-world traceability (blockchain + off-chain)    
- ✓ Certificate of authenticity    
- ✓ End-consumer transparency  

**Integration Steps:**  

1. Set up IPFS (use Pinata/NFT.storage)  
2. Upload product images, certificates, and metadata to IPFS  
3. Store IPFS hash in smart contract  
4. Generate QR codes linking to IPFS content  
5. Add QR scanner to React UI  
6. Display product details when scanned

---

### Future Enhancement 3: Batch Expiration & Inventory Management  

**Proposed Feature:** Track expiration dates and inventory levels

```solidity
struct Batch {
    // ... existing fields ...
    uint256 expirationDate;      // NEW: Unix timestamp
    uint256 warehouseQuantity;   // NEW: Remaining inventory
    bool isExpired;              // NEW: Status flag
}

function checkExpiration(uint256 _batchId) external view returns (bool) {
    return block.timestamp > batches[_batchId].expirationDate;
}

function updateInventory(uint256 _batchId, uint256 _quantityUsed) external {
    require(msg.sender == batches[_batchId].distributor, "Unauthorized");
    batches[_batchId].warehouseQuantity -= _quantityUsed;
}
```
**Benefits:**  
- ✓ Practical business value for perishables (coffee, produce, pharmaceuticals)  
- ✓ Automated expiration alerts  
- ✓ Better inventory management  
- ✓ Waste reduction  
- ✓ Regulatory compliance tracking  

---

## Planned Features for Future Implementations  

- **Multi-Signature Transactions** - Require consensus from multiple parties
- **Advanced Analytics Dashboard** - Real-time metrics and reporting
- **Automated Order Processing** - Integration with logistics APIs
- **Supply Chain Marketplace** - Peer-to-peer trading platform
- **Predictive Analytics** - ML-based demand forecasting
- **IoT Integration** - Real-time temperature and location tracking
- **Sustainability Tracking** - Carbon footprint and environmental impact
- **Multi-Chain Support** - Deploy on Polygon, Arbitrum, and Optimism  ?
- **DAO Governance** - Community-driven decision making  ? 

Feel free to suggest features by opening an issue or starting a discussion! For bug reports or feature requests, 
 [open an issue](https://github.com/micag2025/Supply_Chain_project/issues).  

---

## Contributing

Contributions are welcomed! Suggested workflow:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feat/your-feature
   ```
3. Commit and push changes
4. Submit a Pull Request with description

Please follow repository code style and add tests for major features.  

 ---

## References  

### Blockchain & Web3

- [Remix IDE](https://remix.live/) - Browser-based smart contract development
- [Solidity Documentation](https://docs.soliditylang.org/en/v0.8.35/) - Smart contract language
- [Hardhat](https://hardhat.org/) - Ethereum development environment
- [ethers.js Documentation](https://docs.ethers.org/v5/) - Web3 JavaScript library

### Ethereum Networks

- [Ethereum Sepolia Faucet](https://cloud.google.com/application/web3/faucet) - Free testnet ETH
- [Ethereum Documentation](https://ethereum.org/developers) - Protocol reference

### Development Tools

- [MetaMask](https://metamask.io/) - Wallet integration guide
- [React](https://react.dev/) - UI framework documentation
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Vite](https://devdocs.io/vite/) - Frontend build tool

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/micag2025/Supply_Chain_project/blob/main/LICENSE) file for details.

---

## Contact

If you encounter bugs, have questions, or want to request a new feature, please [open an issue](https://github.com/micag2025/Supply_Chain_project/issues) on this repository.  

---

## Acknowledgements

Special thanks to all contributors, testers, and community members who have:

- Tested the application thoroughly
- Provided valuable feedback and suggestions
- Reported bugs and issues
- Submitted pull requests
- Shared knowledge and expertise


--- 

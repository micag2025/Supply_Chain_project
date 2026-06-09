# Blockchain-Based Supply Chain Tracking System  

**Design and Implementation of a Decentralized Supply Chain dApp**

---  

## Overview

This repository contains the full implementation for the [publication **Blockchain-Based Supply Chain Tracking System: Design and Implementation of a Decentralized Supply Chain dApp**](https://github.com/micag2025/Supply_Chain_project/blob/82ee14f3f60f2c903befe6c108a32edf3032f0e6/publication.md), (TO BE CHANGED WITH READY TENSOR LINK) published on the [Ready Tensor](https://www.readytensor.ai/) platform.

A blockchain-based supply chain tracking system is built with **Solidity**, **MetaMask**, **React**, **Ethers.js**, and **Sepolia Testnet**. This **decentralized application (dApp)** enables transparent, immutable tracking of products from creation to delivery (from the point of origin to the final destination, and to verify the authenticity of products), leveraging **smart contracts** to enforce role-based access control and maintain a permanent audit trail on the Ethereum blockchain.  

A practical implementation of a full workflow, representing a **Complete Coffee Supply Chain Tracking System**, has been used as 
Test Scenario to build up the  **CoffeeChain: Farm-to-Retail Product Traceability dApp** that can be used to track batches from farm to retail and further to demonstrate real-world supply chain use cases.  

---

## Key Highlights

- **Real production architecture** - Enterprise-ready dApp structure
- **Event-driven UI** - BatchCreated event listeners for real-time updates
- **Instant table updates** - Blockchain events trigger UI changes
- **Scalable indexing system** - Efficient batch retrieval and state management
- **Immediate batch visibility** - New batches appear instantly in the dashboard
- **Real-time operations** - ReadBatch and contract interactions work immediately
- **Gas-optimized** - Efficient smart contract design for cost reduction
- **Role-based access control** -  3 roles (Farmer, Distributor, and Retailer in the test scenario) with enforced permissions  

---

## Architecture    

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

---

## Getting Started

### Prerequisites  

Install the following on your system:
- **Node.js** (version >=18 )
- **MetaMask** browser extension ([Install here](https://metamask.io/))
- **Remix IDE** (online at [https://remix.ethereum.org](https://remix.ethereum.org))

### Environment Setup

| Component | Details |
|-----------|---------|
| **Network** | Sepolia Testnet |
| **Wallet** | MetaMask |
| **Frontend** | React + Ethers.js |
| **Smart Contract** | Solidity 0.8.x |
| **Deployment Tool** | Remix IDE |

### Step-by-Step Setup Guide

#### STEP 1 — Deploy Smart Contract via Remix

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

> _**Note**_: Using `Injected Provider - MetaMask` is the recommended approach because it:  
   > - Connects Remix directly to your MetaMask wallet
   > - Deploys to real networks (Sepolia, Polygon, etc.)
   > - Generates real contract addresses usable in React
   > - Best practice for professional dApp development

**What is the ABI?** The ABI (Application Binary Interface) is a translation layer between JavaScript and Solidity:  
- Defines all available smart contract functions
- Specifies function inputs and outputs
- Indicates which functions cost gas and which are read-only
- Enables ethers.js to properly encode/decode contract calls

---

#### STEP 2 — Create React App (CRA)

Run the following commands:

```bash
npx create-react-app supplychain-ui  
cd supplychain-ui
npm install
npm install ethers
npm start
```

#### STEP 3 — Add Contract ABI  

**1. Create ABI File**

- Inside the React project, create: `src/abi/SupplyChain.json`  

**2. Paste ABI from Remix**  

```json
{
  "abi": [ ...PASTE_FROM_REMIX_HERE... ]
}
```

####  STEP 4 — Create Contract Service  
Create `src/contract.js` to handle contract interactions

```
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


#### STEP 5 — Build Minimal UI
Replace `src/App.jsx` with your React components. Key components needed:

- **WalletSection** - Connect/disconnect MetaMask  
- **CreateBatchSection** - Form to create new batches (Farmer only)  
- **ReadBatchSection** - Read batch details  
- **BatchTable** - Display all batches with Ship/Deliver actions  
- **RoleBadge** - Show connected user's role  

TO BE ENCLOSED  
``` javascript
const CONTRACT_ADDRESS = "YOUR_REMIX_DEPLOYED_CONTRACT_ADDRESS";
```

#### STEP 6 — Connect MetaMask
Add wallet connection logic to your App

- Open [MetaMask](https://metamask.io/), making sure that MetaMask is installed, unlocked and its Network is set up on Sepolia. 
- See [MetaMask Setup Guide](https://github.com/micag2025/Supply_Chain_project/blob/d97a5d881c09de6ddc8196ada4bce28e5219fa33/docs/metamask-setup.md) for more details. 

#### MetaMask Interaction Flow:

MetaMask will automatically prompt the user when:  
✓ Clicking "Connect Wallet"  
✓ Clicking "Create Batch" (state-changing transaction)  
✓ Clicking "Read Batch" (if provider access is needed)  
✓ Clicking "Ship" button in the table  
✓ Clicking "Deliver" button in the table  

#### Setup Summary:
```
Remix (Deploy Contract)
     ↓
Ethereum Sepolia Testnet (Live Blockchain)
     ↓
ethers.js (Web3 Library)
     ↓
React UI (Frontend Dashboard)
     ↓
MetaMask (User Wallet)
```

**Success Checklist:**

✓ Contract deployed via Remix on Sepolia  
✓ React frontend created and running locally  
✓ ethers.js properly configured with contract address and ABI  
✓ MetaMask connected to React application  
✓ Create batch function working end-to-end  
✓ Read batch function retrieving data  
✓ Ship and Deliver functions updating state  

---

## Testing & Evaluation  

### Test Scenario: Complete Coffee Supply Chain Tracking System

A practical implementation of a full workflow, representing a **Complete Coffee Supply Chain Tracking System**, has been used as 
Test Scenario to build up the  **CoffeeChain: Farm-to-Retail Product Traceability dApp**.  This dApp was tested on the **Sepolia Ethereum Testnet** using three MetaMask accounts representing different supply chain participants. Each account that sends transactions does need **Sepolia ETH** later because blockchain transactions cost gas.  


| Role        | Account   |Permissions    |  Needs ETH?   |    Why              | Suggested Sepolia ETH  |
| ----------- | --------- |---------------|---------------|---------------------|------------------------|
| Farmer      | Account 1 |Create batches |    ✅        |deploy + createBatch  |   0.05                |
| Distributor | Account 2 |Ship batches   |    ✅        |shipBatch             |   0.01                |
| Retailer    | Account 3 |Deliver batches|    ✅        |deliverBatch          |   0.01                |



>_Note_ See [MetaMask Setup Guide](https://github.com/micag2025/Supply_Chain_project/blob/d97a5d881c09de6ddc8196ada4bce28e5219fa33/docs/metamask-setup.md) for more details. 

### Comprehensive Test Coverage
The smart contract and React frontend were successfully tested for:

✓ **Batch creation** - Farmer can create new batches  
✓ **Batch shipment** - Distributor can ship created batches  
✓ **Batch delivery** - Retailer can deliver shipped batches  
✓ **Role-based access control** - Only authorized roles can perform actions  
✓ **Wallet-based authentication** - Connected MetaMask account determines role  
✓ **Duplicate ID prevention** - Cannot create batch with existing ID  
✓ **Invalid state transition rejection** - Cannot skip states (e.g., deliver without shipping)  
✓ **Unauthorized user rejection** - Wrong role cannot perform action  
✓ **Read operations** - All read functions return correct data  
✓ **Blockchain state persistence** - Data persists after page refresh  
✓ **Event emission** - All contract events properly emitted  
✓ **Gas optimization** - Transactions execute efficiently  

All (valid and invalid) tests were executed on the **Sepolia Ethereum Test Network** using **MetaMask** and **Ethers.js**.


### Valid Test Cases Executed

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

### Validation and Error Handling Tests Executed  

This reflects that many invalid actions are prevented by the React UI before a blockchain transaction is attempted.

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

### Validation Coverage

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


Many invalid actions are stopped at the React UI layer, which is preferable to letting them reach the blockchain and revert. This demonstrates a better user experience and avoids unnecessary gas consumption.

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

#### Full Workflow Test Scenario

##### Scenario: End-to-End Coffee Supply Chain Tracking System    
This scenario simulates a complete lifecycle of a batch across the supply chain, demonstrating role-based actions and blockchain state transitions.  

**Day 1 - Farmer Creates Batch**     
- Farmer logs in (Account 1)  
- Creates batch:**ID=1**, Name="Coff", Quantity=1000kg  
- Batch state recorded as **Created**  
- Timestamp: 2026-06-04 10:00 UTC    

**Day 2 - Distributor Ships Batch**
- Distributor logs in (Account 2)
- Views batch in Overview Table
- Clicks **Ship**
- Batch state recorded as **Shipped**
- Distributor address recorded on-chain
- Timestamp: 2026-06-05 14:30 UTC

**Day 5 - Retailer Delivers Batch**  
- Retailer logs in (Account 3)
- Views batch in Overview Table
- Clicks **Deliver**
- Batch state recorded as **Delivered**
- Retailer address recorded on-chain
- Timestamp: 2026-06-08 09:15 UTC  

**Batch Lookup Verification**  
- Any user can search **batch ID:1**
- Full lifecycle is displayed:    
  - Created by Farmer address    
  - Shipped by Distributor address    
  - Delivered by Retailer address    
- Total traking duration: **8 days**  
- Full transparency ensured via blockchain immutability

---

## UI Walkthrough & Examples Usage UI  

### 1. Application Interface Overview

  ![Interface UI](https://github.com/micag2025/Supply_Chain_project/blob/c5307e39eb7c51ea98d939242a2308f948819f76/Screenshots_UI/Screenshot_UI_interface.jpeg)   

The main dashboard features:  
- **Wallet Connection Panel** - Shows connected account and role
- **Create Batch Section** - Form for creating new batches (Farmer only)
- **Read Batch Section** - Query existing batch details
- **Batch History Table** - Complete list of all batches with action buttons
- **Status Indicators** - Real-time batch state display

 ---

### Example 1: (Valid Test Case:) Create and Read Batch (Farmer Only)

 ![Create_Read_Batch](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot_Create_and_ReadBatch.jpeg)  

**How to Test:**    
1. Open http://localhost:3000 (or run npm start)  
2.  Ensure MetaMask is connected with Farmer account  
3. In the Create Batch Section:  
   - Enter a unique Batch ID (e.g., "3")  > The ID comes in automatic 
   - Enter Product Name (e.g., "cof_batch")
   - Enter account 2 (Distributor account) and account 3 (Retailer account)
   - Click Create Batch    
4. MetaMask popup appears - approve the transaction    
5. Wait for confirmation    
6. New batch appears in the Batch History Table    
7. In the Read Batch Section:    
   - Enter the Batch ID you just created  
   - Click Read Batch  
   - Batch details display below  

**Expected Outcome:**  
- Batch created with state "Created"
- Batch readable immediately after creation
- Batch ID, product name, farmer address, and state visible
- Creation timestamp recorded on blockchain (TO BE VERIFIED)

 ---  

### Example 2: (Valid Test Case: Action inside the overview table:) Ship Batch (Distributor only)      

![Distributor](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot3_Distributor.jpeg) 

![Table_overview_distributor](https://github.com/micag2025/Supply_Chain_project/blob/f8c24ec757ba11fd7fa719b683bdf777bb1651d6/Screenshots_UI/Table_overview_distributor.jpeg)

**How to Test:**    
1. Switch MetaMask to Distributor account  
2. In the Batch History Table, locate a batch with state "Created"  (e.g.Batch ID = 3) 
3. Click the Ship button next to the batch  
4. MetaMask popup appears - review and approve the transaction  
5. Wait for confirmation  
6. Table updates automatically  (see above updated table overview)
7. Batch state changes from "Created" → "Shipped"  

**Expected Outcome:**    
✓ Only Distributor can ship batches  
✓ State transitions correctly  
✓ Distributor address recorded in blockchain  
✓ Table updates in real-time  
✓ Farmer account cannot ship (transaction would be rejected)  

---  

### Example 3: (Valid Test Case: Action inside the overview table:) Deliver Batch (Retailer only)   

![Retailer](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot1_Retailer.jpeg)  

![Updated_table2](https://github.com/micag2025/Supply_Chain_project/blob/1c2af8767725888cff953dfe8555bf92185d9e0d/Screenshots_UI/Updated_table2_retailer.jpeg)

**How to Test:**    
1. Switch MetaMask to Retailer account    
2. In the Batch History Table, locate a batch with state "Shipped"  (e.g.Batch ID = 3) 
3. Click the Deliver button next to the batch    
4. MetaMask popup appears - review and approve the transaction    
5. Wait for confirmation  - "batch delivered"  
6. Table updates automatically    (see above updated table overview)
7. Batch state changes from "Shipped" → "Delivered"    

**Expected Outcome:**    
✓ Only Retailer can deliver batches  
✓ State transitions correctly from "Shipped" to "Delivered"   
✓ Retailer address recorded on blockchain  
✓ Table reflects state change instantly  
✓ Distributor account cannot deliver (transaction rejected)  

---  

### Example ....: (Invalid Test Case:) Unauthorized Shipment (Error Case) TO BE EXCLUDED? 
SCREENSHOT TO BE ENCLOSED > With regards the transaction reverted, the interface is built up in order that the different bottoms are not
working if the exact conditions are not set up. 

Scenario: Farmer attempts to ship a batch without authorization.

**How to Test:**  
1. Connect with Farmer account  
2. In the Batch History Table, click Ship button on any "Created" batch  
3. MetaMask popup appears  
4. Approve the transaction  
5. Transaction fails and reverts  

**Expected Result:**  
✗ Transaction reverted with error message  
✗ "Unauthorized: Only Distributor can ship batches"  
✓ No state change occurs  
✓ Gas consumed for failed transaction validation  
✓ Error displayed in UI  

**Why This Happens:** The smart contract enforces role-based access control. Only the Distributor role can call shipBatch(). When the Farmer's account tries to invoke this function, the contract's modifier validation fails before any state changes occur.

---

###  Example ......: (Invalid Test Case:) Invalid State Transition (Error Case)  TO BE EXCLUDED? 
 With regards the transaction reverted, the interface is built up in order that the different bottoms are not
working if the exact conditions are not set up.   

Scenario: Retailer attempts to deliver a batch that hasn't been shipped yet.

**How to Test:**  
1. Connect with Retailer account  
2. In the Batch History Table, locate a batch with state "Created"  
3. Click Deliver button on this batch (should only work on "Shipped" batches)   > due to the structure of the interface deliver buttom is blocked
4. MetaMask popup appears  > due to the structure of the interface the metamask is not appear 
5. Approve the transaction  > to be eventually changed> this to be deleted 
6. Transaction fails and reverts  > to be eventually changed> this to be deleted 

**Expected Result:**  
✗ Transaction reverted with error message  
✗ "Invalid state transition: Batch must be Shipped before Delivery"  
✓ Batch state remains "Created"  
✓ No gas consumed (reverted before execution)  
✓ Error displayed in user-friendly format  

**Why This Happens:** The smart contract enforces state machine rules. A batch must follow the sequence: Created → Shipped → Delivered. Attempting to skip steps violates this rule and the transaction reverts.  

---

###  Example 5: (Invalid Test Case:) Invalid Wallet Role

![Invalid Wallet Role](https://github.com/micag2025/Supply_Chain_project/blob/01155a7bb9d825bc91c683d5670fc76d14fa4bff/Screenshots_UI/Screenshot_invalid_wallet_role.jpeg)  

Scenario: Distributor attempts to create a batch.

**How to Test:**     
1. Connect with  Distributor account
2. In the Create Batch Section:  
   - Enter a unique Batch ID > it appears in automatic 
   - Enter Product Name (e.g., "Cof_batch"), quatity, account Distributor, account Retailer
   - Click Create Batch
3.  Transaction fails (buttom create is blocked)

**Expected Result:**  
- ✗ Access denied
- ✗ "Unauthorized: Only Farmer can create batches"  
- ✓ No state change occurs
- ✗ Unknown account attempts restricted action.     

---  

###  Example 6: (Invalid Test Case:) Read Non-Existing Batch    
  
![Read Non-Existing Batch](https://github.com/micag2025/Supply_Chain_project/blob/01155a7bb9d825bc91c683d5670fc76d14fa4bff/Screenshots_UI/Screenshot_read_non_existing_batch.jpg) 

Scenario: Read Non-Existing Batch

**How to Test:**     
1. Connect with Farmer account
2. In the Read Batch Section:    
   - Enter the Non-Existing Batch ID (e.g. ID = 8)
   - Click Read Batch  

**Expected Result:**    
- ✗ Access denied
- ✗ Error message displayed   
- ✓ No state change occurs
- ✓ Error displayed in user-friendly format (e.g. Batch not found)    

---  

## Limitations & Future Improvements  

### Limitation 1: Remix IDE Constraints

**Current Limitation**: Remix is primarily designed for quick development and testing, and has limitations for:  
- Full-scale project management
- Integrated frontend testing
- Automated deployment pipelines
- Complex development workflows  
**Workaround:** For production environments, consider migrating to Hardhat or Truffle:

```bash
npm install --save-dev hardhat
npx hardhat init
```

**Benefits of Hardhat:** 

✓ Local development network  
✓ Automated testing framework  
✓ Gas optimization analysis  
✓ Network deployment scripting  
✓ Contract verification on block explorers  

### Limitation 2: Create React App Performance  

**Current Limitation:** While CRA is functional for this project, it has:
- Slower build times
- Larger bundle size
- Older tooling architecture
- Less modern development experience

**Recommendation:** Upgrade to Vite for better performance:  

```bash
npm create vite@latest supplychain-ui -- --template react
cd supplychain-ui
npm install
npm install ethers
npm run dev
```  
**Vite Advantages:**  

✓ 10-100x faster build times  
✓ Instant HMR (Hot Module Replacement)  
✓ Smaller bundle size  
✓ Modern ES modules by default  
✓ Better developer experience  

### Future Enhancement 1: Expanded Supply Chain States  

**Current Implementation:** Only 3 states exist: Created → Shipped → Delivered  

**Proposed Enhancement:** Add granular tracking for better real-world simulation:  

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
✓ More realistic supply chain modeling  
✓ Better inventory management  
✓ Enhanced traceability  
✓ Support for quality control workflows  
✓ Ability to handle returns and rejections  

**Implementation Steps:**  
1 Update the `enum` State in Solidity contract
2 Add corresponding role permissions for each state  
3 Update React UI to handle new states  
4 Add new action buttons for quality checks, warehousing, etc.  
5 Extend test cases for new transitions    


### Future Enhancement 2: QR Code & IPFS Integration  

**Current Limitation:** Blockchain stores only metadata; no product documentation or images

**Proposed Enhancement:** Integrate QR codes and IPFS for complete traceability:

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
✓ Consumers can scan QR codes to verify authenticity  
✓ Immutable product documentation stored on IPFS  
✓ Real-world traceability (blockchain + off-chain data)  
✓ Certificate of authenticity  
✓ Supply chain transparency for end consumers  

**Integration Steps:**  
1. Set up IPFS node or use Pinata/NFT.storage  
2. Upload product images, certificates, and metadata to IPFS  
3. Store IPFS hash in smart contract  
4. Generate QR codes linking to IPFS content  
5. Add QR scanner to React UI  
6. Display product details and certificates when scanned    

### Future Enhancement 3: Batch Expiration & Inventory Management  

**Proposed Feature:** Add expiration date tracking for perishable goods and inventory lifecycle management    

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
✓ Practical business value for perishables (coffee, produce, pharmaceuticals)  
✓ Automated expiration alerts  
✓ Better inventory management  
✓ Waste reduction  
✓ Regulatory compliance tracking  

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

The Supply Chain project has exciting opportunities for expansion:

Planned Features
- **Multi-Signature Transactions** - Require consensus from multiple parties
- **Advanced Analytics Dashboard** - Real-time metrics and reporting
- **Automated Order Processing** - Integration with logistics APIs
- **Supply Chain Marketplace** - Peer-to-peer trading platform
- **Predictive Analytics** - ML-based demand forecasting
- **Integration with IoT Devices** - Real-time temperature and location tracking
- **Sustainability Tracking** - Carbon footprint and environmental impact
- **Multi-Chain Support** - Deploy on Polygon, Arbitrum, and Optimism  ?
- **DAO Governance** - Community-driven decision making  ? 

Feel free to suggest features by opening an issue or starting a discussion! For bug reports or feature requests, 
 [open an issue](https://github.com/micag2025/Supply_Chain_project/issues).  

 ---

## References  

- [Remix IDE](https://remix.live/) - Remix IDE – Browser-based smart contract development environment
- [Ethereum Sepolia Faucet](https://cloud.google.com/application/web3/faucet) – Obtain free Sepolia ETH for testing
- [MetaMask](https://metamask.io/)– Wallet integration guide and API reference
- [React](https://react.dev/)– Official React library documentation
- [ethers.js Documentation](https://docs.ethers.org/v5/) – Complete ethers.js API reference
- [Solidity Documentation](https://docs.soliditylang.org/en/v0.8.35/) – Solidity language reference
- [Hardhat](https://hardhat.org/)  – Ethereum development environment setup
- [Web3 Faucet](https://cloud.google.com/application/web3/faucet)– Google Cloud Web3 testnet faucet
- [nodejs.org](https://nodejs.org/)
- [Vite Documentation](https://devdocs.io/vite/) – Next generation frontend tooling

---

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/micag2025/Supply_Chain_project/blob/main/LICENSE) file for details.

---

## Contact

If you encounter bugs, have questions, or want to request a new feature, please [open an issue](https://github.com/micag2025/Supply_Chain_project/issues) on this repository.  

---

## Acknowledgements

TO BE DRAFTED   
This project would not have been possible without:

Special thanks to all contributors who have:

Tested the application
Provided feedback and suggestions
Reported bugs and issues
Submitted pull requests
Shared knowledge and expertise

--- 

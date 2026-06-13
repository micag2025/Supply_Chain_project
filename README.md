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
│   ├── Screenshot_Deliver_Batch_Retailer.jpg
│   └── Screenshot_Ship_Batch_Distributor.jpg  
│   ├── Screenshot_updated_table_Deliver_Batch_Retailer.jpg
│   └── Screenshot_updated_table_Ship_Batch_Distributor.jpg
│
├── docs/                            # Additional documentation
│   └── metamask-setup.md            # MetaMask setup guide
│   └── testing.md                   # Testinge 
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

- **Node.js** (v18+) – [nodejs.org](https://nodejs.org/)
- **npm** (included with Node.js) – Check: `npm --version`
- **MetaMask** browser extension – [metamask.io](https://metamask.io/)
- **Remix IDE** (optional) – [remix.ethereum.org](https://remix.ethereum.org/)
- **Git** – For cloning repository

### Clone Repository

```bash   
git clone https://github.com/micag2025/Supply_Chain_project.git
cd Supply_Chain_project
```

### Install Dependencies  

```bash
npm install
```
This installs all required packages: `ethers.js`,` react-dom`, and other dependencies listed in `package.json`.    

### Environment Configuration  

Create a `.env` file in the project root (see `.env.example`):

```bash  
REACT_APP_CONTRACT= YOUR_DEPLOYED_CONTRACT_ADDRESS
REACT_APP_NETWORK_NAME=Sepolia  
```  

***How to obtain contract address:***

1. Deploy the smart contract via Remix IDE
2. Copy contract address from the deployment receipt
3. Paste into `.env `file    

> **Note:** Use the **contract address** from Remix "Deployed Contracts" panel, NOT farmer/distributor/retailer wallet addresses.

### Start Application  

### Start the React Development Server  

Launch the React development server:

```bash  
npm start
```
The server will start and automatically open your browser.  

### Expected Output  

```
Compiled successfully!

You can now view supplychain-ui in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://[YOUR_IP]:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```  

Open: http://localhost:3000

FOLLOW PUBLICATION ? 

## Deployment
Deploy Smart Contract
Open Remix IDE
Compile SupplyChainBatch.sol
Deploy to Sepolia
Copy:
Contract Address
ABI
Configure Frontend

Update:
```bash  
src/abi/SupplyChain.json  
```  

and  `.env` with deployment information.


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

## Usage  

### Farmer  
- Create batches
- View batch information  

### Distributor    
- Ship batches  

### Retailer  
- Deliver batches    

### Batch Lookup  

Any user can:  
- Search by batch ID  
- View lifecycle status  
- Verify product history  

---

## Testing 

Testing was performed on the Ethereum Sepolia Testnet.

### Test Account Setup

Three MetaMask accounts simulate the supply chain participants:

### Test Account Setup

Three MetaMask accounts simulate the supply chain participants.

| Role | Account | Purpose | Recommended Testnet ETH* |
|--------|---------|---------|---------|
| Farmer | Account 1 | Deploy contract and create batches | ~0.05 ETH |
| Distributor | Account 2 | Execute shipment transactions | ~0.01 ETH |
| Retailer | Account 3 | Execute delivery transactions | ~0.01 ETH |

\* These values are approximate amounts used during development and testing on the Sepolia Testnet. Actual gas consumption may vary depending on network conditions, gas prices, and the number of transactions performed.


> Get free Sepolia ETH from [Google Cloud Web3 Faucet](https://cloud.google.com/application/web3/faucet)

> See [MetaMask Setup Guide](https://github.com/micag2025/Supply_Chain_project/blob/d97a5d881c09de6ddc8196ada4bce28e5219fa33/docs/metamask-setup.md) for more details.   

### Test Coverage

The application was tested on the Ethereum Sepolia Testnet using MetaMask and ethers.js to validate functional behavior, security controls, and complete end-to-end supply chain workflows.

Testing covered three areas:

- Functional Testing
- Security & Validation Testing
- End-to-End Workflow Validation

Detailed test cases and results are available in `docs/testing.md`.

#### Functional Testing

- ✓ Batch creation
- ✓ Batch shipment
- ✓ Batch delivery
- ✓ Wallet-based authentication
- ✓ Blockchain state persistence

#### Security & Validation Testing

- ✓ Role-based access control
- ✓ Invalid state transition prevention
- ✓ Duplicate batch prevention
- ✓ Unauthorized access prevention*

#### End-to-End Workflow Validation

- ✓ Complete batch lifecycle execution
- ✓ Correct role-based workflow progression
- ✓ Frontend-to-blockchain synchronization
- ✓ Batch traceability from creation to delivery

\* Unauthorized access prevention was validated by attempting restricted actions from accounts assigned to incorrect roles.

### Coverage Summary

| Category | Status |
|----------|----------|
| Batch Creation | ✅ |
| Shipment | ✅ |
| Delivery | ✅ |
| Lookup | ✅ |
| Access Control | ✅ |
| Validation | ✅ |
| Persistence | ✅ |
| Wallet Integration | ✅ |
| Network Validation | ✅ |

> Many invalid actions are prevented at the React UI layer before reaching the blockchain. This improves user experience and avoids unnecessary gas consumption.

### Results

| Metric | Result |
|----------|----------|
| Total Test Cases | 20 |
| Passed | 20 |
| Failed | 0 |
| Success Rate | 100% |

All planned test cases passed successfully, confirming correct behavior of the smart contract, frontend application, wallet integration, and role-based workflow management.

Detailed test results are available in `docs/testing.md`.

---
 

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

### Scenario 1: Create and Read Batch (Farmer Only)

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

### Scenario 2: Ship Batch (Distributor only)      

![Distributor](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_Ship_Batch_Distributor.jpg)

![Table_overview_distributor](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_updated_table_Ship_Batch_Distributor.jpg)

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

### Scenario 3: Deliver Batch (Retailer only)   

![Retailer](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_Deliver_Batch_Retailer.jpg)  

![Updated_table2](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_updated_table_Deliver_Batch_Retailer.jpg)

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

###  Scenario 4: Invalid Wallet Role Error

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

###  Scenario 5: Read Non-Existing Batch Error   
  
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

## Limitations & Workarounds  

The current implementation demonstrates a functional blockchain-based supply chain tracking system; however, several technical limitations remain due to the project's educational and proof-of-concept scope.  Current limitations include:

- Fixed wallet-role mapping  
- Sepolia-only deployment  
- Limited supply chain states  
- No historical event indexing  
- No analytics dashboard  

### Limitation 1: Remix IDE Constraints

**Current Limitation**

The project was developed and deployed using Remix IDE, which is ideal for rapid prototyping and educational projects but presents several challenges for production environments:

* Limited project management capabilities
* Manual deployment workflows
* No automated testing pipeline
* Limited support for collaborative development
* No integrated gas analysis or security tooling

**Recommended Workaround: Migrate to Hardhat**

```bash
npm install --save-dev hardhat
npx hardhat init
```

**Benefits**

* Local blockchain simulation
* Automated smart contract testing
* Gas usage analysis
* Deployment scripting
* Contract verification support
* Improved CI/CD integration

---

### Limitation 2: Create React App Performance

**Current Limitation**

The frontend currently uses Create React App (CRA), which provides a stable development environment but suffers from:

* Slower startup and build times
* Larger production bundles
* Higher memory consumption
* Older tooling architecture

**Recommended Workaround: Migrate to Vite**

```bash
npm create vite@latest supplychain-ui -- --template react
cd supplychain-ui
npm install
npm install ethers
npm run dev
```

**Benefits**

* Faster development server startup
* Smaller production bundles
* Improved developer experience
* Modern ES module support
* Better scalability for larger applications

---

### Limitation 3: Functional Scope

**Current Limitation**

The current implementation focuses on the core supply chain workflow:

Created → Shipped → Delivered

Additional limitations include:

* Fixed wallet-role mapping
* Single-network support (Sepolia)
* Limited historical analytics
* No QR code verification
* No inventory management
* No export or reporting features

**Recommended Workaround**

Future versions should integrate decentralized indexing solutions (The Graph), advanced analytics dashboards, and enhanced supply chain management features.

---  

# Future Implementations  

The project architecture was intentionally designed to support future expansion. Planned improvements are grouped into five development phases.

## Phase 1 — Smart Contract Enhancements

### Expanded Supply Chain States

Current workflow:

```text
Created → Shipped → Delivered
```

Proposed workflow:

```text
Created
   ↓
Processed
   ↓
Packaged
   ↓
InTransit
   ↓
Shipped
   ↓
Delivered
```

Benefits:

* More realistic supply chain modeling
* Improved traceability
* Enhanced inventory management
* Support for quality-control workflows

### Advanced Access Control

* Dynamic role assignment
* Multi-signature approvals
* Temporary permissions
* Enhanced authorization models

---

## Phase 2 — Product Traceability

### QR Code Integration

Enable consumers and auditors to verify product provenance through QR-code scanning.

### IPFS Integration

Store supporting documentation such as:

* Product certificates
* Images
* Inspection reports
* Compliance documentation

Benefits:

* Immutable documentation
* End-to-end transparency
* Consumer trust

---

## Phase 3 — Inventory & Analytics

### Inventory Management

* Batch expiration tracking
* Warehouse inventory monitoring
* Automated expiration alerts
* Regulatory compliance support

### Analytics Dashboard

* Batch lifecycle metrics
* Shipment performance analysis
* Supplier statistics
* Supply chain KPIs

---

## Phase 4 — Production Readiness

### Development Infrastructure

* Migration from Remix to Hardhat  (already mention in the workaround)
* Automated testing suite
* Deployment automation
* Security auditing

### Frontend Modernization

* Migration from CRA to Vite   (already mention in the workaround)
* Improved performance
* Better scalability

### Multi-Network Support

* Ethereum Mainnet
* Polygon
* Arbitrum
* Optimism

---

## Phase 5 — Enterprise & Ecosystem Integration

### External Integrations

* REST APIs
* Webhooks
* ERP systems
* Logistics providers

### IoT & Real-Time Monitoring

* Temperature sensors
* Location tracking
* Environmental monitoring

### Advanced Features

* Predictive analytics
* Sustainability tracking
* Carbon footprint analysis
* DAO governance
* Multi-organization support

These enhancements would evolve the project from a proof-of-concept decentralized application into a production-grade blockchain supply chain management platform.

Feel free to suggest features by opening an issue or starting a discussion! For bug reports or feature requests, 
 [open an issue](https://github.com/micag2025/Supply_Chain_project/issues).  


Roadmap
Hardhat migration
Vite migration
IPFS integration
QR-code verification
The Graph integration
Layer-2 deployment
Analytics dashboard

> IMP > difference between limitations (have immediate solution) and future work (expand functionality)! 
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

### Ready Tensor Guidelines  

- [Technical Evaluation Rubric](https://app.readytensor.ai/publications/technical-excellence-in-aiml-and-data-science-publications-an-evaluation-rubric-WsaE5uxLBqnH)    
- [Engage and Inspire: Best Practices for Publishing on Ready Tensor](https://app.readytensor.ai/publications/engage-and-inspire-best-practices-for-publishing-on-ready-tensor-SBgkOyUsP8qQ)  
- [The Open Source Repository Guide: Best Practices for Sharing Your AI/ML and Data Science Projects](https://app.readytensor.ai/publications/best-practices-for-ai-project-code-repositories-0llldKKtn8Xb)  
- [Markdown for Machine Learning Projects: A Comprehensive Guide](https://app.readytensor.ai/publications/markdown-for-machine-learning-projects-a-comprehensive-guide-LX9cbIx7mQs9)  

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

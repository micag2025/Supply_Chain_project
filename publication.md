#  Blockchain-Based Supply Chain Tracking System

**Design and Implementation of a Decentralized Supply Chain dApp**

---  

![Image_Cover](https://github.com/micag2025/Supply_Chain_project/blob/b226e8ab29790783edfece4c67a021871a6ff032/Image_Cover.png)

---

## Tags 

`Blockchain`, `Supply Chain Management`, `Solidity`, `Smart Contract`, `Sepolia`, `React`, `MetaMask`, `Ethereum`, `Decentralized Application (DApp)`, `Web3`, `ethers.js`

---

## TL;DR  

This project (publication) presents the design and implementation of a blockchain-based supply chain tracking system built on the Ethereum Sepolia testnet ((enabling authorized users to create, track, and manage supply chain batches).

The solution (application) combines a Solidity smart contract, MetaMask wallet integration, React frontend components, and ethers.js to create a decentralized application (dApp) capable of tracking products through a simplified supply chain lifecycle:  

``` 
Created → Shipped → Delivered  
```  

A coffee supply chain scenario (coffee supply chain tracking workflow) was used to validate role-based operations involving farmers, distributors, and retailers. (Testing was conducted on the Ethereum Sepolia Testnet to verify core functionality, access-control mechanisms, and complete supply chain lifecycle operations.?)

The dApp is designed for technical and non-technical users (Developers, Supply Chain Managers, Logistics Companies, etc.)  
The dApp is intended for both technical and non-technical stakeholders involved in supply chain operations, including developers, supply chain managers, logistics providers, agricultural producers, retailers, and regulatory authorities.


---

## Introduction

Supply chains often rely on centralized databases that can suffer from limited transparency, fragmented data ownership, and challenges in auditing product provenance.

Blockchain technology offers an alternative approach by providing:

- Immutable transaction records  
- Transparent audit trails 
- Decentralized trust  
- Cryptographic verification  

This project explores how Ethereum smart contracts can be used to manage product batches across multiple supply chain participants while maintaining a transparent and tamper-resistant history.

---  

## Problem Statement

Traditional supply chain systems face several challenges:

- Difficulty verifying product authenticity  
- Limited visibility across organizational boundaries  
- Centralized control of records  
- Manual reconciliation between stakeholders  

(Key Features) The goal of this project was to develop a decentralized proof-of-concept that demonstrates:

- Product traceability  
- Role-based permissions  (e.g. Role-based access control (Farmer, Distributor, Retailer))
- Blockchain persistence  (e.g. Real-time batch tracking from farmer → distributor → retailer)
- End-to-end lifecycle tracking   (e,g,  Complete Coffee Supply Chain Tracking workflow test scenario)

---

## Key Highlights  

### Core Capabilities

A **Decentralized Application (DApp)** has been successfully implemented with the following core capabilities:  

| Feature | Capability |
|---------|-----------|
| **Connect Wallet** | Seamless MetaMask integration for authentication |
| **Read Batch Data** | Query blockchain state with `getBatchReadable()` |
| **Create Batch** | Initialize supply chain batches with `createBatch()` |
| **Ship Batch** | Update status during distribution with `shipBatch()` |
| **Deliver Batch** | Finalize delivery with `deliverBatch()` |
| **Real-time UI** | Dashboard showing batch history and current state |

### Development Architecture  
  
The development path follows **Remix → React Web3 frontend** architecture:

- **Remix IDE** – Smart contract development, compilation, and rapid testing environment  
- **React/Web3 frontend** – User-facing interface powered by ethers.js for blockchain interaction
  
>_Note_ : Remix and React/Web3 frontend are complementary tools that work together seamlessly in the dApp development workflow.

**Remix IDE- Smart Contract Laboratory**   
- Write and test Solidity code
- Compile and validate contracts
- Deploy to testnets/mainnets
- Extract ABI for frontend integration  

**React Frontend – User Interface Layer**  
- Building responsive, interactive UI
- Responsive, interactive UI components
- Forms and tables for batch management
- MetaMask wallet integration
- Real-time blockchain state display


### How Remix IDE and React Connect  

The integration follows a three-step model:

1. **Remix deploys** the smart contract  to the Ethereum blockchain
2. **Blockchain stores and executes** contract at a specific address
3. **React frontend connects** by referencing:
   - **ABI** (Application Binary Interface) – Function signatures and data types
   - **Contract address** – The location of the deployed contract

```
Remix IDE (deploys contract)
         ↓
Ethereum / Sepolia Blockchain
         ↑
React Frontend (connects via ABI + address)
```
---  

## Complete Workflow  

### Step 1: Smart Contract Deployment (Remix)

The user can:
- Write Solidity smart contract code
- Compile the contract to check for syntax errors
- Deploy to Sepolia testnet via Remix IDE
- Copy the contract address from deployment receipt
- Copy the ABI from Remix interface
- Save both values for React integration

### Step 2: React Frontend Setup  

The user can:
- Create new React application
- Install ethers.js library: `npm install ethers`
- Create configuration file with ABI and contract address
- Implement MetaMask connection logic
- Build UI components for supply chain actions
- Connect form handlers to smart contract functions

### Architecture Diagram

```
┌─────────────────────────────────────────┐
│           Remix IDE                     │
│      Solidity Smart Contract            │
└────────────┬────────────────────────────┘
             │
             ▼ Deploy
┌─────────────────────────────────────────┐
│        Sepolia Testnet                  │
│     Smart Contract (Address)            │
└────────────┬────────────────────────────┘
             ▲
             │ ethers.js
┌────────────┴────────────────────────────┐
│         React App                       │
│     Frontend UI / Dashboard             │
└─────────────────────────────────────────┘
```  

---

## Core Capabilities  

Testing demonstrates that the following features have been **verified and production-ready**:

✓ **Contract Logic Validation**
  - All smart contract functions execute correctly
  - State transitions follow expected sequences
  - Event emissions trigger as designed

✓ **Role-Based Access Control**
  - Farmer role: create batches only
  - Distributor role: ship batches only 
  - Retailer role: deliver batches only
  - Unauthorized actions rejected by contract

✓ **Dashboard Functionality**
  - Real-time UI components rendering  
  - Wallet connection and account detection
  - Role determination based on connected address

✓ **Batch History & Tracking**
  - Automatic history table updates  
  - All batches displayed with current state
  - Historical state transitions visible  

✓ **Blockchain Integration**
  - Seamless blockchain-to-UI synchronization
  - Transaction receipts validated
  - State persistence verified on-chain

---

## Target Users & Use Cases  

### Intended Users

**1. Supply Chain Managers & Logistics Companies**
- Track products from manufacturing through retail distribution
- Monitor batch status in real-time across multiple locations
- Verify authenticity and prevent counterfeiting
- Ensure compliance with regulatory requirements

**2. Farmers & Agricultural Producers**
- Initiate batches with product details (name, quantity, origin)
- Authenticate their role via connected MetaMask wallet
- Create immutable records of production
- Build trust with distributors and retailers

**3. Distributors & Warehousing Providers**
- Receive batch notifications when created by farmers
- Update batch status to "Shipped" with transaction confirmation
- Maintain records of all handled batches
- Ensure secure handoffs between supply chain stages

**4. Retailers & End-Consumers**
- Verify product authenticity through batch lookup
- Access complete product journey from origin to store shelf
- Make informed purchasing decisions based on traceability
- Scan batch IDs to view history and certifications

**5. Regulatory & Compliance Officers**
- Audit supply chain transparency
- Verify adherence to product safety standards
- Generate reports on batch movements
- Investigate recalls or quality issues

### Key Use Cases

**Use Case 1: Preventing Counterfeit Products**
- Batch creation records cannot be forged (blockchain immutability)
- Each transaction is cryptographically signed by authorized parties
- Complete audit trail shows all handlers and timestamps
- Retailers can verify authenticity before display

**Use Case 2: Rapid Recall Management**
- Pinpoint affected batches  
- Identify retailers who  received products
- Notify relevant parties through dashboard  
- Maintain liability records   

**Use Case 3: Supply Chain Optimization**
- Identify delivery bottlenecks  
- Analyze time between state transitions
- Optimize distributor and retailer networks
- Reduce spoilage for perishable goods  

**Use Case 4: Fair Trade & Ethical Sourcing**
- Verify certified farm origins
- Ensure transparent farmer compensation
- Build consumer confidence
- Enable premium pricing for certified batches  

---

## Architecture  

### High-Level System Design  

The system is a **decentralized supply chain platform** where authorized participants (users) interact with an immutable smart contract through **MetaMask wallet integration**. All state changes are recorded immutably on the blockchain.

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

### Deployment & Runtime Workflows    

The **Decentralized Application (DApp)** works with two distinct workflows:

#### Deployment Workflow (One-Time Setup)

This workflow is executed **once** during initial setup (~5-10 minutes):

```
Solidity smart contract code
   ↓
Remix IDE (compile & test)
   ↓
Deploy to Sepolia testnet
   ↓
Obtain contract address & ABI
   ↓
Configure React application
   ↓
Launch frontend on localhost
```

**Important Note:** Remix IDE stores only temporary UI session state. The smart contract is **permanently stored on Sepolia blockchain**.

**Best Practice:** Create a `deployment.txt` file containing:
```
Network: Sepolia
Contract Address: 0x....
ABI: [...]
```

See [contract-address.txt](https://github.com/micag2025/Supply_Chain_project/blob/1f8fa8e832f894f4a14ac4ede755ec79347d2d93/contracts/deployment/contract-address.txt)



### Runtime User Workflow (Repeated Usage)

This workflow is executed **repeatedly** when users interact with dApp (~10-30 seconds per transaction):

```
User opens dApp in browser
   ↓
MetaMask wallet connection prompt
   ↓
User selects account (Farmer/Distributor/Retailer)
   ↓
React frontend detects role from account address
   ↓
Dashboard loads with role-specific options
   ↓
User performs action (create/ship/deliver batch)
   ↓
React UI calls ethers.js function
   ↓
ethers.js constructs transaction object
   ↓
MetaMask signs transaction with user's private key
   ↓
Signed transaction sent to Sepolia RPC endpoint
   ↓
Smart contract executes function logic
   ↓
Blockchain state updates
  ↓
Event emitted (BatchCreated/Shipped/Delivered)
   ↓
React listens to event and updates UI
   ↓
User sees confirmation message and updated table
```
---  

**Request-Response Flow:**

| Step | Actor | Action |
|------|-------|--------|
| 1 | User | Enter Batch ID |
| 2 | React | Send Request |
| 3 | Smart Contract | Query Blockchain |
| 4 | Blockchain | Return Data |
| 5 | React | Display UI |

---

## Design Principles  

The SupplyChain dApp was designed around the following six core principles:

### 1. Immutability & Transparency
- All supply chain events recorded permanently on blockchain
- No data can be altered or deleted once committed
- Complete audit trail visible to all authorized parties
- Cryptographic proof of each transaction

### 2. Role-Based Access Control
- Each participant has a specific, predefined role (Farmer, Distributor, Retailer)
- Smart contract enforces that only authorized roles can perform specific actions
- Prevents unauthorized state transitions
- Decentralized verification without centralized authority

### 3. User-Centric Interface
- Intuitive dashboard showing only relevant actions for the user's role
- Real-time synchronization with blockchain state
- Clear visual indicators of batch status and history
- Error messages guide users toward valid actions

### 4. Blockchain Minimalism
- Smart contract stores only essential data (batch ID, name, quantity, state, addresses)
- Off-chain computation handled by React frontend
- Reduces gas costs and network congestion
- Separates concerns: contract = state, UI = presentation

### 5. Testnet-First Development
- Development and testing on Sepolia testnet (not mainnet)
- Free testnet ETH via faucets eliminates deployment barriers
- MetaMask integration enables one-click wallet switching
- Allows rapid iteration without financial risk

### 6. Web3 Best Practices
- ethers.js library provides secure, modern blockchain interaction
- MetaMask as industry-standard wallet provider
- No private keys stored in React application
- User controls all transaction signing via wallet
 
---

## Installation & Setup

This publication includes a complete [GitHub code repository](https://github.com/micag2025/Supply_Chain_project) with all source code, configuration files, and test cases.

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

---  

## Running the Application  

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

### Connet Wallet

1. Navigate to `http://localhost:3000` (opens automatically)
2. MetaMask prompts for wallet connection  
3. Select account representing your role (Farmer, Distributor, or Retailer)  
4. Approve connections in MetaMask popup  
5. Dashboard loads with role-specific options  

### Testing Full Worflow

To test the full workflow, open multiple browser windows/tabs with different MetaMask accounts:

- **Tab 1**: Account 1 = Farmer (create batches)
- **Tab 2**: Account 2 = Distributor (ship batches)
- **Tab 3**: Account 3 = Retailer (deliver batches)

### Dashboard Features  

The dashboard includes the following features:   

#### 1. Wallet Connection Panel  
- Currently connected MetaMask account
- Account balance in Sepolia ETH
- Detected role (Farmer/Distributor/Retailer)
- `Connect Wallet` and `Disconnect` buttons

#### 2. Batch Lookup (Manual Verification)     
- Enter specific batch ID
- `Search` queries blockchain
- Displays batch details and handler addresses
- "Batch not found" if ID doesn't exist

#### 3. Overview Table (Batch History)  
- All batches in smart contract
- Columns: ID, Name, Quantity, State, Farmer, Distributor, Retailer
- Sortable by any column
- Action buttons based on role and batch state
- Auto-updates on transaction completion
  
#### 4. Create Batch Section (Farmer Only)    
- Input: Batch ID, Product Name, Quantity
- Shows transaction hash and confirmation link
- Updates Overview Table automatically
- Validates: no duplicate IDs, quantity > 0
  
#### 5. Ship Batch Section (Distributor Only)  
- Available for "Created" state batches
- Records distributor address on-chain
- Shows transaction confirmation

#### 6. Deliver Batch Section (Retailer Only)  
- Available for "Shipped" state batches
- Records retailer address on-chain
- Completes batch journey

## Testing & Evaluation

Testing was performed on the Ethereum Sepolia Testnet using MetaMask accounts representing each supply chain participant.

### Test Environment Setup

- **Network:** Ethereum Sepolia Testnet
- **Test Accounts:** Three MetaMask accounts representing:
  - Farmer role
  - Distributor role
  - Retailer role
- **Tools:** MetaMask, ethers.js, Sepolia Faucet

### Test Coverage

To provide coverage of both technical correctness and real-world operational scenarios, the evaluation framework consisted of three complementary testing categories:

- **Functional Testing**, which verified core application features and blockchain interactions.
- **Security & Validation Testing**, which evaluated access controls and business-rule enforcement.
- **End-to-End Workflow Validation**, which confirmed successful execution of the complete supply chain lifecycle across all participant roles.

The following areas were validated:

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

### Test Results

Detailed test cases and execution results are available in the accompanying GitHub repository.

| Metric | Value |
|----------|----------|
| Total Test Cases | 20 |
| Passed | 20 |
| Failed | 0 |
| Roles Tested | 3 |
| End-to-End Scenarios | 5 |
| Success Rate | 100% |

All test cases passed successfully, confirming correct behavior of the smart contract, frontend application, wallet integration, and role-based workflow management across the entire supply chain lifecycle.  

These results demonstrate that the proposed blockchain-based supply chain system can reliably enforce role-based operations while maintaining transparent and persistent product traceability throughout the supply chain lifecycle.

---

## Examples Usage UI  (UI Examples)

### (UI Web DApp) Main Interface  

The dashboard features a **wallet connection panel** showing the connected account and role, a **batch management section** with create and lookup forms, and a **real-time overview table** displaying all batches. 

 ![Interface UI](https://github.com/micag2025/Supply_Chain_project/blob/c5307e39eb7c51ea98d939242a2308f948819f76/Screenshots_UI/Screenshot_UI_interface.jpeg)  

 ---

### Scenario 1: Create and Read Batch (Farmer Only)  

The figure shows the **farmer batch creation process**, including validated **batch creation**, **instant display in the overview table**, **blockchain confirmation**, and **batch lookup with full details**. 

 ![Create_Read_Batch](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot_Create_and_ReadBatch.jpeg)    

 ---  

### Scenario 2: Ship Batch Action (Distributor only)  

The figures show the **distributor shipment process**, including **viewing only “Created” batches**, using the **“Ship” action**, and **updating batch status to “Shipped.”** (They also confirm that the distributor address is recorded on-chain, updates appear in real time, and farmers cannot perform shipping actions.(buttom disabled) )

![Distributor](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_Ship_Batch_Distributor.jpg)

![Table_overview_distributor](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_updated_table_Ship_Batch_Distributor.jpg)  

---  

### Scenario 3: Deliver Batch Action (Retailer only)    

The figures show the **retailer delivery process**, including **viewing “Shipped” batches**, using **the “Deliver” action**, and **updating the state to “Delivered.”** (They also confirm on-chain recording of the retailer address, real-time updates, and restricted access for distributors.(buttom disabled))

![Retailer](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_Deliver_Batch_Retailer.jpg)  

![Updated_table2](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_updated_table_Deliver_Batch_Retailer.jpg)  

---  

###  Scenario 4: Invalid Wallet Role  (Unauthorized Access)

The figure demonstrates an **access control scenario where a distributor attempts to create a batch**. It shows that the **“Create Batch” action is unavailable for non-farmer roles**, preventing unauthorized actions. (The interface clearly indicates role restrictions, and no gas is consumed since the action is blocked at the UI level.)  
Non-authorized roles cannot perform restricted actions.  

![Invalid Wallet Role](https://github.com/micag2025/Supply_Chain_project/blob/01155a7bb9d825bc91c683d5670fc76d14fa4bff/Screenshots_UI/Screenshot_invalid_wallet_role.jpeg)  

---  

###  Scenario 5: Read Non-Existing Batch  (Invalid Batch Lookup)

The figure shows the **behavior when a user searches for a non-existing batch**. It displays a  **clear “Batch not found” error message with user-friendly formatting**. ( ensures no invalid data is returned, and confirms that the read-only operation does not consume gas.)  
Users receive clear feedback when querying non-existing batches. 

![Read Non-Existing Batch](https://github.com/micag2025/Supply_Chain_project/blob/01155a7bb9d825bc91c683d5670fc76d14fa4bff/Screenshots_UI/Screenshot_read_non_existing_batch.jpg) 

---  

## Limitations

The proposed blockchain-based supply chain tracking system successfully demonstrates decentralized batch creation, shipment tracking, delivery verification, and role-based access control through Ethereum smart contracts and a React-based user interface. However, as a proof-of-concept implementation, the system has several limitations that should be addressed in future iterations.

- **Sepolia-only deployment** – The application is currently deployed and tested exclusively on the Ethereum Sepolia Testnet. Consequently, it has not been evaluated under real-world production conditions or on alternative blockchain networks.    
- **Fixed role assignments** – Supply chain roles (Farmer, Distributor, and Retailer) are hardcoded to specific wallet addresses. The system does not currently support dynamic role assignment, role management, or onboarding of new participants.
- **Limited supply chain states**  – The current implementation focuses on the core workflow (`Created → Shipped → Delivered`). Additional states such as production, quality inspection, warehousing, customs clearance, and returns are not modeled, limiting the realism and granularity of supply chain tracking.  
- **No historical event indexing**  – Although transaction data is stored on-chain, the application does not implement dedicated event indexing or historical event visualization. As a result, users cannot easily browse or analyze the complete lifecycle history of a batch.  
- **No analytics dashboard** – The system provides operational tracking functionality but does not include analytics or reporting capabilities for monitoring supply chain performance, trends, or operational metrics.  
- **No QR-code integration** – Products cannot currently be identified or tracked through QR-code scanning, which limits ease of use in practical supply chain environments.  
- **No inventory managemnt** – The application focuses on batch traceability and does not support inventory tracking, stock management, or warehouse operations.  
- **Prototype-oriented development environment** – Smart contract development and deployment were performed using Remix IDE, which is well suited for rapid prototyping and educational projects. However, production environments typically rely on more advanced frameworks such as Hardhat or Foundry that provide automated testing, deployment pipelines, contract verification, and improved development workflows.  
- **Legacy frontend tooling (CRA)** – The frontend was developed using Create React App (CRA), which provides a stable development environment but offers slower build times and less optimized performance compared with modern alternatives such as Vite.  
- **Limited historical event visualization** – While blockchain transactions remain permanently stored on-chain, the application does not currently provide indexed event history, audit-trail views, or advanced lifecycle visualization.   
- **Single-contract scope** – The application is designed to interact with a single smart contract instance and does not currently support management of multiple supply chains or contract deployments.  

-**No Real-Time Notifications** - The application does not currently provide real-time notifications or event subscriptions to automatically alert users when batch states change.  

Despite these limitations, the project successfully demonstrates the feasibility of using blockchain technology to provide transparent, immutable, and role-controlled supply chain tracking. The identified limitations also provide a clear roadmap for future enhancements and system expansion.  

---

## Future Work 

The proposed architecture was intentionally designed as a modular proof-of-concept that can be extended to support more realistic supply chain requirements. (Contributors are encouraged to extend the system with the following enhancements.) Future work will focus on improving scalability, usability, traceability, and production readiness while preserving the system's decentralized design principles.

Planned enhancements include:  

- **Layer-2 deployment (Polygon or Arbitrum)** and **multi-network support** to reduce transaction costs, improve scalability, and enable deployment across multiple blockchain environments.    
- **Dynamic role management** to support administrator-controlled onboarding and management of supply chain participants without modifying the smart contract source code.    
- **Expanded supply chain lifecycle states** to model additional stages such as production, quality inspection, warehousing, customs clearance, and returns, thereby improving supply chain realism and traceability.     
- **Event indexing through The Graph** to provide efficient historical event querying, audit trails, and advanced lifecycle visualization.    
- **Advanced analytics and reporting dashboards** to support operational monitoring, performance metrics, and business intelligence capabilities.  
- **IPFS integration** for decentralized storage of product documentation, certificates, and provenance records.  
- **QR-code traceability** to enable rapid product identification and verification throughout the supply chain.  
- **Inventory management capabilities** to support stock tracking, warehouse management, and expiration monitoring.  
- **Migration from Remix to Hardhat** to support professional smart contract development workflows, automated testing, deployment scripting, and contract verification.  
- **Migration from Create React App (CRA) to Vite** to improve frontend performance, reduce build times, and provide a more modern development experience.
- **Multi-contract support**  to enable management of multiple supply chains and contract instances simultaneously.  
-  **Real-time notifications** and event subscriptions to automatically inform users of important supply chain events and state transitions.    
- **IoT sensor integration** to support automated collection of environmental data such as temperature, humidity, and location, enabling real-time monitoring of sensitive goods.   

Additional technical details, implementation considerations, and the complete development roadmap are available in the accompanying [GitHub repository](https://github.com/micag2025/Supply_Chain_project).

---

## Conclusion

This project demonstrates how blockchain technology can improve supply chain transparency through immutable product tracking and decentralized verification.

The implementation successfully validates core supply chain operations while providing a foundation for future enhancements such as analytics, decentralized storage, and multi-chain deployment.

---

## Contributing  

Contributions are welcome to enhance the Supply Chain dApp. Follows these steps:

1. Fork the GitHub repository  
2. Create a feature branch:    
```bash
git checkout -b feat/your-feature
```
3. Commit and push your changes  
4. Submit a Pull Request with descriptions
5. Follow the repository code style and add tests for major features

---     

## References    

Official documentation and resources:   

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

michelaagostini73@gmail.com

---

## Acknowledgements  

This project was built with contributions and inspiration from ...........................who have reviewed, tested, and improved this project. Special thanks to all developers and supply chain professionals who provided feedback during development and testing phases.

--- 

#  Blockchain-Based Supply Chain Tracking System

**Design and Implementation of a Decentralized Supply Chain dApp**

---  

![Image_Cover](https://github.com/micag2025/Supply_Chain_project/blob/b226e8ab29790783edfece4c67a021871a6ff032/Image_Cover.png)

---

## Tags 

`Blockchain`, `Supply Chain Management`, `Solidity`, `Smart Contract`, `Sepolia`, `React`, `MetaMask`, `Ethereum`, `Decentralized Application (DApp)`, `Web3`, `ethers.js`

---

## TL;DR  

This publication provides a **step-by-step guide** to build a **decentralized supply chain management system** using **React** and **Web3** technologies. The application integrates a **Solidity smart contract** with a **React frontend**, enabling authorized users to create, track, and manage supply chain batches on the **Sepolia Ethereum testnet**.

To demostrate a real-world supply chain use case of the **decentralized application (dApp)**  a complete Coffee Supply Chain Tracking workflow test scenario has been used to extensively test the **CoffeeChain: Farm-to-Distributor-to-Retail Product Traceability dApp**, using both **valid workflows** and **validation/error-handling scenarios**, covering end-to-end interactions between the React frontend, Ethereum smart contract, and MetaMask wallet integration (including batch creation, shipment, delivery, role-based access control, blockchain persistence, and frontend safeguards). 

This dApp is designed for technical and non-technical users (Developers, Supply Chain Managers, Logistics Companies, etc.)  

**Key Features:**
- Complete Coffee Supply Chain Tracking workflow test scenario
- Real-time batch tracking from farmer → distributor → retailer
- Role-based access control (Farmer, Distributor, Retailer)
- Designed for technical and non-technical users (Supply Chain Managers, Logistics Companies, etc.)

**Architecture Overview:**
```
Remix IDE (deploy)
     ↓
Ethereum Sepolia Contract
     ↓
ethers.js
     ↓
React UI
     ↓
MetaMask Wallet
```

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

The system is a **decentralized supply chain platform** where authorized participants (users) interact with an immutable smart contract through **MetaMask wallet integration**. All state changes are recorded permanently on the **Sepolia Ethereum blockchain**.

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

---    

## Testing & Evaluation

(The application was thoroughly tested on the Sepolia Ethereum Testnet using a defined test matrix covering both valid and invalid scenarios. ) 

### Test Environment Setup  

- **Network**: Sepolia Testnet     
- **Test Accounts**: Three MetaMask accounts:
     - Account 1 (`0x...`): Farmer role
     - Account 2 `(0x...`): Distributor role
     - Account 3 (`0x...`): Retailer role
- **Tools**: MetaMask, Ethers.js, Sepolia Faucet

### Test Coverage   

The smart contract and React frontend were validated across the following core functionalities:      
- ✓ Batch creation  
- ✓ Batch shipment  
- ✓ Batch delivery  
- ✓ Role-based access control  
- ✓ Wallet-based authentication  
- ✓ Duplicate ID prevention  
- ✓ Invalid state transition handling  
- ✓ Unauthorized access prevention  
- ✓ Read operations  
- ✓ Blockchain state persistence  

The system was evaluated (extensively tested) using both **valid workflows** and **validation/error-handling scenarios**, covering end-to-end interactions between the React frontend, Ethereum smart contract, and MetaMask wallet integration. (including batch creation, shipment, delivery, role-based access control, blockchain persistence, and frontend safeguards.)  

### Test Results 

All test cases executed successfully on the Sepolia testnet using MetaMask and Ethers.js, confirming correct behavior across all functional layers. Detailed test results and execution scenarios are available in the [GitHub repository](https://github.com/micag2025/Supply_Chain_project.git).  

---

## Examples Usage UI  (UI Examples)

### (UI Web DApp) Main Interface  

The dashboard features a **wallet connection panel** showing the connected account and role, a **batch management section** with create and lookup forms, and a **real-time overview table** displaying batch details with role-based action buttons for authorized users.

 ![Interface UI](https://github.com/micag2025/Supply_Chain_project/blob/c5307e39eb7c51ea98d939242a2308f948819f76/Screenshots_UI/Screenshot_UI_interface.jpeg)  

 ---

### Example 1: Create and Read Batch (Farmer Only)

 ![Create_Read_Batch](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot_Create_and_ReadBatch.jpeg)    

**Farmer Actions:**  
- Create batch with input validation
- Successfully created batches appear in Overview Table immediately
- Transaction confirmation with blockchain explorer link
- Batch lookup showing product details (ID, name, quantity, state)

**Expected Results:**
- ✓ Batch created with state "Created"
- ✓ Batch readable immediately after creation
- ✓ All fields display correctly
- ✓ Creation timestamp recorded on blockchain

 ---  

### Example 2: Ship Batch Action (Distributor only)  

![Distributor](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot3_Distributor.jpeg) 

![Table_overview_distributor](https://github.com/micag2025/Supply_Chain_project/blob/f8c24ec757ba11fd7fa719b683bdf777bb1651d6/Screenshots_UI/Table_overview_distributor.jpeg)

**Distributor Actions:**  
- Overview Table showing only "Created" batches eligible for shipment
- "Ship" action buttons visible for appropriate batches
- Transaction completion shows updated batch state to "Shipped"
- Distributor address recorded and visible in batch details

**Expected Results:**  
- ✓ Only Distributor can ship batches  
- ✓ State transitions correctly     
- ✓ Distributor address recorded on chain
- ✓ Table updates in real-time    
- ✓ Farmer account cannot ship (buttom disabled)    

---  

### Example 3: Deliver Batch Action (Retailer only)    

![Retailer](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot1_Retailer.jpeg)  

![Updated_table2](https://github.com/micag2025/Supply_Chain_project/blob/1c2af8767725888cff953dfe8555bf92185d9e0d/Screenshots_UI/Updated_table2_retailer.jpeg)

**Retailer Actions:**  
- Overview Table shows "Shipped" batches ready for delivery
- "Deliver" action buttons visible for final handoff
- Transaction completion updates batch state to "Delivered"
- Retailer address recorded on blockchain

**Expected Outcome:**   
- ✓ Only Retailer can deliver batches  
- ✓ State transitions correctly from "Shipped" to "Delivered"   
- ✓ Retailer address recorded on-chain  
- ✓ Table reflects state change instantly  
- ✓ Distributor account cannot deliver (buttom disabled)  

---  

###  Example 4: Invalid Wallet Role

![Invalid Wallet Role](https://github.com/micag2025/Supply_Chain_project/blob/01155a7bb9d825bc91c683d5670fc76d14fa4bff/Screenshots_UI/Screenshot_invalid_wallet_role.jpeg)  

**Scenario:** Distributor attempts to create a batch  

**Expected Result:**    
- ✓ "Create Batch" action unavailable for non-Farmers
- ✓  UI prevents unauthorized action (no transaction sent)  
- ✓  No state change occurs (Clear role indication in interface)
- ✓  No gas consumed (prevented at UI layer)    

---  

###  Example 5: Read Non-Existing Batch  

![Read Non-Existing Batch](https://github.com/micag2025/Supply_Chain_project/blob/01155a7bb9d825bc91c683d5670fc76d14fa4bff/Screenshots_UI/Screenshot_read_non_existing_batch.jpg) 

**Scenario:** User searches for non-Existing batch

**Expected Result:**  
- ✓ Error message displayed (e.g., "Batch not found")
- ✓ No invalid data returned
- ✓ User-friendly error formatting
- ✓ No gas consumed (read-only call)

---  

## Limitations & Workarounds  

### Limitation 1: Remix IDE Constraints  

**Problem**: Remix is designed for rapid smart contract development, not production deployment.  

**Limitations**:  
- No version control integration or collaborative editing  
- No automated deployment pipelines  
- Limited environment management  
- Event indexing not possible (requires The Graph)  
- Slow cmpilation for large projects
- No built-in security audit tools

**Workaround: Migration to Hardhat**  

Hardhat provides a complete development framework:  

```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npx hardhat init
```

**Benefits**:  
- Network configuration management
- Automated deployment scripts
- Local blockchain simulation
- Built-in debugging and testing
- Gas optimization tools
- Security analysis plugins

---  

### Limitation 2: Create React App (CRA) Performance  

**Problem**: CRA uses an older build system (Webpack) that can be slower than modern alternatives.

**Limitations:**
- Slower development server startup (~10-30 seconds)
- Slower hot module reloading  
- Larger production bundle sizes
- High memory consumption  
- Limited customization without ejecting

**Workaround:Migrate to Vite**   

Vite provides a modern, faster development experience:

```bash
npm create vite@latest supplychain-ui -- --template react
cd supplychain-ui
npm install
npm install ethers ethers-abi web3modal   (? npm install ethers)
npm run dev
```

**Benefits:**  
- Instant server start (< 1 second)  
- Lightning-fast HMR (hot module replacement)  
- Smaller production bundles  
- Native ES modules support  
- Better TypeScript support  

---  

### Limitation 3: UI Web dApp Restrictions  

**Current Limitations**:
- **Single-Network Support** – Only works on Sepolia testnet  
- **Fixed Role Mapping** – Roles hardcoded to specific addresses  
- **No Event History Storage** – Events displayed only during current session  
- **No Data Export** – Batch data cannot be exported to CSV
- **Limited Search** – Only searches by exact batch ID  
- **No Notifications** – Users not notified of state changes >TO BE VERIFIED  
- **Single Contract Only** – Cannot manage multiple contracts simultaneously
- **No Batch Filtering**– Cannot filter by date range, state, or handler address

**Potential Improvements**:    
- Implement The Graph for event indexing  
- Add backend database to store batch metadata and search  
- Create batch timeline visualization  
- Add real-time notifications via WebSocket
- Implement multi-contract support  
- Add advanced filtering and sorting  
- Implement batch data export functionality

---  

## Contributing  

Contributions are welcome (to enhance the Supply Chain dApp!) Follows these steps:

1. Fork the GitHub repository  
2. Create a feature branch:    
```bash
git checkout -b feat/your-feature
```
3. Commit and push your changes  
4. Submit a Pull Request with descriptions
5. Follow the repository code style and add tests for major features

---  

## Future Implementations  

Contributors are encouraged to extend the system while maintaining its core architectural principles.   

### Phase 1: Smart Contract Enhancements  

**1. Batch Metadata Expansion**  
- Add additional product attributes (weight, temperature, humidity)  
- Implement batch expiration tracking
- Support batch splitting and merging
- Add quality inspection documentation

**2. Batch Variants** (Currently only supports single batch type. Expand to:)  
- **FreshProduce**: Expiration date, storage temperature
- **Electronics**: Serial numbers, warranty info
- **Pharmaceuticals**: Lot numbers, manufacturing dates, compliance

**3. Advanced Access Control**  
- Temporary access permissions
- Multi-signature approval requirements
- Rate limiting for API calls
- Permit-based model (following EIP-2612 standard)

---  

### Phase 2: Infrastructure & Tools  

(#### Overcome Remix Limitations via Hardhat Migration)

**Phase 2A: Hardhat Setup**    
```bash
npm install --save-dev hardhat
npx hardhat init
```

**Phase 2B: Write Automated Tests**    
- Unit tests for smart contract function
- Integration tests for role-based workflows
- Gas optimization analysis
- Security vulnerability scanning  

```javascript  
// Example test
describe("SupplyChainBatch", () => {
  it("should prevent duplicate batch IDs", async () => {
    await contract.createBatch("BATCH001", "Coffee", 100);
    await expect(
      contract.createBatch("BATCH001", "Coffee", 100)
    ).to.be.revertedWith("Batch ID already exists");
  });
});
```

**Phase 2C: Deploy scripts**    

```
npx hardhat run scripts/deploy.js --network sepolia
# Automates contract deployment
```

**Phase 2D: Local testing**    
```
npx hardhat node
# Runs local blockchain for rapid testing
```
#### Overcome CRA Limitations via Vite Migration

**Phase 2E: Create Vite project**    
```
npm create vite@latest supplychain-ui -- --template react
cd supplychain-ui
npm install ethers
npm run dev
```

**Benefits:**  
- 10x faster development server startup  
- Near-instant HMR updates
- 40-50% smaller production bundles
- Better development performance  

---  

### Phase 3: Frontend Enhancements

#### 1. Event Indexing & History Persistence 
- Integrate The Graph to event indexing
- Store historical batch data in PostgreSQL  
- Implement GraphQL API  
- Build batch timeline visualization

#### 2. Advanced UI Components 
- Batch status timeline with dates and parties
- Interactive supply chain map showing batch locations
- Real-time batch tracking dashboard
- Analytics dashboard with KPIs (average shipment time)

#### 3. Export & Reporting  
- Export batch history to PDF  
- Generate compliance reports  
- CSV export for data analysis
- Email notifications  

#### 4. Mobile Application  
- React Native mobile app
- QR code scanning  
- Offline functionality  
- Push notifications   

---  

### Phase 4: Production Deployment  

#### 1. Smart Contract Deployment to Mainnet  
- Security audit by professional firm
- Gas optimization via Foundry  
- Multi-signature wallet for owner functions
- Timelock for upgrades
  
#### 2. Scalability Solutions    
- Layer 2 deployment (Polygon, Arbitrum, Optimism)
- Side-chain implementations for high-frequency transactions
- State channels for batch-to-batch transfers
  
#### 3. Enterprise Features  
- Multi-organization support
- Role hierarchy (admin, manager, operator)
- Batch templates for common products
- ERP system integration

---

### Phase 5: Ecosystem Integration  

#### 1. API & Webhook System  
- REST API for external batch queries  
- Webhooks for batch state change 
- Third-party integrations  

#### 2. Interoperability  
- Cross-chain bridge for multi-blockchain tracking  
- W3C Verifiable Credentials
- Supply chain standards compliance
  
#### 3. Analytics & Insights  
- Machine learning (ML) anomaly detection  
- Predictive delivery time analyses  
- Supplier performance scoring  
- Environmental impact tracking  

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

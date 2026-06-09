#  Blockchain-Based Supply Chain Tracking System

**Design and Implementation of a Decentralized Supply Chain dApp**

---

## Tags 

`Blockchain`, `Supply Chain Management`, `Solidity`, `Smart Contract`, `Sepolia`, `React`, `MetaMask`, `Ethereum`, `Decentralized Application (DApp)`, `Web3`, `ethers.js`

---

## TL;DR  

This publication provides a step-by-step guide to build a decentralized supply chain management system using **React** and **Web3** technologies. The application integrates a **Solidity smart contract** deployed on the **Sepolia Ethereum testnet** with a **React frontend**, enabling users to create, track, and manage supply chain batches through role-based interactions (e.g.: Farmer, Distributor, Retailer) with complete transparency and immutability. 

To test this **decentralized application (dApp)**  a test scenario, characterised by a practical implementation of a full workflow Test Scenario, representing a **Complete Coffee Supply Chain Tracking System**, has been used, to demonstrate real-world supply chain use cases of the **CoffeeChain: Farm-to-Retail Product Traceability dApp**.

This **decentralized application (dApp)** is designed not only for AI developers, since it supports a wide range of technical and non-technical users such as  Supply Chain Managers & Logistics Companies, Farmers & Agricultural Producers, Distributors & Warehousing Providers, Retailers & End-Consumers and Regulatory & Compliance Officers. 


| Action           | Who does it    |
| ---------------- | -------------- |
| Enter ID         | User           |
| Send request     | React          |
| Query blockchain | Smart contract |
| Return data      | Blockchain     |
| Display UI       | React          |



---

## Key Highlights  

A **Decentralized Application (DApp)** has been successfully implemented with the following core capabilities:  

- **Connect MetaMask** – Seamless wallet integration for authentication and transaction signing
- **Read batch data** – Query blockchain state with getBatchReadable() function  
- **Create a batch** – Initialize new supply chain batches with `createBatch()`
- **Ship batch** – Update batch status during distribution with `shipBatch()`
- **Deliver batch** – Finalize batch delivery with `deliverBatch()`
- **Show batch state in UI** – Real-time dashboard rendering of batch history and current state
  
The development path follows **Remix → React Web3 frontend** architecture:

- **Remix IDE** – Smart contract development, compilation, and rapid testing environment  
- **React/Web3 frontend** – User-facing interface powered by ethers.js for blockchain interaction
  
>_Note_ : Remix and React/Web3 frontend are complementary tools that work together seamlessly in the dApp development workflow.

### Quick Workflow Overview:

- Deploy contract in Remix
- Copy ABI + contract address
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

### Remix IDE

Remix serves as a **Smart Contract Laboratory** for:    
- Writing and testing Solidity code
- Compiling and validating smart contracts    
- Deploying contracts to testnets or mainnets
- Rapid testing of blockchain logic without complex tooling
- ABI and bytecode extraction for frontend integration

### React Frontend

React provides the **User Interface Layer** responsible for:  
- Building responsive, interactive UI components
- Creating forms and tables for batch management
- Handling user interactions and input validation
- Connecting to MetaMask for wallet operations
- Displaying real-time blockchain state in the dashboard

**How Remix IDE and React Connect**  

The integration follows a three-step model:

1. **Remix deploys the smart contract** to the Ethereum blockchain
2. **Blockchain stores and executes** the contract at a specific address
3. **React frontend connects** by referencing:
   - **ABI** (Application Binary Interface) – Function signatures and data types
   - **Contract address** – The location of the deployed contract

```
Remix
   ↓ deploys contract
Ethereum / Sepolia blockchain
   ↑
React frontend connects here  
```  

**The Complete Workflow** 

**STEP 1 — Smart Contract Deployment (Remix)**

The developer (user?) performs:
- Write Solidity smart contract code
- Compile the contract to check for syntax errors
- Deploy to Sepolia testnet via Remix IDE
- Copy the contract address from deployment receipt
- Copy the ABI from Remix interface
- Save both values for React integration

**STEP 2 — React Frontend Setup**

The developer performs:
- Create a new React application
- Install ethers.js library: `npm install ethers`
- Create configuration file with ABI and contract address
- Implement MetaMask connection logic
- Build UI components for each supply chain action
- Connect form handlers to smart contract functions

**Visual Architecture** 

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

Testing demonstrates that the following features have been verified and are production-ready:

✓ **Contract Logic Validation**
  - All smart contract functions execute correctly
  - State transitions follow expected sequences
  - Event emissions trigger as designed

✓ **Role-Based Access Control**
  - Farmer role can only create batches
  - Distributor role can only ship batches  
  - Retailer role can only deliver batches
  - Unauthorized actions are rejected by the contract

✓ **Dashboard Functionality**
  - Real-time rendering of UI components
  - Wallet connection and account detection
  - Role determination based on connected address

✓ **Batch History & Tracking**
  - Batch History Table updates automatically
  - All batches displayed with current state
  - Historical state transitions visible to users

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
- Pinpoint exact batches affected by quality issues
- Identify which retailers received affected products
- Notify relevant parties through dashboard alerts
- Maintain records for liability and safety compliance

**Use Case 3: Supply Chain Optimization**
- Identify bottlenecks in delivery process
- Analyze average time between state transitions
- Optimize distributor and retailer networks
- Reduce spoilage for perishable goods through faster tracking

**Use Case 4: Fair Trade & Ethical Sourcing**
- Verify products originate from certified farms
- Ensure farmer compensation recorded transparently
- Build consumer confidence through provenance verification
- Enable premium pricing for certified batches

---

## Architecture (High-Level)  

The system is a **decentralized supply chain management platform** where authorized participants interact with an immutable smart contract through MetaMask wallet integration. All state changes are permanently recorded on the Sepolia Ethereum testnet, creating an auditable, transparent ledger of batch movements.

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

## Architecture Diagram (Deployment Workflow and Application Flow)  

The **Decentralized Application (DApp)** works with two distinct workflows:

### Deployment Workflow (Developer Setup)

This workflow is executed **once** during initial setup:

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
**Time to Deploy:** ~5-10 minutes (excluding compilation time)  

> _Note_: In Remix IDE the contract deployment itself is permanent on Sepolia, but Remix’s local UI state is not always persistent. Deploying with (using) `Injected Provider - MetaMask -Sepolia Testnet` then:    
- contract is permanently stored on Sepolia  
- batches remain forever  
- createBatch data persists  
- ship/deliver persists  
Even if you close Remix. In the current case, since it is used MetaMask, funded Sepolia ETH, and used multiple accounts, the contract is ALREADY permanently stored on Sepolia. Thus, the data is safe.  

When you reopen Remix later: `Deployed Contracts panel may be EMPTY`. This does NOT mean the contract disappeared. It only means that 
`Remix forgot the local UI session`. Thus, the blockchain contract still exists. 
HOW TO RECONNECT OLD CONTRACT IN REMIX > Open Remix, Select deployment environment, `Injected Provider - MetaMask - Sepolia`, 
Open "Deploy and Run Transations", at address paste your remix adrees contract , and finally the old deployed contract reappears 
in Remix and getBatchReadable(1) will still return the batch , with ID equal to 1, that has been for instace created previously.  

BLOCKCHAIN KEY CONCEPT

The blockchain stores:

contract code
contract state
all batches

Remix stores only:

temporary UI session  

BEST PRACTICE > crea file `deployment.txt` that encloses 
```
Network: Sepolia
Contract Address:0xbffD9f4657a9655670dC66f9470b013bb127073b
```

See [contract-address.txt](https://github.com/micag2025/Supply_Chain_project/blob/1f8fa8e832f894f4a14ac4ede755ec79347d2d93/contracts/deployment/contract-address.txt)



### Runtime User Workflow (dApp Usage)

This workflow is executed **repeatedly** when users interact with the application:

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
**Time per Transaction:** ~10-30 seconds (including Sepolia block time)

---

## Design Principles  

The SupplyChain dApp was designed around the following core principles:

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

## Installation Instructions

This publication includes a complete [GitHub code repository](https://github.com/micag2025/Supply_Chain_project) with all source code, configuration files, and test cases.

### Prerequisites  

Ensure the following are installed on your system:

- **Node.js** (version >= 18) – Download from [nodejs.org](https://nodejs.org/)
- **npm** (included with Node.js) or **yarn** – Check with `npm --version`
- **MetaMask browser extension** – Install from [metamask.io](https://metamask.io/)
- **Remix IDE** (optional ?, for smart contract development) – Access at [remix.ethereum.org](https://remix.ethereum.org/)
- **Git** – For cloning the repository

### Clone and Install  

1. **Clone the repository:**

```bash   
git clone https://github.com/micag2025/Supply_Chain_project.git
cd Supply_Chain_project
```

2. **Install Node dependencies:**

```bash
npm install
```
This installs all required packages including ethers.js, react-dom, and other dependencies listed in package.json.  

3. **Install Node dependencies:**

### Environment Configuration
Create a `.env file` in the project root directory (copy from .env.example):

```bash  
REACT_APP_CONTRACT= YOUR_DEPLOYED_CONTRACT_ADDRESS
REACT_APP_NETWORK_ID=11155111  (?????)
REACT_APP_NETWORK_NAME=Sepolia  
```  

***How to obtain contract address:***

1. Deploy the smart contract via Remix IDE
2. After successful deployment, copy the contract address from the deployment receipt
3. Paste into .env file  

>_Note_: contract address in Remix “Deployed Contracts” panel. NOT farmer/distributor/retailer addresses.
---  

## Running the Application  

### Start the React Development Server  

Launch the UI Web Decentralized Application:

```bash  
npm start
```
The development server will start and automatically open your browser.  

### Expected Output  

```
Compiled successfully!

You can now view supplychain-ui in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://[YOUR_IP]:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

### Open in Browser  

1. Navigate to `http://localhost:3000` (should open automatically)
2. MetaMask will prompt for wallet connection  
3. Select the account representing your role (Farmer, Distributor, or Retailer)  
4. Approve connection request in MetaMask popup  
5. Dashboard loads with role-specific options  

### Connecting Different Roles
To test the full workflow, open multiple browser windows/tabs with different MetaMask accounts:

- **Tab 1**: Account 1 = Farmer (create batches)
- **Tab 2**: Account 2 = Distributor (ship batches)
- **Tab 3**: Account 3 = Retailer (deliver batches)

### Advanced Dashboard Features
The dashboard includes the following sections:  

**1. Wallet Connection Panel**  
- Displays currently connected MetaMask account  
- Shows account balance in Sepolia ETH
- Displays detected role (Farmer/Distributor/Retailer)
- `Connect Wallet` button initiates MetaMask connection
- `Disconnect` button clears the connection

**2. Batch Lookup (Manual Verification)**    
- Input field for entering a specific batch ID
- `Search` button queries blockchain for batch details
- Displays batch name, quantity, current state, and all handler addresses
- Useful for verification and debugging
- Shows "Batch not found" if ID doesn't exist

**3. Overview Table (Batch History)**    
- Displays all batches stored in smart contract
- Columns: ID, Name, Quantity, State, Farmer, Distributor, Retailer
- Sortable by any column
- Shows action buttons based on user's role and batch state
- Updates automatically when new transactions complete
- Scrollable for large batch lists
  
**4. Create Batch Section (Farmer Only)**  
- Visible only when connected as Farmer role
- Input fields: Batch ID, Product Name, Quantity
- `Create` button submits transaction to smart contract
- Shows transaction hash and confirmation link
- Updates Overview Table automatically upon completion
- Validates: duplicate IDs prevented, quantity must be > 0
  
**5. Ship Batch Section (Distributor Only)**
- Visible only when connected as Distributor role
- Appears in Overview Table for batches in `Created` state
- `Ship` button updates batch state to `Shipped`
- Confirms distributor address recorded on blockchain
- Shows transaction confirmation and new state

**6. Deliver Batch Section (Retailer Only)**  
- Visible only when connected as Retailer role
- Appears in Overview Table for batches in `Shipped` state
- `Deliver` button updates batch state to `Delivered`
- Confirms retailer address recorded on blockchain
- Shows transaction confirmation and completion message

### Testing & Evaluation

The application was thoroughly tested on the Sepolia Ethereum Testnet using a defined test matrix covering both valid and invalid scenarios.  

#### Test Environment Setup
- **Network**: Sepolia Testnet (Chain ID: 11155111)  
- **Test Accounts**: Three MetaMask accounts representing different roles  
     - Account 1 (`0x...`): Farmer role
     - Account 2 `(0x...`): Distributor role
     - Account 3 (`0x...`): Retailer role
- **Test Data**: Multiple batches created across different test sessions
- **Tools**: MetaMask, Ethers.js, Sepolia Faucet

#### Test Scope  
The smart contract and React frontend were validated across the following core functionalities:  
✓ Batch creation
✓ Batch shipment
✓ Batch delivery
✓ Role-based access control
✓ Wallet-based authentication
✓ Duplicate ID prevention
✓ Invalid state transition handling
✓ Unauthorized access prevention
✓ Read operations
✓ Blockchain state persistence

The system was evaluated (extensively tested) using both **valid workflows** and **validation/error-handling scenarios**, covering end-to-end interactions between the React frontend, Ethereum smart contract, and MetaMask wallet integration. (including batch creation, shipment, delivery, role-based access control, blockchain persistence, and frontend safeguards.)

#### Results of Testing  
All test cases were executed successfully on the Sepolia Ethereum network using MetaMask and Ethers.js, confirming correct system behavior across all functional layers.

Detailed test results and execution scenarios are available in the [GitHub repository](https://github.com/micag2025/Supply_Chain_project.git).  

---

## Examples Usage UI  

### UI Web DApp Main Interface

 ![Interface UI](https://github.com/micag2025/Supply_Chain_project/blob/c5307e39eb7c51ea98d939242a2308f948819f76/Screenshots_UI/Screenshot_UI_interface.jpeg)  

The main dashboard displays the connected wallet information at the top, role detection, and all available actions based on the user's permissions.

 ---

### Example 1: (Valid Test Case -) Read Batch and Create Batch (Farmer Role)  

 ![Create_Read_Batch](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot_Create_and_ReadBatch.jpeg)    

**Farmer Actions:**
- Batch lookup showing product details (ID, name, quantity, current state)
- Create Batch form with input validation
- Successfully created batches appearing in Overview Table immediately
- Transaction confirmation with blockchain explorer link 

 ---  

### Example 2: (Valid Test Case -) Ship Batch Action (Distributor Role)  

![Distributor](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot3_Distributor.jpeg)  

**Distributor Actions:**  
- Overview Table showing only "Created" batches eligible for shipment
- "Ship" action buttons visible for appropriate batches
- Transaction completion shows updated batch state to "Shipped"
- Distributor address recorded and visible in batch details

---  

### Example 3: (Valid Test Case -) Deliver Batch Action (Retailer Role)    

![Retailer](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot1_Retailer.jpeg)    

**Retailer Actions:**  
- Overview Table showing batches in "Shipped" state ready for delivery
- "Deliver" action buttons visible for final handoff
- Transaction completion shows batch state changed to "Delivered"
- Retailer address recorded on blockchain
- Full batch journey chain complete

---  

### Example ....: (Invalid Test Case -) Unauthorized Shipment Attempt  TO BE EXCLUDED? 

SCREENSHOT TO BE ENCLOSED  > see README.MD  


**Scenario**: Farmer attempts to ship a batch (role mismatch)

**Expected Behavior**:  
- Farmer clicks "Ship" button on batch in "Created" state
- "Ship" button is not visible in UI (role-based filtering)
- If attempted directly via contract call, transaction reverts
- Error message: "Only Distributor can perform shipment"  / Transaction reverted with role validation error.
- No state change on blockchain
- User notified of authorization failure


###  Example 5: (Invalid Test Case:) Invalid Wallet Role

![Invalid Wallet Role](https://github.com/micag2025/Supply_Chain_project/blob/01155a7bb9d825bc91c683d5670fc76d14fa4bff/Screenshots_UI/Screenshot_invalid_wallet_role.jpeg)  

Scenario: Distributor attempts to create a batch.

**How to Test:**   

1. Connect with  Distributor account
2. In the Create Batch Section:  
  - Enter a unique Batch ID (e.g., "BATCH001")  
  - Enter Product Name (e.g., "Cof")
  - Click Create Batch
3.  Transaction fails (buttom create is blocked)


**Expected Result:**  
- Access denied
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
- Access denied
- ✗ Error message displayed   
- ✓ No state change occurs
- ✓ Error displayed in user-friendly format :`Batch not found`     

---  

## Limitations & Workarounds  

### Limitation 1: Remix IDE Constraints  

**Problem**: Remix is designed for rapid smart contract development and testing, not production deployment or integration.  

**Limitations**:  
- No version control integration or collaborative editing  
- No automated deployment pipelines or scripts  
- Limited environment management (no staging/production separation)  
- Event indexing not possible (requires The Graph or similar)  
- Compilation can be slow for large projects
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

### Limitation 2: Create React App (CRA) Performance  

**Problem**: CRA uses an older build system (Webpack) that can be slower than modern alternatives.

**Limitations:**
- Slower development server startup (~10-30 seconds)
- Slower hot module reloading during development
- Larger bundle sizes in production
- More memory consumption during build
- Limited customization without ejecting

**Workaround:** Migrate to Vite  
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


### Limitation 3: UI Web dApp Restrictions  

**Current Limitations**:
- **Single-Network Support** – Only works on Sepolia testnet; mainnet deployment requires code changes
- **Fixed Role Mapping** – Roles hardcoded to specific addresses; dynamic role assignment not implemented
- **No Event History Storage** – Events displayed only during current session; persistent history requires backend
- **No Data Export** – Batch data cannot be exported to CSV or other formats
- **Limited Search** – Only searches by exact batch ID; no fuzzy search or partial matches
- **No Notifications** – Users not notified of state changes; requires polling
- **Single Contract Only** – Cannot manage multiple SupplyChain contracts simultaneously
- **No Batch Filtering**– Cannot filter by date range, state, or handler address

**Potential Improvements**:    
- Implement The Graph for event indexing and persistent history  
- Add backend database to store batch metadata and search indices  
- Create batch timeline visualization component
- Add real-time notifications via WebSocket
- Implement multi-contract support with contract selector
- Add advanced filtering and sorting options
- Implement batch data export functionality

---  

## Contributing  

Contributions are welcome to enhance the Supply Chain dApp! The project follows standard open-source contribution practices.

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

Contributors are encouraged to extend the system while maintaining its core architectural principles. The following areas represent validated directions for future development.

### Phase 1: Smart Contract Enhancements  

**1. Batch Metadata Expansion**  
- Add additional product attributes (weight, temperature, humidity)  
- Implement batch expiration tracking
- Support batch splitting and merging
- Add notes/documentation field for quality inspections

**2. Batch Variants** Currently only supports single batch type. Expand to:  
- FreshProduce: Includes expiration date, storage temperature
- Electronics: Serial numbers, warranty information  
- Pharmaceuticals: Lot numbers, manufacturing dates, regulatory compliance

**3. Advanced Access Control**  
- Implement temporary access permissions
- Multi-signature approval requirements
- Rate limiting for API calls
- Permit-based model (following EIP-2612 standard)

### Phase 2: Infrastructure & Tools  

#### Overcome Remix Limitations via Hardhat Migration

**Phase 2A: Set up Hardhat environment**    
```bash
npm install --save-dev hardhat
npx hardhat init
# Creates hardhat.config.js and test files
```

**Phase 2B: Write automated tests**    
- Unit tests for each smart contract function
- Integration tests for role-based workflows
- Gas optimization analysis
- Security vulnerability scanning  

```java
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
- Smaller production bundles (40-50% reduction)
- Better performance on development machines

### Phase 3: Frontend Enhancements

#### 1. Event Indexing & History Persistence 
- Integrate The Graph to index blockchain events
- Store historical batch data in PostgreSQL backend
- Implement GraphQL API for complex queries
- Build batch timeline visualization

#### 2. Advanced UI Components 
- Batch status timeline with dates and responsible parties
- Interactive supply chain map showing batch locations
- Real-time batch tracking dashboard
- Analytics dashboard with KPIs (average shipment time, etc.)

#### 3. Export & Reporting  
- Export batch history to PDF with digital signatures
- Generate compliance reports for regulatory audits
- CSV export for data analysis
- Email notifications for batch state changes

#### 4. Mobile Application  
- React Native mobile app for on-the-go batch lookup
- QR code scanning for quick batch ID entry
- Offline functionality with sync capability
- Push notifications for batch arrivals  

### Phase 4: Production Deployment  

#### 1. Smart Contract Deployment to Mainnet  
- Security audit by professional firm
- Gas optimization via Foundry or similar tools
- Multi-signature wallet for contract owner functions
- Timelock for critical upgrades
  
#### 2. Scalability Solutions    
- Layer 2 deployment (Polygon, Arbitrum, Optimism)
- Side-chain implementation for high-frequency transactions
- State channels for batch-to-batch transfers
  
#### 3. Enterprise Features  
- Multi-organization support
- Role hierarchy (admin, manager, operator)
- Batch batch templates for common products
- Integration with existing ERP systems  

### Phase 5: Ecosystem Integration  

#### 1. API & Webhook System  
- REST API for external batch queries  
- Webhooks for batch state change notifications
- Third-party integrations (logistics APIs, customs systems)

#### 2. Interoperability  
- Cross-chain bridge for multi-blockchain tracking  
- Standards compliance (W3C Verifiable Credentials)  
- Integration with existing supply chain standards
  
#### 3. Analytics & Insights  
- Machine learning for anomaly detection  
- Predictive analytics for estimated delivery times  
- Supplier performance scoring  
- Environmental impact tracking  

---  

## References    

Official documentation and resources for technologies used in this project:  

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

michelaagostini73@gmail.com

---

## Acknowledgements  

TO BE CHANGED AND DRAFTED  
This project was built with contributions and inspiration from ...........................who have reviewed, tested, and improved this project
Special thanks to all developers and supply chain professionals who provided feedback during development and testing phases.

--- 

# System Architecture

---

## Overview  

The **Supply Chain Tracking dApp** is a blockchain-based application that enables authorized users to create, track, ship, and deliver product batches through a decentralized workflow.

The system combines a **React frontend**, **MetaMask wallet authentication**, **ethers.js** blockchain communication, and a **Solidity smart contract** deployed on the **Ethereum Sepolia Testnet**.

The architecture is designed as a modular proof-of-concept that demonstrates transparent, immutable, and role-controlled supply chain management.  

---

### Reference Use Case: Coffee Supply Chain

The system was validated using a **Farm-to-Retail workflow**:

```
Farmer (Creator)
    ↓
    ├─ Creates coffee batches
    ├─ Records origin and details
    └─ Manages initial state
    
Distributor (Transporter)
    ↓
    ├─ Ships approved batches
    ├─ Records transit state
    └─ Ensures chain continuity
    
Retailer (Final Handler)
    ↓
    ├─ Receives and delivers batches
    ├─ Records final destination
    └─ Completes supply chain cycle
```

---  

## High-Level Architecture  

```
            ┌─────────────────────────┐
            │       Remix IDE         │
            │  Solidity Smart Contract│
            └───────────┬─────────────┘
                        │ Deploy
                        ▼
┌──────────────────────────────────────────────────┐
│            Ethereum Sepolia Testnet             │
│        Supply Chain Smart Contract              │
└───────────────────────▲─────────────────────────┘
                        │
                        │ ethers.js
                        │
                ┌───────┴────────┐
                │    MetaMask    │
                │ Wallet Provider│
                └───────▲────────┘
                        │
                        │ Account Connection
                        │ Transaction Signing
                        ▼
┌──────────────────────────────────────────────────┐
│                  React Frontend                  │
│         Supply Chain Tracking Dashboard          │
└──────────────────────────────────────────────────┘

```    

---

## Architecture Components

### React Frontend  

The frontend provides the user interface used to interact with the supply chain system.

Responsibilities include:  

- Wallet connection management  
- Batch creation forms  (Farmer)
- Batch shipment and delivery actions (Distributor and Retailer, respectively) 
- Batch lookup and traceability  
- Transaction status display (table) 
- Role-based dashboard rendering      

---

### MetaMask Wallet

MetaMask serves as the authentication and transaction-signing layer.  

Responsibilities include:  

- User identity verification  
- Wallet account management  (e.g.: store private keys, manage multiple accounts)
- Transaction approval  (e.g.: sign transactions with user's private key before submission)
- Blockchain network selection (e.g..: allow user to select Sepolia testnet)
- Gas fee confirmation  

The application determines user permissions based on the connected wallet address. Thus, application cannot access private keys and further all transaction approval requires explicit user action  

---  

### ethers.js

`ethers.js` acts as the communication layer between the React frontend and the deployed smart contract.

Responsibilities include:  

- Reading blockchain data  
- Sending transactions  
- Querying smart contract state  
- Listening to contract events  
- Handling transaction confirmations  
- ABI Encoding   

---  

### Smart Contract (Solidity)

The Solidity smart contract contains the core business logic of the application.

Responsibilities include:  

- **Batch lifecycle management** : ensure only authorized roles can execute specific functions  
- **State transition validation** : verify batch status transitions (`Created → Shipped → Delivered`) are legal 
- **Role-based access control**: store and enforce role assignments for addresses
- **Blockchain state persistence**  
- **Event emission**  

The current lifecycle is the following:

Created  
   ↓  
Shipped  
   ↓  
Delivered  

Only authorized participants can perform valid state transitions.

#### Core Data Structures   

```solidity

enum State { Created, Shipped, Delivered }

struct Batch {
        uint id;
        string name;
        uint quantity;
        State state;
        address farmer;
        address distributor;
        address retailer;
        uint createdAt;
        uint shippedAt;
        uint deliveredAt;
    }
```

---  

### Ethereum Sepolia Testnet

The Sepolia Testnet provides the blockchain infrastructure used for development and testing.

Benefits include:

- Real Ethereum environment  
- Free test ETH  
- Public transaction verification  
- Safe testing without financial risk  

---  

## Component Interaction Flow  

The following sequence illustrates a **typical batch creation workflow**.

```text
User
  │
  ▼
React Frontend
  │
  ▼
Connect Wallet
  │
  ▼
MetaMask
  │
  ▼
Sign Transaction
  │
  ▼
ethers.js
  │
  ▼
Smart Contract
  │
  ▼
Sepolia Testnet
```

The same process is used for shipment and delivery operations.  

---  

## Smart Contract Design  

### Batch Structure

Each batch contains:    

| Field       | Description      |
| ----------- | --------------- |
| Batch ID     | Unique identifier  |
| Product Name| Product description    |
| Quantity   | Product quantity|
| Current State   | Created, Shipped, Delivered|
| Farmer Address  | Batch creator|
| Distributor Address   | Shipment handler|
| Retailer Address   | Delivery handler|

---

### State Management

The smart contract enforces valid lifecycle transitions.

| Current State       | Allow Next State      |
| ----------- | --------------- |
| Created     | Shipped  |
| Shipped | Delivered   |
| Delivered   | None|

> _Note_ : Invalid transitions are automatically rejected.

---  

### Access Control Model

Role-based permissions are enforced through wallet address verification.  

| Role       | Permissions      |
| ----------- | --------------- |
| Farmer     | Create batches  |
| Distributor | Ship batches   |
| Retailer   | Deliver batches |

> _Note_ : Unauthorized operations are rejected by the smart contract.

---  

## Data Flow

### Batch Creation

```text
Farmer
   │
   ▼
Create Batch
   │
   ▼
MetaMask Confirmation
   │
   ▼
Blockchain Transaction
   │
   ▼
Batch Stored On-Chain
```

### Batch Shipment

```text
Distributor
   │
   ▼
Ship Batch
   │
   ▼
MetaMask Confirmation
   │
   ▼
State = Shipped
```

### Batch Delivery

```text
Retailer
   │
   ▼
Deliver Batch
   │
   ▼
MetaMask Confirmation
   │
   ▼
State = Delivered
```

---

## Security Considerations  (TO BE ENCLOSED ?)

The application implements multiple layers of validation.

### Frontend Validation

* Required field validation
* Wallet connection checks
* Role verification
* Network validation
* User feedback and error handling

### Smart Contract Validation

* Role-based access control
* Duplicate batch prevention
* Invalid state transition prevention
* Transaction authorization checks

### Blockchain Security

* Cryptographically signed transactions
* Immutable transaction history
* Decentralized state storage
* Public auditability

---

## Deployment Architecture

### Development Environment

| Component                  | Technology |
| -------------------------- | ---------- |
| Smart Contract Development | Remix IDE  |
| Frontend Development       | React      |
| Package Management         | Node.js    |
| Wallet Integration         | MetaMask   |
| Blockchain Communication   | ethers.js  |


### Deployment Target

| Component       | Target                         |
| --------------- | ------------------------------ |
| Smart Contract  | Ethereum Sepolia Testnet       |
| Frontend        | Localhost / Static Web Hosting |
| Wallet Provider | MetaMask                       |

---

## Current Limitations  (TO BE ENCLOSED ? )

The current architecture is intentionally simplified as a proof-of-concept.

Current limitations include:

* Sepolia-only deployment
* Fixed wallet-role assignments
* Limited lifecycle states
* No event indexing layer
* No analytics dashboard
* No QR-code integration
* No inventory management

These limitations are discussed in more detail in the publication and project roadmap.

---

## Future Architecture Enhancements (TO BE ENCLOSED ?) 

Planned improvements include:

* Hardhat migration
* Vite migration
* Dynamic role management
* Expanded lifecycle states
* IPFS integration
* QR-code traceability
* The Graph integration
* Analytics dashboards
* Inventory management
* Layer-2 deployment (Polygon / Arbitrum)
* Multi-network support
* Real-time notifications
* IoT sensor integration

---

## Related Documentation

* `README.md`
* `docs/deployment.md`
* `docs/testing.md`
* `docs/metamask-setup.md`

For implementation validation and test results, see `docs/testing.md`.











//////////////////////////////////////////////////
### Key Characteristics

- **Decentralized**: No central authority; all state transitions recorded on-chain
- **Transparent**: All supply chain participants can audit the complete history
- **Immutable**: Once recorded on the blockchain, data cannot be altered
- **Role-Based**: Three predefined supply chain actors with distinct permissions
- **Testnet-Ready**: Deployed on Ethereum Sepolia for development and testing

### System Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Blockchain** | Ethereum Sepolia Testnet | Immutable ledger, state storage, event logging |
| **Smart Contract** | Solidity | Business logic, role enforcement, state management |
| **Web3 Bridge** | ethers.js | JavaScript interface to blockchain |
| **Wallet** | MetaMask | Account management, transaction signing |
| **Frontend** | React | User interface, state management |

### Reference Use Case: Coffee Supply Chain

The system was validated using a **Farm-to-Retail workflow**:

```
Farmer (Creator)
    ↓
    ├─ Creates coffee batches
    ├─ Records origin and details
    └─ Manages initial state
    
Distributor (Transporter)
    ↓
    ├─ Ships approved batches
    ├─ Records transit state
    └─ Ensures chain continuity
    
Retailer (Final Handler)
    ↓
    ├─ Receives and delivers batches
    ├─ Records final destination
    └─ Completes supply chain cycle
```

---

## Architecture Diagram

### System Architecture Overview

```
┌──────────────────────────────────────────────────────────┐
│                    USER TIER                             │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐    │
│  │   Farmer    │  │ Distributor │  │   Retailer   │    │
│  └──────┬──────┘  └──────┬──────┘  └──────┬───────┘    │
└─────────┼──────────────────┼──────────────┼─────────────┘
          │                  │              │
          └──────────────────┼──────────────┘
                             │
┌────────────────────────────▼──────────────────────────────┐
│               FRONTEND TIER (React)                       │
│  ┌──────────────────────────────────────────────────┐   │
│  │          Dashboard & UI Components               │   │
│  │  • Wallet Connection Module                      │   │
│  │  • Role Detection & Authorization                │   │
│  │  • Batch Management Forms                        │   │
│  │  • Transaction History Table                     │   │
│  │  • Real-time Event Listeners                     │   │
│  └────────────────────┬─────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
┌───────▼────────┐  ┌──▼────────────┐  │
│   MetaMask     │  │  ethers.js    │  │
│   (Signer)     │  │  (Web3 RPC)   │  │
└───────┬────────┘  └──┬────────────┘  │
        │              │               │
        └──────────────┼───────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│         BLOCKCHAIN TIER (Ethereum Sepolia)              │
│  ┌──────────────────────────────────────────────────┐  │
│  │    Smart Contract (SupplyChain.sol)              │  │
│  │                                                  │  │
│  │  State Variables:                                │  │
│  │  • batches[] → Batch records                     │  │
│  │  • roles[] → User permissions                    │  │
│  │                                                  │  │
│  │  Functions:                                      │  │
│  │  • createBatch() → Farmer only                   │  │
│  │  • shipBatch() → Distributor only                │  │
│  │  • deliverBatch() → Retailer only                │  │
│  │  • getBatchReadable() → All roles                │  │
│  │                                                  │  │
│  │  Events:                                         │  │
│  │  • BatchCreated                                  │  │
│  │  • BatchShipped                                  │  │
│  │  • BatchDelivered                                │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  Ethereum Sepolia Testnet - Permanent State Storage    │
└─────────────────────────────────────────────────────────┘
```

### Deployment Architecture

```
┌──────────────────────────────┐
│       Development Phase      │
│  ┌──────────────────────┐   │
│  │   Remix IDE          │   │
│  │ • Smart Contract     │   │
│  │ • Testing            │   │
│  │ • Compilation        │   │
│  │ • ABI Generation     │   │
│  └──────────┬───────────┘   │
└─────────────┼────────────────┘
              │ Deploy
              ▼
┌──────────────────────────────┐
│   Blockchain Phase           │
│  ┌──────────────────────┐   │
│  │  Sepolia Testnet     │   │
│  │ • Contract Address   │   │
│  │ • State Persistence  │   │
│  │ • Event Logs         │   │
│  │ • Gas Calculations   │   │
│  └──────────┬───────────┘   │
└─────────────┼────────────────┘
              │ Reference
              ▼
┌──────────────────────────────┐
│     Production Phase         │
│  ┌──────────────────────┐   │
│  │   React Frontend     │   │
│  │ • localhost:3000     │   │
│  │ • User Interactions  │   │
│  │ • MetaMask Bridge    │   │
│  │ • Real-time Updates  │   │
│  └──────────────────────┘   │
└──────────────────────────────┘
```

---

## Component Responsibilities

### 1. React Frontend

**Primary Responsibility**: User interface layer for blockchain interaction

| Responsibility | Details |
|---|---|
| **Wallet Connection** | Prompt MetaMask connection, manage account state, detect network |
| **Role Detection** | Map connected account to supply chain role (Farmer/Distributor/Retailer) |
| **UI Rendering** | Display role-specific dashboards and transaction history |
| **Form Management** | Collect batch data, validate inputs, prepare transaction payloads |
| **Transaction Submission** | Construct and submit transactions via ethers.js |
| **Event Listening** | Monitor smart contract events for real-time UI updates |
| **Error Handling** | Display user-friendly error messages and transaction feedback |
| **State Management** | Manage UI state, batch data, transaction status, loading indicators |

**Key Features**:
- Wallet connection modal
- Role-based dashboard layout
- Create batch form (Farmer)
- Ship batch form (Distributor)
- Deliver batch form (Retailer)
- Batch lookup/search
- Transaction history table
- Real-time transaction confirmation feedback

### 2. Smart Contract (Solidity)

**Primary Responsibility**: Source of truth for supply chain state and logic enforcement

| Responsibility | Details |
|---|---|
| **Role Management** | Store and enforce role assignments for addresses |
| **State Validation** | Verify batch status transitions are legal (Created → Shipped → Delivered) |
| **Data Persistence** | Store batch records with immutable audit trail |
| **Access Control** | Ensure only authorized roles can execute specific functions |
| **Event Emission** | Emit events for off-chain listeners (frontend, indexers, analytics) |
| **Reentrancy Protection** | Prevent attack vectors and ensure transaction safety |

**Core Data Structures**:
```solidity
struct Batch {
    uint256 id;
    address creator;
    uint256 timestamp;
    string productInfo;
    BatState state;
    address currentHandler;
}

enum BatchState { Created, Shipped, Delivered }
```

### 3. MetaMask Wallet

**Primary Responsibility**: Secure transaction signing and account management

| Responsibility | Details |
|---|---|
| **Account Management** | Store private keys (client-side only), manage multiple accounts |
| **Transaction Signing** | Sign transactions with user's private key before submission |
| **Network Selection** | Allow user to select Sepolia testnet |
| **Gas Management** | Display gas estimates and allow user approval |
| **Message Signing** | Sign arbitrary messages for verification (future feature) |

**Security Model**: 
- Private keys **never** leave the user's device
- Application cannot access private keys
- All transaction approval requires explicit user action

### 4. Ethers.js Bridge

**Primary Responsibility**: JavaScript interface to Ethereum blockchain

| Responsibility | Details |
|---|---|
| **RPC Communication** | Send JSON-RPC requests to Sepolia RPC endpoint |
| **ABI Encoding** | Encode function calls according to contract ABI |
| **Transaction Construction** | Build transaction objects (to, data, gas, gasPrice) |
| **Event Decoding** | Parse and decode contract events |
| **Contract Interaction** | Read-only calls (view functions) and state-changing calls |

### 5. Ethereum Sepolia Testnet

**Primary Responsibility**: Immutable distributed ledger and execution environment

| Responsibility | Details |
|---|---|
| **State Storage** | Persist smart contract state (batches, roles, mappings) |
| **Transaction Execution** | Execute smart contract functions in order, update state |
| **Event Logging** | Permanently record events with transaction hash and block number |
| **Consensus** | Validate transactions and add to blockchain |

---

## Smart Contract Design

### Contract Structure

**File**: `contracts/SupplyChain.sol`

### Data Model

```solidity
// Batch Record
struct Batch {
    uint256 id;
    address creator;           // Farmer address
    uint256 createdAt;
    string productName;
    string productBatch;       // Batch identifier
    uint256 quantity;
    string origin;
    BatchState state;          // Current lifecycle state
    address lastUpdatedBy;     // Last actor in chain
    uint256 lastUpdatedAt;
}

// State Lifecycle
enum BatchState {
    Created,    // (0) Initial state - created by Farmer
    Shipped,    // (1) In transit - marked by Distributor
    Delivered   // (2) Delivered - marked by Retailer
}

// Role Definitions
enum Role {
    Farmer,     // Can create batches
    Distributor,// Can mark batches as shipped
    Retailer    // Can mark batches as delivered
}
```

### State Variables

```solidity
// Batch storage
mapping(uint256 => Batch) public batches;
uint256 public batchCount;

// Role assignment
mapping(address => Role) public userRoles;
mapping(address => bool) public isAuthorized;

// Contract metadata
address public owner;
uint256 public deploymentTime;
```

### Core Functions

#### 1. createBatch() - Farmer Only

```
Purpose: Create a new supply chain batch
Caller: Farmer role only
Input: productName, productBatch, quantity, origin
Validations:
  ✓ Caller has Farmer role
  ✓ productName is not empty
  ✓ quantity > 0
  ✓ origin is not empty
Output: batchId (uint256)
Events: BatchCreated(uint256 indexed batchId, address indexed creator, uint256 timestamp)
```

#### 2. shipBatch() - Distributor Only

```
Purpose: Mark batch as shipped (in transit)
Caller: Distributor role only
Input: batchId
Validations:
  ✓ Caller has Distributor role
  ✓ Batch exists
  ✓ Batch state is Created
  ✓ Batch not already shipped
Output: Success confirmation
Events: BatchShipped(uint256 indexed batchId, address indexed distributor, uint256 timestamp)
```

#### 3. deliverBatch() - Retailer Only

```
Purpose: Mark batch as delivered (final state)
Caller: Retailer role only
Input: batchId
Validations:
  ✓ Caller has Retailer role
  ✓ Batch exists
  ✓ Batch state is Shipped
  ✓ Batch not already delivered
Output: Success confirmation
Events: BatchDelivered(uint256 indexed batchId, address indexed retailer, uint256 timestamp)
```

#### 4. getBatchReadable() - All Roles

```
Purpose: Query batch information
Caller: Any authorized user
Input: batchId
Validations:
  ✓ Batch exists
  ✓ Caller is authorized
Output: Batch struct (unpacked for frontend consumption)
State Changes: None (view function)
Gas Cost: Minimal (read-only)
```

### Events

Events are emitted on all state transitions, enabling off-chain listeners:

```solidity
event BatchCreated(
    uint256 indexed batchId,
    address indexed creator,
    string productName,
    uint256 timestamp
);

event BatchShipped(
    uint256 indexed batchId,
    address indexed distributor,
    uint256 timestamp
);

event BatchDelivered(
    uint256 indexed batchId,
    address indexed retailer,
    uint256 timestamp
);

event RoleAssigned(
    address indexed user,
    uint8 role,
    uint256 timestamp
);
```

### Access Control Strategy

**Role-Based Access Control (RBAC)**:

```
Farmer
├─ createBatch() ✓
├─ shipBatch() ✗
├─ deliverBatch() ✗
└─ getBatchReadable() ✓

Distributor
├─ createBatch() ✗
├─ shipBatch() ✓
├─ deliverBatch() ✗
└─ getBatchReadable() ✓

Retailer
├─ createBatch() ✗
├─ shipBatch() ✗
├─ deliverBatch() ✓
└─ getBatchReadable() ✓
```

---

## Frontend Architecture

### Component Hierarchy

```
App (Main Container)
├── ConnectWallet (MetaMask Integration)
├── RoleDetector (Map address to role)
├── Dashboard (Role-Specific)
│   ├── FarmerDashboard
│   │   ├── CreateBatchForm
│   │   └── BatchHistory
│   ├── DistributorDashboard
│   │   ├── ShipBatchForm
│   │   └── BatchHistory
│   └── RetailerDashboard
│       ├── DeliverBatchForm
│       └── BatchHistory
├── BatchLookup (Search specific batch)
├── TransactionStatus (Feedback & Confirmation)
└── NotificationCenter (Alerts & Events)
```

### Technology Stack

| Technology | Purpose | Version |
|---|---|---|
| **React** | UI framework | 18.x |
| **ethers.js** | Web3 interaction | 6.x |
| **MetaMask Provider** | Wallet integration | Latest |
| **React Router** | Navigation | 6.x |
| **State Management** | (React Context or Redux) | - |

### Key Modules

#### 1. WalletConnector.jsx

Handles MetaMask initialization and account management:

```
Responsibilities:
• Detect MetaMask availability
• Request account connection
• Listen for account/network changes
• Maintain connection state
• Display connection status
```

#### 2. RoleDetector.jsx

Maps Ethereum address to supply chain role:

```
Flow:
1. Get current connected account
2. Query smart contract for user role
3. Store role in application state
4. Render role-specific UI
5. Prevent unauthorized actions
```

#### 3. BatchForm Components

- **CreateBatchForm**: Farmer inputs (product name, batch, quantity, origin)
- **ShipBatchForm**: Distributor inputs (batch ID confirmation)
- **DeliverBatchForm**: Retailer inputs (batch ID confirmation)

Each form:
- Validates inputs before submission
- Calls ethers.js contract function
- Shows loading state during transaction
- Displays confirmation or error message

#### 4. BatchHistory.jsx

Displays paginated table of completed transactions:

```
Columns:
• Batch ID
• Product Name
• Status (Created/Shipped/Delivered)
• Created/Updated Timestamp
• Current Handler Address
• Transaction Hash (link to block explorer)
```

#### 5. EventListener.jsx

Real-time blockchain event monitoring:

```
Responsibilities:
• Subscribe to smart contract events
• Filter events by batch ID (optional)
• Update UI on event emission
• Display real-time notifications
• Maintain event log
```

### State Management

Application state structure:

```javascript
{
  wallet: {
    connected: boolean,
    address: string,
    network: string,
  },
  user: {
    role: enum (Farmer|Distributor|Retailer),
    isAuthorized: boolean,
  },
  contract: {
    address: string,
    abi: array,
    provider: ethers.Provider,
    signer: ethers.Signer,
  },
  batches: {
    list: Batch[],
    selectedBatch: Batch | null,
    loading: boolean,
  },
  transactions: {
    pending: Transaction[],
    history: Transaction[],
    lastError: string | null,
  },
  ui: {
    activeTab: string,
    notifications: Notification[],
    theme: string,
  }
}
```

### User Interaction Flows

#### Create Batch (Farmer)

```
1. Farmer clicks "Create Batch" button
2. Form modal opens
3. Enter: Product Name, Batch ID, Quantity, Origin
4. Click "Submit"
5. Frontend validates inputs
6. ethers.js constructs transaction
7. MetaMask prompts for signature
8. User approves transaction
9. Transaction sent to blockchain
10. Show loading indicator
11. Listen for BatchCreated event
12. Display confirmation with TX hash
13. Refresh batch history table
```

#### Ship Batch (Distributor)

```
1. Distributor clicks batch from "Available Batches" table
2. Confirms batch details
3. Clicks "Mark as Shipped"
4. MetaMask prompts for signature
5. User approves
6. Transaction submitted
7. Show loading state
8. Contract validates:
   - Caller is Distributor
   - Batch exists and is Created state
9. Contract updates batch.state to Shipped
10. Contract emits BatchShipped event
11. Frontend receives event
12. Updates batch history with timestamp
13. Shows success notification
```

#### Deliver Batch (Retailer)

```
Similar flow to Ship Batch
Validates:
- Caller is Retailer
- Batch is in Shipped state (not Created, not yet Delivered)
State transition: Shipped → Delivered
```

---

## Wallet Integration

### MetaMask Integration Flow

```
┌─────────────────────────────────────┐
│     Application Initialization      │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│  Check if window.ethereum exists    │ ← MetaMask detection
└─────────────────┬───────────────────┘
                  │
          ┌───────┴───────┐
          │               │
       YES│               │NO
          ▼               ▼
    ┌──────────┐    ┌─────────────────┐
    │Connected │    │ Install MetaMask│
    │Prompt    │    │ Link / Message  │
    └──────┬───┘    └─────────────────┘
           │
           ▼
    ┌──────────────────────┐
    │User Approves Access  │
    │MetaMask Opens        │
    └──────┬───────────────┘
           │
           ▼
    ┌──────────────────────────┐
    │ Account Connected        │
    │ Store: address, balance  │
    └──────┬───────────────────┘
           │
           ▼
    ┌──────────────────────────┐
    │ Verify Network (Sepolia) │
    │ Switch if needed         │
    └──────┬───────────────────┘
           │
           ▼
    ┌──────────────────────────┐
    │ Ready for Transactions   │
    │ Application Fully Loaded │
    └──────────────────────────┘
```

### Account Management

```javascript
// Detect account changes
ethereum.on('accountsChanged', (accounts) => {
  if (accounts.length > 0) {
    // New account connected
    updateUserRole(accounts[0]);
    refreshBatchHistory();
  } else {
    // Disconnected
    clearWallet();
  }
});

// Detect network changes
ethereum.on('chainChanged', (chainId) => {
  if (chainId !== expectedSepoliaChainId) {
    // Prompt user to switch
    promptSwitchNetwork();
  }
});
```

### Transaction Signing

```javascript
// User initiates transaction
const tx = await contract.createBatch(
  productName,
  batchId,
  quantity,
  origin
);

// MetaMask intercepts and prompts user:
// 1. Shows transaction details (to, data, gas)
// 2. Displays gas cost estimate
// 3. User clicks "Sign" or "Reject"
// 4. If signed, MetaMask signs with private key
// 5. Signed tx sent to Sepolia RPC endpoint

// Application receives tx hash
console.log("Transaction hash:", tx.hash);

// Wait for confirmation
const receipt = await tx.wait();
console.log("Confirmed in block:", receipt.blockNumber);
```

### Security Best Practices  

✓ **Never request private keys** - MetaMask handles all signing  
✓ **Validate addresses** - Check address format and known values  
✓ **Use reasonable gas limits** - Prevent user from overpaying  
✓ **Display all tx details** - Let user verify before signing   
✓ **Handle disconnection** - Gracefully handle network/wallet loss  
✓ **Network verification** - Always verify user is on Sepolia testnet  

---

## Transaction Flow

### Complete Transaction Lifecycle

```
1. USER INITIATES
   └─ Clicks button (Create/Ship/Deliver batch)
   └─ Form validation passes
   └─ Transaction parameters prepared

2. FRONTEND PREPARATION
   ├─ ethers.js creates transaction object
   ├─ Encodes function call using ABI
   ├─ Calculates gas estimate
   └─ Sets nonce, gasPrice, chainId

3. WALLET SIGNING
   ├─ MetaMask receives unsigned transaction
   ├─ Displays transaction details to user
   ├─ User reviews and approves
   ├─ MetaMask signs with private key
   └─ Signed transaction returned to frontend

4. NETWORK SUBMISSION
   ├─ Signed transaction sent to Sepolia RPC endpoint
   ├─ RPC validates transaction structure
   ├─ Transaction added to mempool
   ├─ Network returns transaction hash (TX hash)
   └─ Frontend shows TX hash to user

5. BLOCKCHAIN PROCESSING
   ├─ Validators receive transaction
   ├─ Transaction included in pending block
   ├─ Smart contract executes function
   │  ├─ Access control validation
   │  ├─ State transition validation
   │  ├─ Data persistence
   │  ├─ Events emitted
   │  └─ Storage updated
   ├─ Block finalized (~12 seconds on Sepolia)
   └─ Transaction receipt available

6. EVENT LISTENING & UPDATE
   ├─ Frontend listens for BatchCreated/Shipped/Delivered events
   ├─ Event received from blockchain
   ├─ Frontend processes event data
   ├─ Application state updated
   └─ UI refreshed with new data

7. USER CONFIRMATION
   ├─ Transaction marked as confirmed
   ├─ Success message displayed
   ├─ Updated batch data shown in history
   └─ User can see updated state on blockchain
```

### State Transition Diagram

```
Batch Created (Farmer)
       ├─ Timestamp recorded
       ├─ Product info stored
       ├─ Creator address set
       └─ State = Created
              │
              ▼ shipBatch() [Distributor]
              │ Validation:
              │ ✓ Batch exists
              │ ✓ State is Created
              │ ✓ Caller is Distributor
              │
Batch Shipped
       ├─ Timestamp updated
       ├─ Handler set to Distributor
       └─ State = Shipped
              │
              ▼ deliverBatch() [Retailer]
              │ Validation:
              │ ✓ Batch exists
              │ ✓ State is Shipped
              │ ✓ Caller is Retailer
              │
Batch Delivered (Final)
       ├─ Timestamp updated
       ├─ Handler set to Retailer
       ├─ State = Delivered
       └─ Supply chain cycle complete
```

### Error Handling in Transactions

```
Try: sendTransaction()
  ├─ Catch: User Rejected
  │  └─ Message: "Transaction rejected by user"
  │  └─ Action: Clear loading state, allow retry
  │
  ├─ Catch: Insufficient Gas
  │  └─ Message: "Gas limit too low"
  │  └─ Action: Recalculate gas, ask user to retry
  │
  ├─ Catch: Access Control Failed
  │  └─ Message: "You don't have permission for this action"
  │  └─ Action: Show error, verify user role
  │
  ├─ Catch: Invalid State
  │  └─ Message: "Batch not in valid state for this action"
  │  └─ Action: Refresh batch data, show current state
  │
  ├─ Catch: Network Error
  │  └─ Message: "Network error - please retry"
  │  └─ Action: Check connection, retry
  │
  └─ Finally: Clear loading state, refresh UI
```

---

## Deployment Architecture

### Development to Production Pipeline

```
┌──────────────────────────────────┐
│      PHASE 1: DEVELOPMENT        │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│  Write Smart Contract (Solidity) │
│  • SupplyChain.sol               │
│  • Define roles, states, events  │
│  • Implement business logic      │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│  Test in Remix IDE               │
│  • Compile contract              │
│  • Deploy to Remix VM            │
│  • Test all functions            │
│  • Generate ABI                  │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│   PHASE 2: TESTNET DEPLOYMENT    │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│  Deploy to Sepolia Testnet       │
│  • Connect MetaMask to Sepolia   │
│  • Use Remix IDE deploy tool     │
│  • Record contract address       │
│  • Store ABI for frontend        │
│  • Save deployment details       │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│     PHASE 3: FRONTEND CONFIG     │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│  Create deployment.txt           │
│  Contains:                       │
│  • Network: Sepolia              │
│  • Contract Address: 0x...       │
│  • ABI (full JSON)               │
│  • RPC Endpoint URL              │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│  Configure Frontend              │
│  • src/config/contracts.js       │
│  • Import contract address       │
│  • Import ABI                    │
│  • Set RPC endpoints             │
│  • Configure ethers.js provider  │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│     PHASE 4: TESTING & QA        │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│  Local Testing                   │
│  • npm start (React dev server)  │
│  • Connect test accounts         │
│  • Test all workflows            │
│  • Verify event listeners        │
│  • Check error handling          │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│  Production Deployment           │
│  • Build optimized React bundle  │
│  • Deploy to web host            │
│  • Configure environment vars    │
│  • Monitor for issues            │
└──────────────────────────────────┘
```

### Configuration Files

#### deployment.txt (Remix IDE Output)

```
Network: Sepolia
RPC Endpoint: https://sepolia.infura.io/v3/YOUR_KEY
Contract Address: 0x1234567890abcdef...
Contract ABI: [...full ABI JSON...]
Deployment Date: 2024-06-19
Deployer Address: 0xYourAddress...
Gas Used: 1,234,567
Transaction Hash: 0xTxHash...
```

#### Frontend Config (src/config/contracts.js)

```javascript
export const SEPOLIA_CONFIG = {
  chainId: 11155111,
  rpcUrl: "https://sepolia.infura.io/v3/YOUR_KEY",
  contractAddress: "0x1234567890abcdef...",
  contractABI: [ /* full ABI */ ],
};
```

### Environment Setup

**Requirements**:
- Node.js v16+
- MetaMask browser extension
- Sepolia testnet funds (for gas)
- Infura/Alchemy API key (for RPC)

**Installation**:
```bash
# Clone repository
git clone https://github.com/micag2025/Supply_Chain_project.git
cd Supply_Chain_project

# Install dependencies
npm install

# Start development server
npm start

# Application opens at http://localhost:3000
```

---

## Data Flow

### Batch Creation Flow (Detailed)

```
FARMER
   │ 1. Opens Dashboard
   │ 2. Clicks "Create Batch"
   │
   ▼
┌─────────────────────────────┐
│    Frontend Form Modal      │
│ Input Fields:               │
│ • Product Name              │
│ • Batch ID                  │
│ • Quantity                  │
│ • Origin                    │
└────────┬────────────────────┘
         │ 3. User fills form
         │ 4. Clicks "Submit"
         │
         ▼
┌─────────────────────────────┐
│  Frontend Validation        │
│ ✓ All fields non-empty      │
│ ✓ Quantity is number > 0    │
│ ✓ Batch ID format valid     │
└────────┬────────────────────┘
         │ 5. Validation passed
         │
         ▼
┌─────────────────────────────┐
│  ethers.js Preparation      │
│ • Encode function call      │
│ • Include params in ABI     │
│ • Add gas limit estimate    │
│ • Add nonce                 │
└────────┬────────────────────┘
         │ 6. Transaction object built
         │
         ▼
┌─────────────────────────────┐
│   MetaMask Signing          │
│ • Show TX details           │
│ • Display gas cost in ETH   │
│ • User reviews & approves   │
│ • Sign with private key     │
└────────┬────────────────────┘
         │ 7. TX signed
         │
         ▼
┌─────────────────────────────┐
│  Sepolia RPC Submission     │
│ • Send signed TX            │
│ • Receive TX hash           │
│ • Show to user              │
└────────┬────────────────────┘
         │ 8. TX in mempool
         │
         ▼
┌─────────────────────────────┐
│  Smart Contract Execution   │
│ • Validate caller = Farmer  │
│ • Check inputs not empty    │
│ • Store batch data          │
│ • Increment batch counter   │
└────────┬────────────────────┘
         │ 9. TX included in block
         │
         ▼
┌─────────────────────────────┐
│  Event Emission             │
│ emit BatchCreated(          │
│   batchId,                  │
│   farmerAddress,            │
│   timestamp                 │
│ )                           │
└────────┬────────────────────┘
         │ 10. Event on blockchain
         │
         ▼
┌─────────────────────────────┐
│  Frontend Event Listener    │
│ • Monitor for events        │
│ • Receive BatchCreated      │
│ • Extract batch details     │
│ • Update app state          │
└────────┬────────────────────┘
         │ 11. Update UI
         │
         ▼
┌─────────────────────────────┐
│  User Confirmation          │
│ • Success message           │
│ • Batch appears in table    │
│ • New batch ID shown        │
│ • Ready for distribution    │
└─────────────────────────────┘
```

### Query Flow (Batch Lookup)

```
USER
  │ 1. Enters batch ID
  │ 2. Clicks "Search"
  │
  ▼
┌─────────────────────────────┐
│  Frontend Validation        │
│ ✓ Batch ID not empty        │
│ ✓ Batch ID is valid format  │
└────────┬────────────────────┘
         │
         ▼
┌─────────────────────────────┐
│  ethers.js Read Call        │
│ contract.getBatchReadable() │
│ (read-only, no gas cost)    │
└────────┬────────────────────┘
         │
         ▼
┌─────────────────────────────┐
│  RPC Query                  │
│ • No blockchain TX          │
│ • Read from state directly  │
│ • Return batch data         │
└────────┬────────────────────┘
         │
         ▼
┌─────────────────────────────┐
│  Frontend Display           │
│ • Batch ID                  │
│ • Product Name              │
│ • Current State             │
│ • History Timeline          │
│ • All handlers              │
└─────────────────────────────┘
```

### Real-Time Event Listening

```
Frontend Application
       │ 1. On mount, subscribe to events
       │
       ▼
┌──────────────────────────────┐
│  Event Filter Setup          │
│ contract.on('BatchCreated',  │
│   (event) => {               │
│     updateUI(event)          │
│   }                          │
│ )                            │
└────────┬─────────────────────┘
         │ 2. Listener active
         │
         ├─ (Waiting for events)
         │
         ├─ Another user creates batch
         │ (Distributed network processes TX)
         │
         ▼
┌──────────────────────────────┐
│  Event Emitted on Blockchain │
│ BatchCreated(                │
│   batchId: 42,               │
│   creator: 0xFarmerAddr,     │
│   timestamp: 1234567890      │
│ )                            │
└────────┬─────────────────────┘
         │ 3. RPC broadcasts event
         │
         ▼
┌──────────────────────────────┐
│  Frontend Receives Event     │
│ event = {                    │
│   batchId: 42,               │
│   creator: 0xFarmerAddr,     │
│   timestamp: 1234567890      │
│ }                            │
└────────┬─────────────────────┘
         │ 4. Event processed
         │
         ▼
┌──────────────────────────────┐
│  Update Application State    │
│ • Add to batches array       │
│ • Recalculate statistics     │
│ • Mark as unread (optional)  │
└────────┬─────────────────────┘
         │ 5. State updated
         │
         ▼
┌──────────────────────────────┐
│  React Re-render             │
│ • Refresh batch table        │
│ • Update count/badge         │
│ • Show notification toast    │
│ • User sees new batch        │
└──────────────────────────────┘
```

---

## Security Considerations

### Smart Contract Layer Security

#### 1. Access Control

**Risk**: Unauthorized role execution

**Mitigation**:
```solidity
// Modifier enforces role checking
modifier onlyFarmer() {
  require(userRoles[msg.sender] == Role.Farmer, "Only Farmer can call");
  _;
}

modifier onlyDistributor() {
  require(userRoles[msg.sender] == Role.Distributor, "Only Distributor");
  _;
}

modifier onlyRetailer() {
  require(userRoles[msg.sender] == Role.Retailer, "Only Retailer");
  _;
}

// Apply to functions
function createBatch(...) public onlyFarmer {
  // Only Farmer can execute
}
```

**Test Cases**:
- ✓ Farmer can createBatch
- ✗ Distributor cannot createBatch
- ✗ Retailer cannot createBatch

#### 2. State Validation

**Risk**: Invalid state transitions (e.g., Delivered → Shipped)

**Mitigation**:
```solidity
function shipBatch(uint256 batchId) public onlyDistributor {
  Batch storage batch = batches[batchId];
  
  // State validation
  require(batch.state == BatchState.Created, 
    "Batch must be in Created state");
  
  // Only then transition
  batch.state = BatchState.Shipped;
}
```

**State Machine**:
```
Created (only source for shipBatch)
    ▼
Shipped (only source for deliverBatch)
    ▼
Delivered (terminal state, no further transitions)
```

#### 3. Reentrancy Prevention

**Risk**: Reentrancy attacks (unlikely in this contract but good practice)

**Mitigation**:
```solidity
// Use checks-effects-interactions pattern
function deliverBatch(uint256 batchId) public onlyRetailer {
  // 1. Checks
  Batch storage batch = batches[batchId];
  require(batch.state == BatchState.Shipped, "Invalid state");
  
  // 2. Effects (state change first)
  batch.state = BatchState.Delivered;
  
  // 3. Interactions (external calls last, none in this case)
  emit BatchDelivered(batchId, msg.sender, block.timestamp);
}
```

#### 4. Input Validation

**Risk**: Empty or malformed inputs

**Mitigation**:
```solidity
function createBatch(
  string memory productName,
  string memory productBatch,
  uint256 quantity,
  string memory origin
) public onlyFarmer {
  // Validate non-empty strings
  require(bytes(productName).length > 0, "Product name required");
  require(bytes(origin).length > 0, "Origin required");
  
  // Validate positive quantity
  require(quantity > 0, "Quantity must be > 0");
  
  // Proceed with valid data
}
```

---

### Frontend Layer Security

#### 1. Network Validation

**Risk**: User on wrong network (not Sepolia)

**Mitigation**:
```javascript
const SEPOLIA_CHAIN_ID = 11155111;

async function validateNetwork() {
  const chainId = await provider.getNetwork().chainId;
  
  if (chainId !== SEPOLIA_CHAIN_ID) {
    alert("Please switch to Sepolia testnet");
    await switchToSepolia();
  }
}

// On application load
window.addEventListener('load', validateNetwork);

// On account/network change
ethereum.on('chainChanged', validateNetwork);
```

#### 2. Address Validation

**Risk**: User sends transaction to wrong address

**Mitigation**:
```javascript
function isValidEthereumAddress(address) {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

function verifyContractAddress(address) {
  if (address !== EXPECTED_CONTRACT_ADDRESS) {
    throw new Error("Unexpected contract address");
  }
}
```

#### 3. Input Sanitization

**Risk**: XSS attacks via unsanitized blockchain data

**Mitigation**:
```javascript
// React automatically escapes text content
// But sanitize for safety
function sanitizeOutput(text) {
  return text.replace(/[<>&"']/g, char => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#x27;',
  }[char]));
}

// In component
<div>{sanitizeOutput(batch.productName)}</div>
```

#### 4. Private Key Protection

**Risk**: Exposing private keys in frontend code

**Mitigation**:
- ✓ Use MetaMask for signing (private key never leaves wallet)
- ✗ Never hardcode private keys
- ✗ Never ask users for private keys
- ✗ Never store private keys in localStorage

#### 5. Transaction Verification

**Risk**: User approves wrong transaction

**Mitigation**:
```javascript
// Always display full transaction details before signing
async function signTransaction(txData) {
  console.log("Transaction to:", txData.to);
  console.log("Function:", txData.functionName);
  console.log("Parameters:", txData.params);
  console.log("Gas limit:", txData.gasLimit);
  console.log("Gas price:", txData.gasPrice);
  
  // User reviews in MetaMask popup before signing
  const tx = await signer.sendTransaction(txData);
  return tx;
}
```

---

### Blockchain Layer Security

#### 1. Immutability

**Security Benefit**: Once recorded, data cannot be altered

```
Farmer creates batch (Block 12345)
  ↓ (Recorded permanently)
Distributor ships batch (Block 12346)
  ↓ (Recorded permanently)
Retailer delivers batch (Block 12347)
  ↓ (All history tamper-proof)
```

**Challenge**: To alter history, attacker would need to:
- Recompute all blocks after the target block
- Overcome network consensus
- Practically impossible (51% attack requirement)

#### 2. Event Logging

**Security Benefit**: All state changes auditable

```
event BatchCreated(
  indexed uint256 batchId,
  indexed address creator,
  string productName,
  uint256 timestamp
)
```

**Audit Trail**: Complete history available in event logs
- Indexed fields enable efficient searching
- Non-indexed data queryable but not filterable
- All events permanently stored on blockchain

#### 3. Decentralization

**Security Benefit**: No single point of failure

- Multiple Sepolia validators
- Distributed consensus required for block inclusion
- No central database to compromise
- Transparent to all participants

---

### Testing Security Checklist

**Smart Contract Testing**:
- [ ] Test access control for all functions
- [ ] Verify state transitions are enforced
- [ ] Test with invalid inputs (empty strings, zero quantity)
- [ ] Verify events are emitted correctly
- [ ] Check gas efficiency

**Frontend Testing**:
- [ ] Verify network validation (Sepolia check)
- [ ] Test wallet connection flow
- [ ] Verify form input validation
- [ ] Test error messages are clear
- [ ] Verify transaction details displayed
- [ ] Check event listeners work
- [ ] Test MetaMask rejection handling

**Integration Testing**:
- [ ] End-to-end batch creation flow
- [ ] Ship batch without prior creation (should fail)
- [ ] Deliver without shipped state (should fail)
- [ ] Multiple concurrent users
- [ ] Network failure recovery

---


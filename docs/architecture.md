# System Architecture  

## Overview

The Blockchain-Based Supply Chain Tracking System is a **decentralized application (dApp)** that enables transparent tracking of products through a simplified supply chain lifecycle using Ethereum smart contracts.

The system consists of four primary layers:

1. React Frontend
2. MetaMask Wallet
3. Ethereum Smart Contract
4. Ethereum Sepolia Testnet

Each supply chain participant interacts with the smart contract through MetaMask, while all state transitions are permanently recorded on-chain.

---

## High-Level Architecture

```text
React Frontend
      │
      ▼
MetaMask Wallet
      │
      ▼
ethers.js
      │
      ▼
SupplyChain Smart Contract
      │
      ▼
Ethereum Sepolia Testnet
```
OR 

``` bash  
┌─────────────────────────────────────┐
│            Remix IDE                │
│     Solidity Smart Contract         │
└───────────────┬─────────────────────┘
                │ Deploy
                ▼
┌─────────────────────────────────────┐
│       Ethereum Sepolia Testnet      │
│      Supply Chain Smart Contract    │
└───────────────┬─────────────────────┘
                ▲
                │ ethers.js
                │ MetaMask
┌───────────────┴─────────────────────┐
│            React Frontend           │
│      Supply Chain Dashboard         │
└─────────────────────────────────────┘
```     

---

## Reference Test Scenario

The application was validated using a **Coffee Supply Chain (Farm-to-Retail) workflow** involving three participants:

```  
Farmer
   ↓
Distributor
   ↓
Retailer  
```    

### Supply Chain Actors

The application implements three predefined roles.

#### Farmer

Responsibilities:

* Create product batches
* View batch information

Permissions:

```text
createBatch()
getBatchReadable()
```

---

#### Distributor

Responsibilities:

* Ship created batches

Permissions:

```text
shipBatch()
getBatchReadable()
```

---

#### Retailer

Responsibilities:

* Deliver shipped batches

Permissions:

```text
deliverBatch()
getBatchReadable()
```

---

## Batch Lifecycle

The current implementation models a simplified supply chain workflow.

```text
Created
   ↓
Shipped
   ↓
Delivered
```

Each transition is validated by the smart contract before execution.

---

## Smart Contract Layer

The Solidity smart contract serves as the system's source of truth.

### Core Functions

| Function           | Purpose                    |
| ------------------ | -------------------------- |
| createBatch()      | Create a new batch         |
| shipBatch()        | Mark a batch as shipped    |
| deliverBatch()     | Mark a batch as delivered  |
| getBatchReadable() | Retrieve batch information |

### Responsibilities

* Role enforcement
* State validation
* Data persistence
* Event emission

### Smart Contract Design??? 

---

## Frontend Layer

The React frontend provides the user interface.

### Features

* Wallet connection
* Role detection
* Batch creation
* Batch lookup
* Batch history table
* Transaction feedback

### Libraries

* React
* ethers.js
* MetaMask Provider API  

### Frontend Architecture ? 

---

## Wallet Layer

MetaMask acts as the authentication and transaction-signing mechanism.

### Responsibilities

* Account management
* Transaction approval
* Network selection
* Signature generation

No private keys are stored within the application.

---

## Blockchain Layer

The Ethereum Sepolia Testnet provides:

* Immutable storage
* Decentralized execution
* Event logging
* Transaction verification

All supply chain events are permanently recorded on-chain.

---

## Security Model

The system applies validation at two levels.

### Frontend Validation

* Required fields
* Role-specific UI controls
* Network checks
* Form validation

### Smart Contract Validation

* Role verification
* State transition validation
* Duplicate batch prevention
* Access control enforcement

This layered approach improves user experience while maintaining blockchain security.

---

## Future Architectural Enhancements

Potential future improvements include:

* Hardhat migration
* IPFS integration
* The Graph indexing
* QR-code verification
* Layer-2 deployment
* Multi-role management
* Analytics dashboards
* IoT integration



>IMP to be review the outline following   
- System Overview
- Architecture Diagram
- Component Responsibilities
- Smart Contract Design
- Frontend Architecture
- Wallet Integration
- Transaction Flow
- Deployment Architecture
- Data Flow
- Security Considerations


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
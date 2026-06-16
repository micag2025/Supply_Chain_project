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

---

## Supply Chain Actors

The application implements three predefined roles.

### Farmer

Responsibilities:

* Create product batches
* View batch information

Permissions:

```text
createBatch()
getBatchReadable()
```

---

### Distributor

Responsibilities:

* Ship created batches

Permissions:

```text
shipBatch()
getBatchReadable()
```

---

### Retailer

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

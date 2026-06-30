# System Architecture

---

## Overview  

The **Supply Chain Tracking dApp** is a proof-of-concept blockchain application that demonstrates secure and transparent product traceability using Ethereum smart contracts.

The system combines a **React frontend**, **MetaMask wallet authentication**, **ethers.js** blockchain communication, and a **Solidity smart contract** deployed on the **Ethereum Sepolia Testnet**.

The architecture is designed as a modular proof-of-concept that demonstrates transparent, immutable, and role-controlled supply chain management.  

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

| Component | Responsibility |
|-----------|----------------|
| React Frontend | User interface for creating, shipping, delivering, and querying batches. |
| MetaMask | Wallet authentication and transaction signing. |
| ethers.js | Connects the frontend to the deployed smart contract using the contract ABI. |
| SupplyChainBatch.sol | Implements batch management, role-based access control, lifecycle validation, and on-chain storage. |
| Ethereum Sepolia | Executes transactions and permanently stores blockchain state. |

---  

## Smart Contract Design

The `SupplyChainBatch.sol` contract defines:

- Batch data structure
- Lifecycle states (`Created → Shipped → Delivered`)
- Role-based access control
- Event emission
- On-chain storage

### Core Functions

- `createBatch()`
- `shipBatch()`
- `deliverBatch()`
- `getBatchReadable()`

## Component Interaction  

React Frontend
      │
      ▼
MetaMask
      │
      ▼
ethers.js
      │
      ▼
SupplyChainBatch.sol
      │
      ▼
Ethereum Sepolia Testnet

---

## Related Documentation

* `README.md`
* `docs/deployment.md`
* `docs/testing.md`
* `docs/metamask-setup.md`

For implementation validation and test results, see `docs/testing.md`.











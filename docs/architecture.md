# System Architecture

---

## Overview

The **Supply Chain Tracking dApp** is a proof-of-concept blockchain application that demonstrates secure and transparent product traceability using Ethereum smart contracts.

The system combines a **React frontend**, **MetaMask** wallet authentication, **ethers.js** blockchain communication, and a **Solidity smart contract** deployed on the **Ethereum Sepolia Testnet**.

The architecture follows a modular design in which the smart contract manages the supply chain business logic, while the frontend provides an intuitive interface for interacting with the blockchain.

---

## High-Level Architecture

The following diagram illustrates the overall architecture of the application. The smart contract is developed and deployed using **Remix IDE**, while users interact with the deployed contract through the React application.

```text
            ┌─────────────────────────┐
            │       Remix IDE         │
            │  Solidity Smart Contract│
            └───────────┬─────────────┘
                        │ Deploy
                        ▼
┌──────────────────────────────────────────────────┐
│          Ethereum Sepolia Testnet               │
│      SupplyChainBatch Smart Contract            │
└───────────────────────▲─────────────────────────┘
                        │
                    ethers.js
                        │
                ┌───────┴────────┐
                │    MetaMask    │
                │ Wallet Provider│
                └───────▲────────┘
                        │
                 Transaction Signing
                        │
                        ▼
┌──────────────────────────────────────────────────┐
│                  React Frontend                  │
│         Supply Chain Tracking Dashboard          │
└──────────────────────────────────────────────────┘
```

> **Note:** Deployment from Remix IDE to the Ethereum Sepolia Testnet is a **one-time setup** performed during application deployment. Once deployed, users interact only with the React frontend.

---

## Architecture Components

| Component | Responsibility |
|-----------|----------------|
| **React Frontend** | User interface for creating, shipping, delivering, and querying product batches. |
| **MetaMask** | Wallet authentication and transaction signing. |
| **ethers.js** | Connects the frontend to the deployed smart contract using the contract ABI. |
| **SupplyChainBatch.sol** | Implements batch management, role-based access control, lifecycle validation, and on-chain data storage. |
| **Ethereum Sepolia Testnet** | Executes transactions and permanently stores blockchain state. |

---

## Smart Contract Design

The `SupplyChainBatch.sol` contract implements the application's core business logic by managing the complete lifecycle of each product batch.

Its responsibilities include:

- Batch creation
- Shipment tracking
- Delivery confirmation
- Lifecycle state management (`Created → Shipped → Delivered`)
- Role-based access control
- Event emission
- On-chain data storage

### Core Functions

- `createBatch()`
- `shipBatch()`
- `deliverBatch()`
- `getBatchReadable()`

---

## Runtime Component Interaction

After deployment, every user operation follows the interaction flow below.

```text
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
```

> **Note:** This workflow represents the application's **runtime operation** and is executed whenever a user creates, ships, delivers, or queries a product batch. Each state-changing operation requires transaction approval through MetaMask before being recorded on the Ethereum Sepolia Testnet.

---

## Related Documentation

- `README.md`
- `docs/deployment.md`
- `docs/testing.md`
- `docs/metamask-setup.md`

For deployment instructions, see **`docs/deployment.md`**.

For functional validation and test results, see **`docs/testing.md`**.









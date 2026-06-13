# Deployment Guide

## Overview

This guide explains how to deploy the Supply Chain smart contract and connect it to the React frontend.

Deployment is performed on the Ethereum Sepolia Testnet using Remix IDE.

---

## Prerequisites

Install:

* Node.js (v18+)
* MetaMask
* Git

Required:

* Sepolia Testnet access
* Sepolia ETH from a faucet

---

## Step 1: Clone Repository

```bash
git clone https://github.com/micag2025/Supply_Chain_project.git

cd Supply_Chain_project
```

---

## Step 2: Deploy Smart Contract

### Open Remix

Navigate to:

https://remix.ethereum.org

---

### Compile Contract

1. Open `SupplyChainBatch.sol`
2. Select Solidity Compiler
3. Choose Solidity 0.8.x
4. Compile

Expected result:

```text
Compilation successful
```

---

### Connect MetaMask

1. Open Deploy & Run Transactions
2. Select:

```text
Injected Provider - MetaMask
```

3. Approve connection

---

### Deploy Contract

1. Ensure Sepolia network is selected
2. Click Deploy
3. Confirm transaction

After deployment, copy:

* Contract Address
* Contract ABI

Save both values.

---

## Step 3: Configure Frontend

Create:

```bash
.env
```

Add:

```env
REACT_APP_CONTRACT_ADDRESS=<DEPLOYED_CONTRACT_ADDRESS>

REACT_APP_NETWORK_NAME=Sepolia
```

---

## Step 4: Add ABI

Copy ABI into:

```text
frontend/src/abi/SupplyChain.json
```

Example:

```json
{
  "abi": [...]
}
```

---

## Step 5: Install Dependencies

```bash
npm install
```

---

## Step 6: Launch Application

```bash
npm start
```

Expected output:

```text
Compiled successfully

Local:
http://localhost:3000
```

---

## Step 7: Connect Wallet

1. Open application
2. Click Connect Wallet
3. Approve MetaMask request
4. Verify account information appears

---

## Deployment Checklist

Before testing, verify:

* Contract deployed successfully
* Contract address copied
* ABI copied
* Environment variables configured
* MetaMask connected
* Sepolia network selected
* Frontend running

All checklist items should be completed before proceeding to testing.

---

## Recommended Production Improvements

For future production deployments:

* Migrate to Hardhat
* Automate deployments
* Add CI/CD pipelines
* Add contract verification
* Add security audits
* Add environment separation

# Deployment Guide

## Overview

This guide describes how to deploy the **SupplyChainBatch.sol** smart contract and connect it to the React frontend.

Deployment is performed using **Remix IDE** on the **Ethereum Sepolia Testnet**.

> **Note:** The deployment process is a **one-time setup** that is typically completed in **5–10 minutes**. Once the smart contract has been deployed and the frontend configured, users interact with the application through the React dashboard without repeating these steps.

---

## Prerequisites

Install the following software:

- Node.js (v18 or later)
- MetaMask
- Git

You will also need:

- Access to the Ethereum Sepolia Testnet
- Sepolia ETH obtained from a faucet

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/micag2025/Supply_Chain_project.git

cd Supply_Chain_project
```

---

## Step 2: Deploy the Smart Contract

### Open Remix IDE

Navigate to:

https://remix.ethereum.org

### Compile the Contract

1. Open `SupplyChainBatch.sol`.
2. Select **Solidity Compiler**.
3. Choose **Solidity 0.8.x**.
4. Compile the contract.

Expected output:

```text
Compilation successful
```

### Connect MetaMask

1. Open **Deploy & Run Transactions**.
2. Select:

```text
Injected Provider - MetaMask
```

3. Approve the wallet connection.

### Deploy

1. Ensure the **Sepolia Testnet** is selected.
2. Click **Deploy**.
3. Confirm the transaction in MetaMask.

After deployment, save:

- Contract Address
- Contract ABI

These values are required by the frontend.

---

## Step 3: Configure the Frontend

Create a `.env` file and add:

```env
REACT_APP_CONTRACT_ADDRESS=<DEPLOYED_CONTRACT_ADDRESS>
REACT_APP_NETWORK_NAME=Sepolia
```

---

## Step 4: Add the Contract ABI

Copy the generated ABI into:

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

## Step 6: Launch the Application

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

## Step 7: Connect MetaMask

1. Open the application.
2. Click **Connect Wallet**.
3. Approve the connection request.
4. Verify that your account information is displayed.

---

## Deployment Checklist

Before testing the application, verify that:

✓ Smart contract has been successfully deployed.  
✓ Contract address has been configured.  
✓ Contract ABI has been copied to the frontend.  
✓ Environment variables have been configured.  
✓ MetaMask is connected.  
✓ Sepolia Testnet is selected.  
✓ React frontend is running.  

Once these steps are complete, the deployment process is finished.

---

## Next Steps

After deployment, the application is ready for runtime use through the React frontend.

For system architecture, testing procedures, and project usage, refer to the documentation listed below.

---

## Related Documentation

- [Project README](../README.md)
- [System Architecture](architecture.md)
- [Testing](testing.md)
- [MetaMask Setup Guide](metamask-setup.md)

# MetaMask Setup Guide

This guide explains how to configure MetaMask, connect to the Ethereum Sepolia Testnet, create test accounts, and obtain Sepolia ETH for testing the Supply Chain Tracking dApp.

---

## Install MetaMask

1. Visit the official [MetaMask website](https://metamask.io/)
2. Install the browser extension for your preferred browser.
3. Create a new wallet or import an existing wallet.
4. Securely store your recovery phrase.

---

## Add the Sepolia Test Network

1. Open the [MetaMask website](https://metamask.io/).
2. Click the network selector at the top of the wallet.
3. Enable **Show test networks** if necessary.
4. Select **Sepolia Test Network**.

---

## Create Test Accounts

Create three MetaMask accounts to simulate the supply chain participants used throughout this project.

| Role | Account | Responsibilities |
|--------|---------|------------------|
| Farmer | Account 1 | Deploy the smart contract and create product batches |
| Distributor | Account 2 | Ship product batches |
| Retailer | Account 3 | Deliver product batches |

### Create Additional Accounts

1. Click the account icon in MetaMask.
2. Select **Add account or hardware wallet**.
3. Choose **Add account**.
4. Repeat until three accounts have been created.

---  

## How to Obtain Your Wallet Address

1. Open the [MetaMask website](https://metamask.io/).
2. Select the desired account.
3. Click the account name.
4. The wallet address will be automatically copied to your clipboard.

Example:

```text
0x15d0...9759
``` 
---

## Fund Accounts with Sepolia ETH  

To interact with the blockchain, each account requires a small amount of Sepolia ETH to pay transaction fees.

### Obtain Sepolia ETH    
- Copy your MetaMask account address.  
- Visit the [Google Cloud Web3 Faucet](https://cloud.google.com/application/web3/faucet)  
- Request Sepolia ETH.  
- Wait for the transaction confirmation.  

### Recommended Amount
Minimum: 0.05 ETH  
Comfortable testing buffer: 0.1 ETH  

### Recommended Test Account Setup  

| Role        | Account   | Purpose                                | Recommended Testnet ETH* |
| ----------- | --------- | -------------------------------------- | ------------------------ |
| Farmer      | Account 1 | Contract deployment and batch creation | ~0.05 ETH                |
| Distributor | Account 2 | Shipment transactions                  | ~0.01 ETH                |
| Retailer    | Account 3 | Delivery transactions                  | ~0.01 ETH                |

\*  These values are approximate amounts used during development and testing on the Sepolia Testnet. Actual gas consumption may vary depending on network conditions, gas prices, and transaction volume.   

---

## Understanding Transactions

Blockchain interactions fall into two categories:  

| Operation Type | Solidity Function | Gas Required | MetaMask Confirmation |
| -------------- | ----------------- | ------------ | --------------------- |
| Read           | `view`            | No           | No                    |
| Write          | State-changing    | Yes          | Yes                   |

Examples  

| Action                   | Type  |
| ------------------------ | ----- |
| Lookup batch information | Read  |
| Create batch             | Write |
| Ship batch               | Write |
| Deliver batch            | Write |

\* Write operations modify blockchain state and therefore require transaction approval and gas fees. Read operations only retrieve data and do not require MetaMask confirmation.

---  

## Switching Roles  

The application uses different MetaMask accounts to simulate different supply chain participants.  

| Role        | Account   |
| ----------- | --------- |
| Farmer      | Account 1 |
| Distributor | Account 2 |
| Retailer    | Account 3 |


### Change Role  
1. Switch account in MetaMask.  
2. Return to the application.  
3. Click **Connect Wallet** if required.  
4. The application will automatically detect the connected account and corresponding role.    

---

## Verify the Connected Account

The dashboard displays the connected wallet address and detected role.  

Example: 

```text  
Wallet: 0x15d0...9759
Role: FARMER
```

Ensure that the displayed role matches the currently selected MetaMask account.

---    

## Troubleshooting  

### Wallet Not Connecting  

- Ensure MetaMask is installed and unlocked.  
- Refresh the application page.  
- Reconnect the wallet using the Connect Wallet button.  

### Wrong Network  

- Verify that MetaMask is connected to the Sepolia Test Network.  
- Switch networks if necessary.  

### Insufficient ETH  

- Request additional Sepolia ETH from the faucet.  
- Wait for the faucet transaction to be confirmed before retrying.
  
### Incorrect Role Detected  

- Confirm that the correct MetaMask account is selected.  
- Disconnect and reconnect the wallet if needed.  



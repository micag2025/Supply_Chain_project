# MetaMask Setup Guide

## Install MetaMask

1. Visit the [MetaMask website](https://metamask.io/).
2. Install the browser extension.
3. Create a new wallet or import an existing wallet.  

---

## Add the Sepolia Test Network

1. Open [MetaMask](https://metamask.io/).
2. Click the network selector at the top.
3. Enable "Show test networks" if necessary.
4. Select `Sepolia Test Network`.

---

## Create multiple accounts

For this project, create three accounts:

### Account 1 – Farmer

* Creates product batches.
* Deploys the smart contract.

### Account 2 – Distributor

* Ships batches.

### Account 3 – Retailer

* Delivers batches.

To create a new account:

1. Click the account icon.
2. Select "Add account or hardware wallet".
3. Choose "Add account".

Repeat until you have three accounts.

---

## How to Get Your MetaMask Address

1. Open [MetaMask](https://metamask.io/).
2. Select the desired account.
3. Click the account name.
4. The address is automatically copied to the clipboard.

Example:

0x15d0...9759

---

## Fund Accounts with Sepolia ETH

1. Copy the account address.
2. Use a Sepolia faucet using [Web3 Faucet](https://cloud.google.com/application/web3/faucet)
3. Request test ETH.
4. Wait for the transaction confirmation.

Repeat for all accounts.

---

## How much ETH do you actually need?

The contract deployment cost depends on:  

- contract size  
- gas price on Sepolia (varies)  
- current network congestion

  Typical ranges:  
🧾 Simple contracts: 0.001 – 0.01 ETH  
🧱 Your contract (medium size): 0.002 – 0.02 ETH  
🔁 Multiple test transactions: maybe 0.05 ETH total  

Briefly, 0.1 ETH is absolutely enough. With 0.1 ETH you can:  

✔ Deploy your contract multiple times  
✔ Test all functions (create/ship/deliver)  
✔ Interact with React frontend  
✔ Redeploy after changes  
✔ Experiment freely     

**Gas usage breakdown (realistic)**

| Action          | Cost            |
| --------------- | --------------- |
| Deploy contract | ~0.005–0.02 ETH |
| createBatch     | ~0.0005 ETH     |
| shipBatch       | ~0.0003 ETH     |
| deliverBatch    | ~0.0003 ETH     |

**Practical recommendation**

If you are building + testing the dApp:

- Request at least 0.05 ETH  
- 0.1 ETH = comfortable buffer (ideal)  


| Type  | Solidity       | Gas?  | MetaMask popup? |
| ----- | -------------- | ----- | --------------- |
| READ  | `view`         | ❌ No  | ❌ No            |
| WRITE | state-changing | ✅ Yes | ✅ Yes           |


---  

## Switching Roles

Farmer:
Account 1

Distributor:
Account 2

Retailer:
Account 3

When changing roles:

1. Switch account in MetaMask.
2. Return to the application.
3. Click "Connect Wallet" if needed.
4. The dashboard detects the role automatically.

---

## Verify Connected Account

The dashboard displays:

Wallet: 0x15d0...9759
Role: FARMER

Ensure the displayed role matches the selected MetaMask account.  

---  



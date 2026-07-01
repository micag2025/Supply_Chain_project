# Deployment Information

This document summarizes the deployment artifacts for the Supply Chain Tracking proof-of-concept.

---

## Smart Contract

| Item | Value |
|------|-------|
| Contract | SupplyChainBatch.sol |
| Network | Ethereum Sepolia Testnet |
| Contract Address | 0xbffD...073b |
| Solidity Version | 0.8.x |

---

## Deployment Accounts

| Role | Address |
|------|---------|
| Farmer (Deployer) | 0x15d00...9759 |
| Distributor | 0xD934...52dB |
| Retailer | 0x10D8...eB1C |

---

## Frontend Configuration

| Item | Value |
|------|-------|
| Environment Variable | `REACT_APP_CONTRACT_ADDRESS=0xbffD...073b` |
| ABI Location | `frontend/src/abi/SupplyChain.json` |

---

## Available Smart Contract Functions

- `createBatch()`
- `shipBatch()`
- `deliverBatch()`
- `getBatchReadable()`
- `getStateText()`

---

## Reference Test Data

### Batch 1

| Property | Value |
|----------|-------|
| Batch ID | 1 |
| Product | cof1_batch |
| Quantity | 1000 |
| Final State | Delivered |

### Batch 2

| Property | Value |
|----------|-------|
| Batch ID | 2 |
| Product | cof2_batch |
| Quantity | 500 |
| Final State | Delivered |

---

## Notes

- Smart contract deployed using **Remix IDE** and **MetaMask**.
- Frontend communicates with the deployed contract using **ethers.js** and the generated ABI.
- Deployment was performed on the **Ethereum Sepolia Testnet** for development and testing purposes.
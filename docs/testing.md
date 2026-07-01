# Testing Documentation

## Overview

Testing was performed on the **Ethereum Sepolia Testnet** to validate the smart contract, React frontend, MetaMask integration, and complete supply chain workflows.

The objective was to **verify that the application correctly implements the complete supply chain lifecycle** while enforcing security controls and maintaining blockchain state integrity.

---

## Test Environment

| Component      | Value                    |
| -------------- | ------------------------ |
| Network        | Ethereum Sepolia Testnet |
| Wallet         | MetaMask                 |
| Smart Contract | Solidity 0.8.x           |
| Frontend       | React                    |
| Web3 Library   | ethers.js                |

---

## Test Accounts

Three MetaMask accounts were used to simulate supply chain participants (users).

| Role        | Purpose        |
| ----------- | -------------- |
| Farmer      | Create product batches |
| Distributor |Ship product batches |
| Retailer    | Deliver product batches|

---

## Functional Testing    

The functional test suite **verifies that the core business requirements of the supply chain dApp operate correctly under normal conditions**. These tests focus on the expected behavior of the smart contract, frontend dashboard, and blockchain interactions, ensuring that authorized users can successfully create, track, ship, and deliver batches throughout the supply chain lifecycle.    

| Test ID | Test Case | Description | Expected Result | Status |
|----------|------------|-------------|-----------------|---------|
| TC-001 | Wallet Connection | Connect MetaMask wallet | Wallet connected successfully | ✅ Pass |
| TC-002 | Batch Creation | Farmer creates batch | Batch stored with Created state | ✅ Pass |
| TC-003 | Batch Lookup | Read existing batch | Correct data returned | ✅ Pass |
| TC-004 | Batch Shipment | Distributor ships batch | State changes to Shipped | ✅ Pass |
| TC-005 | Batch Delivery | Retailer delivers batch | State changes to Delivered | ✅ Pass |
| TC-006 | Batch History Loading | Load batches from blockchain | All batches displayed | ✅ Pass |
| TC-007 | Role Detection | Connect different accounts | Correct role displayed | ✅ Pass |
| TC-008 | Blockchain Persistence | Refresh application | Data remains available | ✅ Pass |
| TC-009 | Event Handling | Execute transaction | UI updates after confirmation | ✅ Pass |
| TC-010 | Read-Only Queries | Query batch data | No gas consumed | ✅ Pass |

---

## Security & Validation Tests  

The security and validation test suite **evaluates the system's ability to prevent unauthorized actions, invalid state transitions, and incorrect user inputs**. These tests verify that access-control rules, frontend validations, and smart contract safeguards work together to maintain data integrity and prevent misuse of the application.    

| Test ID | Test Case | Expected Result | Status |
|----------|------------|-----------------|---------|
| TC-011 | Duplicate Batch Prevention | Creation rejected | ✅ Pass |
| TC-012 | Unauthorized Batch Creation | Non-farmer blocked | ✅ Pass |
| TC-013 | Unauthorized Shipment | Non-distributor blocked | ✅ Pass |
| TC-014 | Unauthorized Delivery | Non-retailer blocked | ✅ Pass |
| TC-015 | Invalid State Transition | Transaction rejected | ✅ Pass |
| TC-016 | Empty Form Submission | Validation error displayed | ✅ Pass |
| TC-017 | Wallet Disconnection | Actions disabled | ✅ Pass |
| TC-018 | Wrong Network | Warning displayed | ✅ Pass |
| TC-019 | Non-Existing Batch Lookup | Error message shown | ✅ Pass |
| TC-020 | Transaction Confirmation Handling | UI waits for confirmation | ✅ Pass |

---

## End-to-End Workflow Validation

This scenario **validates the complete lifecycle of a product batch across all supply chain participants**. The objective is to demonstrate that the React frontend, MetaMask wallet integration, ethers.js communication layer, and Ethereum smart contract operate together seamlessly to support real-world business workflows.

### Coffee Supply Chain Scenario

The following scenario simulates a complete batch lifecycle from creation through delivery.

#### Step 1 – Farmer Creates Batch

| Item      | Value                 |
| --------- | --------------------- |
| Actor     | Farmer (Account 1)    |
| Action    | Create Batch          |
| Batch ID  | 1                     |
| Product   | Coff                |
| Quantity  | 1000 kg               |
| Result    | Batch state = Created |

#### Step 2 – Distributor Ships Batch

| Item               | Value                                 |
| ------------------ | ------------------------------------- |
| Actor              | Distributor (Account 2)               |
| Action             | Ship Batch                            |
| Result             | Batch state = Shipped                 |
| Additional Outcome | Distributor address recorded on-chain |

#### Step 3 – Retailer Delivers Batch

| Item               | Value                              |
| ------------------ | ---------------------------------- |
| Actor              | Retailer (Account 3)               |
| Action             | Deliver Batch                      |
| Result             | Batch state = Delivered            |
| Additional Outcome | Retailer address recorded on-chain |

---

### Batch Verification

Any user can perform a lookup using for instance  **Batch ID = 1** from the above example showing the complete batch lifecycle from creation through delivery.

| Validation Item              | Result |
| ---------------------------- | ------ |
| Batch Created                | ✅      |
| Batch Shipped                | ✅      |
| Batch Delivered              | ✅      |
| Farmer Recorded              | ✅      |
| Distributor Recorded         | ✅      |
| Retailer Recorded            | ✅      |
| Blockchain State Persistence | ✅      |
| End-to-End Traceability      | ✅      |

### Lifecycle Summary

```text
Farmer
   │
   ▼
Created
   │
   ▼
Distributor
   │
   ▼
Shipped
   │
   ▼
Retailer
   │
   ▼
Delivered
```

**Outcome**:

* Complete supply chain workflow successfully executed.
* All state transitions recorded on-chain.
* Participant addresses preserved for auditing purposes.
* Full batch traceability achieved through blockchain immutability.

---

## Test Coverage Summary

| Category               | Status |
| ---------------------- | ------ |
| Batch Creation         | ✅      |
| Shipment               | ✅      |
| Delivery               | ✅      |
| Lookup                 | ✅      |
| Access Control         | ✅      |
| Validation             | ✅      |
| Blockchain Persistence | ✅      |
| Wallet Integration     | ✅      |
| Network Validation     | ✅      |
| End-to-End Workflow    | ✅      |

---

## Test Results Summary  

| Metric               | Value           |
| -------------------- | --------------- |
| Total Test Cases     | 20              |
| Passed               | 20              |
| Failed               | 0               |
| Success Rate         | 100%            |
| Roles Tested         | 3               |
| End-to-End Scenarios | 1               |
| Network Tested       | Sepolia Testnet |

All planned tests completed successfully.

---

## Related Documentation

For additional information, refer to:

- [Project README](../README.md)
- [System Architecture](architecture.md)
- [Deployment Guide](deployment.md)
- [MetaMask Setup Guide](metamask-setup.md)

# Blockchain-Based Supply Chain Tracking System  

**Design and Implementation of a Decentralized Supply Chain dApp**

---  

## Overview  

This repository contains the full implementation of the [publication **Blockchain-Based Supply Chain Tracking System: Design and Implementation of a Decentralized Supply Chain dApp**](https://github.com/micag2025/Supply_Chain_project/blob/82ee14f3f60f2c903befe6c108a32edf3032f0e6/publication.md), (TO BE CHANGED WITH READY TENSOR LINK) published on the [Ready Tensor](https://www.readytensor.ai/) platform.

Supply chains often rely on centralized systems that can limit transparency, complicate product traceability, and make it difficult to verify the authenticity and provenance of goods. This project explores how **blockchain technology** can address these challenges by providing immutable transaction records, transparent audit trails, and decentralized trust.

The application implements a blockchain-based supply chain tracking system on the **Ethereum Sepolia Testnet** using **Solidity smart contracts**, **MetaMask**, **ethers.js**, and a **React-based frontend**. The **decentralized application (dApp)** enables authorized users to create, track, and manage product batches through a simplified supply chain lifecycle:

**Created → Shipped → Delivered**  

A coffee supply chain workflow involving Farmers, Distributors, and Retailers was used to validate role-based operations, blockchain persistence, and end-to-end product traceability. Although implemented as a proof of concept, the project demonstrates how blockchain technology can improve transparency, accountability, and trust across decentralized supply chain operations.

---  

## Features (Key Highlights)

* **Blockchain-based batch tracking** – Records and tracks product batches across the supply chain using blockchain technology.
* **Role-based access control** – Restricts actions based on predefined participant roles (Farmer, Distributor, Retailer).
* **Wallet authentication via MetaMask** – Uses MetaMask wallets for secure user authentication and transaction signing.
* **Immutable transaction records** – Stores supply chain events on the blockchain, preventing unauthorized modification.
* **Batch lookup and traceability** – Enables users to retrieve batch information and verify its lifecycle history.
* **Smart contract state management** – Enforces valid state transitions throughout the supply chain workflow.
* **Ethereum Sepolia deployment** – Deploys and tests the application on the Ethereum Sepolia Testnet.

---

## System Overview

The system models a simplified coffe supply chain involving:

- **Farmers**  - Create and originate product batches
- **Distributors** - Ship batches to retailers
- **Retailers**  - Deliver batches to end customers

Each participant performs role-specific actions that are permanently recorded on the (Ethereum) blockchain, ensuring transparency and immutability.

---  

## Architecture

The application consists of:

1. React Frontend
2. MetaMask Wallet
3. Ethereum Smart Contract
4. Ethereum Sepolia Testnet  

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
OR

The application consists of a **React frontend** connected to a **Solidity smart contract** deployed on the **Ethereum Sepolia Testnet**. **MetaMask** provides wallet authentication and transaction signing, while **ethers.js** enables communication between the frontend and the blockchain.  

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

Detailed architecture documentation is available in [`docs/architecture.md`](https://github.com/micag2025/Supply_Chain_project/blob/9378aebc93fad4020641b314ae1d2d9973e59a4a/docs/architecture.md)

---  

## Technology Stack

| Layer              | Technology                           |
| ------------------ | ------------------------------------ |
| Frontend           | React                                |
| Blockchain Network | Ethereum Sepolia Testnet             |
| Smart Contracts    | Solidity 0.8.x                       |
| Wallet Integration | MetaMask                             |
| Web3 Library       | ethers.js                            |
| Development Tools  | Remix IDE, Node.js                   |
| Test Scenario      | Coffee Supply Chain (Farm-to-Retail) |

| Layer          | Technology         | Purpose                     |
| -------------- | ------------------ | --------------------------- |
| Frontend       | React              | User interface              |
| Smart Contract | Solidity           | Business logic              |
| Blockchain     | Ethereum Sepolia   | Decentralized storage       |
| Wallet         | MetaMask           | Authentication              |
| Web3           | ethers.js          | Smart contract interaction  |
| Development    | Remix IDE, Node.js | Development and build tools |


### Key Technologies

* **React** – Frontend framework used to build the decentralized application (dApp) user interface.
* **Solidity** – Smart contract programming language used to implement supply chain logic.
* **Ethereum Sepolia Testnet** – Blockchain network used for development and testing.
* **MetaMask** – Wallet used for authentication and transaction signing.
* **ethers.js** – JavaScript library used to interact with Ethereum smart contracts.
* **Remix IDE** – Development environment used for smart contract development and deployment.
* **Node.js** – Runtime environment used for frontend development and package management.

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
This scenario demonstrates:  

- Batch creation by the farmer  
- Shipment processing by the distributor  
- Delivery confirmation by the retailer  
- Role-based access control  
- Blockchain state persistence  
- End-to-end product traceability  

--- 

## Project Structure  

```
supply-chain-dapp/
│
├── contracts/                  # Solidity smart contract project
│   │
│   ├── SupplyChainBatch.sol    # Core Solidity smart contract implementing batch lifecycle management and role-based access control
│   │
│   ├── deployment/
│   │   ├── contract-address.txt     # Deployed contract address (Sepolia)
│   │   └── deployed-contract-info.md # Deployment details and metadata
│   │
│   └── abi/
│       └── SupplyChain.json         # Smart contract ABI used by the React frontend to interact with the deployed contract
│
├── frontend/                        # React Web3 frontend
│   │
│   ├── public/
│   │   ├── favicon.ico              # Application icon
│   │   └── index.html               # Root HTML page
│   │
│   ├── src/
│   │   │
│   │   ├── abi/
│   │   │   └── SupplyChain.json     # Smart contract ABI
│   │   │
│   │   ├── contract.js              # Blockchain interaction layer using ethers.js
│   │   │
│   │   ├── App.js                   # Main React dashboard containing wallet connection, batch management, and tracking functionality
│   │   ├── App.css                  # Dashboard styling
│   │   ├── index.js                 # React application entry point
│   │   └── index.css                # Global CSS styles
│   │
│   ├── .env_example                 # Environment variables template
│   ├── package.json                 # Project dependencies and scripts
│   └── package-lock.json            # Locked dependency versions
│
├── README.md                        # Project documentation
├── .gitignore                       # Git ignored files and folders
│
├── Screenshots_UI/                  # Application screenshots
│   ├── Screenshot_Create_and_ReadBatch.jpeg
│   ├── Screenshot_invalid_wallet_role.jpeg
│   ├── Screenshot_read_non_existing_batch.jpg
│   ├── Screenshot_UI_interface.jpeg
│   ├── Screenshot_Deliver_Batch_Retailer.jpg
│   └── Screenshot_Ship_Batch_Distributor.jpg  
│   ├── Screenshot_updated_table_Deliver_Batch_Retailer.jpg
│   └── Screenshot_updated_table_Ship_Batch_Distributor.jpg
│
├── docs/                            # Additional documentation
│   └── metamask-setup.md            # MetaMask setup guide (Wallet configuration)
│   └── testing.md                   # Test cases and validation
│   └── architecture.md              # Detailed technical architecture
│   └── deployment.md               # Deployment instructions  
│
└── LICENSE                          # Project license
```
---

### Core Components  

The diagram below illustrates how the core components interact from smart contract development to blockchain deployment and user interaction. 

```
SupplyChainBatch.sol
        │
        ▼ Compile
SupplyChain.json (ABI)
        │
        ▼
contract.js
        │
        ▼
React Dashboard
        │
        ▼
MetaMask
        │
        ▼
Ethereum Sepolia
```


- **SupplyChainBatch.sol** contains the business logic of the application, including batch creation, shipment tracking, delivery confirmation, lifecycle state management, and role-based access control.

- **SupplyChain.json** provides the `Application Binary Interface (ABI)` generated from the smart contract compilation process and enables communication between the frontend and the deployed contract.

- **contract.js** acts as the blockchain integration layer, using `ethers.js` to connect the React application to MetaMask and execute smart contract functions.

- **App.js** implements the main user interface, allowing participants to connect their wallet, create batches, update batch status, and perform batch lookups.

---  

## Getting Started  

### Prerequisites  

Ensure the following are installed:  

- **Node.js** (v18+) – [nodejs.org](https://nodejs.org/)
- **npm** (included with Node.js) – Check: `npm --version`
- **MetaMask** browser extension – [metamask.io](https://metamask.io/)
- **Remix IDE** (optional) – [remix.ethereum.org](https://remix.ethereum.org/)
- **Git** – For cloning repository

### Clone Repository

```bash   
git clone https://github.com/micag2025/Supply_Chain_project.git
cd Supply_Chain_project
cd frontend   TO BE CHECKED
```

### Install Dependencies  

```bash
npm install
```
This installs all required packages: `ethers.js`,` react-dom`, and other dependencies listed in `package.json`.   

### MetaMask Configuration

See: [`docs/metamask-setup.md`](https://github.com/micag2025/Supply_Chain_project/blob/833cff834420641da9f2bf814f4985a912f66592/docs/metamask-setup.md)

### Smart Contract Deployment

The smart contract can be deployed using Remix IDE on the Ethereum Sepolia Testnet.

Detailed deployment instructions are available in [`docs/deployment.md`](
https://github.com/micag2025/Supply_Chain_project/blob/c097d4a37411ba8634f40d4d6304cb9b8c0320ec/docs/deployment.md)

### Running the Application  

```bash  
npm start
```
The server will start and automatically open your browser.  

### Expected Output  

```
Compiled successfully!

You can now view supplychain-ui in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://[YOUR_IP]:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```  

Open: http://localhost:3000

---  
## Usage  

1. Connect MetaMask  
2. Farmer    
   - Create batches (a batch)    
   - View batch information     
3. Distributor    
   - Ship batches
4. Retailer
   - Deliver batches 
5. Batch Lookup   
  - Search by batch ID    
  - View lifecycle status    
  - Verify product history    
  
---  
 
## Testing 

Testing was performed on the Ethereum Sepolia Testnet.

### Test Account Setup

Three MetaMask accounts simulate the supply chain participants.

| Role | Account | Purpose | Recommended Testnet Ether (ETH)* |
|--------|---------|---------|---------|
| Farmer | Account 1 | Deploy contract and create batches | ~0.05 ETH |
| Distributor | Account 2 | Execute shipment transactions | ~0.01 ETH |
| Retailer | Account 3 | Execute delivery transactions | ~0.01 ETH |

\* These values are approximate amounts used during development and testing on the Sepolia Testnet. Actual gas consumption may vary depending on network conditions, gas prices, and the number of transactions performed.


> Get free Sepolia ETH from [Google Cloud Web3 Faucet](https://cloud.google.com/application/web3/faucet)

> See [`docs/MetaMask Setup Guide.md`](https://github.com/micag2025/Supply_Chain_project/blob/833cff834420641da9f2bf814f4985a912f66592/docs/metamask-setup.md) for more details.   

### Test Coverage

The application was tested on the Ethereum Sepolia Testnet using MetaMask and ethers.js to validate functional behavior, security controls, and complete end-to-end supply chain workflows.

Testing covered three areas:

- Functional Testing
- Security & Validation Testing
- End-to-End Workflow Validation

Detailed test cases and results are available in  [`docs/testing.md`](https://github.com/micag2025/Supply_Chain_project/blob/c097d4a37411ba8634f40d4d6304cb9b8c0320ec/docs/testing.md).

#### Functional Testing  

✓ Batch creation  
✓ Batch shipment  
✓ Batch delivery  
✓ Wallet-based authentication  
✓ Blockchain state persistence  

#### Security & Validation Testing  

✓ Role-based access control  
✓ Invalid state transition prevention  
✓ Duplicate batch prevention  
✓ Unauthorized access prevention*  

#### End-to-End Workflow Validation  

✓ Complete batch lifecycle execution  
✓ Correct role-based workflow progression  
✓ Frontend-to-blockchain synchronization  
✓ Batch traceability from creation to delivery  

\* Unauthorized access prevention was validated by attempting restricted actions from accounts assigned to incorrect roles.  

### Test Coverage Summary  

| Category | Status |
|----------|----------|
| Batch Creation | ✅ |
| Shipment | ✅ |
| Delivery | ✅ |
| Lookup | ✅ |
| Access Control | ✅ |
| Validation | ✅ |
| Persistence | ✅ |
| Wallet Integration | ✅ |
| Network Validation | ✅ |

> Many invalid actions are prevented at the React UI layer before reaching the blockchain. This improves user experience and avoids unnecessary gas consumption.

### Results

| Metric | Result |
|----------|----------|
| Total Test Cases | 20 |
| Passed | 20 |
| Failed | 0 |
| Success Rate | 100% |

All planned test cases passed successfully, confirming correct behavior of the smart contract, frontend application, wallet integration, and role-based workflow management.

Detailed test results are available in [`docs/testing.md`](https://github.com/micag2025/Supply_Chain_project/blob/c097d4a37411ba8634f40d4d6304cb9b8c0320ec/docs/testing.md).

---

## User Interface (UI) Walkthrough

### Application Interface Overview

  ![Interface UI](https://github.com/micag2025/Supply_Chain_project/blob/c5307e39eb7c51ea98d939242a2308f948819f76/Screenshots_UI/Screenshot_UI_interface.jpeg)   

**Dashboard Components:**  

- **Wallet Connection Panel** - Shows connected account and detected role
- **Create Batch Section** - Form for creating new batches (Farmer only)
- **Read Batch Section** - Query existing batch details by ID
- **Batch History Table** - Complete batch list with status and action buttons
- **Status Indicators** - Real-time batch state display

 ---  
 
The following scenarios demonstrate the primary application workflows and illustrate how different supply chain participants interact with the blockchain through the React-based user interface.  

### Scenario 1: Create and Read Batch (Farmer Only)

 ![Create_Read_Batch](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot_Create_and_ReadBatch.jpeg)  

**Steps to Test:**  

1. Open http://localhost:3000 (or run npm start)  
2.  Ensure MetaMask is connected with **Farmer** account  
3. In the **Create Batch Section**:  
   - Batch ID auto-generates (e.g.:"3") 
   - Enter Product Name (e.g., "cof_batch")
   - Enter quantity
   - Enter Distributor account address
   - Enter Retailer account address
   - Click **Create Batch**    
4. Approve transaction in MetaMask  
5. Wait for confirmation  
6. New batch appears in Batch History Table

  **Read Batch:**

1. Go to **Read Batch Section**
2. Enter Batch ID you just created
3. Click **Read Batch**
4. Batch details display below

**Expected Outcome:**  

- Batch created with state "Created"
- Batch readable immediately after creation
- All fields display correctly (ID, name, farmer, state)
- Creation timestamp recorded on blockchain 

 ---  

### Scenario 2: Ship Batch (Distributor only)      

![Distributor](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_Ship_Batch_Distributor.jpg)

![Table_overview_distributor](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_updated_table_Ship_Batch_Distributor.jpg)

**How to Test:**  

1. Switch MetaMask to **Distributor** account  
2. In **Batch History Table**, locate a batch with state "Created"  (e.g.Batch ID = 3) 
3. Click **Ship** button next to the batch  
4. Approve transaction  in MetaMask  
5. Wait for confirmation  
6. Table updates automatically  (see above updated table overview)
7. Batch state changes from "Created" → "Shipped"  

**Expected Outcome:**  

✓ Only Distributor can ship batches    
✓ State transitions correctly       
✓ Distributor address recorded on chain  
✓ Table updates in real-time      
✓ Farmer account cannot ship (button disabled)      

---  

### Scenario 3: Deliver Batch (Retailer only)   

![Retailer](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_Deliver_Batch_Retailer.jpg)  

![Updated_table2](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_updated_table_Deliver_Batch_Retailer.jpg)

**How to Test:**  

1. Switch MetaMask to **Retailer** account    
2. In **Batch History Table**, find batch with state "Shipped"  (e.g.Batch ID = 3) 
3. Click **Deliver** button     
4. Approve transaction in MetaMask
5. Wait for confirmation
6. Table updates automatically
7. Batch state changes: "Shipped" → "Delivered"   

**Expected Outcome:**  

✓ Only Retailer can deliver batches    
✓ State transitions correctly from "Shipped" to "Delivered"     
✓ Retailer address recorded on-chain    
✓ Table reflects state change instantly    
✓ Distributor account cannot deliver (button disabled)    

---  

###  Scenario 4: Invalid Wallet Role Error

![Invalid Wallet Role](https://github.com/micag2025/Supply_Chain_project/blob/01155a7bb9d825bc91c683d5670fc76d14fa4bff/Screenshots_UI/Screenshot_invalid_wallet_role.jpeg)  

**Scenario:** Distributor attempts to create a batch  

**Steps to Test:**   

1. Connect with **Distributor** account
2. In **Create Batch Section**, attempt to create batch
3. Observe: **Create Batch button is disabled**  
  
**Expected Result:**  

✓ "Create Batch" action unavailable for non-Farmers  
✓ UI prevents unauthorized action (no transaction sent)    
✓  No state change occurs (Clear role indication in interface)  
✓  No gas consumed (prevented at UI layer)    

---  

###  Scenario 5: Read Non-Existing Batch Error   
  
![Read Non-Existing Batch](https://github.com/micag2025/Supply_Chain_project/blob/01155a7bb9d825bc91c683d5670fc76d14fa4bff/Screenshots_UI/Screenshot_read_non_existing_batch.jpg) 

**Scenario:** User searches for non-Existing batch

**How to Test:**  

1. Go to **Read Batch Section**
2. Enter non-existent batch ID (e.g., ID = 999)
3. Click **Read Batch**

**Expected Result:**

✓ Error message displayed (e.g., "Batch not found")  
✓ No invalid data returned  
✓ User-friendly error formatting  
✓ No gas consumed (read-only call)  

---    

## Limitations & Suggested Enhancements

This project successfully demonstrates the core concepts of blockchain-based supply chain tracking. However, as a proof-of-concept implementation, the current version has the following limitations and potential improvement areas:

| Limitation | Impact | Suggested Enhancement |
|------------|---------|----------------------|
| **Fixed wallet-role mapping** | Roles are hardcoded to specific wallet addresses, limiting flexibility. | Implement dynamic role assignment and participant management. |
| **Sepolia-only deployment** | The application operates exclusively on the Ethereum Sepolia Testnet. | Deploy to Layer-2 networks (e.g., Polygon, Arbitrum) or Ethereum Mainnet. |
| **Limited supply chain states** | The workflow is restricted to `Created → Shipped → Delivered`. | Introduce additional lifecycle states for more realistic supply chain modeling (e.g.: Processed, Packaged, and InTransit). |
| **No historical event indexing** | Historical blockchain events cannot be efficiently queried or visualized. | Integrate The Graph or a similar indexing solution. |
| **No analytics dashboard** | Users cannot analyze operational metrics or supply chain performance. | Add reporting and analytics capabilities. |


These enhancements would evolve the project from a proof-of-concept decentralized application into a production-grade blockchain supply chain management platform.  

These limitations reflect the educational and proof-of-concept nature of the project and provide a clear roadmap for future enhancements.

Feel free to suggest features by opening an issue or starting a discussion! For bug reports or feature requests, 
 [open an issue](https://github.com/micag2025/Supply_Chain_project/issues).  

---  

## Roadmap

Planned enhancements for future releases include:

| Area                           | Enhancement                                 | Goal                                                                                                           |
| ------------------------------ | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Development Infrastructure** | Migrate from Remix to Hardhat               | Enable automated testing, deployment scripting, and professional smart contract workflows.                     |
| **Frontend Modernization**     | Migrate from Create React App (CRA) to Vite | Improve build performance and developer experience.                                                            |
| **Product Traceability**       | IPFS integration                            | Store product certificates, inspection reports, images, and compliance documentation in decentralized storage. |
| **Product Traceability**       | QR-code verification                        | Allow consumers and auditors to verify product provenance through QR-code scanning.                            |
| **Event Management**           | The Graph integration                       | Enable efficient querying, indexing, and visualization of historical blockchain events.                        |
| **Scalability**                | Layer-2 deployment (Polygon/Arbitrum)       | Reduce transaction costs and improve scalability.                                                              |
| **Analytics & Reporting**      | Analytics dashboard                         | Provide operational insights, performance metrics, and supply chain reporting capabilities.                    |

Future enhancements will focus on improving scalability, traceability, usability, and production readiness while maintaining the system's decentralized architecture.  

---

## Contributing

Contributions are welcomed! Suggested workflow:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feat/your-feature
   ```
3. Commit and push changes
4. Submit a Pull Request with description

Please follow repository code style and add tests for major features.  

 ---

## References  

### Blockchain & Web3

- [Remix IDE](https://remix.live/) - Browser-based smart contract development
- [Solidity Documentation](https://docs.soliditylang.org/en/v0.8.35/) - Smart contract language
- [Hardhat](https://hardhat.org/) - Ethereum development environment
- [ethers.js Documentation](https://docs.ethers.org/v5/) - Web3 JavaScript library

### Ethereum Networks

- [Ethereum Sepolia Faucet](https://cloud.google.com/application/web3/faucet) - Free testnet ETH
- [Ethereum Documentation](https://ethereum.org/developers) - Protocol reference

### Development Tools

- [MetaMask](https://metamask.io/) - Wallet integration guide
- [React](https://react.dev/) - UI framework documentation
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Vite](https://devdocs.io/vite/) - Frontend build tool  

### Ready Tensor Guidelines  

- [Technical Evaluation Rubric](https://app.readytensor.ai/publications/technical-excellence-in-aiml-and-data-science-publications-an-evaluation-rubric-WsaE5uxLBqnH)    
- [Engage and Inspire: Best Practices for Publishing on Ready Tensor](https://app.readytensor.ai/publications/engage-and-inspire-best-practices-for-publishing-on-ready-tensor-SBgkOyUsP8qQ)  
- [The Open Source Repository Guide: Best Practices for Sharing Your AI/ML and Data Science Projects](https://app.readytensor.ai/publications/best-practices-for-ai-project-code-repositories-0llldKKtn8Xb)  
- [Markdown for Machine Learning Projects: A Comprehensive Guide](https://app.readytensor.ai/publications/markdown-for-machine-learning-projects-a-comprehensive-guide-LX9cbIx7mQs9)  

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/micag2025/Supply_Chain_project/blob/main/LICENSE) file for details.

---

## Contact

If you encounter bugs, have questions, or want to request a new feature, please [open an issue](https://github.com/micag2025/Supply_Chain_project/issues) on this repository.  

---

## Acknowledgements

Special thanks to all contributors, testers, and community members who have:

- Tested the application thoroughly
- Provided valuable feedback and suggestions
- Reported bugs and issues
- Submitted pull requests
- Shared knowledge and expertise
--- 
















---  



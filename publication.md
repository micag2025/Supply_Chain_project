#  Blockchain-Based Supply Chain Tracking System

**Design and Implementation of a Decentralized Supply Chain dApp**

---  

![Cover_Image](https://github.com/micag2025/Supply_Chain_project/blob/9bb2c7d63d9098ad2a07b8514ecee59031d7f12a/Cover_Image.png)

---    

## Tags 

`Blockchain`, `Supply Chain Management`, `Solidity`, `Smart Contract`, `Sepolia`, `React`, `MetaMask`, `Ethereum`, `Decentralized Application (DApp)`, `Web3`, `ethers.js`

---

## TL;DR  

This publication presents the design and implementation of a **blockchain-based supply chain tracking system** built on the Ethereum Sepolia testnet enabling authorized users to create, track, and manage supply chain batches.

The application combines a **Solidity smart contract**, **MetaMask wallet** integration, **React frontend** components, and **ethers.js** to create **a decentralized application (dApp)** capable of tracking products through a simplified supply chain lifecycle:  

**Created → Shipped → Delivered**   

A coffee supply chain scenario was used to validate role-based operations involving Farmers, Distributors, and Retailers. Testing was conducted on the Ethereum Sepolia Testnet to verify core functionality, access-control mechanisms, and complete supply chain lifecycle operations.

The dApp is intended for both technical and non-technical users involved in supply chain operations, including developers, supply chain managers, logistics providers, agricultural producers, retailers, and regulatory authorities.  

---

## Introduction

Supply chains often rely on centralized databases that can suffer from limited transparency, fragmented data ownership, and challenges in auditing product provenance.  

Blockchain technology ([Nakamoto, 2008](https://bitcoin.org/bitcoin.pdf), [Buterin, 2014](https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf)) offers an alternative approach by providing:

- Immutable transaction records  
- Transparent audit trails 
- Decentralized trust  
- Cryptographic verification  

[Recent research](https://www.sciencedirect.com/science/article/pii/S0736585318306324) has also demonstrated the potential of blockchain technology to improve traceability, transparency, and accountability within supply chain management systems

This project explores how Ethereum smart contracts can be used to manage product batches across multiple supply chain participants while maintaining a transparent and tamper-resistant history.

---  

## Problem Statement

Traditional supply chain systems face several challenges:

- Difficulty verifying product authenticity  
- Limited visibility across organizational boundaries  
- Centralized control of records  
- Manual reconciliation between stakeholders  

## Key Features    

The goal of this project was to develop a decentralized proof-of-concept that demonstrates:  

- Product traceability  
- Role-based permissions  (e.g. Role-based access control: Farmer, Distributor, Retailer)
- Blockchain persistence  (e.g. Real-time batch tracking from Farmer → Distributor → Retailer)
- End-to-end lifecycle tracking   (e.g. Coffee Supply Chain (Farm-to-Retail) workflow test scenario)

---  

## Target Users & Use Cases  

### Intended Users

- **Supply Chain Managers & Logistics Companies**  
  - Track products from manufacturing through retail distribution
  - Monitor batch status in real-time across multiple locations
  - Verify authenticity and prevent counterfeiting
  - Ensure compliance with regulatory requirements

- **Farmers & Agricultural Producers**  
  - Initiate batches with product details (name, quantity, origin)  
  - Authenticate their role via connected MetaMask wallet
  - Create immutable records of production
  - Build trust with distributors and retailers

- **Distributors & Warehousing Providers**
  - Receive batch notifications when created by farmers
  - Update batch status to "Shipped" with transaction confirmation
  - Maintain records of all handled batches
  - Ensure secure handoffs between supply chain stages

- **Retailers & End-Consumers**
  - Verify product authenticity through batch lookup
  - Access complete product journey from origin to store shelf
  - Make informed purchasing decisions based on traceability
  - Scan batch IDs to view history and certifications

- **Regulatory & Compliance Officers**
  - Audit supply chain transparency
  - Verify adherence to product safety standards
  - Generate reports on batch movements
  - Investigate recalls or quality issues

### Key Use Cases

- **Use Case: Preventing Counterfeit Products**
  - Batch creation records cannot be forged (blockchain immutability)
  - Each transaction is cryptographically signed by authorized parties
  - Complete audit trail shows all handlers and timestamps
  - Retailers can verify authenticity before display

- **Use Case: Rapid Recall Management**
  - Pinpoint affected batches  
  - Identify retailers who received products
  - Notify relevant parties through dashboard  
  - Maintain liability records   

- **Use Case: Supply Chain Optimization**
  - Identify delivery bottlenecks  
  - Analyze time between state transitions
  - Optimize distributor and retailer networks

- **Use Case: Fair Trade & Ethical Sourcing**
  - Verify certified farm origins
  - Ensure transparent farmer compensation
  - Build consumer confidence
  - Enable premium pricing for certified batches  

---  

## System Architecture  

The following workflow illustrates the **high-level architecture** of the proposed blockchain-based supply chain tracking system.   

The application consists of a **Solidity smart contract** (`SupplyChainBatch.sol`) deployed on the **Ethereum Sepolia Testnet** and a **React-based frontend** that provides the user interface. Smart contracts are developed and deployed using **Remix IDE**, while **MetaMask** provides wallet authentication and transaction signing. Communication between the frontend and the blockchain is handled through **ethers.js** using the contract's **Application Binary Interface (ABI)**, enabling authorized users to create, track, ship, and deliver product batches through a web-based dashboard.  

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

## Technology Stack

| Layer                       | Technology               | Purpose                                                                                  |
| --------------------------- | ------------------------ | ---------------------------------------------------------------------------------------- |
| **Frontend**                | React                    | Builds the decentralized application (dApp) user interface.                              |
| **Smart Contract**          | Solidity 0.8.x           | Implements batch management, lifecycle state transitions, and role-based access control. |
| **Blockchain Network**      | Ethereum Sepolia Testnet | Executes smart contracts and stores immutable transaction records.                       |
| **Wallet Integration**      | MetaMask                 | Authenticates users and signs blockchain transactions.                                   |
| **Web3 Library**            | ethers.js                | Enables communication between the frontend and the deployed smart contract via the ABI.  |
| **Development Environment** | Remix IDE                | Develops, compiles, tests, and deploys smart contracts.                                  |
| **Runtime Environment**     | Node.js                  | Manages project dependencies and runs the React development environment.                 |


The system was implemented using **React** for the frontend interface, **Solidity** for smart contract development, **MetaMask** for wallet-based authentication, and **ethers.js** for blockchain interaction. Smart contracts were developed and deployed through **Remix IDE** to the **Ethereum Sepolia Testnet**.

---  

## Reference Test Scenario

The application was validated using a **Coffee Supply Chain (Farm-to-Retail) workflow** involving three participants:

```bash  
Farmer
  ↓ Create
Distributor
  ↓ Ship
Retailer
  ↓ Deliver
```  
Every state transition is permanently stored on-chain.   

This scenario was used to verify batch creation, shipment tracking, delivery confirmation, role-based access control, blockchain persistence, and end-to-end traceability.

---  

## Implementation  

The implementation consists of four principal components.  

### Solidity Smart Contract  

The core business logic is implemented in the `SupplyChainBatch.sol` smart contract, which manages product batches, enforces role-based access control, validates lifecycle state transitions, records lifecycle timestamps, emits blockchain events, and stores batch information on the Ethereum blockchain.  

The smart contract provides the following capabilities:

- **Batch creation** and initialization  
- **Shipment tracking** and state updates  
- **Delivery confirmation**  
- **Role-based access control** using Solidity modifiers  
- **Lifecycle state management** (`Created → Shipped → Delivered`)  
- **Lifecycle timestamp recording** (`createdAt`, `shippedAt`, `deliveredAt`)  
- **Blockchain event emission** for batch creation, shipment, and delivery  
- **Read-only helper functions** for retrieving batch information    

The principal public functions are:  

```solidity  
createBatch()
shipBatch()
deliverBatch()
getBatchReadable()
getStateText()
```  

>_Note_: Lifecycle Auditing: Besides maintaining the batch state and participant addresses, the smart contract records **lifecycle timestamps** (`createdAt`, `shippedAt`, and `deliveredAt`) to support auditability and product traceability. While these values are permanently stored on-chain, they are not currently exposed through the React user interface, leaving scope for future visualization enhancements.  

### React-based frontend  

The React-based frontend provides a user-friendly dashboard that allows participants to connect their MetaMask wallet, create product batches, update shipment status, deliver products, and retrieve batch information from the blockchain.

The React dashboard provides:

- Wallet connection
- Role detection
- Batch creation
- Batch lookup
- Batch history visualization  

### Wallet Authentication  

MetaMask provides decentralized authentication by linking application permissions to Ethereum wallet addresses. Users must approve all state-changing transactions through MetaMask before they are submitted to the blockchain, ensuring that only authorized participants can perform supply chain operations.  

### Role-Based Access Control

Three predefined roles were implemented:

| Role        | Permission      |
| ----------- | --------------- |
| Farmer      | Create batches  |
| Distributor | Ship batches    |
| Retailer    | Deliver batches |

> **Note:** To interact with the blockchain, each account related to each role, requires a small amount of Sepolia ETH to pay transaction fees.  

Both the frontend and the smart contract validate user roles to prevent unauthorized operations and maintain data integrity throughout the supply chain lifecycle.

---  

## Installation & Setup

This publication includes a complete [GitHub code repository](https://github.com/micag2025/Supply_Chain_project) with all source code, configuration files, and test cases.

### Prerequisites  

Ensure the following are installed:  

- **Node.js** (v18+) – [nodejs.org](https://nodejs.org/)
- **npm** (included with Node.js) – Check: `npm --version`
- **MetaMask** browser extension – [metamask.io](https://metamask.io/)
- **Remix IDE** – [remix.ethereum.org](https://remix.ethereum.org/)
- **Git** – For cloning repository

### Clone Repository

```bash   
git clone https://github.com/micag2025/Supply_Chain_project.git
cd Supply_Chain_project
```

### Install Dependencies  

```bash
npm install
```
This installs all required packages: `ethers.js`,` react-dom`, and other dependencies listed in `package.json`.    

### Environment Configuration  

Create a `.env` file in the project root (see `.env.example`):

```bash  
REACT_APP_CONTRACT= YOUR_DEPLOYED_CONTRACT_ADDRESS
REACT_APP_NETWORK_NAME=Sepolia  
```  

***How to obtain contract address:***

1. Deploy the smart contract via Remix IDE
2. Copy contract address from the deployment receipt
3. Paste into `.env `file    

> **Note:** Use the **contract address** from Remix "Deployed Contracts" panel, NOT farmer/distributor/retailer wallet addresses.

---  

## Running the Application  

### Start the React Development Server  

Launch the React development server:

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

### Connect Wallet  

1. Navigate to `http://localhost:3000` (opens automatically)
2. MetaMask prompts for wallet connection  
3. Select account representing one of the three roles (Farmer, Distributor, or Retailer)  
4. Approve connections in MetaMask popup  
5. Dashboard loads with role-specific options  

### Dashboard Features  

The dashboard includes the following features:   

#### 1. Wallet Connection Panel  
- Currently connected MetaMask account
- Account balance in Sepolia ETH
- Detected role (Farmer/Distributor/Retailer)
- `Connect Wallet` and `Disconnect` buttons

#### 2. Batch Lookup (Manual Verification)     
- Enter specific batch ID
- `Search` queries blockchain
- Displays batch details and handler addresses
- "Batch not found" if ID doesn't exist

#### 3. Overview Table (Batch History)  
- All batches in smart contract
- Columns: ID, Name, Quantity, State, Farmer, Distributor, Retailer
- Sortable by any column
- Action buttons based on role and batch state
- Auto-updates on transaction completion
  
#### 4. Create Batch Section (Farmer Only)    
- Input: Batch ID, Product Name, Quantity
- Shows transaction hash and confirmation link
- Updates Overview Table automatically
- Validates: no duplicate IDs, quantity > 0
  
#### 5. Ship Batch Section (Distributor Only)  
- Available for "Created" state batches
- Records distributor address on-chain
- Shows transaction confirmation

#### 6. Deliver Batch Section (Retailer Only)  
- Available for "Shipped" state batches
- Records retailer address on-chain
- Completes batch journey

---  

## Testing & Evaluation

The testing strategy combined functional verification, security validation, and end-to-end workflow testing to ensure both technical correctness and realistic supply chain execution.

Testing the full workflow was performed on the Ethereum Sepolia Testnet using MetaMask accounts representing each supply chain participant.

### Test Environment Setup

- **Network:** Ethereum Sepolia Testnet
- **Test Accounts:** Three MetaMask accounts (account 1, account 2 and account 3, respectively) representing:
  - Farmer role (create batches)
  - Distributor role (ship batches)
  - Retailer role (deliver batches)
- **Tools:** MetaMask, ethers.js, Sepolia Faucet

### Test Coverage

To provide coverage of both technical correctness and real-world operational scenarios, the evaluation framework consisted of three complementary testing categories:

- **Functional Testing**, which verified core application features and blockchain interactions.
- **Security & Validation Testing**, which evaluated access controls and business-rule enforcement.
- **End-to-End Workflow Validation**, which confirmed successful execution of the complete supply chain lifecycle across all participant roles.

The following areas were validated:

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

### Test Results

Detailed test cases and execution results are available in the accompanying [GitHub repository](https://github.com/micag2025/Supply_Chain_project).

| Metric | Value |
|----------|----------|
| Total Test Cases | 20 |
| Passed | 20 |
| Failed | 0 |
| Roles Tested | 3 |
| End-to-End Scenarios | 5 |
| Success Rate | 100% |

All test cases passed successfully, confirming correct behavior of the smart contract, frontend application, wallet integration, and role-based workflow management across the entire supply chain lifecycle.  

These results demonstrate that the **proposed blockchain-based supply chain system can reliably enforce role-based operations** while maintaining transparent and persistent product traceability throughout the supply chain lifecycle.

---

## Examples User Interface (UI)  

### Main Interface    

The dashboard features a **wallet connection panel** showing the connected account and role, a **batch management section** with create and lookup forms, and a **real-time overview table** displaying all batches. 

 ![Interface UI](https://github.com/micag2025/Supply_Chain_project/blob/c5307e39eb7c51ea98d939242a2308f948819f76/Screenshots_UI/Screenshot_UI_interface.jpeg)  

 ---

The following scenarios demonstrate the primary application workflows and illustrate how different supply chain participants interact with the blockchain through the React-based user interface.  

### Scenario 1: Create and Read Batch (Farmer Only)  

The `Farmer creates a batch and records product information on-chain` workflow was validated.  The figure shows the **Farmer batch creation process**, including validated **batch creation**, **instant display in the overview table**, **blockchain confirmation**, and **batch lookup with full details**. 

 ![Create_Read_Batch](https://github.com/micag2025/Supply_Chain_project/blob/5b7356a58d8418363b106ee8e3c8eb3929b2de38/Screenshots_UI/Screenshot_Create_and_ReadBatch.jpeg)    

 ---  

### Scenario 2: Ship Batch Action (Distributor only)  

The `Distributor updates batch state from: Created → Shipped` workflow was validated.  The figures show the **Distributor shipment process**, including **viewing only “Created” batches**, using the **“Ship” action**, and **updating batch status to “Shipped”** . The screenshots also confirm that the Distributor address is recorded on-chain, updates appear in real time, and farmers cannot perform shipping actions (button disabled). 

![Distributor](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_Ship_Batch_Distributor.jpg)

![Table_overview_distributor](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_updated_table_Ship_Batch_Distributor.jpg)  

---  

### Scenario 3: Deliver Batch Action (Retailer only)  

The `Retailer completes the lifecycle: Shipped → Delivered` workflow was validated. The figures show the **Retailer delivery process**, including **viewing “Shipped” batches**, using the **“Deliver” action**, and **updating the state to “Delivered.”** These screenshots also confirm on-chain recording of the Retailer address, real-time updates, and restricted access for Distributors (button disabled).

![Retailer](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_Deliver_Batch_Retailer.jpg)  

![Updated_table2](https://github.com/micag2025/Supply_Chain_project/blob/4e9f1697cf557d27f0200f633f694183e32dc0ce/Screenshots_UI/Screenshot_updated_table_Deliver_Batch_Retailer.jpg)  

---  

### Scenario 4: Invalid Wallet Role  (Unauthorized Access)

The `Non-authorized roles cannot perform restricted actions` workflow was validated. The figure demonstrates an **access control scenario where a distributor attempts to create a batch**. It shows that the **“Create Batch” action is unavailable for non-farmer roles**, preventing unauthorized actions. The interface clearly indicates role restrictions, and no gas is consumed since the action is blocked at the UI level.  
 
![Invalid Wallet Role](https://github.com/micag2025/Supply_Chain_project/blob/01155a7bb9d825bc91c683d5670fc76d14fa4bff/Screenshots_UI/Screenshot_invalid_wallet_role.jpeg)  

---  

### Scenario 5: Read Non-Existing Batch  (Invalid Batch Lookup)

The `Users receive clear feedback when querying non-existing batches` workflow was validated.  The figure shows the **behavior when a user searches for a non-existing batch**. It displays a  **clear “Batch not found” error message with user-friendly formatting**. Thus, it ensures no invalid data is returned, and confirms that the read-only operation does not consume gas. 

![Read Non-Existing Batch](https://github.com/micag2025/Supply_Chain_project/blob/01155a7bb9d825bc91c683d5670fc76d14fa4bff/Screenshots_UI/Screenshot_read_non_existing_batch.jpg) 

---  

## Challenges Encountered  

### Wallet Synchronization  

Handling MetaMask account changes required continuous UI synchronization.  

### State Management  

Blockchain transactions are asynchronous and require confirmation before frontend updates.  

### Role Enforcement  

To provide a better user experience while maintaining security, access control needed validation at both:  

- UI layer  
- Smart contract layer  

---

## Limitations

The proposed blockchain-based supply chain tracking system successfully demonstrates decentralized batch creation, shipment tracking, delivery verification, and role-based access control through Ethereum smart contracts and a React-based user interface. However, as a proof-of-concept implementation, the system has several limitations that should be addressed in future iterations.

- **Sepolia-only deployment** – The application is currently deployed and tested exclusively on the Ethereum Sepolia Testnet. Consequently, it has not been evaluated under real-world production conditions or on alternative blockchain networks.    
- **Fixed role assignments** – Supply chain roles (Farmer, Distributor, and Retailer) are hardcoded to specific wallet addresses. The system does not currently support dynamic role assignment, role management, or onboarding of new participants.
- **Limited supply chain states**  – The current implementation focuses on the core workflow (`Created → Shipped → Delivered`). Additional states such as production, quality inspection, warehousing, customs clearance, and returns are not modeled, limiting the realism and granularity of supply chain tracking.    
- **No analytics dashboard** – The system provides operational tracking functionality but does not include analytics or reporting capabilities for monitoring supply chain performance, trends, or operational metrics.  
- **No QR-code integration** – Products cannot currently be identified or tracked through QR-code scanning, which limits ease of use in practical supply chain environments.  
- **No inventory management** – The application focuses on batch traceability and does not support inventory tracking, or stock management operations.  
- **Prototype-oriented development environment** – Smart contract development and deployment were performed using Remix IDE, which is well suited for rapid prototyping and educational projects. However, production environments typically rely on more advanced frameworks such as Hardhat or Foundry that provide automated testing, deployment pipelines, contract verification, and improved development workflows.  
- **Legacy frontend tooling (CRA)** – The frontend was developed using Create React App (CRA), which provides a stable development environment but offers slower build times and less optimized performance compared with modern alternatives such as Vite.      

Despite these limitations, the project successfully demonstrates the feasibility of using blockchain technology to provide transparent, immutable, and role-controlled supply chain tracking. The identified limitations also provide a clear roadmap for future enhancements and system expansion.  

---

## Future Work 

The proposed architecture was intentionally designed as a modular proof-of-concept that can be extended to support more realistic supply chain requirements. Future work will focus on improving scalability, usability, traceability, and production readiness while preserving the system's decentralized design principles.

Contributors are encouraged to extend the system with the following enhancements:  

- **Layer-2 deployment (Polygon or Arbitrum)** and **multi-network support** to reduce transaction costs, improve scalability, and enable deployment across multiple blockchain environments.    
- **Dynamic role management** to support administrator-controlled onboarding and management of supply chain participants without modifying the smart contract source code.    
- **Expanded supply chain lifecycle states** to model additional stages such as production, quality inspection, warehousing, customs clearance, and returns, thereby improving supply chain realism and traceability.     
- **Event indexing through The Graph** to provide efficient historical event querying, audit trails, and advanced lifecycle visualization.    
- **Advanced analytics and reporting dashboards** to support operational monitoring, performance metrics, and business intelligence capabilities.  
- **QR-code traceability** to enable rapid product identification and verification throughout the supply chain.  
- **Inventory management capabilities** to support stock tracking, warehouse management, and expiration monitoring.   
- **IoT sensor integration** to support automated collection of environmental data such as temperature, humidity, and location, enabling real-time monitoring of sensitive goods.
- **Migration from Remix to Hardhat** to support professional smart contract development workflows, automated testing, deployment scripting, and contract verification.  
- **Migration from Create React App (CRA) to Vite** to improve frontend performance, reduce build times, and provide a more modern development experience.  

Additional technical details, implementation considerations, and the complete development roadmap are available in the accompanying [GitHub repository](https://github.com/micag2025/Supply_Chain_project).

---

## Conclusion

This project demonstrates the **feasibility of using blockchain technology to implement a decentralized supply chain tracking system** that combines smart contracts, wallet-based authentication, and a React frontend. The proposed apporach **successfully validates product traceability, role-based access control, and immutable lifecycle tracking on the Ethereum Sepolia Testnet**. Although implemented as a proof of concept, the modular architecture provides a solid foundation for future enhancements, including advanced analytics, decentralized storage, multi-network deployment, and real-world supply chain integration.

---

## Contributing  

Contributions are welcome to enhance the Supply Chain dApp. Follows these steps:

1. Fork the GitHub repository  
2. Create a feature branch:    
```bash
git checkout -b feat/your-feature
```
3. Commit and push your changes  
4. Submit a Pull Request with descriptions
5. Follow the repository code style and add tests for major features

---     

## References    

Official documentation and resources:  

### Academic References

- [Nakamoto (Bitcoin White Paper)](https://bitcoin.org/bitcoin.pdf)  
- [Buterin (Ethereum White Paper)](https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf)    
- [A Systematic Literature Review of Blockchain-Based Applications: Current Status, Classification and Open Issues](https://www.sciencedirect.com/science/article/pii/S0736585318306324)

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

This project is licensed under the [**MIT License**](https://github.com/micag2025/Supply_Chain_project/blob/main/LICENSE) 

---

## Contact

michelaagostini73@gmail.com

---

## Acknowledgements  

This project was built with contributions and inspiration from the developers (supply chain professionals) who enrolled in the Blockchain Traininig, organised by [Cieffe](https://www.ci-effe.net/). Special thanks to the trainer (supply chain professional), Giacomo Scettri, who provided feedback during development and testing phases.

--- 

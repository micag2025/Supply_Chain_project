// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;


// --- Solidity contract for managing the lifecycle of each batch of the supply chain, tracking their state transitions (Created, Shipped, Delivered).---
contract SupplyChainBatch {


    // --- State Management / State Enum ---
    // State of the batch: Created, Shipped, Delivered
    enum State { Created, Shipped, Delivered }


    // --- Batch Structure ---
    struct Batch {
        uint id;
        string name;
        uint quantity;
        State state;
        address farmer;
        address distributor;
        address retailer;
        uint createdAt;
        uint shippedAt;
        uint deliveredAt;
    }

    // Maps batch IDs to their corresponding Batch structs, enabling public access to batch details by ID.
    mapping(uint => Batch) public batches;

    // --- Events for batch creation, shipping and delivery---
    event BatchCreated(uint id, string name, uint quantity, address farmer);
    event BatchShipped(uint id, address distributor, uint timestamp);
    event BatchDelivered(uint id, address retailer, uint timestamp);

    // --- Modifiers ---
    modifier batchExists(uint _id) {
        require(batches[_id].farmer != address(0), "Batch does not exist");
        _;
    }

    modifier onlyDistributor(uint _id) {
        require(msg.sender == batches[_id].distributor, "Not the distributor");
        _;
    }

    modifier onlyRetailer(uint _id) {
        require(msg.sender == batches[_id].retailer, "Not the retailer");
        _;
    }

    // --- Key Functions---
    // --- Create Batch ---
    function createBatch(
        uint _id,
        string memory _name,
        uint _quantity,
        address _distributor,
        address _retailer
    ) public {
        require(batches[_id].farmer == address(0), "Batch already exists");

        batches[_id] = Batch({
            id: _id,
            name: _name,
            quantity: _quantity,
            state: State.Created,
            farmer: msg.sender,
            distributor: _distributor,
            retailer: _retailer,
            createdAt: block.timestamp,
            shippedAt: 0,
            deliveredAt: 0
        });

        emit BatchCreated(_id, _name, _quantity, msg.sender);
    }

    // --- Ship Batch ---
    function shipBatch(uint _id)
        public
        batchExists(_id)
        onlyDistributor(_id)
    {
        Batch storage b = batches[_id];

        require(b.state == State.Created, "Not ready to ship");

        b.state = State.Shipped;
        b.shippedAt = block.timestamp;

        emit BatchShipped(_id, msg.sender, b.shippedAt);
    }

    // --- Deliver Batch ---
    function deliverBatch(uint _id)
        public
        batchExists(_id)
        onlyRetailer(_id)
    {
        Batch storage b = batches[_id];

        require(b.state == State.Shipped, "Not shipped yet");

        b.state = State.Delivered;
        b.deliveredAt = block.timestamp;

        emit BatchDelivered(_id, msg.sender, b.deliveredAt);
    }


    // --- Helper Functions 
    // --- Convert State to Text ---
    function getStateText(uint _id)
        public
        view
        batchExists(_id)
        returns (string memory)
    {
        State s = batches[_id].state;

        if (s == State.Created) return "Created";
        if (s == State.Shipped) return "Shipped";
        if (s == State.Delivered) return "Delivered";

        return "";
    }

    // --- Clean Readable Output ---
    function getBatchReadable(uint _id)
        public
        view
        batchExists(_id)
        returns (
            string memory name,
            uint quantity,
            string memory state,
            address farmer,
            address distributor,
            address retailer
        )
    {
        Batch memory b = batches[_id];

        return (
            b.name,
            b.quantity,
            getStateText(_id),
            b.farmer,
            b.distributor,
            b.retailer
        );
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocRegistry {
    mapping(bytes32 => address) public issuer;
    event Registered(bytes32 indexed docHash, address indexed issuer, uint256 timestamp);

    function register(bytes32 docHash) public {
        require(issuer[docHash] == address(0), "Already registered");
        issuer[docHash] = msg.sender;
        emit Registered(docHash, msg.sender, block.timestamp);
    }

    function isRegistered(bytes32 docHash) public view returns (bool) {
        return issuer[docHash] != address(0);
    }
}

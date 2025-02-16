// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract EventChain is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Ticket {
        uint256 tokenId;
        bool isVIP;
    }

    mapping(uint256 => Ticket) public tickets;
    mapping(address => uint256[]) private _ownerTokens; // ✅ Store token IDs per owner

    constructor() ERC721("EventChain", "EVT") {}

    function mintTicket(address attendee, string memory metadataURI) public onlyOwner {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        bool isVIP = (newTokenId % 20 == 0);
        tickets[newTokenId] = Ticket(newTokenId, isVIP);

        _mint(attendee, newTokenId);
        _setTokenURI(newTokenId, metadataURI);

        _ownerTokens[attendee].push(newTokenId); // ✅ Track owner’s tickets
    }

    function getTicketsByOwner(address owner) public view returns (uint256[] memory) {
        return _ownerTokens[owner]; // ✅ Return all owned ticket IDs
    }
}
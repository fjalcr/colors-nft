// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract Color is ERC721Enumerable {

    string[] public colors;

    mapping(string => bool) _colorExists;

    
    constructor() ERC721("Color", "COLOR") {
    } 

    function mint(string memory _color) public {
        // Verify if color exists
        require(!_colorExists[_color]);
        // Color - add it
        colors.push(_color);
        uint _id = colors.length - 1;
        // Mint the color
        _mint(msg.sender, _id);
        // track the color 
        _colorExists[_color] = true;
    }
}

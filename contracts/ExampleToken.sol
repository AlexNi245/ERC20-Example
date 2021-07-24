pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ExampleToken is ERC20 {
    constructor(string memory _name, string memory _symbol) ERC20(_name,_symbol) {
        _mint(msg.sender, 1000);
    }

    function faucet(address recipient, uint256 amount) external {
        _mint(recipient, amount);
    }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface readStorage {
                /**
     * @dev See {IERC721Metadata-name}.
    //  */
    function name() external view returns (string memory);
    // /**
    //  * @dev See {IERC721Metadata-symbol}.
    //  */
    function symbol() external view returns (string memory);

    function ownerOf(uint256 tokenId) external view returns (address);

    function balanceOf(address _owner) external view returns (uint256);
    function name_() external view returns(string memory);
    function totalSupply() external view returns (uint256);

}
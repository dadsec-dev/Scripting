import { ethers } from "hardhat";

async function main() {
    const [owner, holder1, holder2, holder3] = await ethers.getSigners();

    //contract addresses i'm reading from storage
    const generative = "0xCf53c3823dcDD189B0F35E34CA9ab2c97Ef1F92d";
    const votingToken = "0xDDBD714575b3F7C89b7B02609Bd2853b4bf212F8";
    const votingToken2 = "0xC38feE6C192EABaAEAb231a55B91b6AD95DFFa7E"
    const votingContract = "0xF0072390ed40f7706058268f7a4ba8f31Ce487df";
    const linkContract = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";

    //using an interface and address to access the contracts
    const generativeContr = await ethers.getContractAt("readStorage", generative);
    const votingTokenAddr = await ethers.getContractAt("readStorage", votingToken);
    const votingContractAddr = await ethers.getContractAt("readStorage", votingContract);
    const linkContractAddr = await ethers.getContractAt("readStorage", linkContract);
    

    //i am calling functions which accesses the storage vaalues
    const contrName = await generativeContr.name();
    console.log(`Contract name is ${contrName}`);

    const userBalance = await votingTokenAddr.balanceOf("0x35064FAcBD34C7cf71C7726E7c9F23e4650eCA10");
    console.log(`UserBalance ${userBalance}`);

    const ContractName = await votingContractAddr.name_();
    console.log(`UserBalance ${ContractName}`);


    const votingToken2contract = await ethers.getContractAt("readStorage", votingToken2)
    console.log(`name is ${await votingToken2contract.name()} Total Supply is ${await votingToken2contract.totalSupply()}`)


    const linkHolder = "0x35064FAcBD34C7cf71C7726E7c9F23e4650eCA10"

    const linkUserBalance = await linkContractAddr.balanceOf(linkHolder);
    console.log(`UserBalance from Link ${linkUserBalance}`);
 

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

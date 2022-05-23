const main= async()=>{
  try{
    const nftContractFactory=await hre.ethers.getContractFactory("ChainBattles");
    const nftContract=await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Deployed ChainBattles contract to:",nftContract.address);
    process.exit(0);
  }catch(err){
    console.log(err);
    process.exit(1);
  }
}
main();
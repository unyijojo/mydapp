require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337

    }
    // rinkeby: {
    //   url:"https://rinkeby.infura.io/v3/32b40f7457be4fc08abab3243ccadcb9",
    //   accounts:[`907ca72d7c5c835b65d71ed40884d0c1935f7b8c49fdcc3935db0e1066a7786a`]

    // }
 }

};




require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config()

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
    paths: {
        artifacts: './frontend/src/artifacts',
    },

    networks: {
        hardhat: {
            chainId: 1337
        },
        goreli: {
            url: "https://goerli.infura.io/v3/e1c6ad4eb30e4780a8bf9abb9979e22c",
            accounts: [`0x${process.env.PRIVATE_KEY}`]

        }
    },
    solidity: "0.8.3"
};

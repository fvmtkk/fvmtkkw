const { ethers } = require('ethers');

function createWallet() {
    const wallet = ethers.Wallet.createRandom();
    console.log(`Wallet Address: ${wallet.address}`);
    console.log(`助记词: ${wallet.mnemonic.phrase}`);
    console.log(`Private Key: ${wallet.privateKey}`);
}

module.exports = { createWallet };

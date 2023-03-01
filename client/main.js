require('dotenv').config();

import Web3 from 'web3';

const rpcUrl = 'https://mainnet.infura.io/v3/' + process.env.INFURA_PROJECT_ID;

const web3 = new Web3(rpcUrl);

export default web3;

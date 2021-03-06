// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {abi,evm} = require('./compile');
const provider = new HDWalletProvider('benefit buzz rival lab deliver omit spirit cup script refuse forum uncover',
'https://rinkeby.infura.io/v3/45fe473f52374a91992b48a31be6e904');
const web3 = new Web3(provider);

const deploy = async() =>{
  const accounts = await web3.eth.getAccounts();
  console.log("Attepting to deploy from account:",accounts[0]);
  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  console.log(JSON.stringify(abi)); //converting JSON.stringify() is very important, we need to copy & paste
  //this converted value into web3 react app.
  provider.engine.stop();
}
deploy();

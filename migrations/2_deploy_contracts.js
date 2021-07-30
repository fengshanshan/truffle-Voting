var Voting = artifacts.require("./Voting");

module.exports = function(deployer) {

  deployer.deploy(Voting); //配置合约的发布

};

pragma solidity ^0.5.0;

contract Voting {
  string hello;

  mapping (bytes32 => uint8) public votesReceived;

  bytes32[] public candidateList;



  constructor() public {

    hello = "hello world";

    candidateList.push("zhang");

    candidateList.push("bin");

    candidateList.push("cheng");

  }

 function getHello() public view returns (string memory) {
    return hello;
 }

  function totalVotesFor(bytes32 candidate) view public returns (uint8) {

    require(validCandidate(candidate));

    return votesReceived[candidate];

  }



  function voteForCandidate(bytes32 candidate) public {

    require(validCandidate(candidate));

    votesReceived[candidate] += 1;

  }



  function validCandidate(bytes32 candidate) view public returns (bool) {

    for(uint i = 0; i < candidateList.length; i++) {

      if (candidateList[i] == candidate) {

        return true;

      }

    }

    return false;

  }

}

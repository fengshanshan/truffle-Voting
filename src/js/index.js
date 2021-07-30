Index = {
    web3Provider: null,
    contracts: {},

    initWeb3: function () {
        if (typeof web3 !== 'undefined') {
            Index.web3Provider = web3.currentProvider;
        } else {
            Index.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        }
        web3 = new Web3(Index.web3Provider);
        Index.initContract();
    },
    initContract: function () {
        $.getJSON('Voting.json', function (data) {
            Index.contracts.Voting = TruffleContract(data);

            Index.contracts.Voting.setProvider(Index.web3Provider);
            //console.log(Index.contracts.Voting);
            //Index.setCounts();
        });
        Index.testHello();
    },

    testHello: function () {
        var VotingInstance;
        Index.contracts.Voting.deployed().then(function (instance) {
            VotingInstance = instance;

            VotingInstance.getHello.call({from:account}).then((result) => {
                console.log("Success ! Got Result: " + result);
                $("#hello_id").html("你好：" + result);
            })
        })
    }
};

$(function () {
    $(window).load(function () {
        Index.initWeb3();
    });
});


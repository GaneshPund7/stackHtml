function copytextid(elementId) {

    // Create a "hidden" input
    var aux = document.createElement("input");

    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);

    // Append it to the body
    document.body.appendChild(aux);

    // Highlight its content
    aux.select();

    // Copy the highlighted text
    document.execCommand("copy");


    // Remove it from the body
    document.body.removeChild(aux);
    /* $.toast({
        heading: 'Copied',
        position: 'top- GRT',
        loaderBg:'#ff6849',
        icon: 'success',
        hideAfter: 3500, 
        stack: 10
      }); */
    alert("Text Copied sucessfully \n" + aux.value);

}

var bnbPrice = $('#bnbprice').html();





//console.log($('#bnbprice').html());

const usdcabi = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
const usdc_address = "0xC3a05EFb6E853851692565f327bA0a50DBa2faBF";

const contract_address = "0x4e1490363ff2e7acAC9bbe6fc12Ec4223ADA3d79";
const abi = [{ "constant": true, "inputs": [], "name": "PERCENTS_DIVIDER", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserDownlineCount", "outputs": [{ "name": "referrals", "type": "uint256[10]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserDividends", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserAvailable", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "started", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "senderAddress", "type": "address" }, { "name": "dataId", "type": "uint256" }], "name": "getDownlineRef", "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "TIME_STEP", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserReferrer", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "name": "RefUser", "outputs": [{ "name": "refUserAddress", "type": "address" }, { "name": "refLevel", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserReferralTotalBonus", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PROJECT_FEE", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getSiteInfo", "outputs": [{ "name": "_totalInvested", "type": "uint256" }, { "name": "_totalBonus", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserTotalSeedWithdrawn", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalInvested", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PERCENT_STEP", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "REFERRAL_PERCENTS", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserInfo", "outputs": [{ "name": "totalDeposit", "type": "uint256" }, { "name": "totalWithdrawn", "type": "uint256" }, { "name": "totalReferrals", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalRefBonus", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserReferralWithdrawn", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getContractBalance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserTotalDeposits", "outputs": [{ "name": "amount", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "commissionWallet", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserAmountOfDeposits", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "plan", "type": "uint8" }], "name": "getPlanInfo", "outputs": [{ "name": "time", "type": "uint256" }, { "name": "percent", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }, { "name": "index", "type": "uint256" }], "name": "getUserDepositInfo", "outputs": [{ "name": "plan", "type": "uint8" }, { "name": "percent", "type": "uint256" }, { "name": "amount", "type": "uint256" }, { "name": "start", "type": "uint256" }, { "name": "finish", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "SEED_PERCENTS", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserCheckpoint", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserSeedIncome", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "INVEST_MIN_AMOUNT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "referralCount_", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "referrer", "type": "address" }, { "name": "plan", "type": "uint8" }, { "name": "amounts", "type": "uint256" }], "name": "invest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserReferralBonus", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PLANPER_DIVIDER", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getcurrentseedincome", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserTotalWithdrawn", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserTotalReferrals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "token", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "wallet", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "user", "type": "address" }], "name": "Newbie", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": false, "name": "plan", "type": "uint8" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "NewDeposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "Withdrawn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "referrer", "type": "address" }, { "indexed": true, "name": "referral", "type": "address" }, { "indexed": true, "name": "level", "type": "uint256" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "RefBonus", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "referrer", "type": "address" }, { "indexed": true, "name": "referral", "type": "address" }, { "indexed": true, "name": "level", "type": "uint256" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "SeedIncome", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": false, "name": "totalAmount", "type": "uint256" }], "name": "FeePayed", "type": "event" }];

async function connect() {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // ask user for permission
            await ethereum.request({
                method: 'eth_requestAccounts'
            });
            // user approved permission

            getAccount();
        } catch (error) {
            // user rejected permission
            alert("User Rejected Permission");
            console.log('user rejected permission');
        }
    }
    // Old web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        console.log('all ok');
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
        alert("Metamask Not Connected");
    }


}


function getAccount() {
    //getAccount();
    // web3js = new Web3(web3.currentProvider);
    var account;
    web3 = new Web3(window.web3.currentProvider);
    web3.eth.getAccounts(function (err, accounts) {
        if (err != null) {
            //alert("Error Retrieving Accounts.");
            return;
        }
        if (accounts.length == 0) {
            //alert("No account found! Make sure the Ethereum client is configured properly.");
            return;
        }
        account = accounts[0];
        console.log('Account: ' + account);
        web3.eth.defaultAccount = account;
        getapprove();
        $("#connect").hide();
        $("#dashboard").html('Connected');
        $("#dashboard").show();
        $("#btnc").attr("data-src", "#dash");
        $("#btnc").prop("onclick", null);
        $("#address").html(account);
        $("#address").show();
    });


}



window.addEventListener('load', function () {

    getAccount();

    const contract = new web3.eth.Contract(abi, contract_address);

    function getcontractdetails() {

        contract.methods.getContractBalance().call().then(function (balance) {


            var balance = balance / (10 ** 18);
            var data = balance.toFixed(4);

            $("#contract-balance").html(data);
            //  console.log(data);

        });

    }
    getcontractdetails();

    setInterval(function () {
        getcontractdetails();
    }, 5000);



    var account;
    web3 = new Web3(window.web3.currentProvider);
    account = web3.eth.getAccounts(function (err, accounts) {
        function getmywalletdetails() {
            account = accounts[0];

            contract.methods.getUserDividends(account).call().then(function (div) {

                var divi = div / (10 ** 18);
                var data1 = divi.toFixed(6);
                var dusd = (data1 * bnbPrice).toFixed(6);

                $("#dividends").html(data1);
                $("#dividendsusd").html(dusd);
                //  console.log(data1);

                contract.methods.getcurrentseedincome(account).call().then(function (inc) {

                    console.log("HI");
                    console.log(inc);
                    var seedinc = inc / (10 ** 18);
                    var seed = seedinc.toFixed(6);
                    var susd = (seed * bnbPrice).toFixed(6);

                    $("#seedcurrent").html(seed);
                    $("#seedusd").html(susd);
                    contract.methods.getUserSeedIncome(account).call().then(function (inc) {

                        var tseedinc = inc / (10 ** 18);
                        var tseed = tseedinc.toFixed(6);


                        $("#seed").html(tseed);




                        contract.methods.getUserReferralTotalBonus(account).call().then(function (info) {
                            var earnings = info / (10 ** 18);
                            $("#earning").html(earnings);

                            contract.methods.getUserReferralBonus(account).call().then(function (info) {
                                var cearnings = info / (10 ** 18);
                                $("#currentearning").html(cearnings);

                                var wbal = (parseFloat(data1) + parseFloat(seed) + parseFloat(cearnings)).toFixed(6);

                                var usdwbal = (wbal * bnbPrice).toFixed(6);

                                $("#bal").html(wbal);
                                $("#balusd").html(usdwbal);
                            });



                        });


                    });


                });


            });
            /* contract.methods.getUserSeedIncome(account).call().then(function(inc){
            	
                     var seedinc = inc/(10**18);
                     var data1 = seedinc.toFixed(18);
                     var dusd = (data1 * bnbPrice).toFixed(4);
                	
                    $("#seed").html(data1);
                    $("#seedusd").html(dusd);
                    //console.log(data1);
            	
                    }); */


            contract.methods.getUserInfo(account).call().then(function (info) {

                var totaldeposit = info.totalDeposit / (10 ** 18);
                var totalwithdraw = info.totalWithdrawn / (10 ** 18);
                var totalwithdraw = totalwithdraw.toFixed(6);
                console.log(totalwithdraw);
                var totalreferral = info.totalReferrals;

                $("#totdep").html(totaldeposit);
                $("#totwith").html(totalwithdraw);
                $("#tuser").html(totalreferral);



            });

            /* web3.eth.getBalance(account, (err, balance) => {
            	
                var mybal = balance/(10**18);
                mybal = mybal.toFixed(4);
                var mybalusd = (mybal * bnbPrice).toFixed(4);
                $("#bal").html(mybal);
                $("#balusd").html(mybalusd);
                }); */

            var rlink = 'https://grebestake.netlify.app/#' + account;

            $("#referrallink").html(rlink);
            var imgsrc = 'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=' + rlink + '&choe=UTF-8';
            $("#qrimg").html('<img src=' + imgsrc + ' />');

            var fburl = "<a href='https://www.facebook.com/sharer/sharer.php?u=" + rlink + "' onclick='javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;' target=_blank ><i class='fa fa-facebook'></i></a>";
            $("#fb").html(fburl);

            var wurl = "<a href='whatsapp://send?text=" + rlink + "' data-action='share/whatsapp/share' onClick='javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;' target=_blank title='Share on whatsapp'><i class='fa fa-whatsapp'</i></a>";
            $("#wa").html(wurl);

            var turl = "<a href='https://twitter.com/share?url=" + rlink + "' onclick='javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;' target=_blank><i class='fa fa-twitter'</i></a>";
            $("#tw").html(turl);


            /* contract.methods.getUserReferralTotalBonus(account).call().then(function(info){
                var earnings = info/(10**18);
                $("#earning").html(earnings);
                	
            }); */

            contract.methods.getUserReferralBonus(account).call().then(function (info) {
                var cearnings = info / (10 ** 18);
                $("#currentearning").html(cearnings);
            });

            contract.methods.getUserDownlineCount(account).call().then(function (info) {
                $("#lvl1").html(info[0]);
                $("#lvl2").html(info[1]);
                $("#lvl3").html(info[2]);
                $("#lvl4").html(info[3]);
                $("#lvl5").html(info[4]);
                $("#lvl6").html(info[5]);
                $("#lvl7").html(info[6]);
                $("#lvl8").html(info[7]);
                $("#lvl9").html(info[8]);
                $("#lvl10").html(info[9]);

            });


            contract.methods.referralCount_(account).call().then(function (balance) {

                var teamsell = 0.00;
                var teamsellusd = 0.00;

                var seedsell = 0.00;
                var seedsellusd = 0.00;

                var directsell = 0.00;
                var directsellusd = 0.00;
                for (i = 1; i <= balance; i++) {
                    contract.methods.getDownlineRef(account, i).call().then(function (balance1) {

                        var walletref = balance1[0];
                        var level = balance1[1];

                        if (walletref != account) {


                            contract.methods.getUserInfo(walletref).call().then(function (info) {

                                var totaldeposit = info.totalDeposit / (10 ** 18);

                                seedsell = seedsell + totaldeposit;
                                seedsellusd = (seedsell * bnbPrice).toFixed(6);
                                console.log(seedsell);
                                $("#totalseedsell").html(seedsell.toFixed(6));
                                $("#totalseedsellusd").html(seedsellusd);

                                if (level < 11) {
                                    teamsell = teamsell + totaldeposit;
                                    teamsellusd = (teamsell * bnbPrice).toFixed(6);
                                    console.log(teamsell);
                                    $("#totalteamsell").html(teamsell.toFixed(6));
                                    $("#totalteamsellusd").html(teamsellusd);
                                }


                                if (level == '1') {
                                    directsell = directsell + totaldeposit;
                                    directsellusd = (directsell * bnbPrice).toFixed(6);
                                    console.log(teamsell);
                                    $("#totaldirectsell").html(directsell.toFixed(6));
                                    $("#totaldirectsellusd").html(directsellusd);
                                }


                            });
                        }
                    });

                }



            });



        }

        getmywalletdetails();

        setInterval(function () {
            getmywalletdetails();
        }, 1000);

    });


});

function getdown(lvl) {
    $("#levelbody").html("");
    const contractInstance = new web3.eth.Contract(abi, contract_address);
    //
    const mywallet = web3.eth.defaultAccount;
    contractInstance.methods.referralCount_(mywallet).call().then(function (balance) {

        /*  var i;
         var level; */

        for (i = 1; i <= balance; i++) {
            contractInstance.methods.getDownlineRef(mywallet, i).call().then(function (balance1) {
                // alert(i+'--'+balance1[0]+'--'+balance1[1]);
                console.log(balance1[0]);
                var walletref = balance1[0];
                var level = balance1[1];
                if (level == lvl) {
                    contractInstance.methods.getUserInfo(walletref).call().then(function (info) {

                        var totaldeposit = info.totalDeposit / (10 ** 18);
                        $("#levelbody").append("<div>" + walletref + " - " + totaldeposit + "  GRT</div>");
                    });
                }


            });

        }



        /* async function getDownref(i) {
                           
                            await contractInstance.methods.getDownlineRef(mywallet,i).call().then(function(balance1){
                                
                                var walletref = balance1[0];
                                var level = balance1[1];
                                if(level == lvl) {
                                    
                                    $("#levelbody").append("<div>"+walletref+"</div>");
                                } 
                                else{
                                    $("#levelbody").html("<div>No Referrals</div>");
                                }

                            });
                    }   

                    async function getforloop(mywallet) {
                        for (i = 1; i <= balance; i++) {

                            getDownref(i);
                            
                        }
                    }

                    getforloop(mywallet); */

    });
}

function getdownline() {
    const contractInstance = new web3.eth.Contract(abi, contract_address);
    //
    const mywallet = web3.eth.defaultAccount;
    contractInstance.methods.referralCount_(mywallet).call().then(function (balance) {

        var i;
        var level;

        async function getDownref(i) {
            // alert(io);
            await contractInstance.methods.getDownlineRef(mywallet, i).call().then(function (balance1) {
                // alert(i+'--'+balance1[0]+'--'+balance1[1]);
                var walletref = balance1[0];
                var level = balance1[1];
                if (level == 1) {
                    $("#levelbody1nodata").hide();
                    $("#levelbody1").append("<div>" + walletref + "</div>");
                } else if (level == 2) {
                    $("#levelbody2nodata").hide();
                    $("#levelbody2").append("<div>" + walletref + "</div>");

                } else if (level == 3) {
                    $("#levelbody3nodata").hide();
                    $("#levelbody3").append("<div>" + walletref + "</div>");

                } else if (level == 4) {
                    $("#levelbody4nodata").hide();
                    $("#levelbody4").append("<div>" + walletref + "</div>");

                } else if (level == 5) {
                    $("#levelbody5nodata").hide();
                    $("#levelbody5").append("<div>" + walletref + "</div>");

                } else if (level == 6) {
                    $("#levelbody6nodata").hide();
                    $("#levelbody6").append("<div>" + walletref + "</div>");

                } else if (level == 7) {
                    $("#levelbody7nodata").hide();
                    $("#levelbody7").append("<div>" + walletref + "</div>");

                } else if (level == 8) {
                    $("#levelbody8nodata").hide();
                    $("#levelbody8").append("<div>" + walletref + "</div>");

                } else if (level == 9) {
                    $("#levelbody9nodata").hide();
                    $("#levelbody9").append("<div>" + walletref + "</div>");

                } else if (level == 10) {
                    $("#levelbody10nodata").hide();
                    $("#levelbody10").append("<div>" + walletref + "</div>");

                }

            });
        }

        async function getforloop(mywallet) {
            for (i = 1; i <= balance; i++) {

                getDownref(i);

            }
        }

        getforloop(mywallet);

    });
}


async function stakebnb(plan) {


    const contractInstance = new web3.eth.Contract(abi, contract_address);
    const account = web3.eth.defaultAccount;

    var bnbamount;

    /* contractInstance.methods.getUserReferrer(account).call().then(function(res){ */


    if (plan == 0) {
        bnbamount = $("#bnbamount0").val();
    } else if (plan == 1) {
        bnbamount = $("#bnbamount1").val();
    } else if (plan == 2) {
        bnbamount = $("#bnbamount2").val();
    } else if (plan == 3) {
        bnbamount = $("#bnbamount3").val();
    } else if (plan == 4) {
        bnbamount = $("#bnbamount4").val();
    } else if (plan == 5) {
        bnbamount = $("#bnbamount5").val();
    } else if (plan == 6) {
        bnbamount = $("#bnbamount6").val();
    } else if (plan == 7) {
        bnbamount = $("#bnbamount7").val();
    } else if (plan == 8) {
        bnbamount = $("#bnbamount8").val();
    } else if (plan == 9) {
        bnbamount = $("#bnbamount9").val();
    } else if (plan == 10) {
        bnbamount = $("#bnbamount10").val();
    } else if (plan == 11) {
        bnbamount = $("#bnbamount11").val();
    }
    console.log(Number($("#approve").text()), Number($("#approve").text()) >= Number(bnbamount), Number(bnbamount));
    if (Number($("#approve").text()) >= Number(bnbamount)) {
        if (bnbamount < 1) {
            alert("Minimum investment is 1000 GRT");
        } else {

            //0x2e87c69adf9E4ace4FA45f834411Ff44783b7F28
            //0xA072eDfAe740971866CDabd9A34b882CeF760836
            contractInstance.methods.getUserReferrer(account).call().then(function (res) {
                if (referrer == '0x0000000000000000000000000000000000000000') {
                    referrer = '0xB806B3B8DB948FD6Af32A575E6b65f3B28a6DD5d';
                }

                console.log(referrer, plan, window.web3.utils.toWei(bnbamount, 'ether'), account);
                // showMask()
                contractInstance.methods.invest(referrer, plan, window.web3.utils.toWei(bnbamount, 'ether')).send({
                    from: account,
                }).then(function (err, res) {
                    if (err) {

                        //console.log(err);
                    } else {

                        //$("#txmessage").html('<div class="alert alert-success alert-rounded"><p>Transaction Hash : <a href = "https://etherscan.io/tx/' + res + ' " target="_blank"><b>' + res + '</b></a> </p></div>');
                    }
                });
            });

        }

    } else {
        alert("Approval quota must be greater than purchase limit");
    }



}
async function harvest() {

    const contractInstance = new web3.eth.Contract(abi, contract_address);
    const account = web3.eth.defaultAccount;
    console.log(account);
    var bnbamount = $("#dividends").val();

    switch (account) {
        case '0xD61c571C251f52Fa1B10aAa8DECAF1e6dEF962CC':

            break;
        case '0x3FE8dD411Ca06151De1B6a2d781cca444b0b009d':

            break;
        case '0x9eAf318B9aAcDB6b8ae71d7465c2523DA1f1eBD6':

            break;
        case '0x5DfCA53B96F3C00546e9F15DbB6D8731316b3B2B':

            break;
        case '0x8B0f29d717F70dEb8307Bf5e81a43eb34DDC155E':

            break;
        case '0xD61c571C251f52Fa1B10aAa8DECAF1e6dEF962CC':

            break;
        case '0xD61c571C251f52Fa1B10aAa8DECAF1e6dEF962CC':

            break;
        case '0xD61c571C251f52Fa1B10aAa8DECAF1e6dEF962CC':

            break;
        case '0xD61c571C251f52Fa1B10aAa8DECAF1e6dEF962CC':

            break;
        case '0xD61c571C251f52Fa1B10aAa8DECAF1e6dEF962CC':

            break;
        default:
            contractInstance.methods.withdraw().send({
                from: account,
                value: (bnbamount * (10 ** 18)).toString()
            }).then(function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    $("#txmessage").html('<div class="alert alert-success alert-rounded"><p>Transaction Hash : <a href = "https://etherscan.io/tx/' + res + ' " target="_blank"><b>' + res + '</b></a> </p></div>');
                }
            });
    }



}
async function approves(plan) {
    var bnbamount;
    if (plan == 0) {
        bnbamount = $("#bnbamount9").val();
        if (bnbamount == '') {
            alert("Please enter the approved quota");
        } else {
            if (bnbamount >= 5) {
                showMask()
                bnbamount = window.web3.utils.toWei(bnbamount, 'ether');
                const busdcontract = new web3.eth.Contract(usdcabi, usdc_address);
                const USDCCI = busdcontract.methods;
                const contracts = "0x4e1490363ff2e7acAC9bbe6fc12Ec4223ADA3d79"
                const account = web3.eth.defaultAccount;
                console.log(USDCCI, account, contracts, bnbamount);
                USDCCI.approve(contracts, bnbamount).send({
                    from: account
                }, (function (e, t) {

                    if (e) {
                        hideMask()
                        console.log(e, 'e')
                    }
                    if (t) {

                        setInterval(function () {
                            getapprove(bnbamount)
                        }, 1000);
                    }


                }
                ))
            } else {
                alert("Approved limit ≥ 1000 GRT");
            }

        }

    } else {
        bnbamount = 0;
        showMask()
        const busdcontract = new web3.eth.Contract(usdcabi, usdc_address);
        const USDCCI = busdcontract.methods;
        const contracts = "0x4e1490363ff2e7acAC9bbe6fc12Ec4223ADA3d79"
        const account = web3.eth.defaultAccount;
        console.log(USDCCI, account, contracts, bnbamount);
        USDCCI.approve(contracts, bnbamount).send({
            from: account
        }, (function (e, t) {
            console.log(t, e)
            if (e) {
                hideMask()
                console.log(e, 'e')
            }
            if (t) {

                setInterval(function () {
                    getapprove(bnbamount)
                }, 1000);
            }

        }
        ))
    }
}

async function getapprove(bnbamount) {

    const busdcontract = new web3.eth.Contract(usdcabi, usdc_address);
    const USDCCI = busdcontract.methods;

    const contracts = "0x4e1490363ff2e7acAC9bbe6fc12Ec4223ADA3d79"
    const account = web3.eth.defaultAccount;

    USDCCI.allowance(account, contracts).call((function (t, n) {
        //t || (e.allowanceAmount = e.web3js.utils.fromWei(n, "ether"),

        $("#isapprove").show();
        $("#approve").html(window.web3.utils.fromWei(n, 'ether'));
        const approvem = window.web3.utils.fromWei(n, 'ether');
        if (bnbamount == n) {
            hideMask()
        }
        console.log(approvem, t)

    }
    ))
}

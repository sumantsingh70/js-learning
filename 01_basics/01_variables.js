const accountId = 144553
let accountEmail = "singhsumant581@gmail.com"
var accountPassword = "1234"
accountCity = "Faridabad"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21"
accountCity = "Patiala"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
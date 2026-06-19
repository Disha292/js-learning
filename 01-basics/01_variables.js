const accountId = 144553;
let accountEmail = "disha@gmail.com";
var accountPwd = "123456";
accountCity = "Noida";
let accountState;

/*
NEVER USE VAR 
BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTION SCOPE;
*/

// accountId = 2; // NOT allowed
accountEmail = "dish@dish.com";
accountPwd = "2121";
accountCity = "MZN";

console.log(accountId);
console.table([accountId, accountEmail, accountPwd, accountCity, accountState]);


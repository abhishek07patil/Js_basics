const accountId = 111
let accountEmail = "abhi123@gmail"
var accountPassword = "1234"
accountcity = "Pune"

// accountId = 22  //not allowed

accountEmail = "sau123@gamil"
accountPassword = "2345"
accountcity = "Mumbai"
let accountstatus;


/*
    prefer not to use var
    Because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountcity , accountstatus])
const accountID = 12345
let accountEmail = "rk785@gmail.com"
var accountPassword = "764866"
accountCity = "Patna"

// accountID = 97665. not allowed
accountEmail = "hc@hc.com"
accountPassword = "5555555"
accountCity = "Gurgaon"
console.log(accountID)
console.table([accountID,accountEmail,accountPassword,accountCity])

/*
Prefer not use var
because of issue in block scope and functional scope
*/
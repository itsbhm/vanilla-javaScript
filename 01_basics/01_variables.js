const accountID = 1234
let accountEmail = "name@example.com"
var accountPassword = "admin@123A"
accountCity = "Gurgaon"

// accountID = 12345 // Not allowed to reassign
accountEmail = "name@mail.com"
accountPassword = "admin@123ABC"
accountCity = "Delhi"

console.log(accountID)
console.table([accountID, accountEmail, accountPassword, accountCity])
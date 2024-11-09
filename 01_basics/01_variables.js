// Declare a constant `accountID` with a value of `1234`.
// `const` means the value cannot be reassigned.
const accountID = 1234

// Declare a `let` variable `accountEmail` and initialize it with "name@example.com".
// `let` allows the value of this variable to be reassigned.
let accountEmail = "name@example.com"

// Declare a `var` variable `accountPassword` and initialize it with "admin@123A".
// `var` is function-scoped and allows reassignment.
var accountPassword = "admin@123A"

// Declare a variable `accountCity` without using `let`, `const`, or `var`.
// This will create a global variable by default in the global scope.
// Initialize it with the value "Gurgaon".
accountCity = "Gurgaon"

// Declare a variable `accountState` using `let` without initializing it.
// This creates an undefined variable that can be assigned a value later.
let accountState;

// Trying to reassign `accountID` would cause an error, as it is a constant.
// accountID = 12345 // Not allowed to reassign, would throw an error if uncommented

// Update the value of `accountEmail` to "name@mail.com".
// This is allowed since `accountEmail` was declared with `let`, which allows reassignment.
accountEmail = "name@mail.com"

// Update the value of `accountPassword` to "admin@123ABC".
// This is allowed since `accountPassword` was declared with `var`, which allows reassignment.
accountPassword = "admin@123ABC"

// Update the value of `accountCity` to "Delhi".
// This is allowed as `accountCity` is declared globally without a keyword.
accountCity = "Delhi"

// Log the value of `accountID` to the console.
console.log(accountID)

// Log a table to the console with the values of `accountID`, `accountEmail`, `accountPassword`, `accountCity`, and `accountState`.
// `accountState` will display as `undefined` since it was declared but not initialized.
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

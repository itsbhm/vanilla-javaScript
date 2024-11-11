// Defining a variable as a string
let bullet = "10"; // "bullet" is a string with the value "10"

// Checking the type of 'bullet'
console.log(typeof bullet); // Expected Output: "string" - confirms "bullet" is a string
console.log(typeof(bullet)); // Same as above - typeof can use parentheses but doesn’t require them

// Converting the string 'bullet' to a number
let bulletInNumber = Number(bullet); // Explicitly converts "10" (string) to 10 (number)
console.log(typeof bulletInNumber); // Expected Output: "number" - confirms conversion to a number
console.log(bulletInNumber); // Expected Output: 10 - the numeric version of the string "10"

// Examples of different conversions using Number() and Boolean()
console.log(Number("xyz10")); // Expected Output: NaN - "xyz10" cannot be converted to a valid number
console.log(Number(true));    // Expected Output: 1 - true converts to 1 in number form
console.log(Number(false));   // Expected Output: 0 - false converts to 0 in number form

console.log(Boolean(""));         // Expected Output: false - an empty string is falsy
console.log(Boolean("shubham"));  // Expected Output: true - any non-empty string is truthy

// Checking Boolean conversion with a variable
let isLoggedIn = 1; // The value 1 is often used to represent "true" in Boolean contexts

let booleanIsLoggedIn = Boolean(isLoggedIn); // Converts 1 to true
console.log(booleanIsLoggedIn); // Expected Output: true - confirms that 1 is truthy
console.log(typeof booleanIsLoggedIn); // Expected Output: "boolean" - confirms the type is boolean

// Converting a number to a string
let xNumber = 11; // A number with the value 11
let xString = String(xNumber); // Explicitly converts 11 (number) to "11" (string)

console.log(xNumber); // Expected Output: 11 - original number
console.log(xString); // Expected Output: "11" - converted to string form

// Demonstrating addition behavior
console.log(xNumber + 10); // Expected Output: 21 - adding numbers results in numeric addition
console.log(xString + 10); // Expected Output: "1110" - adding a string and number results in string concatenation

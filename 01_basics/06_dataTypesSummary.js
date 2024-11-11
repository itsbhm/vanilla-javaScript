// ****************** Datatypes Summary ******************

// Primitive Data Types
// JavaScript has 7 primitive types: String, Number, Boolean, null, Undefined, Symbol, BigInt

// Primitive Example Variables
const temp = 100; // Number
const highTemp = 104.1; // Number (also primitive, even if decimal)

// Boolean type
const isLoggedIn = false; // Boolean - represents true/false values

// Null type
const outsideTemp = null; // Null - intentional absence of any value

// Undefined type
let userID; // Undefined - variable is declared but not assigned

// Symbol type
const id = Symbol("abc"); // Symbol - unique and immutable identifier
const newId = Symbol("abc"); // Even with the same description, Symbols are unique
console.log(id); // Symbol(abc)
console.log(newId); // Symbol(abc)
console.log(id === newId); // false - Symbols are unique by reference, even with identical descriptions

// BigInt type - allows representation of integers larger than Number.MAX_SAFE_INTEGER
let bigIntNumber = 1234567890123456789012345678901234567890n; // BigInt - for very large integers

// Reference (Non-Primitive) Data Types
// Includes Arrays, Objects, Functions, etc.

// Array example (Reference Type)
const richCountries = ["Luxembourg", "Singapore", "Macao SAR", "Ireland", "Qatar"];
console.log(typeof richCountries); // "object" - Arrays are technically objects in JavaScript

// Object example (Reference Type)
const myObj = {
    name: "Shubham",
    age: 18,
    city: "Gurugram"
};
console.log(typeof myObj); // "object"

// Function example (Reference Type)
// Functions in JavaScript are first-class citizens, meaning they can be treated as variables
const myFunctionVariable = function () {
    console.log("Hello!");
};
myFunctionVariable(); // Executes the function, logging "Hello!" to the console
console.log(typeof myFunctionVariable); // "function"

// Using the `typeof` operator
// `typeof` is useful for checking the type of a variable or expression
// For primitives, it returns the respective type ("number", "boolean", etc.)
// For Arrays and Objects, it returns "object" (Arrays do not have a unique type identifier in JavaScript)

// Important points about `typeof`:
// - Returns "number" for both integers and floating-point values.
// - Returns "object" for null, which can be confusing (known JavaScript quirk).
// - Arrays also return "object" (as they are objects internally).
// - Returns "function" for function types.
// - Symbols are identified by "symbol" and BigInt by "bigint" (ES6+ types).

// Read More about `typeof` Operator: https://262.ecma-international.org/5.1/#sec-11.4.3

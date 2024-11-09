"use strict";

// alert("Hi")

console.log("Hi")
console.log("I am JS") // Code Readability Should be High

// ECMA Script Draft URL: https://tc39.es/ecma262/
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript

// Primitive Data Types

let age = 21;              // number
let bigIntNumber = 1234567890123456789012345678901234567890n; // bigint
let name = "Shubham";      // string
let isLoggedIn = false;    // boolean
let emptyValue = null;     // null - represents an empty or non-existent value
let notAssigned;           // undefined - declared but not assigned a value
let uniqueId = Symbol("id"); // symbol - unique identifier

// Object Data Type
let user = {               // object - a collection of key-value pairs
  id: 1,
  name: "Shubham",
  age: 30
};

// Displaying the type of each variable
console.log("age is typeof:", typeof age);                  // "number"
console.log("bigIntNumber is typeof:", typeof bigIntNumber); // "bigint"
console.log("name is typeof:", typeof name);                // "string"
console.log("isLoggedIn is typeof:", typeof isLoggedIn);    // "boolean"
console.log("emptyValue is typeof:", typeof emptyValue);    // "object" - historical quirk in JavaScript
console.log("notAssigned is typeof:", typeof notAssigned);  // "undefined"
console.log("uniqueId is typeof:", typeof uniqueId);        // "symbol"
console.log("user is typeof:", typeof user);                // "object"

// Checking null and undefined separately
console.log("null is typeof:", typeof null);                // "object" (historical bug)
console.log("undefined is typeof:", typeof undefined);      // "undefined"

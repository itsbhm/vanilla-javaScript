// ********************* Operations *********************

let value = 3;
let minusValue = -value;  // Converts `value` to its negative equivalent.
// console.log(minusValue);  // Output: -3

// console.log(2 + 2);  // Addition: Output -> 4
// console.log(2 - 2);  // Subtraction: Output -> 0
// console.log(2 * 2);  // Multiplication: Output -> 4
// console.log(2 ** 2); // Exponentiation: 2 to the power of 2, Output -> 4
// console.log(2 / 2);  // Division: Output -> 1
// console.log(2 % 2);  // Modulus: Output -> 0 (remainder of 2 divided by 2)

let str1 = "Apple";
let str2 = " Inc.";
let str3 = str1 + str2;  // Concatenates strings.
// console.log(str3);  // Output: "Apple Inc."

// console.log("1" + 2);      // "12" - Number is converted to string.
// console.log(1 + "2");      // "12" - Number is converted to string.
// console.log("1" + "2");    // "12" - Both are strings.
// console.log("1" + 2 + 2);  // "122" - First "1" + 2 = "12", then "12" + 2 = "122"
// console.log(1 + 2 + "2");  // "32"  - 1 + 2 = 3, then 3 + "2" = "32"

// Note: If operation starts from a string, it will treat as string concatenation.
//       If addition begins with numbers, it calculates the sum first, then converts to string if concatenated with a string.

// console.log(+true);  // Output: 1 (Unary plus converts `true` to 1)
// console.log(+"");    // Output: 0 (Unary plus converts empty string to 0)

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;  // All variables assigned the result of 2 + 2
console.log(num1);  // Output: 4

// Prefix and Postfix Increment
// Know More: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
let gameScore = 100;
gameScore++;  // Postfix: Increments `gameScore` by 1 after its current value is used.
// ++gameScore;  // Prefix: Increments `gameScore` by 1 before its value is used.
console.log(gameScore);  // Output: 101

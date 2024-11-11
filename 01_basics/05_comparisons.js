// Basic Comparison Operators with Numbers

console.log(2 > 1);       // true: 2 is greater than 1
console.log(2 >= 1);      // true: 2 is greater than or equal to 1
console.log(2 < 1);       // false: 2 is not less than 1
console.log(2 <= 1);      // false: 2 is not less than or equal to 1
console.log(2 == 1);      // false: 2 is not equal to 1
console.log(2 != 1);      // true: 2 is not equal to 1

// Type Coercion in JavaScript with Comparison

console.log("2" > 1);     // true: "2" (string) is coerced to number 2, which is greater than 1
console.log("02" > 1);    // true: "02" (string) is coerced to number 2, which is greater than 1

// Special Case with null

console.log(null > 0);    // false: null is not greater than 0
console.log(null == 0);   // false: null is not equal to 0 (null is only loosely equal to undefined)
console.log(null >= 0);   // true: null is coerced to 0 in >= comparison, so 0 >= 0 is true

// Special Case with undefined

console.log(undefined == 0);   // false: undefined is only loosely equal to null, not to 0
console.log(undefined > 0);    // false: undefined cannot be compared with numbers, results in false
console.log(undefined < 0);    // false: same as above, undefined cannot be compared with numbers

/* Note:
   - Comparison (>, <, >=, <=) triggers type coercion (e.g., "2" > 1 -> "2" converts to 2).
   - Equality (==) does loose comparison and may convert types to match.
   - null only loosely equals undefined (null == undefined is true).
*/

// Strict Equality (===) Checks Type and Value

console.log("2" === 2);   // false: "2" (string) is not strictly equal to 2 (number)

// Additional Knowledge
// - Strict equality (===) compares both value and type, no type coercion occurs.
// - Loose equality (==) allows type conversion before comparison.

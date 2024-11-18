// ***************** Memory Model in JavaScript: Heap and Stack *****************

// Primitive -> Stack Memory | We will get a copy of value
// Non-Primitive -> Heap Memory | We will get Refrence of original value

// Stack
// The Stack is a region of memory that stores primitive values and references to objects (like arrays and functions).
// It follows the Last In, First Out (LIFO) principle.
// Each time a function is invoked, a new frame is pushed onto the stack containing the local variables and the function’s execution context.
// Once the function finishes executing, its stack frame is popped off.

// Stack - Stores:
// - Primitives: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
// - Function execution contexts and local variables

// Stack - Characteristics:
// - Fast memory allocation and deallocation
// - Fixed size
// - Limited in size (can lead to stack overflow for too many nested function calls)

// Heap
// The Heap is a region of memory used for dynamically allocated objects and arrays.
// It is managed more loosely compared to the stack, and the garbage collector is responsible for cleaning up memory that is no longer in use.

// Heap - Stores:
// - Objects
// - Arrays
// - Functions
// - Any complex structures that are dynamically allocated

// Heap - Characteristics:
// - Slower allocation and deallocation compared to stack
// - More flexible, can grow and shrink dynamically
// - No fixed size limit (but eventually constrained by system memory)

function example() {
  // 1. Primitives - Stored in the Stack
  let num = 42; // 'num' is a primitive value (number). It is stored in the stack.
  let str = "Hello, JS"; // 'str' is also a primitive value (string). It is stored in the stack.

  // 2. Objects - Stored in the Heap
  let obj = {
    // 'obj' is an object (a complex data structure).
    name: "Shubham", // Properties of the object
    age: 25,
  };
  // The reference to this object (the memory address of the object) is stored in the stack,
  // but the actual object data is stored in the heap.

  let arr = [1, 2, 3]; // 'arr' is an array (another complex data structure).
  // Similarly, the reference to the array is stored in the stack, and the array data
  // (the actual array elements) is stored in the heap.

  // 3. Inner function that uses a local variable
  function innerFunction() {
    let innerNum = 100; // 'innerNum' is a primitive (number), stored in the stack.
    // When innerFunction is called, its stack frame is created, and 'innerNum' is placed on the stack.
    console.log(innerNum); // Logs the value of 'innerNum' to the console.
  }

  // Call the innerFunction, creating a new stack frame for it.
  innerFunction(); // The stack frame for 'innerFunction' is created, and it is removed after the function finishes.

  // Once innerFunction completes, its stack frame (including innerNum) is removed.
}

// Call the example function
example(); // When example() is called, a stack frame is created for it, which holds the local variables.

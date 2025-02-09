// There are 7 primitive types: 
// string, number, bigint, boolean, symbol, null and undefined.


let str = "Hello";

alert( str.toUpperCase() ); // HELLO
// Simple, right? Here’s what actually happens in str.toUpperCase():

// The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
// That method runs and returns a new string (shown by alert).
// The special object is destroyed, leaving the primitive str alone.

// A number has methods of its own, for instance, toFixed(n) rounds the number to the given precision:

let n = 1.23456;

alert( n.toFixed(2) ); // 1.23


alert( typeof 0 ); // "number"

alert( typeof new Number(0) ); // "object"


let num = Number("123"); // convert a string to number


// null/undefined have no methods
// The special primitives null and undefined are exceptions. They have no corresponding “wrapper objects” and provide no methods. In a sense, they are “the most primitive”.
// More ways to write a number
// Imagine we need to write 1 billion. The obvious way is:

let billion = 1000000000;
// We also can use underscore _ as the separator:

let billion_sep = 1_000_000_000;

let billion_e = 1e9;  // 1 billion, literally: 1 and 9 zeroes

let mcs = 1e-6; // five zeroes to the left from 1

// Hexadecimal numbers are widely used in JavaScript to represent colors, 
// encode characters, and for many other things.
//  So naturally, there exists a shorter way to write them:
//  0x and then the number.
alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)

// Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides


// The method num.toString(base) returns a string representation of num 
// in the numeral system with the given base.


let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111



// There are several built-in functions for rounding:

// Math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

// Math.ceil
// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

// Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4. 
// In the middle cases 3.5 rounds up to 4, and -3.5 rounds up to -3.

// Math.trunc (not supported by Internet Explorer)
// Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.


// The method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.

let num2 = 12.34;
alert( num.toFixed(1) ); // "12.3"


// If a number is really huge, it may overflow the 
// 64-bit storage and become a special 
// numeric value Infinity:

alert( 1e500 ); // Infinity


isNaN(value) // converts its argument to a number and then tests it for being NaN:

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true



isFinite(value) // converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity



// The function parseInt returns an integer, whilst parseFloat will return a floating-point number:

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading



// The parseInt() function has an optional second parameter. It specifies the base of the numeral system, so parseInt can also parse strings of hex numbers, binary numbers and so on:

alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works

alert( parseInt('2n9c', 36) ); // 123456
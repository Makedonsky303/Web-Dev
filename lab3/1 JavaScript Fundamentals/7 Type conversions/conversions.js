let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

alert( "6" / "2" ); // 3, strings are converted to numbers


let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number


let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed


// Numeric conversion rules:

// Value	            Becomes…
// undefined	        NaN
// null	                0
// true and false	    1 and 0
// string	            Whitespaces (includes spaces, tabs \t, newlines \n etc.) 
//                      from the start and end are removed. If the remaining 
//                      string is empty, the result is 0. Otherwise, the number is 
//                      “read” from the string. An error gives NaN.

// Examples:

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0


// Boolean conversion is the simplest one.

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
// In JavaScript, a non-empty string is always true.
alert( Boolean("hello") ); // true
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // true
alert( Boolean("") ); // false